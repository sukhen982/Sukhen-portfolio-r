import React, { useState } from 'react';
import {
  Layers,
  Edit3,
  Trash2,
  PlusCircle,
  CheckCircle2,
  Star,
  X,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { ServiceItem } from '../../types';

export const AdminServicesTab: React.FC = () => {
  const { services, updateService, addService, deleteService } = useAdmin();

  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [formState, setFormState] = useState<Partial<ServiceItem>>({
    title: '',
    category: 'Digital Services',
    numberCode: '11',
    shortDesc: '',
    fullDesc: '',
    iconName: 'Sparkles',
    deliverables: ['Custom Deliverables', 'Quick Delivery', 'High Resolution Files'],
    popular: false,
    gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
  });

  const [deliverablesInput, setDeliverablesInput] = useState('Custom Deliverables, Quick Delivery, High Resolution Files');

  const handleOpenAdd = () => {
    setIsAddingNew(true);
    setEditingService(null);
    const nextNum = (services.length + 1).toString().padStart(2, '0');
    setFormState({
      title: '',
      category: 'Digital Services',
      numberCode: nextNum,
      shortDesc: '',
      fullDesc: '',
      iconName: 'Sparkles',
      deliverables: ['Custom Service Package', 'Dedicated Support', 'Fast Turnaround'],
      popular: false,
      gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
    });
    setDeliverablesInput('Custom Service Package, Dedicated Support, Fast Turnaround');
  };

  const handleOpenEdit = (svc: ServiceItem) => {
    setEditingService(svc);
    setIsAddingNew(false);
    setFormState(svc);
    setDeliverablesInput(svc.deliverables.join(', '));
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title) return;

    const parsedDeliverables = deliverablesInput.split(',').map((d) => d.trim()).filter(Boolean);

    if (isAddingNew) {
      const newSvc: ServiceItem = {
        id: `service-${Date.now()}`,
        numberCode: formState.numberCode || '10',
        title: formState.title.toUpperCase(),
        category: formState.category || 'Digital Services',
        shortDesc: formState.shortDesc || 'Professional creative and digital service.',
        fullDesc: formState.fullDesc || 'Tailored digital solutions engineered for client satisfaction.',
        iconName: formState.iconName || 'Sparkles',
        deliverables: parsedDeliverables.length ? parsedDeliverables : ['Deliverables included'],
        popular: !!formState.popular,
        gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
      };
      addService(newSvc);
    } else if (editingService) {
      const updated: ServiceItem = {
        ...editingService,
        ...formState,
        title: (formState.title || editingService.title).toUpperCase(),
        deliverables: parsedDeliverables,
      } as ServiceItem;
      updateService(updated);
    }

    setIsAddingNew(false);
    setEditingService(null);
  };

  const handleTogglePopular = (svc: ServiceItem) => {
    updateService({ ...svc, popular: !svc.popular });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0D1424] p-4 rounded-2xl border border-cyan-500/20 shadow-md">
        <div>
          <h3 className="font-heading font-black text-base text-white">
            Services & Offerings Catalog
          </h3>
          <p className="text-xs text-gray-400">
            {services.length} services configured for clients with direct WhatsApp inquiries
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-rgbk-primary px-4 py-2 rounded-xl text-xs font-bold gap-2 cursor-pointer shadow-md inline-flex items-center"
        >
          <PlusCircle className="w-4 h-4 text-[#070B14]" />
          <span>Add Custom Service</span>
        </button>
      </div>

      {/* Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-[#0D1424] border border-gray-800 hover:border-cyan-500/40 rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    #{svc.numberCode}
                  </span>
                  <span className="text-xs font-mono text-purple-300">
                    {svc.category}
                  </span>
                </div>

                <button
                  onClick={() => handleTogglePopular(svc)}
                  className={`flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                    svc.popular
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                      : 'bg-white/5 text-gray-500 border-gray-800 hover:text-gray-300'
                  }`}
                  title="Toggle Featured/Popular badge"
                >
                  <Star className={`w-3 h-3 ${svc.popular ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span>{svc.popular ? 'POPULAR' : 'Standard'}</span>
                </button>
              </div>

              <h4 className="font-heading font-black text-base text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {svc.title}
              </h4>

              <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                {svc.shortDesc}
              </p>

              {/* Deliverables tags */}
              <div className="space-y-1 mb-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                  Deliverables:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {svc.deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070B14] border border-gray-800 text-gray-300 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-gray-800 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(svc)}
                className="btn-rgbk-secondary px-3 py-1.5 rounded-xl text-xs font-semibold gap-1.5 cursor-pointer inline-flex items-center hover:text-cyan-300"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Service</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm(`Delete "${svc.title}" service?`)) {
                    deleteService(svc.id);
                  }
                }}
                className="p-1.5 rounded-xl bg-[#070B14] border border-red-500/20 text-gray-500 hover:text-red-400 hover:border-red-500 transition-colors"
                title="Delete Service"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Service Modal */}
      <AnimatePresence>
        {(isAddingNew || editingService) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => {
              setIsAddingNew(false);
              setEditingService(null);
            }}
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
                  {isAddingNew ? 'Add Custom Service' : `Edit: ${editingService?.title}`}
                </h3>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingService(null);
                  }}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveForm} className="space-y-4 text-xs">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="font-mono text-gray-300 block mb-1">Service Title *</label>
                    <input
                      type="text"
                      required
                      value={formState.title || ''}
                      onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                      placeholder="e.g. 3D PACKAGING DESIGN"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white uppercase"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-gray-300 block mb-1">Service #</label>
                    <input
                      type="text"
                      value={formState.numberCode || '11'}
                      onChange={(e) => setFormState({ ...formState, numberCode: e.target.value })}
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white font-mono text-center"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Category</label>
                  <input
                    type="text"
                    value={formState.category || ''}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    placeholder="e.g. Graphic & Branding"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Short Summary (Card Preview)</label>
                  <input
                    type="text"
                    value={formState.shortDesc || ''}
                    onChange={(e) => setFormState({ ...formState, shortDesc: e.target.value })}
                    placeholder="Crisp 1-2 sentence description"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Full Service Description</label>
                  <textarea
                    rows={3}
                    value={formState.fullDesc || ''}
                    onChange={(e) => setFormState({ ...formState, fullDesc: e.target.value })}
                    placeholder="Detailed explanation shown inside detail modal"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Deliverables (comma separated)</label>
                  <input
                    type="text"
                    value={deliverablesInput}
                    onChange={(e) => setDeliverablesInput(e.target.value)}
                    placeholder="e.g. HD Print Files, Source PSD, 24h Support"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="popular-checkbox"
                    checked={!!formState.popular}
                    onChange={(e) => setFormState({ ...formState, popular: e.target.checked })}
                    className="w-4 h-4 rounded text-cyan-400 bg-[#070B14] border-gray-700 focus:ring-cyan-400 cursor-pointer"
                  />
                  <label htmlFor="popular-checkbox" className="font-mono text-gray-300 cursor-pointer">
                    Highlight as <span className="text-amber-400 font-bold">Featured / Popular</span> service
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-gray-800">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingService(null);
                    }}
                    className="px-4 py-2 rounded-xl text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-rgbk-primary px-5 py-2 rounded-xl font-bold cursor-pointer"
                  >
                    {isAddingNew ? 'Create Service' : 'Save Service'}
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
