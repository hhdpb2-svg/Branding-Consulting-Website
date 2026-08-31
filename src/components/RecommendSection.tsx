import React from 'react';
import { Target, Compass, RefreshCw, Smartphone, TrendingUp, CalendarCheck, Settings } from 'lucide-react';
import { RECOMMENDED_LIST } from '../data';

const icons = [
  Compass,
  RefreshCw,
  Smartphone,
  TrendingUp,
  CalendarCheck,
  Settings,
];

export const RecommendSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFE6D9] border-b border-[#E0D5C7]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DACD] border border-[#DCD0C0] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Target className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Target Audience & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            이런 고민을 가진 대표님께 추천합니다
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            비즈니스 형태와 단계에 가장 적합한 방향성을 함께 고민하고 제안해드립니다.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECOMMENDED_LIST.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#F8F4EC] border border-[#E0D5C7] p-7 sm:p-8 flex flex-col justify-between hover:border-[#A46F45] hover:bg-[#FAF7F2] transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#EFE9E0] border border-[#E0D6C8] flex items-center justify-center text-[#8C5A32] group-hover:bg-[#A46F45] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C5A32] bg-[#EFE9E0] px-3 py-1 rounded-full border border-[#E0D6C8]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title (Bold) */}
                  <h3 className="text-lg font-bold text-[#30261F] mb-3 leading-snug group-hover:text-[#A46F45] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description (Normal/Light weight) */}
                  <p className="text-sm text-[#6D6257] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E0D5C7] flex items-center justify-between text-xs text-[#8F8174]">
                  <span className="font-bold text-[#8C5A32] font-numeric">CASE {item.number}</span>
                  <span className="font-medium text-[#726558]">1:1 맞춤 기획</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

