
import React, { useEffect, useState, useRef } from 'react';

interface FloatingIconProps {
  children: React.ReactNode;
  className: string;
  delay: string;
  glowColor?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ children, className, delay, glowColor = 'rgba(251, 78, 160, 0.5)' }) => (
  <div 
    className={`absolute z-20 animate-float hidden md:block ${className}`} 
    style={{ animationDelay: delay }}
  >
    <div 
      className="p-3 glass rounded-xl border border-white/20 backdrop-blur-md transition-all duration-500 hover:scale-110 group cursor-default"
      style={{ 
        boxShadow: `0 0 20px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.05)`,
        filter: `drop-shadow(0 0 8px ${glowColor})`
      }}
    >
      {children}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
      
      // Calculate tilt for the image card
      setTilt({ x: x * 15, y: y * -15 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-6 lg:px-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[10%] left-[5%] w-[60%] h-[60%] bg-primary/20 blur-[180px] animate-mesh rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[60%] h-[60%] bg-secondary/20 blur-[180px] animate-mesh rounded-full" style={{ animationDelay: '-10s' }}></div>
      </div>

      <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Content */}
        <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="overflow-hidden mb-8">
             <span className="inline-block px-6 py-2 rounded-full glass border border-sky/20 text-sky text-[11px] md:text-xs font-black tracking-[0.5em] uppercase transform translate-y-full animate-reveal">
              Next-Gen Digital Creator
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[11rem] font-black text-accent leading-[0.8] tracking-tighter mb-10">
            <span className="block opacity-40 text-xl md:text-3xl lg:text-4xl tracking-[0.3em] mb-4 uppercase">
              Full Stack Developer
            </span>
            <span 
              className="relative block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky animate-gradient-x bg-[length:200%_200%] py-4"
              style={{
                filter: `drop-shadow(${mousePos.x * -10}px ${mousePos.y * -10}px 30px rgba(251, 78, 160, 0.4))`,
              }}
            >
              TAIBE
            </span>
          </h1>

          <p className="max-w-xl text-accent/60 text-lg md:text-2xl font-light leading-relaxed mb-16">
            Architecting robust <span className="text-primary font-medium italic">Systems</span> and sculpting high-fidelity <span className="text-secondary font-medium italic">Visuals</span> for the digital elite.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-8">
            <a 
              href="#projects" 
              className="group relative w-full sm:w-auto px-16 py-6 bg-gradient-to-r from-primary to-secondary text-accent font-black text-sm tracking-widest rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(251,78,160,0.5)] active:scale-95 text-center"
            >
              <span className="relative z-10 uppercase">View Artifacts</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-16 py-6 glass border border-white/10 text-accent font-black text-sm tracking-widest rounded-2xl hover:bg-white/5 transition-all hover:border-white/30 uppercase text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative group">
            {/* Massive Glowing Aura behind the image */}
            <div className="absolute inset-[-40px] bg-gradient-to-r from-primary via-secondary to-sky rounded-[4rem] blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse-slow"></div>
            
            {/* Enormous Holographic Frame */}
            <div 
              className="relative w-[320px] h-[400px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[650px] rounded-[4rem] overflow-hidden glass border-2 border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-all duration-500 transform"
              style={{ 
                transform: `perspective(2000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              <img 
                src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                alt="Taibe Profile" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              
              {/* Overlay Holographic Elements */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/10 via-transparent to-sky/10 opacity-30"></div>
              
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15]" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(251, 78, 160, 0.1), rgba(0, 243, 255, 0.1), rgba(59, 130, 246, 0.1))',
                  backgroundSize: '100% 6px, 4px 100%'
                }}
              ></div>

              {/* Data Overlay */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="px-3 py-1 glass rounded-lg border border-white/10 text-[9px] text-white/60 font-black uppercase tracking-[0.2em]">Subject: Taibe</div>
                <div className="px-3 py-1 glass rounded-lg border border-white/10 text-[9px] text-white/60 font-black uppercase tracking-[0.2em]">Status: Evolution</div>
              </div>
            </div>

            {/* Floating Details around the image */}
            <div className="absolute -top-10 -right-10 px-6 py-4 glass rounded-3xl border border-sky/40 text-sky font-black text-sm tracking-widest uppercase animate-float shadow-[0_0_30px_rgba(0,243,255,0.3)]">
              Online // v3.1
            </div>
            
            <div className="absolute -bottom-8 -left-8 px-8 py-6 glass rounded-3xl border border-primary/40 text-primary font-black text-xs tracking-[0.3em] uppercase animate-float" style={{ animationDelay: '1s' }}>
              Level: Elite
            </div>
          </div>
        </div>
      </div>

      {/* Scattered Floating Tech Icons */}
      <FloatingIcon className="top-[10%] left-[45%]" delay="0s" glowColor="rgba(251, 78, 160, 0.6)">
        <span className="text-primary font-black text-xs uppercase">HTML</span>
      </FloatingIcon>
      <FloatingIcon className="top-[30%] left-[5%]" delay="1.5s" glowColor="rgba(59, 130, 246, 0.6)">
        <span className="text-secondary font-black text-xs uppercase">CSS</span>
      </FloatingIcon>
      <FloatingIcon className="bottom-[15%] left-[40%]" delay="2.2s" glowColor="rgba(0, 243, 255, 0.6)">
        <span className="text-sky font-black text-xs uppercase">JS</span>
      </FloatingIcon>
      <FloatingIcon className="top-[15%] right-[40%]" delay="0.8s" glowColor="rgba(251, 78, 160, 0.6)">
        <span className="text-primary font-black text-xs uppercase">Python</span>
      </FloatingIcon>
      <FloatingIcon className="bottom-[45%] right-[5%]" delay="3s" glowColor="rgba(59, 130, 246, 0.6)">
        <span className="text-secondary font-black text-xs uppercase">Ai</span>
      </FloatingIcon>
      <FloatingIcon className="top-[5%] right-[5%]" delay="1.2s" glowColor="rgba(0, 243, 255, 0.6)">
        <span className="text-sky font-black text-xs uppercase">Ps</span>
      </FloatingIcon>

      {/* Global Background Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
    </section>
  );
};
