import React from 'react';
import {
  MessageCircle,
  Sparkles,
  CheckCircle,
  Palette,
  Film,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { SukhenLogo } from './SukhenLogo';

interface AboutProps {
  onOpenInquiry?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const highlights = [
    { title: 'Website Making & Web Design', desc: 'Fast, responsive landing pages & modern business websites' },
    { title: 'Graphic & Print Design', desc: 'Posters, Menus, ID Cards, T-Shirts, Flex Banners' },
    { title: 'Advertisement Videos', desc: 'Promo ads, Reels, motion typography & commercial spots' },
    { title: 'Brand Promotion & Digital Work', desc: 'Unified visual identities, campaign graphics & online services' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER THE CREATIVE MIND</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            ABOUT <span className="text-gradient-cyan">SUKHEN SARKAR</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 font-mono">
            Graphic Designer • Website Maker • Video Creator • Brand Promotion Specialist
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Profile Visual Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Glowing Background Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 opacity-30 blur-lg" />

              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl bg-[#0D1424] border border-cyan-500/30 p-6 shadow-2xl overflow-hidden">
                
                {/* Official Brand Logo Emblem */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#05070D] border border-cyan-500/20 mb-5 p-3 flex items-center justify-center group">
                  <SukhenLogo
                    variant="full"
                    className="w-full h-full max-w-[280px] drop-shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-2 rounded-lg bg-[#070B14]/90 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                      <span className="text-[11px] font-semibold text-white font-mono">OFFICIAL BRAND MARK</span>
                    </div>
                    <span className="text-[10px] text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded font-mono font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Identity Summary */}
                <div className="text-center">
                  <h3 className="font-heading font-bold text-xl text-white">SUKHEN SARKAR</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">Creative & Digital Solution Provider</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> Fast Execution
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Dedicated Quality
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio, Value Proposition & WhatsApp CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 mb-8 w-full">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                “Hi, I’m <span className="text-cyan-300 font-semibold">Sukhen Sarkar</span>, a Graphic Designer and Digital Service Provider. I create professional visual designs, promotional videos, branding materials and digital solutions for individuals, businesses and organizations.”
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
                “My goal is to transform ideas into attractive, professional and effective digital experiences.”
              </p>
            </div>

            {/* Core Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0D1424]/70 border border-gray-800 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Let's Work Together Button */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <a
                href={getWhatsAppUrl('Hi Sukhen Sarkar, I would like to work with you on my upcoming project.')}
                target="_blank"
                rel="noopener noreferrer"
                id="about-work-together-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-98 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>LET'S WORK TOGETHER</span>
              </a>

              {onOpenInquiry && (
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1424] border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/10 font-semibold text-sm transition-all"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
