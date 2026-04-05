function Contact() {
  const links = [
    { icon: '@', label: 'Swapnildombe777@email.com', href: 'mailto:Swapnildombe777@email.com' },
    { icon: 'GH', label: 'github.com/Swapnil-510', href: 'https://github.com/Swapnil-510' },
    { icon: 'LI', label: 'linkedin.com/in/swapnil-d-030650380', href: 'https://linkedin.com/in/swapnil-d-030650380' },
  ]

  return (
    <section id="contact">
      <p className="fade-up" style={{
        fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: 4,
        color: '#c0392b', marginBottom: 12,
      }}>
        Get In Touch
      </p>
      <h2 className="fade-up" style={{
        fontFamily: 'Fraunces, serif',
        fontSize: 'clamp(40px, 5vw, 64px)',
        fontWeight: 700, letterSpacing: -2,
        color: '#1a1814', marginBottom: 16,
        transitionDelay: '0.1s',
      }}>
        Contact
      </h2>
      <p className="fade-up" style={{
        fontSize: 14, color: '#7a7670',
        maxWidth: 400, lineHeight: 1.7,
        marginBottom: 56,
        transitionDelay: '0.15s',
      }}>
        Open for internships and placement opportunities. Feel free to reach out.
      </p>

      <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
        {links.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 20,
              padding: '22px 0',
              borderBottom: '1px solid #d4cfc7',
              textDecoration: 'none',
              color: '#3d3a34',
              transition: 'padding-left 0.25s, border-color 0.25s',
              borderLeft: '4px solid transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.paddingLeft = '16px'
              e.currentTarget.style.borderLeftColor = '#c0392b'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.paddingLeft = '0'
              e.currentTarget.style.borderLeftColor = 'transparent'
            }}
          >
            <span style={{
              width: 40, height: 40,
              border: '2px solid #1a1814',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 500,
              color: '#1a1814', flexShrink: 0,
            }}>
              {icon}
            </span>
            <span style={{ fontSize: 14, fontWeight: 400 }}>{label}</span>
            <span style={{ marginLeft: 'auto', fontSize: 18, color: '#aaa49c' }}>↗</span>
          </a>
        ))}
      </div>

      <div style={{
        marginTop: 80, paddingTop: 24,
        borderTop: '2px solid #1a1814',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, fontWeight: 500,
        color: '#aaa49c', textTransform: 'uppercase', letterSpacing: 2,
      }}>
        <span>Swapnil 2026</span>
        <span>Built with React</span>
      </div>
    </section>
  )
}

export default Contact