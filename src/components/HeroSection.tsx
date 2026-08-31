import React from 'react';
import { Check, Sparkles, Monitor, Smartphone, Tablet, Award } from 'lucide-react';
import { TRUST_METRICS, HERO_CHECKS } from '../data';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8F4EC] text-[#30261F] py-18 lg:py-28 border-b border-[#E5DCD0]">
      {/* Subtle editorial warm ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_70%_20%,rgba(164,111,69,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#E0D6C8] text-[#8C5A32] text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A46F45]" />
              <span>Planning & Editorial Design</span>
            </div>

            {/* Main Headline with Pretendard Gothic Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.2] text-[#30261F] mb-6">
              브랜드의 신뢰와 가치를 담는<br />
              <span className="text-[#A46F45]">맞춤형 반응형</span> 홈페이지
            </h1>

            {/* Sub Copy (Light/Normal weight for clear contrast) */}
            <p className="text-base sm:text-lg text-[#6D6257] leading-relaxed max-w-2xl mb-8 font-normal">
              기획부터 카피라이팅, 디자인까지.<br className="hidden sm:inline" />
              비즈니스에 맞는 홈페이지를 제작합니다.
            </p>

            {/* 4 Key Checks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mb-10">
              {HERO_CHECKS.map((check, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DED4] shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-[#A46F45] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#4A3E34]">{check}</span>
                </div>
              ))}
            </div>

            {/* Trust Metrics */}
            <div className="w-full pt-8 border-t border-[#E6DED4]">
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A32]">
                <Award className="w-4 h-4 text-[#A46F45]" />
                <span>Verified Track Record & Case Study</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {TRUST_METRICS.map((metric) => (
                  <div key={metric.id} className="border-l-2 border-[#A46F45] pl-3 py-0.5">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#30261F] tracking-tight font-numeric">
                      {metric.value}
                    </div>
                    <div className="text-xs font-normal text-[#726558] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Designer Portrait + Lookbook Device Previews */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[460px] lg:max-w-none">
              
              {/* Editorial Museum Frame */}
              <div className="relative rounded-2xl bg-[#FAF7F2] border border-[#E6DED4] p-3 shadow-[0_20px_50px_rgba(48,38,31,0.06)]">
                
                {/* Designer Portrait Image */}
                <div className="relative h-[360px] sm:h-[400px] w-full rounded-xl overflow-hidden bg-[#261E18]">
                  <img
                    src="https://postfiles.pstatic.net/MjAyNjA4MjVfMTcy/MDAxNzg3NjMyNDYxMTQy.oE3vozlxb1ujWNsM_MGcKq4wi2g2AAcwPI_VY0T9-NMg.IJTCZn2e4MKJELH8YDI8TzQDxG4bdg75cHnjFJxEUiUg.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_01_32_14.png?type=w773"
                    alt="전문 한국인 웹디자이너"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261E18]/80 via-transparent to-black/10" />
                  
                  {/* Designer Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E6DED4] text-[#30261F]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-[#A46F45] font-bold tracking-wider">1:1 DIRECT DIRECTING</div>
                        <div className="text-sm font-bold text-[#30261F]">Velora 수석 아트 디렉터</div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#EFE9E0] text-[11px] font-semibold text-[#8C5A32] border border-[#E0D6C8]">
                        경력 10년차
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlaid Multi-Device Mockups Showcase */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  
                  {/* Laptop Mockup: VELORA */}
                  <div className="relative bg-[#F4EFE7] rounded-xl p-2 border border-[#E6DED4] shadow-xs">
                    <div className="flex items-center gap-1 mb-1.5 text-[10px] text-[#8C5A32] font-semibold">
                      <Monitor className="w-3 h-3" />
                      <span>VELORA</span>
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <img
                        src="https://postfiles.pstatic.net/MjAyNjA4MjVfMjYy/MDAxNzg3NjM1NjYxMTI1.qqg_No1Ol_M3uDWPDcWdPXN_ahwzcgrzLU0Kvc2xfFwg.vJY3IzFy4matAhPOh1r6iV2lHtdo-_zOIZRPIJalYN4g.PNG/image.png?type=w773"
                        alt="VELORA 포트폴리오"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-[10px] text-[#726558] mt-1 font-medium truncate">PC 데스크톱</div>
                  </div>

                  {/* Tablet Mockup: ONHWA */}
                  <div className="relative bg-[#F4EFE7] rounded-xl p-2 border border-[#E6DED4] shadow-xs">
                    <div className="flex items-center gap-1 mb-1.5 text-[10px] text-[#8C5A32] font-semibold">
                      <Tablet className="w-3 h-3" />
                      <span>ONHWA</span>
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <img
                        src="https://postfiles.pstatic.net/MjAyNjA4MjVfMjUg/MDAxNzg3NjM2NDE0ODU3.nn4ivIOrb4fpJ5DX-3tuixZHwUfXn14Ul_SH82NEiS0g.w6Nayi-H6KvA9SD9Pai_il8eywXOU270pliS97Ewi_Eg.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_39_46.png?type=w773"
                        alt="ONHWA 포트폴리오"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-[10px] text-[#726558] mt-1 font-medium truncate">태블릿 뷰</div>
                  </div>

                  {/* Phone Mockup: LUA PILATES */}
                  <div className="relative bg-[#F4EFE7] rounded-xl p-2 border border-[#E6DED4] shadow-xs">
                    <div className="flex items-center gap-1 mb-1.5 text-[10px] text-[#8C5A32] font-semibold">
                      <Smartphone className="w-3 h-3" />
                      <span>LUA PILATES</span>
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <img
                        src="https://postfiles.pstatic.net/MjAyNjA4MjVfOTkg/MDAxNzg3NjM2ODMyMTkx.AH9InoUbVjN9COhdmx3DU0sirUPbnksNJbVZQs1E0Ugg.0WQ0fqm_VSZXwEv2rI4Pc3RDr_0FKOzSIRf9NYOFb5Ug.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_46_19.png?type=w773"
                        alt="LUA PILATES 포트폴리오"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-[10px] text-[#726558] mt-1 font-medium truncate">모바일 뷰</div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

