import { getServerT } from '@/lib/server-i18n';
import { getItemsByType } from '@/lib/content';
import { ContentType } from '@prisma/client';
import ItemCard from '@/components/ItemCard';

export default async function ProjectsNeededPage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'projects');
  const items = await getItemsByType(ContentType.PROJECT_NEEDED);

  return (
    <div className="wrap py-16">
      <h1 className="text-3xl mb-10">{t('neededTitle')}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            locale={locale}
            href={`/${locale}/projects-needed/${item.slug}`}
            raisedLabel={t('raised')}
            targetLabel={t('target')}
          />
        ))}
      </div>
      {items.length === 0 && <p className="text-inkSoft">No open funding needs right now.</p>}
    </div>
  );
}
