import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const OutroSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F4EC] text-[#30261F] border-b border-[#E5DCD0] relative overflow-hidden">
      {/* Ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(circle,rgba(197,155,109,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1040px] mx-auto px-5 sm:px-8 text-center">
        
        {/* Top Trust Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs sm:text-sm font-semibold mb-8 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#A46F45]" />
          <span>신뢰할 수 있는 크몽 전문가 · Velora Design Studio</span>
        </div>

        {/* Final Closing Statement */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.35] text-[#30261F] mb-6">
          브랜드의 가치를 담는<br />
          <span className="text-[#A46F45]">맞춤형 반응형 홈페이지</span>
        </h2>

        <p className="text-base sm:text-lg text-[#6D6257] leading-relaxed max-w-2xl mx-auto mb-14 font-normal">
          기획부터 디자인까지, 비즈니스에 꼭 맞는 홈페이지를 제작합니다.
        </p>

        {/* 3 Package Summary Cards (NO external CTA buttons) */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          
          {/* STANDARD Summary */}
          <div className="rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] p-6 text-center shadow-xs">
            <span className="text-xs font-bold text-[#8C5A32] tracking-wider uppercase">
              STANDARD
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#30261F] mt-1 mb-2 font-numeric">
              30<span className="text-base font-normal text-[#726558]">만원</span>
            </div>
            <div className="text-xs text-[#726558] font-medium mb-3">
              원페이지 홈페이지 (최대 5섹션)
            </div>
            <div className="pt-3 border-t border-[#EAE3DA] text-[11px] text-[#8C5A32] font-semibold">
              ✓ 약 7일 제작 소요
            </div>
          </div>

          {/* DELUXE Summary (BEST Highlight) */}
          <div className="rounded-2xl bg-[#261E18] text-[#F7F3EC] border-2 border-[#C59B6D] p-6 text-center shadow-xl relative sm:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#C59B6D] text-[#261E18] text-[10px] font-bold uppercase tracking-wider">
              BEST RECOMMENDED
            </div>
            <span className="text-xs font-bold text-[#C59B6D] tracking-wider uppercase">
              DELUXE
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#C59B6D] mt-1 mb-2 font-numeric">
              70<span className="text-lg font-normal text-[#D5CCC0]">만원</span>
            </div>
            <div className="text-xs text-[#EFE9E0] font-medium mb-3">
              비즈니스 홈페이지 (최대 5페이지)
            </div>
            <div className="pt-3 border-t border-[#45372C] text-[11px] text-[#F7F3EC] font-medium">
              ✓ DB문의폼 · 1:1채팅 · 검색엔진 최적화
            </div>
          </div>

          {/* PREMIUM Summary */}
          <div className="rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] p-6 text-center shadow-xs">
            <span className="text-xs font-bold text-[#8C5A32] tracking-wider uppercase">
              PREMIUM
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#30261F] mt-1 mb-2 font-numeric">
              90<span className="text-base font-normal text-[#726558]">만원</span>
            </div>
            <div className="text-xs text-[#726558] font-medium mb-3">
              기업형 종합 홈페이지 (최대 10페이지)
            </div>
            <div className="pt-3 border-t border-[#EAE3DA] text-[11px] text-[#8C5A32] font-semibold">
              ✓ 예약/결제 · 맞춤 기능 · 전담 케어
            </div>
          </div>

        </div>

        {/* Bottom Safety & Purchase Guidance Text */}
        <div className="p-4.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] max-w-xl mx-auto text-xs text-[#726558] leading-relaxed">
          본 서비스는 크몽의 안전 결제 규정과 고객 보호 정책을 철저히 준수합니다.<br />
          크몽 내에서 제공되는 패키지 사양을 검토하신 후 안심하고 의뢰해주세요.
        </div>

      </div>
    </section>
  );
};

