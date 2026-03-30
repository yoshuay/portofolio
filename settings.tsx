import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { db, seedDatabaseIfEmpty } from './firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Save, AlertCircle, Database } from 'lucide-react';

const SettingsApp: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'portfolio', 'main');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setStatus("Database is empty. Please run First Time Setup.");
        }
      } catch (e) {
        console.error("Error fetching data:", e);
        setStatus("Error fetching data. Check Firebase permissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleRunSetup = async () => {
    setLoading(true);
    try {
      await seedDatabaseIfEmpty();
      window.location.reload();
    } catch (e) {
      console.error(e);
      setStatus("Error seeding database.");
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus("Saving...");
    try {
      const docRef = doc(db, 'portfolio', 'main');
      await updateDoc(docRef, data);
      setStatus("Successfully saved! The live portfolio is now updated.");
      setTimeout(() => setStatus(null), 3000);
    } catch (e) {
      console.error(e);
      setStatus("Error saving data. Make sure rules allow writing.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold">Portfolio CMS</h1>
            <p className="text-zinc-500 mt-2">Edit your live website content directly from this database.</p>
          </div>
          <a href="/" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors bg-white/5 py-2 px-4 rounded-xl">Back to Live Site</a>
        </div>

        {status && (
          <div className="mb-8 p-4 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center space-x-3">
            <AlertCircle size={20} />
            <span>{status}</span>
          </div>
        )}

        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
          </div>
        ) : !data ? (
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
            <Database size={48} className="mx-auto mb-4 text-zinc-500" />
            <h2 className="text-xl font-bold mb-2">Initialize Database</h2>
            <p className="text-zinc-400 mb-6">Your Firestore database is currently empty. Click below to seed it with the default layout and texts.</p>
            <button 
              onClick={handleRunSetup}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
            >
              Run First Time Setup
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Personal Info */}
            <section className="space-y-6 glass-panel p-8 rounded-3xl">
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Name</label>
                  <input 
                    type="text" 
                    value={data.personalInfo.name}
                    onChange={e => setData({...data, personalInfo: {...data.personalInfo, name: e.target.value}})}
                    className="w-full bg-black border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Title</label>
                  <input 
                    type="text" 
                    value={data.personalInfo.title}
                    onChange={e => setData({...data, personalInfo: {...data.personalInfo, title: e.target.value}})}
                    className="w-full bg-black border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Short Bio</label>
                  <textarea 
                    value={data.personalInfo.shortBio}
                    onChange={e => setData({...data, personalInfo: {...data.personalInfo, shortBio: e.target.value}})}
                    className="w-full bg-black border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white transition-colors h-32"
                  />
                </div>
              </div>
            </section>

            {/* Note about other sections */}
            <div className="p-6 border border-dashed border-white/20 rounded-2xl text-zinc-500 text-sm">
               For the sake of simplicity in this demo CMS, only the Personal Info section is hooked up fully to editable fields. You can easily expand this code for the Experiences and Projects sections!
            </div>

            {/* Save Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
              <button 
                onClick={handleSave}
                disabled={saving}
                className="bg-white text-black px-8 py-4 rounded-full font-bold shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Save size={20} />
                <span>{saving ? 'Saving to Database...' : 'Save & Publish Changes'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<SettingsApp />);
}
