import { getServerT } from '@/lib/server-i18n';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { ContentType } from '@prisma/client';
import { pickLocaleField } from '@/lib/locale-field';

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'home');

  const featured = await prisma.contentItem.findMany({
    where: { published: true, featured: true, type: { in: [ContentType.PROJECT_DONE, ContentType.PROJECT_NEEDED] } },
    orderBy: { createdAt: 'desc' },
    take: 3
  });

  const whatWeDoItems = [1, 2, 3, 4, 5, 6].map((n) => ({
    title: t(`item${n}Title`),
    body: t(`item${n}Body`)
  }));

  const communityPhotos = [
    { src: '/images/home/smiling-picker.jpg', alt: 'A tea plucker smiling while holding freshly picked tea leaves' },
    { src: '/images/home/community-portrait.jpg', alt: 'A tea estate worker carrying a basket among the tea bushes' },
    { src: '/images/home/flower-seller.jpg', alt: 'A man carrying baskets of flowers by bicycle' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[480px]">
        <Image
          src="/images/home/hero-tea-estate.jpg"
          alt="Misty tea plantations in the central highlands of Sri Lanka at sunrise"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="wrap absolute inset-0 flex flex-col justify-end pb-16 text-white">
          <span className="text-gold text-sm font-semibold mb-2 uppercase tracking-wide">
            {t('heroTag')}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl max-w-2xl text-white">
            {t('heroHeadline')}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-10 sm:py-16">
        <div className="wrap grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/images/home/tea-picker-portrait.jpg"
              alt="A tea plucker carrying a basket through the tea fields"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-white rounded-xl p-8 border border-line">
              <h2 className="text-xl mb-3">{t('visionTitle')}</h2>
              <p className="text-inkSoft">{t('visionBody')}</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-line">
              <h2 className="text-xl mb-3">{t('missionTitle')}</h2>
              <p className="text-inkSoft">{t('missionBody')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-10 sm:py-16 bg-paperDim">
        <div className="wrap">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl mb-2">{t('whatWeDo')}</h2>
            <p className="text-inkSoft">{t('whatWeDoSubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoItems.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-line">
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-inkSoft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community photo strip */}
      <section className="py-10 sm:py-16">
        <div className="wrap">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl mb-2">{t('communityHeading')}</h2>
            <p className="text-inkSoft">{t('communitySubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative py-10 sm:py-16 text-white overflow-hidden">
        <Image
          src="/images/home/community-portrait.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-greenDeep/90" />
        <div className="wrap relative">
          <p className="text-gold text-sm font-semibold mb-6 uppercase tracking-wide text-center">
            {t('impactHeading')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['1,240', t('impactStudents')],
              ['318', t('impactScholarships')],
              ['27', t('impactProjects')],
              ['9', t('impactDivisions')]
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-serif text-3xl text-gold">{num}</div>
                <div className="text-sm text-white/80 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="py-10 sm:py-16">
          <div className="wrap">
            <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
              <div className="max-w-xl">
                <h2 className="text-2xl mb-2">{t('featuredHeading')}</h2>
                <p className="text-inkSoft">{t('featuredSubtitle')}</p>
              </div>
              <Link href={`/${locale}/projects-done`} className="btn-donate" style={{ background: '#3c5d45' }}>
                {t('viewOurWork')}
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((item) => {
                const title = pickLocaleField(item, 'title', locale);
                const base = item.type === 'PROJECT_DONE' ? 'projects-done' : 'projects-needed';
                return (
                  <Link
                    key={item.id}
                    href={`/${locale}/${base}/${item.slug}`}
                    className="block rounded-xl overflow-hidden border border-line bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3] ph">
                      {item.mainImageUrl && (
                        <Image src={item.mainImageUrl} alt={title} fill className="object-cover" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-greenDeep">{title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
