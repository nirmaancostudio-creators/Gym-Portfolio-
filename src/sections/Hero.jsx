import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Dumbbell } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Use translateY via CSS transform — GPU composited, no layout thrash
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background — only this moves on scroll, GPU layer */}
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/55 to-[#0A0A0A]" />
      </motion.div>

      <div className="grain absolute inset-0 z-[2]" />

      {/* Content — fades out on scroll, no y movement = less work */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="section-label mb-8"
        >
          <span>Durg · Bhilai · Since 2020</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold uppercase leading-[0.92] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] max-w-5xl"
        >
          Forge Your <br />
          <span className="text-stroke">Strongest</span>{" "}
          <span className="text-[#FF3B3B]">Self.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0 }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/70 font-light leading-relaxed"
        >
          Premium training. Elite coaches. Real results. Step into the grind and become the
          strongest version of yourself — stronger than yesterday, hungrier than tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => go("contact")}
            className="btn-red group px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold rounded-sm inline-flex items-center gap-3"
          >
            Book Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => go("programs")}
            className="btn-outline px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold rounded-sm inline-flex items-center gap-3"
          >
            Explore IronPeak
            <Dumbbell className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.4 }}
          className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between"
        >
          <div className="hidden md:flex flex-col gap-1">
            <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</div>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#FF3B3B] to-transparent" />
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">500+</div>
              <div className="text-[10px] tracking-[0.25em] text-white/40 uppercase">Athletes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#FF3B3B]">24/7</div>
              <div className="text-[10px] tracking-[0.25em] text-white/40 uppercase">Open Access</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
