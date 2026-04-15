import type { MutableRefObject } from 'react';
import type { Project } from '../data/homepage-data';
import { getCapabilityById, selectedWorkContent } from '../data/homepage-data';

type SelectedWorkSectionProps = {
  projects: Project[];
  activeProjectIds: string[];
  hasSelection: boolean;
  onProjectSelect: (projectId: string) => void;
  workRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
};

export function SelectedWorkSection({
  projects,
  activeProjectIds,
  hasSelection,
  onProjectSelect,
  workRefs,
}: SelectedWorkSectionProps) {
  return (
    <section id="selected-work" className="home-section work-section">
      <div className="site-width section-stack">
        <div className="section-top">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 className="section-title">{selectedWorkContent.title}</h2>
          </div>
          <p className="section-intro">{selectedWorkContent.intro}</p>
        </div>

        <div className="work-list" role="list">
          {projects.map((project) => {
            const isActive = activeProjectIds.includes(project.id);
            const isDimmed = hasSelection && !isActive;

            return (
              <button
                key={project.id}
                ref={(node) => {
                  workRefs.current[project.id] = node;
                }}
                type="button"
                className="work-item"
                data-active={isActive}
                data-dimmed={isDimmed}
                aria-pressed={isActive}
                onClick={() => onProjectSelect(project.id)}
              >
                <span className="work-index">{project.index}</span>
                <span className="work-body">
                  <span className="work-header">
                    <span className="work-title">{project.title}</span>
                    <span className="work-positioning">{project.positioning}</span>
                  </span>
                  <span className="work-angle">{project.angle}</span>
                </span>
                <span className="work-capabilities">
                  {project.relatedCapabilityIds.map((capabilityId) => {
                    const label = getCapabilityById(capabilityId)?.label;

                    return label ? (
                      <span key={capabilityId} className="work-chip">
                        {label}
                      </span>
                    ) : null;
                  })}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

