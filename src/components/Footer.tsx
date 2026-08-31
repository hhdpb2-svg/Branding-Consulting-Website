import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFE6D9] text-[#6D6257] py-12 border-t border-[#E0D5C7] text-xs">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Identity */}
        <div>
          <div className="text-lg font-extrabold text-[#30261F] tracking-wider mb-1">
            VELORA <span className="text-[#A46F45]">.</span>
          </div>
          <p className="text-[#726558] font-normal">
            크몽 서비스 상세페이지 · 맞춤형 고품격 반응형 웹사이트 제작 에이전시
          </p>
        </div>

        {/* Legal & Policy Statement */}
        <div className="text-[#726558] flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-1.5 font-normal">
          <span>100% 만족 환불 보증 정책</span>
          <span>상업용 정품 라이선스 준수</span>
          <span>© 2026 VELORA DESIGN STUDIO. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

