import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { contentTypeFromPath, typeLabels } from '@/lib/admin-content-types';
import ContentForm from '@/components/admin/ContentForm';

export default async function EditContentItemPage({ params }: { params: { typePath: string; id: string } }) {
  const type = contentTypeFromPath(params.typePath);
  if (!type) notFound();

  const item = await prisma.contentItem.findUnique({
    where: { id: params.id },
    include: { photos: { orderBy: { order: 'asc' } } }
  });
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Edit — {typeLabels[params.typePath]}</h1>
      <ContentForm item={item} type={type} typePath={params.typePath} />
    </div>
  );
}
