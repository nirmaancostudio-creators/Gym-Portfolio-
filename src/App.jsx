import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import PageLoader from './components/PageLoader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Programs from './sections/Programs.jsx'
import Membership from './sections/Membership.jsx'
import Gallery from './sections/Gallery.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: { background: '#141414', border: '1px solid #2A2A2A', color: '#fff' },
        }}
      />
      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>
      <div style={{ background: '#0A0A0A', color: '#fff', minHeight: '100vh' }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Membership />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
