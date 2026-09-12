'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/admin-guard';
import { saveUploadedFile } from '@/lib/upload';
import { ContentType } from '@prisma/client';
import { slugify, publicPathForType } from '@/lib/content-helpers';

export async function saveContentItem(formData: FormData) {
  await requireAdminSession();

  const id = formData.get('id') as string | null;
  const type = formData.get('type') as ContentType;
  const titleEn = String(formData.get('titleEn') || '');
  const titleTa = String(formData.get('titleTa') || '');
  const titleSi = String(formData.get('titleSi') || '');
  const summaryEn = String(formData.get('summaryEn') || '');
  const summaryTa = String(formData.get('summaryTa') || '');
  const summarySi = String(formData.get('summarySi') || '');
  const descriptionEn = String(formData.get('descriptionEn') || '');
  const descriptionTa = String(formData.get('descriptionTa') || '');
  const descriptionSi = String(formData.get('descriptionSi') || '');
  const targetAmountRaw = formData.get('targetAmount');
  const raisedAmountRaw = formData.get('raisedAmount');
  const published = formData.get('published') === 'on';
  const featured = formData.get('featured') === 'on';
  const order = Number(formData.get('order') || 0);
  const mainImage = formData.get('mainImage') as File | null;
  let slug = String(formData.get('slug') || '').trim();

  if (!slug) slug = slugify(titleEn || titleTa || titleSi || 'item');

  let mainImageUrl: string | undefined;
  if (mainImage && mainImage instanceof File && mainImage.size > 0) {
    mainImageUrl = await saveUploadedFile(mainImage);
  }

  const data: any = {
    type,
    slug,
    titleEn,
    titleTa,
    titleSi,
    summaryEn,
    summaryTa,
    summarySi,
    descriptionEn,
    descriptionTa,
    descriptionSi,
    published,
    featured,
    order,
    targetAmount: targetAmountRaw ? Number(targetAmountRaw) : null,
    raisedAmount: raisedAmountRaw ? Number(raisedAmountRaw) : null
  };
  if (mainImageUrl) data.mainImageUrl = mainImageUrl;

  let itemId = id;
  if (id) {
    await prisma.contentItem.update({ where: { id }, data });
  } else {
    const created = await prisma.contentItem.create({ data });
    itemId = created.id;
  }

  // Handle additional photos uploaded alongside the item
  const extraPhotos = formData.getAll('extraPhotos') as File[];
  for (const file of extraPhotos) {
    if (file instanceof File && file.size > 0) {
      const url = await saveUploadedFile(file);
      await prisma.photo.create({
        data: { url, contentItemId: itemId as string }
      });
    }
  }

  revalidatePath(`/admin/content/${publicPathForType(type)}`);
  revalidatePath('/[locale]', 'layout');
  redirect(`/admin/content/${publicPathForType(type)}`);
}

export async function deleteContentItem(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id') as string;
  const type = formData.get('type') as ContentType;
  await prisma.contentItem.delete({ where: { id } });
  revalidatePath(`/admin/content/${publicPathForType(type)}`);
}

export async function deletePhoto(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id') as string;
  const itemId = formData.get('itemId') as string;
  const typePath = formData.get('typePath') as string;
  await prisma.photo.delete({ where: { id } });
  revalidatePath(`/admin/content/${typePath}/${itemId}`);
}
