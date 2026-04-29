import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: '#FF3B3B', transformOrigin: 'left', zIndex: 100 }}
    />
  )
}
