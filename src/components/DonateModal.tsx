'use client';

import { useTranslations } from 'next-intl';

export type SiteSettingsData = {
  bankName: string;
  bankBranch: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankSwiftCode: string;
};

export default function DonateModal({
  open,
  onClose,
  settings
}: {
  open: boolean;
  onClose: () => void;
  settings: SiteSettingsData;
}) {
  const t = useTranslations('donate');

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-7 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-xl text-inkSoft"
          onClick={onClose}
          aria-label={t('close')}
        >
          ✕
        </button>
        <h3 className="font-serif text-2xl text-greenDeep mb-2">{t('title')}</h3>
        <p className="text-sm text-inkSoft mb-5">{t('intro')}</p>

        <dl className="space-y-3 text-sm">
          <Row label={t('bankName')} value={settings.bankName} />
          <Row label={t('branch')} value={settings.bankBranch} />
          <Row label={t('accountName')} value={settings.bankAccountName} />
          <Row label={t('accountNumber')} value={settings.bankAccountNumber} />
          <Row label={t('swift')} value={settings.bankSwiftCode} />
        </dl>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-line pb-2">
      <dt className="text-inkSoft">{label}</dt>
      <dd className="font-semibold text-ink text-right">{value || '—'}</dd>
    </div>
  );
}
