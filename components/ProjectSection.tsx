
import React, { useEffect, useState } from 'react';
import { ArrowRight, X, ChevronRight, Activity } from 'lucide-react';
import { Project } from '../types';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('yosh_portfolio_images');
    if (saved) {
      setCustomImages(JSON.parse(saved));
    }
  }, []);

  const getImageUrl = (project: Project) => {
    return customImages[project.id] || project.imageUrl;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleRequestDeck = () => {
    setSelectedProject(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
             <span className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">Portfolio of Work</span>
             <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter">Featured <span className="italic font-serif font-normal text-zinc-400">Cases</span></h2>
          </div>
          <p className="text-zinc-500 max-w-sm font-medium leading-relaxed">
            Scalable educational frameworks, high-impact curriculum localization, and immersive learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer glass-panel rounded-[40px] overflow-hidden p-4 card-hover transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-8 relative shrink-0">
                <img 
                  src={getImageUrl(project)} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                   <div className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <span>Explore Case</span>
                     <ChevronRight size={16} />
                   </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 space-y-4 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">{project.category}</span>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-[9px] px-2 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-400 font-bold uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl h-fit max-h-[90vh] overflow-y-auto glass-panel border-white/10 rounded-[48px] shadow-2xl animate-in zoom-in-95 fade-in duration-300">
            {/* Close Button Inside Modal */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-[120] p-4 rounded-full bg-white/5 hover:bg-white text-zinc-400 hover:text-black transition-all"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-8 sm:p-16 lg:p-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                  <div className="space-y-12 order-2 lg:order-1">
                     <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 block">{selectedProject.category}</span>
                        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-[0.85] text-white">{selectedProject.title}</h2>
                     </div>
                     
                     <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">The Challenge & Solution</h4>
                        <p className="text-xl text-zinc-300 leading-relaxed font-light">
                           {selectedProject.description}
                        </p>
                     </div>
                     
                     <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Impact Highlights</h4>
                        <ul className="grid grid-cols-1 gap-6">
                           {selectedProject.details?.map((detail, idx) => (
                             <li key={idx} className="flex items-start space-x-6 p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-white/10 transition-colors">
                                <span className="text-zinc-600 font-serif italic text-2xl shrink-0">0{idx + 1}</span>
                                <span className="text-base text-zinc-300 leading-relaxed">{detail}</span>
                             </li>
                           ))}
                        </ul>
                     </div>

                     <div className="pt-8">
                        <button 
                          onClick={handleRequestDeck}
                          className="w-full py-6 bg-white text-black rounded-3xl font-bold flex items-center justify-center space-x-3 group hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
                        >
                           <span>Request Full Case Deck</span>
                           <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                     </div>
                  </div>

                  <div className="space-y-10 order-1 lg:order-2 lg:sticky lg:top-0">
                     <div className="rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative">
                        <img src={getImageUrl(selectedProject)} alt={selectedProject.title} className="w-full aspect-[4/5] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-6">
                        <div className="p-10 bg-white/5 border border-white/5 rounded-[40px] text-center space-y-2">
                           <Activity size={24} className="mx-auto text-blue-500 mb-2" />
                           <span className="text-[10px] uppercase font-bold text-zinc-600 block tracking-widest">Global Scale</span>
                           <span className="text-3xl font-bold text-white">5M+ Users</span>
                        </div>
                        <div className="p-10 bg-white/5 border border-white/5 rounded-[40px] text-center space-y-2">
                           <Activity size={24} className="mx-auto text-green-500 mb-2" />
                           <span className="text-[10px] uppercase font-bold text-zinc-600 block tracking-widest">Efficiency</span>
                           <span className="text-3xl font-bold text-white">50% Inc</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
