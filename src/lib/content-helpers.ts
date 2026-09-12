import { ContentType } from '@prisma/client';

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

export function publicPathForType(type: ContentType) {
  switch (type) {
    case 'PROJECT_DONE':
      return 'projects-done';
    case 'PROJECT_NEEDED':
      return 'projects-needed';
    case 'NEWS':
      return 'news';
    case 'GALLERY':
      return 'gallery';
  }
}
