import { motion } from 'motion/react'

export default function BrandManifesto() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* VIDEO */}
      <video 
        src="/media/video/Main_hero_video_4.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
      />

      {/* CINEMATIC GRADIENT OVERLAY FOR TEXT LEGIBILITY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)',
        pointerEvents: 'none',
        zIndex: 5
      }} />

      {/* CONTENT */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        minHeight: '100vh',
        padding: 'clamp(40px,8vw,100px) clamp(24px,6vw,96px)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          style={{ 
            maxWidth: '560px', 
            textAlign: 'left' 
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              THE PRIVET PHILOSOPHY
            </span>
          </div>

          {/* Headline */}
          <h2 style={{ fontSize: 'clamp(32px,4.5vw,72px)', fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.01em', color: 'white', marginBottom: '32px', textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
            PRIVATE ACCESS.<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--accent-on-dark)' }}>OPEN HORIZONS.</em>
          </h2>

          {/* Paragraph */}
          <p style={{ fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            WE CURATE EXPERIENCES FOR THOSE WHO EXPECT SILENCE, POWER, AND PRECISION ABOVE THE CLOUDS. SINCE 1975, THOSE WHO DEMAND THE FINEST HAVE TRUSTED ONE NAME.
          </p>

          {/* Button */}
          <button style={{
            marginTop: '40px',
            padding: '14px 36px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '2px',
            backdropFilter: 'blur(8px)',
            color: 'white',
            fontSize: '10px',
            letterSpacing: '0.25em',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  )
}
