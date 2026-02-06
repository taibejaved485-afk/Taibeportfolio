
import React from 'react';

const projects = [
  {
    title: 'XENON CORE',
    category: 'Full Stack Engine',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Web3']
  },
  {
    title: 'CYBER BRANDING',
    category: 'Aesthetic Identity',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI', 'Illustrator']
  },
  {
    title: 'NEON DASHBOARD',
    category: 'Visualization',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'D3.js']
  },
  {
    title: 'QUANTUM UI',
    category: 'Design System',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Figma', 'Tokens']
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-6">Archive of Excellence</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-black text-accent leading-none">Selected <br /><span className="opacity-30">Artifacts</span></h3>
          </div>
          <button className="hidden sm:block group relative px-10 py-4 glass border border-accent/10 rounded-full text-accent font-black text-xs tracking-widest transition-all">
            VIEW FULL ARCHIVE
          </button>
        </div>

        <div className="mobile-slider lg:grid lg:grid-cols-2 gap-16 pb-12">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] lg:w-full group relative cursor-pointer mr-8 lg:mr-0">
              <div className="relative aspect-[16/11] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-darkBg border border-white/5 transition-transform duration-700 hover:scale-[0.98]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-125 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-2xl md:text-5xl font-heading font-black text-accent mb-6 leading-tight">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 glass rounded-lg text-[8px] text-accent/60 font-black tracking-widest uppercase border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sm:hidden flex justify-center gap-1.5 opacity-20">
           {projects.map((_, i) => <div key={i} className="w-8 h-1 bg-white rounded-full"></div>)}
        </div>
      </div>
    </section>
  );
};
