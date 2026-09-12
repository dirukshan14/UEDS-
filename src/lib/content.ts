import { prisma } from '@/lib/prisma';
import { ContentType } from '@prisma/client';

export function getItemsByType(type: ContentType) {
  return prisma.contentItem.findMany({
    where: { type, published: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
  });
}

export function getItemBySlug(type: ContentType, slug: string) {
  return prisma.contentItem.findFirst({
    where: { type, slug, published: true },
    include: { photos: { orderBy: { order: 'asc' } } }
  });
}
