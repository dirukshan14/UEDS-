import { ContentType } from '@prisma/client';

export const typePathMap: Record<string, ContentType> = {
  'projects-done': ContentType.PROJECT_DONE,
  'projects-needed': ContentType.PROJECT_NEEDED,
  news: ContentType.NEWS,
  gallery: ContentType.GALLERY
};

export const typeLabels: Record<string, string> = {
  'projects-done': 'Projects Done',
  'projects-needed': 'Projects Needed',
  news: 'News & Media',
  gallery: 'Gallery'
};

export function contentTypeFromPath(typePath: string): ContentType | null {
  return typePathMap[typePath] || null;
}
