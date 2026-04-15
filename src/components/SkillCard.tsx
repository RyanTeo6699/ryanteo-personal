import type { Skill } from '../data/relationship-data';

type SkillCardProps = {
  skill: Skill;
  relatedProjectTitles: string[];
  isActive: boolean;
  isDimmed: boolean;
  onClick: () => void;
  buttonRef: (node: HTMLButtonElement | null) => void;
};

export function SkillCard({
  skill,
  relatedProjectTitles,
  isActive,
  isDimmed,
  onClick,
  buttonRef,
}: SkillCardProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="relationship-card skill-card"
      data-active={isActive}
      data-dimmed={isDimmed}
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span className="skill-card-topline">
        <span className="skill-level">{skill.level}</span>
        <span className="skill-count">{relatedProjectTitles.length} linked tracks</span>
      </span>
      <span className="skill-label">{skill.label}</span>
      <span className="skill-related">
        {relatedProjectTitles.slice(0, 2).join(' · ')}
        {relatedProjectTitles.length > 2 ? ' · +' : ''}
      </span>
    </button>
  );
}

