import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  Palette,
  Film,
  Layers,
  FileSpreadsheet,
  CheckCircle2,
  Zap,
  Play,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { SukhenLogo } from './SukhenLogo';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

const TITLES = [
  'GRAPHIC DESIGNER',
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
      {/* Ambient Gradient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Positioning Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-2.5"
            >
              <SukhenLogo variant="mark" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]" />
              <span className="h-[1px] w-8 bg-[#00E5FF]"></span>
              <span className="text-[#00E5FF] text-xs font-bold uppercase tracking-[0.3em]">
                Sukhen Sarkar • Studio
              </span>
            </motion.div>

            {/* Main Brand Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.98] mb-4 tracking-tight"
            >
              Turning Ideas<br />
              Into Powerful<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]">
                Visuals.</span>
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
              className="text-[#A8B0C0] text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Professional Graphic Design, Advertisement Videos, and Digital Services—All in One Place. Your vision, expertly crafted for impact.
            </motion.p>

            {/* Three Action Buttons matching Elegant Dark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              {/* Primary: Start Your Project */}
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to know more about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-whatsapp-btn"
                className="bg-[#00E5FF] text-[#070B14] px-7 py-3.5 rounded-md font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] active:scale-98 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>START YOUR PROJECT</span>
              </a>

              {/* Secondary: View Portfolio */}
              <a
                href="#portfolio"
                id="hero-view-portfolio-btn"
                className="border border-white/10 bg-white/5 px-7 py-3.5 rounded-md font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 transition-all text-white inline-flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#00E5FF]" />
                <span>VIEW PORTFOLIO</span>
              </a>

              {/* Third: Get A Quote */}
              <button
                onClick={onOpenInquiry}
                id="hero-get-quote-btn"
                className="border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-purple-200 px-6 py-3.5 rounded-md font-bold text-sm tracking-wide hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-purple-400" />
                <span>GET A QUOTE</span>
              </button>
            </motion.div>

            {/* Trust Attributes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A8B0C0]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Direct WhatsApp Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Digital & Print Ready HD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>100% Custom Solutions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Elegant Dark Multi-Service Grid Visual */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: Col-span-2 Featured Video Service */}
              <div className="col-span-2 bg-[#0D1424] border border-white/5 hover:border-[#7C3AED]/40 p-6 rounded-2xl flex flex-col justify-between group overflow-hidden relative transition-all duration-300 shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
                  <Film className="w-20 h-20 text-[#7C3AED]" />
                </div>
                <div>
                  <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest">
                    FEATURED SERVICE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white group-hover:text-purple-300 transition-colors">
                    Advertisement Video Making
                  </h3>
                  <p className="text-[#A8B0C0] text-xs sm:text-sm mt-2 leading-relaxed max-w-sm">
                    Cinematic promotional content, social reels & commercial spots for brands and businesses.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-purple-900/40 text-purple-200 border border-purple-500/30 px-2 py-0.5 rounded">
                    4K ULTRA HD
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B0C0]">
                    Reels • Promo Ads • Motion
                  </span>
                </div>
              </div>

              {/* Card 2: Graphic Design */}
              <div className="bg-[#0D1424] border border-white/5 hover:border-[#00E5FF]/40 p-5 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <SukhenLogo variant="mark" className="w-12 h-12 drop-shadow-[0_0_12px_rgba(0,229,255,0.3)]" />
                </div>
                <h4 className="font-bold text-white text-sm">Graphic Design</h4>
                <p className="text-[10px] text-[#A8B0C0] mt-1 uppercase tracking-wider font-mono">
                  Logos • Menus • Print
                </p>
              </div>

              {/* Card 3: Brand Promotion */}
              <div className="bg-[#0D1424] border border-white/5 hover:border-[#7C3AED]/40 p-5 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h4 className="font-bold text-white text-sm">Brand Promotion</h4>
                <p className="text-[10px] text-[#A8B0C0] mt-1 uppercase tracking-wider font-mono">
                  Social Media Growth
                </p>
              </div>

              {/* Card 4: Col-span-2 Have an Idea / Custom Quote */}
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I have an idea for a project and would like to get a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 bg-gradient-to-r from-[#00E5FF]/15 via-[#0D1424] to-[#7C3AED]/15 border border-white/10 hover:border-[#00E5FF]/40 p-5 rounded-2xl flex justify-between items-center group transition-all duration-300 shadow-xl"
              >
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors flex items-center gap-1.5">
                    <span>Have an Idea?</span>
                    <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                  </h4>
                  <p className="text-xs text-[#A8B0C0] mt-0.5">
                    Get a custom quote via WhatsApp today.
                  </p>
                </div>
                <div className="w-10 h-10 bg-white text-[#070B14] rounded-full flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:scale-110 transition-all shadow-md">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
