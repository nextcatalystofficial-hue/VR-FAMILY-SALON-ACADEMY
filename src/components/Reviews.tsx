import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewsData, salonInfo } from '../data/salonData.ts';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#FAF8F3] border-b border-[#C8A96B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C8A96B]/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#B88E38]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7422] font-semibold">
                Verified Feedback
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141312] uppercase tracking-tight">
              What Clients Say. <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B88E38] via-[#D4AF37] to-[#A88238]">
                Unfiltered Impressions.
              </span>
            </h2>
          </div>

          {/* Aggregate Trust Badge */}
          <div className="bg-white border border-[#EBE5D8] shadow-sm p-4 flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1 text-[#B88E38] justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B88E38]" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-[#78716C] mt-0.5 block font-medium">
                Google Verified Score
              </span>
            </div>
            <div className="border-l border-[#EBE5D8] pl-4">
              <div className="font-editorial text-3xl text-[#141312] font-bold tabular-nums">
                {salonInfo.googleRating}
              </div>
              <span className="text-[10px] text-[#78716C] tracking-wider block font-medium">
                {salonInfo.reviewsCount} Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Display: Grid on Desktop, Swiper on Mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#EBE5D8] hover:border-[#B88E38] p-8 flex flex-col justify-between relative group transition-colors shadow-sm"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B88E38]/30 mb-6" />
                <div className="flex text-[#B88E38] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B88E38]" />
                  ))}
                </div>
                <p className="text-sm text-[#3B3732] leading-relaxed font-normal mb-6">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5D8] flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#141312] font-semibold">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#78716C]">{review.date}</span>
                </div>
                {review.serviceMentioned && (
                  <span className="text-[10px] text-[#9E7422] font-semibold border border-[#B88E38]/30 bg-[#FAF8F3] px-2 py-0.5">
                    {review.serviceMentioned}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider */}
        <div className="lg:hidden">
          <div className="relative bg-white border border-[#EBE5D8] p-6 sm:p-8 shadow-sm">
            <Quote className="w-8 h-8 text-[#B88E38]/30 mb-4" />
            <div className="flex text-[#B88E38] mb-3">
              {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B88E38]" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#3B3732] leading-relaxed font-normal mb-6 min-h-[80px]">
              "{reviewsData[currentIndex].content}"
            </p>

            <div className="pt-4 border-t border-[#EBE5D8] flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#141312] font-semibold">
                  {reviewsData[currentIndex].name}
                </h4>
                <span className="text-[11px] text-[#78716C]">{reviewsData[currentIndex].date}</span>
              </div>
              {reviewsData[currentIndex].serviceMentioned && (
                <span className="text-[10px] text-[#9E7422] font-semibold border border-[#B88E38]/30 bg-[#FAF8F3] px-2 py-0.5">
                  {reviewsData[currentIndex].serviceMentioned}
                </span>
              )}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-[#78716C] font-mono tabular-nums font-medium">
              {currentIndex + 1} / {reviewsData.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-10 h-10 border border-[#EBE5D8] bg-white flex items-center justify-center text-[#141312] hover:border-[#B88E38] hover:text-[#B88E38] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-10 h-10 border border-[#EBE5D8] bg-white flex items-center justify-center text-[#141312] hover:border-[#B88E38] hover:text-[#B88E38] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
