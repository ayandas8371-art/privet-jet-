import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface BlogProps {
  isOpen: boolean
  onClose: () => void
}

const blogs = [
  {
    id: 1,
    image: '/media/41.jpeg',
    category: 'INDUSTRY INSIGHTS',
    title: 'The Future of Sustainable Aviation',
    content: [
      'As the world pivots toward ecological responsibility, the private aviation sector stands at the precipice of a monumental transformation. The future of sustainable aviation is no longer a distant theoretical concept—it is actively unfolding in our hangars and on our runways. From the integration of Sustainable Aviation Fuel (SAF) to the development of hybrid-electric propulsion systems, the industry is proving that luxury and environmental stewardship can coexist seamlessly.',
      'At Privet Jets, our commitment goes beyond merely offsetting carbon footprints. We are investing in the next generation of aerodynamic design and sustainable cabin materials, ensuring that every flight not only meets the pinnacle of comfort but also respects the delicate balance of our global ecosystem. As new technologies emerge, we remain at the forefront, offering our elite clientele the peace of mind that their travel choices are as responsible as they are refined.'
    ]
  },
  {
    id: 2,
    image: '/media/36.jpeg',
    category: 'LUXURY LIFESTYLE',
    title: 'The Art of the Bespoke Cabin Experience',
    content: [
      'Stepping into a Privet Jet is akin to entering a meticulously curated sanctuary above the clouds. True luxury in private aviation is defined not just by speed and efficiency, but by the profound personalization of the cabin environment. Every element—from the ambient circadian lighting designed to minimize jet lag to the hand-stitched leather upholstery—is tailored to the specific physiological and psychological needs of our passengers.',
      'Our design philosophy centers on the concept of \'invisible service.\' This means anticipating needs before they are voiced and creating an atmosphere that effortlessly adapts to whether you are conducting high-stakes negotiations or seeking deep, restorative rest. The modern bespoke cabin is a masterclass in acoustic engineering and spatial harmony, proving that the journey itself should be as remarkable as the destination.'
    ]
  },
  {
    id: 3,
    image: '/media/43.jpeg',
    category: 'FLEET INNOVATION',
    title: 'Unlocking Global Reach: New Era of Transcontinental Travel',
    content: [
      'The boundaries of global travel are being continuously redefined by extraordinary advancements in long-range aircraft capabilities. Today\'s ultra-long-range jets are engineering marvels, capable of seamlessly connecting non-stop city pairs that were once thought impossible, such as New York to Singapore or London to Perth. This unprecedented global reach translates to the ultimate luxury: the preservation of your most valuable asset, time.',
      'By utilizing high-altitude cruising capabilities that rise above commercial traffic and turbulent weather systems, these aircraft offer an exceptionally smooth and efficient flight profile. For our members, this means uninterrupted productivity and unparalleled comfort across multiple time zones. As we expand our fleet with the latest transcontinental flagships, we invite you to experience a new paradigm of borderless travel where the world is more accessible than ever before.'
    ]
  }
]

export default function Blog({ isOpen, onClose }: BlogProps) {
  const [activeArticleId, setActiveArticleId] = useState<number | null>(null)

  // Find the active article if one is selected
  const activeArticle = activeArticleId ? blogs.find(b => b.id === activeArticleId) : null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'var(--bg-base)', // Matching the main site background
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto'
          }}
        >
          {/* HEADER */}
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 110,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 40px',
            background: 'rgba(248,246,242,0.9)', // Matching light theme header
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(12,12,14,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 2L2 21L11 17V2Z" fill="#0c0c0e" />
                <path d="M13 2V17L22 21L13 2Z" fill="#0c0c0e" fillOpacity="0.5" />
              </svg>
              <span style={{ fontSize: '14px', letterSpacing: '0.3em', color: '#0c0c0e', fontWeight: 600 }}>PRIVET JETS</span>
            </div>
            
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', fontWeight: 600 }}>
              THE AVIATION JOURNAL
            </span>

            <button 
              onClick={() => {
                if (activeArticle) setActiveArticleId(null)
                else onClose()
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(12,12,14,0.2)',
                borderRadius: '100px',
                padding: '8px 24px',
                color: '#0c0c0e',
                fontSize: '9px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0c0c0e'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0c0c0e' }}
            >
              {activeArticle ? 'BACK TO JOURNAL' : 'CLOSE'}
            </button>
          </div>

          {/* CONTENT */}
          <div style={{ padding: 'clamp(60px,8vw,120px) clamp(24px,6vw,96px)', color: '#0c0c0e', flex: 1 }}>
            
            <AnimatePresence mode="wait">
              {!activeArticle ? (
                // GRID VIEW
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 style={{ fontSize: 'clamp(48px,8vw,100px)', fontWeight: 400, margin: '0 0 80px 0', lineHeight: 1, fontFamily: 'var(--font-serif)' }}>
                    THE AVIATION JOURNAL.
                  </h1>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '80px' }}>
                    {blogs.map(blog => (
                      <article key={blog.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div 
                          style={{ aspectRatio: '16/10', background: 'transparent', marginBottom: '32px', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                          onClick={() => setActiveArticleId(blog.id)}
                        >
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </div>
                        <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '16px', fontWeight: 600 }}>
                          {blog.category}
                        </div>
                        <h2 
                          style={{ fontSize: '32px', fontWeight: 400, margin: '0 0 20px 0', lineHeight: 1.1, cursor: 'pointer', fontFamily: 'var(--font-serif)' }}
                          onClick={() => setActiveArticleId(blog.id)}
                        >
                          {blog.title}
                        </h2>
                        <p style={{ 
                          fontSize: '13px', 
                          lineHeight: 1.8, 
                          color: 'rgba(12,12,14,0.7)', 
                          display: '-webkit-box', 
                          WebkitLineClamp: 3, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden',
                          margin: '0 0 32px 0'
                        }}>
                          {blog.content[0]}
                        </p>
                        <div style={{ marginTop: 'auto' }}>
                          <button 
                            onClick={() => setActiveArticleId(blog.id)}
                            style={{ 
                              background: 'transparent', 
                              border: 'none', 
                              color: '#0c0c0e', 
                              fontSize: '9px', 
                              letterSpacing: '0.2em', 
                              cursor: 'pointer', 
                              borderBottom: '1px solid rgba(12,12,14,0.2)', 
                              paddingBottom: '4px',
                              transition: 'border-color 0.3s',
                              fontWeight: 600
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#0c0c0e'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(12,12,14,0.2)'}
                          >
                            READ FULL ARTICLE
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // FULL ARTICLE VIEW
                <motion.div
                  key="article"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '24px', textAlign: 'center', fontWeight: 600 }}>
                    {activeArticle.category}
                  </div>
                  <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 400, margin: '0 0 40px 0', lineHeight: 1.1, textAlign: 'center', fontFamily: 'var(--font-serif)' }}>
                    {activeArticle.title}
                  </h1>
                  
                  <div style={{ aspectRatio: '21/9', background: 'transparent', marginBottom: '60px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
                    <img src={activeArticle.image} alt={activeArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '15px', lineHeight: 2, color: 'rgba(12,12,14,0.85)' }}>
                    {activeArticle.content.map((paragraph, index) => (
                      <p key={index} style={{ margin: 0 }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

