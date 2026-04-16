import type { Project } from '../data/site-data';
import { useSiteLocale } from '../i18n';

type ProjectModuleProps = {
  project: Project;
  isActive?: boolean;
  isDimmed?: boolean;
  onSelect?: () => void;
  buttonRef?: (node: HTMLButtonElement | null) => void;
};

type ProjectModuleBodyProps = {
  project: Project;
  capabilityLabels: string[];
  capabilityTagsAriaLabel: string;
};

function ProjectModuleBody({
  project,
  capabilityLabels,
  capabilityTagsAriaLabel,
}: ProjectModuleBodyProps) {
  return (
    <>
      <div className="module-topline">
        <span className="module-index">{project.index}</span>
      </div>

      <div className="module-header">
        <h3 className="module-title">{project.title}</h3>
        <p className="module-positioning">{project.summary}</p>
      </div>

      <div className="module-fields">
        <p className="project-field__value">{project.detail}</p>
      </div>

      <div className="capability-tags" aria-label={capabilityTagsAriaLabel}>
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
  const { siteData } = useSiteLocale();

  const capabilityLabels = project.relatedCapabilityIds
    .flatMap((capabilityId) => {
      const capability = siteData.getCapabilityById(capabilityId);
      return capability ? [capability.shortLabel ?? capability.label] : [];
    })
    .filter((label): label is string => Boolean(label));

  const body = (
    <ProjectModuleBody
      project={project}
      capabilityLabels={capabilityLabels}
      capabilityTagsAriaLabel={siteData.selectedWorkContent.capabilityTagsAriaLabel(project.title)}
    />
  );

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
        {body}
      </button>
    );
  }

  return <article className="project-module">{body}</article>;
}
