import { motion } from 'motion/react';
import { salonAssets } from '../data/salonData.ts';

export default function EditorialBanner() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
      {/* Background Image with Slow Parallax / Drift */}
      <div className="absolute inset-0">
        <motion.img
          src={salonAssets.interior}
          alt="VR Family Salon Interior Architecture"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        {/* Scrims */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-40" />

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A96B] font-medium block mb-4">
          Atmosphere & Craft
        </span>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[#F5F3EF] leading-[1.05] text-balance">
          Details <br />
          <span className="italic font-light text-[#C8A96B]">Make the</span> <br />
          Difference.
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-white/20" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#A6A6A6]">
            CCL Colony · Pandra · Ranchi
          </span>
          <span className="w-12 h-[1px] bg-white/20" />
        </div>
      </div>
    </section>
  );
}
