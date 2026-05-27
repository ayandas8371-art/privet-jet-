import { motion } from 'motion/react'
import { useState } from 'react'

export default function Membership() {
  const [hoveredField, setHoveredField] = useState<string | null>(null)

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
            PRIVATE CHARTER
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', lineHeight: 0.95, margin: 0, fontFamily: 'var(--font-serif)' }}>
          BOOK YOUR FLIGHT.
        </h2>
      </div>

      <div 
        className="grid-1-on-mobile"
        style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
        gap: '80px',
        alignItems: 'start'
      }}>
        
        {/* LEFT COL - BOOKING FORM */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '20px' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(12,12,14,0.7)', maxWidth: '480px' }}>
            Experience the ultimate freedom of bespoke travel. Request a charter and our dedicated aviation advisors will curate an itinerary perfectly tailored to your exacting standards, ensuring seamless global connectivity.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Input 1 */}
            <div 
              style={{ borderBottom: hoveredField === 'from' ? '1px solid #0c0c0e' : '1px solid rgba(12,12,14,0.2)', transition: 'border-color 0.3s', paddingBottom: '12px' }}
              onMouseEnter={() => setHoveredField('from')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '8px', fontWeight: 600 }}>DEPARTURE</div>
              <input type="text" placeholder="City or Airport Code" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '24px', color: '#0c0c0e', outline: 'none', fontFamily: 'var(--font-serif)' }} />
            </div>

            {/* Input 2 */}
            <div 
              style={{ borderBottom: hoveredField === 'to' ? '1px solid #0c0c0e' : '1px solid rgba(12,12,14,0.2)', transition: 'border-color 0.3s', paddingBottom: '12px' }}
              onMouseEnter={() => setHoveredField('to')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '8px', fontWeight: 600 }}>DESTINATION</div>
              <input type="text" placeholder="City or Airport Code" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '24px', color: '#0c0c0e', outline: 'none', fontFamily: 'var(--font-serif)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* Input 3 */}
              <div 
                style={{ borderBottom: hoveredField === 'date' ? '1px solid #0c0c0e' : '1px solid rgba(12,12,14,0.2)', transition: 'border-color 0.3s', paddingBottom: '12px' }}
                onMouseEnter={() => setHoveredField('date')}
                onMouseLeave={() => setHoveredField(null)}
              >
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '8px', fontWeight: 600 }}>DATE</div>
                <input type="text" placeholder="Select Date" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '24px', color: '#0c0c0e', outline: 'none', fontFamily: 'var(--font-serif)' }} />
              </div>

              {/* Input 4 */}
              <div 
                style={{ borderBottom: hoveredField === 'pax' ? '1px solid #0c0c0e' : '1px solid rgba(12,12,14,0.2)', transition: 'border-color 0.3s', paddingBottom: '12px' }}
                onMouseEnter={() => setHoveredField('pax')}
                onMouseLeave={() => setHoveredField(null)}
              >
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '8px', fontWeight: 600 }}>PASSENGERS</div>
                <input type="text" placeholder="Number of Guests" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '24px', color: '#0c0c0e', outline: 'none', fontFamily: 'var(--font-serif)' }} />
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, background: '#253f63' }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              background: '#1c3557', 
              color: 'white', 
              width: '100%', 
              padding: '24px', 
              fontSize: '11px', 
              letterSpacing: '0.25em', 
              border: 'none', 
              borderRadius: '100px', 
              cursor: 'pointer',
              marginTop: '16px',
              fontWeight: 600,
              boxShadow: '0 12px 32px rgba(28,53,87,0.25)',
              transition: 'background 0.3s'
            }}
          >
            REQUEST A QUOTE
          </motion.button>
        </div>

        {/* RIGHT COL - STICKY VIDEO EXPERIENCE */}
        <div style={{ position: 'sticky', top: '120px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
          <video 
            className="membership-video"
            src="/media/video/Private_jet_flying_above_clouds_2 orignal.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block' }} 
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(12,12,14,0.95) 0%, rgba(12,12,14,0.2) 60%, transparent 100%)',
            pointerEvents: 'none'
          }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '48px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
              <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
                YOUR JOURNEY AWAITS
              </div>
            </div>
            <div style={{ fontSize: '32px', lineHeight: 1.2, color: 'white', maxWidth: '90%', fontFamily: 'var(--font-serif)' }}>
              "The pinnacle of aviation luxury, ready to connect you with the world."
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
