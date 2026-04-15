import type { Project } from '../data/relationship-data';

type ProjectCardProps = {
  project: Project;
  relatedSkillLabels: string[];
  isActive: boolean;
  isDimmed: boolean;
  layout: 'feature' | 'standard';
  onClick: () => void;
  buttonRef: (node: HTMLButtonElement | null) => void;
};

export function ProjectCard({
  project,
  relatedSkillLabels,
  isActive,
  isDimmed,
  layout,
  onClick,
  buttonRef,
}: ProjectCardProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="relationship-card project-card"
      data-layout={layout}
      data-active={isActive}
      data-dimmed={isDimmed}
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span className="card-eyebrow">{project.eyebrow}</span>
      <span className="card-title-wrap">
        <span className="card-title">{project.title}</span>
        <span className="card-summary">{project.summary}</span>
      </span>
      <span className="card-meta">
        <span className="card-meta-label">Mapped capabilities</span>
        <span className="card-chip-row">
          {relatedSkillLabels.map((label) => (
            <span key={label} className="card-chip">
              {label}
            </span>
          ))}
        </span>
      </span>
      {project.tags && project.tags.length > 0 ? (
        <span className="card-tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </span>
      ) : null}
    </button>
  );
}

