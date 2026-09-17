import Link from 'next/link';
import Image from 'next/image';
import { getServerT } from '@/lib/server-i18n';
import { prisma } from '@/lib/prisma';
import { pickLocaleField } from '@/lib/locale-field';

export default async function Footer({ locale }: { locale: string }) {
  const t = getServerT(locale, 'footer');
  const nav = getServerT(locale, 'nav');
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });

  const orgName = settings
    ? pickLocaleField(settings, 'orgName', locale)
    : 'Upcountry Education Development Society';

  const address = settings ? pickLocaleField(settings, 'address', locale) : '';

  const exploreLinks = [
    { href: `/${locale}/about`, label: nav('about') },
    { href: `/${locale}/projects-done`, label: nav('projectsDone') },
    { href: `/${locale}/news`, label: nav('news') },
    { href: `/${locale}/gallery`, label: nav('gallery') }
  ];

  const involvedLinks = [
    { href: `/${locale}/contact`, label: t('contact') },
    { href: `/${locale}/contact`, label: t('volunteer') },
    { href: `/${locale}/contact`, label: t('partner') }
  ];

  return (
    <footer className="bg-greenDeep text-paper mt-16">
      <div className="wrap py-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 text-sm">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3">
            <span className="relative shrink-0" style={{ width: 44, height: 54 }}>
              <Image src="/images/brand/logo-emblem.png" alt="UEDS logo" fill className="object-contain" sizes="44px" />
            </span>
            <span className="font-serif text-lg text-white leading-tight">UEDS</span>
          </div>
          <p className="text-white/70 mt-4 leading-relaxed">{orgName}</p>
          {address && <p className="text-white/50 text-xs mt-3">{address}</p>}
          <p className="text-white/50 text-xs mt-3">
            {t('regNumber')} {settings?.regNumber || 'XXXXX'}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h5 className="font-semibold mb-4 text-white tracking-wide text-xs uppercase">{t('explore')}</h5>
          <ul className="space-y-2.5 text-white/70 list-none m-0 p-0">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get involved */}
        <div>
          <h5 className="font-semibold mb-4 text-white tracking-wide text-xs uppercase">{t('getInvolved')}</h5>
          <ul className="space-y-2.5 text-white/70 list-none m-0 p-0">
            {involvedLinks.map((l, i) => (
              <li key={i}>
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-4 text-white tracking-wide text-xs uppercase">{t('contact')}</h5>
          <ul className="space-y-2.5 text-white/70 list-none m-0 p-0">
            {settings?.phone && <li>{settings.phone}</li>}
            {settings?.officeEmail && (
              <li className="break-all">
                <a href={`mailto:${settings.officeEmail}`} className="hover:text-gold transition-colors">
                  {settings.officeEmail}
                </a>
              </li>
            )}
          </ul>
          {(settings?.facebookUrl || settings?.youtubeUrl) && (
            <div className="flex gap-3 mt-4">
              {settings?.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-greenDeep transition-colors text-xs font-semibold"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {settings?.youtubeUrl && (
                <a
                  href={settings.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-greenDeep transition-colors text-xs font-semibold"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} {orgName}. {t('rights')}
          </span>
        </div>
      </div>
    </footer>
  );
}
