import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Eye } from 'lucide-react';
import { galleryItems } from '../data/salonData.ts';
import { GalleryItem } from '../types.ts';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'hairstyles', label: 'Hairstyles' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'salon', label: 'Studio Interior' },
    { id: 'academy', label: 'Academy' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                Portfolio & Spaces
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight">
              The Visual <br />
              <span className="italic font-light text-white">Editorial.</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (Per Frontend Design Skill: functional buttons) */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[#141414] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C8A96B] text-[#0A0A0A] font-semibold'
                    : 'text-[#A6A6A6] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid: 2 columns on mobile, 3-4 columns on desktop */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveLightbox(item)}
                className="group relative overflow-hidden bg-[#161616] border border-white/10 cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A96B] font-medium mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-editorial text-sm sm:text-base text-white tracking-wide leading-tight">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#A6A6A6]">
                    <Eye className="w-3.5 h-3.5 text-[#C8A96B]" />
                    <span>View Detail</span>
                  </div>
                </div>

                {/* Subtle corner indicator */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#141414] border border-white/10 z-10 overflow-hidden flex flex-col"
            >
              <div className="p-4 bg-[#111111] flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96B]">
                    {activeLightbox.categoryLabel}
                  </span>
                  <h3 className="font-editorial text-lg sm:text-xl text-white">
                    {activeLightbox.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-2 text-[#A6A6A6] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-2 sm:p-4 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-3 bg-[#111111] border-t border-white/10 text-right">
                <span className="text-[11px] text-[#A6A6A6]">
                  VR Family Salon, Academy · CCL Colony, Pandra
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
