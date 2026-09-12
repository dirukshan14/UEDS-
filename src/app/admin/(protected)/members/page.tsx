import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { deleteMember } from '@/lib/actions/members';

export default async function AdminMembersPage() {
  const [board, committee] = await Promise.all([
    prisma.member.findMany({ where: { group: 'BOARD' }, orderBy: { order: 'asc' } }),
    prisma.member.findMany({ where: { group: 'COMMITTEE' }, orderBy: { order: 'asc' } })
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif text-greenDeep">Board & Committee Members</h1>
        <div className="flex gap-3">
          <Link href="/admin/members/new?group=BOARD" className="btn-donate" style={{ background: '#3c5d45' }}>
            + Add board member
          </Link>
          <Link href="/admin/members/new?group=COMMITTEE" className="btn-donate">
            + Add committee member
          </Link>
        </div>
      </div>

      <Section title="Board Members" members={board} />
      <Section title="Committee Members" members={committee} />
    </div>
  );
}

function Section({ title, members }: { title: string; members: any[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg mb-4">{title}</h2>
      {members.length === 0 ? (
        <p className="text-sm text-inkSoft">None added yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m) => (
            <div key={m.id} className="bg-white border border-line rounded-xl p-4 flex gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ph flex-shrink-0">
                {m.photoUrl && <Image src={m.photoUrl} alt={m.nameEn} fill className="object-cover" />}
              </div>
              <div className="flex-1">
                <div className="font-medium">{m.nameEn}</div>
                <div className="text-xs text-inkSoft">{m.designationEn}</div>
                <div className="flex gap-3 mt-2 text-xs">
                  <Link href={`/admin/members/${m.id}`} className="text-gold">Edit</Link>
                  <form action={deleteMember}>
                    <input type="hidden" name="id" value={m.id} />
                    <button type="submit" className="text-maroon">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
