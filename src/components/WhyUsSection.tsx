import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { WHY_US_ITEMS } from '../data';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8F4EC] text-[#30261F] border-b border-[#E5DCD0] relative overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(197,155,109,0.06),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(164,111,69,0.04),transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Why Velora Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            홈페이지 제작을 맡기면 특별한 이유
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            단순히 페이지만 만드는 것이 아닌, 대표님의 실제 비즈니스 운영과 성장을 함께 고민합니다.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] p-7 sm:p-8 flex flex-col justify-between hover:border-[#A46F45] hover:bg-[#FDFBF7] transition-all duration-200"
            >
              <div>
                {/* Number Badge & Highlight Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-extrabold text-[#A46F45] tracking-tight font-numeric">
                    {item.number}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C5A32] bg-[#EFE9E0] border border-[#E0D6C8] px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Title (Bold) */}
                <h3 className="text-xl font-bold text-[#30261F] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description (Light/Normal) */}
                <p className="text-sm text-[#6D6257] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Tick */}
              <div className="mt-6 pt-4 border-t border-[#EAE3DA] flex items-center gap-2 text-xs text-[#8C5A32] font-semibold">
                <Check className="w-3.5 h-3.5 text-[#A46F45]" />
                <span>체계적인 1:1 전담 제작 관리</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

