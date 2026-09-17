import { getServerT } from '@/lib/server-i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getItemBySlug } from '@/lib/content';
import { ContentType } from '@prisma/client';
import ItemDetail from '@/components/ItemDetail';

export default async function GalleryDetailPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const t = getServerT(locale, 'gallery');
  const item = await getItemBySlug(ContentType.GALLERY, slug);
  if (!item) notFound();

  return (
    <div className="wrap py-10 sm:py-16">
      <Link href={`/${locale}/gallery`} className="text-sm text-gold mb-6 inline-block">
        ← Back
      </Link>
      <ItemDetail item={item} locale={locale} />
    </div>
  );
}
