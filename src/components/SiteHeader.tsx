import { siteIdentity, siteNavLinks } from '../data/site-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-lockup" href="#top">
          <span className="brand-lockup__title">{siteIdentity.name}</span>
          <span className="brand-lockup__detail">{siteIdentity.tagline}</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {siteNavLinks.map((link) => (
            <a key={link.id} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
