import { getServerT } from '@/lib/server-i18n';
import { getItemsByType } from '@/lib/content';
import { ContentType } from '@prisma/client';
import ItemCard from '@/components/ItemCard';

export default async function NewsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'news');
  const items = await getItemsByType(ContentType.NEWS);

  return (
    <div className="wrap py-16">
      <h1 className="text-3xl mb-10">{t('title')}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} locale={locale} href={`/${locale}/news/${item.slug}`} />
        ))}
      </div>
      {items.length === 0 && <p className="text-inkSoft">No news items yet.</p>}
    </div>
  );
}
