import { Phone, Navigation, ArrowRight, Sparkles } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export default function ContactCTA({ onOpenBooking }: ContactCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E0E] border-b border-white/10 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C8A96B]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C8A96B] font-medium">
            Elevate Your Grooming
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F5F3EF] leading-[1.08] mb-6 text-balance">
          Ready for <br />
          <span className="italic font-light text-[#C8A96B]">Your Next</span> Look?
        </h2>

        <p className="text-base sm:text-xl text-[#A6A6A6] font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Step into VR Family Salon, Academy. Tailored cuts, beard contouring, and rejuvenating hair
          rituals in CCL Colony, Pandra, Ranchi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D7BC82] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-black/40"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${salonInfo.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#141414] border border-white/20 text-[#F5F3EF] font-medium text-xs tracking-[0.2em] uppercase hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>Call: {salonInfo.phoneFormatted}</span>
          </a>

          <a
            href={salonInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-transparent border border-white/10 text-[#A6A6A6] font-medium text-xs tracking-[0.15em] uppercase hover:text-white hover:border-white/30 transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </a>
        </div>

        {/* Quiet Trust Info */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A6A6A6]">
          <span>CCL Colony, Pandra, Ranchi 834005</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>Open Daily 8:00 AM – 8:00 PM</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>5.0 ★ Google Rating (19+ Reviews)</span>
        </div>
      </div>
    </section>
  );
}
