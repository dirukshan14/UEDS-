import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import MemberForm from '@/components/admin/MemberForm';

export default async function EditMemberPage({ params }: { params: { id: string } }) {
  const member = await prisma.member.findUnique({ where: { id: params.id } });
  if (!member) notFound();

  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Edit Member</h1>
      <MemberForm member={member} />
    </div>
  );
}
