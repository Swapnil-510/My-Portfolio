import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <p className="fade-up" style={{
            fontSize: 11, fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: 4,
            color: '#c0392b', marginBottom: 12,
          }}>
            What I've Built
          </p>
          <h2 className="fade-up" style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 700, letterSpacing: -2,
            color: '#1a1814',
            transitionDelay: '0.1s',
          }}>
            Projects
          </h2>
        </div>
        <span className="fade-up" style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 80, fontWeight: 700,
          color: '#ede9e1', letterSpacing: -3,
          lineHeight: 1,
          transitionDelay: '0.15s',
        }}>
          0{projects.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
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