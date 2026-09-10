import React from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { SukhenLogo } from './SukhenLogo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#070B14] border-t border-cyan-500/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            GET IN <span className="text-gradient-cyan">TOUCH</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Reach out directly to discuss your project, get instant estimates, or request creative services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main WhatsApp Direct Channel Card with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-emerald-500/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                    PRIMARY CONTACT CHANNEL
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400">INSTANT RESPONSE</span>
              </div>

              <div className="flex items-center gap-3.5 mb-2">
                <SukhenLogo variant="mark" className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] animate-pulse" />
                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {BRAND_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#00E5FF]">
                    {BRAND_INFO.fullTitle}
                  </p>
                </div>
              </div>

              {/* Large WhatsApp Display Box */}
              <div className="p-6 rounded-2xl bg-[#131E36]/60 border border-emerald-500/30 mb-8 hover:border-emerald-400/50 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-400 uppercase">WhatsApp & Call</span>
                      <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider">
                        {BRAND_INFO.phone}
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30 animate-pulse">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Large WhatsApp CTA Button with Interactive Animation */}
            <a
              href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to get in touch with you regarding your creative digital services.')}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-large-whatsapp-btn"
              className="btn-rgbk-primary btn-anim-whatsapp group w-full py-4 rounded-2xl font-bold text-base tracking-wide gap-3 cursor-pointer shadow-2xl inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-[#070B14]/20 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
              <span>CHAT DIRECTLY ON WHATSAPP ({BRAND_INFO.phone})</span>
            </a>
          </motion.div>

          {/* Right Column: Other Info & Social Placeholders with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 rounded-3xl bg-[#0D1424] border border-gray-800 p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>OFFICIAL CHANNELS</span>
              </h4>

              {/* Email Contact Card */}
              <div className="p-4 rounded-xl bg-[#131E36]/60 border border-gray-800 mb-4 flex items-center gap-3.5 hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-gray-400">Email Address</div>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-[#131E36]/60 border border-gray-800 mb-6 flex items-center gap-3.5 hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400">Availability</div>
                  <div className="text-sm font-medium text-white">Daily Support & Quick Turnaround</div>
                </div>
              </div>

              {/* Social Channels with Interactive Hover */}
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                  Connect on Social Media:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={BRAND_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#131E36] hover:bg-pink-500/15 border border-gray-800 hover:border-pink-500/40 text-gray-300 hover:text-pink-400 transition-all flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] group"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                    <span className="text-[11px] font-mono">Instagram</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#131E36] hover:bg-blue-500/15 border border-gray-800 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 transition-all flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                    <span className="text-[11px] font-mono">Facebook</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#131E36] hover:bg-red-500/15 border border-gray-800 hover:border-red-500/40 text-gray-300 hover:text-red-400 transition-all flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] group"
                  >
                    <Youtube className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                    <span className="text-[11px] font-mono">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 mt-6 text-center">
              <p className="text-xs text-gray-500 font-mono">
                {BRAND_INFO.taglinePrimary}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
