import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { getServerMessages } from '@/lib/server-i18n';
import IntlProvider from '@/components/IntlProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'UEDS — Upcountry Education Development Society',
  description:
    "UEDS funds and builds education, scholarship and community-development programmes for Sri Lanka's upcountry tea-estate communities."
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  const messages = getServerMessages(locale);

  let settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });
  if (!settings) {
    // Sensible fallback so the site still renders before the DB is seeded.
    settings = {
      id: 'singleton',
      orgNameEn: 'Upcountry Education Development Society',
      orgNameTa: '',
      orgNameSi: '',
      addressEn: '',
      addressTa: '',
      addressSi: '',
      phone: '',
      officeEmail: '',
      mapEmbedUrl: '',
      bankName: '',
      bankBranch: '',
      bankAccountName: '',
      bankAccountNumber: '',
      bankSwiftCode: '',
      facebookUrl: '',
      youtubeUrl: '',
      regNumber: '',
      updatedAt: new Date()
    } as any;
  }

  return (
    <html lang={locale}>
      <body className="font-sans">
        <IntlProvider locale={locale} messages={messages}>
          <Header settings={settings!} />
          <main>{children}</main>
          <Footer locale={locale} />
        </IntlProvider>
      </body>
    </html>
  );
}
