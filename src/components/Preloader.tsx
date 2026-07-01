import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Critical assets that MUST be ready before the site is revealed.
// These are the first-visible (above-the-fold) assets only.
// We do NOT preload every image/video — just the ones that appear immediately.
const CRITICAL_VIDEOS = [
  '/media/video/Main_hero_video_2.mp4',   // Hero background
  '/media/video/Black_Plane_video_5.mp4', // Fleet card 1 - Obsidian Velocity
  '/media/video/Gold_Plane_video_3.mp4',  // Fleet card 2 - Aurum Eclipse
  '/media/video/Grey_Plane_video_6.mp4',  // Fleet card 3 - Titanium Stratus
]

// Maximum time to wait before revealing site regardless of load state.
// Prevents users from being stuck on the preloader on slow connections.
const MAX_WAIT_MS = 7000

// Minimum time to show the preloader so the animation looks intentional and polished.
const MIN_SHOW_MS = 1800

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'exiting'>('loading')
  const loadedCount = useRef(0)
  const total = CRITICAL_VIDEOS.length
  const startTime = useRef(Date.now())
  const completed = useRef(false)

  const triggerExit = () => {
    if (completed.current) return
    completed.current = true

    const elapsed = Date.now() - startTime.current
    const remaining = Math.max(0, MIN_SHOW_MS - elapsed)

    setTimeout(() => {
      setPhase('exiting')
    }, remaining)
  }

  useEffect(() => {
    let loadedSoFar = 0

    const onVideoReady = () => {
      loadedSoFar++
      loadedCount.current = loadedSoFar
      const pct = Math.round((loadedSoFar / total) * 100)
      setProgress(pct)
      if (loadedSoFar >= total) {
        triggerExit()
      }
    }

    // Create hidden video elements to preload each critical video
    const videoEls = CRITICAL_VIDEOS.map((src) => {
      const video = document.createElement('video')
      video.src = src
      video.muted = true
      video.preload = 'auto'
      video.playsInline = true

      // canplaythrough fires when enough data is buffered to play without interruption
      video.addEventListener('canplaythrough', onVideoReady, { once: true })
      // Error fallback — count it as "done" so we don't get stuck
      video.addEventListener('error', onVideoReady, { once: true })

      video.load()
      return video
    })

    // Hard timeout safety net — never keep the user waiting beyond MAX_WAIT_MS
    const timeout = setTimeout(() => {
      // Force progress to 100% visually before exiting
      setProgress(100)
      triggerExit()
    }, MAX_WAIT_MS)

    // Animate the progress bar smoothly (independent of actual load progress)
    // This gives a fluid, continuous feel while assets load in the background
    let frame: number
    const animateProgress = () => {
      setProgress((prev) => {
        const actual = Math.round((loadedCount.current / total) * 100)
        // Ease toward actual progress, but never go backward
        const eased = prev + Math.max(0.3, (actual - prev) * 0.06)
        return Math.min(eased, actual, 99.5) // cap at 99.5 until fully done
      })
      frame = requestAnimationFrame(animateProgress)
    }
    frame = requestAnimationFrame(animateProgress)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frame)
      videoEls.forEach((v) => {
        v.removeEventListener('canplaythrough', onVideoReady)
        v.removeEventListener('error', onVideoReady)
        v.src = ''
        v.load()
      })
    }
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === 'loading' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#0c0c0e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
          }}
        >
          {/* Subtle radial glow in the background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(28,53,87,0.35) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '64px',
            }}
          >
            {/* SVG Jet icon — matches the one in FleetOverlay/Header */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ opacity: 0.9 }}
            >
              <path d="M11 2L2 21L11 17V2Z" fill="white" />
              <path d="M13 2V17L22 21L13 2Z" fill="white" fillOpacity="0.4" />
            </svg>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '18px',
                  letterSpacing: '0.45em',
                  color: 'white',
                  fontFamily: "'Instrument Serif', serif",
                  marginBottom: '8px',
                }}
              >
                PRIVET JETS
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Private Membership · Est. 1975
              </div>
            </div>
          </motion.div>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              width: 'clamp(200px, 30vw, 360px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Track */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '100px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Fill */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, white 100%)',
                  borderRadius: '100px',
                  width: `${progress}%`,
                  transition: 'width 0.4s cubic-bezier(0.19,1,0.22,1)',
                }}
              />
            </div>

            {/* Percentage label */}
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.3)',
                tabularNums: true,
              } as React.CSSProperties}
            >
              {Math.round(Math.min(progress, 100))}%
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
            }}
          >
            Preparing your experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
