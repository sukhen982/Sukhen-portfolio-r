import React from 'react';
import {
  Users,
  FolderKanban,
  Sparkles,
  Layers,
  MessageCircle,
  ArrowUpRight,
  Clock,
  TrendingUp,
  ShieldCheck,
  PlusCircle,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { getWhatsAppUrl } from '../../data/siteContent';

interface AdminOverviewTabProps {
  onNavigateTab: (tab: 'inquiries' | 'portfolio' | 'services' | 'settings') => void;
  onOpenAddProject: () => void;
}

export const AdminOverviewTab: React.FC<AdminOverviewTabProps> = ({
  onNavigateTab,
  onOpenAddProject,
}) => {
  const { inquiries, services, portfolioItems, brandInfo } = useAdmin();

  const newInquiriesCount = inquiries.filter((i) => i.status === 'NEW').length;
  const inProgressCount = inquiries.filter((i) => i.status === 'IN_PROGRESS').length;
  const completedCount = inquiries.filter((i) => i.status === 'COMPLETED').length;

  const stats = [
    {
      title: 'Total Inquiries',
      value: inquiries.length,
      subtext: `${newInquiriesCount} Pending Action`,
      icon: Users,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      badgeBg: 'bg-cyan-500/10',
      action: () => onNavigateTab('inquiries'),
    },
    {
      title: 'Active Services',
      value: services.length,
      subtext: 'Web, Design, Video, Print',
      icon: Layers,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/10',
      action: () => onNavigateTab('services'),
    },
    {
      title: 'Portfolio Showcase',
      value: portfolioItems.length,
      subtext: 'High-Converting Works',
      icon: FolderKanban,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/10',
      action: () => onNavigateTab('portfolio'),
    },
    {
      title: 'Client In-Progress',
      value: inProgressCount,
      subtext: `${completedCount} Delivered Projects`,
      icon: TrendingUp,
      color: 'text-[#FF2A5F]',
      borderColor: 'border-[#FF2A5F]/30',
      badgeBg: 'bg-[#FF2A5F]/10',
      action: () => onNavigateTab('inquiries'),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Studio Welcome & Quick Status Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0D1424] border border-cyan-500/20 shadow-lg">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-black text-lg text-white">
                Welcome back, Sukhen!
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Studio
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Admin console linked with <span className="text-cyan-300 font-mono">{brandInfo.email}</span> & WhatsApp <span className="text-emerald-300 font-mono">{brandInfo.phone}</span>
            </p>
          </div>
        </div>

        {/* Action Shortcuts */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAddProject}
            className="btn-rgbk-primary px-4 py-2 rounded-xl text-xs font-bold tracking-wide gap-1.5 cursor-pointer shadow-md inline-flex items-center"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#070B14]" />
            <span>Add Work</span>
          </button>

          <button
            onClick={() => onNavigateTab('inquiries')}
            className="btn-rgbk-secondary px-4 py-2 rounded-xl text-xs font-semibold gap-1.5 cursor-pointer inline-flex items-center"
          >
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>View Leads ({newInquiriesCount})</span>
          </button>
        </div>
      </div>

      {/* 4 Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={stat.action}
              className={`p-5 rounded-2xl bg-[#0D1424] border ${stat.borderColor} hover:border-white/30 transition-all cursor-pointer group shadow-md hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">
                  {stat.title}
                </span>
                <div className={`p-2 rounded-xl ${stat.badgeBg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-heading font-black text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] text-gray-400 font-mono">
                  {stat.subtext}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Two Column Section: Recent Inquiries & Quick Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Inquiries Preview (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0D1424] border border-cyan-500/20 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <h4 className="font-heading font-bold text-sm text-white">
                  Recent Client Inquiries
                </h4>
                {newInquiriesCount > 0 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF2A5F]/20 text-[#FF2A5F] border border-[#FF2A5F]/30 font-bold">
                    {newInquiriesCount} NEW
                  </span>
                )}
              </div>
              <button
                onClick={() => onNavigateTab('inquiries')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <span>View All Leads</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  className="p-3.5 rounded-xl bg-[#070B14] border border-gray-800 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-white truncate">
                        {inq.fullName}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                          inq.status === 'NEW'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : inq.status === 'IN_PROGRESS'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : inq.status === 'CONTACTED'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-xs text-cyan-300 font-mono truncate">
                      {inq.service} • Budget: {inq.budget || 'Flexible'}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                      {inq.projectDetails}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://wa.me/91${inq.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.fullName}, thank you for inquiring with Sukhen Sarkar regarding "${inq.service}". Let's discuss your requirements!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                      title="Chat with client on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Quick Portfolio Spotlight & Direct WhatsApp Link (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Portfolio Snapshot */}
          <div className="bg-[#0D1424] border border-cyan-500/20 rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-emerald-400" />
                <h4 className="font-heading font-bold text-sm text-white">
                  Portfolio Showcase
                </h4>
              </div>
              <button
                onClick={() => onNavigateTab('portfolio')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Manage ({portfolioItems.length})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {portfolioItems.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNavigateTab('portfolio')}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-black border border-gray-800 cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                    <span className="text-[10px] font-bold text-white line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick WhatsApp Beacon Diagnostic */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#0D1424] to-cyan-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-xs text-white uppercase tracking-wider">
                  Direct WhatsApp Bridge
                </h5>
                <p className="text-[11px] text-gray-300 font-mono truncate">
                  Target: +91 {brandInfo.phone}
                </p>
              </div>
              <a
                href={getWhatsAppUrl('Test ping from Admin Console')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#070B14] border border-gray-700 text-cyan-400 hover:border-cyan-400 text-xs font-mono"
                title="Test your WhatsApp link"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
