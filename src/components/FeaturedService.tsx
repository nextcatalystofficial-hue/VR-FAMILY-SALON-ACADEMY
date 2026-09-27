import { motion } from 'motion/react';
import { ArrowRight, Scissors, Sparkles, Clock, Check } from 'lucide-react';
import { salonAssets } from '../data/salonData.ts';

interface FeaturedServiceProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function FeaturedService({ onOpenBooking }: FeaturedServiceProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Cinematic Photography */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Subtle Gold Frame Lines */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C8A96B]/50" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C8A96B]/50" />

              <div className="relative overflow-hidden bg-[#161616] border border-white/10 shadow-2xl">
                <motion.img
                  src={salonAssets.signature}
                  alt="The Signature Cut Master Barbering"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[4/3] object-cover hover:scale-102 transition-transform duration-700"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#F5F3EF]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                    <span className="tracking-widest uppercase">Master Barber Technique</span>
                  </div>
                  <span className="text-[11px] text-[#A6A6A6] tracking-wider">CCL Colony · Pandra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Session Inclusions */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-4 h-4 text-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                Featured Experience
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight leading-[1.08] mb-6">
              The Signature <br />
              <span className="italic font-light text-white">Cut & Sculpt.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A6] font-light leading-relaxed mb-8">
              Precision grooming designed around your style, face and personality. We analyze hairline
              growth patterns, scalp contours, and your daily styling routine before making the first
              cut.
            </p>

            {/* What's Included */}
            <div className="space-y-4 mb-10 pb-8 border-b border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-none border border-[#C8A96B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C8A96B]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Personal Architectural Consultation</h4>
                  <p className="text-xs text-[#A6A6A6] mt-0.5">
                    Discussion of desired length, silhouette, and maintenance expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-none border border-[#C8A96B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C8A96B]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Precision Shear & Clipper Sculpting</h4>
                  <p className="text-xs text-[#A6A6A6] mt-0.5">
                    Gradual transition work, textured layering, and clean neckline geometry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-none border border-[#C8A96B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C8A96B]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Straight-Blade Detailing & Finishing</h4>
                  <p className="text-xs text-[#A6A6A6] mt-0.5">
                    Clean razor edge finish followed by tailored texturizing pomade or tonic.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking('The Signature Cut')}
                className="px-8 py-4 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D7BC82] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#A6A6A6] justify-center sm:justify-start">
                <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Price on consultation · In-salon ritual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
