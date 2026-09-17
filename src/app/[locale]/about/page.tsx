import { getServerT } from '@/lib/server-i18n';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { pickLocaleField } from '@/lib/locale-field';
import { aboutStory } from '@/content/about-story';

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'about');
  const story = aboutStory[(locale as 'en' | 'ta' | 'si') in aboutStory ? (locale as 'en' | 'ta' | 'si') : 'en'];

  const [board, committee] = await Promise.all([
    prisma.member.findMany({ where: { group: 'BOARD' }, orderBy: { order: 'asc' } }),
    prisma.member.findMany({ where: { group: 'COMMITTEE' }, orderBy: { order: 'asc' } })
  ]);

  return (
    <div>
      {/* Our story */}
      <div className="wrap py-10 sm:py-16">
        <h1 className="text-3xl mb-10">{t('title')}</h1>

        <div className="max-w-3xl">
          <h2 className="text-2xl mb-6">{story.title}</h2>

          <div className="space-y-5 text-inkSoft leading-relaxed">
            {story.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {story.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h3 className="text-lg text-greenDeep mb-3">{section.heading}</h3>
                )}
                <div className="space-y-4 text-inkSoft leading-relaxed">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board & Committee members — shown separately below the organisation's story */}
      <div className="bg-paperDim border-t border-line">
        <div className="wrap py-10 sm:py-16">
          <h2 className="text-2xl mb-10">{t('ourPeople')}</h2>

          <section className="mb-16">
            <h3 className="text-xl mb-6">{t('boardMembers')}</h3>
            <MemberGrid members={board} locale={locale} noMembersLabel={t('noMembers')} />
          </section>

          <section>
            <h3 className="text-xl mb-6">{t('committeeMembers')}</h3>
            <MemberGrid members={committee} locale={locale} noMembersLabel={t('noMembers')} />
          </section>
        </div>
      </div>
    </div>
  );
}

function MemberGrid({
  members,
  locale,
  noMembersLabel
}: {
  members: any[];
  locale: string;
  noMembersLabel: string;
}) {
  if (members.length === 0) {
    return <p className="text-inkSoft text-sm">{noMembersLabel}</p>;
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
