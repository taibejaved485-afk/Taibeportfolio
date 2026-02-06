
import React from 'react';

const projects = [
  {
    title: 'AHAD PORTFOLIO',
    category: 'Digital Identity',
    image: 'https://i.pinimg.com/736x/26/5c/43/265c43038b3303cd2d2a87590f8b36c6.jpg',
    tags: ['React', 'Tailwind'],
    link: 'https://ahadportfolio-inky.vercel.app',
    glowColor: 'rgba(142, 117, 255, 0.4)', // Gemini Indigo
    gridClass: 'md:col-span-2 md:row-span-2' 
  },
  {
    title: 'AHMAD PORTFOLIO',
    category: 'Creative Showcase',
    image: 'https://i.pinimg.com/736x/96/4d/36/964d3602afbd96c076f212275c2b5e00.jpg',
    tags: ['Next.js', 'Framer'],
    link: 'https://ahmadprotfolio.vercel.app',
    glowColor: 'rgba(66, 133, 244, 0.4)', // Gemini Blue
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'TECHSKOOP',
    category: 'Tech Platform',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Full Stack', 'Cloud'],
    link: 'https://techskoop.vercel.app',
    glowColor: 'rgba(0, 241, 255, 0.4)', // Gemini Cyan
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'BRIDAL SALOON',
    category: 'Luxury E-Commerce',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    tags: ['UI/UX', 'Styling'],
    link: 'https://bridal-saloon.vercel.app',
    glowColor: 'rgba(142, 117, 255, 0.4)',
    gridClass: 'md:col-span-2 md:row-span-1'
  },
  {
    title: 'MG DESIGN X',
    category: 'Design Powerhouse',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
    tags: ['Branding', 'Web Design'],
    link: 'https://mgdesignx.com/',
    glowColor: 'rgba(66, 133, 244, 0.4)',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'TAIBE MART',
    category: 'Commerce Nexus',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    tags: ['E-Commerce', 'React'],
    link: 'http://taibemart.infinityfreeapp.com/',
    glowColor: 'rgba(0, 241, 255, 0.4)',
    gridClass: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'MOTRAL STUDIO',
    category: 'Agency Interface',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    tags: ['Web Design', 'Branding'],
    link: 'https://motral-web-studio.vercel.app',
    glowColor: 'rgba(142, 117, 255, 0.4)',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'MOTRAL PARTICLES',
    category: 'Visual Experiment',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    tags: ['Three.js', 'Canvas'],
    link: 'https://motralparticles.vercel.app',
    glowColor: 'rgba(66, 133, 244, 0.4)',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'PIZZA HUT MUREX',
    category: 'Food Interface',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'System Design'],
    link: 'https://pizza-hut-murex.vercel.app',
    glowColor: 'rgba(0, 241, 255, 0.4)',
    gridClass: 'md:col-span-2 md:row-span-1'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-12 pb-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-6">Archive of Excellence</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-black text-accent leading-none">Selected <br /><span className="opacity-30">Artifacts</span></h3>
          </div>
          <div className="hidden lg:flex items-center gap-4">
             <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-darkBg overflow-hidden glass">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest text-accent/40 ml-4">Trusted by <br /><span className="text-accent">20+ Innovators</span></p>
          </div>
        </div>

        {/* Bento Grid Layout with Orb Effects */}
        <div className="mobile-slider lg:grid lg:grid-cols-3 lg:grid-rows-auto gap-6 pb-12">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-[85vw] lg:w-full group relative cursor-pointer mr-6 lg:mr-0 block h-full rounded-[2.5rem] md:rounded-[3rem] ${project.gridClass}`}
            >
              {/* Orb Border Wrapper */}
              <div className="orb-border-wrap h-full rounded-[2.5rem] md:rounded-[3rem]">
                <div className="orb-inner h-full overflow-hidden flex flex-col">
                  
                  {/* Neon Light Glow Background */}
                  <div 
                    className="absolute inset-0 blur-[70px] rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                    style={{ backgroundColor: project.glowColor }}
                  ></div>

                  <div className="relative h-full min-h-[300px] lg:min-h-0 overflow-hidden glass transition-all duration-700 hover:scale-[0.985] bg-white/[0.02] flex flex-col">
                    {/* Background Image Container */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-125 group-hover:rotate-1 brightness-[0.4] group-hover:brightness-50"
                      />
                      
                      {/* Orb Inner Glow Highlight (Specular) */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="absolute inset-0 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/20 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700"></div>
                    </div>

                    <div className="relative flex-grow p-8 md:p-10 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-primary text-[9px] font-black tracking-[0.3em] uppercase mb-4">
                          {project.category}
                        </span>
                        <h4 className="text-xl md:text-3xl font-heading font-black text-accent mb-4 leading-tight">
                          {project.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 glass rounded-md text-[8px] text-accent/50 font-black tracking-widest uppercase border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* View Project Floating Button */}
                    <div className="absolute top-8 right-8 w-12 h-12 glass border border-white/10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 duration-500">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile Indicator */}
        <div className="lg:hidden flex justify-center gap-1.5 opacity-20 mt-8">
           {projects.map((_, i) => <div key={i} className="w-4 h-1 bg-white rounded-full"></div>)}
        </div>
      </div>
    </section>
  );
};
