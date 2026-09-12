import Link from 'next/link';
import { getServerT } from '@/lib/server-i18n';
import { prisma } from '@/lib/prisma';
import { pickLocaleField } from '@/lib/locale-field';

export default async function Footer({ locale }: { locale: string }) {
  const t = getServerT(locale, 'footer');
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });

  const orgName = settings
    ? pickLocaleField(settings, 'orgName', locale)
    : 'Upcountry Education Development Society';

  return (
    <footer className="bg-greenDeep text-paper mt-16">
      <div className="wrap py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h5 className="font-serif text-lg mb-2 text-white">UEDS</h5>
          <p className="text-white/70">
            {orgName} — {t('regNumber')} {settings?.regNumber || 'XXXXX'}
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">{t('explore')}</h5>
          <ul className="space-y-1 text-white/70">
            <li><Link href={`/${locale}/about`}>About us</Link></li>
            <li><Link href={`/${locale}/projects-done`}>Our work</Link></li>
            <li><Link href={`/${locale}/news`}>News</Link></li>
            <li><Link href={`/${locale}/gallery`}>Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">{t('getInvolved')}</h5>
          <ul className="space-y-1 text-white/70">
            <li><Link href={`/${locale}/contact`}>{t('contact')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{t('volunteer')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{t('partner')}</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">{t('contact')}</h5>
          <ul className="space-y-1 text-white/70">
            <li>{settings?.phone}</li>
            <li>{settings?.officeEmail}</li>
            {settings?.facebookUrl && <li><a href={settings.facebookUrl} target="_blank">Facebook</a></li>}
            {settings?.youtubeUrl && <li><a href={settings.youtubeUrl} target="_blank">YouTube</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap py-4 flex justify-between text-xs text-white/60 flex-wrap gap-2">
          <span>© {new Date().getFullYear()} {orgName}. {t('rights')}</span>
        </div>
      </div>
    </footer>
  );
}
