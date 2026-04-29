import { Star, Instagram } from "lucide-react";

// Compressed images — same look, 5x smaller download
const TESTIMONIALS = [
  { name: "Ankit R.",   member: "Pro · 2 yrs",   photo: "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg?auto=compress&cs=tinysrgb&w=120", quote: "I've trained at 4 gyms in Bhilai. None felt like IronPeak. The coaches actually know what they're doing.", rating: 5 },
  { name: "Shreya P.",  member: "Elite · 1 yr",  photo: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=120",    quote: "Lost 11 kg and found my strongest self. The programming is elite, the people are real.", rating: 5 },
  { name: "Rahul K.",   member: "Starter · 8 mo",photo: "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=120",  quote: "Walked in nervous. Walked out a regular. This place has a culture you can feel in 60 seconds.", rating: 5 },
  { name: "Nandini S.", member: "Pro · 1.5 yrs", photo: "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=120",  quote: "The mobility and yoga sessions unlocked my lifts. My squat feels like a new movement.", rating: 5 },
  { name: "Vivaan T.",  member: "Elite · 3 yrs", photo: "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=120",    quote: "Zero fluff. Zero ego. Pure work. IronPeak raised my standards in and out of the gym.", rating: 5 },
  { name: "Aisha M.",   member: "Pro · 10 mo",   photo: "https://images.unsplash.com/photo-1613845205719-8c87760ab728?auto=format&fit=crop&w=120&q=70",           quote: "Finally a gym that treats women's training seriously — same standards, same respect, same results.", rating: 5 },
];

// Instagram grid — small squares, keep them tiny
const INSTAGRAM_IMGS = [
  "https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=300",
];

// Single card — plain div, no motion wrapper inside the marquee
function Card({ t }) {
  return (
    <div style={{ width: 340, flexShrink: 0, background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, padding: 24, margin: '0 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <img src={t.photo} alt={t.name} loading="lazy" decoding="async"
          style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{t.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t.member}</div>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          {Array.from({ length: t.rating }).map((_, k) => (
            <Star key={k} style={{ width: 14, height: 14, color: '#FF3B3B', fill: '#FF3B3B' }} />
          ))}
        </div>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>"{t.quote}"</p>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate array for seamless loop
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" style={{ background: '#0A0A0A', padding: '96px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Heading */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', marginBottom: 56 }}>
        <div className="section-label" style={{ display: 'inline-flex', marginBottom: 24 }}>Voices</div>
        <h2 style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0 }}>
          Real people. <br /><span style={{ color: '#FF3B3B' }}>Real results.</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
          {row1.map((t, i) => <Card key={`r1-${i}`} t={t} />)}
        </div>
        {/* Fade edges */}
        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: 80, background: 'linear-gradient(to right, #0A0A0A, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 0 0 auto', width: 80, background: 'linear-gradient(to left, #0A0A0A, transparent)', pointerEvents: 'none' }} />
      </div>

      {/* Row 2 — scrolls right */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 80 }}>
        <div className="marquee-slow" style={{ display: 'flex', width: 'max-content', animationDirection: 'reverse' }}>
          {row2.map((t, i) => <Card key={`r2-${i}`} t={t} />)}
        </div>
        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: 80, background: 'linear-gradient(to right, #0A0A0A, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 0 0 auto', width: 80, background: 'linear-gradient(to left, #0A0A0A, transparent)', pointerEvents: 'none' }} />
      </div>

      {/* Instagram grid */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Instagram style={{ width: 16, height: 16, color: '#FF3B3B' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>@ironpeak.gym</span>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
            Follow →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {INSTAGRAM_IMGS.map((src, i) => (
            <div key={i} className="group" style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative' }}>
              <img src={src} alt="" loading="lazy" decoding="async"
                className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
