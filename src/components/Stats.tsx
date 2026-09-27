import { Star, Clock, MapPin, MessageSquare } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

export default function Stats() {
  const stats = [
    {
      value: salonInfo.googleRating,
      label: 'Google Rating',
      detail: 'Verified 5.0 Star Rating',
      icon: Star,
    },
    {
      value: salonInfo.reviewsCount,
      label: 'Google Reviews',
      detail: 'Authentic Client Feedback',
      icon: MessageSquare,
    },
    {
      value: '8 AM – 8 PM',
      label: 'Operating Hours',
      detail: 'Open 7 Days a Week',
      icon: Clock,
    },
    {
      value: 'CCL Colony',
      label: 'Pandra, Ranchi',
      detail: 'Jharkhand 834005',
      icon: MapPin,
    },
  ];

  return (
    <section className="relative bg-white border-b border-[#C8A96B]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#EBE5D8]">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="lg:px-8 first:lg:pl-0 last:lg:pr-0 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Icon className="w-3.5 h-3.5 text-[#B88E38]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#78716C] font-semibold">
                    {item.label}
                  </span>
                </div>
                <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238] tracking-tight tabular-nums mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-[#5C564F] font-medium">{item.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
