import { prisma } from '@/lib/prisma';
import { deleteContactMessage } from '@/lib/actions/settings';

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Contact Messages</h1>
      {messages.length === 0 ? (
        <p className="text-sm text-inkSoft">No messages received yet.</p>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {messages.map((m) => (
            <div key={m.id} className="bg-white border border-line rounded-xl p-5">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <div className="font-medium">{m.name} &lt;{m.email}&gt;</div>
                  {m.phone && <div className="text-xs text-inkSoft">{m.phone}</div>}
                  <div className="text-xs text-inkSoft">{new Date(m.createdAt).toLocaleString()}</div>
                </div>
                <form action={deleteContactMessage}>
                  <input type="hidden" name="id" value={m.id} />
                  <button type="submit" className="text-xs text-maroon">Delete</button>
                </form>
              </div>
              {m.subject && <div className="text-sm font-medium mt-2">Subject: {m.subject}</div>}
              <p className="text-sm text-inkSoft mt-2 whitespace-pre-line">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
