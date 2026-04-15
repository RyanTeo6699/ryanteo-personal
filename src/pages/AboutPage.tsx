import { aboutContent, capabilities } from '../data/site-data';

const portrait = new URL('../../素材/NFT RYAN.PNG', import.meta.url).href;

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="page-panel">
        <div className="section-heading">
          <div className="system-grid">
            <span className="section-label">About</span>
            <h1 className="about-hero__title">{aboutContent.title}</h1>
          </div>
          <p className="route-copy">{aboutContent.intro}</p>
        </div>
      </section>

      <section className="page-panel">
        <div className="about-hero">
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Ryan portrait rendered in pixel art"
            />
          </div>

          <div className="system-grid">
            <div className="about-metadata">
              {aboutContent.metadata.map((row) => (
                <div key={row.label} className="about-meta-row">
                  <span className="about-meta-row__label">{row.label}</span>
                  <p className="about-meta-row__value">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="about-body">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-panel">
        <div className="system-grid">
          <span className="panel-label">Capability surface</span>
          <div className="about-tags">
            {capabilities.map((capability) => (
              <span key={capability.id} className="capability-tag">
                {capability.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
