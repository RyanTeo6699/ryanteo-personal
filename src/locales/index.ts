import en from './en';
import ja from './ja';
import zhSG from './zh-SG';
import type { Locale, LocaleMessages } from './types';

export type { Locale, LocaleMessages } from './types';

export const defaultLocale: Locale = 'en';

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'zh-SG', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export const localeMessages: Record<Locale, LocaleMessages> = {
  en,
  'zh-SG': zhSG,
  ja,
};

export function isLocale(value: string): value is Locale {
  return value in localeMessages;
}
