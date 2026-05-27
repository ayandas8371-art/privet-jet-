import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  // Duplicate the array to create the seamless infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section style={{ position: 'relative', padding: 'clamp(80px,10vw,140px) 0', overflow: 'hidden' }}>
      
      {/* CINEMATIC VIDEO BACKGROUND */}
      <video 
        src="/media/video/website material 1.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
      />
      
      {/* PREMIUM DARK OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(12,12,14,0.85) 0%, rgba(12,12,14,0.6) 100%)',
        zIndex: 1
      }} />

      {/* Injecting custom keyframes for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Section Header */}
      <div style={{ position: 'relative', zIndex: 10, paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
            MEMBER VOICES
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: 'white', lineHeight: 0.95, margin: 0, fontFamily: 'var(--font-serif)' }}>
          THOSE WHO KNOW.
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div 
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Transparent gradient overlays to fade the edges smoothly */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, rgba(12,12,14,0.95) 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, rgba(12,12,14,0.95) 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }} />

        <div 
          className="animate-marquee"
          style={{
            display: 'flex',
            gap: '32px',
            paddingBottom: '80px',
            paddingTop: '20px',
            width: 'max-content'
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="group"
              style={{
                flexShrink: 0,
                width: 'clamp(320px, 35vw, 440px)',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                transition: 'box-shadow 0.7s var(--ease-luxury), transform 0.7s var(--ease-luxury), background 0.7s var(--ease-luxury)',
                cursor: 'grab'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 32px 80px rgba(0,0,0,0.4)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 24px 64px rgba(0,0,0,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Elegant Quote Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent)" style={{ opacity: 0.4, marginBottom: '32px' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              
              {/* Authentic Quote Text */}
              <p style={{ 
                fontStyle: 'italic', 
                fontSize: '15px', 
                lineHeight: 1.9, 
                color: 'rgba(255,255,255,0.9)', 
                marginBottom: '40px', 
                flex: 1,
                fontWeight: 400,
                textTransform: 'none' 
              }}>
                {t.quote}
              </p>

              <div style={{ width: '40px', height: '1px', background: 'var(--accent)', marginBottom: '32px', opacity: 0.5 }} />
              
              {/* Profile Row with Image */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'white', marginBottom: '6px', fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
