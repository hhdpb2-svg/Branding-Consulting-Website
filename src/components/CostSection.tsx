import React from 'react';
import { CreditCard, Info } from 'lucide-react';
import { EXTRA_COSTS } from '../data';

export const CostSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F4EC] border-b border-[#E5DCD0]">
      <div className="max-w-[920px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <CreditCard className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Third-Party Running Costs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-3">
            외부 실비용 안내
          </h2>
          <p className="text-sm sm:text-base text-[#6D6257] font-normal">
            제작비 외에 사이트 유지를 위해 솔루션사(아임웹/도메인 등록기관)에 직접 납부하시는 실비용입니다.
          </p>
        </div>

        {/* Cost Table Card */}
        <div className="rounded-3xl bg-[#FAF7F2] border border-[#E5DCD0] p-6 sm:p-10 shadow-[0_10px_35px_rgba(48,38,31,0.03)]">
          <div className="divide-y divide-[#E5DCD0]">
            {EXTRA_COSTS.map((cost, idx) => (
              <div
                key={idx}
                className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h3 className="text-base font-bold text-[#30261F]">{cost.item}</h3>
                  <p className="text-xs text-[#726558] mt-0.5 font-normal">{cost.desc}</p>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-[#8C5A32] tracking-tight shrink-0 font-numeric">
                  {cost.price}
                </div>
              </div>
            ))}
          </div>

          {/* Policy Notice */}
          <div className="mt-8 p-4 rounded-xl bg-[#EFE9E0] border border-[#E0D6C8] flex items-start gap-2.5 text-xs text-[#726558]">
            <Info className="w-4 h-4 text-[#A46F45] shrink-0 mt-0.5" />
            <span>
              ※ 아임웹 호스팅 및 도메인 비용은 의뢰인 대표님 명의의 계정으로 직접 결제하시며, 결제 시점의 솔루션사 프로모션 및 정책에 따라 소폭 변동될 수 있습니다.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

