import React from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppUrl } from '../data/siteContent';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D1424] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
            SERVICE {service.numberCode}
          </span>
          <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Deliverables Box */}
        <div className="p-4 rounded-xl bg-[#131E36]/60 border border-gray-800 mb-6">
          <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> What You Will Receive:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* WhatsApp Direct Quote */}
          <a
            href={getWhatsAppUrl(`Hello Sukhen Sarkar, I would like to get a quote and details for "${service.title}" (Service ${service.numberCode}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-rgbk-primary btn-anim-whatsapp group py-3.5 rounded-xl font-bold text-sm tracking-wide gap-2 cursor-pointer inline-flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-[#070B14]/20 group-hover:rotate-12 transition-transform" />
            <span>Chat on WhatsApp ({service.title})</span>
          </a>

          {/* Form Inquiry */}
          <button
            onClick={() => {
              onSelectForInquiry(service.title);
              onClose();
            }}
            className="btn-rgbk-secondary group px-5 py-3.5 rounded-xl font-semibold text-sm gap-2 cursor-pointer inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            <span>Fill Inquiry Form</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
