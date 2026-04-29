import { Zap, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8 overflow-hidden" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Big word */}
        <div className="mb-14 overflow-hidden">
          <div className="text-stroke-muted font-extrabold uppercase tracking-tighter leading-none text-[22vw] lg:text-[16vw] select-none">
            IRONPEAK
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#FF3B3B] fill-[#FF3B3B]" strokeWidth={1.5} />
              <span className="text-white font-extrabold tracking-tight text-xl">
                IRON<span className="text-[#FF3B3B]">PEAK</span>
              </span>
            </div>
            <p className="text-white/50 text-sm font-light max-w-sm leading-relaxed">
              Premium training. Elite coaches. Real results. Built in Durg-Bhilai for those who refuse to settle.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-semibold mb-4">Explore</div>
            <ul className="flex flex-col gap-2 text-sm">
              {["about", "programs", "membership", "gallery"].map((id) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="text-white/70 hover:text-[#FF3B3B] transition-colors capitalize" data-testid={`footer-link-${id}`}>
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-semibold mb-4">Contact</div>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>Nehru Nagar, Durg-Bhilai</li>
              <li>+91 00000 00000</li>
              <li>hello@ironpeak.fit</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] tracking-[0.25em] uppercase text-white/30">
            © {year} IronPeak Fitness · All Rights Forged
          </div>
          <div className="flex items-center gap-3">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a key={i} href="#" data-testid={`footer-social-${i}`} className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-white/50 hover:text-[#FF3B3B] hover:border-[#FF3B3B] transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
