export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  rating: number;
  title: string;
  content: string;
  clientType: string;
  projectType: string;
  date: string;
}

export interface RecommendItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface WhyUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  desktopImage: string;
  mobileImage: string;
  colorScheme: string;
  previewUrlTitle: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  period: string;
  type: string;
  isRecommended?: boolean;
  features: string[];
  scope: string;
  revisions: string;
  timeline: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface MaterialItem {
  id: string;
  title: string;
  description: string;
}

export interface LicenseItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}
