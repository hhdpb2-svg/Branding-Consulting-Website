import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RefundSection } from './components/RefundSection';
import { ReviewsSection } from './components/ReviewsSection';
import { RecommendSection } from './components/RecommendSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { MaterialSection } from './components/MaterialSection';
import { CostSection } from './components/CostSection';
import { LicenseSection } from './components/LicenseSection';
import { OutroSection } from './components/OutroSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EC] text-[#30261F] flex flex-col selection:bg-[#C59B6D] selection:text-[#261E18]">
      {/* Top Navigation Bar */}
      <Header />

      <main className="flex-grow">
        {/* SECTION 01. 첫 화면 후킹 */}
        <HeroSection />

        {/* SECTION 02. 환불 보장 */}
        <RefundSection />

        {/* SECTION 03. 고객 후기 */}
        <ReviewsSection />

        {/* SECTION 04. 이런 분께 추천 */}
        <RecommendSection />

        {/* SECTION 05. 맡기면 좋은 이유 */}
        <WhyUsSection />

        {/* SECTION 06. 기본 제공 기능 */}
        <FeaturesSection />

        {/* SECTION 07. 포트폴리오 */}
        <PortfolioSection />

        {/* SECTION 08. 가격 안내 */}
        <PricingSection />

        {/* SECTION 09. 제작 프로세스 */}
        <ProcessSection />

        {/* SECTION 10. 준비 자료 */}
        <MaterialSection />

        {/* SECTION 11. 별도 비용 */}
        <CostSection />

        {/* SECTION 12. 수정 및 라이선스 안내 */}
        <LicenseSection />

        {/* SECTION 13. 마무리 */}
        <OutroSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
