
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Media', href: '#media' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[80] border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col group"
        >
          <span className="font-bold text-xl tracking-tighter text-white">Yoshua Yanottama.</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-hover:text-zinc-300 transition-colors">Strategic Learning Design</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3 text-zinc-400 hover:text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 space-y-6 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-bold tracking-tight text-white hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-5 bg-white text-black font-bold rounded-2xl"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
