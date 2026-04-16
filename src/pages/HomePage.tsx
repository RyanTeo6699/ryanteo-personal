import { useEffect, useRef, useState } from 'react';
import { CapabilityMapPanel } from '../components/CapabilityMapPanel';
import { ContactIconLinks } from '../components/ContactIconLinks';
import { ProjectModule } from '../components/ProjectModule';
import { useSiteLocale } from '../i18n';

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
  const { siteData } = useSiteLocale();
  const [activeSelection, setActiveSelection] = useState<ActiveSelection>(null);
  const workRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mapProjectRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const capabilityRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const canvasRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  let activeProjectIds: string[] = [];
  let activeCapabilityIds: string[] = [];

  if (activeSelection?.type === 'capability') {
    activeProjectIds = siteData
      .getProjectsForCapability(activeSelection.id)
      .map((project) => project.id);
    activeCapabilityIds = [activeSelection.id];
  }

  if (activeSelection?.type === 'project') {
    activeProjectIds = [activeSelection.id];
    activeCapabilityIds = siteData
      .getCapabilitiesForProject(activeSelection.id)
      .map((capability) => capability.id);
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
      ? (() => {
          const project = siteData.getProjectById(activeSelection.id);
          return project
            ? siteData.capabilityMapContent.activeProjectSummary(project.title)
            : siteData.capabilityMapContent.defaultSummary;
        })()
      : activeSelection?.type === 'capability'
        ? (() => {
            const capability = siteData.getCapabilityById(activeSelection.id);
            return capability
              ? siteData.capabilityMapContent.activeCapabilitySummary(capability.label)
              : siteData.capabilityMapContent.defaultSummary;
          })()
        : siteData.capabilityMapContent.defaultSummary;

  return (
    <div className="home-flow">
      <section className="content-section profile-section">
        <div className="profile-layout">
          <div className="profile-media">
            <div className="profile-portrait-shell">
              <img
                className="profile-portrait"
                src={siteData.avatarImageUrl}
                alt={siteData.profileContent.portraitAlt}
              />
            </div>
          </div>

          <div className="profile-summary">
            <div className="about-metadata">
              {siteData.profileContent.metadata.map((row) => (
                <div key={row.label} className="about-meta-row">
                  <span className="about-meta-row__label">{row.label}</span>
                  <p className="about-meta-row__value">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="about-tags-block">
              <span className="about-meta-row__label">
                {siteData.profileContent.capabilitiesLabel}
              </span>
              <div className="about-tags">
                {siteData.capabilities.map((capability) => (
                  <span key={capability.id} className="capability-tag">
                    {capability.label}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="profile-actions"
              aria-label={siteData.profileContent.actionsAriaLabel}
            >
              <a className="action-link action-link--primary" href="#work">
                {siteData.profileContent.primaryAction}
              </a>
              <a className="action-link action-link--secondary" href="#contact">
                {siteData.profileContent.secondaryAction}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section about-me-section anchor-section">
        <div className="about-me-layout">
          <h2 className="section-title section-title--compact">{siteData.aboutContent.title}</h2>

          <div className="about-body">
            <p>{siteData.aboutContent.intro}</p>
            {siteData.aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CapabilityMapPanel
        projects={siteData.projects}
        capabilities={siteData.capabilities}
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

      <section id="work" className="content-section anchor-section">
        <div className="section-stack">
          <div className="section-stack section-stack--tight">
            <h2 className="section-title section-title--compact">
              {siteData.selectedWorkContent.title}
            </h2>
          </div>

          <div className="projects-grid">
            {siteData.projects.map((project) => {
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

      <section id="contact" className="content-section content-section--compact anchor-section">
        <div className="contact-section">
          <div className="section-heading contact-heading">
            <h2 className="section-title section-title--compact">
              {siteData.contactContent.title}
            </h2>
            <p className="section-copy">{siteData.contactContent.subtitle}</p>
          </div>

          <ContactIconLinks />
        </div>
      </section>
    </div>
  );
}
