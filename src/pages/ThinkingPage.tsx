import { thinkingEntries, thinkingPageContent } from '../data/site-data';

export function ThinkingPage() {
  return (
    <div className="page-stack">
      <section className="page-panel">
        <div className="section-heading">
          <div className="system-grid">
            <span className="section-label">Thinking</span>
            <h1 className="route-title">{thinkingPageContent.title}</h1>
          </div>
          <p className="route-copy">{thinkingPageContent.intro}</p>
        </div>
      </section>

      <section className="page-panel">
        <div className="thinking-list">
          {thinkingEntries.map((entry, index) => (
            <article key={entry.id} className="thinking-record">
              <span className="record-label">
                {String(index + 1).padStart(2, '0')} / {entry.category}
              </span>
              <p className="record-statement">{entry.statement}</p>
              <p className="record-note">{entry.note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
