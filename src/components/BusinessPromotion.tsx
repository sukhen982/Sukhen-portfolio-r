import React from 'react';
import { Sparkles, Clapperboard, Share2, TrendingUp, CheckCircle2, MessageCircle, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_PROMOTION_CARDS, getWhatsAppUrl } from '../data/siteContent';

export const BusinessPromotion: React.FC = () => {
  const getCardIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-purple-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#070B14]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Rocket className="w-3.5 h-3.5 animate-bounce" />
            <span>BUSINESS GROWTH ENGINE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            PROMOTE YOUR BUSINESS WITH <span className="text-gradient-cyan">CREATIVE CONTENT</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            “Make your business stand out with professional graphics, promotional videos, menu cards, social media creatives and digital marketing materials.”
          </p>
        </motion.div>

        {/* 4 Visual Cards with Staggered Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {BUSINESS_PROMOTION_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-cyan-400/40 p-6 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#131E36] border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400/40 transition-all">
                  {getCardIcon(card.iconName)}
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                  {card.desc}
                </p>

                <div className="space-y-2 mb-4">
                  {card.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/80">
                <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  HIGH CONVERSION IMPACT
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I want to promote my business with your creative design and video content. Let us discuss.')}
            target="_blank"
            rel="noopener noreferrer"
            id="biz-promo-whatsapp-btn"
            className="btn-rgbk-primary btn-anim-whatsapp group px-8 py-4 rounded-xl font-bold text-base tracking-wide gap-3 cursor-pointer shadow-2xl inline-flex items-center"
          >
            <Rocket className="w-5 h-5 text-[#070B14] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 transition-transform" />
            <span>PROMOTE MY BUSINESS</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
