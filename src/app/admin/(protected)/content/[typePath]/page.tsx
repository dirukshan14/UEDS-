import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { contentTypeFromPath, typeLabels } from '@/lib/admin-content-types';
import { deleteContentItem } from '@/lib/actions/content';

export default async function AdminContentListPage({ params }: { params: { typePath: string } }) {
  const type = contentTypeFromPath(params.typePath);
  if (!type) notFound();

  const items = await prisma.contentItem.findMany({
    where: { type },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif text-greenDeep">{typeLabels[params.typePath]}</h1>
        <Link href={`/admin/content/${params.typePath}/new`} className="btn-donate">
          + Add new
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-inkSoft">Nothing added yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-line rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] ph">
                {item.mainImageUrl && <Image src={item.mainImageUrl} alt={item.titleEn} fill className="object-cover" />}
                {!item.published && (
                  <span className="absolute top-2 left-2 bg-maroon text-white text-xs px-2 py-0.5 rounded-full">Draft</span>
                )}
              </div>
              <div className="p-4">
                <div className="font-medium">{item.titleEn}</div>
                <div className="text-xs text-inkSoft mt-1">/{item.slug}</div>
                <div className="flex gap-3 mt-3 text-xs">
                  <Link href={`/admin/content/${params.typePath}/${item.id}`} className="text-gold">Edit</Link>
                  <form action={deleteContentItem}>
                    <input type="hidden" name="id" value={item.id} />
                    <input type="hidden" name="type" value={type} />
                    <button type="submit" className="text-maroon">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
