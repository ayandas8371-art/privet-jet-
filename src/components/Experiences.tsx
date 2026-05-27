import { motion } from 'motion/react'

export default function Experiences() {
  const cards = [
    {
      category: 'PRIVATE AVIATION',
      title: 'GLOBAL FLEET ACCESS',
      desc: 'Ultra-luxury private jet charters across Europe, Dubai, Monaco, New York, and beyond...'
    },
    {
      category: 'EXECUTIVE JETS',
      title: 'LONG RANGE ELITE',
      desc: 'Fly ultra-long-haul in cinematic comfort with bespoke aircraft tailored for business and leisure...'
    },
    {
      category: 'AVIATION CONCIERGE',
      title: '24 / 7 PRIORITY ACCESS',
      desc: 'Every detail handled — flight planning, customs clearance, chauffeur service, luxury transfers...'
    }
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* VIDEO */}
      <video 
        src="/media/video/Gold_Plane_video_2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
      />

      {/* SMOOTH GRADIENT TRANSITION TO NEXT SECTION */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30vh', // Blends the bottom 30% of the video
        background: 'linear-gradient(to bottom, transparent 0%, var(--bg-base) 100%)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />

      {/* CONTENT */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}>
        
        {/* LEFT ALIGNED CONTAINER */}
        <div style={{ maxWidth: '480px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px,4.5vw,72px)', fontWeight: 400, lineHeight: 0.95, color: 'white', marginBottom: '40px' }}>
            LIFE BEYOND<br/>THE HORIZON
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
                className="glass-card"
                style={{ 
                  padding: '24px 28px',
                  background: 'linear-gradient(135deg, rgba(12,12,14,0.7) 0%, rgba(12,12,14,0.3) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.7)', marginBottom: '8px' }}>
                  {card.category}
                </div>
                <div style={{ fontSize: '18px', color: 'white', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)' }}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
