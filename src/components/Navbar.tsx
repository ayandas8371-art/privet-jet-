import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import gsap from 'gsap'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Fleet',    href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

interface NavProps {
  onBookNow: () => void
}

export default function Navbar({ onBookNow }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuLinksRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // GSAP staggered slide-in when menu opens
  useEffect(() => {
    if (menuOpen && menuLinksRef.current.length) {
      gsap.fromTo(
        menuLinksRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.15,
        }
      )
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), menuOpen ? 500 : 0)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] h-20 flex items-center transition-all duration-500 ${
          scrolled ? 'bg-[rgba(255,255,255,0.95)] backdrop-blur-2xl border-b border-[var(--border)] shadow-[0_4px_24px_rgba(11,27,61,0.06)]' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 z-[1001] text-[var(--gold)] group"
            aria-label="Privet Jet Home"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="17.5" stroke="currentColor" strokeWidth="0.8" />
              <path d="M7 21L18 8L29 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 28L18 21L24 28" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
              <circle cx="18" cy="8" r="1.5" fill="currentColor" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[1.35rem] tracking-[0.04em] text-[var(--text)] group-hover:text-[var(--gold-lt)] transition-colors duration-300">
                Privet Jet
              </span>
              <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[var(--gold)] mt-0.5">
                Private Aviation
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="relative text-[0.72rem] tracking-[0.18em] uppercase text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-[width] duration-400 ease-[var(--ease-expo)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+18005551234"
              className="hidden md:block text-[0.72rem] tracking-[0.1em] text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
            >
              +1 (800) 555-1234
            </a>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onBookNow}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 text-[0.72rem] tracking-[0.18em] uppercase font-medium bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dk)] text-[var(--bg)] rounded-full hover:shadow-[0_6px_28px_rgba(201,169,110,0.4)] transition-all duration-300"
            >
              Book Now
            </motion.button>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] w-9 h-9 justify-center items-center p-1"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-[var(--text)] origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-px bg-[var(--text)]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-[var(--text)] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[999] bg-[var(--bg)] flex flex-col justify-center px-8 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Decorative gold circle */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--border)] opacity-20 pointer-events-none" style={{ filter: 'blur(80px)' }} />

            <ul className="flex flex-col gap-6" role="list">
              {links.map((link, i) => (
                <li
                  key={link.href}
                  ref={(el) => { if (el) menuLinksRef.current[i] = el }}
                  style={{ opacity: 0 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="font-serif text-[clamp(2.5rem,8vw,4rem)] font-normal text-[var(--text)] hover:text-[var(--gold)] transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-10 left-8 right-8 flex justify-between items-end">
              <div>
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">Ready to fly?</p>
                <a href="tel:+18005551234" className="text-[var(--gold)] text-sm">+1 (800) 555-1234</a>
              </div>
              <button
                onClick={() => { setMenuOpen(false); onBookNow() }}
                className="px-6 py-2.5 text-[0.72rem] tracking-[0.18em] uppercase bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dk)] text-[var(--bg)] rounded-full font-medium"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
