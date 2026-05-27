import { motion, AnimatePresence } from 'motion/react'

interface AurumEclipsePageProps {
  isOpen: boolean
  onClose: () => void
  onBookNow?: () => void
}

export default function AurumEclipsePage({ isOpen, onClose, onBookNow }: AurumEclipsePageProps) {
  const images = {
    hero: '/media/Golden%20Plane%207.jpeg',
    specs: '/media/Golden%20Plane%204.jpeg',
    interior: '/media/Golden%20Plane%208.jpeg',
    services: '/media/Golden%20Plane%209.jpeg'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[5000] text-white overflow-y-auto overflow-x-hidden bg-[#000000]"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* GLOBAL PREMIUM BACKGROUND */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Premium luxury grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Base rich gradient - Dark Gold/Obsidian */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a150e]/95 via-[#0c0c0e]/95 to-[#000000]/95 opacity-90" />
            {/* Glowing ambient orbs for cinematic lighting */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4af37] opacity-[0.06] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fde047] opacity-[0.03] blur-[150px] rounded-full mix-blend-screen" />
            {/* Premium noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.7%22/%3E%3C/svg%3E")' }}></div>
          </div>

          {/* HEADER NAV */}
          <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-center bg-gradient-to-b from-[#000000]/80 to-transparent pointer-events-none">
            <span className="text-[10px] tracking-[0.4em] text-[var(--gold)] uppercase font-semibold">
              Aurum Eclipse Portfolio
            </span>
            <button 
              onClick={onClose}
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0c0c0e] transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13"/>
              </svg>
            </button>
          </div>

          {/* HERO SECTION */}
          <section className="relative h-[100vh] flex items-end pb-24 md:pb-32 px-6 md:px-24 z-10">
            <div className="absolute inset-0">
              <img src={images.hero} alt="Aurum Eclipse" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] block mb-4">Golden Ultra-Luxury Jet</span>
                <h1 className="font-serif text-[clamp(40px,8vw,100px)] leading-[0.9] text-white mb-6">
                  AURUM ECLIPSE.
                </h1>
                <p className="text-white/70 max-w-lg text-[0.9rem] leading-relaxed tracking-wide">
                  Crafted for those above ordinary. The Aurum Eclipse represents the absolute pinnacle of private aviation, blending unprecedented performance with champagne gold and ivory silk interiors.
                </p>
              </motion.div>
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-[#d4af37]/[0.02] border-t border-[#d4af37]/[0.05] backdrop-blur-3xl text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
              
              <div className="lg:w-1/3 sticky top-32">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] block mb-4 font-semibold">Technical Data</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Aircraft<br/>Specifications.</h2>
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.2)] border border-[#d4af37]/30">
                  <img src={images.specs} alt="Aurum Eclipse Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8">
                
                {/* Performance */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#d4af37]/20 text-[var(--gold)] pb-3 mb-6">Performance</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Max Range</span><span className="font-semibold text-white">7,500 NM</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cruising Speed</span><span className="font-semibold text-white">640 MPH (Mach 0.85)</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Top Speed</span><span className="font-semibold text-white">Mach 0.90</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Max Altitude</span><span className="font-semibold text-white">51,000 FT</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Engine Type</span><span className="font-semibold text-white">Twin Rolls-Royce BR725</span></li>
                  </ul>
                </div>

                {/* Capacity */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#d4af37]/20 text-[var(--gold)] pb-3 mb-6">Capacity</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Passengers</span><span className="font-semibold text-white">Up to 18</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Sleeping</span><span className="font-semibold text-white">Up to 8</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Crew</span><span className="font-semibold text-white">2 Pilots, 2 Attendants</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Luggage Vol.</span><span className="font-semibold text-white">195 cu ft</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabins</span><span className="font-semibold text-white">4 Distinct Zones</span></li>
                  </ul>
                </div>

                {/* Dimensions */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#d4af37]/20 text-[var(--gold)] pb-3 mb-6">Dimensions</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Length</span><span className="font-semibold text-white">53 FT 7 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Width</span><span className="font-semibold text-white">8 FT 2 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Height</span><span className="font-semibold text-white">6 FT 2 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Exterior Length</span><span className="font-semibold text-white">168 FT</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Wingspan</span><span className="font-semibold text-white">117 FT</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* AMENITIES & INTERIOR */}
          <section className="py-24 px-6 md:px-24 relative z-10 text-[#f8fafc]">
            {/* Subtle mesh line accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] block mb-4 font-semibold">Interior & Features</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Unrivaled Comfort.</h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-10 max-w-lg">
                  The Aurum Eclipse is configured with a presidential layout featuring champagne gold accents, hand-stitched ivory silk, and rare wood veneers. It is fully equipped for ultimate productivity and relaxation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Connectivity</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">High-speed Ka-band Wi-Fi and global satellite communications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Entertainment</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">4K Ultra-HD displays with immersive surround sound audio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Catering</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Full forward galley equipped for a private on-board chef.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Wellness</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">100% fresh air circulation with an ultra-low cabin altitude.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Rest</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Dedicated master suite featuring a full en-suite shower.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.2)] border border-[#d4af37]/30">
                  <img src={images.interior} alt="Aurum Eclipse Interior" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </section>

          {/* SPECIALTIES AND SERVICES */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-[#d4af37]/[0.02] border-t border-[#d4af37]/[0.05] backdrop-blur-3xl text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.2)] border border-[#d4af37]/30">
                  <img src={images.services} alt="Specialties and Services" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] block mb-4 font-semibold">Specialties & Repatriation</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Beyond Flights.<br/>Global Operations.</h2>
                <div className="space-y-6 text-white/70 text-[0.95rem] leading-relaxed">
                  <p>
                    The Aurum Eclipse is equipped not just for luxury travel, but for highly sensitive operations including emergency repatriation, secure cargo transit, and diplomatic transport. 
                  </p>
                  <p>
                    With specialized on-board medical bays available upon request, state-of-the-art secure communications, and reinforced security protocols, our fleet is the trusted choice for governments and ultra-high-net-worth individuals requiring critical, discreet movements.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* FOOTER CTA */}
          <section className="py-32 text-center relative z-10 text-white px-6">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Ready To Charter<br/>The Aurum Eclipse?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-12 text-[0.95rem]">
              Contact our concierge desk today to secure your itinerary, request special accommodations, or arrange a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={onBookNow}
                className="bg-[#d4af37] text-[#000000] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#fde047] w-full sm:w-auto"
              >
                Request Charter
              </button>
              <button 
                onClick={onClose}
                className="bg-transparent border border-[#d4af37]/30 text-[#d4af37] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#d4af37]/10 w-full sm:w-auto"
              >
                Back To Fleet
              </button>
            </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
