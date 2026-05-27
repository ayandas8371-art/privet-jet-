import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'motion/react'

export default function RippleTrail() {
  const [isHovering, setIsHovering] = useState(false)
  
  // Motion values for direct tracking
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring configuration for the delayed outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Detect hover on interactive elements to trigger the focus state
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('select') ||
        target.closest('.yacht-card')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    // Hide default cursor on body
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.style.cursor = 'auto'
    }
  }, [mouseX, mouseY])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>
      
      {/* INNER DOT: Exact tracking */}
      <motion.div 
        animate={{
          width: isHovering ? 0 : 4,
          height: isHovering ? 0 : 4,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          background: 'white',
          borderRadius: '50%',
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 6px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,0.8)'
        }}
      />

      {/* OUTER AVIATION HUD RING: Spring delayed */}
      <motion.div
        animate={{
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          background: isHovering ? 'rgba(255,255,255,0.06)' : 'transparent',
          borderWidth: isHovering ? '1px' : '1.5px',
          borderColor: isHovering ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          borderStyle: 'solid',
          boxShadow: '0 0 6px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Subtle Aviation Crosshair Ticks */}
        <motion.div 
          animate={{ opacity: isHovering ? 0 : 1 }}
          style={{ position: 'absolute', top: -6, width: '1.5px', height: '6px', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 4px rgba(0,0,0,0.5)' }} 
        />
        <motion.div 
          animate={{ opacity: isHovering ? 0 : 1 }}
          style={{ position: 'absolute', bottom: -6, width: '1.5px', height: '6px', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 4px rgba(0,0,0,0.5)' }} 
        />
        <motion.div 
          animate={{ opacity: isHovering ? 0 : 1 }}
          style={{ position: 'absolute', left: -6, width: '6px', height: '1.5px', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 4px rgba(0,0,0,0.5)' }} 
        />
        <motion.div 
          animate={{ opacity: isHovering ? 0 : 1 }}
          style={{ position: 'absolute', right: -6, width: '6px', height: '1.5px', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 4px rgba(0,0,0,0.5)' }} 
        />
      </motion.div>
    </div>
  )
}
