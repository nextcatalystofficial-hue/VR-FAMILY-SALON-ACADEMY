import { motion } from 'motion/react';
import { ArrowDown, Star, Phone, Scissors } from 'lucide-react';
import { salonAssets, salonInfo } from '../data/salonData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Slow Subtle Ambient Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={salonAssets.hero}
          alt="VR Family Salon Luxury Grooming Interior"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic Scrims for Perfect Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-40 z-1" />

      {/* Empty spacer for navbar clearance */}
      <div className="h-24 sm:h-32" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full flex flex-col justify-end">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C8A96B]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96B] font-medium">
              Pandra · Ranchi · Jharkhand
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F3EF] leading-[1.05] uppercase font-normal mb-6 text-balance"
          >
            Crafting <br />
            <span className="italic font-light text-white">Your Signature</span> <br />
            Look.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-lg text-[#A6A6A6] font-light max-w-xl leading-relaxed mb-8"
          >
            Professional grooming, tailored styling, and expert hair care rituals at CCL Colony,
            Pandra. Experience meticulous barbering craftsmanship designed around your personal style.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D7BC82] transition-all duration-200 cursor-pointer shadow-lg shadow-black/40 flex items-center justify-center gap-2"
            >
              <span>Book Appointment</span>
            </button>

            <button
              onClick={handleScrollToServices}
              className="px-8 py-4 bg-transparent border border-white/20 text-[#F5F3EF] font-medium text-xs tracking-[0.2em] uppercase hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <Scissors className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Explore Services</span>
            </button>

            <a
              href={`tel:${salonInfo.phone}`}
              className="px-6 py-4 sm:hidden bg-[#181818] border border-white/10 text-white font-medium text-xs tracking-[0.15em] uppercase hover:border-white/30 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Call: {salonInfo.phoneFormatted}</span>
            </a>
          </motion.div>

          {/* Trust Metadata Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A6A6A6]"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-[#C8A96B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C8A96B]" />
                ))}
              </div>
              <span className="text-white font-semibold tabular-nums">5.0</span>
              <span>Google Rating</span>
            </div>
            <span className="hidden sm:inline text-white/20">·</span>
            <div>
              <span className="text-white font-medium tabular-nums">19+</span> Verified Client Reviews
            </div>
            <span className="hidden sm:inline text-white/20">·</span>
            <div>
              <span className="text-white font-medium">8:00 AM – 8:00 PM</span> Daily
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 w-full flex items-center justify-between border-t border-white/5">
        <span className="text-[10px] tracking-[0.25em] text-[#A6A6A6] uppercase">
          VR Family Salon, Academy · Ranchi
        </span>
        <button
          onClick={handleScrollToServices}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6] hover:text-[#C8A96B] transition-colors cursor-pointer group"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3 h-3 text-[#C8A96B]" />
          </motion.span>
        </button>
      </div>
    </section>
  );
}
