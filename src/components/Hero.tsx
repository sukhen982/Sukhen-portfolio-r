import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  Palette,
  Film,
  Globe,
  Layers,
  FileSpreadsheet,
  CheckCircle2,
  Zap,
  Play,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { SukhenLogo } from './SukhenLogo';
import { WebsiteMakingBadgeLogo } from './WebTechLogos';
import { FloatingCreativeBadges, AmbientSparkles } from './FloatingCreativeBadges';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

const TITLES = [
  'GRAPHIC DESIGNER',
  'WEBSITE MAKER & DEVELOPER',
  'VIDEO CREATOR',
  'BRAND PROMOTION SPECIALIST',
  'DIGITAL CREATIVE EXPERT',
];

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onOpenVideoModal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-grid"
    >
      {/* Dynamic RGB Chromatic Ambient Glow Flares */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#FF2A5F]/12 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#00E5FF]/15 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#00E676]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[380px] h-[380px] bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Ambient Sparkles */}
      <AmbientSparkles />

      {/* Subtle Luminous RGB Horizontal Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-rgb-line opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Positioning Eyebrow with RGB Spectrum Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0D1424]/90 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <SukhenLogo variant="mark" className="w-7 h-7 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]" />
              
              {/* RGB 4-Dot Chromatic Cluster */}
              <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-black/40 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#FF2A5F] shadow-[0_0_6px_#FF2A5F]" title="Red Channel" />
                <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_6px_#00E676]" title="Green Channel" />
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" title="Blue Channel" />
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_6px_#8B5CF6]" title="Violet Channel" />
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A5F] via-[#00E5FF] to-[#00E676] uppercase">
                RGB CREATIVE STUDIO
              </span>
            </motion.div>

            {/* Main Brand Heading with RGB Chromatic Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.98] mb-4 tracking-tight"
            >
              Turning Ideas<br />
              Into Powerful<br />
              <span className="text-gradient-rgbv font-black">
                Visuals & Websites.
              </span>
            </motion.h1>

            {/* Animated Dynamic Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="h-9 sm:h-10 flex items-center mb-4 overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#A8B0C0]">
                <span className="text-[#00E5FF] tracking-widest uppercase">SUKHEN SARKAR —</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-white font-mono tracking-wider font-semibold"
                  >
                    {TITLES[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#A8B0C0] text-base sm:text-lg max-w-lg mb-6 leading-relaxed"
            >
              Professional Website Making, Graphic Design, 4K Advertisement Videos, and Brand Promotion. Crafted with precision, speed, and vibrant visual impact.
            </motion.p>

            {/* RGB Chromatic Spectrum Channels Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-xl mb-7"
            >
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0D1424] border border-[#FF2A5F]/20 hover:border-[#FF2A5F]/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#FF2A5F] shadow-[0_0_6px_#FF2A5F]" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">4K Video Ads</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0D1424] border border-[#00E676]/20 hover:border-[#00E676]/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_6px_#00E676]" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">Graphic Art</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0D1424] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">Websites</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0D1424] border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_6px_#8B5CF6]" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">Branding</span>
              </div>
            </motion.div>

            {/* Three Action Buttons with Distinct Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              {/* Primary: Start Your Project (RGBK Combined Primary + Shimmer & WhatsApp Wiggle) */}
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to know more about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-whatsapp-btn"
                className="btn-rgbk-primary btn-anim-whatsapp group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2.5 cursor-pointer shadow-xl"
              >
                <MessageCircle className="w-4 h-4 fill-current group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                <span>START YOUR PROJECT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#070B14] animate-ping" />
              </a>

              {/* Secondary: View Portfolio (RGBK Combined Secondary + Palette Zoom) */}
              <a
                href="#portfolio"
                id="hero-view-portfolio-btn"
                className="btn-rgbk-secondary group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer hover:border-[#00E5FF]/60"
              >
                <Palette className="w-4 h-4 text-[#00E5FF] group-hover:scale-125 group-hover:rotate-6 transition-transform" />
                <span>VIEW PORTFOLIO</span>
              </a>

              {/* Third: Get A Quote (RGBK Combined Secondary + Arrow Slide) */}
              <button
                onClick={onOpenInquiry}
                id="hero-get-quote-btn"
                className="btn-rgbk-secondary group px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer hover:border-[#FF2A5F]/60"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#FF2A5F] group-hover:scale-110 transition-transform" />
                <span>GET A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#FF2A5F]" />
              </button>
            </motion.div>

            {/* Trust Attributes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A8B0C0]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676]" />
                <span>Direct WhatsApp Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Modern Responsive Websites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A5F]" />
                <span>4K HD Ads & Print Designs</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic RGB Chromatic Multi-Service Grid */}
          <div className="lg:col-span-5 relative">
            {/* Floating Software & Creative Tech Badges */}
            <FloatingCreativeBadges />

            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: Col-span-2 Featured Video Service [RED CHANNEL] */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="col-span-2 bg-[#0D1424] border border-[#FF2A5F]/20 hover:border-[#FF2A5F]/60 p-6 rounded-2xl flex flex-col justify-between group overflow-hidden relative transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(255,42,95,0.25)]"
              >
                <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none group-hover:opacity-35 group-hover:scale-110 transition-all duration-300">
                  <Film className="w-20 h-20 text-[#FF2A5F]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF2A5F] shadow-[0_0_8px_#FF2A5F] animate-ping" />
                    <span className="text-[#FF2A5F] text-[11px] font-bold font-mono uppercase tracking-widest">
                      RED CHANNEL • FEATURED VIDEO
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                    Advertisement Video Making
                  </h3>
                  <p className="text-[#A8B0C0] text-xs sm:text-sm mt-2 leading-relaxed max-w-sm">
                    Cinematic promotional content, social reels & commercial spots crafted for high brand engagement.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-[#FF2A5F]/15 text-red-200 border border-[#FF2A5F]/30 px-2 py-0.5 rounded">
                    4K ULTRA HD
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B0C0]">
                    Reels • Promo Ads • Motion Graphics
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Website Making [BLUE / CYAN CHANNEL] */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#0D1424] border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 p-5 rounded-2xl flex flex-col items-center text-center justify-between transition-all duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-2.5 group-hover:scale-110 transition-transform">
                    <WebsiteMakingBadgeLogo size="sm" />
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]" />
                    <span className="text-[9px] font-mono font-bold text-[#00E5FF] uppercase">BLUE CHANNEL</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">Website Making</h4>
                  <p className="text-[10px] text-[#A8B0C0] mt-0.5 uppercase tracking-wider font-mono">
                    Landing Pages • Fast Sites
                  </p>
                </div>

                {/* Mini Tech Stack Logos */}
                <div className="flex items-center justify-center gap-1 mt-2.5 pt-2 border-t border-cyan-500/20 w-full">
                  <span className="text-[8px] font-mono text-cyan-300/80 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    React
                  </span>
                  <span className="text-[8px] font-mono text-gray-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                    Next.js
                  </span>
                  <span className="text-[8px] font-mono text-amber-300/90 bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-500/30">
                    HTML5
                  </span>
                </div>
              </motion.div>

              {/* Card 3: Graphic Design & Branding [GREEN CHANNEL] */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#0D1424] border border-[#00E676]/20 hover:border-[#00E676]/60 p-5 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(0,230,118,0.25)]"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-115 group-hover:-rotate-6 transition-transform">
                  <SukhenLogo variant="mark" className="w-12 h-12 drop-shadow-[0_0_12px_rgba(0,230,118,0.4)]" />
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_5px_#00E676]" />
                  <span className="text-[9px] font-mono font-bold text-[#00E676] uppercase">GREEN CHANNEL</span>
                </div>
                <h4 className="font-bold text-white text-sm">Graphic Design</h4>
                <p className="text-[10px] text-[#A8B0C0] mt-1 uppercase tracking-wider font-mono">
                  Posters • Menus • Merch
                </p>
              </motion.div>

              {/* Card 4: Col-span-2 Have an Idea / Custom Quote [VIOLET CHANNEL] */}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -3, scale: 1.01 }}
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I have an idea for a project and would like to get a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 bg-gradient-to-r from-[#8B5CF6]/15 via-[#0D1424] to-[#FF2A5F]/15 border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 p-5 rounded-2xl flex justify-between items-center group transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_5px_#8B5CF6]" />
                    <span className="text-[9px] font-mono font-bold text-purple-300 uppercase">VIOLET CHANNEL</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                    <span>Have an Idea?</span>
                    <Sparkles className="w-4 h-4 text-[#8B5CF6] group-hover:rotate-12 transition-transform" />
                  </h4>
                  <p className="text-xs text-[#A8B0C0] mt-0.5">
                    Get a custom quote via WhatsApp today.
                  </p>
                </div>
                <div className="w-10 h-10 bg-white text-[#070B14] rounded-full flex items-center justify-center group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:scale-115 transition-all shadow-md">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
