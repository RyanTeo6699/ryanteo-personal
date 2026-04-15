import { contactContent, contactLinks } from '../data/homepage-data';

export function ContactSection() {
  return (
    <section id="contact" className="home-section contact-section">
      <div className="site-width contact-grid">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">{contactContent.title}</h2>
          <p className="section-intro">{contactContent.intro}</p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) =>
            link.href ? (
              <a
                key={link.id}
                className="contact-link"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            ) : (
              <div key={link.id} className="contact-link" data-live="false">
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
