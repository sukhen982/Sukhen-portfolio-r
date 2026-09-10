import React from 'react';
import { Palette, Globe, Film, Rocket, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { FEATURED_SERVICES, getWhatsAppUrl } from '../data/siteContent';

interface FeaturedServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

const RGB_CONFIG: Record<
  string,
  {
    channel: string;
    channelName: string;
    dotColor: string;
    borderColor: string;
    glowShadow: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
    btnHoverGradient: string;
  }
> = {
  'feat-design': {
    channel: 'G',
    channelName: 'GREEN CHANNEL',
    dotColor: '#00E676',
    borderColor: 'hover:border-[#00E676]/60',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(0,230,118,0.2)]',
    badgeBg: 'bg-[#00E676]/10 border-[#00E676]/30',
    badgeText: 'text-[#00E676]',
    iconBg: 'bg-[#00E676]/10 border-[#00E676]/30',
    iconText: 'text-[#00E676]',
    btnHoverGradient: 'hover:bg-gradient-to-r hover:from-[#00E676] hover:to-[#10B981] hover:border-[#00E676]',
  },
  'feat-website': {
    channel: 'B',
    channelName: 'BLUE CHANNEL',
    dotColor: '#00E5FF',
    borderColor: 'hover:border-[#00E5FF]/60',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]',
    badgeBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30',
    badgeText: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30',
    iconText: 'text-[#00E5FF]',
    btnHoverGradient: 'hover:bg-gradient-to-r hover:from-[#00E5FF] hover:to-[#2563EB] hover:border-[#00E5FF]',
  },
  'feat-video': {
    channel: 'R',
    channelName: 'RED CHANNEL',
    dotColor: '#FF2A5F',
    borderColor: 'hover:border-[#FF2A5F]/60',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(255,42,95,0.2)]',
    badgeBg: 'bg-[#FF2A5F]/10 border-[#FF2A5F]/30',
    badgeText: 'text-[#FF2A5F]',
    iconBg: 'bg-[#FF2A5F]/10 border-[#FF2A5F]/30',
    iconText: 'text-[#FF2A5F]',
    btnHoverGradient: 'hover:bg-gradient-to-r hover:from-[#FF2A5F] hover:to-[#EF4444] hover:border-[#FF2A5F]',
  },
  'feat-promo': {
    channel: 'V',
    channelName: 'VIOLET CHANNEL',
    dotColor: '#8B5CF6',
    borderColor: 'hover:border-[#8B5CF6]/60',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    badgeBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
    badgeText: 'text-[#8B5CF6]',
    iconBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
    iconText: 'text-[#8B5CF6]',
    btnHoverGradient: 'hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#A855F7] hover:border-[#8B5CF6]',
  },
};

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-7 h-7" />;
      case 'Globe':
        return <Globe className="w-7 h-7" />;
      case 'Film':
        return <Film className="w-7 h-7" />;
      case 'Rocket':
        return <Rocket className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#070B14] border-y border-white/5 overflow-hidden">
      {/* Subtle RGB background glow mesh */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF2A5F]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00E676]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with RGB Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-white/10 text-xs font-mono mb-3 shadow-md">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FF2A5F]" />
              <span className="w-2 h-2 rounded-full bg-[#00E676]" />
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            </div>
            <span className="text-white font-bold tracking-wider">RGBV CREATIVE SPECTRUM</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            FEATURED <span className="text-gradient-rgbv">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Four powerhouse specializations driving business growth, high-converting websites, and standout visual presence.
          </p>
        </div>

        {/* 4 Major Services Cards in RGBV Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((feat, idx) => {
            const config = RGB_CONFIG[feat.id] || RGB_CONFIG['feat-design'];
            return (
              <div
                key={feat.id}
                className={`relative rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-white/10 ${config.borderColor} ${config.glowShadow} p-7 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Top Row: Icon & RGB Channel Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl ${config.iconBg} flex items-center justify-center ${config.iconText} group-hover:scale-105 transition-all duration-300 shadow-md`}>
                      {getIcon(feat.icon)}
                    </div>
                    
                    {/* RGB Channel Badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${config.badgeBg}`}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.dotColor }} />
                      <span className={`text-[10px] font-mono font-bold ${config.badgeText}`}>
                        {config.channel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white tracking-wide mb-1">
                    {feat.title}
                  </h3>
                  <h4 className="text-xs font-mono font-semibold mb-3" style={{ color: config.dotColor }}>
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
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#131E36]/80 text-gray-300 border border-white/5"
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
                  className="btn-rgbk-secondary w-full py-3 rounded-xl font-bold text-xs gap-2 cursor-pointer shadow-md hover:filter hover:brightness-110"
                >
                  <MessageCircle className="w-4 h-4 text-[#00E676]" />
                  <span>START YOUR PROJECT</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
