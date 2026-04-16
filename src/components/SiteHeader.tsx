import { siteIdentity, siteNavLinks } from '../data/site-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label={`${siteIdentity.name} home`}>
          <span className="site-brand__name">{siteIdentity.name}</span>
          <span className="site-brand__tagline">{siteIdentity.tagline}</span>
        </a>

        <div className="site-nav-shell">
          <nav className="site-nav" aria-label="Primary">
            {siteNavLinks.map((link) => (
              <a key={link.id} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
