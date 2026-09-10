import React, { useState } from 'react';
import {
  FileSpreadsheet,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  HelpCircle,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteContent';

interface PricingProps {
  onOpenInquiry: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenInquiry }) => {
  const [selectedServiceType, setSelectedServiceType] = useState('Graphic Design');
  const [timeline, setTimeline] = useState('Standard (2-3 Days)');

  const serviceOptions = [
    'Website Making (Business / Portfolio / Landing Page)',
    'Graphic Design (Poster / Banner / Flyer)',
    'Advertisement Video Making',
    'Brand Promotion Video',
    'Hotel & Restaurant Menu Card',
    'ID Card Making (School / Office)',
    'T-Shirt Design & Printing Preparation',
    'Social Media Design Package',
    'Commercial Printing Design',
    'Online Digital Assistance & Work',
    'Custom / Other Digital Services',
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#070B14] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT PROJECT ESTIMATION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            PROJECT <span className="text-gradient-cyan">PRICING</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Fair, customized quotations based precisely on your unique scope and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Custom Project Card (As instructed in Prompt) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  TAILORED QUOTATION
                </span>
                <span className="text-xs font-mono text-gray-400">NO HIDDEN CHARGES</span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mb-2">
                CUSTOM PROJECT
              </h3>
              <p className="text-lg font-mono font-semibold text-cyan-300 mb-5">
                Price depends on project requirements.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                “Every project is different. Contact me with your requirements for a suitable quotation.”
              </p>

              {/* What is included in every project */}
              <div className="space-y-3 p-5 rounded-xl bg-[#131E36]/50 border border-gray-800 mb-8">
                <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                  What is included in every quotation:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    '100% Original Custom Design',
                    'Direct WhatsApp Revisions',
                    'High-Resolution Master Files',
                    'Digital & Print-Ready Formatting',
                    'Fast Turnaround Times',
                    'Post-Delivery File Assistance',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to get a quote for a custom project.')}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-get-quote-whatsapp-btn"
                className="flex-1 btn-rgbk-primary py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide gap-2 cursor-pointer inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 fill-[#070B14]/20" />
                <span>GET A QUOTE ON WHATSAPP</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="btn-rgbk-secondary py-3.5 px-6 rounded-xl font-semibold text-sm gap-2 cursor-pointer inline-flex items-center justify-center"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#FF2A5F]" />
                <span>Fill Inquiry Form</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quick Scope Helper */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1424] border border-gray-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>QUICK SCOPE INQUIRY BUILDER</span>
              </div>

              <p className="text-xs text-gray-400 mb-5">
                Select your service category and timeline to generate an instant pre-formatted WhatsApp message:
              </p>

              {/* Service Selection */}
              <div className="mb-4">
                <label className="block text-xs font-mono text-gray-300 font-semibold mb-1.5">
                  Select Desired Service:
                </label>
                <select
                  value={selectedServiceType}
                  onChange={(e) => setSelectedServiceType(e.target.value)}
                  className="w-full bg-[#131E36] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline Selection */}
              <div className="mb-6">
                <label className="block text-xs font-mono text-gray-300 font-semibold mb-1.5">
                  Preferred Timeline:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Urgent (24 Hours)', 'Standard (2-3 Days)', 'Flexible', 'Weekly Project'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`px-2.5 py-2 rounded-lg text-[11px] font-mono text-center transition-all cursor-pointer ${
                        timeline === t
                          ? 'btn-rgbk-pill-active font-bold'
                          : 'bg-[#131E36] border border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated WhatsApp Action */}
            <div className="pt-4 border-t border-gray-800">
              <a
                href={getWhatsAppUrl(
                  `Hello Sukhen Sarkar, I would like a quote for:\n• Service: ${selectedServiceType}\n• Timeline: ${timeline}\nPlease share available options.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-rgbk-primary py-3.5 rounded-xl font-bold text-xs tracking-wide gap-2 cursor-pointer inline-flex items-center justify-center"
              >
                <span>SEND THIS SCOPE TO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
