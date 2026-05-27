import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

const destinations = [
  { code: 'DXB', city: 'Dubai' },    { code: 'LHR', city: 'London' },
  { code: 'CDG', city: 'Paris' },    { code: 'JFK', city: 'New York' },
  { code: 'LAX', city: 'Los Angeles' }, { code: 'SIN', city: 'Singapore' },
  { code: 'MXP', city: 'Milan' },    { code: 'GVA', city: 'Geneva' },
  { code: 'NRT', city: 'Tokyo' },    { code: 'MIA', city: 'Miami' },
  { code: 'SYD', city: 'Sydney' },   { code: 'HKG', city: 'Hong Kong' },
]

export default function Destinations() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div ref={ref} className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-4"
        >
          Our Reach
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[var(--text)]"
          >
            500+ Destinations Worldwide
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[var(--text-muted)] text-[0.95rem] max-w-[480px] mx-auto mt-4 leading-relaxed"
        >
          From the runways of Paris to the peaks of Aspen, our network spans every corner of the globe.
        </motion.p>
      </div>

      {/* Destinations grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden"
      >
        {destinations.map((d, i) => (
          <motion.div
            key={d.code}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.04 }}
            className="bg-[var(--surface)] py-6 px-4 text-center group hover:bg-[var(--surface-2)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--gold)] group-hover:w-2/3 transition-[width] duration-500" />
            <p className="font-serif text-[1.8rem] leading-none text-[var(--text)] group-hover:text-[var(--gold-lt)] transition-colors duration-300 mb-1">{d.code}</p>
            <p className="text-[0.62rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">{d.city}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
