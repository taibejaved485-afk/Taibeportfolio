
import React, { useEffect, useState, useRef } from 'react';

// Use React.FC with an explicit interface to ensure children are correctly typed and recognized by the JSX transformer
interface FloatingIconProps {
  children: React.ReactNode;
  className: string;
  delay: string;
  glowColor?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ children, className, delay, glowColor = 'rgba(147, 34, 158, 0.5)' }) => (
  <div 
    className={`absolute z-20 animate-float hidden md:block ${className}`} 
    style={{ animationDelay: delay }}
  >
    <div 
      className="p-3 glass rounded-xl border border-white/20 backdrop-blur-md transition-all duration-500 hover:scale-110"
      style={{ 
        boxShadow: `0 0 20px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.1)`,
        filter: `drop-shadow(0 0 5px ${glowColor})`
      }}
    >
      {children}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });

      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        
        if (dist < 100) {
          setBtnPos({ x: (e.clientX - centerX) * 0.3, y: (e.clientY - centerY) * 0.3 });
        } else {
          setBtnPos({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary blur-[150px] animate-mesh rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary blur-[150px] animate-mesh rounded-full" style={{ animationDelay: '-10s' }}></div>
      </div>

      <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden mb-6">
             <span className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 text-secondary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transform translate-y-full animate-reveal" style={{ animationDelay: '0.2s' }}>
              Digital Architect & Visual Surgeon
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-black text-accent leading-[0.85] tracking-tighter mb-10">
            <span className="block opacity-20 text-xl md:text-3xl lg:text-4xl tracking-[0.1em] transform -translate-x-5 mb-4 uppercase">
              Professional Web Developer
            </span>
            <span 
              className="relative block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x bg-[length:200%_200%] transition-all duration-500 ease-out py-8 px-2"
              style={{
                filter: `drop-shadow(${mousePos.x * -15}px ${mousePos.y * -15}px 25px rgba(147, 34, 158, 0.6))`,
                transform: `perspective(1000px) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg) translateZ(50px)`
              }}
            >
              TAIBE
            </span>
          </h1>

          <p className="max-w-xl text-accent/50 text-xl font-light leading-relaxed mb-16 transition-opacity duration-1000 delay-500">
            Engineered with <span className="text-primary italic">Full Stack</span> precision. 
            Infused with <span className="text-secondary italic">Graphic Design</span> soul.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            <a 
              ref={ctaRef}
              href="#projects" 
              className="group relative px-12 py-5 bg-primary text-accent font-black text-sm tracking-widest rounded-full overflow-hidden transition-transform duration-300 shadow-[0_0_30px_rgba(147,34,158,0.5)]"
              style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
            >
              <span className="relative z-10 uppercase">Explore Artifacts</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            
            <a 
              href="#contact" 
              className="px-12 py-5 glass border border-accent/10 text-accent font-black text-sm tracking-widest rounded-full hover:bg-accent/5 transition-all hover:border-accent/30"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="parallax-wrap relative">
            {/* Floating Coding Icons with Glow */}
            <FloatingIcon className="-top-10 left-10" delay="0s" glowColor="rgba(147, 34, 158, 0.6)">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </FloatingIcon>
            
            <FloatingIcon className="top-1/4 -right-12" delay="1s" glowColor="rgba(229, 150, 211, 0.6)">
              <span className="text-secondary font-black text-xs">JS</span>
            </FloatingIcon>

            <FloatingIcon className="bottom-1/4 -left-16" delay="2s" glowColor="rgba(243, 238, 240, 0.4)">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6.5l2.5 5h-5L12 6.5zm-5.5 10l2.5-5h5l2.5 5h-10z"/>
              </svg>
            </FloatingIcon>

            <FloatingIcon className="-bottom-8 right-12" delay="1.5s" glowColor="rgba(147, 34, 158, 0.6)">
              <span className="text-primary font-black text-xs">{'{}'}</span>
            </FloatingIcon>

            <div 
              className="group relative z-10 aspect-square max-w-[550px] mx-auto rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-500 shadow-2xl cursor-pointer"
              style={{ transform: `rotateY(${mousePos.x * 15}deg) rotateX(${mousePos.y * -15}deg)` }}
            >
              <img 
                src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                alt="Taibe Visual" 
                className="w-full h-full object-cover scale-110 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-transparent to-transparent group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute -top-12 -left-12 p-6 glass rounded-2xl border-primary/20 animate-float shadow-xl hidden lg:block">
            <div className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">System Status</div>
            <div className="text-accent font-black text-xs uppercase">Operational // V3.1</div>
          </div>
        </div>
      </div>
    </section>
  );
};
