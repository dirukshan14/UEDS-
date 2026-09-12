import { getServerT } from '@/lib/server-i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getItemBySlug } from '@/lib/content';
import { ContentType } from '@prisma/client';
import ItemDetail from '@/components/ItemDetail';

export default async function NewsDetailPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const t = getServerT(locale, 'projects');
  const item = await getItemBySlug(ContentType.NEWS, slug);
  if (!item) notFound();

  return (
    <div className="wrap py-16">
      <Link href={`/${locale}/news`} className="text-sm text-gold mb-6 inline-block">
        ← {t('backToList')}
      </Link>
      <ItemDetail item={item} locale={locale} />
    </div>
  );
}
