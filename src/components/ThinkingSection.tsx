import { thinkingEntries } from '../data/homepage-data';

export function ThinkingSection() {
  return (
    <section className="home-section thinking-section">
      <div className="site-width section-stack">
        <div className="section-top">
          <div>
            <span className="section-kicker">Thinking</span>
            <h2 className="section-title">Thinking</h2>
          </div>
          <p className="section-intro">
            A few positions that shape how I build, scope, and judge products.
          </p>
        </div>

        <div className="thinking-list">
          {thinkingEntries.map((entry, index) => (
            <div key={entry.id} className="thinking-item">
              <span className="thinking-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="thinking-text">{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

