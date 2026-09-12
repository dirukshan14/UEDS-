import { notFound } from 'next/navigation';
import { contentTypeFromPath, typeLabels } from '@/lib/admin-content-types';
import ContentForm from '@/components/admin/ContentForm';

export default function NewContentItemPage({ params }: { params: { typePath: string } }) {
  const type = contentTypeFromPath(params.typePath);
  if (!type) notFound();

  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Add to {typeLabels[params.typePath]}</h1>
      <ContentForm type={type} typePath={params.typePath} />
    </div>
  );
}
