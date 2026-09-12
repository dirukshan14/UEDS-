import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ContentType } from '@prisma/client';

export default async function AdminDashboard() {
  const [board, committee, done, needed, news, gallery, messages] = await Promise.all([
    prisma.member.count({ where: { group: 'BOARD' } }),
    prisma.member.count({ where: { group: 'COMMITTEE' } }),
    prisma.contentItem.count({ where: { type: ContentType.PROJECT_DONE } }),
    prisma.contentItem.count({ where: { type: ContentType.PROJECT_NEEDED } }),
    prisma.contentItem.count({ where: { type: ContentType.NEWS } }),
    prisma.contentItem.count({ where: { type: ContentType.GALLERY } }),
    prisma.contactMessage.count()
  ]);

  const cards = [
    { label: 'Board members', value: board, href: '/admin/members' },
    { label: 'Committee members', value: committee, href: '/admin/members' },
    { label: 'Projects done', value: done, href: '/admin/content/projects-done' },
    { label: 'Projects needed', value: needed, href: '/admin/content/projects-needed' },
    { label: 'News items', value: news, href: '/admin/content/news' },
    { label: 'Gallery items', value: gallery, href: '/admin/content/gallery' },
    { label: 'Contact messages', value: messages, href: '/admin/messages' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-serif text-greenDeep mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="bg-white border border-line rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="text-3xl font-serif text-greenDeep">{c.value}</div>
            <div className="text-sm text-inkSoft mt-1">{c.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
