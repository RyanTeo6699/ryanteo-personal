import { ProjectModule } from '../components/ProjectModule';
import { capabilities, projects, projectsPageContent } from '../data/site-data';

export function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="page-panel">
        <div className="section-heading">
          <div className="system-grid">
            <span className="section-label">Projects</span>
            <h1 className="route-title">{projectsPageContent.title}</h1>
          </div>
          <p className="route-copy">{projectsPageContent.intro}</p>
        </div>
      </section>

      <section className="page-panel">
        <div className="system-grid">
          <span className="panel-label">Capability index</span>
          <div className="capability-tags">
            {capabilities.map((capability) => (
              <span key={capability.id} className="capability-tag">
                {capability.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-panel">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectModule key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
