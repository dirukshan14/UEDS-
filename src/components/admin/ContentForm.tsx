import Image from 'next/image';
import { saveContentItem, deletePhoto } from '@/lib/actions/content';

export default function ContentForm({
  item,
  type,
  typePath
}: {
  item?: any;
  type: string;
  typePath: string;
}) {
  const isNeeded = type === 'PROJECT_NEEDED';

  return (
    <div className="max-w-2xl">
      <form action={saveContentItem} encType="multipart/form-data" className="space-y-6">
        {item && <input type="hidden" name="id" value={item.id} />}
        <input type="hidden" name="type" value={type} />

        <div>
          <label className="text-sm font-medium block mb-1">URL slug (optional, auto-generated if blank)</label>
          <input name="slug" defaultValue={item?.slug} className="w-full border border-line rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Main image</label>
          {item?.mainImageUrl && (
            <div className="relative w-40 aspect-[4/3] rounded-lg overflow-hidden ph mb-2">
              <Image src={item.mainImageUrl} alt="" fill className="object-cover" />
            </div>
          )}
          <input type="file" name="mainImage" accept="image/*" />
        </div>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Title</legend>
          <Field label="English" name="titleEn" defaultValue={item?.titleEn} required />
          <Field label="Tamil" name="titleTa" defaultValue={item?.titleTa} />
          <Field label="Sinhala" name="titleSi" defaultValue={item?.titleSi} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Short summary (used on listing cards)</legend>
          <Field label="English" name="summaryEn" defaultValue={item?.summaryEn} />
          <Field label="Tamil" name="summaryTa" defaultValue={item?.summaryTa} />
          <Field label="Sinhala" name="summarySi" defaultValue={item?.summarySi} />
        </fieldset>

        <fieldset className="border border-line rounded-lg p-4">
          <legend className="text-sm font-medium px-1">Full description (shown on detail page)</legend>
          <TextAreaField label="English" name="descriptionEn" defaultValue={item?.descriptionEn} />
          <TextAreaField label="Tamil" name="descriptionTa" defaultValue={item?.descriptionTa} />
          <TextAreaField label="Sinhala" name="descriptionSi" defaultValue={item?.descriptionSi} />
        </fieldset>

        {isNeeded && (
          <fieldset className="border border-line rounded-lg p-4">
            <legend className="text-sm font-medium px-1">Funding progress</legend>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-inkSoft block mb-1">Target amount (Rs.)</label>
                <input type="number" name="targetAmount" defaultValue={item?.targetAmount ?? ''} className="w-full border border-line rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="text-xs text-inkSoft block mb-1">Raised amount (Rs.)</label>
                <input type="number" name="raisedAmount" defaultValue={item?.raisedAmount ?? ''} className="w-full border border-line rounded-lg px-3 py-2" />
              </div>
            </div>
          </fieldset>
        )}

        <div>
          <label className="text-sm font-medium block mb-1">Add more photos</label>
          <input type="file" name="extraPhotos" accept="image/*" multiple />
        </div>

        <div className="flex gap-6 items-center">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="published" defaultChecked={item?.published ?? true} /> Published
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" defaultChecked={item?.featured ?? false} /> Featured on home page
          </label>
          <div>
            <label className="text-xs text-inkSoft block mb-1">Order</label>
            <input type="number" name="order" defaultValue={item?.order ?? 0} className="w-24 border border-line rounded-lg px-2 py-1" />
          </div>
        </div>

        <button type="submit" className="btn-donate">Save</button>
      </form>

      {item?.photos?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg mb-4">Existing photos</h2>
          <div className="grid grid-cols-3 gap-4">
            {item.photos.map((p: any) => (
              <div key={p.id} className="relative">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden ph">
                  <Image src={p.url} alt="" fill className="object-cover" />
                </div>
                <form action={deletePhoto} className="mt-1">
                  <input type="hidden" name="id" value={p.id} />
                  <input type="hidden" name="itemId" value={item.id} />
                  <input type="hidden" name="typePath" value={typePath} />
                  <button type="submit" className="text-xs text-maroon">Remove</button>
                </form>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, name, defaultValue, required }: { label: string; name: string; defaultValue?: string; required?: boolean }) {
  return (
    <div className="mb-3">
      <label className="text-xs text-inkSoft block mb-1">{label}</label>
      <input name={name} defaultValue={defaultValue} required={required} className="w-full border border-line rounded-lg px-3 py-2" />
    </div>
  );
}

function TextAreaField({ label, name, defaultValue }: { label: string; name: string; defaultValue?: string }) {
  return (
    <div className="mb-3">
      <label className="text-xs text-inkSoft block mb-1">{label}</label>
      <textarea name={name} defaultValue={defaultValue} rows={4} className="w-full border border-line rounded-lg px-3 py-2" />
    </div>
  );
}
