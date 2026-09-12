import { getServerT } from '@/lib/server-i18n';
import { getItemsByType } from '@/lib/content';
import { ContentType } from '@prisma/client';
import ItemCard from '@/components/ItemCard';

export default async function ProjectsDonePage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'projects');
  const items = await getItemsByType(ContentType.PROJECT_DONE);

  return (
    <div className="wrap py-16">
      <h1 className="text-3xl mb-10">{t('doneTitle')}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} locale={locale} href={`/${locale}/projects-done/${item.slug}`} />
        ))}
      </div>
      {items.length === 0 && <p className="text-inkSoft">No completed projects yet.</p>}
    </div>
  );
}
