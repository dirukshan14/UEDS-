'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/admin-guard';
import { saveUploadedFile } from '@/lib/upload';
import { MemberGroup } from '@prisma/client';

export async function saveMember(formData: FormData) {
  await requireAdminSession();

  const id = formData.get('id') as string | null;
  const group = formData.get('group') as MemberGroup;
  const nameEn = String(formData.get('nameEn') || '');
  const nameTa = String(formData.get('nameTa') || '');
  const nameSi = String(formData.get('nameSi') || '');
  const designationEn = String(formData.get('designationEn') || '');
  const designationTa = String(formData.get('designationTa') || '');
  const designationSi = String(formData.get('designationSi') || '');
  const order = Number(formData.get('order') || 0);
  const photo = formData.get('photo') as File | null;

  let photoUrl: string | undefined;
  if (photo && photo instanceof File && photo.size > 0) {
    photoUrl = await saveUploadedFile(photo);
  }

  const data: any = {
    group,
    nameEn,
    nameTa,
    nameSi,
    designationEn,
    designationTa,
    designationSi,
    order
  };
  if (photoUrl) data.photoUrl = photoUrl;

  if (id) {
    await prisma.member.update({ where: { id }, data });
  } else {
    await prisma.member.create({ data });
  }

  revalidatePath('/admin/members');
  revalidatePath('/[locale]/about', 'page');
  redirect('/admin/members');
}

export async function deleteMember(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id') as string;
  await prisma.member.delete({ where: { id } });
  revalidatePath('/admin/members');
  revalidatePath('/[locale]/about', 'page');
}
