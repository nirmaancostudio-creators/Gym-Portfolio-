import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 56, height: 56, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', textDecoration: 'none' }}
      aria-label="Chat on WhatsApp"
    >
      <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#25D366', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.25 }} />
      <MessageCircle style={{ width: 24, height: 24, position: 'relative', zIndex: 1 }} />
    </motion.a>
  )
}
