import React from 'react';
import { ClipboardList, HeartHandshake, Check } from 'lucide-react';
import { PREPARE_MATERIALS } from '../data';

export const MaterialSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFE6D9] border-b border-[#E0D5C7]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DACD] border border-[#DCD0C0] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <ClipboardList className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Preparation Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            의뢰인 준비 사항 안내
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            원활하고 빠른 작업을 위해 아래 항목을 미리 준비해주시면 제작 속도가 훨씬 빨라집니다.
          </p>
        </div>

        {/* 8 Material Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          {PREPARE_MATERIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#F8F4EC] border border-[#E0D5C7] p-5 flex items-start gap-3.5 hover:border-[#A46F45] transition-all duration-200"
            >
              <div className="w-6 h-6 rounded-lg bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#30261F] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#726558] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Friendly Reassurance Callout Box */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#F8F4EC] border border-[#E0D5C7] p-8 sm:p-10 text-center shadow-[0_15px_40px_rgba(48,38,31,0.03)] relative overflow-hidden">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#EFE9E0] text-[#8C5A32] flex items-center justify-center">
            <HeartHandshake className="w-6 h-6 text-[#A46F45]" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#30261F] mb-3">
            “구체적인 기획안이 없어도 괜찮습니다”
          </h3>
          
          <p className="text-sm sm:text-base text-[#6D6257] leading-relaxed max-w-xl mx-auto font-normal">
            원하시는 느낌과 레퍼런스 링크, 대략적인 생각만 편하게 말씀해주시면<br className="hidden sm:inline" />
            <strong className="text-[#30261F] font-bold">홈페이지 메뉴 구조부터 주요 섹션 구성까지 함께 기획</strong>해드립니다.
          </p>
        </div>

      </div>
    </section>
  );
};

