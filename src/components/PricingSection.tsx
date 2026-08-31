import React from 'react';
import { Check, Sparkles, Clock, RefreshCw } from 'lucide-react';
import { PRICING_PLANS } from '../data';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#EFE6D9] border-b border-[#E0D5C7]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DACD] border border-[#DCD0C0] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Transparent Pricing & Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            필요한 규모와 목적에 맞는 플랜
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            투명한 견적과 명확한 작업 범위로 불필요한 추가 비용 없이 완성도 높은 웹사이트를 만듭니다.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isDeluxe = plan.isRecommended;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isDeluxe
                    ? 'bg-[#261E18] text-[#F7F3EC] border-2 border-[#C59B6D] shadow-[0_20px_50px_rgba(48,38,31,0.18)] lg:-translate-y-3'
                    : 'bg-[#F8F4EC] text-[#30261F] border border-[#E0D5C7] shadow-[0_10px_30px_rgba(48,38,31,0.03)]'
                }`}
              >
                {/* RECOMMENDED Badge for Deluxe */}
                {isDeluxe && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C59B6D] text-[#261E18] font-bold text-xs px-5 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-[#261E18]" />
                    <span>가장 많은 대표님 선택 (BEST)</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Scope */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase ${
                        isDeluxe ? 'text-[#C59B6D]' : 'text-[#8C5A32]'
                      }`}
                    >
                      {plan.name}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-0.5 rounded-full ${
                        isDeluxe ? 'bg-[#3D3128] text-[#EFE9E0]' : 'bg-[#EFE9E0] text-[#726558]'
                      }`}
                    >
                      {plan.scope}
                    </span>
                  </div>

                  <div
                    className={`text-xl font-bold mb-4 ${
                      isDeluxe ? 'text-[#F7F3EC]' : 'text-[#30261F]'
                    }`}
                  >
                    {plan.type}
                  </div>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#E6DED4]/30">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-numeric ${
                        isDeluxe ? 'text-[#C59B6D]' : 'text-[#30261F]'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-normal ${
                        isDeluxe ? 'text-[#D5CCC0]' : 'text-[#8F8174]'
                      }`}
                    >
                      ({plan.period})
                    </span>
                  </div>

                  {/* Timeline & Revisions Info Box */}
                  <div
                    className={`grid grid-cols-2 gap-2 p-3 rounded-xl mb-6 text-xs ${
                      isDeluxe
                        ? 'bg-[#30261F] text-[#D5CCC0] border border-[#45372C]'
                        : 'bg-[#F4EFE7] text-[#6D6257] border border-[#E6DED4]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Clock className={`w-3.5 h-3.5 ${isDeluxe ? 'text-[#C59B6D]' : 'text-[#8C5A32]'}`} />
                      <span>제작기간: <strong>{plan.timeline}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className={`w-3.5 h-3.5 ${isDeluxe ? 'text-[#C59B6D]' : 'text-[#8C5A32]'}`} />
                      <span>무료수정: <strong>{plan.revisions}</strong></span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                        isDeluxe ? 'text-[#C59B6D]' : 'text-[#8C5A32]'
                      }`}
                    >
                      기본 포함 내역
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isDeluxe
                              ? 'bg-[#C59B6D] text-[#261E18]'
                              : 'bg-[#A46F45] text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span
                          className={`leading-snug font-normal ${
                            isDeluxe ? 'text-[#EFE9E0]' : 'text-[#554A40]'
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trust Status (NO external CTA) */}
                <div
                  className={`pt-4 border-t text-center text-xs font-semibold ${
                    isDeluxe
                      ? 'border-[#45372C] text-[#C59B6D]'
                      : 'border-[#E6DED4] text-[#8C5A32]'
                  }`}
                >
                  ✓ 크몽 결제 즉시 1:1 담당 디자이너 배정
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

