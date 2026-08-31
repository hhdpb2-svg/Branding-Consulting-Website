import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F8F4EC] border-b border-[#E5DCD0]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Client Testimonials & Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            의뢰하신 대표님들의 실제 후기
          </h2>
          <p className="text-base text-[#6D6257] leading-relaxed font-normal">
            실제 제작을 진행하신 대표님들의 솔직한 후기입니다.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(48,38,31,0.03)] hover:border-[#C59B6D] transition-all relative overflow-hidden"
            >
              {/* Subtle quote mark */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-[#A46F45]/10 pointer-events-none" />

              <div>
                {/* Star Rating in Warm Caramel */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B6D] text-[#C59B6D]" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-[#30261F] font-numeric">5.0 / 5.0</span>
                </div>

                {/* Review Title (Bold) */}
                <h3 className="text-lg sm:text-xl font-bold text-[#30261F] leading-snug mb-3.5">
                  “{review.title}”
                </h3>

                {/* Review Body (Normal/Light weight for readability) */}
                <p className="text-sm sm:text-[15px] text-[#554A40] leading-relaxed mb-6 font-normal">
                  {review.content}
                </p>
              </div>

              {/* Client & Project Info */}
              <div className="pt-4 border-t border-[#EAE3DA] flex items-center justify-between text-xs text-[#726558]">
                <div className="font-bold text-[#30261F]">
                  {review.clientType}
                </div>
                <div className="text-[#8C5A32] font-medium tracking-wide">
                  {review.projectType}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

