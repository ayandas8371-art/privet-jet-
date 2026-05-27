import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface HeroProps {
  fleetOpen: boolean
  menuOpen: boolean
  onBookNow: () => void
}

export default function Hero({ fleetOpen, menuOpen, onBookNow }: HeroProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  const textVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <>
      {/* FIXED VIDEO BACKGROUND */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          filter: fleetOpen ? 'blur(100px)' : 'blur(0px)',
          transition: fleetOpen ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)' : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)'
        }}
      >
        <video 
          className="hero-video"
          src="/media/video/Main%20hero%20video%202.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} 
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)'
        }} />
      </div>

      {/* HERO TEXT WRAPPER */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate={fleetOpen ? 'hidden' : 'visible'}
        style={{ 
          position: 'fixed', 
          inset: 0,
          zIndex: 20,
          pointerEvents: 'none'
        }}
      >
        {/* TOP TEXT BLOCK */}
        <div style={{
          position: 'absolute',
          top: '10%', 
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          width: '100%'
        }}>
          {/* EYEBROW */}
          <motion.div variants={textVariants} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.7)' }}>
              PRIVATE MEMBERSHIP · EST. 1975
            </span>
            <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
          </motion.div>

          {/* HEADLINE PART 1 */}
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white' }}>
              <span style={{ fontStyle: 'normal' }}>THE SKY</span>{' '}
              <span style={{ fontStyle: 'italic' }}>IS YOURS.</span>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM LEFT TEXT BLOCK */}
        <div style={{
          position: 'absolute',
          bottom: '4%',
          left: 'clamp(24px, 6vw, 96px)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          textAlign: 'left',
          maxWidth: 'clamp(340px, 48vw, 640px)',
        }}>
          {/* HEADLINE PART 2 */}
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'normal', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white' }}>
              Fly Beyond Luxury.
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'italic', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white' }}>
              NOW.
            </motion.div>
          </div>

          {/* SUBTEXT */}
          <motion.div variants={textVariants} style={{ marginTop: '28px', fontSize: 'clamp(10px,1vw,11px)', letterSpacing: '0.2em', maxWidth: '340px', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)' }}>
            Experience the world's most exclusive private jet charter, tailored to your schedule and curated to your standards.
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
              <div className="scroll-dot" style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', position: 'absolute', top: 0, left: '-1px' }} />
            </div>
            <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOOK A FLIGHT sticky button */}
      <button 
        onClick={() => onBookNow()}
        className={`hero-booking-btn ${menuOpen ? 'is-menu-open' : ''} ${fleetOpen ? 'is-fleet-open' : ''}`}
      >
        BOOK A FLIGHT
      </button>
    </>
  )
}
