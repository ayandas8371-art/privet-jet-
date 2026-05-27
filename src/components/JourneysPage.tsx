import { motion, AnimatePresence } from 'motion/react'

interface JourneysPageProps {
  isOpen: boolean
  onClose: () => void
  onBookNow?: () => void
}

export default function JourneysPage({ isOpen, onClose, onBookNow }: JourneysPageProps) {
  
  const journeys = [
    { 
      title: "THE MONACO GRAND PRIX", 
      subtitle: "FRENCH RIVIERA",
      accentColor: "#c2a88e", // Warm beige/wood to match internal plane
      img: "/media/23.jpeg", 
      desc: "Arrive in style for the most prestigious weekend in motorsport. Moor your yacht and watch the race, with priority helicopter transfers directly from the tarmac to the circuit.",
      flightTime: "2H 15M (FROM LON)"
    },
    { 
      title: "ASPEN WINTER RETREAT", 
      subtitle: "COLORADO, USA",
      accentColor: "#93c5fd", // Crisp icy blue
      img: "/media/30.jpeg", 
      desc: "Direct access to the slopes. We deploy specialized cold-weather equipped heavy jets that can safely navigate high-altitude, short-runway mountain approaches.",
      flightTime: "3H 45M (FROM NYC)"
    },
    { 
      title: "TOKYO CHERRY BLOSSOMS", 
      subtitle: "JAPAN",
      accentColor: "#e28743", // Sunset orange to match the sun
      img: "/media/44.jpeg", 
      desc: "Experience the fleeting beauty of Sakura season. Ultra-long-range comfort across the Pacific, featuring lie-flat master suites and onboard Michelin-starred dining.",
      flightTime: "11H 30M (FROM LAX)"
    },
    { 
      title: "MALDIVES PRIVATE ATOLL", 
      subtitle: "INDIAN OCEAN",
      accentColor: "#eebb4d", // Golden sunlight
      img: "/media/Golden_Plane_17.jpeg", 
      desc: "Total disconnection. Fly direct to Malé, where our concierge team coordinates an immediate luxury seaplane transfer directly to your overwater villa.",
      flightTime: "10H 20M (FROM DXB)"
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '10%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '10%' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 5000,
            backgroundColor: '#0c0c0e',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
          className="scrollbar-hide"
        >
          {/* HEADER NAV */}
          <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-center bg-gradient-to-b from-[#000000]/80 to-transparent pointer-events-none">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 2L2 21L11 17V2Z" fill="white" />
                <path d="M13 2V17L22 21L13 2Z" fill="white" fillOpacity="0.5" />
              </svg>
              <span className="text-[10px] sm:text-[14px] tracking-[0.3em] text-white font-semibold">PRIVET JETS</span>
            </div>
            
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[var(--accent-on-dark)] font-semibold">
              BESPOKE JOURNEYS
            </span>

            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors pointer-events-auto backdrop-blur-md bg-white/5"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* INTRO HERO */}
          <div 
            className="pt-40 pb-20 px-6 md:px-24 flex flex-col items-center text-center relative z-10"
            style={{ background: 'radial-gradient(ellipse at top, rgba(50, 60, 75, 0.6) 0%, #0c0c0e 70%)' }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent-on-dark)] block mb-6 font-semibold">Curated Experiences</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight text-white">
              BEYOND THE <br className="hidden md:block" />HORIZON.
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We don't just fly you to a destination. We curate the entire experience, combining our ultra-luxury fleet with world-class, on-the-ground concierge services for the most exclusive events on the planet.
            </p>
          </div>

          {/* JOURNEYS LIST - EDITORIAL LAYOUT */}
          <div className="flex flex-col w-full bg-[#0c0c0e]">
            {journeys.map((journey, i) => (
              <section key={i} className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden border-t border-white/5">
                {/* Background Image with parallax feel */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={journey.img} 
                    alt={journey.title} 
                    className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
                  />
                  {/* Bottom gradient to anchor the text while keeping the center clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-[#0c0c0e]/30 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 z-10 px-6 md:px-24 pb-12 md:pb-24 w-full flex justify-end">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="max-w-2xl backdrop-blur-2xl bg-black/40 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-[1px]" style={{ backgroundColor: journey.accentColor }} />
                      <span 
                        className="text-[10px] tracking-[0.3em] uppercase font-semibold"
                        style={{ color: journey.accentColor }}
                      >
                        {journey.subtitle}
                      </span>
                    </div>
                    
                    <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                      {journey.title}
                    </h2>
                    
                    <p className="text-white/70 text-[0.95rem] md:text-[1rem] leading-relaxed mb-8">
                      {journey.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                      <div>
                        <span className="block text-[9px] tracking-[0.2em] text-white/50 mb-1">AVG FLIGHT TIME</span>
                        <span className="text-[12px] tracking-[0.1em] text-white font-medium">{journey.flightTime}</span>
                      </div>
                      <button 
                        onClick={onBookNow}
                        className="bg-white text-black px-8 py-4 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto text-center"
                      >
                        Secure Itinerary
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            ))}
          </div>

          {/* FOOTER PADDING */}
          <div className="h-32 bg-[#0c0c0e]"></div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

