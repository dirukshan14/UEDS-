import Link from 'next/link';
import Image from 'next/image';
import { pickLocaleField } from '@/lib/locale-field';

export default function ItemCard({
  item,
  locale,
  href,
  raisedLabel,
  targetLabel
}: {
  item: any;
  locale: string;
  href: string;
  raisedLabel?: string;
  targetLabel?: string;
}) {
  const title = pickLocaleField(item, 'title', locale);
  const summary = pickLocaleField(item, 'summary', locale);
  const progress =
    item.targetAmount && item.targetAmount > 0
      ? Math.min(100, Math.round(((item.raisedAmount || 0) / item.targetAmount) * 100))
      : null;

  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden border border-line bg-white hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] ph">
        {item.mainImageUrl && (
          <Image
            src={item.mainImageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-serif text-greenDeep group-hover:text-gold transition-colors">
          {title}
        </h3>
        {summary && <p className="text-sm text-inkSoft mt-1 line-clamp-2">{summary}</p>}

        {progress !== null && (
          <div className="mt-3">
            <div className="h-2 rounded-full bg-paperDim overflow-hidden">
              <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between text-xs text-inkSoft mt-1">
              <span>
                {raisedLabel}: Rs. {(item.raisedAmount || 0).toLocaleString()}
              </span>
              <span>
                {targetLabel}: Rs. {(item.targetAmount || 0).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
