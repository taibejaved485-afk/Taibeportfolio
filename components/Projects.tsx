
import React from 'react';

const projects = [
  {
    title: 'XENON CORE',
    category: 'Full Stack Engine',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Web3', 'Node']
  },
  {
    title: 'CYBER BRANDING',
    category: 'Aesthetic Identity',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI', 'Illustrator']
  },
  {
    title: 'NEON DASHBOARD',
    category: 'Data Visualization',
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-6">Archive of Excellence</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-accent leading-none">Selected <br /><span className="opacity-30">Artifacts</span></h3>
          </div>
          <button className="group relative px-10 py-4 glass border border-accent/10 rounded-full text-accent font-black text-xs tracking-widest transition-all hover:border-primary/50">
            VIEW FULL ARCHIVE
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-1/2 transition-all"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[16/11] rounded-[3.5rem] overflow-hidden bg-darkBg border border-white/5 transition-transform duration-700 hover:scale-[0.98]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-125 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Parallax Content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="overflow-hidden mb-4">
                     <span className="inline-block text-primary text-xs font-black tracking-[0.3em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-heading font-black text-accent mb-8 leading-tight transform group-hover:-translate-y-2 transition-transform duration-500">
                    {project.title}
                  </h4>

                  <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 glass rounded-xl text-[10px] text-accent font-black tracking-widest uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Reveal Details */}
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                   <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
