'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/admin-guard';

export async function saveSettings(formData: FormData) {
  await requireAdminSession();

  const fields = [
    'orgNameEn', 'orgNameTa', 'orgNameSi',
    'addressEn', 'addressTa', 'addressSi',
    'phone', 'officeEmail', 'mapEmbedUrl',
    'bankName', 'bankBranch', 'bankAccountName', 'bankAccountNumber', 'bankSwiftCode',
    'facebookUrl', 'youtubeUrl', 'regNumber'
  ] as const;

  const data: Record<string, string> = {};
  for (const f of fields) {
    data[f] = String(formData.get(f) || '');
  }

  await prisma.siteSettings.upsert({
    where: { id: 'singleton' },
    update: data,
    create: { id: 'singleton', ...data }
  });

  revalidatePath('/admin/settings');
  revalidatePath('/[locale]', 'layout');
}

export async function deleteContactMessage(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id') as string;
  await prisma.contactMessage.delete({ where: { id } });
  revalidatePath('/admin/messages');
}
