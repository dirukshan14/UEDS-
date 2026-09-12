import en from '@/messages/en.json';
import ta from '@/messages/ta.json';
import si from '@/messages/si.json';

type Messages = typeof en;

const messagesByLocale: Record<string, Messages> = { en, ta, si } as any;

/**
 * Returns the full messages object for a locale. Used to feed
 * NextIntlClientProvider (for client-side useTranslations/useLocale, which
 * work fine — the bug is only in the server-side cache()-based functions).
 */
export function getServerMessages(locale: string): Messages {
  return messagesByLocale[locale] || messagesByLocale.en;
}

/**
 * A plain, non-cached replacement for next-intl's `getTranslations()` for use
 * in Server Components. Supports the same `t('key')` call signature for a
 * given top-level namespace (e.g. 'home', 'about', 'projects').
 */
export function getServerT(locale: string, namespace: keyof Messages) {
  const messages = getServerMessages(locale);
  const bundle = (messages[namespace] || {}) as Record<string, string>;

  return function t(key: string): string {
    return bundle[key] ?? key;
  };
}
