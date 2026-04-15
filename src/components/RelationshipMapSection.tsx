import { useEffect, useRef, useState } from 'react';
import { ConnectorOverlay } from './ConnectorOverlay';
import { ProjectCard } from './ProjectCard';
import { SkillCard } from './SkillCard';
import {
  getProjectById,
  getProjectsForSkill,
  getSkillById,
  getSkillsForProject,
  projects,
  skills,
} from '../data/relationship-data';

type ActiveSelection =
  | {
      type: 'project';
      id: string;
    }
  | {
      type: 'skill';
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

export function RelationshipMapSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const skillRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [activeSelection, setActiveSelection] = useState<ActiveSelection>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  let activeProjectIds: string[] = [];
  let activeSkillIds: string[] = [];

  if (activeSelection?.type === 'skill') {
    activeProjectIds = getProjectsForSkill(activeSelection.id).map((project) => project.id);
    activeSkillIds = [activeSelection.id];
  }

  if (activeSelection?.type === 'project') {
    activeProjectIds = [activeSelection.id];
    activeSkillIds = getSkillsForProject(activeSelection.id).map((skill) => skill.id);
  }

  useEffect(() => {
    if (activeSelection?.type !== 'skill') {
      return;
    }

    const [firstProjectId] = activeProjectIds;
    if (!firstProjectId) {
      return;
    }

    const firstProjectNode = projectRefs.current[firstProjectId];
    if (!firstProjectNode) {
      return;
    }

    firstProjectNode.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }, [activeSelection, activeProjectIds, prefersReducedMotion]);

  const toggleSkill = (skillId: string) => {
    setActiveSelection((current) => {
      if (current?.type === 'skill' && current.id === skillId) {
        return null;
      }

      return {
        type: 'skill',
        id: skillId,
      };
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

  return (
    <section className="relationship-map-section" aria-labelledby="relationship-map-title">
      <div className="section-frame">
        <div className="section-header">
          <div className="section-copy">
            <span className="section-kicker">Portfolio relationship map</span>
            <h1 id="relationship-map-title">Work mapped to capability.</h1>
            <p>
              The top layer shows where the work lands. The bottom layer shows the
              capability stack behind it. Select either side to trace the
              relationship.
            </p>
          </div>
          <div className="section-actions">
            <p className="section-instruction">
              Click a project or capability to reveal the connected system.
            </p>
            <button
              type="button"
              className="reset-button"
              onClick={() => setActiveSelection(null)}
              disabled={activeSelection === null}
            >
              Reset map
            </button>
          </div>
        </div>

        <div className="relationship-canvas" ref={canvasRef}>
          <ConnectorOverlay
            canvasRef={canvasRef}
            projectRefs={projectRefs}
            skillRefs={skillRefs}
            activeKind={activeSelection?.type ?? null}
            activeProjectIds={activeProjectIds}
            activeSkillIds={activeSkillIds}
            prefersReducedMotion={prefersReducedMotion}
          />

          <div className="relationship-layer">
            <div className="layer-header">
              <span className="layer-index">01</span>
              <div>
                <h2>Projects / Experience</h2>
                <p>
                  Shipped areas that show scope, execution range, and how strategy
                  turns into product.
                </p>
              </div>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => {
                const isActive = activeProjectIds.includes(project.id);
                const isDimmed =
                  activeSelection !== null && activeProjectIds.length > 0 && !isActive;
                const relatedSkillLabels = project.relatedSkillIds
                  .map((skillId) => getSkillById(skillId)?.shortLabel ?? getSkillById(skillId)?.label)
                  .filter((label): label is string => Boolean(label));

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    relatedSkillLabels={relatedSkillLabels}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    layout={index === 0 ? 'feature' : 'standard'}
                    onClick={() => toggleProject(project.id)}
                    buttonRef={(node) => {
                      projectRefs.current[project.id] = node;
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="relationship-divider" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="relationship-layer">
            <div className="layer-header">
              <span className="layer-index">02</span>
              <div>
                <h2>Skills / Capabilities</h2>
                <p>
                  Capability framing over stack dumping. The value is in how the
                  pieces connect under pressure.
                </p>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => {
                const isActive = activeSkillIds.includes(skill.id);
                const isDimmed =
                  activeSelection !== null && activeSkillIds.length > 0 && !isActive;
                const relatedProjectTitles = skill.relatedProjectIds
                  .map((projectId) => getProjectById(projectId)?.title)
                  .filter((title): title is string => Boolean(title));

                return (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    relatedProjectTitles={relatedProjectTitles}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    onClick={() => toggleSkill(skill.id)}
                    buttonRef={(node) => {
                      skillRefs.current[skill.id] = node;
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

