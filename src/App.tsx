import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import BrandStatement from './components/BrandStatement.tsx';
import Services from './components/Services.tsx';
import FeaturedService from './components/FeaturedService.tsx';
import WhyVR from './components/WhyVR.tsx';
import Stats from './components/Stats.tsx';
import EditorialBanner from './components/EditorialBanner.tsx';
import Academy from './components/Academy.tsx';
import Gallery from './components/Gallery.tsx';
import Reviews from './components/Reviews.tsx';
import LocationSection from './components/LocationSection.tsx';
import ContactCTA from './components/ContactCTA.tsx';
import Footer from './components/Footer.tsx';
import BookingModal from './components/BookingModal.tsx';
import { salonInfo } from './data/salonData.ts';
import { Phone } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1A1815] relative selection:bg-[#B88E38] selection:text-white">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Subtle luxury desktop cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Layout */}
      <main>
        {/* Full-Screen Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Intro / Brand Philosophy Statement */}
        <BrandStatement />

        {/* Services Section with Expandable Rows */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Featured Service: The Signature Cut */}
        <FeaturedService onOpenBooking={handleOpenBooking} />

        {/* Why Choose VR */}
        <WhyVR />

        {/* Statistics Strip */}
        <Stats />

        {/* Full-width Editorial Visual Campaign Banner */}
        <EditorialBanner />

        {/* The Academy Section */}
        <Academy onOpenBooking={handleOpenBooking} />

        {/* Gallery / Visual Works */}
        <Gallery />

        {/* Verified Client Reviews */}
        <Reviews />

        {/* Studio Location & Timings */}
        <LocationSection />

        {/* Final Dramatic CTA */}
        <ContactCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Booking / Direct Phone & WhatsApp Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Floating Call Button on Mobile (Discreet, bottom right) */}
      <div className="fixed bottom-5 right-5 z-30 lg:hidden">
        <a
          href={`tel:${salonInfo.phone}`}
          aria-label="Call VR Salon"
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-wider uppercase shadow-xl hover:brightness-105 transition-transform active:scale-95 border border-[#C59B43]/30"
        >
          <Phone className="w-4 h-4 fill-current text-[#17140E]" />
          <span>Call Salon</span>
        </a>
      </div>
    </div>
  );
}
