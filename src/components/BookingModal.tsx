import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Clock, MapPin, Send, Check } from 'lucide-react';
import { salonInfo, servicesData } from '../data/salonData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || servicesData[0]?.name || 'Precision Haircuts & Styling'
  );
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM – 12:00 PM)');
  const [preferredDate, setPreferredDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const timeSlots = [
    'Morning (8:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
  ];

  const handleCall = () => {
    window.location.href = `tel:${salonInfo.phone}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello VR Family Salon, Academy!\n\nI would like to inquire about an appointment/consultation:\n• Service: ${selectedService}\n• Preferred Time: ${preferredTime}${
        preferredDate ? `\n• Preferred Date: ${preferredDate}` : ''
      }${clientName ? `\n• Name: ${clientName}` : ''}${
        clientNotes ? `\n• Notes: ${clientNotes}` : ''
      }\n\nPlease let me know your availability at CCL Colony, Pandra. Thank you!`
    );
    window.open(`https://wa.me/919006782796?text=${text}`, '_blank');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(salonInfo.phoneFormatted);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white border border-[#C8A96B]/30 rounded-none shadow-2xl p-6 sm:p-8 z-10 my-8 text-[#141312]"
          >
            {/* Top Bar with Close */}
            <div className="flex items-start justify-between pb-4 border-b border-[#EBE5D8] mb-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#9E7422] uppercase font-semibold">
                  Direct Salon Inquiry
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#141312] tracking-wide mt-1">
                  Book Your Session
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 text-[#78716C] hover:text-[#141312] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Call Out */}
            <div className="bg-[#FAF8F3] border border-[#EBE5D8] p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs text-[#78716C] font-medium">Fastest Way — Call Direct</p>
                <p className="text-base font-semibold text-[#141312] tracking-wider mt-0.5 font-mono">
                  {salonInfo.phoneFormatted}
                </p>
                <p className="text-[11px] text-[#78716C]">Open 8:00 AM – 8:00 PM Daily</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="px-4 py-2 bg-gradient-to-r from-[#C59B43] via-[#D8B55A] to-[#B88E38] text-[#17140E] font-semibold text-xs tracking-wider uppercase hover:brightness-105 transition-colors flex items-center gap-1.5 shadow-sm shadow-[#C59B43]/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#17140E]" /> Call Now
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3 py-2 border border-[#D5CDBD] text-xs text-[#5C564F] hover:text-[#141312] hover:border-[#B88E38] transition-colors cursor-pointer bg-white"
                  title="Copy Phone Number"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-[#B88E38]" /> : 'Copy'}
                </button>
              </div>
            </div>

            {/* Form Fields for WhatsApp Pre-Fill */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#5C564F] uppercase tracking-wider mb-1.5 font-semibold">
                  Select Desired Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-[#D5CDBD] px-3 py-2.5 text-[#141312] focus:outline-none focus:border-[#B88E38] transition-colors text-xs font-medium"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.name} className="text-[#141312]">
                      {s.name} ({s.priceNote})
                    </option>
                  ))}
                  <option value="Academy Consultation" className="text-[#141312]">
                    Academy Training Inquiry
                  </option>
                  <option value="General Consultation" className="text-[#141312]">
                    General Grooming Consultation
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#5C564F] uppercase tracking-wider mb-1.5 font-semibold">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#D5CDBD] px-3 py-2.5 text-[#141312] focus:outline-none focus:border-[#B88E38] transition-colors text-xs font-medium"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="text-[#141312]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#5C564F] uppercase tracking-wider mb-1.5 font-semibold">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-[#D5CDBD] px-3 py-2 text-[#141312] focus:outline-none focus:border-[#B88E38] transition-colors text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5C564F] uppercase tracking-wider mb-1.5 font-semibold">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-[#D5CDBD] px-3 py-2 text-[#141312] placeholder-neutral-400 focus:outline-none focus:border-[#B88E38] transition-colors text-xs"
                />
              </div>

              <div>
                <label className="block text-[#5C564F] uppercase tracking-wider mb-1.5 font-semibold">
                  Special Notes or Style Request
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Beard trim with clean razor lines and textured haircut"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-white border border-[#D5CDBD] px-3 py-2 text-[#141312] placeholder-neutral-400 focus:outline-none focus:border-[#B88E38] transition-colors text-xs resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#EBE5D8] space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Send Booking Request via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleCall}
                className="w-full py-2.5 border border-[#B88E38] text-[#9E7422] font-semibold text-xs tracking-wider uppercase hover:bg-[#FAF8F3] transition-colors flex items-center justify-center gap-2 cursor-pointer bg-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88E38]" /> Call Directly ({salonInfo.phoneFormatted})
              </button>
            </div>

            {/* Location footer note */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#78716C] font-medium">
              <MapPin className="w-3 h-3 text-[#B88E38]" />
              <span>CCL Colony, Pandra, Ranchi, Jharkhand 834005</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
