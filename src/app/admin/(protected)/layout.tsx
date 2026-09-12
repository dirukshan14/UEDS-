import Link from 'next/link';
import { requireAdminSession } from '@/lib/admin-guard';
import SignOutButton from '../SignOutButton';

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdminSession();

  const nav = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/members', label: 'Board & Committee' },
    { href: '/admin/content/projects-done', label: 'Projects Done' },
    { href: '/admin/content/projects-needed', label: 'Projects Needed' },
    { href: '/admin/content/news', label: 'News & Media' },
    { href: '/admin/content/gallery', label: 'Gallery' },
    { href: '/admin/settings', label: 'Site Settings' },
    { href: '/admin/messages', label: 'Contact Messages' }
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-greenDeep text-white flex-shrink-0 flex flex-col">
        <div className="p-5 border-b border-white/15">
          <div className="font-serif text-lg">UEDS Admin</div>
          <div className="text-xs text-white/60 mt-1">{session.user?.email}</div>
        </div>
        <nav className="flex-1 p-3">
          <ul className="space-y-1 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block px-3 py-2 rounded-lg hover:bg-white/10">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-3 border-t border-white/15">
          <SignOutButton />
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
