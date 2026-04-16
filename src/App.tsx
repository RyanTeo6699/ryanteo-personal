import { HomePage } from './pages/HomePage';
import { SiteHeader } from './components/SiteHeader';
import { useSiteLocale } from './i18n';

export default function App() {
  const { siteData } = useSiteLocale();

  return (
    <div className="site-root" id="top">
      <a className="skip-link" href="#main-content">
        {siteData.chrome.skipToContent}
      </a>

      <SiteHeader />

      <main id="main-content" className="site-main">
        <HomePage />
      </main>

      <footer className="site-footer" aria-label={siteData.chrome.footerAriaLabel}>
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">{siteData.siteIdentity.name}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
