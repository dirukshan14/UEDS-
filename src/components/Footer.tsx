import Link from "next/link";
import Image from "next/image";
import { getServerT } from "@/lib/server-i18n";
import { prisma } from "@/lib/prisma";
import { pickLocaleField } from "@/lib/locale-field";

export default async function Footer({ locale }: { locale: string }) {
  const t = getServerT(locale, "footer");
  const nav = getServerT(locale, "nav");
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" },
  });

  const orgName = settings
    ? pickLocaleField(settings, "orgName", locale)
    : "Upcountry Education Development Society";

  const address = settings ? pickLocaleField(settings, "address", locale) : "";

  const exploreLinks = [
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/projects-done`, label: nav("projectsDone") },
    { href: `/${locale}/news`, label: nav("news") },
    { href: `/${locale}/gallery`, label: nav("gallery") },
  ];

  const involvedLinks = [
    { href: `/${locale}/contact`, label: t("contact") },
    { href: `/${locale}/contact`, label: t("volunteer") },
    { href: `/${locale}/contact`, label: t("partner") },
  ];

  return (
    <footer className="bg-greenDeep text-paper mt-16 border-t-[6px] border-gold">
      <div className="wrap py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 lg:gap-10 text-sm">
        {/* Branding & Info */}
        <div className="pr-4 lg:pr-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{ width: 44, height: 54 }}
            >
              <Image
                src="/images/brand/logo-emblem.png"
                alt="UEDS logo"
                fill
                className="object-contain"
                sizes="44px"
              />
            </span>
            <span className="font-serif text-xl tracking-wide text-white leading-tight">
              UEDS
            </span>
          </Link>
          <p className="text-white/80 mt-6 leading-relaxed font-medium">
            {orgName}
          </p>

          {address && (
            <p className="text-white/60 text-sm mt-4 leading-relaxed whitespace-pre-line">
              {address}
            </p>
          )}
          <p className="inline-block px-3 py-1.5 mt-5 bg-white/10 rounded-md text-white/70 text-xs tracking-wider">
            {t("regNumber")}{" "}
            <span className="font-semibold text-white">
              {settings?.regNumber || "XXXXX"}
            </span>
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h5 className="font-bold mb-6 text-white tracking-widest text-xs uppercase opacity-90">
            {t("explore")}
          </h5>
          <ul className="space-y-3.5 text-white/70 list-none m-0 p-0">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="inline-block hover:text-gold hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved Links */}
        <div>
          <h5 className="font-bold mb-6 text-white tracking-widest text-xs uppercase opacity-90">
            {t("getInvolved")}
          </h5>
          <ul className="space-y-3.5 text-white/70 list-none m-0 p-0">
            {involvedLinks.map((l, i) => (
              <li key={i}>
                <Link
                  href={l.href}
                  className="inline-block hover:text-gold hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h5 className="font-bold mb-6 text-white tracking-widest text-xs uppercase opacity-90">
            {t("contact")}
          </h5>
          <ul className="space-y-3.5 text-white/70 list-none m-0 p-0">
            {settings?.phone && (
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">✆</span>
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {settings.phone}
                </a>
              </li>
            )}
            {settings?.officeEmail && (
              <li className="flex items-start gap-2 break-all">
                <span className="text-gold mt-0.5">✉</span>
                <a
                  href={`mailto:${settings.officeEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {settings.officeEmail}
                </a>
              </li>
            )}
          </ul>

          {/* Social Icons */}
          {(settings?.facebookUrl || settings?.youtubeUrl) && (
            <div className="flex gap-3 mt-8">
              {settings?.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:border-gold hover:text-greenDeep transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
              {settings?.youtubeUrl && (
                <a
                  href={settings.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:border-gold hover:text-greenDeep transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} {orgName}. {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
