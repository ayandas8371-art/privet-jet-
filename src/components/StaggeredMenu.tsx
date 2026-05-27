import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onFleetOpen: () => void
  onJourneysOpen: () => void
  onMembershipOpen: () => void
  onAboutOpen: () => void
  onBlogOpen: () => void
  onBookNow: () => void
}

export default function StaggeredMenu({ 
  isOpen, 
  onToggle, 
  onFleetOpen,
  onJourneysOpen,
  onMembershipOpen,
  onAboutOpen,
  onBlogOpen,
  onBookNow
}: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    // Setup timeline
    const tl = gsap.timeline({ paused: true })
    
    // 1. Cycle label text (y -100%, 0.4s power3.inOut)
    tl.to([menuLabelRef.current, closeLabelRef.current], {
      y: '-100%',
      duration: 0.4,
      ease: 'power3.inOut'
    }, 0)
    
    // 2. prelayer1 slides to x:0 (0.6s power4.out, at time 0)
    tl.to(prelayer1Ref.current, {
      x: '0%',
      duration: 0.6,
      ease: 'power4.out'
    }, 0)
    
    // 3. prelayer2 slides to x:0 (0.6s power4.out, at time 0.08)
    tl.to(prelayer2Ref.current, {
      x: '0%',
      duration: 0.6,
      ease: 'power4.out'
    }, 0.08)
    
    // 4. panel slides to x:0 (0.8s power4.out, at time 0.15)
    tl.to(panelRef.current, {
      x: '0%',
      duration: 0.8,
      ease: 'power4.out'
    }, 0.15)
    
    // 5. prelayers slide to x:'-100%' (0.5s power3.in, at time 0.5)
    tl.to([prelayer1Ref.current, prelayer2Ref.current], {
      x: '-100%',
      duration: 0.5,
      ease: 'power3.in'
    }, 0.5)
    
    // 6. Nav items stagger in (x 40->0, opacity 0->1, 0.5s power3.out, each 0.06s stagger, at ~0.6)
    tl.fromTo(navItemsRef.current, 
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
      0.6
    )

    timelineRef.current = tl

    // Reset prelayers when closed to ensure they start from right next time
    // Actually, on reverse, GSAP handles this automatically.

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Ensure display is block or visible if we were hiding it
      gsap.set([prelayer1Ref.current, prelayer2Ref.current], { x: '100%' })
      timelineRef.current?.play()
    } else {
      timelineRef.current?.reverse()
    }
  }, [isOpen])

  const navLinks = [
    { label: 'HOME', action: () => { onToggle(); window.scrollTo(0, 0) } },
    { label: 'JOURNEYS', action: () => { onToggle(); setTimeout(onJourneysOpen, 500) } },
    { label: 'FLEET', action: () => { onToggle(); setTimeout(onFleetOpen, 500) } },
    { label: 'MEMBERSHIP', action: () => { onToggle(); setTimeout(onMembershipOpen, 500) } },
    { label: 'ABOUT US', action: () => { onToggle(); setTimeout(onAboutOpen, 500) } },
    { label: 'BLOG', action: () => { onToggle(); setTimeout(onBlogOpen, 500) } },
    { label: 'BOOK A FLIGHT', action: () => { onToggle(); setTimeout(onBookNow, 500) } },
  ]

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button 
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`} 
        onClick={onToggle}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: 0 }}>MENU</span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* PRELAYERS */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* MENU PANEL */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {navLinks.map((link, i) => (
            <li 
              key={link.label}
              ref={(el) => { navItemsRef.current[i] = el }}
            >
              <a onClick={(e) => {
                e.preventDefault()
                link.action()
              }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
          </div>
        </div>
      </div>
    </>
  )
}
