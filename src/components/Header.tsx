import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F4EC]/90 backdrop-blur-md border-b border-[#E5DCD0] text-[#30261F]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#30261F]">
            VELORA<span className="text-[#A46F45]">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center text-[11px] font-medium tracking-wider text-[#726558] uppercase border-l border-[#E6DED4] pl-3">
            Design Studio
          </span>
        </div>

        {/* Section Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#726558]">
          <a href="#hero" className="hover:text-[#A46F45] transition-colors">
            소개
          </a>
          <a href="#refund" className="hover:text-[#A46F45] transition-colors">
            안심 보증
          </a>
          <a href="#reviews" className="hover:text-[#A46F45] transition-colors">
            고객 후기
          </a>
          <a href="#why-us" className="hover:text-[#A46F45] transition-colors">
            특장점
          </a>
          <a href="#portfolio" className="hover:text-[#A46F45] transition-colors">
            포트폴리오
          </a>
          <a href="#pricing" className="hover:text-[#A46F45] transition-colors">
            가격 안내
          </a>
          <a href="#process" className="hover:text-[#A46F45] transition-colors">
            제작 과정
          </a>
          <a href="#license" className="hover:text-[#A46F45] transition-colors">
            안내사항
          </a>
        </nav>

        {/* Trust Indicator */}
        <div className="flex items-center gap-2 text-xs text-[#524538] bg-[#EFE9E0] border border-[#E0D6C8] px-3.5 py-1.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#A46F45]" />
          <span className="font-medium">100% 만족 환불 보증</span>
        </div>
      </div>
    </header>
  );
};

