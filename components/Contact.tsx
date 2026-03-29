
import React from 'react';
import { Mail, Linkedin, MapPin, Phone, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS } from '../data';

const Contact: React.FC = () => {
  const handleDownloadCV = () => {
    // Generate a simple text-based CV
    const cvContent = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.contact.email}
LinkedIn: ${PERSONAL_INFO.contact.linkedin}
Phone: ${PERSONAL_INFO.contact.phone}
Location: ${PERSONAL_INFO.contact.location}

SUMMARY
--------------------------------------------------
${PERSONAL_INFO.summary}

EXPERIENCE
--------------------------------------------------
${EXPERIENCE.map(exp => `
${exp.role} at ${exp.company}
${exp.period} | ${exp.location}
${exp.achievements.map(a => `- ${a}`).join('\n')}
`).join('\n')}

KEY PROJECTS
--------------------------------------------------
${PROJECTS.map(proj => `
* ${proj.title} (${proj.category})
  ${proj.description}
`).join('\n')}

SKILLS
--------------------------------------------------
${PERSONAL_INFO.skills.join(', ')}
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yoshua_Yanottama_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-40 relative bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
           <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none">
             Let's scale <br />
             <span className="italic font-serif font-normal text-zinc-500">learning</span> together.
           </h2>
           <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
             I'm open to strategic leadership roles in Edtech, Corporate L&D consulting, and high-impact curriculum projects.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="p-10 glass-panel rounded-[40px] group transition-all hover:bg-white/5"
          >
             <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
               <Mail size={24} className="text-zinc-500 group-hover:text-white" />
             </div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</h4>
             <p className="text-lg font-bold text-zinc-200 truncate">{PERSONAL_INFO.contact.email}</p>
          </a>

          <a 
            href={`https://${PERSONAL_INFO.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-10 glass-panel rounded-[40px] group transition-all hover:bg-white/5"
          >
             <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
               <Linkedin size={24} className="text-zinc-500 group-hover:text-white" />
             </div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">LinkedIn</h4>
             <p className="text-lg font-bold text-zinc-200">Connect Profile</p>
          </a>

          <a 
            href={`tel:${PERSONAL_INFO.contact.phone.split(' / ')[0]}`}
            className="p-10 glass-panel rounded-[40px] group transition-all hover:bg-white/5"
          >
             <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
               <Phone size={24} className="text-zinc-500 group-hover:text-white" />
             </div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Phone</h4>
             <p className="text-lg font-bold text-zinc-200">Book a Call</p>
          </a>
        </div>

        <div className="mt-24 pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Based in Southeast Asia.</h3>
              <div className="flex items-center space-x-4 text-zinc-500 font-medium">
                 <MapPin size={18} />
                 <span>Jakarta, Indonesia • Taipei, Taiwan</span>
              </div>
           </div>
           
           <button 
             onClick={handleDownloadCV}
             className="px-10 py-6 bg-white text-black rounded-full font-bold text-lg flex items-center space-x-4 hover:scale-105 active:scale-95 transition-all"
           >
              <span>Download Digital CV</span>
              <Download size={20} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
