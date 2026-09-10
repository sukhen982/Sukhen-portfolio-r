import React from 'react';
import { X, MessageCircle, ExternalLink, CheckCircle, Tag, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { getWhatsAppUrl } from '../data/siteContent';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D1424] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#070B14]/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
              {item.category}
            </span>
            <span className="text-xs font-mono text-gray-400">
              Client Concept: {item.clientType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Visual Media Display */}
          <div className="relative rounded-xl overflow-hidden bg-black/50 border border-gray-800 flex items-center justify-center max-h-[420px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-contain max-h-[420px]"
            />
          </div>

          {/* Project Details */}
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
              {item.fullDetails}
            </p>

            {/* Deliverables List */}
            <div className="p-4 rounded-xl bg-[#131E36]/60 border border-gray-800 mb-5">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Project Deliverables Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.deliverablesList.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Tag className="w-3.5 h-3.5 text-gray-500" />
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Conversion Action */}
          <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 text-center sm:text-left">
              Want a similar custom design or video for your business?
            </p>

            <a
              href={getWhatsAppUrl(`Hello Sukhen Sarkar, I loved your portfolio project "${item.title}" (${item.category}). I would like to order a similar design for my business.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rgbk-primary btn-anim-whatsapp group w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide gap-2.5 cursor-pointer inline-flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-[#070B14]/20 group-hover:rotate-12 transition-transform" />
              <span>Order Similar Design on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
