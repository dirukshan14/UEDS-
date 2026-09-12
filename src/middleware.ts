import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  // Skip /admin, /api, /_next, /uploads and files with an extension
  matcher: ['/((?!admin|api|_next|uploads|.*\\..*).*)']
};
