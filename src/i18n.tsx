import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { createSiteData, type SiteData } from './data/site-data';
import { defaultLocale, isLocale, localeMessages, localeOptions, type Locale } from './locales';

type SiteLocaleContextValue = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  localeOptions: Array<{ code: Locale; label: string }>;
  siteData: SiteData;
};

const localeStorageKey = 'site-locale';

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(localeStorageKey);
  if (storedLocale && isLocale(storedLocale)) {
    return storedLocale;
  }

  return defaultLocale;
}

export function SiteLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const siteData = createSiteData(localeMessages[locale]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
    document.title = siteData.seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', siteData.seo.description);
    }
  }, [locale, siteData.seo.description, siteData.seo.title]);

  return (
    <SiteLocaleContext.Provider
      value={{
        locale,
        setLocale,
        localeOptions,
        siteData,
      }}
    >
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale() {
  const context = useContext(SiteLocaleContext);

  if (!context) {
    throw new Error('useSiteLocale must be used within a SiteLocaleProvider.');
  }

  return context;
}
