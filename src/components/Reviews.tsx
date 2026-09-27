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
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#0E0E0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C8A96B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A96B] font-medium">
                Verified Feedback
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] uppercase tracking-tight">
              What Clients Say. <br />
              <span className="italic font-light text-[#C8A96B]">Unfiltered Impressions.</span>
            </h2>
          </div>

          {/* Aggregate Trust Badge */}
          <div className="bg-[#141414] border border-white/10 p-4 flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1 text-[#C8A96B] justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A96B]" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-[#A6A6A6] mt-0.5 block">
                Google Verified Score
              </span>
            </div>
            <div className="border-l border-white/10 pl-4">
              <div className="font-editorial text-3xl text-white font-semibold tabular-nums">
                {salonInfo.googleRating}
              </div>
              <span className="text-[10px] text-[#A6A6A6] tracking-wider block">
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
              className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-between relative group hover:border-[#C8A96B]/50 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C8A96B]/30 mb-6" />
                <div className="flex text-[#C8A96B] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8A96B]" />
                  ))}
                </div>
                <p className="text-sm text-[#E5E5E5] leading-relaxed font-light mb-6">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-medium">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#A6A6A6]">{review.date}</span>
                </div>
                {review.serviceMentioned && (
                  <span className="text-[10px] text-[#C8A96B] border border-[#C8A96B]/30 px-2 py-0.5">
                    {review.serviceMentioned}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider */}
        <div className="lg:hidden">
          <div className="relative bg-[#141414] border border-white/10 p-6 sm:p-8">
            <Quote className="w-8 h-8 text-[#C8A96B]/30 mb-4" />
            <div className="flex text-[#C8A96B] mb-3">
              {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C8A96B]" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed font-light mb-6 min-h-[80px]">
              "{reviewsData[currentIndex].content}"
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-white font-medium">
                  {reviewsData[currentIndex].name}
                </h4>
                <span className="text-[11px] text-[#A6A6A6]">{reviewsData[currentIndex].date}</span>
              </div>
              {reviewsData[currentIndex].serviceMentioned && (
                <span className="text-[10px] text-[#C8A96B] border border-[#C8A96B]/30 px-2 py-0.5">
                  {reviewsData[currentIndex].serviceMentioned}
                </span>
              )}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-[#A6A6A6] font-mono tabular-nums">
              {currentIndex + 1} / {reviewsData.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors cursor-pointer"
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
