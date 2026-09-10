import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Video, Palette, Zap } from 'lucide-react';

/**
 * Interactive floating creative software & tech badges for the Hero section
 */
export const FloatingCreativeBadges: React.FC = () => {
  return (
    <>
      {/* 1. Adobe Photoshop "Ps" Badge (Top Left of Right Grid) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden xl:flex absolute -top-8 -left-8 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#001E36]/90 border border-[#31A8FF]/40 backdrop-blur-md shadow-[0_0_20px_rgba(49,168,255,0.35)] animate-float-1 hover:scale-110 transition-transform cursor-pointer group select-none"
      >
        <div className="w-6 h-6 rounded-md bg-[#001E36] border border-[#31A8FF] flex items-center justify-center font-mono font-black text-xs text-[#31A8FF] shadow-[0_0_8px_#31A8FF]">
          Ps
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-white leading-none group-hover:text-[#31A8FF] transition-colors">
            Photoshop
          </span>
          <span className="text-[8px] font-mono text-cyan-300/80">Photo & Poster Art</span>
        </div>
        <Sparkles className="w-3 h-3 text-[#31A8FF] animate-pulse" />
      </motion.div>

      {/* 2. Adobe Illustrator "Ai" Badge (Top Right Edge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#331400]/90 border border-[#FF9A00]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,154,0,0.3)] animate-float-2 hover:scale-110 transition-transform cursor-pointer group select-none"
      >
        <div className="w-6 h-6 rounded-md bg-[#331400] border border-[#FF9A00] flex items-center justify-center font-mono font-black text-xs text-[#FF9A00] shadow-[0_0_8px_#FF9A00]">
          Ai
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-white leading-none group-hover:text-[#FF9A00] transition-colors">
            Illustrator
          </span>
          <span className="text-[8px] font-mono text-amber-300/80">Vector Logo Design</span>
        </div>
      </motion.div>

      {/* 3. Adobe Premiere Pro "Pr" / 4K Video Badge (Middle Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:flex absolute top-1/2 -left-10 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A002E]/90 border border-[#9999FF]/40 backdrop-blur-md shadow-[0_0_20px_rgba(153,153,255,0.3)] animate-float-3 hover:scale-110 transition-transform cursor-pointer group select-none"
      >
        <div className="w-6 h-6 rounded-md bg-[#1A002E] border border-[#9999FF] flex items-center justify-center font-mono font-black text-xs text-[#9999FF] shadow-[0_0_8px_#9999FF]">
          Pr
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF2A5F] animate-rec-blink" />
          <span className="text-[10px] font-mono font-bold text-white">4K Ad Editing</span>
        </div>
      </motion.div>

      {/* 4. Full-Stack Web Development Badge (Bottom Right Edge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="hidden sm:flex absolute -bottom-5 right-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#081020]/95 border border-[#00E5FF]/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.35)] animate-float-1 hover:scale-110 transition-transform cursor-pointer group select-none"
      >
        <div className="w-6 h-6 rounded-md bg-[#050D1A] border border-[#00E5FF] flex items-center justify-center font-mono font-black text-xs text-[#00E5FF] shadow-[0_0_8px_#00E5FF]">
          &lt;/&gt;
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-white leading-none group-hover:text-cyan-300 transition-colors">
              Custom Websites
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_5px_#00E676] animate-pulse" />
          </div>
          <span className="text-[8px] font-mono text-cyan-300">Fast React & Next.js</span>
        </div>
      </motion.div>
    </>
  );
};

/**
 * Ambient background floating sparkles for hero
 */
export const AmbientSparkles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sparkle 1 */}
      <div
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#00E5FF] blur-[1px] animate-pulse"
        style={{ animationDuration: '3s', opacity: 0.6 }}
      />
      {/* Sparkle 2 */}
      <div
        className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#FF2A5F] blur-[2px] animate-pulse"
        style={{ animationDuration: '4.5s', opacity: 0.5 }}
      />
      {/* Sparkle 3 */}
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#00E676] blur-[1px] animate-pulse"
        style={{ animationDuration: '3.8s', opacity: 0.6 }}
      />
      {/* Sparkle 4 */}
      <div
        className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-[#8B5CF6] blur-[2px] animate-pulse"
        style={{ animationDuration: '5s', opacity: 0.5 }}
      />
      {/* Sparkle 5 */}
      <div
        className="absolute top-20 right-1/3 w-1.5 h-1.5 rounded-full bg-[#FACC15] blur-[1px] animate-pulse"
        style={{ animationDuration: '2.5s', opacity: 0.7 }}
      />
    </div>
  );
};
