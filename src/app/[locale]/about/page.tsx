import { getServerT } from '@/lib/server-i18n';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { pickLocaleField } from '@/lib/locale-field';

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'about');

  const [board, committee] = await Promise.all([
    prisma.member.findMany({ where: { group: 'BOARD' }, orderBy: { order: 'asc' } }),
    prisma.member.findMany({ where: { group: 'COMMITTEE' }, orderBy: { order: 'asc' } })
  ]);

  return (
    <div className="wrap py-16">
      <h1 className="text-3xl mb-10">{t('title')}</h1>

      <section className="mb-16">
        <h2 className="text-xl mb-6">{t('boardMembers')}</h2>
        <MemberGrid members={board} locale={locale} />
      </section>

      <section>
        <h2 className="text-xl mb-6">{t('committeeMembers')}</h2>
        <MemberGrid members={committee} locale={locale} />
      </section>
    </div>
  );
}

function MemberGrid({ members, locale }: { members: any[]; locale: string }) {
  if (members.length === 0) {
    return <p className="text-inkSoft text-sm">No members added yet.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((m) => {
        const name = pickLocaleField(m, 'name', locale);
        const designation = pickLocaleField(m, 'designation', locale);
        return (
          <div key={m.id} className="bg-white rounded-xl border border-line overflow-hidden text-center">
            <div className="relative aspect-square ph">
              {m.photoUrl && <Image src={m.photoUrl} alt={name} fill className="object-cover" />}
            </div>
            <div className="p-4">
              <h3 className="font-serif text-greenDeep">{name}</h3>
              <p className="text-sm text-inkSoft mt-1">{designation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
