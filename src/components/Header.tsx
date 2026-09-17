'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line shadow-sm">
        <div className="wrap flex items-center justify-between h-20 gap-3 sm:gap-6">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="relative w-10 h-12 sm:w-12 sm:h-14 shrink-0">
              <Image
                src="/images/brand/logo-emblem.png"
                alt="UEDS logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </span>
            <span className="font-serif text-lg sm:text-xl text-greenDeep leading-tight min-w-0 truncate">
              UEDS
              <small className="hidden sm:block font-sans text-[11px] text-inkSoft font-medium tracking-wide truncate">
                Upcountry Education Development Society
              </small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[14.5px] font-medium list-none m-0 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`inline-block py-1 border-b-2 ${
                      pathname === l.href ? 'border-gold text-greenDeep' : 'border-transparent'
                    } hover:border-gold hover:text-greenDeep transition-colors`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <button className="btn-donate hidden sm:inline-block" onClick={() => setDonateOpen(true)}>
              {t('donate')}
            </button>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-line text-xl leading-none text-greenDeep"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-line bg-paper">
            <ul className="flex flex-col p-4 gap-1 text-[15px] font-medium list-none m-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg ${
                      pathname === l.href ? 'bg-paperDim text-greenDeep' : 'text-ink'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="sm:hidden pt-2">
                <button
                  className="btn-donate w-full text-center"
                  onClick={() => {
                    setMenuOpen(false);
                    setDonateOpen(true);
                  }}
                >
                  {t('donate')}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} settings={settings} />
    </>
  );
}
