
import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop");

  useEffect(() => {
    const saved = localStorage.getItem('yosh_portfolio_images');
    if (saved) {
      const urls = JSON.parse(saved);
      if (urls.hero) setHeroImage(urls.hero);
    }
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] -skew-x-12 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 space-y-10 relative z-10">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Strategic Learning Leader</span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] gradient-text">
            Superman <br />
            <span className="italic font-serif font-normal text-zinc-400">Impact</span> at <br />
            Scale.
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            I specialize in architecting advanced edtech innovations and rigorous instructional systems that empower over 5M+ learners across the Global South through high-fidelity pedagogical design and scalable cognitive frameworks.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center space-x-3 group shadow-xl shadow-white/5"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button 
              onClick={scrollToProjects}
              className="px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-all"
            >
              Superman
            </button>
          </div>
        </div>

        {/* Right: Asymmetric Layered Visual */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative z-20 group">
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
               <img 
                 src={heroImage} 
                 alt="Leadership and Learning" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Offset Decorative Frame */}
            <div className="absolute -inset-4 border border-white/10 rounded-[56px] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </div>

          {/* Accent Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
