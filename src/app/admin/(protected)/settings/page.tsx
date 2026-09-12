import { prisma } from '@/lib/prisma';
import { saveSettings } from '@/lib/actions/settings';

export default async function AdminSettingsPage() {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Site Settings</h1>
      <form action={saveSettings} className="space-y-6">
        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Organisation name</legend>
          <Field label="English" name="orgNameEn" defaultValue={settings?.orgNameEn} />
          <Field label="Tamil" name="orgNameTa" defaultValue={settings?.orgNameTa} />
          <Field label="Sinhala" name="orgNameSi" defaultValue={settings?.orgNameSi} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Office address</legend>
          <Field label="English" name="addressEn" defaultValue={settings?.addressEn} />
          <Field label="Tamil" name="addressTa" defaultValue={settings?.addressTa} />
          <Field label="Sinhala" name="addressSi" defaultValue={settings?.addressSi} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Contact</legend>
          <Field label="Phone" name="phone" defaultValue={settings?.phone} />
          <Field label="Office email (receives contact form messages)" name="officeEmail" defaultValue={settings?.officeEmail} />
          <Field label="Google Maps embed URL" name="mapEmbedUrl" defaultValue={settings?.mapEmbedUrl} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Bank account details (shown on Donate & Contact)</legend>
          <Field label="Bank name" name="bankName" defaultValue={settings?.bankName} />
          <Field label="Branch" name="bankBranch" defaultValue={settings?.bankBranch} />
          <Field label="Account name" name="bankAccountName" defaultValue={settings?.bankAccountName} />
          <Field label="Account number" name="bankAccountNumber" defaultValue={settings?.bankAccountNumber} />
          <Field label="SWIFT code" name="bankSwiftCode" defaultValue={settings?.bankSwiftCode} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Other</legend>
          <Field label="Facebook URL" name="facebookUrl" defaultValue={settings?.facebookUrl} />
          <Field label="YouTube URL" name="youtubeUrl" defaultValue={settings?.youtubeUrl} />
          <Field label="NGO registration number" name="regNumber" defaultValue={settings?.regNumber} />
        </fieldset>

        <button type="submit" className="btn-donate">Save settings</button>
      </form>
    </div>
  );
}

function Field({ label, name, defaultValue }: { label: string; name: string; defaultValue?: string | null }) {
  return (
    <div className="mb-3">
      <label className="text-xs text-inkSoft block mb-1">{label}</label>
      <input name={name} defaultValue={defaultValue || ''} className="w-full border border-line rounded-lg px-3 py-2" />
    </div>
  );
}
