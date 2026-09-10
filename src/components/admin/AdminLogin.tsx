import React, { useState } from 'react';
import { Lock, Mail, Key, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { SukhenLogo } from '../SukhenLogo';

export const AdminLogin: React.FC = () => {
  const { login } = useAdmin();
  const [email, setEmail] = useState('Sukhen982@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials. Use Sukhen982@gmail.com with password "admin123" or PIN "2026".');
    }
  };

  const handleQuickLogin = () => {
    login('Sukhen982@gmail.com', 'admin123');
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-[#0D1424] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 relative overflow-hidden"
      >
        {/* Background RGB glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF2A5F]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Brand Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#070B14] border border-cyan-500/30 mb-3 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <SukhenLogo variant="mark" className="w-12 h-12" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[#00E5FF] text-[11px] font-mono mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURE STUDIO ACCESS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-heading text-white tracking-wide">
            SUKHEN SARKAR ADMIN
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage inquiries, services, portfolio works & studio profile
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300"
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Sukhen982@gmail.com"
                className="w-full bg-[#070B14] border border-gray-700 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1.5">
              Password or PIN
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter password or PIN"
                className="w-full bg-[#070B14] border border-gray-700 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                required
              />
            </div>
            <p className="text-[10px] text-gray-500 mt-1 font-mono">
              Default password: <span className="text-cyan-400 font-bold">admin123</span> or PIN <span className="text-cyan-400 font-bold">2026</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full btn-rgbk-primary py-3 rounded-xl font-bold text-xs tracking-wider gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
          >
            <Lock className="w-4 h-4" />
            <span>LOGIN TO ADMIN PORTAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick One-Click Authentication for Sukhen */}
        <div className="mt-5 pt-4 border-t border-gray-800 text-center relative z-10">
          <p className="text-[11px] text-gray-400 mb-2">
            Verified Studio Owner?
          </p>
          <button
            type="button"
            onClick={handleQuickLogin}
            className="btn-rgbk-secondary w-full py-2.5 rounded-xl text-xs font-semibold gap-2 cursor-pointer inline-flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>1-Click Sign In as Sukhen Sarkar</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
