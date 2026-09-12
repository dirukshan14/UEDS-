'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import DonateModal from './DonateModal';
import type { SiteSettingsData } from './DonateModal';

export default function Header({ settings }: { settings: SiteSettingsData }) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/projects-done`, label: t('projectsDone') },
    { href: `/${locale}/projects-needed`, label: t('projectsNeeded') },
    { href: `/${locale}/news`, label: t('news') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper border-b border-line">
        <div className="wrap flex items-center justify-between py-4 gap-4 flex-wrap">
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: 'conic-gradient(from 210deg,#1f3d2b,#c48a3e,#1f3d2b)' }}
            />
            <div className="font-serif text-lg text-greenDeep leading-tight">
              UEDS
              <small className="block font-sans text-[11px] text-inkSoft font-medium">
                Upcountry Education Development Society
              </small>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-6 text-[14.5px] font-medium list-none m-0 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`pb-1 border-b-2 ${
                      pathname === l.href ? 'border-gold' : 'border-transparent'
                    } hover:border-gold transition-colors`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button className="btn-donate" onClick={() => setDonateOpen(true)}>
              {t('donate')}
            </button>
            <button
              className="lg:hidden text-2xl leading-none"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-line bg-paper">
            <ul className="flex flex-col p-4 gap-3 text-sm font-medium list-none m-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} settings={settings} />
    </>
  );
}
