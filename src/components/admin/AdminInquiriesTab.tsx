import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Phone,
  MessageCircle,
  Clock,
  Calendar,
  IndianRupee,
  FileText,
  Trash2,
  Edit3,
  Download,
  PlusCircle,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { InquiryRecord, InquiryStatus } from '../../types';

export const AdminInquiriesTab: React.FC = () => {
  const { inquiries, updateInquiryStatus, updateInquiryNotes, deleteInquiry, addInquiry } = useAdmin();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [notesInput, setNotesInput] = useState('');
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);

  // New Lead Form State
  const [newLead, setNewLead] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    service: 'Graphic Design',
    projectDetails: '',
    budget: '',
    deadline: '',
    referenceNotes: '',
  });

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.mobileNumber.includes(searchQuery) ||
      inq.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.projectDetails.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || inq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleOpenDetail = (inq: InquiryRecord) => {
    setSelectedInquiry(inq);
    setNotesInput(inq.adminNotes || '');
  };

  const handleSaveNotes = () => {
    if (selectedInquiry) {
      updateInquiryNotes(selectedInquiry.id, notesInput);
      setSelectedInquiry({ ...selectedInquiry, adminNotes: notesInput });
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Date', 'Full Name', 'Mobile', 'WhatsApp', 'Service', 'Budget', 'Deadline', 'Status', 'Details', 'Admin Notes'];
    const rows = inquiries.map((inq) => [
      inq.id,
      new Date(inq.createdAt).toLocaleDateString(),
      `"${inq.fullName.replace(/"/g, '""')}"`,
      inq.mobileNumber,
      inq.whatsappNumber,
      `"${inq.service.replace(/"/g, '""')}"`,
      `"${inq.budget || ''}"`,
      `"${inq.deadline || ''}"`,
      inq.status,
      `"${inq.projectDetails.replace(/"/g, '""')}"`,
      `"${(inq.adminNotes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `sukhen_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.fullName.trim() || !newLead.mobileNumber.trim()) return;

    addInquiry({
      fullName: newLead.fullName.trim(),
      mobileNumber: newLead.mobileNumber.trim(),
      whatsappNumber: newLead.whatsappNumber.trim() || newLead.mobileNumber.trim(),
      service: newLead.service,
      projectDetails: newLead.projectDetails.trim() || 'Direct client inquiry received via call.',
      budget: newLead.budget.trim() || 'Negotiable',
      deadline: newLead.deadline.trim() || 'Standard',
      referenceFileNote: newLead.referenceNotes.trim(),
      adminNotes: 'Manually logged by admin.',
    });

    setShowAddLeadModal(false);
    setNewLead({
      fullName: '',
      mobileNumber: '',
      whatsappNumber: '',
      service: 'Graphic Design',
      projectDetails: '',
      budget: '',
      deadline: '',
      referenceNotes: '',
    });
  };

  const statusOptions: InquiryStatus[] = ['NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'ARCHIVED'];

  return (
    <div className="space-y-6">
      
      {/* Top Controls: Search, Status Filter & Export */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0D1424] p-4 rounded-2xl border border-cyan-500/20 shadow-md">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, phone, service or keyword..."
            className="w-full bg-[#070B14] border border-gray-700 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Status Filters & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {['ALL', 'NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                statusFilter === status
                  ? 'bg-cyan-500 text-[#070B14] shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                  : 'bg-[#070B14] text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {status}
              {status === 'ALL' && ` (${inquiries.length})`}
              {status === 'NEW' && ` (${inquiries.filter((i) => i.status === 'NEW').length})`}
            </button>
          ))}

          <button
            onClick={() => setShowAddLeadModal(true)}
            className="btn-rgbk-primary px-3.5 py-1.5 rounded-xl text-xs font-bold gap-1.5 cursor-pointer shadow-md inline-flex items-center"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#070B14]" />
            <span>Add Lead</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="p-2 rounded-xl bg-[#070B14] border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            title="Export Leads as CSV"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Inquiries Cards / Table List */}
      {filteredInquiries.length === 0 ? (
        <div className="text-center py-16 bg-[#0D1424] rounded-2xl border border-gray-800 p-8">
          <Users className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <h4 className="text-base font-bold text-white mb-1">No Inquiries Found</h4>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            {searchQuery
              ? `No inquiries match "${searchQuery}". Try clearing search or status filters.`
              : 'Client inquiries submitted via the website form will appear here in real time.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredInquiries.map((inq) => {
            const dateStr = new Date(inq.createdAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={inq.id}
                className="bg-[#0D1424] border border-gray-800 hover:border-cyan-500/40 rounded-2xl p-4 sm:p-5 transition-all shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                {/* Left Client Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="font-heading font-bold text-base text-white">
                      {inq.fullName}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded-md">
                      {dateStr}
                    </span>

                    {/* Status Dropdown */}
                    <select
                      value={inq.status}
                      onChange={(e) => updateInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border cursor-pointer focus:outline-none ${
                        inq.status === 'NEW'
                          ? 'bg-red-500/20 text-red-300 border-red-500/40'
                          : inq.status === 'CONTACTED'
                          ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                          : inq.status === 'IN_PROGRESS'
                          ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                          : inq.status === 'COMPLETED'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-gray-500/20 text-gray-400 border-gray-500/40'
                      }`}
                    >
                      {statusOptions.map((st) => (
                        <option key={st} value={st} className="bg-[#070B14] text-white">
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service & Budget Tags */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 mb-2">
                    <span className="text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {inq.service}
                    </span>
                    {inq.budget && (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <IndianRupee className="w-3 h-3" /> {inq.budget}
                      </span>
                    )}
                    {inq.deadline && (
                      <span className="flex items-center gap-1 text-purple-300">
                        <Clock className="w-3 h-3" /> {inq.deadline}
                      </span>
                    )}
                  </div>

                  {/* Message Details Preview */}
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {inq.projectDetails}
                  </p>

                  {inq.adminNotes && (
                    <div className="mt-2 text-[11px] font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 rounded-lg">
                      <span className="font-bold">Admin Note:</span> {inq.adminNotes}
                    </div>
                  )}
                </div>

                {/* Right Action Quick Connect */}
                <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-800">
                  {/* WhatsApp Quick Reply */}
                  <a
                    href={`https://wa.me/91${inq.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.fullName}, thank you for inquiring with Sukhen Sarkar regarding "${inq.service}". Let's discuss your requirements!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rgbk-secondary px-3 py-2 rounded-xl text-xs font-mono font-bold gap-1.5 cursor-pointer inline-flex items-center"
                    title="Direct WhatsApp Message"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#00E676]" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>

                  {/* Phone Call */}
                  <a
                    href={`tel:${inq.mobileNumber}`}
                    className="p-2 rounded-xl bg-[#070B14] border border-gray-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    title={`Call ${inq.mobileNumber}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  {/* Full Detail Drawer Trigger */}
                  <button
                    onClick={() => handleOpenDetail(inq)}
                    className="p-2 rounded-xl bg-[#070B14] border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    title="View Full Lead Details & Notes"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  {/* Delete Inquiry */}
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete lead from ${inq.fullName}?`)) {
                        deleteInquiry(inq.id);
                      }
                    }}
                    className="p-2 rounded-xl bg-[#070B14] border border-red-500/20 text-gray-500 hover:text-red-400 hover:border-red-500 transition-colors"
                    title="Delete lead"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail & Notes Modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedInquiry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0D1424] border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                <div>
                  <h3 className="font-heading font-black text-lg text-white">
                    Lead Details: {selectedInquiry.fullName}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    ID: {selectedInquiry.id} • {new Date(selectedInquiry.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                {/* Contact Badges */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#070B14] border border-gray-800">
                  <div>
                    <span className="text-gray-500 font-mono block">Mobile Number:</span>
                    <a href={`tel:${selectedInquiry.mobileNumber}`} className="text-white font-mono font-bold hover:text-cyan-400">
                      {selectedInquiry.mobileNumber}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500 font-mono block">WhatsApp:</span>
                    <a
                      href={`https://wa.me/91${selectedInquiry.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-mono font-bold hover:underline"
                    >
                      {selectedInquiry.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 font-mono block mb-1">Service & Parameters:</span>
                  <div className="p-3 rounded-xl bg-[#070B14] border border-gray-800 space-y-1.5">
                    <p className="text-white font-bold text-sm text-cyan-400">{selectedInquiry.service}</p>
                    <p className="text-gray-300 font-mono">Budget: <span className="text-white">{selectedInquiry.budget || 'Flexible'}</span></p>
                    <p className="text-gray-300 font-mono">Deadline: <span className="text-white">{selectedInquiry.deadline || 'Flexible'}</span></p>
                    {selectedInquiry.referenceFileNote && (
                      <p className="text-gray-300 font-mono">Reference Assets: <span className="text-white">{selectedInquiry.referenceFileNote}</span></p>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 font-mono block mb-1">Project Description:</span>
                  <div className="p-3 rounded-xl bg-[#070B14] border border-gray-800 text-gray-200 leading-relaxed">
                    {selectedInquiry.projectDetails}
                  </div>
                </div>

                {/* Admin Internal Notes Section */}
                <div>
                  <label className="text-gray-400 font-mono block mb-1.5 font-bold flex items-center justify-between">
                    <span>Internal Follow-Up Notes:</span>
                    <span className="text-[10px] text-gray-500">Only visible to Sukhen</span>
                  </label>
                  <textarea
                    rows={3}
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                    placeholder="Add follow-up notes, quotation sent, meeting status..."
                    className="w-full bg-[#070B14] border border-gray-700 focus:border-cyan-400 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={handleSaveNotes}
                      className="btn-rgbk-primary px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Save Notes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Manual Lead Modal */}
      <AnimatePresence>
        {showAddLeadModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowAddLeadModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0D1424] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                <h3 className="font-heading font-black text-lg text-white">
                  Add New Client Lead
                </h3>
                <button
                  onClick={() => setShowAddLeadModal(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddManualLead} className="space-y-3.5">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newLead.fullName}
                    onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Ghosh"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={newLead.mobileNumber}
                      onChange={(e) => setNewLead({ ...newLead, mobileNumber: e.target.value })}
                      placeholder="9876543210"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={newLead.whatsappNumber}
                      onChange={(e) => setNewLead({ ...newLead, whatsappNumber: e.target.value })}
                      placeholder="Same as mobile"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Service</label>
                  <select
                    value={newLead.service}
                    onChange={(e) => setNewLead({ ...newLead, service: e.target.value })}
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                  >
                    <option value="Website Making">Website Making</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Advertisement Video">Advertisement Video</option>
                    <option value="Brand Promotion">Brand Promotion</option>
                    <option value="Menu Card">Menu Card</option>
                    <option value="ID Card & T-Shirt">ID Card & T-Shirt</option>
                    <option value="Online Work">Online Work</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Project Details</label>
                  <textarea
                    rows={2}
                    value={newLead.projectDetails}
                    onChange={(e) => setNewLead({ ...newLead, projectDetails: e.target.value })}
                    placeholder="Requirements and notes..."
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Estimated Budget</label>
                    <input
                      type="text"
                      value={newLead.budget}
                      onChange={(e) => setNewLead({ ...newLead, budget: e.target.value })}
                      placeholder="₹4,000"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Target Deadline</label>
                    <input
                      type="text"
                      value={newLead.deadline}
                      onChange={(e) => setNewLead({ ...newLead, deadline: e.target.value })}
                      placeholder="e.g. 3 Days"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-gray-800">
                  <button
                    type="button"
                    onClick={() => setShowAddLeadModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-rgbk-primary px-5 py-2 rounded-xl text-xs font-bold"
                  >
                    Save Lead
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
