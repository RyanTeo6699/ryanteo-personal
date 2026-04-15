import type { MutableRefObject, RefObject } from 'react';
import { ConnectorOverlay } from './ConnectorOverlay';
import type { Capability, Project } from '../data/homepage-data';
import { capabilityMapContent } from '../data/homepage-data';

type CapabilityMapSectionProps = {
  projects: Project[];
  capabilities: Capability[];
  activeProjectIds: string[];
  activeCapabilityIds: string[];
  hasSelection: boolean;
  activeSummary: string;
  onProjectSelect: (projectId: string) => void;
  onCapabilitySelect: (capabilityId: string) => void;
  onReset: () => void;
  canvasRef: RefObject<HTMLDivElement>;
  mapProjectRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  capabilityRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  prefersReducedMotion: boolean;
};

export function CapabilityMapSection({
  projects,
  capabilities,
  activeProjectIds,
  activeCapabilityIds,
  hasSelection,
  activeSummary,
  onProjectSelect,
  onCapabilitySelect,
  onReset,
  canvasRef,
  mapProjectRefs,
  capabilityRefs,
  prefersReducedMotion,
}: CapabilityMapSectionProps) {
  return (
    <section className="home-section capability-section">
      <div className="site-width section-stack">
        <div className="section-top">
          <div>
            <span className="section-kicker">Capability map</span>
            <h2 className="section-title">{capabilityMapContent.title}</h2>
          </div>
          <div className="section-copy-block">
            <p className="section-intro">{capabilityMapContent.intro}</p>
            <p className="section-detail">{capabilityMapContent.supportingCopy}</p>
          </div>
        </div>

        <div className="map-shell">
          <div className="map-shell-top">
            <p className="map-status">{activeSummary}</p>
            <button
              type="button"
              className="map-reset"
              onClick={onReset}
              disabled={!hasSelection}
            >
              Reset
            </button>
          </div>

          <div className="map-stage" ref={canvasRef}>
            <ConnectorOverlay
              canvasRef={canvasRef}
              projectRefs={mapProjectRefs}
              capabilityRefs={capabilityRefs}
              activeProjectIds={activeProjectIds}
              activeCapabilityIds={activeCapabilityIds}
              prefersReducedMotion={prefersReducedMotion}
            />

            <div className="map-group">
              <span className="map-label">Project anchors</span>
              <div className="map-project-grid">
                {projects.map((project) => {
                  const isActive = activeProjectIds.includes(project.id);
                  const isDimmed = hasSelection && !isActive;

                  return (
                    <button
                      key={project.id}
                      ref={(node) => {
                        mapProjectRefs.current[project.id] = node;
                      }}
                      type="button"
                      className="map-project-node"
                      data-active={isActive}
                      data-dimmed={isDimmed}
                      aria-pressed={isActive}
                      onClick={() => onProjectSelect(project.id)}
                    >
                      <span className="map-project-index">{project.index}</span>
                      <span className="map-project-title">{project.title}</span>
                      <span className="map-project-text">{project.positioning}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="map-divider" aria-hidden="true" />

            <div className="map-group">
              <span className="map-label">Capabilities</span>
              <div className="capability-grid">
                {capabilities.map((capability) => {
                  const isActive = activeCapabilityIds.includes(capability.id);
                  const isDimmed = hasSelection && !isActive;

                  return (
                    <button
                      key={capability.id}
                      ref={(node) => {
                        capabilityRefs.current[capability.id] = node;
                      }}
                      type="button"
                      className="capability-card"
                      data-active={isActive}
                      data-dimmed={isDimmed}
                      aria-pressed={isActive}
                      onClick={() => onCapabilitySelect(capability.id)}
                    >
                      <span className="capability-title">{capability.label}</span>
                      <span className="capability-description">{capability.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

