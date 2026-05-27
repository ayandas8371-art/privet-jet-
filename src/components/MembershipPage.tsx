import { motion, AnimatePresence } from 'motion/react'

interface MembershipPageProps {
  isOpen: boolean
  onClose: () => void
  onContactOpen?: () => void
}

export default function MembershipPage({ isOpen, onClose, onContactOpen }: MembershipPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '10%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '10%' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[5000] flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide"
          style={{ backgroundColor: 'var(--bg-base)' }}
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
              MEMBERSHIP
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

          {/* 16:9 CINEMATIC HERO SECTION */}
          <div className="relative w-full min-h-[70vh] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img 
                src="/media/Golden%20Plane%2018.jpeg" 
                alt="Membership Hero" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-base), rgba(0,0,0,0.5), transparent)' }} />
            </div>

            <div className="relative z-10 px-6 md:px-24 pb-12 md:pb-24 flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-[1px] bg-[#c8bfae]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8bfae] font-semibold">
                  Exclusive Access
                </span>
                <div className="w-12 h-[1px] bg-[#c8bfae]" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-none tracking-tight"
              >
                JOIN THE ELITE.
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-3 mt-8"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-80">
                  <path d="M11 2L2 21L11 17V2Z" fill="#c8bfae" />
                  <path d="M13 2V17L22 21L13 2Z" fill="#c8bfae" fillOpacity="0.5" />
                </svg>
                <span className="text-[10px] tracking-[0.4em] text-[#c8bfae] font-light">THE PRIVET KEY</span>
              </motion.div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center">
            
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 max-w-6xl w-full">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="w-full aspect-video rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(28,53,87,0.15)] relative">
                  <img src="/media/Golden%20Plane%2017.jpeg" alt="Luxury Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-[#1c3557]/10" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex flex-col gap-8"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-[#1c3557] leading-tight">An Invitation to <br/>Absolute Perfection.</h2>
                <div className="w-16 h-[1px] bg-[#1c3557]/30" />
                <p className="text-[#0c0c0e]/80 text-lg md:text-xl leading-relaxed font-light">
                  The Privet Key isn't just about accessing a fleet of the world's most luxurious aircraft—it is about joining an exclusive circle of individuals who demand absolute perfection, wholesale transparency, and uncompromising privacy.
                </p>
                <p className="text-[#0c0c0e]/80 text-lg md:text-xl leading-relaxed font-light">
                  Our members enjoy priority access to a meticulously curated fleet, dedicated concierge services, and the peace of mind that comes from knowing every detail has been flawlessly executed by our elite operations team.
                </p>
              </motion.div>
            </div>

            {/* BENEFITS EDITORIAL GRID */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 w-full mb-32 max-w-5xl"
            >
              {[
                {
                  num: "01",
                  title: "Zero Broker Fees",
                  desc: "Fly at direct operating costs. Enjoy complete financial transparency with absolutely zero markups on hourly flight rates."
                },
                {
                  num: "02",
                  title: "Guaranteed Availability",
                  desc: "An aircraft ready for departure within 12 hours of your request, anywhere on the globe, guaranteed 365 days a year."
                },
                {
                  num: "03",
                  title: "Empty Leg Priority",
                  desc: "First right of refusal on all global empty leg flights at heavily subsidized rates, an exclusive privilege for key holders."
                },
                {
                  num: "04",
                  title: "24/7 Concierge",
                  desc: "A dedicated lifestyle team managing your ground transport, luxury accommodations, and highly restricted dining reservations."
                }
              ].map((item) => (
                <div key={item.num} className="relative group cursor-default">
                  {/* Watermark Number */}
                  <div className="absolute -top-16 -left-8 text-[140px] font-serif font-bold text-[rgba(28,53,87,0.12)] group-hover:text-[rgba(28,53,87,0.25)] transition-colors duration-700 z-0 select-none pointer-events-none">
                    {item.num}
                  </div>
                  
                  {/* Expanding Navy Line */}
                  <div className="w-12 h-[1px] bg-[#1c3557]/30 mb-8 group-hover:w-full group-hover:bg-[#1c3557] transition-all duration-700 ease-in-out relative z-10" />
                  
                  {/* Content */}
                  <div className="relative z-10 md:pl-4">
                    <h3 className="text-[#0c0c0e] text-base md:text-lg tracking-[0.2em] uppercase mb-4 font-light group-hover:text-[#1c3557] transition-colors duration-700">{item.title}</h3>
                    <p className="text-[#0c0c0e]/60 text-[0.95rem] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* SCARCITY BANNER & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl bg-white border border-[#0c0c0e]/5 rounded-sm p-8 md:p-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 relative overflow-hidden group shadow-[0_8px_40px_rgba(28,53,87,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c3557]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#1c3557]/30 bg-[#1c3557]/5 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#1c3557] animate-pulse" />
                  <span className="text-[9px] tracking-[0.2em] text-[#1c3557] uppercase font-bold">Strictly Limited</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#0c0c0e] mb-6 leading-tight">
                  Global Capacity <br className="hidden lg:block" />Currently Capped.
                </h2>
                <p className="text-[#0c0c0e]/70 text-[0.95rem] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  To ensure an unprecedented level of personalized service and guaranteed aircraft availability, The Privet Key membership is strictly capped at <strong className="text-[#0c0c0e] font-semibold">500 individuals globally</strong>. Applications are reviewed by our membership board on a rolling basis.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-auto mt-4 lg:mt-0 lg:ml-8">
                <button 
                  onClick={() => onContactOpen ? onContactOpen() : onClose()}
                  className="w-full sm:w-auto whitespace-nowrap bg-[#1c3557] text-white px-12 py-6 rounded-sm text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300 hover:bg-[#253f63] hover:shadow-[0_12px_40px_rgba(28,53,87,0.3)] hover:-translate-y-1"
                >
                  Request Application
                </button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

