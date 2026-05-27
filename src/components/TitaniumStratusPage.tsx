import { motion, AnimatePresence } from 'motion/react'

interface TitaniumStratusPageProps {
  isOpen: boolean
  onClose: () => void
  onBookNow?: () => void
}

export default function TitaniumStratusPage({ isOpen, onClose, onBookNow }: TitaniumStratusPageProps) {
  const images = {
    hero: '/media/Grey Plane 12.jpeg',
    specs: '/media/Grey Plane 3.jpeg',
    interior: '/media/Grey Plane 8.jpeg',
    services: '/media/Grey Plane 10.jpeg'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[5000] text-white overflow-y-auto overflow-x-hidden bg-[#020617]"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* GLOBAL PREMIUM BACKGROUND */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Premium aerospace grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Base rich gradient - Deep Slate Blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e293b]/95 to-[#020617]/95 opacity-90" />
            {/* Glowing ambient orbs for cinematic lighting */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#94a3b8] opacity-[0.08] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen" />
            {/* Premium noise texture overlay (gives a tactile brushed-metal/matte feel) */}
            <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.7%22/%3E%3C/svg%3E")' }}></div>
          </div>

          {/* HEADER NAV */}
          <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-center bg-gradient-to-b from-[#020617]/80 to-transparent pointer-events-none">
            <span className="text-[10px] tracking-[0.4em] text-[#94a3b8] uppercase font-semibold">
              Titanium Stratus Portfolio
            </span>
            <button 
              onClick={onClose}
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#09090b] transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13"/>
              </svg>
            </button>
          </div>

          {/* HERO SECTION */}
          <section className="relative h-[100vh] flex items-end pb-24 md:pb-32 px-6 md:px-24 z-10">
            <div className="absolute inset-0">
              <img src={images.hero} alt="Titanium Stratus" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#94a3b8] block mb-4 font-semibold">Precision Engineered Luxury</span>
                <h1 className="font-serif text-[clamp(40px,7vw,100px)] leading-[0.9] text-[#f8fafc] mb-6">
                  TITANIUM STRATUS.
                </h1>
                <p className="text-white/70 max-w-lg text-[0.95rem] leading-relaxed tracking-wide">
                  The absolute apex of modern aviation. The Titanium Stratus merges hyper-advanced aeronautics with a hyper-minimalist, slate-grey and brushed steel interior. For those who demand quiet, uncompromising power.
                </p>
              </motion.div>
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-white/[0.02] border-t border-white/[0.05] backdrop-blur-3xl text-[#f8fafc]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
              
              <div className="lg:w-1/3 sticky top-32">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#94a3b8] block mb-4 font-semibold">Technical Data</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Aircraft<br/>Specifications.</h2>
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(255,255,255,0.15)] border border-white/20">
                  <img src={images.specs} alt="Titanium Stratus Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8">
                
                {/* Performance */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#334155] text-[#e2e8f0] pb-3 mb-6">Performance</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Max Range</span><span className="font-semibold text-white">8,500 NM</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Cruising Speed</span><span className="font-semibold text-white">655 MPH (Mach 0.88)</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Top Speed</span><span className="font-semibold text-white">Mach 0.925</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Max Altitude</span><span className="font-semibold text-white">51,000 FT</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Engine Type</span><span className="font-semibold text-white">Twin Rolls-Royce Pearl 700</span></li>
                  </ul>
                </div>

                {/* Capacity */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#334155] text-[#e2e8f0] pb-3 mb-6">Capacity</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Passengers</span><span className="font-semibold text-white">Up to 19</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Sleeping</span><span className="font-semibold text-white">Up to 10</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Crew</span><span className="font-semibold text-white">2 Pilots, 3 Attendants</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Luggage Vol.</span><span className="font-semibold text-white">220 cu ft</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Cabins</span><span className="font-semibold text-white">4 Executive Suites</span></li>
                  </ul>
                </div>

                {/* Dimensions */}
                <div>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold border-b-2 border-[#334155] text-[#e2e8f0] pb-3 mb-6">Dimensions</h3>
                  <ul className="space-y-4 text-[0.9rem]">
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Cabin Length</span><span className="font-semibold text-white">58 FT 4 IN</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Cabin Width</span><span className="font-semibold text-white">8 FT 6 IN</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Cabin Height</span><span className="font-semibold text-white">6 FT 5 IN</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Exterior Length</span><span className="font-semibold text-white">155 FT</span></li>
                    <li className="flex justify-between border-b border-[#334155]/50 pb-2"><span className="text-white/50">Wingspan</span><span className="font-semibold text-white">109 FT</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* AMENITIES & INTERIOR */}
          <section className="py-24 px-6 md:px-24 relative z-10 text-[#f8fafc]">
            {/* Subtle mesh line accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#94a3b8]/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#94a3b8] block mb-4 font-semibold">Interior & Features</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">Engineering Serenity.</h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-10 max-w-lg">
                  The Titanium Stratus features 4 distinct living zones trimmed in brushed titanium, matte carbon fiber, and slate grey leather. Our acoustic engineering makes it the quietest cabin in its class.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1 text-white">Acoustic Shielding</h4>
                      <p className="text-[0.8rem] text-white/50 leading-relaxed">Advanced dampening drops cabin noise to library levels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1 text-white">Circadian Lighting</h4>
                      <p className="text-[0.8rem] text-white/50 leading-relaxed">Dynamic LED spectrum adjusts to combat jet lag across timezones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1 text-white">Secure Comm-Link</h4>
                      <p className="text-[0.8rem] text-white/50 leading-relaxed">Military-grade encrypted Wi-Fi and satellite telephony.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1 text-white">Executive Boardroom</h4>
                      <p className="text-[0.8rem] text-white/50 leading-relaxed">Mid-cabin suite converts to a fully functional 6-seat conference table.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[0.85rem] uppercase tracking-wide mb-1 text-white">Zero-Gravity Seats</h4>
                      <p className="text-[0.8rem] text-white/50 leading-relaxed">Ergonomic seating engineered for maximum spinal decompression.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(255,255,255,0.15)] border border-white/20">
                  <img src={images.interior} alt="Titanium Stratus Interior" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </section>

          {/* SPECIALTIES AND SERVICES */}
          <section className="py-24 px-6 md:px-24 relative z-10 bg-white/[0.02] border-t border-white/[0.05] backdrop-blur-3xl text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
              
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-[0_0_25px_rgba(255,255,255,0.15)] border border-white/20">
                  <img src={images.services} alt="Specialties and Services" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#94a3b8] block mb-4 font-semibold">Specialties & Operations</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Discreet.<br/>Secure. Global.</h2>
                <div className="space-y-6 text-white/70 text-[0.95rem] leading-relaxed">
                  <p>
                    The Titanium Stratus is deployed for our most demanding clients, specializing in secure corporate transit, confidential asset movement, and rapid international deployment. 
                  </p>
                  <p>
                    By blending unmatched speed with an extremely low-profile exterior, the Stratus ensures you arrive at your destination efficiently and without drawing unnecessary attention. Fully vetted, multi-lingual security details are available to accompany all Stratus flights.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* FOOTER CTA */}
          <section className="py-32 text-center relative z-10 text-white px-6">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#94a3b8]/30 to-transparent" />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Ready To Command<br/>The Titanium Stratus?</h2>
            <p className="text-white/50 max-w-md mx-auto mb-12 text-[0.95rem]">
              Contact our tactical operations desk today to secure your itinerary or request our encrypted transport protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  if (onBookNow) onBookNow()
                }}
                className="bg-[#e2e8f0] text-[#09090b] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
              >
                Request Charter
              </button>
              <button 
                onClick={onClose}
                className="bg-transparent border border-[#e2e8f0]/30 text-[#e2e8f0] px-12 py-5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-white/5 w-full sm:w-auto"
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
