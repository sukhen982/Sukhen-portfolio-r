import React from 'react';
import { Palette, Film, Rocket, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { FEATURED_SERVICES, getWhatsAppUrl } from '../data/siteContent';

interface FeaturedServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-7 h-7" />;
      case 'Film':
        return <Film className="w-7 h-7" />;
      case 'Rocket':
        return <Rocket className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#070B14] border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE CREATIVE PILLARS</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            FEATURED <span className="text-gradient-cyan">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Three powerhouse specializations driving business growth and standout digital presence.
          </p>
        </div>

        {/* 3 Major Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((feat, idx) => (
            <div
              key={feat.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-gray-800 hover:border-cyan-400/40 p-7 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col justify-between"
            >
              {/* Top Row: Icon & Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#131E36] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300">
                    {getIcon(feat.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-cyan-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl text-white tracking-wide mb-1">
                  {feat.title}
                </h3>
                <h4 className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                  {feat.subtitle}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {feat.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#131E36]/80 text-gray-300 border border-gray-800 group-hover:border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button (WhatsApp) */}
              <a
                href={getWhatsAppUrl(`Hello Sukhen Sarkar, I would like to start a project related to ${feat.title} (${feat.subtitle}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0D1424] hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 border border-cyan-500/30 hover:border-emerald-400 text-cyan-300 hover:text-white font-semibold text-xs transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>START YOUR PROJECT</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
