import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add('loaded')
    }, 100)
  }, [])

  return (
    <section ref={heroRef} id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingTop: 120, paddingBottom: 80,
    }}>

      <p className="hero-el" style={{
        fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: 4,
        color: '#c0392b', marginBottom: 20,
        transitionDelay: '0s',
      }}>
        Portfolio 2025
      </p>

      <h1 className="hero-el" style={{
        fontFamily: 'Fraunces, serif',
        fontSize: 'clamp(72px, 10vw, 120px)',
        fontWeight: 700,
        letterSpacing: -4,
        lineHeight: 0.92,
        color: '#1a1814',
        marginBottom: 24,
        transitionDelay: '0.1s',
      }}>
        Swapnil
      </h1>

      <div className="hero-el" style={{
        width: 56, height: 4,
        background: '#c0392b',
        marginBottom: 24,
        transitionDelay: '0.2s',
      }} />

      <p className="hero-el" style={{
        fontSize: 14, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: 2,
        color: '#1a1814', marginBottom: 8,
        transitionDelay: '0.25s',
      }}>
        Full Stack Developer
      </p>

      <p className="hero-el" style={{
        fontSize: 13, color: '#7a7670',
        marginBottom: 32,
        transitionDelay: '0.3s',
      }}>
        B.Tech CSE — Uttaranchal University, Dehradun
      </p>

      <p className="hero-el" style={{
        fontSize: 15, lineHeight: 1.75,
        color: '#3d3a34', maxWidth: 460,
        marginBottom: 48,
        transitionDelay: '0.35s',
      }}>
        Building full-stack apps with Java, Spring Boot, Django and MongoDB.
        Targeting placements 2026.
      </p>

      <div className="hero-el" style={{
        display: 'flex', gap: 0,
        transitionDelay: '0.45s',
      }}>
        <a href="#projects" style={{
          background: '#1a1814', color: '#f7f4ef',
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: 2,
          padding: '14px 28px',
          textDecoration: 'none',
          transition: 'background 0.2s',
          display: 'inline-block',
        }}
          onMouseEnter={e => e.target.style.background = '#c0392b'}
          onMouseLeave={e => e.target.style.background = '#1a1814'}
        >
          View Work
        </a>
        <a href="https://github.com/Swapnil-510" target="_blank" rel="noreferrer" style={{
          border: '2px solid #1a1814', color: '#1a1814',
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: 2,
          padding: '14px 28px',
          textDecoration: 'none',
          transition: 'all 0.2s',
          display: 'inline-block',
        }}
          onMouseEnter={e => { e.target.style.background = '#1a1814'; e.target.style.color = '#f7f4ef' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1a1814' }}
        >
          GitHub
        </a>
      </div>

    </section>
  )
}

export default Hero