import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'membership', label: 'Membership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Voices' },
  { id: 'contact', label: 'Contact' },
]

function go(id, setOpen) {
  if (setOpen) setOpen(false)
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean)
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= y) { setActive(sections[i].id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all 0.3s ease',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    background: scrolled ? 'rgba(10,10,10,0.75)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        style={navStyle}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
            <Zap style={{ width: 20, height: 20, color: '#FF3B3B', fill: '#FF3B3B' }} strokeWidth={1.5} />
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
              IRON<span style={{ color: '#FF3B3B' }}>PEAK</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                style={{
                  position: 'relative', padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 500, color: active === l.id ? '#fff' : 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s', fontFamily: 'Poppins, sans-serif',
                }}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="nav-active" style={{ position: 'absolute', bottom: 0, left: 16, right: 16, height: 2, background: '#FF3B3B' }} />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => go('contact')}
            className="hidden lg:block btn-red"
            style={{ padding: '10px 20px', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, border: 'none' }}
          >
            Book Free Trial
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}
          >
            {open ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', top: 72, left: 0, right: 0, zIndex: 40, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            className="lg:hidden"
          >
            <div style={{ padding: '24px' }}>
              {LINKS.map(l => (
                <button
                  key={l.id}
                  onClick={() => go(l.id, setOpen)}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 8px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', color: active === l.id ? '#FF3B3B' : 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go('contact', setOpen)}
                className="btn-red"
                style={{ marginTop: 16, width: '100%', padding: '12px', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, border: 'none' }}
              >
                Book Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
