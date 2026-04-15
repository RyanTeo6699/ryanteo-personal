import { NavLink } from 'react-router-dom';
import { pageDirectory, siteIdentity } from '../data/site-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand-lockup" to="/" end>
          <span className="brand-lockup__title">{siteIdentity.name}</span>
          <span className="brand-lockup__detail">{siteIdentity.tagline}</span>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {pageDirectory.map((page) => (
            <NavLink
              key={page.id}
              to={page.to}
              end={page.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {page.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
