import React from 'react';
import { MessageCircle, Sparkles, ArrowUp, Mail, Phone } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Graphic Design',
    'Video Making',
    'Brand Promotion',
    'Menu Card',
    'ID Card',
    'T-Shirt Design',
    'Online Work',
  ];

  return (
    <footer className="relative bg-[#05080F] border-t border-cyan-500/15 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1424] to-[#131E36] border border-cyan-400/30">
                <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-base">
                  {BRAND_INFO.initials}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg text-white tracking-wide uppercase">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] text-cyan-400 font-mono uppercase">
                  {BRAND_INFO.taglineSecondary}
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-xs sm:text-sm">
              {BRAND_INFO.taglinePrimary}
            </p>

            <p className="text-gray-500 text-xs">
              Professional Graphic Design, Advertisement Videos, Brand Promotion, Menu Cards, ID Cards, T-Shirt Designs and Online Digital Services.
            </p>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors text-gray-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors text-gray-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Conversion (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            
            <div>
              <span className="text-gray-500 font-mono text-[10px] block">WhatsApp / Call:</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors block mt-0.5"
              >
                {BRAND_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to inquire about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-xs font-mono font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-mono text-xs">
            © 2026 {BRAND_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-mono text-[11px]">
              Crafted with Precision & Innovation
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0D1424] border border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
