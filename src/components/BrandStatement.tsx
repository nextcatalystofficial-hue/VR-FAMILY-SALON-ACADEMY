import { motion } from 'motion/react';
import { salonAssets } from '../data/salonData.ts';

export default function BrandStatement() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Typography & Brand Statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                The Philosophy
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight leading-[1.1] mb-8 text-balance">
              More Than a Haircut. <br />
              <span className="italic font-light text-[#C8A96B]">It's Your Signature.</span>
            </h2>

            <div className="space-y-5 text-[#A6A6A6] text-base sm:text-lg font-light leading-relaxed max-w-xl">
              <p>
                VR Family Salon, Academy was founded on the belief that genuine grooming is an art form.
                Located in CCL Colony, Pandra, Ranchi, our space unites contemporary hair artistry,
                disciplined barbering techniques, and personalized consultation.
              </p>
              <p>
                Whether refreshing your everyday cut, shaping a clean beard contour, or experiencing a
                revitalizing scalp treatment, we take the time to study your facial structure and hair
                texture. Every visit is calculated to leave you looking sharp and carrying effortless
                confidence.
              </p>
            </div>

            {/* Editorial Features Highlight */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-2xl font-editorial text-white mb-1">Bespoke</span>
                <span className="text-xs uppercase tracking-wider text-[#A6A6A6]">
                  Custom Hair Design
                </span>
              </div>
              <div>
                <span className="block text-2xl font-editorial text-white mb-1">Hygienic</span>
                <span className="text-xs uppercase tracking-wider text-[#A6A6A6]">
                  Sterilized Tools
                </span>
              </div>
              <div>
                <span className="block text-2xl font-editorial text-white mb-1">Mentorship</span>
                <span className="text-xs uppercase tracking-wider text-[#A6A6A6]">
                  Salon Academy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-contrast Editorial Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold Accent Corner Marks */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#C8A96B]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#C8A96B]" />

              <div className="relative bg-[#141414] border border-white/10 p-2 overflow-hidden shadow-2xl">
                <motion.img
                  src={salonAssets.groomingDetails}
                  alt="Artisan Barbering Instruments"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[4/3] object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                />

                {/* Caption Bar */}
                <div className="p-4 bg-[#111111] flex items-center justify-between border-t border-white/5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white font-medium">
                      Artisan Craftsmanship
                    </p>
                    <p className="text-[11px] text-[#A6A6A6]">Precision steel & straight razor discipline</p>
                  </div>
                  <span className="text-[11px] tracking-widest text-[#C8A96B] font-mono">VR · 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
