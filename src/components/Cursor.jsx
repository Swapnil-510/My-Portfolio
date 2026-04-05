import { useEffect, useRef } from 'react'

function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    const animRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`
      }
      requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', moveCursor)
    const raf = requestAnimationFrame(animRing)

    const handleEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px'
        ringRef.current.style.height = '48px'
      }
    }
    const handleLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px'
        ringRef.current.style.height = '32px'
      }
    }

    const hoverEls = document.querySelectorAll('a, button')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(raf)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        width: 8, height: 8,
        background: 'white',
        borderRadius: '50%',
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }} />
      <div ref={ringRef} style={{
        width: 32, height: 32,
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'width 0.2s, height 0.2s',
      }} />
    </>
  )
}

export default Cursor

