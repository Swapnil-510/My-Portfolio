import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    'About',
    'Projects',
    'Skills',
    'Achievements',
    'Contact',
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 72px',
        background: scrolled
          ? 'rgba(247, 244, 239, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '2px solid #1a1814'
          : '2px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#1a1814',
          letterSpacing: 3,
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        SD
      </a>

      {/* Desktop Navigation */}
      <div
        className="desktop-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 30,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: 10,
              fontWeight: 500,
              color: '#1a1814',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: 2,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#c0392b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1a1814'
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Resume Download */}
      <a
        className="desktop-resume"
        href="/Swapnil_Resume.pdf"
        download="Swapnil_Dombe_Resume.pdf"
        style={{
          fontSize: 10,
          fontWeight: 500,
          background: '#1a1814',
          color: '#f7f4ef',
          padding: '10px 20px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: 2,
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#c0392b'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#1a1814'
        }}
      >
        Resume
      </a>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: 24,
          color: '#1a1814',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#f7f4ef',
            borderBottom: '2px solid #1a1814',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: '#1a1814',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              {item}
            </a>
          ))}

          {/* Mobile Resume Download */}
          <a
            href="/Swapnil_Resume.pdf"
            download="Swapnil_Dombe_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-block',
              background: '#1a1814',
              color: '#f7f4ef',
              padding: '12px 20px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: 10,
              textAlign: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c0392b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1814'
            }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar