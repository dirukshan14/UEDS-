import MemberForm from '@/components/admin/MemberForm';

export default function NewMemberPage({ searchParams }: { searchParams: { group?: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Add Member</h1>
      <MemberForm defaultGroup={searchParams.group} />
    </div>
  );
}
