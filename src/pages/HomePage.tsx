import { useEffect, useRef, useState } from 'react';
import { CapabilityMapPanel } from '../components/CapabilityMapPanel';
import { ContactIconLinks } from '../components/ContactIconLinks';
import { ProjectModule } from '../components/ProjectModule';
import {
  aboutContent,
  avatarImageUrl,
  capabilities,
  contactContent,
  getCapabilitiesForProject,
  getCapabilityById,
  getProjectById,
  getProjectsForCapability,
  heroContent,
  projects,
  selectedWorkContent,
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
      ? `Showing the capabilities connected to ${
          getProjectById(activeSelection.id)?.title ?? 'this project'
        }.`
      : activeSelection?.type === 'capability'
        ? `Showing the work connected to ${
            getCapabilityById(activeSelection.id)?.label ?? 'this capability'
          }.`
        : 'Select a project or capability to see how the work connects.';

  return (
    <div className="home-flow">
      <section className="hero-section anchor-section" id="hero">
        <div className="hero-layout">
          <div className="hero-copy-block">
            <h1 className="hero-title">{heroContent.primaryLine}</h1>

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
        </div>
      </section>

      <section id="about" className="content-section profile-section anchor-section">
        <div className="profile-layout">
          <div className="profile-media">
            <div className="profile-portrait-shell">
              <img className="profile-portrait" src={avatarImageUrl} alt="Ryan Teo portrait" />
            </div>
          </div>

          <div className="profile-summary">
            <div className="about-metadata">
              {aboutContent.metadata.map((row) => (
                <div key={row.label} className="about-meta-row">
                  <span className="about-meta-row__label">{row.label}</span>
                  <p className="about-meta-row__value">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="about-tags-block">
              <span className="about-meta-row__label">Capabilities</span>
              <div className="about-tags">
                {capabilities.map((capability) => (
                  <span key={capability.id} className="capability-tag">
                    {capability.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section about-me-section">
        <div className="about-me-layout">
          <h2 className="section-title section-title--compact">{aboutContent.title}</h2>

          <div className="about-body">
            <p>{aboutContent.intro}</p>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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

      <section id="work" className="content-section anchor-section">
        <div className="section-stack">
          <div className="section-heading">
            <div className="section-stack section-stack--tight">
              <span className="section-kicker">Selected work</span>
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

      <section id="contact" className="content-section content-section--compact anchor-section">
        <div className="contact-section">
          <div className="section-heading contact-heading">
            <div className="section-stack section-stack--tight">
              <span className="section-kicker">Contact</span>
              <h2 className="section-title section-title--compact">{contactContent.title}</h2>
            </div>
            <p className="section-copy">{contactContent.intro}</p>
          </div>

          <ContactIconLinks />
        </div>
      </section>
    </div>
  );
}
