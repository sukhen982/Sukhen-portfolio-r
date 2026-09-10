import React, { useState } from 'react';
import {
  Play,
  Film,
  Sparkles,
  MessageCircle,
  X,
  Clock,
  CheckCircle2,
  Volume2,
  Maximize2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { VIDEO_SHOWCASE, getWhatsAppUrl } from '../data/siteContent';
import { VideoShowcaseItem } from '../types';

export const VideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);

  return (
    <section id="videos" className="relative py-24 bg-[#070B14] border-t border-cyan-500/10">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-purple-500/30 text-purple-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Film className="w-3.5 h-3.5 animate-pulse" />
            <span>CINEMATIC COMMERCIAL PRODUCTION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            VIDEO <span className="text-gradient-cyan">SHOWCASE</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            Creative Advertisement & Brand Promotion Videos
          </p>
        </motion.div>

        {/* Video Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {VIDEO_SHOWCASE.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-purple-500/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Thumbnail with Play Button */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video overflow-hidden bg-black cursor-pointer group/thumb"
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-80 group-hover/thumb:opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-black/30" />

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-gray-200 flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-purple-400" />
                  {video.duration}
                </span>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-purple-900/70 text-[10px] font-mono text-purple-200 border border-purple-500/30 backdrop-blur-sm">
                  {video.category}
                </span>

                {/* Play Button Overlay with Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.7)] group-hover/thumb:scale-115 group-hover/thumb:bg-cyan-400 group-hover/thumb:text-black transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {video.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {video.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131E36] text-gray-300 border border-gray-800"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Video Action Button with Bounce */}
                <button
                  onClick={() => setActiveVideo(video)}
                  className="btn-rgbk-secondary w-full py-2.5 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                >
                  <Play className="w-3.5 h-3.5 fill-[#00E5FF] text-[#00E5FF] group-hover/btn:scale-125 transition-transform" />
                  <span>WATCH VIDEO PREVIEW</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Showcase CTA with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0D1424] to-cyan-950/40 border border-purple-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              NEED AN ADVERTISEMENT OR PROMO VIDEO?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
              From Instagram Reels & Shorts to commercial brand explainers, get dynamic videos crafted for your business.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I would like to create an advertisement/promotional video for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            id="video-create-promo-btn"
            className="shrink-0 btn-rgbk-primary btn-anim-whatsapp group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide gap-2.5 cursor-pointer inline-flex items-center shadow-xl"
          >
            <MessageCircle className="w-5 h-5 fill-[#070B14]/20 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
            <span>CREATE MY PROMOTIONAL VIDEO</span>
          </a>
        </motion.div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0D1424] border border-purple-500/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#070B14]">
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {activeVideo.title}
                </h4>
                <p className="text-xs text-purple-400 font-mono">{activeVideo.category}</p>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.thumbnailUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-5 bg-[#070B14] border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 text-center sm:text-left">
                Ready to produce a high-converting promotional video like this?
              </p>

              <a
                href={getWhatsAppUrl(`Hello Sukhen Sarkar, I watched your video showcase "${activeVideo.title}" and would like to order a similar promo video for my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rgbk-primary w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs gap-2 cursor-pointer inline-flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-[#070B14]/20" />
                <span>Discuss This Video on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
