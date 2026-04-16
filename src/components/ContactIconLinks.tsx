import { useSiteLocale } from '../i18n';

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 5.5h18v13H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      <path
        d="M3 7.5 12 13l9-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0ZM.5 8H5V24H.5V8Zm7.5 0h4.31v2.18h.06c.6-1.14 2.06-2.34 4.23-2.34 4.52 0 5.35 2.97 5.35 6.83V24h-4.49v-6.54c0-1.56-.03-3.56-2.17-3.56-2.17 0-2.5 1.7-2.5 3.45V24H8V8Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.35-3.88-1.35-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.97 10.97 0 0 1 12 6.1c.98 0 1.97.13 2.9.38 2.18-1.48 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.35.79 1.05.79 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function ContactIcon({ id }: { id: 'email' | 'linkedin' | 'github' }) {
  switch (id) {
    case 'email':
      return <EmailIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'github':
      return <GitHubIcon />;
  }
}

export function ContactIconLinks() {
  const { siteData } = useSiteLocale();

  return (
    <div className="contact-links-row" aria-label={siteData.contactContent.linksAriaLabel}>
      {siteData.contactLinks.map((link) => (
        <a
          key={link.id}
          className="contact-icon-link"
          href={link.href}
          aria-label={link.label}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <ContactIcon id={link.id} />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
