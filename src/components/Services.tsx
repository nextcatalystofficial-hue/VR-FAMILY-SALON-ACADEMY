import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/salonData.ts';
import { ServiceItem } from '../types.ts';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(servicesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0E0E0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                Our Services
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight">
              Precision. Style. <br />
              <span className="italic font-light text-white">Confidence.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A6A6A6] block mb-1">
              Pricing Policy
            </span>
            <span className="text-xs text-[#C8A96B] border-b border-[#C8A96B]/40 pb-0.5">
              Personalized Price on Consultation
            </span>
          </div>
        </div>

        {/* Services Rows */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {servicesData.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`group transition-all duration-300 ${
                  isExpanded ? 'bg-[#141414]' : 'hover:bg-[#121212]'
                }`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="py-6 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer relative"
                >
                  {/* Subtle Gold Left Border on Active */}
                  {isExpanded && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96B]" />
                  )}

                  {/* Left: Number & Titles */}
                  <div className="flex items-baseline sm:items-center gap-4 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-[#C8A96B] tracking-widest tabular-nums w-8 shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-white tracking-wide group-hover:text-[#C8A96B] transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest text-[#A6A6A6] border border-white/10 px-2 py-0.5 hidden sm:inline-block">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A6A6] mt-1 font-light line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Price Indicator & Expand Affordance */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-12 sm:pl-0">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] uppercase tracking-widest text-[#C8A96B] block">
                        {service.priceNote}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-none border border-white/15 flex items-center justify-center text-[#F5F3EF] group-hover:border-[#C8A96B] group-hover:text-[#C8A96B] transition-colors shrink-0">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-[#C8A96B]" />
                      ) : (
                        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-2 pl-12 sm:pl-20 max-w-4xl">
                        <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6 font-light">
                          {service.description}
                        </p>

                        {/* Service Inclusions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action CTA */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenBooking(service.name);
                            }}
                            className="px-6 py-2.5 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-wider uppercase hover:bg-[#D7BC82] transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <span>Inquire for {service.name}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-[11px] text-[#A6A6A6]">
                            Available at CCL Colony, Pandra salon studio
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
