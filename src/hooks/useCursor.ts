import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafRef  = useRef<number>(0)

  useEffect(() => {
    const dot  = dotRef.current
    const ring_ = ringRef.current
    if (!dot || !ring_) return

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.11)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.11)

      dot.style.left  = `${pos.current.x}px`
      dot.style.top   = `${pos.current.y}px`
      ring_.style.left = `${ring.current.x}px`
      ring_.style.top  = `${ring.current.y}px`

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(tick)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          dot.style.width  = '10px'
          dot.style.height = '10px'
          ring_.style.width  = '52px'
          ring_.style.height = '52px'
          ring_.style.borderColor = 'rgba(201,169,110,0.9)'
        })
        el.addEventListener('mouseleave', () => {
          dot.style.width  = '6px'
          dot.style.height = '6px'
          ring_.style.width  = '32px'
          ring_.style.height = '32px'
          ring_.style.borderColor = 'rgba(201,169,110,0.55)'
        })
      })
    }

    addHover()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { dotRef, ringRef }
}
