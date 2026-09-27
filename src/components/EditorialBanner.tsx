import { motion } from 'motion/react';
import { salonAssets } from '../data/salonData.ts';

export default function EditorialBanner() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden border-b border-[#C8A96B]/20 bg-[#FAF8F3]">
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
          className="w-full h-full object-cover object-center filter saturate-75 opacity-30"
        />
        {/* Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/80 to-[#FAF8F3]" />
        <div className="absolute inset-0 bg-[#FAF8F3]/40" />
      </div>

      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-50" />

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#9E7422] font-semibold block mb-4">
          Atmosphere & Craft
        </span>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[#141312] leading-[1.05] text-balance">
          Details <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
            Make the
          </span> <br />
          Difference.
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-[#C8A96B]/40" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold">
            CCL Colony · Pandra · Ranchi
          </span>
          <span className="w-12 h-[1px] bg-[#C8A96B]/40" />
        </div>
      </div>
    </section>
  );
}
