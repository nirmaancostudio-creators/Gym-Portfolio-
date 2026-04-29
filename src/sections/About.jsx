import { motion } from "framer-motion";
import StatCounter from "../components/StatCounter";
import { Flame, Users, Trophy, Target } from "lucide-react";

const VALUES = [
  { icon: Flame,  label: "Discipline", copy: "Show up. Every day. No excuses." },
  { icon: Users,  label: "Community",  copy: "A brotherhood that pushes you forward." },
  { icon: Trophy, label: "Results",    copy: "Measurable progress, not empty promises." },
  { icon: Target, label: "Excellence", copy: "Standards that refuse to compromise." },
];

const COACHES = [
  { name: "Arjun Malhotra", spec: "Head Strength Coach",     photo: "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Rhea Kapoor",    spec: "CrossFit & Conditioning", photo: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Vikram Singh",   spec: "Powerlifting Specialist", photo: "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Nisha Verma",    spec: "Yoga & Mobility",         photo: "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=500" },
];

// Shared animation variant — defined once, reused everywhere
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="section-label mb-6">About IronPeak</div>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-5xl lg:text-6xl"
            >
              Built for those <br />who refuse to{" "}
              <span className="text-[#FF3B3B]">settle.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6 text-white/70 text-base leading-relaxed font-light">
            {[
              "IronPeak was born in 2020 from a simple idea: train like it matters, or don't train at all. We built a space where ambition isn't uncommon — it's the baseline.",
              "Every rack is hand-picked. Every coach is certified. Every program is engineered. This isn't a gym — it's the sharpest edge of a machine that builds the best version of you.",
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                {text}
              </motion.p>
            ))}
            <p className="text-white/40">500+ athletes. Zero shortcuts.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 border-t border-b border-white/10 py-12">
          {[
            { v: 500, s: "+",   label: "Active Members", id: "members" },
            { v: 8,   s: "+",   label: "Expert Coaches", id: "coaches" },
            { v: 4,   s: " yrs",label: "Years Strong",   id: "years"   },
          ].map((item, i) => (
            <motion.div key={item.id} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                <StatCounter value={item.v} suffix={item.s} />
              </div>
              <div className="text-[11px] tracking-[0.3em] text-white/40 uppercase mt-2">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Coaches */}
        <div className="mb-24">
          <div className="section-label mb-4">The Crew</div>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-10">
            Coaches you'll remember
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {COACHES.map((c, i) => (
              <motion.div
                key={c.name}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden bg-[#141414] border border-white/10 rounded-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.photo} alt={c.name}
                    loading="lazy" decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-[10px] tracking-[0.3em] text-[#FF3B3B] uppercase mb-1">{c.spec}</div>
                  <div className="text-white font-semibold text-base leading-tight">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="section-label mb-6">What we stand on</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#0A0A0A] p-6 md:p-8 hover:bg-[#141414] transition-colors"
              >
                <v.icon className="w-6 h-6 text-[#FF3B3B] mb-4" strokeWidth={1.5} />
                <div className="text-white font-semibold text-lg uppercase tracking-wide mb-2">{v.label}</div>
                <div className="text-white/50 text-sm leading-relaxed font-light">{v.copy}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
