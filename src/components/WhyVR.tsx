import { whyVrPillars } from '../data/salonData.ts';

export default function WhyVR() {
  return (
    <section id="why-vr" className="relative py-24 sm:py-32 bg-[#FAF8F3] border-b border-[#C8A96B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C8A96B]/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#B88E38]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold">
                The Standard
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141312] uppercase tracking-tight">
              Why Choose <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
                VR Family Salon?
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#4A4641] font-normal leading-relaxed">
            Honest barbering, skilled hands, and a commitment to personal grooming excellence in CCL
            Colony, Pandra.
          </p>
        </div>

        {/* 4 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[#EBE5D8] bg-white p-2 lg:p-4 shadow-sm border border-[#EBE5D8]">
          {whyVrPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="lg:px-8 first:lg:pl-4 last:lg:pr-4 group hover:bg-[#FAF8F3] p-6 lg:py-8 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#9E7422] font-bold tracking-widest tabular-nums border border-[#B88E38]/30 bg-[#FAF8F3] px-2 py-0.5">
                  {pillar.number}
                </span>
                <span className="w-8 h-[1px] bg-[#C8A96B]/30 group-hover:bg-[#B88E38] transition-colors" />
              </div>

              <h3 className="font-editorial text-2xl text-[#141312] tracking-wide mb-3 group-hover:text-[#B88E38] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5C564F] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
