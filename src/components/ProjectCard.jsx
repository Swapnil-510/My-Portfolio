import { useState } from 'react'

function ProjectCard({ title, desc, tech, github, index, delay = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}s`,
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr auto',
        alignItems: 'center',
        gap: 32,
        padding: '28px 0',
        borderBottom: '1px solid #d4cfc7',
        borderLeft: hovered ? '4px solid #c0392b' : '4px solid transparent',
        paddingLeft: hovered ? 20 : 0,
        transition: 'border-color 0.25s, padding-left 0.25s',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: 'Fraunces, serif',
        fontSize: 36, fontWeight: 700,
        color: hovered ? '#c0392b' : '#ede9e1',
        letterSpacing: -1,
        transition: 'color 0.25s',
        lineHeight: 1,
      }}>
        0{index}
      </span>

      <div>
        <h3 style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 22, fontWeight: 600,
          color: '#1a1814', letterSpacing: -0.5,
          marginBottom: 6,
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: '#7a7670', lineHeight: 1.5 }}>
          {desc}
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {tech.map((t) => (
          <span key={t} style={{
            fontSize: 10, fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: 1,
            background: hovered ? '#1a1814' : '#ede9e1',
            color: hovered ? '#f7f4ef' : '#7a7670',
            padding: '4px 10px',
            transition: 'all 0.25s',
          }}>
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        style={{
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: 2,
          color: hovered ? '#c0392b' : '#aaa49c',
          textDecoration: 'none',
          transition: 'color 0.25s',
          whiteSpace: 'nowrap',
        }}
      >
        GitHub ↗
      </a>
    </div>
  )
}

export default ProjectCard