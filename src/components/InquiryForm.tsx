import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Paperclip,
  Clock,
  IndianRupee,
  FileText,
  User,
  Phone,
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteContent';

const SERVICES_LIST = [
  'Graphic Design',
  'Advertisement Video',
  'Brand Promotion',
  'Menu Card',
  'ID Card',
  'T-Shirt Design',
  'Social Media Design',
  'Printing Design',
  'Online Work',
  'Other',
];

interface InquiryFormProps {
  initialService?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    service: initialService || 'Graphic Design',
    projectDetails: '',
    budget: '',
    deadline: '',
    referenceNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your Full Name.');
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setErrorMessage('Please enter your Mobile Number.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMessage('Please enter your WhatsApp Number.');
      return;
    }
    if (!formData.projectDetails.trim()) {
      setErrorMessage('Please provide a brief description of your project.');
      return;
    }

    setIsSubmitted(true);
  };

  const formattedWhatsAppMsg = `*NEW PROJECT INQUIRY — SUKHEN SARKAR*
• *Name:* ${formData.fullName}
• *Mobile:* ${formData.mobileNumber}
• *WhatsApp:* ${formData.whatsappNumber}
• *Service:* ${formData.service}
• *Details:* ${formData.projectDetails}
• *Budget:* ${formData.budget || 'Not specified / Flexible'}
• *Deadline:* ${formData.deadline || 'Flexible'}
${formData.referenceNotes ? `• *Reference Note:* ${formData.referenceNotes}` : ''}`;

  return (
    <section id="inquiry" className="relative py-24 bg-[#070B14] border-t border-cyan-500/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1424] border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A NEW COLLABORATION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            PROJECT <span className="text-gradient-cyan">INQUIRY</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Tell me about your project requirements and receive a personalized response promptly.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative rounded-3xl bg-[#0D1424] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
          
          {isSubmitted ? (
            /* Submission Success State */
            <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  Thank you! Your project request has been received.
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto mt-2">
                  Sukhen Sarkar will review your project details and get in touch with you shortly.
                </p>
              </div>

              {/* Instant WhatsApp Handover */}
              <div className="pt-4 max-w-md mx-auto">
                <p className="text-xs font-mono text-cyan-300 mb-3">
                  Want an immediate reply? Send your filled request directly to WhatsApp:
                </p>

                <a
                  href={getWhatsAppUrl(formattedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>CONTACT DIRECTLY ON WHATSAPP</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-mono text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Active Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="WhatsApp number for communication"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Select Service *</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    {SERVICES_LIST.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#0D1424]">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Project Details *</span>
                </label>
                <textarea
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe your design, video, printing or digital requirements in detail..."
                  className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Optional Fields: Budget, Deadline, Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1">
                    <span>Budget (Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. ₹500 - ₹2000"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Deadline (Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    placeholder="e.g. Within 2 Days"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-1.5 flex items-center gap-1">
                    <Paperclip className="w-3.5 h-3.5 text-gray-400" />
                    <span>Reference / Links (Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="referenceNotes"
                    value={formData.referenceNotes}
                    onChange={handleChange}
                    placeholder="Drive link / reference info"
                    className="w-full bg-[#131E36] border border-gray-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-inquiry-btn"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND PROJECT REQUEST</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
