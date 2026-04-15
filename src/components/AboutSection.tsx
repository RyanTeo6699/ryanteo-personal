import { aboutContent } from '../data/homepage-data';

export function AboutSection() {
  return (
    <section className="home-section about-section">
      <div className="site-width about-grid">
        <div>
          <span className="section-kicker">About</span>
          <h2 className="section-title">{aboutContent.title}</h2>
        </div>
        <div className="about-copy">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

