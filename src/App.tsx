import { HomePage } from './pages/HomePage';
import { SiteHeader } from './components/SiteHeader';
import { siteIdentity } from './data/site-data';

export default function App() {
  return (
    <div className="system-app" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" className="site-main">
        <HomePage />

        <footer className="page-panel site-footer">
          <p>{siteIdentity.name} / Personal system</p>
          <p>{siteIdentity.tagline}</p>
        </footer>
      </main>
    </div>
  );
}
