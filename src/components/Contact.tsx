import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

interface ContactProps {
  onBookNow: () => void
}

export default function Contact({ onBookNow }: ContactProps) {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-28 bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-5"
            >
              Get In Touch
            </motion.span>
            <div className="overflow-hidden mb-5">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-[var(--text)]"
              >
                Ready to Fly?
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed max-w-[380px] mb-10"
            >
              Our dedicated concierge team is available 24/7 to craft your perfect journey. No request is too complex.
            </motion.p>

            {/* Contact Details */}
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                ),
                label: 'Phone',
                value: '+1 (800) 555-1234',
                sub: 'Available 24/7',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                value: 'concierge@privetjet.com',
                sub: 'Response within 2 hours',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Headquarters',
                value: '1 Aviation Plaza, Suite 2400',
                sub: 'New York, NY 10001',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 mb-6 items-start"
              >
                <div className="w-11 h-11 rounded-xl border border-[var(--border-md)] flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[0.88rem] font-medium text-[var(--text)] mb-0.5">{item.value}</p>
                  <p className="text-[0.75rem] text-[var(--text-muted)]">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.03, y: -2 }}
              onClick={onBookNow}
              className="flex items-center gap-3 px-8 py-4 text-[0.75rem] tracking-[0.18em] uppercase font-semibold bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dk)] text-[var(--bg)] rounded-full hover:shadow-[0_8px_36px_rgba(201,169,110,0.4)] transition-all duration-300 mt-6"
            >
              Book a Charter Now
            </motion.button>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative rounded-2xl overflow-hidden border border-[var(--border)] min-h-[480px]"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/media/21.jpeg"
                alt="Concierge arranging luxury travel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlays for light theme text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.4)] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.95)] via-[rgba(255,255,255,0.3)] to-transparent md:hidden" />
            </div>

            {/* Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-2 gap-4 mt-12 relative z-10">
                {[
                  { num: 'IS-BAO', label: 'Safety Certified' },
                  { num: 'ARGUS', label: 'Platinum Rating' },
                ].map((b) => (
                  <div key={b.num} className="bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[var(--border)] rounded-xl p-4 shadow-[0_8px_32px_rgba(11,27,61,0.08)]">
                    <p className="font-serif text-[2rem] text-[var(--gold)] leading-none mb-1">{b.num}</p>
                    <p className="text-[0.72rem] tracking-[0.05em] text-[var(--text-md)] font-medium leading-snug uppercase">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
