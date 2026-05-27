import { motion, AnimatePresence } from 'motion/react'

interface ObsidianVelocityPageProps {
  isOpen: boolean
  onClose: () => void
  onBookNow?: () => void
}

export default function ObsidianVelocityPage({ isOpen, onClose, onBookNow }: ObsidianVelocityPageProps) {
  const images = {
    hero: '/media/Black_Plane_12.jpeg',
    specs: '/media/Black_Plane_2.jpeg',
    interior: '/media/Black_Plane_8.jpeg',
    services: '/media/Black_Plane_6.jpeg'
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
          {/* GLOBAL PREMIUM BACKGROUND - STEALTH/OBSIDIAN */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Premium aerospace grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Base rich gradient - Pitch Black/Obsidian */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#000000]/95 to-[#050505]/95 opacity-90" />
            {/* Glowing ambient orbs for cinematic lighting (Warm Platinum and Bronze) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c8bfae] opacity-[0.04] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#737373] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen" />
            {/* Premium noise texture overlay (gives a tactile carbon-fiber/matte feel) */}
            <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.7%22/%3E%3C/svg%3E")' }}></div>
          </div>

          {/* HEADER NAV */}
          <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-center bg-gradient-to-b from-[#000000]/80 to-transparent pointer-events-none">
            <span className="text-[10px] tracking-[0.4em] text-[#c8bfae] uppercase font-semibold">
              Obsidian Velocity Portfolio
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

          {/* HERO SECTION */}
          <section className="relative h-[100vh] flex items-end pb-24 md:pb-32 px-6 md:px-24 z-10">
            <div className="absolute inset-0">
              <img src={images.hero} alt="Obsidian Velocity" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8bfae] block mb-4 font-semibold">Silent Power Above The Clouds.</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight text-white">
                OBSIDIAN VELOCITY
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                The apex of stealth and performance. The Obsidian Velocity is engineered for rapid, undetectable global transit, shrouded in an ultra-low profile chassis.
              </p>
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-[#c8bfae]/[0.01] border-t border-[#c8bfae]/[0.05] backdrop-blur-3xl text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
              
              <div className="lg:w-1/3 sticky top-32">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8bfae] block mb-4 font-semibold">Technical Data</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Aircraft<br/>Specifications.</h2>
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(200,191,174,0.15)] border border-[#c8bfae]/20">
                  <img src={images.specs} alt="Obsidian Velocity Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-8 lg:pt-0">
                
                {/* Performance */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#c8bfae]/30 text-[#c8bfae] pb-3 mb-6">Performance</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Max Range</span><span className="font-semibold text-white">7,000 NM</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cruising Speed</span><span className="font-semibold text-white">610 MPH (Mach 0.80)</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Top Speed</span><span className="font-semibold text-white">Mach 0.90</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Max Altitude</span><span className="font-semibold text-white">51,000 FT</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Engine Type</span><span className="font-semibold text-white">Twin Rolls-Royce BR710</span></li>
                  </ul>
                </div>

                {/* Capacity */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#c8bfae]/30 text-[#c8bfae] pb-3 mb-6">Capacity</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Passengers</span><span className="font-semibold text-white">Up to 16</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Sleeping</span><span className="font-semibold text-white">Up to 8</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Crew</span><span className="font-semibold text-white">2 Pilots, 2 Attendants</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Luggage Vol.</span><span className="font-semibold text-white">195 cu ft</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabins</span><span className="font-semibold text-white">3 Distinct Zones</span></li>
                  </ul>
                </div>

                {/* Dimensions */}
                <div className="md:col-span-2">
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#c8bfae]/30 text-[#c8bfae] pb-3 mb-6">Dimensions</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Length</span><span className="font-semibold text-white">53 FT 7 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Width</span><span className="font-semibold text-white">8 FT 2 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Cabin Height</span><span className="font-semibold text-white">6 FT 2 IN</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Exterior Length</span><span className="font-semibold text-white">162 FT</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Wingspan</span><span className="font-semibold text-white">104 FT</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* AMENITIES & INTERIOR */}
          <section className="py-24 px-6 md:px-24 relative z-10 text-[#f8fafc]">
            {/* Subtle mesh line accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8bfae]/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8bfae] block mb-4 font-semibold">Interior & Features</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Tactical Luxury.</h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-10 max-w-lg">
                  The Obsidian Velocity is trimmed in matte carbon fiber and pitch-black leather. It provides an uncompromised tactical operations center masquerading as a luxury executive suite.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8bfae] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Encrypted Comms</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Military-grade encrypted Wi-Fi and hardened satellite telephony.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8bfae] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Observation Deck</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Oversized panoramic windows with instant blackout electrochromic glass.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8bfae] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Tactical Galley</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Fully equipped galley designed for rapid deployment provisioning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8bfae] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1">Thermal Shielding</h4>
                      <p className="text-[0.8rem] text-white/60 leading-relaxed">Advanced infrared dampening and radar-absorbent exterior coatings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(200,191,174,0.15)] border border-[#c8bfae]/20">
                  <img src={images.interior} alt="Obsidian Velocity Interior" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </section>

          {/* SPECIALTIES AND SERVICES */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-[#c8bfae]/[0.02] border-t border-[#c8bfae]/[0.05] backdrop-blur-3xl text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(200,191,174,0.15)] border border-[#c8bfae]/20">
                  <img src={images.services} alt="Specialties and Operations" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8bfae] block mb-4 font-semibold">Specialties & Operations</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Shadow Protocol.</h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-6">
                  The Obsidian Velocity is reserved exclusively for operations where discretion is not just preferred, but mandatory. Specializing in highly confidential extractions, secure executive transit, and off-grid deployments.
                </p>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-8">
                  Flown by a hand-selected crew of ex-military aviators, the Velocity guarantees unprecedented operational security from departure to arrival.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-4 border border-white/10 p-4 rounded-sm bg-black/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full border border-[#c8bfae]/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#c8bfae] rounded-full" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Blackout Flight Plans</span>
                  </li>
                  <li className="flex items-center gap-4 border border-white/10 p-4 rounded-sm bg-black/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full border border-[#c8bfae]/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#c8bfae] rounded-full" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Tactical Extractions</span>
                  </li>
                  <li className="flex items-center gap-4 border border-white/10 p-4 rounded-sm bg-black/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full border border-[#c8bfae]/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#c8bfae] rounded-full" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Encrypted Global Routing</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* FOOTER CTA */}
          <section className="py-32 text-center relative z-10 text-white px-6">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8bfae]/30 to-transparent" />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Ready To Command<br/>The Obsidian Velocity?</h2>
              <p className="text-white/60 max-w-md mx-auto mb-12 text-[0.95rem]">
                Contact our tactical operations desk today to secure your itinerary, request stealth protocols, or arrange an extraction.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={onBookNow}
                  className="bg-[#c8bfae] text-[#000000] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#e0d6c8] w-full sm:w-auto"
                >
                  Request Charter
                </button>
                <button 
                  onClick={onClose}
                  className="bg-transparent border border-[#c8bfae]/30 text-[#c8bfae] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#c8bfae]/10 w-full sm:w-auto"
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
