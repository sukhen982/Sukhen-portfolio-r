import React, { useState } from 'react';
import {
  FolderKanban,
  PlusCircle,
  Edit3,
  Trash2,
  ExternalLink,
  Tag,
  Sparkles,
  X,
  Image as ImageIcon,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAdmin } from '../../context/AdminContext';
import { PortfolioItem, PortfolioCategory } from '../../types';

const CATEGORIES: PortfolioCategory[] = [
  'ALL',
  'WEBSITE MAKING',
  'GRAPHIC DESIGN',
  'ADVERTISEMENT VIDEO',
  'BRAND PROMOTION',
  'MENU CARD',
  'ID CARD',
  'T-SHIRT',
  'POSTER',
  'BANNER',
];

const PRESET_IMAGES = [
  { label: 'Restaurant Menu', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Corporate Website', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Product Video Ad', url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Branded T-Shirt', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Corporate ID Card', url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Festival Poster', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80' },
];

export const AdminPortfolioTab: React.FC = () => {
  const { portfolioItems, addPortfolioItem, updatePortfolioItem, deletePortfolioItem } = useAdmin();

  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Form State
  const [formState, setFormState] = useState<Partial<PortfolioItem>>({
    title: '',
    category: 'GRAPHIC DESIGN',
    categoryLabel: 'Graphic Design',
    shortDesc: '',
    fullDetails: '',
    imageUrl: PRESET_IMAGES[0].url,
    clientType: 'Local Business',
    aspect: 'square',
    tags: ['Design', 'Creative', 'Print'],
    deliverablesList: ['High-Res Vector PDF', 'Social Media PNG', 'Editable Source Files'],
  });

  const [tagsInput, setTagsInput] = useState('Design, Creative, Print');
  const [deliverablesInput, setDeliverablesInput] = useState('High-Res Vector PDF, Social Media PNG, Editable Source Files');

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'ALL' || item.category === selectedCategory
  );

  const handleOpenAdd = () => {
    setIsAddingNew(true);
    setEditingItem(null);
    setFormState({
      title: '',
      category: 'GRAPHIC DESIGN',
      categoryLabel: 'Graphic Design',
      shortDesc: '',
      fullDetails: '',
      imageUrl: PRESET_IMAGES[0].url,
      clientType: 'Local Business',
      aspect: 'square',
      tags: ['Design', 'Creative'],
      deliverablesList: ['Print Ready Files', 'Social Media Exports'],
    });
    setTagsInput('Design, Creative');
    setDeliverablesInput('Print Ready Files, Social Media Exports');
  };

  const handleOpenEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormState(item);
    setTagsInput(item.tags.join(', '));
    setDeliverablesInput(item.deliverablesList.join(', '));
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title || !formState.imageUrl) return;

    const parsedTags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const parsedDeliverables = deliverablesInput.split(',').map((d) => d.trim()).filter(Boolean);

    if (isAddingNew) {
      const newItem: PortfolioItem = {
        id: `port-${Date.now()}`,
        title: formState.title || 'Untitled Work',
        category: (formState.category as PortfolioCategory) || 'GRAPHIC DESIGN',
        categoryLabel: formState.category || 'Graphic Design',
        shortDesc: formState.shortDesc || 'Custom creative design crafted for client engagement.',
        fullDetails: formState.fullDetails || 'Comprehensive design and visual identity suite.',
        imageUrl: formState.imageUrl || PRESET_IMAGES[0].url,
        aspect: formState.aspect || 'square',
        tags: parsedTags.length ? parsedTags : ['Design'],
        clientType: formState.clientType || 'Commercial Client',
        deliverablesList: parsedDeliverables.length ? parsedDeliverables : ['Final Files'],
      };
      addPortfolioItem(newItem);
    } else if (editingItem) {
      const updated: PortfolioItem = {
        ...editingItem,
        ...formState,
        tags: parsedTags,
        deliverablesList: parsedDeliverables,
      } as PortfolioItem;
      updatePortfolioItem(updated);
    }

    setIsAddingNew(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0D1424] p-4 rounded-2xl border border-cyan-500/20 shadow-md">
        <div>
          <h3 className="font-heading font-black text-base text-white">
            Portfolio Showcase Manager
          </h3>
          <p className="text-xs text-gray-400">
            {portfolioItems.length} total works published on live site
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenAdd}
            className="btn-rgbk-primary px-4 py-2 rounded-xl text-xs font-bold gap-2 cursor-pointer shadow-md inline-flex items-center"
          >
            <PlusCircle className="w-4 h-4 text-[#070B14]" />
            <span>Add New Project</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-[#070B14] shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                : 'bg-[#0D1424] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0D1424] border border-gray-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between group transition-all"
          >
            {/* Image Preview */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            {/* Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-sm text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-2 mb-3">
                  {item.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">
                  {item.clientType}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-colors"
                    title="Edit Project"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete "${item.title}" from portfolio?`)) {
                        deletePortfolioItem(item.id);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-colors"
                    title="Delete Project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal */}
      <AnimatePresence>
        {(isAddingNew || editingItem) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => {
              setIsAddingNew(false);
              setEditingItem(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0D1424] border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                <h3 className="font-heading font-black text-lg text-white">
                  {isAddingNew ? 'Add New Portfolio Project' : `Edit: ${editingItem?.title}`}
                </h3>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingItem(null);
                  }}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveForm} className="space-y-4 text-xs">
                <div>
                  <label className="font-mono text-gray-300 block mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={formState.title || ''}
                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    placeholder="e.g. Royal Bengal Restaurant Menu Card"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-gray-300 block mb-1">Category</label>
                    <select
                      value={formState.category || 'GRAPHIC DESIGN'}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          category: e.target.value as PortfolioCategory,
                          categoryLabel: e.target.value,
                        })
                      }
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                    >
                      {CATEGORIES.filter((c) => c !== 'ALL').map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-gray-300 block mb-1">Client Concept / Industry</label>
                    <input
                      type="text"
                      value={formState.clientType || ''}
                      onChange={(e) => setFormState({ ...formState, clientType: e.target.value })}
                      placeholder="e.g. Dining & Hospitality"
                      className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                {/* Image URL & Presets */}
                <div>
                  <label className="font-mono text-gray-300 block mb-1">High-Res Image URL *</label>
                  <input
                    type="url"
                    required
                    value={formState.imageUrl || ''}
                    onChange={(e) => setFormState({ ...formState, imageUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white mb-2"
                  />

                  {/* Preset Image Chooser */}
                  <div className="p-2.5 rounded-xl bg-[#070B14] border border-gray-800">
                    <span className="text-[10px] font-mono text-gray-400 block mb-1.5">
                      Or select a curated preset image:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {PRESET_IMAGES.map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setFormState({ ...formState, imageUrl: preset.url })}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors cursor-pointer ${
                            formState.imageUrl === preset.url
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                              : 'bg-white/5 text-gray-400 border-gray-800 hover:text-white'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Short Description</label>
                  <input
                    type="text"
                    value={formState.shortDesc || ''}
                    onChange={(e) => setFormState({ ...formState, shortDesc: e.target.value })}
                    placeholder="Summary of project objective and visual appeal"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Full Details</label>
                  <textarea
                    rows={2}
                    value={formState.fullDetails || ''}
                    onChange={(e) => setFormState({ ...formState, fullDetails: e.target.value })}
                    placeholder="In-depth details, typography, color palette, outcome"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Deliverables (comma separated)</label>
                  <input
                    type="text"
                    value={deliverablesInput}
                    onChange={(e) => setDeliverablesInput(e.target.value)}
                    placeholder="e.g. Print PDF, Social PNG, Vector SVG"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="font-mono text-gray-300 block mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="e.g. Menu, Branding, Vector"
                    className="w-full bg-[#070B14] border border-gray-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-gray-800">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingItem(null);
                    }}
                    className="px-4 py-2 rounded-xl text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-rgbk-primary px-5 py-2 rounded-xl font-bold cursor-pointer"
                  >
                    {isAddingNew ? 'Create Project' : 'Save Changes'}
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
