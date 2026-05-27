import { motion, AnimatePresence } from 'motion/react'

interface ContactPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPage({ isOpen, onClose }: ContactPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto',
            color: '#0c0c0e'
          }}
        >
          {/* HEADER BAR */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 40px',
            zIndex: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 2L2 21L11 17V2Z" fill="#1c3557" />
                <path d="M13 2V17L22 21L13 2Z" fill="#1c3557" fillOpacity="0.5" />
              </svg>
              <span style={{ fontSize: '14px', letterSpacing: '0.3em', color: '#1c3557', fontWeight: 500 }}>PRIVET JETS</span>
            </div>
            
            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid rgba(12,12,14,0.2)',
                borderRadius: '100px',
                padding: '8px 24px',
                color: '#0c0c0e',
                fontSize: '9px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'background 0.3s, color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1c3557';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0c0c0e';
              }}
            >
              CLOSE
            </button>
          </div>

          {/* CINEMATIC HERO */}
          <div style={{ position: 'relative', height: '60vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '80px', overflow: 'hidden' }}>
            <video 
              src="/media/video/fling jet cinematic 2.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,14,0.3) 0%, var(--bg-base) 100%)' }} />
            
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#1c3557', fontWeight: 600, display: 'block', marginBottom: '24px' }}
              >
                24/7 GLOBAL SUPPORT
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontFamily: 'var(--font-serif)', lineHeight: 1.1, textTransform: 'uppercase', color: '#1c3557' }}
              >
                Connect With Us
              </motion.h1>
            </div>
          </div>

          {/* MAIN CONTENT GRID */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px' }}>
            
            {/* CONTACT FORM */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: '#1c3557' }}>Direct Inquiry</h2>
                <p style={{ fontSize: '14px', letterSpacing: '0.05em', color: '#0c0c0e', lineHeight: 1.8 }}>
                  To request a private charter or learn more about our exclusive membership tiers, please complete the form below. A dedicated aviation advisor will respond within 15 minutes.
                </p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
                <div className="grid-1-on-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <input type="text" placeholder="FIRST NAME" style={inputStyle} />
                  <input type="text" placeholder="LAST NAME" style={inputStyle} />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" style={inputStyle} />
                <input type="tel" placeholder="PHONE NUMBER" style={inputStyle} />
                <select style={{ ...inputStyle, appearance: 'none', color: 'rgba(12,12,14,0.6)' }}>
                  <option value="">INQUIRY TYPE</option>
                  <option value="charter">Charter Request</option>
                  <option value="membership">Membership Application</option>
                  <option value="press">Press & Media</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea placeholder="MESSAGE (OPTIONAL)" rows={4} style={{ ...inputStyle, resize: 'none' }}></textarea>
                
                <button 
                  style={{
                    marginTop: '24px',
                    padding: '18px',
                    background: '#1c3557',
                    color: 'white',
                    border: 'none',
                    borderRadius: '100px',
                    fontSize: '13px',
                    letterSpacing: '0.2em',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.3s, transform 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#253f63';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1c3557';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

            {/* GLOBAL DESKS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              
              {/* IMAGE ENHANCEMENT */}
              <div style={{ width: '100%', height: '240px', borderRadius: '8px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                <img src="/media/Black Plane 4.jpeg" alt="Luxury Jet" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,14,0.8), transparent)' }} />
              </div>

              <div>
                <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: '#1c3557' }}>VIP Concierge</h2>
                <p style={{ fontSize: '14px', letterSpacing: '0.05em', color: '#0c0c0e', lineHeight: 1.8, marginBottom: '24px' }}>
                  For immediate assistance, our global operations team is available 24 hours a day, 7 days a week, 365 days a year.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="tel:+18005550199" style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: '#1c3557', textDecoration: 'none', letterSpacing: '0.05em', borderBottom: '1px solid rgba(28,53,87,0.3)', paddingBottom: '8px', display: 'inline-block', width: 'fit-content', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#1c3557'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(28,53,87,0.3)'}>+1 (800) 555-0199</a>
                  <a href="mailto:vip@privetjets.com" style={{ fontSize: '16px', color: '#1c3557', textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 500, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0c0c0e'} onMouseLeave={(e) => e.currentTarget.style.color = '#1c3557'}>vip@privetjets.com</a>
                </div>
              </div>

              {/* SECOND IMAGE ENHANCEMENT */}
              <div style={{ width: '100%', height: '160px', borderRadius: '8px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                <img src="/media/main hero image.jpg" alt="Aviation Lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,53,87,0.3), transparent)' }} />
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: GLOBAL HUBS */}
          <div style={{ width: '100%', padding: '0 24px 160px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: '#1c3557', marginBottom: '64px' }}>Global Operations Hubs</h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(40px, 6vw, 100px)', flexWrap: 'wrap' }}>
              {/* NEW YORK */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '220px', gap: '12px' }}>
                <span style={{ fontSize: '16px', letterSpacing: '0.2em', color: '#1c3557', fontWeight: 700 }}>NEW YORK</span>
                <span style={{ fontSize: '14px', color: '#0c0c0e', lineHeight: 1.6 }}>One World Trade Center<br/>New York, NY 10007</span>
                <a href="tel:+12125550188" style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#1c3557', textDecoration: 'none', marginTop: '4px', fontWeight: 600, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0c0c0e'} onMouseLeave={(e) => e.currentTarget.style.color = '#1c3557'}>+1 212 555 0188</a>
              </div>
              
              {/* LONDON */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '220px', gap: '12px' }}>
                <span style={{ fontSize: '16px', letterSpacing: '0.2em', color: '#1c3557', fontWeight: 700 }}>LONDON</span>
                <span style={{ fontSize: '14px', color: '#0c0c0e', lineHeight: 1.6 }}>Farnborough Airport<br/>Hampshire, GU14 6XA</span>
                <a href="tel:+442075550166" style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#1c3557', textDecoration: 'none', marginTop: '4px', fontWeight: 600, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0c0c0e'} onMouseLeave={(e) => e.currentTarget.style.color = '#1c3557'}>+44 20 7555 0166</a>
              </div>

              {/* DUBAI */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '220px', gap: '12px' }}>
                <span style={{ fontSize: '16px', letterSpacing: '0.2em', color: '#1c3557', fontWeight: 700 }}>DUBAI</span>
                <span style={{ fontSize: '14px', color: '#0c0c0e', lineHeight: 1.6 }}>Al Maktoum International<br/>Dubai South, UAE</span>
                <a href="tel:+97145550199" style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#1c3557', textDecoration: 'none', marginTop: '4px', fontWeight: 600, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0c0c0e'} onMouseLeave={(e) => e.currentTarget.style.color = '#1c3557'}>+971 4 555 0199</a>
              </div>

              {/* TOKYO */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '220px', gap: '12px' }}>
                <span style={{ fontSize: '16px', letterSpacing: '0.2em', color: '#1c3557', fontWeight: 700 }}>TOKYO</span>
                <span style={{ fontSize: '14px', color: '#0c0c0e', lineHeight: 1.6 }}>Haneda Airport<br/>Ota City, Tokyo 144-0041</span>
                <a href="tel:+8135550122" style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#1c3557', textDecoration: 'none', marginTop: '4px', fontWeight: 600, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0c0c0e'} onMouseLeave={(e) => e.currentTarget.style.color = '#1c3557'}>+81 3 555 0122</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(12,12,14,0.2)',
  padding: '16px 0',
  fontSize: '14px',
  letterSpacing: '0.05em',
  color: '#0c0c0e',
  outline: 'none',
  transition: 'border-color 0.3s'
}

