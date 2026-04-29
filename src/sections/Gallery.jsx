import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Add ?auto=compress&w=600 to shrink Pexels images — huge speed win
const GALLERY = [
  "https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1613845205719-8c87760ab728?auto=format&fit=crop&w=600&q=70",
];

const TRANSFORMATIONS = [
  {
    name: "Rohan Mehta",
    time: "9 months",
    before: "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=500",
    after:  "https://images.pexels.com/photos/30672399/pexels-photo-30672399.jpeg?auto=compress&cs=tinysrgb&w=500",
    note: "Cut 14kg, added 22kg to squat.",
  },
  {
    name: "Priya Sharma",
    time: "6 months",
    before: "https://images.pexels.com/photos/17201700/pexels-photo-17201700.jpeg?auto=compress&cs=tinysrgb&w=500",
    after:  "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=500",
    note: "Full body recomposition. Strength & shape.",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Reduced range: was -40%, now -25% — less movement = smoother
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="section-label mb-6">Inside the Peak</div>
            <h2 className="font-extrabold uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl">
              Where the <span className="text-[#FF3B3B]">work</span> happens.
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/60 font-light text-sm md:text-base leading-relaxed">
            Elite equipment, low-key lighting, zero distractions. Every corner of IronPeak is
            designed to make one thing easy — showing up and putting in the work.
          </p>
        </div>
      </div>

      {/* Parallax strip — will-change isolates it to its own GPU layer */}
      <div className="relative overflow-hidden mb-24">
        <motion.div
          style={{ x, willChange: "transform" }}
          className="flex gap-5 pl-6 md:pl-10"
        >
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[260px] md:w-[380px] aspect-[4/5] overflow-hidden rounded-sm border border-white/10"
            >
              <img
                src={src}
                alt={`Gym ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Transformations */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <div className="section-label mb-4">Transformations</div>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Proof over <span className="text-[#FF3B3B]">promises</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {TRANSFORMATIONS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
                  <img src={t.before} alt="before" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-[10px] tracking-[0.25em] uppercase font-semibold rounded-sm">Before</div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
                  <img src={t.after} alt="after" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#FF3B3B] text-white text-[10px] tracking-[0.25em] uppercase font-semibold rounded-sm">After</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white font-semibold text-lg">{t.name}</div>
                    <div className="text-white/50 text-sm font-light mt-1">{t.note}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[#FF3B3B] text-2xl font-extrabold leading-none">{t.time.split(" ")[0]}</div>
                    <div className="text-[10px] tracking-[0.25em] text-white/40 uppercase mt-1">{t.time.split(" ")[1]}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="relative bg-[#141414] border border-white/10 rounded-sm overflow-hidden">
          <div className="aspect-[21/9] relative">
            <img
              src="https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Gym walkthrough"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-8 md:px-14">
                <div className="text-[11px] tracking-[0.3em] uppercase text-[#FF3B3B] font-semibold mb-3">Your turn</div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white mb-6">
                  Your transformation <br />starts <span className="text-[#FF3B3B]">here.</span>
                </h3>
                <button
                  onClick={() => go("contact")}
                  className="btn-red group inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded-sm"
                >
                  Book Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
