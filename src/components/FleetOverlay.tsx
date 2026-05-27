import { motion, AnimatePresence } from 'motion/react'
import { yachts } from '../data/yachts'

interface FleetOverlayProps {
  isOpen: boolean
  onClose: () => void
  onObsidianOpen: () => void
  onAurumOpen: () => void
  onTitaniumOpen: () => void
}

export default function FleetOverlay({ isOpen, onClose, onObsidianOpen, onAurumOpen, onTitaniumOpen }: FleetOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: '#0c0c0e',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* HEADER */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 110,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 40px',
            background: 'linear-gradient(to bottom, rgba(12,12,14,0.8) 0%, transparent 100%)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 2L2 21L11 17V2Z" fill="white" />
                <path d="M13 2V17L22 21L13 2Z" fill="white" fillOpacity="0.5" />
              </svg>
              <span style={{ fontSize: '14px', letterSpacing: '0.3em', color: 'white' }}>PRIVET JETS</span>
            </div>
            
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)' }}>
              OUR FLEET
            </span>

            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '100px',
                padding: '8px 24px',
                color: 'white',
                fontSize: '9px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              CLOSE
            </button>
          </div>

          {/* SPLIT GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', flex: 1, height: '100vh' }}>
            {yachts.map((yacht, i) => (
              <motion.div
                key={yacht.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', marginRight: i < 2 ? '-1px' : '0' }}
                className="yacht-card" // reuse scale effect
              >
                <video 
                  className="yacht-card-video"
                  src={yacht.videoSrc} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s var(--ease-luxury)' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,14,0.9) 0%, rgba(12,12,14,0.2) 50%, transparent 100%)' }} />
                
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
                  <div style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent-on-dark)', marginBottom: '8px' }}>{yacht.style.toUpperCase()}</div>
                  <h3 style={{ fontSize: '32px', color: 'white', margin: '0 0 20px 0', fontWeight: 400 }}>{yacht.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {yacht.quickSpecs.slice(0, 2).map((spec, j) => (
                      <div key={j}>
                        <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>{spec.label}</div>
                        <div style={{ fontSize: '11px', color: 'white', letterSpacing: '0.1em' }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>
                  <button style={{
                    marginTop: '24px',
                    padding: '12px 0',
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                    if (yacht.id === 'obsidian-velocity') {
                      onObsidianOpen();
                    } else if (yacht.id === 'aurum-eclipse') {
                      onAurumOpen();
                    } else if (yacht.id === 'titanium-stratus') {
                      onTitaniumOpen();
                    }
                  }}
                  >
                    EXPLORE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

