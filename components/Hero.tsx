
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
      className="p-3 glass rounded-xl border border-white/20 backdrop-blur-md transition-all duration-500 hover:scale-110"
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
        
        if (dist < 120) {
          setBtnPos({ x: (e.clientX - centerX) * 0.25, y: (e.clientY - centerY) * 0.25 });
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
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-[10%] left-[5%] w-[50%] h-[50%] bg-primary/20 blur-[160px] animate-mesh rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[50%] bg-secondary/20 blur-[160px] animate-mesh rounded-full" style={{ animationDelay: '-8s' }}></div>
      </div>

      <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden mb-6">
             <span className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sky text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transform translate-y-full animate-reveal" style={{ animationDelay: '0.2s' }}>
              Digital Architect & Visual Surgeon
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-black text-accent leading-[0.85] tracking-tighter mb-10">
            <span className="block opacity-30 text-xl md:text-3xl lg:text-4xl tracking-[0.2em] transform -translate-x-5 mb-4 uppercase">
              Web Developer
            </span>
            <span 
              className="relative block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky animate-gradient-x bg-[length:200%_200%] transition-all duration-500 ease-out py-8 px-2"
              style={{
                filter: `drop-shadow(${mousePos.x * -10}px ${mousePos.y * -10}px 30px rgba(59, 130, 246, 0.4))`,
                transform: `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg) translateZ(60px)`
              }}
            >
              TAIBE
            </span>
          </h1>

          <p className="max-w-xl text-accent/50 text-xl font-light leading-relaxed mb-16">
            Engineered with <span className="text-primary italic font-medium">Full Stack</span> precision. 
            Infused with <span className="text-secondary italic font-medium">Graphic Design</span> soul.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a 
              ref={ctaRef}
              href="#projects" 
              className="group relative px-12 py-5 bg-gradient-to-r from-primary to-secondary text-accent font-black text-sm tracking-widest rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(251,78,160,0.5)] active:scale-95"
              style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
            >
              <span className="relative z-10 uppercase">Artifacts</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            
            <a 
              href="#contact" 
              className="px-12 py-5 glass border border-white/10 text-accent font-black text-sm tracking-widest rounded-full hover:bg-white/5 transition-all hover:border-white/30 uppercase"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="parallax-wrap relative">
            {/* Floating Icons with the new theme colors */}
            <FloatingIcon className="-top-12 left-10" delay="0s" glowColor="rgba(251, 78, 160, 0.7)">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </FloatingIcon>
            
            <FloatingIcon className="top-1/4 -right-14" delay="1s" glowColor="rgba(59, 130, 246, 0.7)">
              <span className="text-secondary font-black text-xs tracking-tighter">JS</span>
            </FloatingIcon>

            <FloatingIcon className="bottom-1/4 -left-16" delay="2s" glowColor="rgba(0, 243, 255, 0.7)">
              <svg className="w-6 h-6 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </FloatingIcon>

            <FloatingIcon className="-bottom-10 right-14" delay="1.5s" glowColor="rgba(251, 78, 160, 0.7)">
              <span className="text-primary font-black text-xs">{'<React />'}</span>
            </FloatingIcon>

            <div 
              className="group relative z-10 aspect-square max-w-[500px] mx-auto rounded-[4rem] overflow-hidden border border-white/5 transition-all duration-700 shadow-3xl cursor-pointer"
              style={{ transform: `rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)` }}
            >
              <img 
                src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                alt="Taibe Architecture" 
                className="w-full h-full object-cover scale-110 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
          
          <div className="absolute -top-10 -left-10 p-5 glass rounded-2xl border-white/10 animate-float shadow-2xl hidden lg:block">
            <div className="text-[9px] uppercase font-bold text-sky tracking-[0.3em] mb-1">Architecture // 01</div>
            <div className="text-accent font-black text-xs uppercase">Quantum.V3</div>
          </div>
        </div>
      </div>
    </section>
  );
};
