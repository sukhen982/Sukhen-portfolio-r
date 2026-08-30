import React, { useState } from 'react';
import {
  Palette,
  Video,
  Megaphone,
  UtensilsCrossed,
  CreditCard,
  Shirt,
  Smartphone,
  Printer,
  Globe,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { ALL_SERVICES, getWhatsAppUrl } from '../data/siteContent';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-cyan-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-emerald-400" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-pink-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#070B14]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL CREATIVE & DIGITAL SUITE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            MY <span className="text-gradient-cyan">SERVICES</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Creative solutions for your personal, business and digital needs.
          </p>
        </div>

        {/* 10 Animated Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl bg-[#0D1424] border border-gray-800/90 hover:border-cyan-400/40 p-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,229,255,0.12)] flex flex-col justify-between"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#131E36] border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:scale-105 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {service.popular && (
                      <span className="text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                        POPULAR
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-cyan-400">
                      SERVICE {service.numberCode}
                    </span>
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Buttons: Learn More & Get Quote */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-cyan-500/20 hover:border-cyan-400 text-xs font-medium text-cyan-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Sukhen Sarkar, I would like to get a quote for "${service.title}" (Service ${service.numberCode}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-[#131E36] hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 border border-emerald-500/30 hover:border-emerald-400 text-xs font-semibold text-emerald-300 hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Don't see what you need? Contact me banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0D1424] via-[#131E36] to-[#0D1424] border border-cyan-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>DON'T SEE WHAT YOU NEED?</span>
            </h3>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              I provide custom digital solutions, tailored graphic assets, and dedicated online assistance. Let’s talk about your custom task.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I have a custom digital/design requirement that is not listed on your website. Can we discuss?')}
            target="_blank"
            rel="noopener noreferrer"
            id="services-custom-request-btn"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] active:scale-98 transition-all"
          >
            <span>CONTACT ME DIRECTLY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={onSelectForInquiry}
      />
    </section>
  );
};
