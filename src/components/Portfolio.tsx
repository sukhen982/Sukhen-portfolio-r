import React, { useState } from 'react';
import {
  Sparkles,
  Eye,
  MessageCircle,
  Film,
  ExternalLink,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  getWhatsAppUrl,
} from '../data/siteContent';
import { PortfolioCategory, PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { useAdmin } from '../context/AdminContext';
import { WebsiteMakingBadgeLogo, WebTechStackStrip } from './WebTechLogos';

export const Portfolio: React.FC = () => {
  const { portfolioItems: adminPortfolio } = useAdmin();
  const allItems = adminPortfolio && adminPortfolio.length > 0 ? adminPortfolio : PORTFOLIO_ITEMS;
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects =
    activeCategory === 'ALL'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#070B14]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            MY <span className="text-gradient-cyan">CREATIVE WORK</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Explore selected design and creative projects.
          </p>
        </motion.div>

        {/* Category Filter Tabs in RGBK Combined Style with Tactile Spring Transitions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'btn-rgbk-pill-active scale-105'
                    : 'bg-[#070B14] text-gray-400 hover:text-white border border-gray-800 hover:border-[#00E5FF]/50 hover:scale-105'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Dedicated Web Development Tech Showcase Banner when Website Making is selected */}
        {activeCategory === 'WEBSITE MAKING' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-10 p-5 rounded-2xl bg-[#0D1424] border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-4 shadow-xl"
          >
            <div className="shrink-0">
              <WebsiteMakingBadgeLogo size="md" />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="font-heading font-bold text-white text-base">
                  Modern Web Engines & Frameworks
                </h3>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30 self-start sm:self-auto">
                  100% Mobile Responsive • SEO Optimized
                </span>
              </div>
              <WebTechStackStrip compact={false} title="TECHNOLOGY LOGOS & STACK" />
            </div>
          </motion.div>
        )}

        {/* Portfolio Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-cyan-400/50 overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#070B14]/85 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Video indicator if video project */}
                  {project.videoUrl && (
                    <span className="absolute top-3 right-3 p-1.5 rounded-full bg-purple-600/80 text-white backdrop-blur-sm">
                      <Film className="w-3.5 h-3.5" />
                    </span>
                  )}

                  {/* Quick Overlay Action on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-xl btn-rgbk-secondary font-bold hover:scale-110 transition-transform cursor-pointer"
                      title="View Details"
                      aria-label="View Project"
                    >
                      <Eye className="w-5 h-5 text-[#00E5FF]" />
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello Sukhen Sarkar, I am interested in ordering a design like your portfolio item: "${project.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl btn-rgbk-primary font-bold hover:scale-110 transition-transform cursor-pointer"
                      title="Inquire on WhatsApp"
                      aria-label="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-5 h-5 fill-[#070B14]/20" />
                    </a>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* View Project Trigger Button */}
                  <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] font-mono text-gray-500">
                      {project.clientType}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Footer CTA with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-400 mb-4">
            Want custom graphic designs or advertisement videos crafted for your business?
          </p>
          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to discuss a custom design or video project from your portfolio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rgbk-primary btn-anim-whatsapp group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide gap-2.5 cursor-pointer shadow-xl inline-flex items-center"
          >
            <MessageCircle className="w-4 h-4 fill-[#070B14]/20 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
            <span>DISCUSS YOUR PROJECT ON WHATSAPP</span>
          </a>
        </motion.div>

      </div>

      {/* Fullscreen Project Lightbox Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
