import { motion, AnimatePresence } from 'motion/react'

interface AboutPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '10%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '10%' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[5000] flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide bg-[#f8f6f2]"
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
              OUR STORY
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
            className="pt-40 pb-32 px-6 md:px-24 flex flex-col items-center text-center relative z-10"
            style={{ background: 'radial-gradient(ellipse at top, rgba(28, 53, 87, 0.1) 0%, transparent 70%)' }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#1c3557] block mb-6 font-semibold"
            >
              The Agency
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl lg:text-9xl leading-none mb-6 tracking-tight text-[#0c0c0e]"
            >
              SINCE 1975.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-[1px] h-24 bg-gradient-to-b from-[#1c3557]/40 to-transparent mt-12"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 md:px-24 pb-32 flex flex-col gap-32">
            
            {/* CHAPTER 1: THE GENESIS */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[#1c3557]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#1c3557] font-semibold">
                    Chapter 1: The Genesis
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#0c0c0e] mb-8 leading-tight">
                  A Singular Vision for <br className="hidden md:block" />Global Aviation.
                </h2>
                <p className="text-[#0c0c0e]/90 text-sm md:text-base leading-loose mb-6">
                  Founded on a singular vision to elevate the standards of private aviation, Privet Jets began as a boutique charter service for European diplomats and royalty. We recognized early on that true luxury wasn't just about the aircraft, but the flawless execution of time.
                </p>
                <p className="text-[#0c0c0e]/90 text-sm md:text-base leading-loose">
                  For over four decades, we have been meticulously refining the art of luxury travel, pioneering new routes and setting industry standards for discretion, safety, and uncompromising elegance.
                </p>
              </div>
              <div className="order-1 md:order-2 relative w-full aspect-video group">
                {/* Premium Ambient Glow */}
                <div className="absolute -inset-2 bg-[#1c3557]/15 blur-xl z-0 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden rounded-sm z-10 border border-[#1c3557]/20 bg-[#f8f6f2]">
                  <div className="absolute inset-0 bg-black/10 z-20 group-hover:bg-transparent transition-colors duration-700" />
                  <img src="/media/main_hero_image.jpg" alt="Heritage" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" />
                </div>
              </div>
            </motion.section>

            {/* CHAPTER 2: THE MODERN ERA */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className="relative w-full aspect-video group">
                {/* Premium Ambient Glow */}
                <div className="absolute -inset-2 bg-[#1c3557]/15 blur-xl z-0 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden rounded-sm z-10 border border-[#1c3557]/20 bg-[#f8f6f2]">
                  <div className="absolute inset-0 bg-black/10 z-20 group-hover:bg-transparent transition-colors duration-700" />
                  <img src="/media/Golden_Plane_13.jpeg" alt="Modern Fleet" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[#1c3557]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#1c3557] font-semibold">
                    Chapter 2: The Modern Era
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#0c0c0e] mb-8 leading-tight">
                  The Bespoke Fleet <br className="hidden md:block" />Advantage.
                </h2>
                <p className="text-[#0c0c0e]/90 text-sm md:text-base leading-loose mb-6">
                  Today, we operate one of the most advanced and meticulously appointed private fleets in the world. From the agile Titanium Stratus to the ultra-long-range Obsidian Velocity, our aircraft are masterworks of aerospace engineering and interior design.
                </p>
                <p className="text-[#0c0c0e]/90 text-sm md:text-base leading-loose">
                  Every jet in our fleet is custom-configured. We have eschewed high-density seating in favor of expansive master suites, full-scale dining rooms, and cutting-edge atmospheric systems that reduce jet lag, ensuring you arrive in peak condition.
                </p>
              </div>
            </motion.section>

            {/* CHAPTER 3: THE PHILOSOPHY */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-sm overflow-hidden border border-[#0c0c0e]/10 mt-12 shadow-[0_8px_40px_rgba(28,53,87,0.15)]"
            >
              <div className="absolute inset-0 z-0">
                <img src="/media/33.jpeg" alt="Philosophy" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-[#0c0c0e]/40 to-transparent" />
              </div>
              
              <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-white" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white font-semibold">
                    Chapter 3: The Philosophy
                  </span>
                  <div className="w-12 h-[1px] bg-white" />
                </div>
                
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-relaxed">
                  "We believe that time is the ultimate luxury. Our mission is to give it back to you."
                </h2>
                
                <p className="text-white/95 text-sm md:text-base leading-loose">
                  By curating a bespoke fleet and maintaining an uncompromising global concierge network, we provide our members with an unparalleled experience that blends cutting-edge technology with timeless hospitality. Welcome to the pinnacle of private aviation.
                </p>
              </div>
            </motion.section>

            {/* CORPORATE OVERVIEW / VISION */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative py-32 mt-12 border-t border-[#1c3557]/10 overflow-hidden rounded-sm"
            >
              {/* Premium Background Image Blend (Faded into light bg) */}
              <div className="absolute inset-0 z-0">
                <img src="/media/Black_Plane_1.jpeg" alt="Standard" className="w-full h-full object-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f2] via-[#f8f6f2]/80 to-[#f8f6f2]" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#1c3557] block mb-6 font-semibold">Corporate Overview</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-[#0c0c0e] tracking-wide">THE PRIVET STANDARD.</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                  {/* Vision */}
                  <div className="relative group cursor-default">
                    <div className="absolute -top-12 -left-4 text-8xl font-serif text-[rgba(28,53,87,0.12)] font-bold transition-colors duration-500 group-hover:text-[rgba(28,53,87,0.25)] pointer-events-none select-none">01</div>
                    <div className="w-12 h-[1px] bg-[#1c3557]/40 mb-8 transition-all duration-500 group-hover:w-24 group-hover:bg-[#1c3557]" />
                    <h3 className="text-[#0c0c0e] text-sm tracking-[0.3em] uppercase mb-6 font-semibold group-hover:text-[#1c3557] transition-colors duration-500">Our Vision</h3>
                    <p className="text-[#0c0c0e]/90 text-[1rem] leading-loose relative z-10 font-normal">
                      To completely eliminate the friction of global travel. We envision a world where traversing the globe is not an obstacle, but the most seamless, luxurious, and productive part of your life.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="relative group cursor-default">
                    <div className="absolute -top-12 -left-4 text-8xl font-serif text-[rgba(28,53,87,0.12)] font-bold transition-colors duration-500 group-hover:text-[rgba(28,53,87,0.25)] pointer-events-none select-none">02</div>
                    <div className="w-12 h-[1px] bg-[#1c3557]/40 mb-8 transition-all duration-500 group-hover:w-24 group-hover:bg-[#1c3557]" />
                    <h3 className="text-[#0c0c0e] text-sm tracking-[0.3em] uppercase mb-6 font-semibold group-hover:text-[#1c3557] transition-colors duration-500">Our Mission</h3>
                    <p className="text-[#0c0c0e]/90 text-[1rem] leading-loose relative z-10 font-normal">
                      To deliver uncompromising safety, absolute discretion, and hyper-personalized hospitality. We own and operate our fleet to guarantee a standard of excellence that brokers simply cannot match.
                    </p>
                  </div>

                  {/* Standards */}
                  <div className="relative group cursor-default">
                    <div className="absolute -top-12 -left-4 text-8xl font-serif text-[rgba(28,53,87,0.12)] font-bold transition-colors duration-500 group-hover:text-[rgba(28,53,87,0.25)] pointer-events-none select-none">03</div>
                    <div className="w-12 h-[1px] bg-[#1c3557]/40 mb-8 transition-all duration-500 group-hover:w-24 group-hover:bg-[#1c3557]" />
                    <h3 className="text-[#0c0c0e] text-sm tracking-[0.3em] uppercase mb-6 font-semibold group-hover:text-[#1c3557] transition-colors duration-500">Uncompromising</h3>
                    <p className="text-[#0c0c0e]/90 text-[1rem] leading-loose relative z-10 font-normal">
                      Our pilots are trained to commercial airline captain standards. Our cabin crew are recruited from the world's most elite hospitality institutions. Privacy, security, and perfection are our baselines.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

