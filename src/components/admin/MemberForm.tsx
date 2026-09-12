import { saveMember } from '@/lib/actions/members';

export default function MemberForm({ member, defaultGroup }: { member?: any; defaultGroup?: string }) {
  return (
    <form action={saveMember} encType="multipart/form-data" className="space-y-5 max-w-xl">
      {member && <input type="hidden" name="id" value={member.id} />}

      <div>
        <label className="text-sm font-medium block mb-1">Group</label>
        <select name="group" defaultValue={member?.group || defaultGroup || 'BOARD'} className="w-full border border-line rounded-lg px-3 py-2">
          <option value="BOARD">Board Member</option>
          <option value="COMMITTEE">Committee Member</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Photo</label>
        <input type="file" name="photo" accept="image/*" className="w-full" />
        {member?.photoUrl && <p className="text-xs text-inkSoft mt-1">Current photo is kept unless you upload a new one.</p>}
      </div>

      <fieldset className="border border-line rounded-lg p-4">
        <legend className="text-sm font-medium px-1">Name</legend>
        <Field label="English" name="nameEn" defaultValue={member?.nameEn} required />
        <Field label="Tamil" name="nameTa" defaultValue={member?.nameTa} />
        <Field label="Sinhala" name="nameSi" defaultValue={member?.nameSi} />
      </fieldset>

      <fieldset className="border border-line rounded-lg p-4">
        <legend className="text-sm font-medium px-1">Designation</legend>
        <Field label="English" name="designationEn" defaultValue={member?.designationEn} required />
        <Field label="Tamil" name="designationTa" defaultValue={member?.designationTa} />
        <Field label="Sinhala" name="designationSi" defaultValue={member?.designationSi} />
      </fieldset>

      <div>
        <label className="text-sm font-medium block mb-1">Display order</label>
        <input type="number" name="order" defaultValue={member?.order ?? 0} className="w-32 border border-line rounded-lg px-3 py-2" />
      </div>

      <button type="submit" className="btn-donate">Save</button>
    </form>
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
