import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

const features = [
  { icon: '+', title: 'Bespoke Interiors',  desc: 'Handcrafted cabins with the finest materials and custom configurations' },
  { icon: '*', title: 'Michelin Dining',     desc: 'Gourmet catering curated by world-class chefs, tailored to your palate' },
  { icon: '~', title: 'Full Connectivity',   desc: 'High-speed satellite Wi-Fi and enterprise comms across all routes' },
  { icon: 'o', title: 'Privacy First',       desc: 'Discrete, confidential, and exclusively yours on every flight' },
]

// SVG icons for each feature
const featureIcons = [
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>,
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
]

export default function SplitFeature() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="py-0" aria-labelledby="interior-heading">
      <div className="grid md:grid-cols-2 min-h-[70vh] border-y border-[var(--border)]">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <img
            src="/media/51.png"
            alt="Luxurious private jet cabin"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.5)]" />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-8 bg-[rgba(255,255,255,0.85)] backdrop-blur-2xl border border-[var(--border)] rounded-2xl p-5 shadow-[0_8px_32px_rgba(11,27,61,0.08)]"
          >
            <p className="text-[0.6rem] tracking-[0.22em] uppercase text-[var(--gold)] mb-2 font-semibold">Safety Rating</p>
            <p className="font-serif text-3xl text-[var(--text)] leading-none">IS-BAO</p>
            <p className="text-[0.75rem] font-medium text-[var(--text-md)] mt-1">Stage 3 Certified</p>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <div
          ref={ref}
          className="bg-[var(--surface)] px-8 md:px-14 lg:px-20 py-20 flex flex-col justify-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-5"
          >
            The Privet Jet Difference
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h2
              id="interior-heading"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-[var(--text)]"
            >
              Every Detail,{' '}
              <em className="text-[var(--gold-lt)]">Considered.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[0.95rem] text-[var(--text-muted)] leading-relaxed mb-10 max-w-[400px]"
          >
            Our cabins are not merely luxurious they are masterpieces. Every surface, every stitch, every ambient lighting setting designed to envelop you in absolute comfort at 45,000 feet.
          </motion.p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="flex gap-3 p-5 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[var(--border-md)] hover:bg-[var(--surface-2)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(201,169,110,0.08)] border border-[var(--border-md)] flex items-center justify-center text-[var(--gold)] flex-shrink-0 group-hover:bg-[rgba(201,169,110,0.14)] transition-colors duration-300">
                  {featureIcons[i]}
                </div>
                <div>
                  <p className="text-[0.85rem] font-medium text-[var(--text)] mb-1">{f.title}</p>
                  <p className="text-[0.78rem] text-[var(--text-muted)] leading-snug">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="self-start flex items-center gap-3 px-8 py-4 text-[0.75rem] tracking-[0.18em] uppercase font-semibold bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dk)] text-[var(--bg)] rounded-full hover:shadow-[0_8px_36px_rgba(201,169,110,0.4)] transition-all duration-300"
          >
            Discover Services
          </motion.a>
        </div>
      </div>
    </section>
  )
}
