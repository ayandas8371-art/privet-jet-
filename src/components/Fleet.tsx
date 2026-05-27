import { useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from '../hooks/useUtils'

const jets = [
  {
    name: 'Gulfstream G700',
    type: 'Ultra Long Range',
    pax: '19',
    range: '7,500 nm',
    speed: 'Mach 0.925',
    img: '/media/11.jpeg',
  },
  {
    name: 'Bombardier Global 7500',
    type: 'Ultra Long Range',
    pax: '19',
    range: '7,700 nm',
    speed: 'Mach 0.925',
    img: '/media/12.jpeg',
  },
  {
    name: 'Dassault Falcon 10X',
    type: 'Ultra Long Range',
    pax: '16',
    range: '7,500 nm',
    speed: 'Mach 0.925',
    img: '/media/13.jpeg',
  },
  {
    name: 'Embraer Praetor 600',
    type: 'Super Midsize',
    pax: '12',
    range: '4,018 nm',
    speed: 'Mach 0.83',
    img: '/media/14.jpeg',
  },
  {
    name: 'Citation Longitude',
    type: 'Mid-Size',
    img: '/media/25.jpeg',
    pax: '12',
    range: '3,500 nm',
    speed: 'Mach 0.85',
  },
]

interface FleetProps {
  onBookNow: () => void
}

function JetCard({ jet, onBookNow }: { jet: typeof jets[0]; onBookNow: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      className="w-[360px] flex-shrink-0 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] group hover:border-[var(--border-md)] transition-colors duration-400 snap-start"
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={jet.img}
          alt={jet.name}
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-[var(--ease-expo)]"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[var(--gold)] mb-1">{jet.type}</p>
        <h3 className="font-serif text-[1.5rem] text-[var(--text)] mb-5 leading-snug">{jet.name}</h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden mb-5">
          {[
            { v: jet.pax,   l: 'Passengers' },
            { v: jet.range, l: 'Range' },
            { v: jet.speed, l: 'Speed' },
          ].map(({ v, l }) => (
            <div key={l} className="bg-[var(--surface-2)] p-3 text-center">
              <span className="font-serif text-[1.15rem] text-[var(--gold-lt)] block leading-none mb-1">{v}</span>
              <span className="text-[0.6rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">{l}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onBookNow}
          className="w-full py-3 text-[0.72rem] tracking-[0.15em] uppercase border border-[var(--border-md)] text-[var(--text)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[rgba(201,169,110,0.05)] transition-all duration-300"
        >
          Request This Jet
        </button>
      </div>
    </motion.div>
  )
}

export default function Fleet({ onBookNow }: FleetProps) {
  const { ref: headerRef, inView } = useInView()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing'
  }
  const onMouseLeave = () => { isDragging.current = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab' }
  const onMouseUp    = () => { isDragging.current = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab' }
  const onMouseMove  = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.3
  }

  return (
    <section id="fleet" className="py-28 overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="px-6 md:px-16 max-w-[1440px] mx-auto mb-12 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--gold)] block mb-4"
          >
            Our Fleet
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[var(--text)]"
            >
              Curated Aircraft Collection
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--text-muted)] text-[0.95rem] max-w-[420px] mt-3 leading-relaxed"
          >
            Hand-selected ultra-long-range jets, each configured for maximum comfort and performance.
          </motion.p>
        </div>

        <motion.a
          href="#fleet"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="hidden md:flex items-center gap-3 px-6 py-3 text-[0.72rem] tracking-[0.15em] uppercase border border-[var(--border-md)] text-[var(--text)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
        >
          View All Aircraft
        </motion.a>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 select-none"
        style={{
          cursor: 'grab',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
        }}
        role="region"
        aria-label="Fleet aircraft scroll"
      >
        {jets.map((jet) => (
          <JetCard key={jet.name} jet={jet} onBookNow={onBookNow} />
        ))}
      </div>
    </section>
  )
}
