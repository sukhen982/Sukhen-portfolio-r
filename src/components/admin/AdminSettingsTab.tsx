import React, { useState } from 'react';
import {
  Settings,
  Phone,
  MessageCircle,
  Mail,
  User,
  Sparkles,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Globe,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';

export const AdminSettingsTab: React.FC = () => {
  const { brandInfo, updateBrandInfo, resetToDefaults } = useAdmin();

  const [formData, setFormData] = useState({
    name: brandInfo.name,
    phone: brandInfo.phone,
    rawPhone: brandInfo.rawPhone,
    email: brandInfo.email,
    taglinePrimary: brandInfo.taglinePrimary,
    taglineSecondary: brandInfo.taglineSecondary,
    aboutBio: brandInfo.aboutBio,
    instagram: brandInfo.socials.instagram,
    facebook: brandInfo.socials.facebook,
    youtube: brandInfo.socials.youtube,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRawPhone = formData.phone.replace(/[^0-9]/g, '');
    const cleanFormatted = cleanRawPhone.length === 10 ? `91${cleanRawPhone}` : cleanRawPhone;

    updateBrandInfo({
      name: formData.name,
      phone: formData.phone,
      rawPhone: cleanFormatted,
      email: formData.email,
      taglinePrimary: formData.taglinePrimary,
      taglineSecondary: formData.taglineSecondary,
      aboutBio: formData.aboutBio,
      socials: {
        ...brandInfo.socials,
        instagram: formData.instagram,
        facebook: formData.facebook,
        youtube: formData.youtube,
      },
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all inquiries, portfolio works, and services back to initial defaults?'
      )
    ) {
      resetToDefaults();
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] p-5 rounded-2xl border border-cyan-500/20 shadow-md">
        <div>
          <h3 className="font-heading font-black text-base text-white">
            Studio & Brand Information
          </h3>
          <p className="text-xs text-gray-400">
            Updating these settings updates all header phone links, WhatsApp buttons, email, and bio sitewide.
          </p>
        </div>

        {savedSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings Saved!</span>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        
        {/* Core Profile Card */}
        <div className="bg-[#0D1424] border border-gray-800 rounded-2xl p-5 space-y-4 shadow-md">
          <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2 pb-3 border-b border-gray-800">
            <User className="w-4 h-4 text-cyan-400" />
            <span>Primary Profile & Contact Identity</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-gray-300 block mb-1">Owner / Creator Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white"
              />
            </div>

            <div>
              <label className="font-mono text-gray-300 block mb-1">Official Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-gray-300 block mb-1">
                WhatsApp & Calling Phone Number (10 Digits)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#070B14] border border-gray-700 rounded-xl pl-10 pr-3.5 py-2.5 text-white font-mono font-bold"
                />
              </div>
              <p className="text-[10px] text-gray-500 font-mono mt-1">
                Currently linked to WhatsApp wa.me/91{formData.phone.replace(/[^0-9]/g, '')}
              </p>
            </div>

            <div>
              <label className="font-mono text-gray-300 block mb-1">Studio Primary Tagline</label>
              <input
                type="text"
                value={formData.taglinePrimary}
                onChange={(e) => setFormData({ ...formData, taglinePrimary: e.target.value })}
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-gray-300 block mb-1">About Biography</label>
            <textarea
              rows={3}
              value={formData.aboutBio}
              onChange={(e) => setFormData({ ...formData, aboutBio: e.target.value })}
              className="w-full bg-[#070B14] border border-gray-700 rounded-xl p-3 text-white leading-relaxed"
            />
          </div>
        </div>

        {/* Social Links Card */}
        <div className="bg-[#0D1424] border border-gray-800 rounded-2xl p-5 space-y-4 shadow-md">
          <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2 pb-3 border-b border-gray-800">
            <Globe className="w-4 h-4 text-purple-400" />
            <span>Social & Public Links</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-mono text-gray-300 block mb-1">Instagram URL</label>
              <input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                placeholder="https://instagram.com/..."
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white font-mono"
              />
            </div>

            <div>
              <label className="font-mono text-gray-300 block mb-1">Facebook URL</label>
              <input
                type="url"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                placeholder="https://facebook.com/..."
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white font-mono"
              />
            </div>

            <div>
              <label className="font-mono text-gray-300 block mb-1">YouTube URL</label>
              <input
                type="url"
                value={formData.youtube}
                onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                placeholder="https://youtube.com/..."
                className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Overrides</span>
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto btn-rgbk-primary px-6 py-2.5 rounded-xl font-bold gap-2 cursor-pointer shadow-lg inline-flex items-center justify-center"
          >
            <Save className="w-4 h-4 text-[#070B14]" />
            <span>Save All Brand Changes</span>
          </button>
        </div>

      </form>
    </div>
  );
};
