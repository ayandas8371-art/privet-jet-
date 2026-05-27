export default function PressStrip() {
  // Use typographic styling to simulate authentic press logos
  const basePublications = [
    { name: "FORBES", style: { fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif', fontSize: '18px' } },
    { name: "ROBB REPORT", style: { fontWeight: 400, letterSpacing: '0.15em', fontFamily: 'var(--font-serif)', fontSize: '16px' } },
    { name: "FINANCIAL TIMES", style: { fontWeight: 400, letterSpacing: '0.05em', fontFamily: 'var(--font-serif)', fontSize: '16px' } },
    { name: "THE WALL STREET JOURNAL.", style: { fontWeight: 600, letterSpacing: '0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '15px' } },
    { name: "VOGUE", style: { fontWeight: 400, letterSpacing: '0.25em', fontFamily: 'var(--font-serif)', fontSize: '18px' } },
    { name: "GQ", style: { fontWeight: 800, letterSpacing: '0.05em', fontFamily: 'system-ui, sans-serif', fontSize: '20px' } }
  ]
  
  // Duplicate the array to ensure the marquee fills the screen and loops seamlessly
  const publications = [...basePublications, ...basePublications, ...basePublications, ...basePublications]

  return (
    <section style={{ 
      backgroundColor: 'var(--bg-base)', 
      borderTop: '1px solid rgba(12,12,14,0.06)',
      borderBottom: '1px solid rgba(12,12,14,0.06)',
      padding: '40px 0', 
      overflow: 'hidden',
      display: 'flex',
      whiteSpace: 'nowrap'
    }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: 'flex',
        gap: '80px',
        animation: 'marquee 40s linear infinite',
        minWidth: 'max-content',
        alignItems: 'center'
      }}>
        {publications.map((pub, i) => (
          <div key={i} style={{ 
            color: 'rgba(12,12,14,0.85)', // Much higher visibility
            display: 'flex',
            alignItems: 'center',
            ...pub.style
          }}>
            {pub.name}
          </div>
        ))}
      </div>
    </section>
  )
}
