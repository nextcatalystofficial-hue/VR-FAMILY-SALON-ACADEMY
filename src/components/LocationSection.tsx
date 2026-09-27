import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

export default function LocationSection() {
  const mapSearchUrl = salonInfo.googleMapsUrl;

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-white border-b border-[#C8A96B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 pb-6 border-b border-[#C8A96B]/20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#B88E38]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold">
              Studio Location
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141312] uppercase tracking-tight">
            Find Your Way <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
              To VR.
            </span>
          </h2>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact and Timings Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF8F3] border border-[#EBE5D8] p-8 sm:p-10 shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold block mb-2">
                Address & Access
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#141312] uppercase tracking-wide mb-6">
                VR Family Salon, Academy
              </h3>

              <div className="space-y-6 text-sm text-[#5C564F]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B88E38] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#141312] font-semibold text-base">CCL Colony, Pandra</p>
                    <p>Ranchi, Jharkhand 834005</p>
                    <p className="text-xs text-[#78716C] mt-1">Near CCL residential campus area</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#B88E38] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#141312] font-semibold text-base">Direct Line</p>
                    <a
                      href={`tel:${salonInfo.phone}`}
                      className="text-[#9E7422] hover:text-[#B88E38] transition-colors font-mono tracking-wider text-base font-semibold"
                    >
                      {salonInfo.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#78716C] mt-1">Calls & appointment inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#B88E38] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#141312] font-semibold text-base">Visiting Hours</p>
                    <p className="text-[#141312]">8:00 AM – 8:00 PM</p>
                    <p className="text-xs text-[#78716C] mt-1">Open 7 Days a Week (Mon – Sun)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#EBE5D8] flex flex-col sm:flex-row gap-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-wider uppercase hover:brightness-105 transition-colors flex items-center justify-center gap-2 cursor-pointer text-center shadow-md shadow-[#C59B43]/20"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${salonInfo.phone}`}
                className="flex-1 py-3.5 border border-[#B88E38]/50 bg-white text-[#141312] font-semibold text-xs tracking-wider uppercase hover:border-[#B88E38] hover:text-[#9E7422] transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88E38]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map & Visual Landmark Card */}
          <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#EBE5D8] relative overflow-hidden flex flex-col min-h-[400px] shadow-sm">
            {/* Embedded Responsive Interactive Google Map */}
            <div className="relative flex-1 w-full h-full min-h-[350px]">
              <iframe
                title="VR Family Salon, Academy Location Map"
                src="https://maps.google.com/maps?q=CCL+Colony,+Pandra,+Ranchi,+Jharkhand+834005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px]"
              />

              {/* Overlay Card on Top of Map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 border border-[#C8A96B]/30 p-4 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#9E7422] font-semibold">
                    Verified Location
                  </span>
                  <span className="text-[10px] text-[#78716C] font-medium">Pandra 834005</span>
                </div>
                <h4 className="font-editorial text-base text-[#141312] font-medium">VR Family Salon, Academy</h4>
                <p className="text-xs text-[#5C564F] mt-1">CCL Colony, Pandra, Ranchi</p>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9E7422] hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="p-4 bg-white border-t border-[#EBE5D8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C564F]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#B88E38]" />
                <span>Walk-ins welcome & appointments recommended</span>
              </div>
              <span className="text-[#9E7422] font-mono font-semibold">Pandra · Ranchi · JH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
