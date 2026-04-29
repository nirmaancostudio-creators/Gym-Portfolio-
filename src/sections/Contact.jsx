import { useState } from 'react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Youtube, Facebook, CheckCircle2 } from 'lucide-react'

// ──────────────────────────────────────────────────────────
//  HOW TO MAKE THE FORM WORK:
//  1. Go to https://formspree.io  →  Sign up free
//  2. Click "+ New Form" → give it any name → Create
//  3. Copy your Form ID (looks like "xabcd123")
//  4. Paste it below replacing  YOUR_FORM_ID
// ──────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID'

const TIME_SLOTS = [
  'Early Morning (5 AM – 8 AM)',
  'Morning (8 AM – 11 AM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (5 PM – 8 PM)',
  'Night (8 PM – 11 PM)',
]

const PROGRAMS = [
  'Weight Training', 'CrossFit', 'Cardio Blast',
  'Yoga & Mobility', 'Personal Training', 'Martial Arts',
  'Not sure — suggest for me',
]

const INFO = [
  { Icon: MapPin, label: 'Location', content: 'Nehru Nagar, Durg-Bhilai\nChhattisgarh, India' },
  { Icon: Phone, label: 'Call',     content: '+91 00000 00000', href: 'tel:+910000000000' },
  { Icon: Mail,  label: 'Email',    content: 'hello@ironpeak.fit', href: 'mailto:hello@ironpeak.fit' },
  { Icon: Clock, label: 'Hours',    content: 'Mon–Sat · 5:00 AM – 11:00 PM\nSun · 7:00 AM – 9:00 PM' },
]

function go(id) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', preferred_time: '', program_interest: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.preferred_time || !form.program_interest) {
      toast.error('Please fill all required fields.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast.success("Booked! We'll reach out within 24 hours.")
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', preferred_time: '', program_interest: '', message: '' })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = { height: 48, padding: '0 16px', borderRadius: 2 }
  const labelStyle = { display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }

  return (
    <section id="contact" style={{ position: 'relative', background: '#0A0A0A', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0A0A0A, rgba(10,10,10,0.95), #0A0A0A)' }} />

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: 24 }}>Book Your Trial</div>
          <h2 style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 0 24px' }}>
            Start your journey <br /><span style={{ color: '#FF3B3B' }}>today.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            Fill the form. A coach will call you within 24 hours with your slot confirmed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, padding: 40 }}
          >
            {success ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <CheckCircle2 style={{ width: 48, height: 48, color: '#FF3B3B', margin: '0 auto 16px', display: 'block' }} />
                <h3 style={{ fontWeight: 800, textTransform: 'uppercase', color: '#fff', margin: '0 0 8px', fontSize: '1.5rem' }}>You're In.</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, fontSize: 14, maxWidth: 360, margin: '0 auto 24px' }}>
                  We'll reach out within 24 hours. Until then — hydrate, sleep, get ready.
                </p>
                <button type="button" onClick={() => setSuccess(false)} className="btn-outline" style={{ padding: '12px 24px', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2 }}>
                  Book Another
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {/* Name - full width */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input className="ip-input" value={form.name} onChange={update('name')} style={inputStyle} placeholder="e.g. Arjun Malhotra" />
                </div>
                {/* Email */}
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" className="ip-input" value={form.email} onChange={update('email')} style={inputStyle} placeholder="you@email.com" />
                </div>
                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input type="tel" className="ip-input" value={form.phone} onChange={update('phone')} style={inputStyle} placeholder="+91 98XXX XXXXX" />
                </div>
                {/* Time */}
                <div>
                  <label style={labelStyle}>Preferred Time *</label>
                  <select className="ip-input" value={form.preferred_time} onChange={update('preferred_time')} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" disabled>Pick a time slot</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                {/* Program */}
                <div>
                  <label style={labelStyle}>Program Interest *</label>
                  <select className="ip-input" value={form.program_interest} onChange={update('program_interest')} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" disabled>Pick a program</option>
                    {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                {/* Message - full width */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Anything we should know?</label>
                  <textarea className="ip-input" value={form.message} onChange={update('message')} style={{ padding: '12px 16px', borderRadius: 2, minHeight: 110, resize: 'none' }} placeholder="Goals, injuries, schedule preferences..." />
                </div>
                {/* Submit - full width */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" disabled={submitting} className="btn-red" style={{ width: '100%', padding: '16px', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    {submitting ? 'Sending...' : 'Claim Free Trial'}
                    <Send style={{ width: 16, height: 16 }} />
                  </button>
                  <p style={{ marginTop: 12, textAlign: 'center', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    No payment · No obligation · Cancel anytime
                  </p>
                </div>
              </div>
            )}
          </motion.form>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, padding: 32 }}>
              <div className="section-label" style={{ marginBottom: 24 }}>Visit Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {INFO.map(({ Icon, label, content, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 16 }}>
                    <Icon style={{ width: 20, height: 20, color: '#FF3B3B', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 4 }}>{label}</div>
                      {href
                        ? <a href={href} style={{ color: '#fff', textDecoration: 'none', fontSize: 14, lineHeight: 1.6 }}>{content}</a>
                        : <div style={{ color: '#fff', fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{content}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Follow</span>
                {[Instagram, Youtube, Facebook].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.2s' }}>
                    <Icon style={{ width: 16, height: 16 }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden', height: 280 }}>
              <iframe
                title="IronPeak Location"
                src="https://www.google.com/maps?q=Nehru+Nagar+Bhilai+Durg&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
