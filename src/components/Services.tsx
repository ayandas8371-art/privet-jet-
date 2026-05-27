import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

const services = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
    title: 'On-Demand Charter',
    desc: 'Book your flight with just hours notice. Our global operations team ensures your jet is fueled, crewed, and ready whenever you are.',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Jet Membership',
    desc: 'Unlock guaranteed availability, locked-in hourly rates, and unprecedented priority access with our exclusive annual membership programs.',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'White Glove Concierge',
    desc: 'From private terminal transfers and in-flight dining to luxury hotel suites and yacht charters, your journey curated end to end.',
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-28 px-6 md:px-16 max-w-[1440px] mx-auto">
      {/* Header */}
      <div ref={ref} className="mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-4"
        >
          What We Offer
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[var(--text)] max-w-[520px]"
          >
            Tailored to Every Journey
          </motion.h2>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
            className="relative bg-[var(--surface)] p-10 group hover:bg-[var(--surface-2)] transition-colors duration-400 overflow-hidden"
          >
            {/* Top gold line on hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Large number background */}
            <span className="absolute top-6 right-6 font-serif text-[5rem] leading-none text-[rgba(11,27,61,0.04)] pointer-events-none select-none">
              {s.num}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl border border-[var(--border-md)] flex items-center justify-center text-[var(--gold)] mb-8 group-hover:bg-[rgba(29,78,216,0.08)] group-hover:border-[var(--gold)] transition-all duration-300">
              {s.icon}
            </div>

            <h3 className="font-serif text-[1.55rem] text-[var(--text)] mb-4 leading-snug">{s.title}</h3>
            <p className="text-[0.88rem] text-[var(--text-muted)] leading-relaxed mb-8">{s.desc}</p>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-[var(--gold)] hover:gap-4 transition-all duration-300"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 10h12M11 5l5 5-5 5"/>
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
