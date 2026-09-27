import { ArrowUp, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why VR', href: '#why-vr' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Academy', href: '#academy' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="bg-[#F7F5EE] border-t border-[#C8A96B]/25 pt-16 pb-12 text-[#5C564F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C8A96B]/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="font-editorial text-xl sm:text-2xl tracking-[0.18em] text-[#141312] uppercase font-semibold block"
            >
              VR <span className="text-[#B88E38] font-light">SALON</span> & ACADEMY
            </a>
            <p className="text-xs sm:text-sm text-[#5C564F] font-normal max-w-sm leading-relaxed">
              Modern men's grooming, contemporary styling, and salon academy education in CCL
              Colony, Pandra, Ranchi, Jharkhand.
            </p>
            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#2E2A25]">
                <MapPin className="w-3.5 h-3.5 text-[#B88E38]" />
                <span className="font-medium">CCL Colony, Pandra, Ranchi, Jharkhand 834005</span>
              </div>
              <div className="flex items-center gap-2 text-[#2E2A25]">
                <Clock className="w-3.5 h-3.5 text-[#B88E38]" />
                <span className="font-medium">8:00 AM – 8:00 PM (Monday – Sunday)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold block mb-4">
              Explore
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1 text-[#5C564F] hover:text-[#B88E38] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct & Map */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold block mb-4">
              Direct Contact
            </span>
            <a
              href={`tel:${salonInfo.phone}`}
              className="inline-flex items-center gap-2 text-[#141312] hover:text-[#B88E38] font-mono tracking-wider text-base font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B88E38]" />
              <span>{salonInfo.phoneFormatted}</span>
            </a>
            <div>
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#9E7422] hover:text-[#B88E38] hover:underline font-semibold"
              >
                <span>Find Us on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[11px] text-[#78716C] block font-medium">
                5.0 ★ Google Rating · 19+ Verified Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© 2026 VR Family Salon, Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pandra · Ranchi · Jharkhand</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#5C564F] hover:text-[#B88E38] transition-colors cursor-pointer uppercase tracking-widest text-[11px] font-semibold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B88E38]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
