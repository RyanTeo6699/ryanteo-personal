import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CapabilityMapPanel } from '../components/CapabilityMapPanel';
import { ProjectModule } from '../components/ProjectModule';
import {
  aboutContent,
  capabilities,
  contactContent,
  contactLinks,
  getCapabilitiesForProject,
  getCapabilityById,
  getProjectById,
  getProjectsForCapability,
  heroContent,
  projects,
  quickLinks,
  selectedWorkContent,
  thinkingEntries,
} from '../data/site-data';

type ActiveSelection =
  | {
      type: 'project';
      id: string;
    }
  | {
      type: 'capability';
      id: string;
    }
  | null;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

export function HomePage() {
  const [activeSelection, setActiveSelection] = useState<ActiveSelection>(null);
  const workRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mapProjectRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const capabilityRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const canvasRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  let activeProjectIds: string[] = [];
  let activeCapabilityIds: string[] = [];

  if (activeSelection?.type === 'capability') {
    activeProjectIds = getProjectsForCapability(activeSelection.id).map((project) => project.id);
    activeCapabilityIds = [activeSelection.id];
  }

  if (activeSelection?.type === 'project') {
    activeProjectIds = [activeSelection.id];
    activeCapabilityIds = getCapabilitiesForProject(activeSelection.id).map(
      (capability) => capability.id,
    );
  }

  useEffect(() => {
    if (activeSelection?.type !== 'capability') {
      return;
    }

    const [firstProjectId] = activeProjectIds;
    if (!firstProjectId) {
      return;
    }

    const projectNode = workRefs.current[firstProjectId];
    if (!projectNode) {
      return;
    }

    projectNode.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }, [activeProjectIds, activeSelection, prefersReducedMotion]);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const toggleProject = (projectId: string) => {
    setActiveSelection((current) => {
      if (current?.type === 'project' && current.id === projectId) {
        return null;
      }

      return {
        type: 'project',
        id: projectId,
      };
    });
  };

  const toggleCapability = (capabilityId: string) => {
    setActiveSelection((current) => {
      if (current?.type === 'capability' && current.id === capabilityId) {
        return null;
      }

      return {
        type: 'capability',
        id: capabilityId,
      };
    });
  };

  const activeSummary =
    activeSelection?.type === 'project'
      ? `Active project // ${getProjectById(activeSelection.id)?.title ?? 'Project'}`
      : activeSelection?.type === 'capability'
        ? `Active capability // ${
            getCapabilityById(activeSelection.id)?.label ?? 'Capability'
          }`
        : 'Select a capability or project to trace the working system.';

  return (
    <div className="page-stack">
      <section className="page-panel hero-panel">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <span className="hero-label">{heroContent.name}</span>
            <h1 className="hero-title">{heroContent.primaryLine}</h1>

            <div className="hero-description">
              {heroContent.supportingLines.map((line) => (
                <p key={line} className="hero-copy">
                  {line}
                </p>
              ))}
            </div>

            <div className="hero-actions">
              <button
                type="button"
                className="action-link action-link--primary"
                onClick={() => scrollToSection(heroContent.primaryCta.targetId)}
              >
                {heroContent.primaryCta.label}
              </button>

              <button
                type="button"
                className="action-link"
                onClick={() => scrollToSection(heroContent.secondaryCta.targetId)}
              >
                {heroContent.secondaryCta.label}
              </button>
            </div>
          </div>

          <aside className="hero-aside">
            <span className="panel-label">System status</span>
            <div className="status-grid">
              {heroContent.statusRows.map((row) => (
                <div key={row.label} className="status-row">
                  <span className="status-row__label">{row.label}</span>
                  <p className="status-row__value">{row.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-panel">
        <div className="system-grid">
          <div className="section-heading">
            <div className="system-grid">
              <span className="section-label">Quick links</span>
              <h2 className="section-title section-title--compact">Route index</h2>
            </div>
            <p className="section-copy">
              The site is organized as one personal system: direct entry points for work,
              capability mapping, thinking, biography, and contact.
            </p>
          </div>

          <div className="quick-links-grid">
            {quickLinks.map((link) =>
              link.to ? (
                <Link key={link.id} className="quick-link-card" to={link.to}>
                  <span className="quick-link-index">{link.index}</span>
                  <span className="quick-link-title">{link.label}</span>
                  <p className="quick-link-description">{link.description}</p>
                </Link>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  className="quick-link-card"
                  onClick={() => {
                    if (link.targetId) {
                      scrollToSection(link.targetId);
                    }
                  }}
                >
                  <span className="quick-link-index">{link.index}</span>
                  <span className="quick-link-title">{link.label}</span>
                  <p className="quick-link-description">{link.description}</p>
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="selected-work" className="page-panel">
        <div className="system-grid">
          <div className="section-heading">
            <div className="system-grid">
              <span className="section-label">Selected work</span>
              <h2 className="section-title section-title--compact">
                {selectedWorkContent.title}
              </h2>
            </div>
            <p className="section-copy">{selectedWorkContent.intro}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const isActive = activeProjectIds.includes(project.id);
              const isDimmed = activeSelection !== null && !isActive;

              return (
                <ProjectModule
                  key={project.id}
                  project={project}
                  isActive={isActive}
                  isDimmed={isDimmed}
                  onSelect={() => toggleProject(project.id)}
                  buttonRef={(node) => {
                    workRefs.current[project.id] = node;
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CapabilityMapPanel
        projects={projects}
        capabilities={capabilities}
        activeProjectIds={activeProjectIds}
        activeCapabilityIds={activeCapabilityIds}
        hasSelection={activeSelection !== null}
        activeSummary={activeSummary}
        onProjectSelect={toggleProject}
        onCapabilitySelect={toggleCapability}
        onReset={() => setActiveSelection(null)}
        canvasRef={canvasRef}
        projectRefs={mapProjectRefs}
        capabilityRefs={capabilityRefs}
        prefersReducedMotion={prefersReducedMotion}
      />

      <section className="page-panel">
        <div className="preview-grid">
          <div className="preview-card">
            <span className="section-label">Thinking preview</span>
            <h2 className="section-title section-title--compact">Product positions</h2>
            <p className="section-copy">
              A few of the operating statements that shape how I scope products and
              judge whether they will actually hold up.
            </p>
            <div className="preview-actions">
              <Link className="action-link action-link--primary" to="/thinking">
                Open Thinking
              </Link>
            </div>
          </div>

          <div className="thinking-list">
            {thinkingEntries.slice(0, 3).map((entry) => (
              <article key={entry.id} className="thinking-record">
                <span className="record-label">{entry.category}</span>
                <p className="record-statement">{entry.statement}</p>
                <p className="record-note">{entry.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-panel">
        <div className="preview-grid">
          <div className="preview-card">
            <span className="section-label">About preview</span>
            <h2 className="section-title section-title--compact">{aboutContent.title}</h2>
            <p className="section-copy">{aboutContent.intro}</p>
            <div className="preview-actions">
              <Link className="action-link" to="/about">
                Open About
              </Link>
            </div>
          </div>

          <div className="system-grid">
            {aboutContent.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="section-copy">
                {paragraph}
              </p>
            ))}

            <div className="capability-tags">
              {capabilities.slice(0, 6).map((capability) => (
                <span key={capability.id} className="capability-tag">
                  {capability.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-preview" className="page-panel">
        <div className="preview-grid">
          <div className="preview-card">
            <span className="section-label">Contact preview</span>
            <h2 className="section-title section-title--compact">{contactContent.title}</h2>
            <p className="section-copy">{contactContent.intro}</p>
            <div className="preview-actions">
              <Link className="action-link action-link--primary" to="/contact">
                Open Contact
              </Link>
            </div>
          </div>

          <div className="contact-grid">
            {contactLinks.map((link) =>
              link.href ? (
                <a
                  key={link.id}
                  className="contact-card"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                  <p className="contact-note">{link.note}</p>
                </a>
              ) : (
                <div key={link.id} className="contact-card">
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                  <p className="contact-note">{link.note}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
