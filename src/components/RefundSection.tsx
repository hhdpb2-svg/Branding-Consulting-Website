import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const RefundSection: React.FC = () => {
  return (
    <section id="refund" className="py-20 lg:py-24 bg-[#EFE6D9] border-b border-[#E0D5C7] relative overflow-hidden">
      <div className="relative max-w-[920px] mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-[#F8F4EC] border border-[#E0D5C7] p-8 sm:p-14 text-center shadow-[0_15px_40px_rgba(48,38,31,0.04)] relative">
          
          {/* Trust Seal */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[#261E18] text-[#F7F3EC] flex flex-col items-center justify-center border-4 border-[#E0D6C8] shadow-md">
            <ShieldCheck className="w-8 h-8 text-[#C59B6D]" />
            <span className="text-[10px] font-bold tracking-wider text-[#EFE9E0] uppercase mt-0.5">GUARANTEE</span>
          </div>

          {/* Section Eyebrow */}
          <div className="inline-block text-xs font-bold tracking-wider text-[#8C5A32] uppercase mb-3">
            RISK-FREE CONFIDENCE
          </div>

          {/* Main Copy */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight leading-snug mb-5">
            초안을 먼저 확인하고 <span className="text-[#A46F45]">결정하세요</span>
          </h2>

          {/* Emphasized Refund Guarantee Text */}
          <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#E0D6C8] text-[#30261F]">
            <p className="text-base sm:text-xl font-medium leading-relaxed text-[#30261F]">
              사전 안내된 조건에 따라<br />
              <strong className="text-[#8C5A32] font-bold">초안 단계에서 100% 환불</strong> 가능합니다.
            </p>
          </div>

          {/* 3 Micro-Trust Points */}
          <div className="mt-8 pt-6 border-t border-[#E6DED4] flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-[#726558]">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#A46F45]" />
              투명한 사전 안내
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#A46F45]" />
              1:1 피드백
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#A46F45]" />
              안전한 결제
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

