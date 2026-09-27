import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, BookOpen, Users, Scissors, Award } from 'lucide-react';
import { salonAssets } from '../data/salonData.ts';

interface AcademyProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Academy({ onOpenBooking }: AcademyProps) {
  const highlights = [
    {
      icon: Scissors,
      title: 'Precision Fundamentals',
      desc: 'Mastering scissor grip, sectioning geometry, and clipper taper mechanics.',
    },
    {
      icon: Users,
      title: 'Direct Stylist Mentorship',
      desc: 'One-on-one training beside experienced salon practitioners in Pandra.',
    },
    {
      icon: BookOpen,
      title: 'Salon Protocol & Hygiene',
      desc: 'Sanitation, tool sterilization, client consultation ethics, and workstation care.',
    },
    {
      icon: Award,
      title: 'Practical Hands-on Exposure',
      desc: 'Supervised live model styling sessions to build confidence and muscle memory.',
    },
  ];

  return (
    <section id="academy" className="relative py-24 sm:py-32 bg-[#FAF8F3] border-b border-[#C8A96B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academy Narrative */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-4 h-4 text-[#B88E38]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold">
                Professional Education
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141312] uppercase tracking-tight leading-[1.08] mb-6">
              The Academy. <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
                Learn the Craft.
              </span> <br />
              Master the Detail.
            </h2>

            <p className="text-base sm:text-lg text-[#4A4641] font-normal leading-relaxed mb-8">
              Explore professional grooming and styling education through the VR Family Salon Academy.
              Whether stepping into barbering for the first time or advancing your styling repertoire,
              our academy provides disciplined, hands-on instruction in CCL Colony, Pandra.
            </p>

            {/* Core Syllabus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pb-8 border-b border-[#C8A96B]/20">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#B88E38]" />
                      <h4 className="text-xs uppercase tracking-wider text-[#141312] font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#5C564F] font-normal leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Inquiries */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking('Academy Training Inquiry')}
                className="px-8 py-4 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-[0.2em] uppercase hover:brightness-105 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#C59B43]/25 border border-[#C59B43]/30"
              >
                <span>Enquire About Academy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-[#78716C] text-center sm:text-left font-medium">
                Curriculum & admission schedule on consultation
              </span>
            </div>
          </div>

          {/* Right Column: Workshop Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-[#B88E38]" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-[#B88E38]" />

              <div className="bg-white border border-[#C8A96B]/30 p-2 overflow-hidden shadow-xl shadow-[#C8A96B]/10">
                <motion.img
                  src={salonAssets.academy}
                  alt="VR Salon Academy Masterclass Training"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[16/10] object-cover hover:scale-102 transition-transform duration-700"
                />

                <div className="p-4 bg-[#FAF8F3] flex items-center justify-between border-t border-[#C8A96B]/20">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#141312] font-semibold">
                      Hands-On Studio Training
                    </p>
                    <p className="text-[11px] text-[#78716C]">Practical grooming & client styling sessions</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9E7422] font-semibold border border-[#C8A96B]/40 bg-white px-2 py-0.5 shadow-xs">
                    Admissions Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
