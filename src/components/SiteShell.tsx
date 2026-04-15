import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageByPath, projects, siteIdentity, systemRailRows } from '../data/site-data';
import { SiteHeader } from './SiteHeader';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [location.pathname]);

  return null;
}

export function SiteShell() {
  const location = useLocation();
  const currentPage = getPageByPath(location.pathname);

  return (
    <div className="system-app">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <div className="site-frame">
        <aside className="system-rail" aria-label="Site context">
          <section className="rail-panel">
            <span className="rail-label">Current page</span>
            <div className="system-grid">
              <h2 className="page-title page-title--compact">{currentPage.label}</h2>
              <p className="rail-copy">{currentPage.summary}</p>
            </div>
          </section>

          <section className="rail-panel">
            <span className="rail-label">System readout</span>
            <div className="rail-grid">
              {systemRailRows.map((row) => (
                <div key={row.label} className="rail-row">
                  <span className="rail-row__label">{row.label}</span>
                  <p className="rail-row__value">{row.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rail-panel">
            <span className="rail-label">Project index</span>
            <ol className="rail-project-list">
              {projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ol>
          </section>
        </aside>

        <main id="main-content" className="system-main">
          <Outlet />

          <footer className="page-panel site-footer">
            <p>{siteIdentity.name} / Personal system</p>
            <p>{siteIdentity.tagline}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
