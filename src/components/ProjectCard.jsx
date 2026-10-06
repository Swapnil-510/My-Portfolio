import { useState } from 'react'

function ProjectCard({ title, desc, tech, github, index, delay = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="project-card fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}s`,
        borderLeftColor: hovered ? '#c0392b' : 'transparent',
      }}
    >
      {/* Number */}
      <div className="project-number">
        0{index}
      </div>

      {/* Main Content */}
      <div className="project-info">
        <h3>{title}</h3>

        <p>{desc}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span
              key={item}
              className={hovered ? 'tech-active' : ''}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View on GitHub <span>↗</span>
      </a>
    </article>
  )
}

export default ProjectCard