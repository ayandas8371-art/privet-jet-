import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

interface CtaBannerProps {
  onBookNow: () => void
}

export default function CtaBanner({ onBookNow }: CtaBannerProps) {
  const { ref, inView } = useInView()

  return (
    <section className="py-28 px-6 md:px-16 max-w-[1440px] mx-auto" aria-labelledby="cta-heading">
      <div ref={ref} className="relative overflow-hidden rounded-3xl border border-[var(--border-md)] bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-[var(--surface-2)] p-12 md:p-20 text-center shadow-[0_8px_32px_rgba(11,27,61,0.04)]">
        {/* Radial subtle blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.05),transparent_65%)] pointer-events-none" />

        {/* Decorative large text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="font-serif text-[18rem] leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(11,27,61,0.03)' }}>
            Fly
          </span>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-5"
        >
          Start Your Journey
        </motion.span>

        <div className="overflow-hidden mb-5 relative">
          <motion.h2
            id="cta-heading"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.95] text-[var(--text)]"
          >
            Your Next Destination<br />
            Awaits <em className="text-[var(--gold-lt)]">You.</em>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative text-[0.95rem] text-[var(--text-muted)] max-w-[480px] mx-auto leading-relaxed mb-10"
        >
          Join thousands of elite travellers who have discovered a better way to fly. Your first charter enquiry is complimentary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBookNow}
            className="px-10 py-4 text-[0.78rem] tracking-[0.18em] uppercase font-semibold bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dk)] text-[var(--bg)] rounded-full hover:shadow-[0_10px_40px_rgba(11,27,61,0.2)] transition-all duration-300"
          >
            Request a Quote
          </motion.button>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.02 }}
            className="px-10 py-4 text-[0.78rem] tracking-[0.18em] uppercase border border-[var(--border-md)] text-[var(--text)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
          >
            Speak to an Advisor
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
