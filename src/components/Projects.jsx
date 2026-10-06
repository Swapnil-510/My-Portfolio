import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <div>
          <p className="fade-up section-label">
            What I've Built
          </p>

          <h2
            className="fade-up section-title"
            style={{ transitionDelay: '0.1s' }}
          >
            Projects
          </h2>
        </div>

        <span
          className="fade-up project-count"
          style={{ transitionDelay: '0.15s' }}
        >
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <div className="projects-list">
        {projects.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            index={i + 1}
            title={proj.title}
            desc={proj.desc}
            tech={proj.tech}
            github={proj.github}
            delay={0.1 + i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects