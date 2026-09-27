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
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-editorial text-lg sm:text-2xl tracking-[0.18em] text-[#F5F3EF] uppercase font-semibold hover:text-white transition-colors shrink-0"
          >
            VR <span className="text-[#C8A96B] font-light">SALON</span> & ACADEMY
          </a>

          {/* Zone 2: 4–6 nav links, single-line, clean hover underline */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#A6A6A6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F5F3EF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${salonInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#A6A6A6] hover:text-[#C8A96B] tracking-wider transition-colors px-2 py-1.5 whitespace-nowrap"
              title="Direct Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{salonInfo.phoneFormatted}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 sm:px-5 py-2.5 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.15em] uppercase hover:bg-[#D7BC82] transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2 text-[#F5F3EF] hover:text-[#C8A96B] transition-colors cursor-pointer"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 z-30 bg-[#0A0A0A]/98 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between lg:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.25em] text-[#C8A96B] uppercase font-medium">
                Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleMobileNavClick(link.href)}
                    className="text-left font-editorial text-2xl tracking-wide text-[#F5F3EF] hover:text-[#C8A96B] transition-colors py-1 cursor-pointer flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A6A6A6]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div>
                <p className="text-xs text-[#A6A6A6] uppercase tracking-wider mb-1">Direct Booking</p>
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="font-editorial text-2xl text-white hover:text-[#C8A96B] tracking-wider transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#C8A96B]" />
                  <span>{salonInfo.phoneFormatted}</span>
                </a>
                <p className="text-[11px] text-[#A6A6A6] mt-1">
                  CCL Colony, Pandra, Ranchi · 8:00 AM – 8:00 PM
                </p>
              </div>

              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#C8A96B] text-[#0A0A0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D7BC82] transition-colors cursor-pointer text-center"
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
