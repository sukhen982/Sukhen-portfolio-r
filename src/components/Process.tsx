import React from 'react';
import {
  MessageSquare,
  MessagesSquare,
  Wand2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/siteContent';

export const Process: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-cyan-400" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-6 h-6 text-purple-400" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-emerald-400" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-300" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#070B14]">
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
            <span>SIMPLE & TRANSPARENT WORKFLOW</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            HOW WE <span className="text-gradient-cyan">WORK TOGETHER</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium">
            From initial concept to pristine final delivery in 4 clear, stress-free steps.
          </p>
        </motion.div>

        {/* 4-Step Grid with Connectors and Staggered Motion */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-cyan-500/40 p-6 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_20px_rgba(0,229,255,0.12)]"
            >
              {/* Connector line for desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent z-20 pointer-events-none" />
              )}

              <div>
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#131E36] border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400 transition-all">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    STEP {step.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <h4 className="text-xs font-mono text-cyan-400 mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800/80">
                <p className="text-[11px] font-mono text-gray-400">
                  <strong className="text-gray-300">Deliverable:</strong> {step.deliverable}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA Button with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={getWhatsAppUrl('Hello Sukhen Sarkar, I want to start Step 1 (Contact & Discuss) for my creative project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rgbk-secondary btn-anim-whatsapp group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide gap-2.5 cursor-pointer inline-flex items-center shadow-xl hover:scale-105"
          >
            <span>START STEP 01 ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
