import React from 'react';
import { ArrowRight, Workflow, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8F4EC] text-[#30261F] border-b border-[#E5DCD0] relative overflow-hidden">
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Step by Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            투명하고 체계적인 제작 프로세스
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            기획부터 디자인, 개발, 최종 납품까지 체계적인 7단계 절차로 안심하고 진행하실 수 있습니다.
          </p>
        </div>

        {/* 7-Step Workflow Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-[#FAF7F2] border border-[#E5DCD0] p-5 flex flex-col items-center text-center hover:border-[#A46F45] transition-all duration-200"
              >
                {/* Step Circle Badge */}
                <div className="w-13 h-13 rounded-2xl bg-[#EFE9E0] border border-[#E0D6C8] flex flex-col items-center justify-center text-[#30261F] mb-4 shadow-xs font-numeric">
                  <span className="text-[9px] font-bold text-[#8C5A32] uppercase">STEP</span>
                  <span className="text-sm font-extrabold leading-none">{step.step}</span>
                </div>

                {/* Title (Bold) */}
                <h3 className="text-base font-bold text-[#30261F] mb-1">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-bold text-[#8C5A32] mb-2">
                  {step.description}
                </div>

                {/* Detail (Light/Normal) */}
                <p className="text-xs text-[#726558] leading-relaxed font-normal">
                  {step.detail}
                </p>

                {/* Arrow indicator between steps on desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#C59B6D]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 max-w-2xl mx-auto p-4.5 rounded-2xl bg-[#F7F3EC] border border-[#E6DED4] text-center text-xs sm:text-sm text-[#6D6257] flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-[#A46F45] shrink-0 stroke-[2.5]" />
          <span>모든 과정은 크몽 메시지와 시안 공유를 통해 실시간 1:1로 긴밀하게 소통합니다.</span>
        </div>

      </div>
    </section>
  );
};

