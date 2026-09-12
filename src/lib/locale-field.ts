type LocaleSuffix = 'En' | 'Ta' | 'Si';

const suffixByLocale: Record<string, LocaleSuffix> = {
  en: 'En',
  ta: 'Ta',
  si: 'Si'
};

/**
 * Given an object with fields like `titleEn`, `titleTa`, `titleSi`, returns the value
 * for the requested locale, falling back to English if the localized value is empty.
 */
export function pickLocaleField<T extends Record<string, any>>(
  obj: T,
  base: string,
  locale: string
): string {
  const suffix = suffixByLocale[locale] || 'En';
  const value = obj[`${base}${suffix}`];
  if (value) return value;
  return obj[`${base}En`] || '';
}
