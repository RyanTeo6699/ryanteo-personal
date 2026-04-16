import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  themePreference: ThemePreference;
  setThemePreference: Dispatch<SetStateAction<ThemePreference>>;
  resolvedTheme: ResolvedTheme;
};

const themeStorageKey = 'site-theme-preference';
const darkModeMediaQuery = '(prefers-color-scheme: dark)';
const fallbackThemePreference: ThemePreference = 'system';

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia(darkModeMediaQuery).matches ? 'dark' : 'light';
}

function resolveTheme(themePreference: ThemePreference): ResolvedTheme {
  return themePreference === 'system' ? getSystemTheme() : themePreference;
}

function applyThemeToDocument(themePreference: ThemePreference) {
  const resolvedTheme = resolveTheme(themePreference);

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themePreference = themePreference;
  document.documentElement.style.colorScheme = resolvedTheme;

  return resolvedTheme;
}

function getInitialThemePreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return fallbackThemePreference;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (isThemePreference(storedTheme)) {
    return storedTheme;
  }

  return fallbackThemePreference;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreference] =
    useState<ThemePreference>(getInitialThemePreference);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(getInitialThemePreference()),
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(themeStorageKey, themePreference);

    const mediaQuery = window.matchMedia(darkModeMediaQuery);

    const syncTheme = () => {
      setResolvedTheme(applyThemeToDocument(themePreference));
    };

    syncTheme();
    mediaQuery.addEventListener('change', syncTheme);

    return () => {
      mediaQuery.removeEventListener('change', syncTheme);
    };
  }, [themePreference]);

  return (
    <ThemeContext.Provider
      value={{
        themePreference,
        setThemePreference,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
}
