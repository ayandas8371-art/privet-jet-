import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { yachts } from '../data/yachts'
import SpecDrawer from './SpecDrawer'

interface YachtSpecsProps {
  onBookNow?: () => void;
  onFleetOpen?: () => void;
  onAurumOpen?: () => void;
  onTitaniumOpen?: () => void;
  onObsidianOpen?: () => void;
}

export default function YachtSpecs({ onBookNow, onFleetOpen, onAurumOpen, onTitaniumOpen, onObsidianOpen }: YachtSpecsProps) {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null)
  const [compareOpen, setCompareOpen] = useState(false)

  const allLabels = ['LENGTH', 'CRUISING SPEED', 'RANGE', 'GUESTS', 'CABINS', 'INTERIOR']

  const getSpecValue = (yacht: typeof yachts[0], label: string) => {
    const quick = yacht.quickSpecs.find(s => s.label === label)
    if (quick) return quick.value
    for (const cat of yacht.fullSpecs) {
      const full = cat.items.find(s => s.label === label)
      if (full) return full.value
    }
    return '-'
  }

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
            THE FLEET
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', lineHeight: 0.95, margin: 0 }}>
          THREE AIRCRAFT.<br />ONE STANDARD.
        </h2>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
            className="yacht-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* VIDEO PORTION */}
            <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative' }}>
              <video 
                className="yacht-card-video" 
                src={yacht.videoSrc} 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s var(--ease-luxury)' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)'
              }} />
              
              {/* Tag Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                {yacht.style.toUpperCase()}
              </div>

              {/* Info */}
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                  {yacht.tagline.toUpperCase()}
                </div>
                <div style={{ fontSize: '17px', letterSpacing: '0.08em', color: 'white' }}>
                  {yacht.name}
                </div>
              </div>
            </div>

            {/* INFO PANEL */}
            <div style={{ background: 'white', padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {yacht.quickSpecs.map((spec, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(12,12,14,0.06)', paddingBottom: '10px' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)', textTransform: 'uppercase' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '13px', letterSpacing: '0.08em', color: '#0c0c0e', fontWeight: 500 }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => setSelectedYacht(yacht.id)}
                  style={{
                    background: '#1c3557',
                    color: 'white',
                    padding: '14px 0',
                    width: '100%',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    border: '1px solid #1c3557',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#253f63'; e.currentTarget.style.borderColor = '#253f63'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#1c3557'; e.currentTarget.style.borderColor = '#1c3557'; }}
                >
                  QUICK SPECS
                </button>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => {
                      if (yacht.id === 'aurum-eclipse' && onAurumOpen) {
                        onAurumOpen()
                        return
                      }
                      if (yacht.id === 'titanium-stratus' && onTitaniumOpen) {
                        onTitaniumOpen()
                        return
                      }
                      if (yacht.id === 'obsidian-velocity' && onObsidianOpen) {
                        onObsidianOpen()
                        return
                      }
                      const pdfDataUri = "data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nDPQM1Qo5ypUMFAwALJMLU31jBQsTAz1LBSKikpzUvPzU/XyyxRSK0pKk0uKc5MzE/NSSzLz8xTS81Lz0hSKS0qLQbJ5ibm6BRl5qbr5Ram6Bfnl+aVKuRUKsQDvnhY1CmVuZHN0cmVhbQplbmRvYmoKCjMgMCBvYmoKOTgKZW5kb2JqCgo0IDAgb2JqCjw8L1R5cGUvUGFnZS9NZWRpYUJveFswIDAgNTk1IDg0Ml0vUmVzb3VyY2VzPDwvRm9udDw8L0YxIDUgMCBSPj4+Pi9Db250ZW50cyAyIDAgUi9QYXJlbnQgNiAwIFI+PgplbmRvYmoKCjUgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhPj4KZW5kb2JqCgo2IDAgb2JqCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWzQgMCBSXT4+CmVuZG9iagoKNyAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgNiAwIFI+PgplbmRvYmoKCjEgMCBvYmoKPDwvUHJvZHVjZXIoR2hvc3RzY3JpcHQgOS41MCkvQ3JlYXRpb25EYXRlKEQ6MjAyMTA5MDMwOTIyMzdaMDAnMDAnKT4+CmVuZG9iagoKeHJlZgowIDgKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNDczIDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDE4MyAwMDAwMCBuIAowMDAwMDAwMjAyIDAwMDAwIG4gCjAwMDAwMDAzMTAgMDAwMDAgbiAKMDAwMDAwMDM5OCAwMDAwMCBuIAowMDAwMDAwNDU1IDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSA4L1Jvb3QgNyAwIFIvSW5mbyAxIDAgUj4+CnN0YXJ0eHJlZgo1NjIKJSVFT0YK";
                      const a = document.createElement('a');
                      a.href = pdfDataUri;
                      a.download = `${yacht.name.replace(/\s+/g, '_')}_Spec_Sheet.pdf`;
                      a.click();
                    }}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(28,53,87,0.3)',
                      color: '#1c3557',
                      padding: '12px 0',
                      flex: 1,
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(28,53,87,0.05)'; e.currentTarget.style.borderColor = '#1c3557'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(28,53,87,0.3)'; }}
                  >
                    FULL SHEET
                  </button>
                  <button
                    onClick={() => { if (onBookNow) onBookNow() }}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(28,53,87,0.3)',
                      color: '#1c3557',
                      padding: '12px 0',
                      flex: 1,
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(28,53,87,0.05)'; e.currentTarget.style.borderColor = '#1c3557'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(28,53,87,0.3)'; }}
                  >
                    BOOK FLIGHT
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
        <button 
          onClick={() => setCompareOpen(true)}
          style={{
            background: 'transparent',
            color: '#1c3557',
            padding: '16px 48px',
            fontSize: '11px',
            letterSpacing: '0.25em',
            borderRadius: '100px',
            cursor: 'pointer',
            border: '1px solid #1c3557',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1c3557';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(28,53,87,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1c3557';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          COMPARE ALL THREE
        </button>
      </div>

      <SpecDrawer yachtId={selectedYacht} onClose={() => setSelectedYacht(null)} />

      {/* COMPARE MODAL */}
      <AnimatePresence>
        {compareOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              background: 'rgba(12,12,14,0.85)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setCompareOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              style={{
                background: 'white',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '1200px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                padding: 'clamp(32px, 5vw, 60px)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCompareOpen(false)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'transparent',
                  border: '1px solid rgba(12,12,14,0.2)',
                  borderRadius: '100px',
                  padding: '8px 24px',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#0c0c0e',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0c0c0e'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0c0c0e' }}
              >
                CLOSE
              </button>

              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#1c3557', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                  FLEET COMPARISON
                </span>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: '#0c0c0e', margin: 0, lineHeight: 1.1 }}>
                  Compare The Standard.
                </h2>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '25%', padding: '24px', textAlign: 'left', borderBottom: '2px solid #0c0c0e' }}></th>
                      {yachts.map(y => (
                        <th key={y.id} style={{ width: '25%', padding: '24px', textAlign: 'center', borderBottom: '2px solid #0c0c0e' }}>
                          <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)', marginBottom: '8px' }}>{y.style.toUpperCase()}</div>
                          <div style={{ fontSize: '18px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{y.name}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allLabels.map((label, idx) => (
                      <tr key={label} style={{ borderBottom: '1px solid rgba(12,12,14,0.1)' }}>
                        <td style={{ padding: '24px', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)', fontWeight: 600 }}>
                          {label}
                        </td>
                        {yachts.map(y => (
                          <td key={`${y.id}-${label}`} style={{ padding: '24px', textAlign: 'center', fontSize: '13px', color: '#0c0c0e', letterSpacing: '0.05em' }}>
                            {getSpecValue(y, label)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
