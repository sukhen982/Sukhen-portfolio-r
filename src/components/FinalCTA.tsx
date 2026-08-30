import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#070B14] via-[#0D1424] to-[#070B14] overflow-hidden border-t border-cyan-500/10">
      {/* Background Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>READY TO ELEVATE YOUR BRAND?</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
          LET'S CREATE SOMETHING <span className="text-gradient-cyan">AMAZING.</span>
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>WHATSAPP SUKHEN</span>
          </a>
        </div>

      </div>
    </section>
  );
};
