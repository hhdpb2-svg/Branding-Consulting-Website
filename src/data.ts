import {
  TrustMetric,
  ReviewItem,
  RecommendItem,
  WhyUsItem,
  FeatureItem,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  MaterialItem,
  LicenseItem,
} from './types';

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: 'm1',
    value: '10년',
    label: '디지털 마케팅 경력',
    description: '브랜드 전략 및 실무 노하우',
  },
  {
    id: 'm2',
    value: '90%+',
    label: '고객 소개율',
    description: '재의뢰 및 지인 추천',
  },
  {
    id: 'm3',
    value: '320%',
    label: '전환율 상승 사례',
    description: '동선 최적화 UI/UX 설계',
  },
  {
    id: 'm4',
    value: '180% → 450%',
    label: 'ROAS 개선 사례',
    description: '이탈 방지 구조 설계',
  },
];

export const HERO_CHECKS = [
  'PC · 태블릿 · 모바일 반응형',
  '기획 · 카피라이팅 · 디자인',
  '아임웹 기반 쉬운 관리',
  'SEO · DB 문의폼 · 채널 연동',
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    rating: 5.0,
    title: '결과물이 기대 이상이었습니다.',
    content:
      '기획부터 친절하게 잡아주셔서 편하게 진행했습니다. 대표님들께 보여드렸더니 대기업 사이트 같다고 칭찬받았습니다.',
    clientType: 'B2B 기업 홈페이지 제작',
    projectType: 'DELUXE 패키지',
    date: '2026.02',
  },
  {
    id: 'r2',
    rating: 5.0,
    title: '문의가 들어오는 전체적인 흐름까지 잡아주셨습니다.',
    content:
      '자료가 부족했는데도 핵심 메시지를 깔끔하게 정리해주셨습니다. 사이트 오픈 첫 주부터 DB 문의가 들어왔습니다.',
    clientType: '전문 서비스 홈페이지 제작',
    projectType: 'DELUXE 패키지',
    date: '2026.01',
  },
  {
    id: 'r3',
    rating: 5.0,
    title: '모바일 화면도 완벽하고 피드백이 빠릅니다.',
    content:
      '스마트폰에서도 레이아웃이 자연스럽고 로딩이 빠릅니다. 요청드린 디테일까지 꼼꼼하게 반영해주셨습니다.',
    clientType: '웰니스 스튜디오 홈페이지 제작',
    projectType: 'PREMIUM 패키지',
    date: '2026.02',
  },
  {
    id: 'r4',
    rating: 5.0,
    title: '추가 비용 없이 약속된 일정에 완성되었습니다.',
    content:
      '사전에 범위를 명확히 정해주셔서 불필요한 지출 없이 진행했습니다. 퀄리티 대비 가격에 대만족합니다.',
    clientType: '뷰티 브랜드 쇼핑몰 제작',
    projectType: 'DELUXE 패키지',
    date: '2025.12',
  },
];

export const RECOMMENDED_LIST: RecommendItem[] = [
  {
    id: 'rec-1',
    number: '01',
    title: '처음 홈페이지를 제작하는 분',
    description: '기획부터 함께 잡아드립니다.',
    badge: '기획 가이드',
  },
  {
    id: 'rec-2',
    number: '02',
    title: '홈페이지 리뉴얼이 필요한 분',
    description: '오래된 디자인을 새롭게 개선합니다.',
    badge: '트렌디 UI 개편',
  },
  {
    id: 'rec-3',
    number: '03',
    title: '모바일 최적화가 필요한 분',
    description: '모든 화면에 맞게 반응형으로 제작합니다.',
    badge: '완벽 반응형',
  },
  {
    id: 'rec-4',
    number: '04',
    title: '서비스의 강점을 보여주고 싶은 분',
    description: '핵심 메시지를 명확하게 정리합니다.',
    badge: '카피 & 가치 전달',
  },
  {
    id: 'rec-5',
    number: '05',
    title: '상담·예약 문의가 필요한 분',
    description: 'DB 문의폼과 고객 동선을 설계합니다.',
    badge: 'DB 문의폼 연동',
  },
  {
    id: 'rec-6',
    number: '06',
    title: '관리가 쉬운 홈페이지가 필요한 분',
    description: '아임웹 기반으로 편리하게 운영할 수 있습니다.',
    badge: '쉬운 셀프 관리',
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'w1',
    number: '01',
    title: '완벽한 반응형',
    description: 'PC · 태블릿 · 모바일 최적화',
    highlight: '모든 기기 호환',
  },
  {
    id: 'w2',
    number: '02',
    title: '기획부터 디자인까지',
    description: '기획 · 카피 · 디자인 원스톱 제작',
    highlight: 'All-in-One',
  },
  {
    id: 'w3',
    number: '03',
    title: '투명한 제작 비용',
    description: '사전 협의된 범위와 비용으로 진행',
    highlight: '추가금 방지',
  },
  {
    id: 'w4',
    number: '04',
    title: '1:1 맞춤 제작',
    description: '브랜드에 맞는 디자인과 구성',
    highlight: '커스텀 UI',
  },
  {
    id: 'w5',
    number: '05',
    title: '제작 후 유지보수',
    description: '간단한 텍스트·이미지 수정 지원',
    highlight: '사후 케어',
  },
  {
    id: 'w6',
    number: '06',
    title: '아임웹 기반 제작',
    description: '관리자가 직접 운영하기 쉬운 홈페이지',
    highlight: '쉬운 관리',
  },
];

export const BASIC_FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: '관리자 페이지',
    description: '방문자 통계 · 문의 내역 한눈에 관리',
    tag: '기본 탑재',
    iconName: 'LayoutDashboard',
  },
  {
    id: 'f2',
    title: '검색엔진(SEO) 최적화',
    description: '네이버 · 구글 포털 메타태그 세팅',
    tag: '검색 최적화',
    iconName: 'Search',
  },
  {
    id: 'f3',
    title: '고객 DB 문의폼',
    description: '상담 · 견적 실시간 접수 폼 구축',
    tag: 'DB 수집',
    iconName: 'FileText',
  },
  {
    id: 'f4',
    title: '네이버 서치어드바이저',
    description: '웹마스터도구 사이트맵 등록 지원',
    tag: '네이버 노출',
    iconName: 'Globe',
  },
  {
    id: 'f5',
    title: '1:1 실시간 채팅',
    description: '채널톡 · 카카오톡 상담 바로가기 연동',
    tag: '상담 연결',
    iconName: 'MessageSquare',
  },
  {
    id: 'f6',
    title: 'SNS 채널 연동',
    description: '인스타그램 피드 · 유튜브 영상 연결',
    tag: '채널 연동',
    iconName: 'Instagram',
  },
];

export const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: 'p1',
    number: '01',
    category: 'BEAUTY / SHOPPING',
    title: 'VELORA',
    subtitle: '향수 / 뷰티 브랜드 온라인 스토어',
    description: '고급스러운 다크 럭셔리 컨셉과 전환 중심의 인터랙션 설계.',
    tags: ['프리미엄 다크UI', '반응형 쇼핑몰', '뷰티 브랜딩'],
    features: ['고해상도 비주얼', '향 노트 큐레이션', '모바일 원클릭 결제'],
    desktopImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMjE0/MDAxNzg3NjM1Mzk2NjQ3.VuJ1mYKMW_4W-b7O-TUMXuxmkPfklnN_VLXX2WAT_Hog.Cglv7NhJLWrZh0q_xtnPJD8-GYGKwkdOYTyrvY2h3gQg.PNG/image.png?type=w773',
    mobileImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMjE0/MDAxNzg3NjM1Mzk2NjQ3.VuJ1mYKMW_4W-b7O-TUMXuxmkPfklnN_VLXX2WAT_Hog.Cglv7NhJLWrZh0q_xtnPJD8-GYGKwkdOYTyrvY2h3gQg.PNG/image.png?type=w773',
    colorScheme: 'from-[#031027] to-[#0a192f]',
    previewUrlTitle: 'velora-fragrance.kr',
  },
  {
    id: 'p2',
    number: '02',
    category: 'FLOWER / LIFESTYLE',
    title: 'ONHWA (온화)',
    subtitle: '플라워 스튜디오 & 셀렉트샵',
    description: '따뜻한 웜베이지 무드와 직관적인 클래스 예약 시스템 구현.',
    tags: ['내추럴 웜톤', '클래스 예약 시스템', '감성 포토 갤러리'],
    features: ['실시간 예약 캘린더', '꽃다발 주문 폼', '인스타그램 피드 연동'],
    desktopImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMjUg/MDAxNzg3NjM2NDE0ODU3.nn4ivIOrb4fpJ5DX-3tuixZHwUfXn14Ul_SH82NEiS0g.w6Nayi-H6KvA9SD9Pai_il8eywXOU270pliS97Ewi_Eg.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_39_46.png?type=w773',
    mobileImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMjUg/MDAxNzg3NjM2NDE0ODU3.nn4ivIOrb4fpJ5DX-3tuixZHwUfXn14Ul_SH82NEiS0g.w6Nayi-H6KvA9SD9Pai_il8eywXOU270pliS97Ewi_Eg.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_39_46.png?type=w773',
    colorScheme: 'from-[#fbf8f5] to-[#f4ebe1]',
    previewUrlTitle: 'onhwa-flower.co.kr',
  },
  {
    id: 'p3',
    number: '03',
    category: 'WELLNESS / STUDIO',
    title: 'LUA PILATES',
    subtitle: '기구 필라테스 & 체형교정 스튜디오',
    description: '신뢰감을 주는 모던 미니멀 스타일과 1회 체험 예약 DB 수집.',
    tags: ['모던 웰니스', '강사진 프로필', '1회 체험 DB 수집'],
    features: ['스튜디오 시설 안내', '강사 전문 자격 소개', '카카오톡 상담 연동'],
    desktopImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMTUw/MDAxNzg3NjM2OTA2Mjcz.s9k-tNKrShGUioc7Gh-67tl8z4itAum3fusOc8xNBOwg.3NKES1tcmjXD6oMb67EhkP5qt-NrMLLx59CN6KhER5Ag.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_48_16.png?type=w773',
    mobileImage: 'https://postfiles.pstatic.net/MjAyNjA4MjVfMTUw/MDAxNzg3NjM2OTA2Mjcz.s9k-tNKrShGUioc7Gh-67tl8z4itAum3fusOc8xNBOwg.3NKES1tcmjXD6oMb67EhkP5qt-NrMLLx59CN6KhER5Ag.PNG/ChatGPT_Image_2026%EB%85%84_8%EC%9B%94_25%EC%9D%BC_%EC%98%A4%ED%9B%84_02_48_16.png?type=w773',
    colorScheme: 'from-[#eef2f7] to-[#dce5f0]',
    previewUrlTitle: 'luapilates-studio.com',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'STANDARD',
    price: '300,000원',
    priceNumber: 300000,
    period: 'VAT 별도',
    type: '원페이지 홈페이지',
    scope: '최대 5개 섹션',
    timeline: '약 7일',
    revisions: '수정 1회',
    features: [
      '단일 원페이지 (최대 5개 섹션)',
      '기본 비즈니스 구조 기획',
      '핵심 카피라이팅 지원',
      'PC · 모바일 반응형 디자인',
      '기본 검색엔진(SEO) 세팅',
      '수정 1회 무료 제공',
    ],
  },
  {
    id: 'deluxe',
    name: 'DELUXE',
    price: '700,000원',
    priceNumber: 700000,
    period: 'VAT 별도',
    type: '비즈니스 홈페이지',
    isRecommended: true,
    scope: '최대 5페이지',
    timeline: '약 15일',
    revisions: '수정 2회',
    features: [
      '최대 5개 맞춤 서브페이지',
      '메뉴 구조 & 전략 기획',
      '설득형 카피라이팅',
      'PC · 태블릿 · 모바일 완벽 호환',
      '관리자 페이지 & 고객 DB 문의폼',
      '1:1 실시간 채팅 (카카오/채널톡)',
      '검색엔진(SEO) 최적화 & 네이버 등록',
      '수정 2회 무료 제공',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '900,000원',
    priceNumber: 900000,
    period: 'VAT 별도',
    type: '기업형 종합 홈페이지',
    scope: '최대 10페이지 내외',
    timeline: '약 20일',
    revisions: '수정 3회',
    features: [
      '최대 10페이지 내외 풀 패키지',
      '브랜드 전략 & 세부 구조 기획',
      '고급 전환 핵심 카피라이팅',
      'PC · 태블릿 · 모바일 반응형',
      '관리자 페이지 & DB 수집 폼',
      '결제 시스템 / 쇼핑몰 기능 연동',
      '검색엔진(SEO) 세팅 & 사이트맵 등록',
      '우선 유지보수 & 수정 3회',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: '상담',
    description: '요구사항 확인',
    detail: '사이트 성격, 참고 레퍼런스, 필수 기능 파악',
  },
  {
    step: '02',
    title: '결제',
    description: '작업 범위 확정',
    detail: '크몽 안전결제로 의뢰 범위와 일정 확정',
  },
  {
    step: '03',
    title: '기획',
    description: '구조 설계',
    detail: '메뉴 트리, 섹션 배치, 핵심 메시지 정리',
  },
  {
    step: '04',
    title: '디자인',
    description: '브랜드 디자인',
    detail: '업종 맞춤 컬러와 타이포그래피 초안 제작',
  },
  {
    step: '05',
    title: '제작',
    description: '반응형 구현',
    detail: '아임웹 기반 PC · 모바일 실 사이트 빌드',
  },
  {
    step: '06',
    title: '수정',
    description: '피드백 반영',
    detail: '대표님 피드백을 바탕으로 디테일 보완',
  },
  {
    step: '07',
    title: '완성',
    description: '최종 인계',
    detail: '도메인 연결 및 쉬운 관리 매뉴얼 전달',
  },
];

export const PREPARE_MATERIALS: MaterialItem[] = [
  {
    id: 'mat-1',
    title: '회사소개서 / 카탈로그',
    description: '보유 중인 PDF 파일이나 브로슈어',
  },
  {
    id: 'mat-2',
    title: '회사 및 서비스 소개',
    description: '주요 사업 내용, 강점, 서비스 목록',
  },
  {
    id: 'mat-3',
    title: '로고 파일 (AI, PNG)',
    description: '투명 배경 로고 (없으실 경우 텍스트 로고 지원)',
  },
  {
    id: 'mat-4',
    title: '사진 및 이미지 자료',
    description: '사무실, 제품, 시술 사진 (없을 시 고화질 이미지 대체)',
  },
  {
    id: 'mat-5',
    title: '선호하는 분위기 / 스타일',
    description: '희망 컬러톤 (웜베이지, 모던블랙 등)',
  },
  {
    id: 'mat-6',
    title: '참고 벤치마킹 사이트',
    description: '마음에 드는 웹사이트 링크 1~2개',
  },
];

export const EXTRA_COSTS = [
  {
    item: '아임웹 호스팅 Starter 플랜',
    price: '월 16,000원 (연 결제 시 할인)',
    desc: '기본 웹사이트 운영 및 트래픽 제공',
  },
  {
    item: '아임웹 호스팅 Pro 플랜',
    price: '월 24,000원 (연 결제 시 할인)',
    desc: '쇼핑몰 결제 연동 및 무제한 트래픽',
  },
  {
    item: '독립 도메인 (.com / .co.kr / .kr)',
    price: '연 20,000원 ~ 30,000원 내외',
    desc: '도메인 등록 대행사 직접 결제',
  },
];

export const LICENSE_GUIDES: LicenseItem[] = [
  {
    id: 'lic-1',
    title: '상업용 정품 폰트 사용',
    description: '저작권 분쟁 없는 상업용 무료 라이선스 및 정품 폰트 사용',
    tag: '안전한 폰트',
  },
  {
    id: 'lic-2',
    title: '정식 라이선스 이미지',
    description: '상업적 이용 가능한 고화질 정품 스톡 이미지 활용',
    tag: '안전한 이미지',
  },
  {
    id: 'lic-3',
    title: '제작물 영구 소유권',
    description: '납품 완료 후 모든 비즈니스 활동에 영구 사용 가능',
    tag: '소유권 인계',
  },
  {
    id: 'lic-4',
    title: '플랜별 무상 수정 제공',
    description: '패키지별 명시된 수정 횟수(1~3회) 내 무료 수정 진행',
    tag: '투명한 수정',
  },
  {
    id: 'lic-5',
    title: '구조 변경 및 페이지 추가',
    description: '기획 확정 후 전면 수정이나 페이지 추가는 사전 협의',
    tag: '합리적 기준',
  },
  {
    id: 'lic-6',
    title: '포트폴리오 소개 정책',
    description: '완성본은 포트폴리오로 활용될 수 있으며 비공개 요청 가능',
    tag: '사전 협의',
  },
];
