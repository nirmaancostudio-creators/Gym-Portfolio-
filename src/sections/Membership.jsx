import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, CalendarX, Gift, ChevronDown } from "lucide-react";

const TIERS = [
  {
    id: "starter", name: "Starter", price: "1,499", cadence: "/month", tagline: "Test the grind.",
    features: ["Full access to gym floor", "2 group classes / week", "Locker & towel service", "Nutrition PDF guide"],
    popular: false,
  },
  {
    id: "pro", name: "Pro", price: "3,999", cadence: "/quarter", tagline: "Our most chosen plan.",
    features: ["Everything in Starter", "Unlimited group classes", "1 personal training session / month", "Body composition tracking", "Priority class booking"],
    popular: true,
  },
  {
    id: "elite", name: "Elite", price: "13,999", cadence: "/year", tagline: "For serious athletes.",
    features: ["Everything in Pro", "Weekly PT sessions", "Personalized programming", "Dedicated head coach", "Recovery suite access", "Guest passes (4/year)"],
    popular: false,
  },
];

const FAQS = [
  { q: "How do I start my free trial?", a: "Fill out the booking form on our Contact page. A coach confirms within 24 hours. No payment, no commitment." },
  { q: "Can I cancel my membership anytime?", a: "Yes. All plans can be paused or cancelled with 7 days notice. No questions, no hidden fees." },
  { q: "Do you have student discounts?", a: "Students get 20% off Starter and Pro with a valid student ID. Ask at the front desk." },
  { q: "What are the gym working hours?", a: "Elite members: 24/7. Starter & Pro: 5:00 AM – 11:00 PM every day." },
  { q: "Do you offer nutrition consultation?", a: "Pro and Elite get 1-on-1 nutrition consults. Starter plan includes our foundational nutrition PDF." },
];

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', color: '#fff', fontSize: 16, fontWeight: 600, padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', gap: 16 }}
      >
        <span>{q}</span>
        <ChevronDown style={{ width: 20, height: 20, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {open && (
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, paddingBottom: 20 }}>
          {a}
        </div>
      )}
    </div>
  );
}

function go(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export default function Membership() {
  return (
    <section id="membership" style={{ background: '#0A0A0A', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: 24 }}>Membership</div>
          <h2 style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 0 24px' }}>
            Pick your <span style={{ color: '#FF3B3B' }}>weight class.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            No hidden fees. Cancel anytime. Your first week is always free.
          </p>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 56 }}>
          {[{ Icon: ShieldCheck, label: "No Hidden Fees" }, { Icon: CalendarX, label: "Cancel Anytime" }, { Icon: Gift, label: "Free First Week" }].map(b => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, background: '#141414' }}>
              <b.Icon style={{ width: 16, height: 16, color: '#FF3B3B' }} strokeWidth={1.5} />
              <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 96 }}>
          {TIERS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                position: 'relative', background: '#141414', borderRadius: 2, padding: 32,
                border: t.popular ? '1px solid #FF3B3B' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: t.popular ? '0 0 40px rgba(255,59,59,0.25)' : 'none',
                transform: t.popular ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {t.popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 12px', background: '#FF3B3B', color: '#fff', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, borderRadius: 2, whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )}
              <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 8 }}>{t.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 300, marginBottom: 24 }}>{t.tagline}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 32 }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18 }}>₹</span>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,3.5rem)', letterSpacing: '-0.02em' }}>{t.price}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4 }}>{t.cadence}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, padding: 0, listStyle: 'none' }}>
                {t.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 300 }}>
                    <Check style={{ width: 16, height: 16, color: '#FF3B3B', marginTop: 2, flexShrink: 0 }} strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => go("contact")} className={t.popular ? "btn-red" : "btn-outline"}
                style={{ width: '100%', padding: 12, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, border: t.popular ? 'none' : undefined }}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 24 }}>FAQ</div>
            <h3 style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, fontSize: 'clamp(1.75rem,4vw,2.5rem)', margin: '0 0 20px' }}>
              Questions we <br /><span style={{ color: '#FF3B3B' }}>hear a lot.</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>
              Didn't find your answer? Drop us a message — a coach replies within the hour.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
