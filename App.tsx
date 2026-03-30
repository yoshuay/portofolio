
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Newspaper, Building2, Calendar, Lightbulb, Target, Users, Settings, Loader2 } from 'lucide-react';
import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const App: React.FC = () => {
  const [dbData, setDbData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'portfolio', 'main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDbData(docSnap.data());
        } else {
          console.log("No such document! Run /settings.html setup.");
        }
      } catch (e) {
        console.error("Error fetching Firestore", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-white" size={48} />
      </div>
    );
  }

  // Fallback to empty context if missing
  const personalInfo = dbData?.personalInfo || { name: '', title: '', philosophy: [] };
  const experience = dbData?.experience || [];
  const mediaCoverages = dbData?.mediaCoverages || [];
  const projects = dbData?.projects || [];

  return (
    <div className="min-h-screen selection:bg-white/20">
      <Navbar />
      
      {/* Settings Trigger */}
      <a 
        href="settings.html"
        className="fixed top-28 right-6 z-[90] p-3 rounded-full glass-panel hover:bg-white/10 transition-all text-zinc-400 hover:text-white group"
        title="Customize Portfolio"
      >
        <Settings size={20} className="group-hover:rotate-45 transition-transform" />
      </a>

      <main>
        <Hero />
        
        {/* Design Philosophy Section */}
        <section className="py-24 bg-black overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3 space-y-6">
                <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Approach</span>
                <h2 className="text-5xl font-bold tracking-tighter leading-none">The Design <br /><span className="italic font-serif font-normal text-zinc-500">Philosophy</span></h2>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  Instructional design is more than content delivery—it's the architecture of human potential.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalInfo.philosophy.map((item: any, i: number) => (
                  <div key={i} className="p-10 glass-panel rounded-[40px] space-y-4 hover:border-white/20 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                      {i === 0 ? <Target size={20} /> : i === 1 ? <Users size={20} /> : <Lightbulb size={20} />}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectSection projects={projects} />

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-l border-white/10 pl-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Professional Experience</h2>
                <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">A decade of EdTech leadership</p>
              </div>
              <div className="hidden md:block w-full md:w-1/3 h-[1px] bg-white/10 mb-2"></div>
            </div>

            <div className="space-y-12">
              {experience.map((exp: any, idx: number) => (
                <div key={idx} className="group glass-panel border-white/5 p-8 sm:p-12 rounded-[32px] hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8 lg:items-start justify-between">
                    <div className="space-y-4 lg:max-w-md">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-3xl font-bold leading-none text-white">{exp.role}</h3>
                      <div className="flex items-center space-x-2 text-zinc-500 font-semibold text-sm">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Selected Impact</h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((item: string, i: number) => (
                          <li key={i} className="flex items-start space-x-4">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></div>
                            <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section id="media" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">Media Coverage</h2>
                <p className="text-zinc-500 leading-relaxed">
                  Insights and features on teacher academy programs, AR/VR implementation, and educational expansion in the Global South.
                </p>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/media${i}/100/100`} alt="Media logo" className="grayscale hover:grayscale-0 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mediaCoverages.map((media: any, idx: number) => (
                  <a 
                    key={idx} 
                    href={media.url}
                    className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all group flex flex-col h-full"
                  >
                    <Newspaper size={24} className="mb-6 text-zinc-500 group-hover:text-white transition-colors" />
                    <h3 className="text-lg font-bold mb-3 leading-snug flex-grow">{media.title}</h3>
                    <p className="text-sm text-zinc-500">{media.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Chatbot />

      <footer className="py-12 border-t border-white/5 text-center bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-1">
             <span className="text-white font-bold text-sm tracking-tight">{personalInfo.name || 'Yoshua Yanottama'}</span>
             <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">{personalInfo.title || 'Edtech & Learning Leader'}</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Terms</a>
            <span className="text-zinc-600 text-xs">© 2024 Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
