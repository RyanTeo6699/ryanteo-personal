import { useSiteLocale } from '../i18n';

export function SiteHeader() {
  const { locale, setLocale, localeOptions, siteData } = useSiteLocale();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label={siteData.chrome.homeAriaLabel}>
          <span className="site-brand__name">{siteData.siteIdentity.name}</span>
        </a>

        <div className="site-header__controls">
          <div className="site-nav-shell">
            <nav className="site-nav" aria-label={siteData.chrome.primaryNavigationAriaLabel}>
              {siteData.siteNavLinks.map((link) => (
                <a key={link.id} className="nav-link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div
            className="language-switcher"
            role="group"
            aria-label={siteData.chrome.languageSwitcherAriaLabel}
          >
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className="language-switcher__button"
                data-active={locale === option.code}
                aria-pressed={locale === option.code}
                onClick={() => setLocale(option.code)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
