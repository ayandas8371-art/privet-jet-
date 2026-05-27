interface FooterProps {
  onOpenLegal?: (doc: 'privacy' | 'terms' | 'cookies') => void
  onFleetOpen?: () => void
  onMembershipOpen?: () => void
  onContactOpen?: () => void
}

export default function Footer({ onOpenLegal, onFleetOpen, onMembershipOpen, onContactOpen }: FooterProps) {
  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #1c3557 0%, #0d1b2e 100%)', 
      color: 'white', 
      padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,96px) 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
        
        {/* COL 1 - LOGO */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 2L2 21L11 17V2Z" fill="white" />
                <path d="M13 2V17L22 21L13 2Z" fill="white" fillOpacity="0.5" />
              </svg>
            <span style={{ fontSize: '14px', letterSpacing: '0.3em', color: 'white' }}>
              PRIVET JETS
            </span>
          </div>
          <p style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', maxWidth: '240px' }}>
            The world's most exclusive private aviation network. Curated for those who demand perfection.
          </p>
        </div>

        {/* COL 2 - EXPLORE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent-on-dark)', marginBottom: '8px' }}>EXPLORE</span>
          {[
            { label: 'HOME', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
            { label: 'OUR FLEET', action: onFleetOpen },
            { label: 'MEMBERSHIP', action: onMembershipOpen },
            { label: 'CONTACT', action: onContactOpen }
          ].map(link => (
            <a 
              key={link.label} 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (link.action) link.action();
              }}
              style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} 
              onMouseEnter={(e) => e.currentTarget.style.color='white'} 
              onMouseLeave={(e) => e.currentTarget.style.color='rgba(255,255,255,0.6)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* COL 3 - LEGAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent-on-dark)', marginBottom: '8px' }}>LEGAL</span>
          {[
            { name: 'PRIVACY POLICY', id: 'privacy' as const }, 
            { name: 'TERMS OF SERVICE', id: 'terms' as const }, 
            { name: 'COOKIE POLICY', id: 'cookies' as const }
          ].map(link => (
            <a 
              key={link.id} 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenLegal) onOpenLegal(link.id);
              }}
              style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} 
              onMouseEnter={(e) => e.currentTarget.style.color='white'} 
              onMouseLeave={(e) => e.currentTarget.style.color='rgba(255,255,255,0.6)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* COL 4 - SOCIAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent-on-dark)', marginBottom: '8px' }}>SOCIAL</span>
          {[
            { name: 'INSTAGRAM', url: 'https://instagram.com' }, 
            { name: 'LINKEDIN', url: 'https://linkedin.com' }, 
            { name: 'TWITTER', url: 'https://twitter.com' }
          ].map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color='white'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              {social.name}
            </a>
          ))}
        </div>

      </div>

      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} PRIVET JETS. ALL RIGHTS RESERVED.
        </div>
        <div style={{ fontSize: '8px', letterSpacing: '0.4em', color: 'var(--accent-on-dark)' }}>
          DESIGNED FOR THE ELITE
        </div>
      </div>
    </footer>
  )
}

