import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 72px',
      background: scrolled ? 'rgba(247,244,239,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '2px solid #1a1814' : '2px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      
      <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 16, fontWeight: 700,
        color: '#1a1814', letterSpacing: 3,
        textTransform: 'uppercase',
      }}>
        SWP
      </span>

      <div style={{ display: 'flex', gap: 36 }}>
        {['Projects', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: 11, fontWeight: 500,
              color: '#1a1814', textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: 2,
              transition: 'color 0.2s',
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onMouseEnter={e => e.target.style.color = '#c0392b'}
            onMouseLeave={e => e.target.style.color = '#1a1814'}
          >
            {item}
          </a>
        ))}
      </div>

      {/* ✅ FIXED RESUME BUTTON */}
      <a
        href="/Swapnil_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          window.open('/Swapnil_Resume.pdf', '_blank')
        }}
        style={{
          fontSize: 11, fontWeight: 500,
          background: '#1a1814', color: '#f7f4ef',
          padding: '9px 20px',
          textDecoration: 'none',
          textTransform: 'uppercase', letterSpacing: 2,
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = '#c0392b'}
        onMouseLeave={e => e.target.style.background = '#1a1814'}
      >
        Resume
      </a>

    </nav>
  )
}

export default Navbar