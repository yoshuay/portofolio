
import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from '../data';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const [urls, setUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('yosh_portfolio_images');
    if (saved) {
      setUrls(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('yosh_portfolio_images', JSON.stringify(urls));
    window.location.reload(); // Refresh to apply changes
  };

  const reset = () => {
    localStorage.removeItem('yosh_portfolio_images');
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-zinc-900 border-l border-white/10 h-full overflow-y-auto p-8 shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-bold">Customize Visuals</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full"><X size={20}/></button>
        </div>

        <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
          Paste your custom image URLs below to replace the defaults. Use links from LinkedIn, Imgur, or your personal site.
        </p>

        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Profile Image (Hero)</label>
            <input 
              type="text" 
              placeholder="Paste URL here..."
              value={urls['hero'] || ''}
              onChange={(e) => setUrls(p => ({...p, hero: e.target.value}))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <hr className="border-white/5" />

          {PROJECTS.map(proj => (
            <div key={proj.id} className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{proj.title} Image</label>
              <input 
                type="text" 
                placeholder="Paste URL here..."
                value={urls[proj.id] || ''}
                onChange={(e) => setUrls(p => ({...p, [proj.id]: e.target.value}))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 mt-12 pt-8 pb-4 bg-zinc-900 space-y-4">
          <button 
            onClick={handleSave}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all"
          >
            <Save size={18}/>
            <span>Save & Apply Changes</span>
          </button>
          <button 
            onClick={reset}
            className="w-full py-4 bg-white/5 text-zinc-400 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-white/10 transition-all"
          >
            <RotateCcw size={18}/>
            <span>Restore Defaults</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
