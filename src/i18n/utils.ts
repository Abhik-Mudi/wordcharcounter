import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';
import { pt } from './pt';
import { nl } from './nl';

export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  nl: 'Nederlands',
};

export const defaultLang = 'en';

const translations = {
  en,
  de,
  fr,
  es,
  pt,
  nl,
};

export function useTranslations(lang: string) {
  const currentLang = (lang in translations ? lang : defaultLang) as keyof typeof translations;
  return function t(key: keyof typeof en): string {
    return translations[currentLang][key] || translations[defaultLang][key] || (key as string);
  };
}
