
import React, { useEffect, useState, useRef } from 'react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              {/* Main Image Card with Orb style glass */}
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass border-2 border-white/10 shadow-2xl transition-all duration-700 group-hover:rotate-1 bg-white/5">
                <img 
                  src="https://i.pinimg.com/736x/a5/19/52/a51952b60084d169d7a1b51efd18c5d4.jpg" 
                  alt="Taibe Profile" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80"></div>
                {/* Specular highlight for glass orb look */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
              </div>
              
              {/* Floating Stat Card with Entrance Animation */}
              <div className={`absolute -bottom-10 -right-6 md:-right-10 transition-all duration-1000 delay-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10'}`}>
                <div className="glass p-8 rounded-3xl border border-secondary/20 animate-float shadow-3xl backdrop-blur-3xl">
                  <div className="text-secondary text-5xl font-black font-heading mb-1 drop-shadow-glow">5+</div>
                  <div className="text-accent/40 text-[10px] font-black uppercase tracking-[0.3em]">Years of Evolution</div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className={`inline-block px-4 py-1.5 glass rounded-full border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Identity
            </div>
            <h3 className={`text-5xl md:text-7xl font-heading font-black text-accent mb-10 leading-[0.9] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Merging Code <br /> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-sky">High-Fidelity</span> Design
            </h3>
            
            <p className={`text-accent/60 text-xl leading-relaxed mb-12 font-light transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              I am Taibe, a digital architect specializing in the convergence of logic and aesthetics. 
              By combining high-performance <span className="text-accent font-bold">Full-Stack Engineering</span> with elite <span className="text-accent font-bold">Graphic Design</span>, 
              I build immersive environments that don't just function—they resonate.
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="p-8 rounded-[2.5rem] glass border-white/5 hover:bg-white/[0.05] transition-all group">
                <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-3">Development</h4>
                <p className="text-accent/40 text-xs leading-relaxed">Surgical precision with React, Node, and Python. Engineered for speed and scalability.</p>
              </div>
              <div className="p-8 rounded-[2.5rem] glass border-white/5 hover:bg-white/[0.05] transition-all group">
                <h4 className="text-sky font-black uppercase tracking-widest text-sm mb-3">Design</h4>
                <p className="text-accent/40 text-xs leading-relaxed">Vector mastery in Illustrator and pixel-perfect manipulation in Photoshop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
