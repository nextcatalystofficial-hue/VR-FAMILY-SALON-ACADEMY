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
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12 text-[#A6A6A6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="font-editorial text-xl sm:text-2xl tracking-[0.18em] text-[#F5F3EF] uppercase font-semibold block"
            >
              VR <span className="text-[#C8A96B] font-light">SALON</span> & ACADEMY
            </a>
            <p className="text-xs sm:text-sm text-[#A6A6A6] font-light max-w-sm leading-relaxed">
              Modern men's grooming, contemporary styling, and salon academy education in CCL
              Colony, Pandra, Ranchi, Jharkhand.
            </p>
            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>CCL Colony, Pandra, Ranchi, Jharkhand 834005</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>8:00 AM – 8:00 PM (Monday – Sunday)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium block mb-4">
              Explore
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1 text-[#A6A6A6] hover:text-[#C8A96B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct & Map */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium block mb-4">
              Direct Contact
            </span>
            <a
              href={`tel:${salonInfo.phone}`}
              className="inline-flex items-center gap-2 text-white hover:text-[#C8A96B] font-mono tracking-wider text-base transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8A96B]" />
              <span>{salonInfo.phoneFormatted}</span>
            </a>
            <div>
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C8A96B] hover:underline"
              >
                <span>Find Us on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[11px] text-[#A6A6A6] block">
                5.0 ★ Google Rating · 19+ Verified Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 VR Family Salon, Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pandra · Ranchi · Jharkhand</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#A6A6A6] hover:text-[#C8A96B] transition-colors cursor-pointer uppercase tracking-widest text-[11px]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
