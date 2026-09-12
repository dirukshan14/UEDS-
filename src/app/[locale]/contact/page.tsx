import { getServerT } from '@/lib/server-i18n';
import { prisma } from '@/lib/prisma';
import { pickLocaleField } from '@/lib/locale-field';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = getServerT(locale, 'contact');
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });

  const address = settings ? pickLocaleField(settings, 'address', locale) : '';

  return (
    <div className="wrap py-16">
      <h1 className="text-3xl mb-10">{t('title')}</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <section>
            <h2 className="text-lg mb-3">{t('officeDetails')}</h2>
            <ul className="text-sm text-inkSoft space-y-1">
              <li>{address}</li>
              <li>{settings?.phone}</li>
              <li>{settings?.officeEmail}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg mb-3">{t('bankDetails')}</h2>
            <dl className="text-sm space-y-1">
              <Row label="Bank" value={settings?.bankName} />
              <Row label="Branch" value={settings?.bankBranch} />
              <Row label="Account name" value={settings?.bankAccountName} />
              <Row label="Account number" value={settings?.bankAccountNumber} />
              <Row label="SWIFT" value={settings?.bankSwiftCode} />
            </dl>
          </section>

          {settings?.mapEmbedUrl && (
            <section>
              <h2 className="text-lg mb-3">{t('location')}</h2>
              <div className="aspect-video rounded-xl overflow-hidden border border-line">
                <iframe src={settings.mapEmbedUrl} width="100%" height="100%" loading="lazy" />
              </div>
            </section>
          )}
        </div>

        <div className="bg-white border border-line rounded-xl p-8">
          <h2 className="text-lg mb-5">{t('formTitle')}</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="flex justify-between border-b border-line py-1.5">
      <dt className="text-inkSoft">{label}</dt>
      <dd className="font-medium">{value || '—'}</dd>
    </div>
  );
}
