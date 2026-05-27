import { motion } from 'motion/react'
import { useState } from 'react'

interface ConciergeFormProps {
  onBookNow?: () => void
}

export default function ConciergeForm({ onBookNow }: ConciergeFormProps) {
  const [hoveredField, setHoveredField] = useState<string | null>(null)
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [pax, setPax] = useState('')
  const [email, setEmail] = useState('')

  const handleRequest = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!destination || !date || !pax || !email) {
      alert("Please fill in all fields (Destination, Date, Passengers, and Email) to request an itinerary.")
      return
    }

    const subject = encodeURIComponent(`Private Jet Charter Request - ${destination}`)
    const body = encodeURIComponent(`Hello Privet Jets,

I would like to request a personalized flight itinerary. Here are my flight details:

Destination: ${destination}
Departure Date: ${date}
Passengers: ${pax}
Contact Email: ${email}

Please get back to me as soon as possible with available aircraft options and quotes.

Best regards,`)

    window.location.href = `mailto:concierge@privetjets.com?subject=${subject}&body=${body}`
  }

  return (
    <section style={{ 
      background: 'radial-gradient(circle at top center, #2a4c7a 0%, #1c3557 50%, #0f1c2e 100%)', 
      padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle ambient light effects */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
            AVIATION CONCIERGE
          </span>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
        </div>
        
        <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.95, margin: '0 0 60px 0', fontWeight: 400, fontFamily: 'var(--font-serif)' }}>
          DESIGN YOUR FLIGHT.
        </h2>

        <form 
          className="p-small-mobile"
          style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '32px', 
          textAlign: 'left', 
          background: 'rgba(255,255,255,0.02)', 
          padding: '48px', 
          borderRadius: '4px', 
          border: '1px solid rgba(255,255,255,0.05)', 
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)'
        }}>
          
          <div 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: hoveredField === 'dest' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.3s', paddingBottom: '8px' }}
            onMouseEnter={() => setHoveredField('dest')}
            onMouseLeave={() => setHoveredField(null)}
          >
            <label style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>DESTINATION</label>
            <input 
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Monaco, Teterboro..." 
              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px', outline: 'none', fontFamily: 'var(--font-serif)' }}
              onFocus={() => setHoveredField('dest')}
            />
          </div>

          <div 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: hoveredField === 'date' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.3s', paddingBottom: '8px' }}
            onMouseEnter={() => setHoveredField('date')}
            onMouseLeave={() => setHoveredField(null)}
          >
            <label style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>DEPARTURE DATE</label>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px', outline: 'none', fontFamily: 'var(--font-serif)' }}
              onFocus={() => setHoveredField('date')}
            />
          </div>

          <div 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: hoveredField === 'pax' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.3s', paddingBottom: '8px' }}
            onMouseEnter={() => setHoveredField('pax')}
            onMouseLeave={() => setHoveredField(null)}
          >
            <label style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>PASSENGERS</label>
            <select 
              value={pax}
              onChange={(e) => setPax(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px', outline: 'none', cursor: 'pointer', fontFamily: 'var(--font-serif)' }}
              onFocus={() => setHoveredField('pax')}
            >
              <option value="" style={{ color: 'black' }}>Select number...</option>
              <option value="1-4" style={{ color: 'black' }}>1 to 4 Guests</option>
              <option value="5-10" style={{ color: 'black' }}>5 to 10 Guests</option>
              <option value="11-19" style={{ color: 'black' }}>11 to 19 Guests</option>
            </select>
          </div>

          <div 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: hoveredField === 'email' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.3s', paddingBottom: '8px' }}
            onMouseEnter={() => setHoveredField('email')}
            onMouseLeave={() => setHoveredField(null)}
          >
            <label style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com" 
              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px', outline: 'none', fontFamily: 'var(--font-serif)' }}
              onFocus={() => setHoveredField('email')}
            />
          </div>
        </form>

        <motion.button 
          onClick={handleRequest}
          whileHover={{ scale: 1.02, backgroundColor: '#c8bfae', color: '#1c3557' }}
          whileTap={{ scale: 0.98 }}
          style={{
            marginTop: '60px',
            background: 'white',
            color: '#1c3557',
            padding: '20px 60px',
            fontSize: '11px',
            letterSpacing: '0.25em',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            fontWeight: 700,
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s'
          }}
        >
          REQUEST ITINERARY
        </motion.button>
      </div>
    </section>
  )
}
