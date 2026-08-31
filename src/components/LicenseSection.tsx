import React from 'react';
import { FileCheck, Check } from 'lucide-react';
import { LICENSE_GUIDES } from '../data';

export const LicenseSection: React.FC = () => {
  return (
    <section id="license" className="py-20 lg:py-28 bg-[#EFE6D9] border-b border-[#E0D5C7]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DACD] border border-[#DCD0C0] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <FileCheck className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Policy & License Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            수정 및 라이선스 정책 안내
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            안전한 비즈니스 운영과 저작권 보호를 위한 명확한 규정을 사전에 투명하게 안내해 드립니다.
          </p>
        </div>

        {/* 6 Policy Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LICENSE_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="rounded-2xl bg-[#F8F4EC] border border-[#E0D5C7] p-6 sm:p-7 flex flex-col justify-between hover:border-[#A46F45] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-[#8C5A32] bg-[#EFE9E0] px-3 py-1 rounded-full border border-[#E0D6C8]">
                    {guide.tag}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#EFE9E0] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#8C5A32] stroke-[2.5]" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#30261F] mb-2 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#726558] leading-relaxed font-normal">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

