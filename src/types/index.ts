export type PortfolioCategory =
  | 'ALL'
  | 'WEBSITE MAKING'
  | 'GRAPHIC DESIGN'
  | 'ADVERTISEMENT VIDEO'
  | 'BRAND PROMOTION'
  | 'MENU CARD'
  | 'ID CARD'
  | 'T-SHIRT'
  | 'SOCIAL MEDIA'
  | 'POSTER'
  | 'BANNER';

export interface ServiceItem {
  id: string;
  numberCode: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  gradient: string;
  badge?: string;
  popular?: boolean;
}

export interface FeaturedService {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDetails: string;
  imageUrl: string;
  videoUrl?: string;
  aspect: 'square' | 'portrait' | 'landscape';
  tags: string[];
  clientType: string;
  deliverablesList: string[];
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  aspectRatio: string;
  highlights: string[];
}

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  service: string;
  projectDetails: string;
  budget: string;
  deadline: string;
  referenceFileNote?: string;
}
