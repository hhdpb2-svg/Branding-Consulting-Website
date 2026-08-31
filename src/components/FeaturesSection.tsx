import React from 'react';
import {
  LayoutDashboard,
  Search,
  FileText,
  Globe,
  MessageSquare,
  Smartphone,
  Instagram,
  Youtube,
  Layers,
} from 'lucide-react';
import { BASIC_FEATURES } from '../data';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Search,
  FileText,
  Globe,
  MessageSquare,
  Smartphone,
  Instagram,
  Youtube,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFE6D9] border-b border-[#E0D5C7]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DACD] border border-[#DCD0C0] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Essential Included Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            홈페이지에 필요한 핵심 기능을<br className="hidden sm:inline" /> 모두 기본 탑재해드립니다
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            별도 추가 비용 없이 실무 비즈니스 운영에 꼭 필요한 알짜배기 기능을 꼼꼼히 세팅해드립니다.
          </p>
        </div>

        {/* 8 Features Grid (4x2 on Desktop, 2x4 on Tablet/Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {BASIC_FEATURES.map((feature) => {
            const IconComp = iconMap[feature.iconName] || Layers;
            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-[#F8F4EC] border border-[#E0D5C7] p-6 text-center flex flex-col items-center justify-between hover:border-[#A46F45] transition-all duration-200"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Icon Circle */}
                  <div className="w-13 h-13 rounded-2xl bg-[#EFE9E0] text-[#8C5A32] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Tag */}
                  <span className="text-[11px] font-semibold text-[#8C5A32] bg-[#EFE9E0] px-2.5 py-0.5 rounded-full mb-2.5">
                    {feature.tag}
                  </span>

                  {/* Title (Bold) */}
                  <h3 className="text-base sm:text-lg font-bold text-[#30261F] mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description (Light/Normal) */}
                  <p className="text-xs sm:text-sm text-[#726558] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 w-full border-t border-[#EAE3DA] text-[11px] text-[#8C5A32] font-semibold">
                  ✓ 기본 제공 기능
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

