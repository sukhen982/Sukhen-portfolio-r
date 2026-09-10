import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/siteContent';
import { playPopSound } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleToggle = () => {
    if (!isOpen) {
      playPopSound();
    }
    setIsOpen((prev) => !prev);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend = customMsg.trim() || 'Hello Sukhen Sarkar, I am interested in your services. Please share the details.';
    window.open(getWhatsAppUrl(messageToSend), '_blank');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Message Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0D1424] border border-emerald-500/40 p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Card Top Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0D1424]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  Sukhen Sarkar
                </h4>
                <p className="text-[10px] text-emerald-400 font-mono">
                  Online • Typically replies instantly
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Simulation */}
          <div className="my-3 p-3 rounded-xl bg-[#131E36]/80 text-xs text-gray-200 border border-gray-800">
            <p className="font-medium text-white mb-1">Hi there! 👋</p>
            <p className="text-gray-300 leading-relaxed">
              How can I help you with your Graphic Design, Video, Menu, ID Card or Online Work today?
            </p>
          </div>

          {/* Quick Pre-filled Action Suggestions */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {[
              'Need Website Making',
              'Need Graphic Design',
              'Need Ad Video',
              'Menu Card Inquiry',
              'ID Card / T-Shirt',
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  playPopSound();
                  setCustomMsg(`Hello Sukhen Sarkar, I ${tag.toLowerCase()}. Please share details.`);
                }}
                className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 hover:bg-emerald-500/20 border border-gray-800 hover:border-emerald-500/30 text-gray-300 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input & Send Form */}
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#131E36] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs flex items-center justify-center transition-colors"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Beacon Button */}
      <button
        onClick={handleToggle}
        id="floating-whatsapp-btn"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Chat with Sukhen Sarkar on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
        <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono tracking-wider">WhatsApp</span>
        <span className="text-[11px] bg-black/30 px-2 py-0.5 rounded-full font-mono">
          {BRAND_INFO.phone}
        </span>
      </button>

    </aside>
  );
};
