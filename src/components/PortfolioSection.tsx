import React, { useState } from 'react';
import { Briefcase, Monitor, Smartphone, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_LIST } from '../data';

export const PortfolioSection: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<Record<string, 'desktop' | 'mobile'>>({
    p1: 'desktop',
    p2: 'desktop',
    p3: 'desktop',
  });

  const toggleDevice = (id: string, device: 'desktop' | 'mobile') => {
    setActiveDevice((prev) => ({ ...prev, [id]: device }));
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F8F4EC] border-b border-[#E5DCD0]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#A46F45]" />
            <span>Selected Projects & Archives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#30261F] tracking-tight mb-4">
            브랜드의 신뢰를 높이는 포트폴리오
          </h2>
          <p className="text-base text-[#6D6257] font-normal">
            실제 제작된 프로젝트를 통해 업종별 감각적인 비주얼과 세심한 사용자 경험을 확인해보세요.
          </p>
        </div>

        {/* 3 Portfolio Showcases in Editorial Linen Layout */}
        <div className="space-y-16 lg:space-y-20">
          {PORTFOLIO_LIST.map((portfolio, idx) => {
            const isEven = idx % 2 === 1;
            const currentView = activeDevice[portfolio.id] || 'desktop';

            return (
              <div
                key={portfolio.id}
                className={`rounded-3xl bg-[#FAF7F2] border border-[#E5DCD0] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(48,38,31,0.03)] grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual Showcase (7 Cols) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                  
                  {/* Mockup Frame Header */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D5CCC0]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D5CCC0]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D5CCC0]" />
                      <span className="text-xs font-mono text-[#8F8174] ml-2">
                        archive/{portfolio.previewUrlTitle}
                      </span>
                    </div>

                    {/* Responsive Toggle Controls */}
                    <div className="inline-flex rounded-full bg-[#FAF7F2] border border-[#E0D6C8] p-1 text-xs font-semibold">
                      <button
                        onClick={() => toggleDevice(portfolio.id, 'desktop')}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                          currentView === 'desktop'
                            ? 'bg-[#30261F] text-white shadow-xs'
                            : 'text-[#726558] hover:text-[#30261F]'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                        <span>Desktop</span>
                      </button>
                      <button
                        onClick={() => toggleDevice(portfolio.id, 'mobile')}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                          currentView === 'mobile'
                            ? 'bg-[#30261F] text-white shadow-xs'
                            : 'text-[#726558] hover:text-[#30261F]'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>

                  {/* Device Container Frame */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#261E18] border border-[#D5CCC0] shadow-xl">
                    
                    {currentView === 'desktop' ? (
                      /* Desktop Frame */
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#261E18] group">
                        <img
                          src={portfolio.desktopImage}
                          alt={`${portfolio.title} PC 포트폴리오`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay Brand Watermark */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#261E18]/80 backdrop-blur-md text-[#F7F3EC] text-xs font-semibold border border-white/10 tracking-wider">
                          {portfolio.title} · ARCHIVE VIEW
                        </div>
                      </div>
                    ) : (
                      /* Mobile Frame View */
                      <div className="relative py-8 bg-[#30261F] flex justify-center items-center">
                        <div className="w-[240px] sm:w-[280px] aspect-[9/18] rounded-3xl overflow-hidden border-4 border-[#45372C] shadow-2xl relative bg-black">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#30261F] rounded-full z-20" />
                          <img
                            src={portfolio.mobileImage}
                            alt={`${portfolio.title} Mobile Full`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                {/* Text Content (5 Cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-1' : ''} flex flex-col justify-center`}>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#8C5A32] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#A46F45]" />
                    <span>PROJECT {portfolio.number} · {portfolio.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#30261F] tracking-tight mb-1">
                    {portfolio.title}
                  </h3>

                  <div className="text-sm font-bold text-[#8C5A32] mb-4">
                    {portfolio.subtitle}
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#6D6257] leading-relaxed mb-6 font-normal">
                    {portfolio.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-6">
                    {portfolio.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E34]">
                        <div className="w-4 h-4 rounded-full bg-[#EFE9E0] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#8C5A32] stroke-[2.5]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E6DED4]">
                    {portfolio.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E0D6C8] text-xs font-medium text-[#726558]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
