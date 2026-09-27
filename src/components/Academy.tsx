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
    <section id="academy" className="relative py-24 sm:py-32 bg-[#0E0E0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academy Narrative */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-4 h-4 text-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                Professional Education
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight leading-[1.08] mb-6">
              The Academy. <br />
              <span className="italic font-light text-[#C8A96B]">Learn the Craft.</span> <br />
              Master the Detail.
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A6] font-light leading-relaxed mb-8">
              Explore professional grooming and styling education through the VR Family Salon Academy.
              Whether stepping into barbering for the first time or advancing your styling repertoire,
              our academy provides disciplined, hands-on instruction in CCL Colony, Pandra.
            </p>

            {/* Core Syllabus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pb-8 border-b border-white/10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#C8A96B]" />
                      <h4 className="text-xs uppercase tracking-wider text-white font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#A6A6A6] font-light leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Inquiries */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking('Academy Training Inquiry')}
                className="px-8 py-4 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D7BC82] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Enquire About Academy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-[#A6A6A6] text-center sm:text-left font-light">
                Curriculum & admission schedule on consultation
              </span>
            </div>
          </div>

          {/* Right Column: Workshop Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-[#C8A96B]" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-[#C8A96B]" />

              <div className="bg-[#141414] border border-white/10 p-2 overflow-hidden shadow-2xl">
                <motion.img
                  src={salonAssets.academy}
                  alt="VR Salon Academy Masterclass Training"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[16/10] object-cover"
                />

                <div className="p-4 bg-[#111111] flex items-center justify-between border-t border-white/5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white font-medium">
                      Hands-On Studio Training
                    </p>
                    <p className="text-[11px] text-[#A6A6A6]">Practical grooming & client styling sessions</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A96B] border border-[#C8A96B]/30 px-2 py-0.5">
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
