import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show after slight delay
    const timer = setTimeout(() => {
      if (!localStorage.getItem('privet-cookie-consent')) {
        setVisible(true)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('privet-cookie-consent', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="glass-mid"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            zIndex: 150,
            padding: '20px 24px',
            borderRadius: '4px',
            maxWidth: '360px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '10px', lineHeight: 1.6, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>
            We use cookies to curate your experience and analyze our traffic. By continuing to browse, you agree to our sophisticated standard of privacy.
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={handleAccept}
              style={{
                flex: 1,
                padding: '10px 0',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '2px',
                fontSize: '9px',
                letterSpacing: '0.2em',
                cursor: 'pointer'
              }}
            >
              ACCEPT
            </button>
            <button 
              onClick={() => setVisible(false)}
              style={{
                flex: 1,
                padding: '10px 0',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '2px',
                fontSize: '9px',
                letterSpacing: '0.2em',
                cursor: 'pointer'
              }}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
