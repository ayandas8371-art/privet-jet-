import { useEffect, useRef, useState } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onBlogOpen: () => void
  onFleetOpen: () => void
  onJourneysOpen: () => void
  onMembershipOpen: () => void
  onAboutOpen: () => void
  onBookNow: () => void
}

export default function Header({ 
  menuOpen, 
  onBlogOpen, 
  onFleetOpen, 
  onJourneysOpen, 
  onMembershipOpen, 
  onAboutOpen,
  onBookNow
}: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (pillRef.current) {
        if (window.scrollY > 50) {
          pillRef.current.classList.add('scrolled')
        } else {
          pillRef.current.classList.remove('scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'JOURNEYS', action: onJourneysOpen },
    { label: 'FLEET', action: onFleetOpen },
    { label: 'MEMBERSHIP', action: onMembershipOpen },
    { label: 'ABOUT US', action: onAboutOpen },
    { label: 'BLOG', action: onBlogOpen }
  ]

  return (
    <div ref={pillRef} className="navbar-pill">
      {/* LOGO SECTION */}
      <div style={{ 
        borderRight: '1px solid rgba(28,53,87,0.15)', 
        padding: '0 24px 0 16px', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px' 
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11 2L2 21L11 17V2Z" fill="#1c3557" />
          <path d="M13 2V17L22 21L13 2Z" fill="#1c3557" fillOpacity="0.5" />
        </svg>
        <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.25em', color: '#1c3557' }}>
          PRIVET JETS
        </span>
      </div>

      {/* NAV LINKS */}
      {navLinks.map((link) => (
        <a
          key={link.label}
          href="#"
          className="hide-on-tablet"
          onClick={(e) => {
            e.preventDefault()
            link.action()
          }}
          onMouseEnter={() => setIsHovered(link.label)}
          onMouseLeave={() => setIsHovered(null)}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: isHovered === link.label ? '#0c0c0e' : '#1c3557',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
        >
          {link.label}
        </a>
      ))}

      {/* BOOK A FLIGHT */}
      <button
        className="hide-on-mobile"
        style={{
          marginLeft: 'auto',
          background: '#1c3557',
          border: '1px solid #1c3557',
          borderRadius: '100px',
          padding: '12px 24px',
          fontSize: '10px',
          letterSpacing: '0.15em',
          color: 'white',
          transition: 'background 0.3s ease',
          flexShrink: 0,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#253f63')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#1c3557')}
        onClick={() => onBookNow()}
      >
        BOOK A FLIGHT
      </button>
    </div>
  )
}

