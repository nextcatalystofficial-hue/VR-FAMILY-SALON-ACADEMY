import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { salonInfo } from '../data/salonData.ts';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why VR', href: '#why-vr' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Academy', href: '#academy' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  const handleMobileNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#C8A96B]/30 shadow-[0_4px_25px_-5px_rgba(184,142,56,0.12)] py-3.5'
            : 'bg-white/80 backdrop-blur-md border-b border-[#C8A96B]/20 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-editorial text-base sm:text-2xl tracking-[0.12em] sm:tracking-[0.18em] text-[#1A1815] uppercase font-semibold hover:text-[#B88E38] transition-colors shrink-0"
          >
            VR <span className="text-[#B88E38] font-light">SALON</span> & ACADEMY
          </a>

          {/* Zone 2: 4–6 nav links, single-line, clean hover underline */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-semibold text-[#5C564F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B88E38] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B88E38] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${salonInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#5C564F] hover:text-[#B88E38] font-medium tracking-wider transition-colors px-2 py-1.5 whitespace-nowrap"
              title="Direct Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88E38]" />
              <span>{salonInfo.phoneFormatted}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-3 sm:px-5 py-2 sm:py-2.5 min-h-[38px] bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase hover:brightness-105 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1 sm:gap-1.5 shadow-md shadow-[#C59B43]/25 border border-[#C59B43]/30"
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-1.5 sm:p-2 text-[#1A1815] hover:text-[#B88E38] transition-colors cursor-pointer"
            >
              {isMobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FAF8F3]/98 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between lg:hidden border-b border-[#C8A96B]/25"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.25em] text-[#B88E38] uppercase font-semibold">
                Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleMobileNavClick(link.href)}
                    className="text-left font-editorial text-2xl tracking-wide text-[#1A1815] hover:text-[#B88E38] transition-colors py-1 cursor-pointer flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88E38]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#C8A96B]/20 space-y-4">
              <div>
                <p className="text-xs text-[#7A746B] uppercase tracking-wider mb-1 font-medium">Direct Booking</p>
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="font-editorial text-2xl text-[#1A1815] hover:text-[#B88E38] tracking-wider transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#B88E38]" />
                  <span>{salonInfo.phoneFormatted}</span>
                </a>
                <p className="text-[11px] text-[#7A746B] mt-1">
                  CCL Colony, Pandra, Ranchi · 8:00 AM – 8:00 PM
                </p>
              </div>

              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-[0.2em] uppercase hover:brightness-105 transition-colors cursor-pointer text-center shadow-lg shadow-[#C59B43]/20"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
