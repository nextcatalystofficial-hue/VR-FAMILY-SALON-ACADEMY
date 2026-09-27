import { Phone, Navigation, ArrowRight, Sparkles } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export default function ContactCTA({ onOpenBooking }: ContactCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#FAF8F3] border-b border-[#C8A96B]/20 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#B88E38]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7422] font-semibold">
            Elevate Your Grooming
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#141312] leading-[1.08] mb-6 text-balance">
          Ready for <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
            Your Next
          </span> Look?
        </h2>

        <p className="text-base sm:text-xl text-[#4A4641] font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Step into VR Family Salon, Academy. Tailored cuts, beard contouring, and rejuvenating hair
          rituals in CCL Colony, Pandra, Ranchi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-[0.2em] uppercase hover:brightness-105 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#C59B43]/25 border border-[#C59B43]/30"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${salonInfo.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-white border border-[#B88E38]/60 text-[#141312] font-semibold text-xs tracking-[0.2em] uppercase hover:border-[#B88E38] hover:text-[#9E7422] transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#B88E38]" />
            <span>Call: {salonInfo.phoneFormatted}</span>
          </a>

          <a
            href={salonInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-white border border-[#EBE5D8] text-[#5C564F] font-semibold text-xs tracking-[0.15em] uppercase hover:text-[#141312] hover:border-[#B88E38] transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B88E38]" />
            <span>Directions</span>
          </a>
        </div>

        {/* Quiet Trust Info */}
        <div className="mt-12 pt-8 border-t border-[#C8A96B]/20 flex flex-wrap items-center justify-center gap-6 text-xs text-[#78716C] font-medium">
          <span>CCL Colony, Pandra, Ranchi 834005</span>
          <span className="hidden sm:inline text-[#C8A96B]/40">·</span>
          <span>Open Daily 8:00 AM – 8:00 PM</span>
          <span className="hidden sm:inline text-[#C8A96B]/40">·</span>
          <span>5.0 ★ Google Rating (19+ Reviews)</span>
        </div>
      </div>
    </section>
  );
}
