import Image from 'next/image';
import { getServerT } from '@/lib/server-i18n';
import { pickLocaleField } from '@/lib/locale-field';

export default async function ItemDetail({ item, locale }: { item: any; locale: string }) {
  const t = getServerT(locale, 'projects');
  const title = pickLocaleField(item, 'title', locale);
  const description = pickLocaleField(item, 'description', locale) || pickLocaleField(item, 'summary', locale);

  const progress =
    item.targetAmount && item.targetAmount > 0
      ? Math.min(100, Math.round(((item.raisedAmount || 0) / item.targetAmount) * 100))
      : null;

  return (
    <article>
      <h1 className="text-3xl mb-6">{title}</h1>

      <div className="relative aspect-[16/9] ph rounded-xl overflow-hidden mb-6">
        {item.mainImageUrl && (
          <Image src={item.mainImageUrl} alt={title} fill className="object-cover" priority />
        )}
      </div>

      {progress !== null && (
        <div className="mb-8 max-w-md">
          <div className="h-3 rounded-full bg-paperDim overflow-hidden">
            <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between text-sm text-inkSoft mt-2">
            <span>{t('raised')}: Rs. {(item.raisedAmount || 0).toLocaleString()}</span>
            <span>{t('target')}: Rs. {(item.targetAmount || 0).toLocaleString()}</span>
          </div>
        </div>
      )}

      {description && (
        <div className="prose max-w-none text-inkSoft mb-10 whitespace-pre-line">{description}</div>
      )}

      {item.photos?.length > 0 && (
        <div>
          <h2 className="text-lg mb-4">{t('additionalPhotos')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.photos.map((p: any) => {
              const caption = pickLocaleField(p, 'caption', locale);
              return (
                <figure key={p.id} className="rounded-lg overflow-hidden border border-line">
                  <div className="relative aspect-[4/3] ph">
                    <Image src={p.url} alt={caption || title} fill className="object-cover" />
                  </div>
                  {caption && <figcaption className="text-xs text-inkSoft p-2">{caption}</figcaption>}
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}
