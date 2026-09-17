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
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar on desktop, top bar + horizontal scroll nav on mobile/tablet */}
      <aside className="w-full lg:w-64 bg-greenDeep text-white flex-shrink-0 flex flex-col lg:min-h-screen">
        <div className="p-4 sm:p-5 border-b border-white/15 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="font-serif text-lg">UEDS Admin</div>
            <div className="text-xs text-white/60 mt-1 truncate">{session.user?.email}</div>
          </div>
          <div className="lg:hidden shrink-0">
            <SignOutButton />
          </div>
        </div>

        <nav className="lg:flex-1 p-3">
          <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible text-sm -mx-1 px-1 lg:mx-0 lg:px-0">
            {nav.map((n) => (
              <li key={n.href} className="shrink-0">
                <Link
                  href={n.href}
                  className="block whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block p-3 border-t border-white/15">
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
