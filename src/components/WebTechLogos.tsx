import React from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

/**
 * Authentic SVG Vector Logos for modern Web Development
 */
export const TECH_LOGOS = [
  {
    name: 'React',
    color: '#00D8FF',
    bgColor: 'rgba(0, 216, 255, 0.1)',
    borderColor: 'rgba(0, 216, 255, 0.3)',
    description: 'High-speed interactive UI components',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 fill-current">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#FFFFFF',
    bgColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    description: 'SEO optimized fast server rendering',
    svg: (
      <svg viewBox="0 0 180 180" className="w-4 h-4 fill-current">
        <circle cx="90" cy="90" r="85" fill="#000" stroke="#FFF" strokeWidth="6" />
        <path
          d="M149.5 149.5L78.6 57.5H62v65h14V78.2l61.5 79.8a87.6 87.6 0 0012-8.5z"
          fill="#FFF"
        />
        <path d="M116 57.5h14v45.8l-14-17.7z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    description: 'Pixel-perfect modern bespoke styling',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#38BDF8]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'HTML5 & CSS3',
    color: '#F97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    description: 'Semantic & standards-compliant code',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#F97316]">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.438l.234-2.625H5.438L6.14 15.188l5.837 1.625 5.86-1.625.375-4.438H12.93l-.156 1.813-2.797.75-.031-.031-.016-.031-.156-1.532h5.719l-.312-3.562H8.531z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript & TS',
    color: '#FACC15',
    bgColor: 'rgba(250, 204, 21, 0.1)',
    borderColor: 'rgba(250, 204, 21, 0.3)',
    description: 'Modern ES6+ & TypeScript interactivity',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#FACC15]">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.554-1.288 0-.438.368-.783.92-.783.506 0 1.058.207 1.518.575l.897-1.426c-.667-.506-1.472-.783-2.415-.783-1.679 0-2.805 1.058-2.805 2.507 0 1.357.943 2.115 2.76 2.805.805.345 1.403.621 1.403 1.334 0 .575-.529.92-1.219.92-.851 0-1.541-.391-2.116-.92l-.966 1.38c.805.736 1.955 1.15 3.082 1.15 2.001 0 3.243-1.127 3.243-2.681h-.022zM12.022 17.54c0 .874-.322 1.38-1.035 1.38-.69 0-1.104-.46-1.449-.966l-1.334.92c.621 1.058 1.633 1.679 2.875 1.679 1.771 0 2.874-1.058 2.874-2.897V11.59h-1.931v5.95z" />
      </svg>
    ),
  },
  {
    name: 'WordPress & CMS',
    color: '#38BDF8',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    description: 'Easy-to-manage client content management',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#38BDF8]">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-.99 21.84c-4.492-.516-8.082-4.004-8.7-8.455l5.228 14.328c1.15.344 2.302.482 3.472.127zm7.544-12.753c.48.74.802 1.64.802 2.766 0 1.922-.962 3.844-2.245 6.087l-3.367-9.774c1.603 0 3.367-.16 3.367-.16.802 0 .802-1.122 0-1.122 0 0-.962.08-2.084.08h-.481c1.122-1.923 2.565-3.045 4.008-3.045.321 0 .641.08.802.16-1.764 1.442-2.726 3.367-2.726 5.008zM12 2.16c1.603 0 3.207.481 4.569 1.363-1.042.882-2.245 2.485-3.126 4.329L10.396 2.88c.48-.48 1.042-.72 1.604-.72zm-7.697 9.84c0-1.282.48-2.485 1.122-3.527l4.329 12.585C5.908 19.355 4.303 15.908 4.303 12zm7.697 9.84l-3.687-10.74c.802-.16 1.603-.16 2.405-.16.802 0 1.603 0 2.405.16L9.434 21.84c.802.16 1.603.16 2.566 0z" />
      </svg>
    ),
  },
];

/**
 * Beautiful Illuminated "Website Making" Icon with Browser Frame, Glowing Code Tag & Cyber Nodes
 */
export const WebsiteMakingBadgeLogo: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}> = ({ size = 'md', animated = true, className = '' }) => {
  const dim = size === 'sm' ? 44 : size === 'lg' ? 68 : 54;

  return (
    <div
      className={`relative flex items-center justify-center select-none group/logo ${className}`}
      style={{ width: dim, height: dim }}
    >
      {/* Radiant Cyan Glow Pulse in Background */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00E5FF]/30 via-[#00B4D8]/20 to-[#3B82F6]/30 blur-md ${
          animated ? 'animate-pulse' : ''
        }`}
      />

      {/* Cyber Browser Frame Container */}
      <div
        className="relative w-full h-full rounded-2xl bg-[#091122] border border-[#00E5FF]/50 p-1.5 flex flex-col justify-between shadow-[0_0_20px_rgba(0,229,255,0.35)] overflow-hidden transition-all duration-300 group-hover/logo:border-[#00E5FF] group-hover/logo:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
      >
        {/* Browser Top Navigation Bar with 3 Colored Window Dots */}
        <div className="flex items-center justify-between px-1 py-0.5 border-b border-[#00E5FF]/20 bg-[#060D1A]/80 rounded-t-lg">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A5F] shadow-[0_0_4px_#FF2A5F]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shadow-[0_0_4px_#FACC15]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_4px_#00E676]" />
          </div>
          {/* Subtle URL bar indicator */}
          <div className="w-8 h-1 rounded-full bg-[#00E5FF]/30" />
          <Sparkles className="w-2 h-2 text-[#00E5FF] animate-pulse" />
        </div>

        {/* Center Content: Floating Glowing Code Bracket & Globe */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          {/* Faint Grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:6px_6px] opacity-25" />

          <div className="relative flex items-center justify-center gap-0.5 text-[#00E5FF]">
            {/* Opening Code Bracket */}
            <span className="font-mono font-black text-xs sm:text-sm text-cyan-300 drop-shadow-[0_0_6px_rgba(0,229,255,0.8)]">
              &lt;
            </span>

            {/* Central Glowing Globe or Slash */}
            <div className="relative p-0.5">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00E5FF] animate-spin-slow" />
              <div className="absolute inset-0 bg-[#00E5FF]/20 rounded-full blur-sm" />
            </div>

            {/* Closing Code Bracket */}
            <span className="font-mono font-black text-xs sm:text-sm text-cyan-300 drop-shadow-[0_0_6px_rgba(0,229,255,0.8)]">
              /&gt;
            </span>
          </div>
        </div>

        {/* Bottom Status Bar with Tech Indicators */}
        <div className="flex items-center justify-between px-1 py-0.5 bg-[#060D1A]/90 rounded-b-lg text-[7px] font-mono font-bold text-[#00E5FF]/80">
          <span className="flex items-center gap-0.5">
            <Zap className="w-2 h-2 text-amber-400 fill-amber-400" />
            <span>99+</span>
          </span>
          <span className="text-[6px] tracking-wider text-cyan-200">WEB.DEV</span>
        </div>
      </div>

      {/* Floating Corner Mini Badges */}
      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#00E5FF] text-[#070B14] flex items-center justify-center text-[8px] font-black shadow-[0_0_8px_#00E5FF] border border-black font-mono">
        W
      </div>
    </div>
  );
};

/**
 * Modern Tech Logo Strip specifically highlighting the engines & tools used for Website Making
 */
export const WebTechStackStrip: React.FC<{
  title?: string;
  compact?: boolean;
}> = ({ title = 'BUILT WITH MODERN WEB ENGINES', compact = false }) => {
  return (
    <div className="w-full mt-3 pt-3 border-t border-cyan-500/20">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-1.5 uppercase">
            <Code2 className="w-3 h-3 text-[#00E5FF]" />
            {title}
          </span>
          <span className="text-[9px] font-mono text-gray-400">100% Custom Code</span>
        </div>
      )}

      {/* Logos Row */}
      <div className="flex flex-wrap items-center gap-1.5">
        {TECH_LOGOS.map((tech) => (
          <div
            key={tech.name}
            className="group/item relative flex items-center gap-1 px-2 py-1 rounded-md bg-[#081020] border border-cyan-500/20 hover:border-cyan-400 transition-all cursor-pointer hover:scale-105 shadow-sm"
            title={`${tech.name}: ${tech.description}`}
          >
            <div className="shrink-0">{tech.svg}</div>
            <span className="text-[10px] font-mono font-medium text-gray-200 group-hover/item:text-cyan-300 transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Key Guarantees Badges */}
      {!compact && (
        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
          <div className="flex items-center gap-1 px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-[9px] font-mono text-cyan-300">
            <Zap className="w-2.5 h-2.5 text-amber-400 shrink-0" />
            <span className="truncate">Ultra Fast Loading</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-[9px] font-mono text-cyan-300">
            <Smartphone className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">100% Mobile Ready</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-[9px] font-mono text-cyan-300">
            <ShieldCheck className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
            <span className="truncate">Free SSL & Domain Setup</span>
          </div>
        </div>
      )}
    </div>
  );
};
