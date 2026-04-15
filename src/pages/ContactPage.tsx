import { contactContent, contactLinks } from '../data/site-data';

export function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-panel">
        <div className="section-heading">
          <div className="system-grid">
            <span className="section-label">Contact</span>
            <h1 className="route-title">{contactContent.title}</h1>
          </div>
          <p className="route-copy">{contactContent.intro}</p>
        </div>
      </section>

      <section className="page-panel">
        <div className="contact-entries">
          {contactLinks.map((link) =>
            link.href ? (
              <a
                key={link.id}
                className="contact-entry"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
                <p className="contact-entry__note">{link.note}</p>
              </a>
            ) : (
              <div key={link.id} className="contact-entry" data-live="false">
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
                <p className="contact-entry__note">{link.note}</p>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
