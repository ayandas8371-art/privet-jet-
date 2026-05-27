import { motion } from 'motion/react'
import { useInView, useCounter } from '../hooks/useUtils'

const stats = [
  { value: 18,    suffix: '+', label: 'Years of Excellence' },
  { value: 500,   suffix: '+', label: 'Destinations' },
  { value: 48,    suffix: '',  label: 'Aircraft in Fleet' },
  { value: 12000, suffix: '+', label: 'Flights Completed' },
]

const items = [
  'Private Charter',
  'Global Reach',
  'Ultra Luxury',
  '24/7 Concierge',
  '500+ Destinations',
  'White Glove Service',
  'On-Demand Flights',
  'Absolute Privacy',
]

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, 2000, active)
  return (
    <div className="bg-[var(--surface)] px-6 py-8 text-center group hover:bg-[var(--surface-2)] transition-colors duration-300 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent group-hover:w-3/5 transition-[width] duration-500 ease-[var(--ease-expo)]" />
      <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none text-[var(--gold-lt)] block mb-2">
        {count.toLocaleString()}
        <span className="text-[0.55em] align-super text-[var(--gold)]">{suffix}</span>
      </span>
      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">{label}</span>
    </div>
  )
}

export default function MarqueeStats() {
  const { ref, inView } = useInView(0.3)

  return (
    <>
      {/* Marquee */}
      <div className="overflow-hidden border-y border-[var(--border)] py-5" aria-hidden="true">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-14 flex-shrink-0">
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-5 flex-shrink-0">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <span className="font-serif text-lg text-[var(--text-muted)] tracking-wide">{item}</span>
              </div>
            ))}
          </div>
          {/* Duplicate track for seamless loop */}
          <div className="marquee-track flex gap-14 flex-shrink-0" aria-hidden>
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-5 flex-shrink-0">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <span className="font-serif text-lg text-[var(--text-muted)] tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden my-16 mx-6 md:mx-16 max-w-[1440px] xl:mx-auto"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={inView} />
        ))}
      </motion.div>
    </>
  )
}
