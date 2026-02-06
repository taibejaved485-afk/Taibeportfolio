
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass border-2 border-accent/10 shadow-[0_0_30px_rgba(229,150,211,0.1)] transition-all duration-500">
                <img 
                  src="https://i.pinimg.com/736x/a5/19/52/a51952b60084d169d7a1b51efd18c5d4.jpg" 
                  alt="About Profile" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-secondary/20 animate-float shadow-[0_0_20px_rgba(229,150,211,0.3)] backdrop-blur-xl">
                <div className="text-secondary text-4xl font-black font-heading mb-1">5+</div>
                <div className="text-accent/60 text-xs font-bold uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">The Identity</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-accent mb-8 leading-tight">
              Merging Code <br /> With <span className="text-secondary">Atmospheric Design</span>
            </h3>
            
            <p className="text-accent/70 text-lg leading-relaxed mb-8">
              Hi, I'm Taibe. I specialize in building digital experiences that demand attention. 
              By combining robust full-stack engineering with high-impact graphic design, I create products 
              that aren't just tools, but visual landmarks in the digital landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl glass border-accent/5 hover:border-primary/30 transition-all duration-300">
                <h4 className="text-primary font-bold mb-2">Development</h4>
                <p className="text-accent/50 text-sm">Responsive, fast, and scalable web solutions using modern stacks.</p>
              </div>
              <div className="p-6 rounded-2xl glass border-accent/5 hover:border-secondary/30 transition-all duration-300">
                <h4 className="text-secondary font-bold mb-2">Graphic Design</h4>
                <p className="text-accent/50 text-sm">Surgical precision in Adobe CC for branding and digital assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
