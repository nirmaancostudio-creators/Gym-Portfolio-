import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function PageLoader() {
  return (
    <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0A0A0A]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0A0A' }}
      >
        <div className="grain absolute inset-0" />
        <div className="relative flex flex-col items-center gap-6">
          <motion.div
            className="flex items-center gap-2 logo-pulse"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-7 h-7 text-[#FF3B3B] fill-[#FF3B3B]" strokeWidth={1.5} />
            <span style={{ fontWeight: 800, fontSize: '1.875rem', letterSpacing: '-0.02em', color: '#fff' }}>
              IRON<span style={{ color: '#FF3B3B' }}>PEAK</span>
            </span>
          </motion.div>
          <div style={{ width: 192, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', background: '#FF3B3B' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            Forging Strength
          </div>
        </div>
      </motion.div>
  )
}
