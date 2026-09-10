import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Layers,
  Settings,
  X,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { AdminLogin } from './AdminLogin';
import { AdminOverviewTab } from './AdminOverviewTab';
import { AdminInquiriesTab } from './AdminInquiriesTab';
import { AdminPortfolioTab } from './AdminPortfolioTab';
import { AdminServicesTab } from './AdminServicesTab';
import { AdminSettingsTab } from './AdminSettingsTab';
import { SukhenLogo } from '../SukhenLogo';

type TabType = 'overview' | 'inquiries' | 'portfolio' | 'services' | 'settings';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    closeAdmin,
    isAuthenticated,
    currentUser,
    logout,
    inquiries,
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<TabType>('overview');

  if (!isAdminOpen) return null;

  const newInquiriesCount = inquiries.filter((i) => i.status === 'NEW').length;

  const navItems = [
    { id: 'overview' as TabType, label: 'Overview', icon: LayoutDashboard },
    {
      id: 'inquiries' as TabType,
      label: 'Inquiries & Leads',
      icon: Users,
      badge: newInquiriesCount > 0 ? newInquiriesCount : undefined,
    },
    { id: 'portfolio' as TabType, label: 'Portfolio Works', icon: FolderKanban },
    { id: 'services' as TabType, label: 'Services Catalog', icon: Layers },
    { id: 'settings' as TabType, label: 'Studio Settings', icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#05080F]/95 backdrop-blur-2xl flex flex-col">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#070B14]/90 border-b border-cyan-500/20 px-4 sm:px-8 py-3.5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Portal Branding */}
          <div className="flex items-center gap-3">
            <SukhenLogo variant="mark" className="w-10 h-10 drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base text-white tracking-wide uppercase">
                  SUKHEN SARKAR
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  ADMIN CONSOLE
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">
                {currentUser ? `${currentUser.email}` : 'Security Gate'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated && (
              <button
                onClick={logout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-400 border border-gray-800 text-xs font-mono transition-colors cursor-pointer"
                title="Log out of admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}

            {/* Back to Live Site Button */}
            <button
              onClick={closeAdmin}
              className="btn-rgbk-secondary px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold gap-1.5 cursor-pointer shadow-sm inline-flex items-center"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to Site</span>
            </button>
          </div>

        </div>

        {/* Tab Navigation (Visible when logged in) */}
        {isAuthenticated && (
          <div className="max-w-7xl mx-auto pt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FF2A5F] text-white font-bold animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8">
        {!isAuthenticated ? (
          <AdminLogin />
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && (
              <AdminOverviewTab
                onNavigateTab={(tab) => setActiveTab(tab)}
                onOpenAddProject={() => setActiveTab('portfolio')}
              />
            )}
            {activeTab === 'inquiries' && <AdminInquiriesTab />}
            {activeTab === 'portfolio' && <AdminPortfolioTab />}
            {activeTab === 'services' && <AdminServicesTab />}
            {activeTab === 'settings' && <AdminSettingsTab />}
          </motion.div>
        )}
      </main>

      {/* Admin Footer */}
      <footer className="py-4 border-t border-gray-800 text-center text-xs font-mono text-gray-500">
        Sukhen Sarkar Creative Studio • Admin Console v2.0 • Session Encrypted
      </footer>

    </div>
  );
};
