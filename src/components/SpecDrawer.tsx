import { motion, AnimatePresence } from 'motion/react'
import { yachts } from '../data/yachts'

interface SpecDrawerProps {
  yachtId: string | null
  onClose: () => void
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find((y) => y.id === yachtId)

  return (
    <AnimatePresence>
      {yachtId && yacht && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)'
            }}
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: 440 }}
            animate={{ x: 0 }}
            exit={{ x: 440 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '480px', // slightly wider to accommodate images better
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
              padding: '60px 40px',
              backgroundColor: '#f8f6f2', // Matching the premium cream vibe of the main page
              borderLeft: '1px solid rgba(12,12,14,0.05)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.6)', marginBottom: '12px', fontWeight: 600 }}>
                  {yacht.style.toUpperCase()}
                </div>
                <h3 style={{ fontSize: '32px', letterSpacing: '0.05em', color: '#0c0c0e', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                  {yacht.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid rgba(12,12,14,0.15)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  cursor: 'pointer',
                  color: '#0c0c0e'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {yacht.fullSpecs.map((specSection, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: '12px', letterSpacing: '0.3em', color: 'var(--accent)', borderBottom: '1px solid rgba(12,12,14,0.1)', paddingBottom: '16px', marginBottom: '24px', fontWeight: 600 }}>
                    {specSection.category}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {specSection.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontSize: '12px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)', fontWeight: 500, textTransform: 'uppercase' }}>
                          {item.label}
                        </span>
                        <span style={{ fontSize: '15px', letterSpacing: '0.05em', color: '#0c0c0e', textAlign: 'right', maxWidth: '55%', fontWeight: 500 }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* STUNNING IMAGES AT THE BOTTOM */}
            <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h4 style={{ fontSize: '12px', letterSpacing: '0.3em', color: '#0c0c0e', borderBottom: '1px solid rgba(12,12,14,0.1)', paddingBottom: '16px', marginBottom: '8px', fontWeight: 600, textAlign: 'center' }}>
                GALLERY
              </h4>
              {yacht.images.map((img, idx) => (
                <div key={idx} style={{ width: '100%', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
                  <img 
                    src={img} 
                    alt={`${yacht.name} interior ${idx + 1}`} 
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
