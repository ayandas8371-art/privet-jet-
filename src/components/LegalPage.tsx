import { motion, AnimatePresence } from 'motion/react'

type LegalDocumentType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalPageProps {
  documentType: LegalDocumentType
  onClose: () => void
}

export default function LegalPage({ documentType, onClose }: LegalPageProps) {
  const contentMap = {
    privacy: {
      title: "PRIVACY POLICY",
      date: "EFFECTIVE: JANUARY 1, 2026",
      image: "/media/Black%20Plane%204.jpeg",
      text: [
        "Privet Jets (\"we,\" \"our,\" or \"us\") respects your privacy and is deeply committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website, utilize our concierge services, or charter our aircraft, and tells you about your privacy rights and how the law protects you.",
        "We collect and process personal data to provide an unparalleled, bespoke aviation experience. This may include identity data, contact data, financial data, and highly specific preference data (such as dietary requirements and travel habits) to ensure perfection on every flight.",
        "We employ state-of-the-art security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is strictly limited to those employees, agents, contractors, and other third parties who have a business need to know.",
        "We do not sell your personal data. We only share it with trusted third-party service providers (such as ground transportation or exclusive catering partners) explicitly required to fulfill your journey requirements."
      ]
    },
    terms: {
      title: "TERMS OF SERVICE",
      date: "EFFECTIVE: JANUARY 1, 2026",
      image: "/media/Grey%20Plane%2015.jpeg",
      text: [
        "These Terms of Service govern your use of the Privet Jets website and our private aviation services. By accessing our platform or booking a charter, you agree to be bound by these terms in their entirety.",
        "All charter flights are subject to aircraft availability, crew availability, and final confirmation by our operations team. Quotes provided are estimates and may be subject to change based on routing adjustments, airport fees, or de-icing requirements.",
        "Cancellation policies vary based on the specific aircraft and notice period. Due to the highly bespoke nature of our operations, late cancellations may incur substantial fees up to the full cost of the charter.",
        "Privet Jets acts as an agent in arranging flights on behalf of our clients. All flights are operated by fully licensed and certified direct air carriers who maintain full operational control of the aircraft at all times."
      ]
    },
    cookies: {
      title: "COOKIE POLICY",
      date: "EFFECTIVE: JANUARY 1, 2026",
      image: "/media/Golden%20Plane%206.jpeg",
      text: [
        "To provide a seamless, premium digital experience, the Privet Jets website uses cookies and similar tracking technologies.",
        "Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.",
        "We use strictly necessary cookies to ensure our website functions correctly. We also use performance and analytics cookies to understand how our high-net-worth clients interact with our platform, allowing us to continuously refine and elevate our digital presence.",
        "You can set your browser not to accept cookies, but please note that some of our website features may not function as intended as a result."
      ]
    }
  }

  const activeContent = documentType ? contentMap[documentType] : null

  return (
    <AnimatePresence>
      {documentType && activeContent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto',
            color: '#0c0c0e'
          }}
        >
          {/* HEADER */}
          <div style={{
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 40px',
            backgroundColor: 'var(--bg-base)',
            borderBottom: '1px solid rgba(12,12,14,0.05)',
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

          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 160px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
              {activeContent.date}
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontFamily: 'var(--font-serif)', lineHeight: 1.1, marginBottom: '64px', color: '#1c3557' }}>
              {activeContent.title}
            </h1>

            {activeContent.image && (
              <div style={{ width: '100%', height: '400px', marginBottom: '64px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src={activeContent.image} alt={activeContent.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {activeContent.text.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '15px', lineHeight: 2, color: 'rgba(12,12,14,0.7)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(12,12,14,0.1)' }}>
              <p style={{ fontSize: '12px', color: 'rgba(12,12,14,0.5)', letterSpacing: '0.05em' }}>
                If you require further clarification on our {activeContent.title.toLowerCase()}, please contact your dedicated aviation advisor or reach out to our legal department at legal@privetjets.com.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

