import type { Project } from '../data/site-data';
import { getCapabilityById } from '../data/site-data';

type ProjectModuleProps = {
  project: Project;
  isActive?: boolean;
  isDimmed?: boolean;
  onSelect?: () => void;
  buttonRef?: (node: HTMLButtonElement | null) => void;
};

function ProjectModuleBody({ project }: { project: Project }) {
  const capabilityLabels = project.relatedCapabilityIds
    .flatMap((capabilityId) => {
      const capability = getCapabilityById(capabilityId);
      return capability ? [capability.shortLabel ?? capability.label] : [];
    })
    .filter((label): label is string => Boolean(label));

  return (
    <>
      <div className="module-topline">
        <span className="module-index">{project.index}</span>
        <span className="module-label">Selected work</span>
      </div>

      <div className="module-header">
        <h3 className="module-title">{project.title}</h3>
        <p className="module-positioning">{project.positioning}</p>
      </div>

      <div className="module-fields">
        <div className="project-field">
          <span className="project-field__label">Why it matters</span>
          <p className="project-field__value">{project.whyItMatters}</p>
        </div>

        <div className="project-field">
          <span className="project-field__label">Ryan&apos;s angle</span>
          <p className="project-field__value">{project.angle}</p>
        </div>
      </div>

      <p className="module-role">
        <span className="module-role__label">Role</span>
        <span className="module-role__value">{project.role}</span>
      </p>

      <div className="capability-tags" aria-label={`${project.title} capability tags`}>
        {capabilityLabels.map((label) => (
          <span key={label} className="capability-tag">
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

export function ProjectModule({
  project,
  isActive = false,
  isDimmed = false,
  onSelect,
  buttonRef,
}: ProjectModuleProps) {
  if (onSelect) {
    return (
      <button
        ref={buttonRef}
        type="button"
        className="project-module project-module-button"
        data-active={isActive}
        data-dimmed={isDimmed}
        aria-pressed={isActive}
        onClick={onSelect}
      >
        <ProjectModuleBody project={project} />
      </button>
    );
  }

  return (
    <article className="project-module">
      <ProjectModuleBody project={project} />
    </article>
  );
}
