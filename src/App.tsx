import { HomePage } from './pages/HomePage';
import { SiteHeader } from './components/SiteHeader';
import { siteIdentity } from './data/site-data';

export default function App() {
  return (
    <div className="site-root" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" className="site-main">
        <HomePage />
      </main>

      <footer className="site-footer" aria-label="Site footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">{siteIdentity.name}</p>
            <p className="site-footer__tagline">{siteIdentity.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
