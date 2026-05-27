import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'WHAT ARE THE LUGGAGE ALLOWANCES?',
      a: 'Allowances depend on your selected jet tier. The OBSIDIAN VELOCITY accommodates extensive luggage for up to 16 guests, while the TITANIUM STRATUS includes expanded cargo space for global transits.'
    },
    {
      q: 'DO YOU ALLOW PETS ON BOARD?',
      a: 'Yes, we curate pet-friendly experiences. We handle all necessary documentation, comfort provisions, and ensure a seamless journey for all members of your family.'
    },
    {
      q: 'HOW FAR IN ADVANCE MUST I BOOK?',
      a: 'For our Founders\' Circle members, we guarantee aircraft availability with a mere 12-hour notice. Standard charters generally require 24 to 48 hours for optimal aircraft curation.'
    },
    {
      q: 'CAN I CHANGE MY ITINERARY IN-FLIGHT?',
      a: 'Absolutely. Our aviation concierge and flight crew maintain continuous communication, allowing for mid-journey itinerary changes, pending airspace and customs approvals.'
    }
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* CINEMATIC VIDEO BACKGROUND */}
      <video 
        src="/media/video/Grey%20Plane%20video%201.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
      />
      
      {/* LUXURY DARK OVERLAY FOR READABILITY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(12,12,14,0.95) 0%, rgba(12,12,14,0.7) 100%)',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c8bfae' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#c8bfae', fontWeight: 600 }}>
            FAQ
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'white', lineHeight: 0.95, margin: '0 0 60px 0', fontFamily: 'var(--font-serif)' }}>
          FREQUENT INQUIRIES.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '32px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '14px', letterSpacing: '0.1em', color: isOpen ? '#c8bfae' : 'white', transition: 'color 0.3s' }}>
                    {faq.q}
                  </span>
                  <span style={{ fontSize: '20px', color: isOpen ? '#c8bfae' : 'rgba(255,255,255,0.5)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s' }}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ margin: '0 0 32px 0', fontSize: '13px', lineHeight: 1.8, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
