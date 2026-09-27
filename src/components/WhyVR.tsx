import { whyVrPillars } from '../data/salonData.ts';

export default function WhyVR() {
  return (
    <section id="why-vr" className="relative py-24 sm:py-32 bg-[#0E0E0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                The Standard
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight">
              Why Choose <br />
              <span className="italic font-light text-[#C8A96B]">VR Family Salon?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A6A6A6] font-light leading-relaxed">
            Honest barbering, skilled hands, and a commitment to personal grooming excellence in CCL
            Colony, Pandra.
          </p>
        </div>

        {/* 4 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {whyVrPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="lg:px-8 first:lg:pl-0 last:lg:pr-0 group hover:bg-[#141414]/50 p-6 lg:p-6 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C8A96B] tracking-widest tabular-nums border border-[#C8A96B]/30 px-2 py-0.5">
                  {pillar.number}
                </span>
                <span className="w-8 h-[1px] bg-white/10 group-hover:bg-[#C8A96B] transition-colors" />
              </div>

              <h3 className="font-editorial text-2xl text-white tracking-wide mb-3 group-hover:text-[#C8A96B] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
