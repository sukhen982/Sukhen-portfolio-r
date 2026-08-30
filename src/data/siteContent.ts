import {
  PortfolioCategory,
  PortfolioItem,
  ServiceItem,
  FeaturedService,
  VideoShowcaseItem,
  WhyChooseItem,
  ProcessStepItem,
} from '../types';

export const BRAND_INFO = {
  name: 'Sukhen Sarkar',
  initials: 'SS',
  shortTitle: 'Graphic Designer & Digital Creative Services',
  fullTitle: 'Graphic Designer | Video Creator | Brand Promotion Specialist | Online Service Provider',
  phone: '8972524740',
  internationalPhone: '+91 8972524740',
  rawPhone: '918972524740',
  whatsappUrl: 'https://wa.me/918972524740',
  email: 'Sukhen982@gmail.com', // editable placeholder
  taglinePrimary: '“Your Idea. My Creativity. One Powerful Digital Solution.”',
  taglineSecondary: 'Design • Video • Branding • Digital Services',
  marketingStatement: '“Turning Ideas Into Powerful Visual Experiences.”',
  supportingText:
    'Professional Graphic Design, Advertisement Videos, Brand Promotion, Menu Cards, ID Cards, T-Shirt Designs and Online Digital Services — All in One Place.',
  aboutBio:
    'Hi, I’m Sukhen Sarkar, a Graphic Designer and Digital Service Provider. I create professional visual designs, promotional videos, branding materials and digital solutions for individuals, businesses and organizations. My goal is to transform ideas into attractive, professional and effective digital experiences.',
  socials: {
    instagram: 'https://instagram.com/', // editable placeholder
    facebook: 'https://facebook.com/', // editable placeholder
    youtube: 'https://youtube.com/', // editable placeholder
    behance: '#',
  },
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultMsg = 'Hello Sukhen Sarkar, I would like to know more about your services.';
  const messageToUse = customMessage || defaultMsg;
  return `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(messageToUse)}`;
};

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'feat-design',
    icon: 'Palette',
    title: 'DESIGN',
    subtitle: 'Creative Graphic Design',
    description: 'Creative graphic design solutions tailored for impactful digital platforms & premium print-ready media.',
    tags: ['Banners', 'Posters', 'Flyers', 'Menus', 'Branding'],
    gradient: 'from-[#00E5FF]/20 to-[#7C3AED]/20',
    ctaText: 'START DESIGN PROJECT',
  },
  {
    id: 'feat-video',
    icon: 'Film',
    title: 'VIDEO',
    subtitle: 'Ad & Promo Video Creation',
    description: 'Advertisement and promotional video creation designed to capture customer attention instantly.',
    tags: ['Video Ads', 'Reels & Shorts', 'Motion Graphics', 'Event Teasers'],
    gradient: 'from-[#7C3AED]/20 to-[#EC4899]/20',
    ctaText: 'CREATE MY VIDEO',
  },
  {
    id: 'feat-promo',
    icon: 'Rocket',
    title: 'PROMOTION',
    subtitle: 'Brand & Business Marketing',
    description: 'Business and brand promotional content engineered to boost credibility and generate real inquiries.',
    tags: ['Social Creatives', 'Campaign Ads', 'Menu Cards', 'Digital Identity'],
    gradient: 'from-[#00E5FF]/20 to-[#10B981]/20',
    ctaText: 'BOOST MY BUSINESS',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'service-01',
    numberCode: '01',
    title: 'GRAPHIC DESIGN',
    category: 'Visual Design',
    shortDesc: 'Posters, banners, flyers, brochures, social media creatives and promotional graphics.',
    fullDesc:
      'High-impact visual communication crafted to make your brand stand out. From crisp flyers and exhibition banners to digital graphics that command immediate visual engagement.',
    iconName: 'Palette',
    deliverables: ['Social Media Banners', 'Event Posters', 'Marketing Flyers', 'Brochures', 'HD Vector Files (PNG, JPG, PDF)'],
    gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
    popular: true,
  },
  {
    id: 'service-02',
    numberCode: '02',
    title: 'ADVERTISEMENT VIDEO MAKING',
    category: 'Video Production',
    shortDesc: 'Creative advertisement videos for products, businesses, services, events and social media.',
    fullDesc:
      'Cinematic, high-energy commercial videos designed for conversion across Instagram Reels, YouTube Ads, Facebook Campaigns, and WhatsApp marketing.',
    iconName: 'Video',
    deliverables: ['Product Promo Videos', 'Commercial Ad Spots', 'Event Teaser Videos', 'Dynamic Motion Typography', 'Full HD & 4K Output'],
    gradient: 'from-[#7C3AED]/20 via-transparent to-transparent',
    popular: true,
  },
  {
    id: 'service-03',
    numberCode: '03',
    title: 'BRAND PROMOTION VIDEO',
    category: 'Branding & Video',
    shortDesc: 'Professional promotional videos designed to present businesses and brands attractively.',
    fullDesc:
      'Story-driven brand showcases that build instant trust, highlight key products/services, and present your organization as an industry authority.',
    iconName: 'Megaphone',
    deliverables: ['Corporate Profile Videos', 'Service Explainer Videos', 'Customer Showcase Reels', 'Branded Intro & Outro Stems'],
    gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
  },
  {
    id: 'service-04',
    numberCode: '04',
    title: 'HOTEL & RESTAURANT MENU CARD',
    category: 'Print & Hospitality',
    shortDesc: 'Modern menu card designs for hotels, restaurants, cafés and food businesses.',
    fullDesc:
      'Appetizing, structured, and beautifully formatted menu cards. Designed for easy reading, strategic item placement, and premium print quality.',
    iconName: 'UtensilsCrossed',
    deliverables: ['Multi-Page Restaurant Menus', 'Single Sheet Café Boards', 'Digital QR Menu Formats', 'Print-Ready CMYK Files'],
    gradient: 'from-[#F59E0B]/20 via-transparent to-transparent',
  },
  {
    id: 'service-05',
    numberCode: '05',
    title: 'ID CARD MAKING',
    category: 'Corporate & School',
    shortDesc: 'Professional ID card design for schools, offices, organizations, businesses and events.',
    fullDesc:
      'Crisp, standardized, and secure identification badge designs with barcode/QR integration, clean typography, and durable print formatting.',
    iconName: 'CreditCard',
    deliverables: ['Employee ID Cards', 'Student & School IDs', 'Event Badge Passes', 'Lanyard & PVC Card Layouts'],
    gradient: 'from-[#10B981]/20 via-transparent to-transparent',
  },
  {
    id: 'service-06',
    numberCode: '06',
    title: 'T-SHIRT DESIGN & PRINTING',
    category: 'Apparel & Merchandise',
    shortDesc: 'Creative custom T-shirt designs for personal use, events, groups and business promotion.',
    fullDesc:
      'Striking apparel graphics, typographic designs, and custom merchandise illustrations formatted specifically for screen printing, DTF, and DTG processes.',
    iconName: 'Shirt',
    deliverables: ['Custom Graphic Apparel', 'Brand Merch Artwork', 'Event & Team Jerseys', 'Separated Color Print Files'],
    gradient: 'from-[#EC4899]/20 via-transparent to-transparent',
  },
  {
    id: 'service-07',
    numberCode: '07',
    title: 'SOCIAL MEDIA DESIGN',
    category: 'Digital Marketing',
    shortDesc: 'Facebook, Instagram, YouTube thumbnails, advertisements and social media promotional creatives.',
    fullDesc:
      'Scroll-stopping visual assets formatted perfectly for every social platform dimension. Boost your click-through rates and follower engagement.',
    iconName: 'Smartphone',
    deliverables: ['Instagram Post & Story Packs', 'High-CTR YouTube Thumbnails', 'Facebook Ad Creatives', 'Cover & Banner Graphics'],
    gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
    popular: true,
  },
  {
    id: 'service-08',
    numberCode: '08',
    title: 'PRINTING DESIGN',
    category: 'Commercial Print',
    shortDesc: 'Professional print-ready designs for different business and personal requirements.',
    fullDesc:
      'Precision color-managed, bleed-calibrated design files ready for flawless high-volume commercial printing on any substrate.',
    iconName: 'Printer',
    deliverables: ['Business Cards', 'Letterheads & Stationery', 'Flex Banners & Standees', 'Packaging & Sticker Labels'],
    gradient: 'from-[#8B5CF6]/20 via-transparent to-transparent',
  },
  {
    id: 'service-09',
    numberCode: '09',
    title: 'ALL ONLINE WORK',
    category: 'Digital Assistance',
    shortDesc: 'Various online services, digital work, document preparation and online assistance.',
    fullDesc:
      'Reliable digital workflow execution, document formatting, PDF conversions, portal registrations, and online administrative support.',
    iconName: 'Globe',
    deliverables: ['Online Application Support', 'PDF & Doc Formatting', 'Digital File Conversions', 'Web Portal Assistance'],
    gradient: 'from-[#3B82F6]/20 via-transparent to-transparent',
  },
  {
    id: 'service-10',
    numberCode: '10',
    title: 'OTHER DIGITAL SERVICES',
    category: 'Custom Solutions',
    shortDesc: 'Allow customers to request custom digital work that is not listed above.',
    fullDesc:
      'Have a unique requirement? From custom graphic compositing and photo retouching to specialized digital assignments, let’s discuss your vision.',
    iconName: 'Sparkles',
    deliverables: ['Photo Retouching & Restoration', 'Custom Vector Trace & Redraw', 'Specialized Digital Tasks', 'Tailored Project Scopes'],
    gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'ALL',
  'GRAPHIC DESIGN',
  'ADVERTISEMENT VIDEO',
  'BRAND PROMOTION',
  'MENU CARD',
  'ID CARD',
  'T-SHIRT',
  'SOCIAL MEDIA',
  'POSTER',
  'BANNER',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Cyberpunk Neon Brand Campaign',
    category: 'GRAPHIC DESIGN',
    categoryLabel: 'Graphic Design',
    shortDesc: 'Futuristic promotional key visual with custom 3D typography and vibrant lighting.',
    fullDetails:
      'Created a comprehensive visual identity concept for an upcoming tech launch. Features high-contrast dark aesthetic, electric blue and neon purple glow elements, and optimized multi-channel marketing assets.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    tags: ['Graphic Design', 'Branding', 'Neon Art', 'Key Visual'],
    clientType: 'Digital Tech Agency',
    deliverablesList: ['High-Res Vector Art', 'Social Square Post', 'Story Layout', 'Print Master PDF'],
  },
  {
    id: 'port-2',
    title: 'Dynamic Product Commercial Teaser',
    category: 'ADVERTISEMENT VIDEO',
    categoryLabel: 'Advertisement Video',
    shortDesc: 'Fast-paced commercial video ad with dynamic motion graphics and sound design.',
    fullDetails:
      'Designed a high-conversion 30-second advertisement video geared for Instagram Reels and YouTube Shorts. Incorporates kinetic typography, product focal zooms, and upbeat audio pacing.',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aspect: 'landscape',
    tags: ['Video Ad', 'Motion Graphics', 'Reels Format', 'Commercial'],
    clientType: 'Retail Brand',
    deliverablesList: ['9:16 Vertical Video (Reels)', '16:9 Landscape 4K Video', 'Custom Audio Track'],
  },
  {
    id: 'port-3',
    title: 'Artisan Gourmet Restaurant Menu',
    category: 'MENU CARD',
    categoryLabel: 'Menu Card',
    shortDesc: 'Luxury dark-themed multi-fold menu card with gold foil accents and food photography.',
    fullDetails:
      'Crafted an elegant, clean-reading menu card for a modern multi-cuisine restaurant. Features categorized dish layout, allergen icons, QR digital ordering sync, and premium print calibration.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    tags: ['Menu Card', 'Restaurant', 'Print Design', 'QR Code'],
    clientType: 'Fine Dining Restaurant',
    deliverablesList: ['Double Sided Trifold Menu', 'Table Standee Mini Menu', 'Digital Mobile PDF'],
  },
  {
    id: 'port-4',
    title: 'Corporate Brand Promotion Reel',
    category: 'BRAND PROMOTION',
    categoryLabel: 'Brand Promotion',
    shortDesc: 'Polished promotional video showcasing company culture, milestones, and services.',
    fullDetails:
      'Produced a compelling brand awareness video tailored for website headers and B2B client presentations. Features smooth color grading, dynamic lower thirds, and logo reveals.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    aspect: 'landscape',
    tags: ['Brand Video', 'Corporate Promo', 'Showcase', 'Cinematic'],
    clientType: 'Consulting Group',
    deliverablesList: ['Full HD Promo Video', 'Website Hero Loop', 'Social Cutdowns'],
  },
  {
    id: 'port-5',
    title: 'Official Corporate Smart ID Badges',
    category: 'ID CARD',
    categoryLabel: 'ID Card',
    shortDesc: 'Modern dual-sided employee identification cards with security QR verification.',
    fullDetails:
      'Designed a sleek, consistent ID badge template for corporate personnel. Includes smart QR verification, high-legibility typography, clear department color coding, and PVC print-ready bleeds.',
    imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    tags: ['ID Card', 'Corporate Badge', 'PVC Print', 'Security QR'],
    clientType: 'Enterprise Organization',
    deliverablesList: ['Front & Back Badge Templates', 'Data Merge Spreadsheet Template', 'Print-Ready CMYK Files'],
  },
  {
    id: 'port-6',
    title: 'Urban Streetwear Custom Graphic T-Shirt',
    category: 'T-SHIRT',
    categoryLabel: 'T-Shirt',
    shortDesc: 'Bold futuristic typography and cyberpunk character art for apparel collection.',
    fullDetails:
      'Created custom vector graphics for a limited streetwear apparel drop. Includes color separation files for screen printing and high-res halftone textures for DTF printing.',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    tags: ['T-Shirt Design', 'Streetwear', 'Apparel Print', 'Vector Art'],
    clientType: 'Clothing Label',
    deliverablesList: ['Front Chest Graphic', 'Full Back Graphic', 'DTF Print-Ready Master PNG (300 DPI)'],
  },
  {
    id: 'port-7',
    title: 'High-Impact Social Media Growth Kit',
    category: 'SOCIAL MEDIA',
    categoryLabel: 'Social Media',
    shortDesc: 'High-conversion carousel layouts, promotional banners, and engaging thumbnails.',
    fullDetails:
      'Developed a 12-template promotional visual kit for social media marketing. Optimized for maximum feed visibility, thumb-stopping contrast, and instant call-to-action responsiveness.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    tags: ['Social Media', 'Instagram Carousel', 'Ad Creatives', 'CTR Boost'],
    clientType: 'Digital Influencer & Brand',
    deliverablesList: ['10+ Multi-Slide Carousels', 'Story Templates', 'Editable PSD / Master Files'],
  },
  {
    id: 'port-8',
    title: 'Electro Music Festival Event Poster',
    category: 'POSTER',
    categoryLabel: 'Poster',
    shortDesc: 'High-energy typography poster design for a live electronic music concert.',
    fullDetails:
      'Engineered an electric, high-vibrancy event poster with layered 3D typography, holographic metallic tones, sponsor badge placements, and print-ready high-dpi separation.',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    tags: ['Poster Design', 'Event Artwork', 'Print Media', 'Typography'],
    clientType: 'Event Management',
    deliverablesList: ['A1/A2/A3 Print Masters', 'Digital Web Promo Poster', 'Sponsor Banner Formats'],
  },
  {
    id: 'port-9',
    title: 'Commercial Grand Opening Outdoor Banner',
    category: 'BANNER',
    categoryLabel: 'Banner',
    shortDesc: 'Large format outdoor flex banner with bold contact visibility and offer details.',
    fullDetails:
      'Created an ultra-sharp, large-scale outdoor billboard and flex banner for a grand retail inauguration. Formatted with high-contrast color calibration for long-distance legibility.',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
    tags: ['Banner Design', 'Flex Print', 'Outdoor Hoarding', 'Commercial'],
    clientType: 'Retail Store',
    deliverablesList: ['10x4 ft Flex Master File', 'Rollup Standee Banner', 'CMYK Print File'],
  },
];

export const VIDEO_SHOWCASE: VideoShowcaseItem[] = [
  {
    id: 'vid-1',
    title: 'Brand Vision & Services Promotional Reel',
    category: 'Brand Promotion',
    duration: '0:45',
    description: 'High-impact corporate brand introduction video highlighting core services and client impact.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aspectRatio: '16:9',
    highlights: ['Cinematic Pacing', 'Custom Sound Effects', 'Motion Titles', 'Branded Outro'],
  },
  {
    id: 'vid-2',
    title: 'Commercial Product Launch Ad Spotlight',
    category: 'Advertisement Video',
    duration: '0:30',
    description: 'Engaging product feature commercial designed to maximize sales conversion on social feeds.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    aspectRatio: '16:9',
    highlights: ['Fast-Paced Cuts', 'Feature Callouts', 'Color Grade', 'Call To Action'],
  },
  {
    id: 'vid-3',
    title: 'Event & Festival Hype Teaser Video',
    category: 'Event Promo',
    duration: '0:35',
    description: 'Dynamic teaser trailer built to drive ticket sales, enthusiasm, and viral social sharing.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    aspectRatio: '16:9',
    highlights: ['Bass-Synced Transitions', 'Glow FX', 'Artist Lineup Reveals'],
  },
];

export const BUSINESS_PROMOTION_CARDS = [
  {
    id: 'biz-1',
    title: 'Brand Design',
    iconName: 'Sparkles',
    desc: 'Establish an unforgettable visual identity that elevates your market value and customer trust.',
    benefits: ['Distinctive Visual Look', 'Unified Brand Assets', 'Instant Professional Trust'],
  },
  {
    id: 'biz-2',
    title: 'Advertisement Video',
    iconName: 'Clapperboard',
    desc: 'Capture immediate attention on Instagram, Facebook & YouTube with captivating promotional ads.',
    benefits: ['Higher Click-Through Rate', 'Product Feature Highlights', 'Engaging Motion Graphics'],
  },
  {
    id: 'biz-3',
    title: 'Social Media Creative',
    iconName: 'Share2',
    desc: 'Consistent, beautifully designed daily creatives and posters that keep your audience connected.',
    benefits: ['Daily Brand Presence', 'Offer & Discount Posts', 'Viral Shareability'],
  },
  {
    id: 'biz-4',
    title: 'Business Promotion',
    iconName: 'TrendingUp',
    desc: 'From restaurant menu cards and flex banners to digital campaigns — turnkey promotional assets.',
    benefits: ['Offline & Online Coverage', 'Custom Print Prep', 'Measurable Inquiries'],
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'why-1',
    number: '01',
    title: 'CREATIVE',
    subtitle: 'Modern Visual Concepts',
    description: 'Modern and attractive visual concepts crafted specifically to fit your brand identity and market audience.',
    iconName: 'Palette',
    accent: '#00E5FF',
  },
  {
    id: 'why-2',
    number: '02',
    title: 'CUSTOM',
    subtitle: 'Tailored Solutions',
    description: 'Solutions based on your individual requirements, avoiding generic templates for genuine creative distinction.',
    iconName: 'Sliders',
    accent: '#7C3AED',
  },
  {
    id: 'why-3',
    number: '03',
    title: 'FAST COMMUNICATION',
    subtitle: 'Direct WhatsApp Support',
    description: 'Easy, responsive, and direct communication through WhatsApp for quick revisions and continuous updates.',
    iconName: 'Zap',
    accent: '#10B981',
  },
  {
    id: 'why-4',
    number: '04',
    title: 'DIGITAL READY',
    subtitle: 'Optimized Formats',
    description: 'Designs perfectly sized, color-profiled, and compressed for seamless performance across all social media and websites.',
    iconName: 'Monitor',
    accent: '#3B82F6',
  },
  {
    id: 'why-5',
    number: '05',
    title: 'PRINT READY',
    subtitle: 'Press-Accurate Quality',
    description: 'Professional designs calibrated with proper CMYK color codes, bleed margins, and ultra-crisp resolution for flawless printing.',
    iconName: 'Printer',
    accent: '#EC4899',
  },
  {
    id: 'why-6',
    number: '06',
    title: 'CUSTOMER FOCUSED',
    subtitle: 'Understanding Your Goal',
    description: 'Focused on deeply understanding customer requirements to ensure the final output exceeds expectations.',
    iconName: 'HeartHandshake',
    accent: '#F59E0B',
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'CONTACT',
    subtitle: 'Share Your Need',
    description: 'Tell me what you need via WhatsApp or the project request form.',
    deliverable: 'Initial inquiry & scope overview',
    iconName: 'MessageSquare',
  },
  {
    step: '02',
    title: 'DISCUSS',
    subtitle: 'Align on Details',
    description: 'Discuss your requirements, reference styles, deadlines, and project ideas.',
    deliverable: 'Clear project direction & custom quote',
    iconName: 'MessagesSquare',
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Design & Crafting',
    description: 'Creative work is prepared carefully according to the agreed requirement.',
    deliverable: 'Draft preview & revision review',
    iconName: 'Wand2',
  },
  {
    step: '04',
    title: 'DELIVER',
    subtitle: 'Final Handover',
    description: 'Final work is delivered promptly in all required high-resolution digital & print formats.',
    deliverable: 'High-res master files & support',
    iconName: 'CheckCircle2',
  },
];
