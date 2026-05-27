import { motion } from 'motion/react'

export default function Academy() {
  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)', borderTop: '1px solid rgba(12,12,14,0.05)' }}>
      <div className="grid-1-on-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '80px', alignItems: 'center' }}>
        
        {/* LEFT COL - COPY & FEATURES */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
              SAFETY & EXCELLENCE
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', lineHeight: 0.95, margin: '0 0 32px 0', fontFamily: 'var(--font-serif)' }}>
            UNYIELDING STANDARDS.
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(12,12,14,0.7)', marginBottom: '24px', maxWidth: '480px' }}>
            When you fly with Privet Jets, absolute peace of mind is your ultimate luxury. We do not just meet aviation safety mandates—we relentlessly exceed them.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(12,12,14,0.7)', marginBottom: '48px', maxWidth: '480px' }}>
            Our exclusive academy recruits only the top 1% of veteran aviators, demanding rigorous biannual simulator checks. Coupled with a hospitality crew trained in discreet, five-star service, we ensure your journey is as flawless as it is secure.
          </p>

          {/* Feature Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 24px' }}>
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '12px', fontWeight: 600 }}>VETERAN COMMANDERS</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(12,12,14,0.6)' }}>A minimum of 10,000 flight hours is strictly required for all Captains across our global fleet.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '12px', fontWeight: 600 }}>ELITE MAINTENANCE</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(12,12,14,0.6)' }}>In-house, factory-trained engineers ensuring impeccable aircraft reliability before every flight.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '12px', fontWeight: 600 }}>DISCREET HOSPITALITY</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(12,12,14,0.6)' }}>Cabin crew trained by leading luxury hospitality institutes for anticipatory, invisible service.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '12px', fontWeight: 600 }}>GLOBAL INTELLIGENCE</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(12,12,14,0.6)' }}>24/7 dedicated flight monitoring, meteorological tracking, and real-time security routing.</p>
            </div>
          </div>
        </div>

        {/* RIGHT COL - STUNNING IMAGE COLLAGE */}
        <div className="relative flex flex-col md:block h-auto md:h-[700px] w-full gap-6 mt-12 md:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="relative md:absolute md:top-0 md:right-0 w-full md:w-[75%] aspect-video md:aspect-auto md:h-[65%] rounded overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
          >
            <img src="/media/Golden Plane 16.jpeg" alt="Jet soaring above clouds" className="w-full h-full object-cover academy-golden-plane" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative md:absolute md:bottom-[15%] md:left-0 w-full md:w-[55%] aspect-video md:aspect-auto md:h-[45%] rounded overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] border-[8px] border-[var(--bg-base)]"
          >
            <img src="/media/36.jpeg" alt="Luxurious bespoke cabin interior" className="w-full h-full object-cover academy-black-plane-1" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="relative md:absolute md:bottom-0 md:right-[10%] w-full md:w-[45%] aspect-video md:aspect-auto md:h-[35%] rounded overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] border-[8px] border-[var(--bg-base)]"
          >
            <img src="/media/Grey Plane 3.jpeg" alt="Titanium Stratus on tarmac" className="w-full h-full object-cover academy-black-plane-2" />
          </motion.div>

        </div>

      </div>
    </section>
  )
}
