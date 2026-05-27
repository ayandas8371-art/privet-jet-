import { motion } from 'motion/react'
import { useScrollProgress } from '../hooks/useUtils'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  )
}
