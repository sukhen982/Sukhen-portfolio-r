import React from 'react';
import {
  Palette,
  Sliders,
  Zap,
  Monitor,
  Printer,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/siteContent';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-blue-400" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-pink-400" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#070B14] border-t border-cyan-500/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXCELLENCE IN EXECUTION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            WHY CHOOSE <span className="text-gradient-cyan">ME?</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Dedicated creative quality, direct communication, and precision in every deliverable.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-cyan-500/30 p-7 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#131E36] border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-cyan-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-mono text-cyan-400 font-medium mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-sm text-gray-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[11px] font-mono text-gray-400">Professional Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
