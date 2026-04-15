import { heroContent } from '../data/homepage-data';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="site-width hero-grid">
        <div className="hero-copy">
          <span className="hero-name">{heroContent.name}</span>
          <h1 className="hero-title">{heroContent.primaryLine}</h1>
          <div className="hero-body">
            {heroContent.supportingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="hero-link hero-link-primary" href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </a>
            <a className="hero-link hero-link-secondary" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Current focus">
          <span className="hero-aside-label">{heroContent.asideTitle}</span>
          <ul className="hero-aside-list">
            {heroContent.asideItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

