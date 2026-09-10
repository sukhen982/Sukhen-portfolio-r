import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#070B14] via-[#0D1424] to-[#070B14] overflow-hidden border-t border-white/10">
      {/* Background RGB Chromatic Aura */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#FF2A5F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#00E676]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Mini Badge with RGB Chromatic Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1424] border border-white/10 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FF2A5F]" />
            <span className="w-2 h-2 rounded-full bg-[#00E676]" />
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          </div>
          <span className="text-white font-bold tracking-wider">RGB CREATIVE POWERHOUSE</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
          LET'S CREATE SOMETHING <span className="text-gradient-rgbv">AMAZING.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          “Have an idea, business or project? Let’s turn it into a professional digital experience.”
        </p>

        {/* Two Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Button 1: Start My Project (Inquiry / WhatsApp) */}
          <button
            onClick={onOpenInquiry}
            id="final-start-project-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF2A5F] via-[#8B5CF6] to-[#00E5FF] text-white font-bold text-sm shadow-[0_0_25px_rgba(255,42,95,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
          >
            <span>START MY PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Button 2: WhatsApp Sukhen */}
          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to start a project with you right now.')}
            target="_blank"
            rel="noopener noreferrer"
            id="final-whatsapp-sukhen-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-[#070B14] font-black text-sm shadow-[0_0_25px_rgba(0,230,118,0.35)] hover:shadow-[0_0_35px_rgba(0,230,118,0.6)] hover:scale-[1.02] active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WHATSAPP SUKHEN</span>
          </a>
        </div>

      </div>
    </section>
  );
};
