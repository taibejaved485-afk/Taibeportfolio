
import React from 'react';

const projects = [
  {
    title: 'AHAD PORTFOLIO',
    category: 'Digital Identity',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Tailwind'],
    link: 'https://ahadportfolio-inky.vercel.app'
  },
  {
    title: 'AHMAD PORTFOLIO',
    category: 'Creative Showcase',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'Framer'],
    link: 'https://ahmadprotfolio.vercel.app'
  },
  {
    title: 'TECHSKOOP',
    category: 'Tech Platform',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Full Stack', 'Cloud'],
    link: 'https://techskoop.vercel.app'
  },
  {
    title: 'BRIDAL SALOON',
    category: 'Luxury E-Commerce',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    tags: ['UI/UX', 'Styling'],
    link: 'https://bridal-saloon.vercel.app'
  },
  {
    title: 'MOTRAL STUDIO',
    category: 'Agency Interface',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    tags: ['Web Design', 'Branding'],
    link: 'https://motral-web-studio.vercel.app'
  },
  {
    title: 'MOTRAL PARTICLES',
    category: 'Visual Experiment',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    tags: ['Three.js', 'Canvas'],
    link: 'https://motralparticles.vercel.app'
  },
  {
    title: 'PIZZA HUT MUREX',
    category: 'Food Interface',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'System Design'],
    link: 'https://pizza-hut-murex.vercel.app'
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
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[85vw] lg:w-full group relative cursor-pointer mr-8 lg:mr-0 block"
            >
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
                
                {/* External Link Indicator */}
                <div className="absolute top-8 right-8 w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="sm:hidden flex justify-center gap-1.5 opacity-20">
           {projects.map((_, i) => <div key={i} className="w-8 h-1 bg-white rounded-full"></div>)}
        </div>
      </div>
    </section>
  );
};
