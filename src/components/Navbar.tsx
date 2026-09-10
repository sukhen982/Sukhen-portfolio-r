import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { SukhenLogo } from './SukhenLogo';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'portfolio', 'videos', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Videos', href: '#videos' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/90 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Dynamic RGB Top Spectrum Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-rgb-line shadow-[0_0_10px_rgba(0,229,255,0.5)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00E5FF] rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center">
              <SukhenLogo
                variant="mark"
                className="w-11 h-11 transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse border-2 border-[#070B14]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-[#00E5FF] transition-colors uppercase">
                  {BRAND_INFO.name}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[10px] text-[#A8B0C0] font-mono tracking-widest uppercase">
                GRAPHIC DESIGNER • STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D1424]/80 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#00E5FF] bg-[#00E5FF]/10 shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                      : 'text-[#A8B0C0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA (WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to discuss a project with you.')}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="btn-rgbk-secondary btn-anim-whatsapp group px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#00E676] mr-1.5 group-hover:rotate-12 transition-transform" />
              <span className="text-white">WHATSAPP</span>
              <span className="ml-1.5 text-[10px] bg-black/60 border border-[#00E5FF]/40 px-1.5 py-0.5 rounded-full font-mono text-[#00E5FF]">
                {BRAND_INFO.phone}
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-[#070B14] border border-[#00E5FF]/30 text-gray-300 hover:text-[#00E5FF] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#070B14]/98 border-b border-cyan-500/20 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-2xl transition-all"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}

            <div className="pt-4 border-t border-gray-800/80 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to know more about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-rgbk-primary btn-anim-whatsapp group w-full py-3 rounded-xl text-sm font-bold shadow-lg cursor-pointer flex items-center justify-center hover:scale-102 transition-transform"
              >
                <MessageCircle className="w-5 h-5 mr-1.5 group-hover:rotate-12 transition-transform" />
                <span>Chat on WhatsApp ({BRAND_INFO.phone})</span>
              </a>

              {onOpenInquiry && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="btn-rgbk-secondary w-full py-2.5 rounded-xl text-sm font-semibold cursor-pointer hover:scale-102 transition-transform"
                >
                  Request a Project Quote
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
