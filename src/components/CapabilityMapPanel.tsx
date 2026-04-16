import type { MutableRefObject, RefObject } from 'react';
import type { Capability, Project } from '../data/site-data';
import { capabilityMapContent } from '../data/site-data';
import { ConnectorOverlay } from './ConnectorOverlay';

type CapabilityMapPanelProps = {
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
  projectRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  capabilityRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  prefersReducedMotion: boolean;
};

export function CapabilityMapPanel({
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
  projectRefs,
  capabilityRefs,
  prefersReducedMotion,
}: CapabilityMapPanelProps) {
  return (
    <section id="capability" className="page-panel anchor-section">
      <div className="system-grid">
        <div className="section-heading">
          <div className="system-grid">
            <span className="section-label">Capability map</span>
            <h2 className="section-title section-title--compact">
              {capabilityMapContent.title}
            </h2>
          </div>

          <div className="system-grid">
            <p className="section-copy">{capabilityMapContent.intro}</p>
            <p className="section-copy">{capabilityMapContent.supportingCopy}</p>
          </div>
        </div>

        <div className="map-shell">
          <div className="map-topline">
            <p className="map-summary">{activeSummary}</p>
            <button
              type="button"
              className="map-reset"
              onClick={onReset}
              disabled={!hasSelection}
            >
              Reset selection
            </button>
          </div>

          <div className="map-stage" ref={canvasRef}>
            <ConnectorOverlay
              canvasRef={canvasRef}
              projectRefs={projectRefs}
              capabilityRefs={capabilityRefs}
              activeProjectIds={activeProjectIds}
              activeCapabilityIds={activeCapabilityIds}
              prefersReducedMotion={prefersReducedMotion}
            />

            <div className="map-band">
              <span className="panel-label">Project anchors</span>
              <div className="map-band__grid">
                {projects.map((project) => {
                  const isActive = activeProjectIds.includes(project.id);
                  const isDimmed = hasSelection && !isActive;

                  return (
                    <button
                      key={project.id}
                      ref={(node) => {
                        projectRefs.current[project.id] = node;
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
                      <p className="map-project-text">{project.positioning}</p>
                      <span className="map-count">
                        {project.relatedCapabilityIds.length} linked capabilities
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="map-axis" aria-hidden="true" />

            <div className="map-band">
              <span className="panel-label">Capability anchors</span>
              <div className="map-band__grid">
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
                      <p className="capability-description">{capability.description}</p>
                      <span className="map-count">
                        {capability.relatedProjectIds.length} linked projects
                      </span>
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
