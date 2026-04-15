import { ContactIconLinks } from '../components/ContactIconLinks';
import { contactContent } from '../data/site-data';

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
        <ContactIconLinks />
      </section>
    </div>
  );
}
