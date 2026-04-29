import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Flame } from "lucide-react";

const PROGRAMS = [
  { name: "Weight Training", cat: "strength", level: "All Levels", duration: "60 min", desc: "Structured hypertrophy and strength work on elite free-weight racks.", img: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "CrossFit",        cat: "strength", level: "Intermediate",duration: "45 min", desc: "High-intensity functional training built around the WOD mindset.",   img: "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Cardio Blast",    cat: "cardio",   level: "Beginner+",   duration: "40 min", desc: "HIIT circuits, treadmills, assault bikes — torch fat, build engine.",  img: "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Yoga & Mobility", cat: "flexibility",level:"All Levels",  duration: "55 min", desc: "Recovery-first sessions to unlock range and keep you injury-proof.",  img: "https://images.unsplash.com/photo-1613845205719-8c87760ab728?auto=format&fit=crop&w=600&q=70" },
  { name: "Personal Training",cat:"strength",  level: "Custom",     duration: "60 min", desc: "One-on-one with a head coach. A plan designed only for your body.",   img: "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Martial Arts",    cat: "combat",   level: "Beginner+",   duration: "75 min", desc: "Boxing, MMA & kickboxing fundamentals by certified instructors.",     img: "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "strength", label: "Strength" },
  { id: "cardio", label: "Cardio" },
  { id: "flexibility", label: "Flexibility" },
  { id: "combat", label: "Combat" },
];

function go(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export default function Programs() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? PROGRAMS : PROGRAMS.filter(p => p.cat === filter);

  return (
    <section id="programs" className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(255,59,59,0.06)', filter: 'blur(120px)' }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="section-label mb-6">Programs</div>
            <h2 className="font-extrabold uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Train with <span className="text-[#FF3B3B]">intent.</span><br />Not just intensity.
            </h2>
          </div>
          <p className="text-white/60 font-light text-sm md:text-base max-w-md leading-relaxed">
            Six disciplines. One standard. Every program is structured, coached, and measured.
          </p>
        </div>

        {/* Filter tabs — no AnimatePresence, just CSS opacity transition */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold border rounded-sm transition-all duration-200 ${
                filter === f.id
                  ? "bg-[#FF3B3B] text-white border-[#FF3B3B]"
                  : "bg-[#141414] text-white/60 border-white/10 hover:border-white/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards — stagger only first 3, rest instant */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 2) * 0.08 }}
              className="group relative overflow-hidden bg-[#141414] border border-white/10 rounded-sm cursor-pointer"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={p.img} alt={p.name}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#FF3B3B] text-white text-[10px] tracking-[0.25em] uppercase font-bold rounded-sm">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{p.name}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF3B3B] group-hover:border-[#FF3B3B] transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center gap-4 text-white/40 text-xs border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>{p.duration}</span></div>
                  <div className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5" /><span>{p.level}</span></div>
                  <button onClick={() => go("contact")} className="ml-auto text-[10px] tracking-[0.25em] uppercase font-semibold text-white/80 hover:text-[#FF3B3B] transition-colors">
                    Know More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
