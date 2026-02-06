
import React, { useEffect, useState } from 'react';

// Specialized SVG Icons for the Hero Orbit
const HeroIcons = {
  HTML: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.77l.19 2.19h9.46l-.285 3.007-3.955 1.103-3.954-1.103-.256-2.659H5.214l.53 6.05 6.255 1.733 6.255-1.733.82-8.588H6.59zM5.8 5.45l.235 2.622h12.35l.235-2.622H5.8z"/>
    </svg>
  ),
  JS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.105-.705 0-.525.21-.915.78-.915.585 0 .855.225 1.02.63.33.75 1.155.75 1.56.585.195-.105.3-.24.3-.54 0-1.29-1.23-1.755-2.385-1.755-1.335 0-2.43.6-2.43 2.1 0 .975.615 1.59 1.785 2.085.855.36 1.635.555 1.845 1.155.045.33.045.495.045.66 0 .87-.69 1.2-1.32 1.2-.825 0-1.26-.345-1.455-.945-.33-.735-1.185-.735-1.575-.585-.21.135-.315.33-.315.645 0 1.215 1 1.905 2.7 1.905 1.605 0 2.895-.735 2.895-2.475zm-11.231.258c-.195-.84-.57-1.305-1.335-1.305-.705 0-1.125.405-1.125.945 0 .915.51 1.185 1.23 1.32.33.075.645.15 1.14.225.81.12 1.74.315 1.74 1.815 0 1.755-1.395 2.31-3.135 2.31-1.605 0-2.79-.645-3.045-2.19-.105-.42-.51-.615-.81-.615-.285 0-.555.21-.555.585 0 .21.03.39.06.57.435 2.25 2.1 3.12 4.305 3.12 2.445 0 4.455-.855 4.455-3.48 0-1.545-.825-2.13-2.925-2.505z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M11.927 0C5.352 0 5.603 2.852 5.603 2.852l.005 2.947h6.427V6.21h-8.99s-3.04 0-3.04 4.349c0 4.349 2.704 4.547 2.704 4.547h1.616v-2.285s-.174-2.731 2.742-2.731h6.392s2.671-.07 2.671-2.585V2.852S16.474 0 11.927 0zm-3.322 1.442a.91.91 0 110 1.82.91.91.0 010-1.82zM12.073 24c6.575 0 6.324-2.852 6.324-2.852l-.005-2.947h-6.427v-.411h8.99s3.04 0 3.04-4.349c0-4.349-2.704-4.547-2.704-4.547h-1.616v2.285s.174 2.731-2.742 2.731H10.54s-2.671.07-2.671 2.585V21.148S7.526 24 12.073 24zm3.322-1.442a.91.91 0 110-1.82.91.91.0 010-1.82z"/>
    </svg>
  ),
  Ps: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M0 0v24h24V0H0zm9.356 16.295H7.728v-4.144H6.234V10.74h4.634v1.411H9.356v4.144zm5.552-2.565c0 .641-.186 1.16-.557 1.556-.371.396-.893.593-1.564.593-.243 0-.466-.026-.67-.078v1.314H10.61V8.657c.481-.076.994-.114 1.539-.114 1.002 0 1.769.191 2.3.573.531.382.797.973.797 1.774 0 .399-.074.743-.223 1.033a2.215 2.215 0 01-.615.807zm-2.791-2.483v1.896c.143.051.311.076.505.076.315 0 .565-.084.749-.253.184-.168.276-.438.276-.81 0-.301-.08-.535-.241-.703s-.404-.251-.727-.251c-.19 0-.376.015-.562.045z"/>
    </svg>
  ),
  Ai: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M0 0v24h24V0H0zm8.932 16.295H7.014l-.531-1.612H4.128l-.531 1.612H1.673l2.844-8.086h2.15l2.265 6.447v1.639zM6.024 13.34l-.698-2.115-.698 2.115h1.396zm8.139 2.955h-1.516V8.632h1.516v7.663zm-1.516-9.157h1.516V5.454h-1.516v1.684z"/>
    </svg>
  ),
  Canva: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.182 14.856c-1.22.42-2.583.633-4.088.633-1.42 0-2.613-.243-3.58-.727-.723-.36-1.085-.823-1.085-1.39 0-.256.09-.49.271-.7.243-.274.55-.472.924-.596.536-.183 1.15-.274 1.843-.274h2.176c1.152 0 1.728-.27 1.728-.813 0-.173-.06-.313-.182-.422-.243-.223-.623-.335-1.141-.335-1.002 0-1.503.21-1.503.633h-2.13c0-1.01.69-1.515 2.07-1.515 1.545 0 2.318.526 2.318 1.577v3.313c0 .356.12.533.363.533.155 0 .232-.123.232-.37v-.704h1.794v.85c0 .644-.333.966-1.002.966-.185 0-.277.104-.277.311.002.321.18.481.536.481z"/>
    </svg>
  ),
};

const OrbitIcon: React.FC<{ Icon: React.FC; color: string; delay: string; pos: string }> = ({ Icon, color, delay, pos }) => (
  <div 
    className={`absolute z-30 animate-float opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none ${pos}`}
    style={{ animationDelay: delay }}
  >
    <div 
      className="p-3 glass rounded-xl border border-white/20 flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-100"
      style={{ 
        color,
        boxShadow: `0 0 20px ${color}66, inset 0 0 10px rgba(255,255,255,0.05)`,
        filter: `drop-shadow(0 0 5px ${color})`
      }}
    >
      <Icon />
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
      setTilt({ x: x * 12, y: y * -12 });
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
          
          <h1 className="font-heading text-5xl md:text-8xl lg:text-[11rem] font-black text-accent leading-[0.85] tracking-tighter mb-10">
            <span className="block opacity-40 text-lg md:text-3xl lg:text-4xl tracking-[0.3em] mb-4 uppercase">
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

        {/* Right Side: Image with Orbiting Icons */}
        <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative group p-10">
            {/* Orbit Icons - Positioned relative to the group */}
            <OrbitIcon Icon={HeroIcons.HTML} color="#FB4EA0" delay="0s" pos="-top-4 left-1/4" />
            <OrbitIcon Icon={HeroIcons.CSS} color="#3B82F6" delay="1s" pos="top-1/4 -left-4" />
            <OrbitIcon Icon={HeroIcons.JS} color="#00F3FF" delay="0.5s" pos="bottom-1/4 -left-4" />
            <OrbitIcon Icon={HeroIcons.Python} color="#FB4EA0" delay="1.5s" pos="-bottom-4 left-1/3" />
            <OrbitIcon Icon={HeroIcons.Ps} color="#3B82F6" delay="2.2s" pos="top-1/3 -right-4" />
            <OrbitIcon Icon={HeroIcons.Ai} color="#FB4EA0" delay="0.8s" pos="bottom-1/3 -right-4" />
            <OrbitIcon Icon={HeroIcons.Canva} color="#00F3FF" delay="2.8s" pos="-top-4 right-1/4" />

            {/* Massive Glowing Aura behind the image */}
            <div className="absolute inset-[-20px] bg-gradient-to-r from-primary via-secondary to-sky rounded-[4rem] blur-[100px] opacity-20 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse-slow"></div>
            
            {/* Profile Frame */}
            <div 
              className="relative w-[300px] h-[380px] md:w-[450px] md:h-[550px] lg:w-[480px] lg:h-[620px] rounded-[3.5rem] overflow-hidden glass border-2 border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-all duration-700 transform"
              style={{ 
                transform: `perspective(2000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              <img 
                src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                alt="Taibe Profile" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/10 via-transparent to-sky/10 opacity-30 group-hover:opacity-0 transition-opacity"></div>
              
              <div className="absolute inset-0 pointer-events-none opacity-[0.1]" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(251, 78, 160, 0.05), rgba(0, 243, 255, 0.05), rgba(59, 130, 246, 0.05))',
                  backgroundSize: '100% 6px, 4px 100%'
                }}
              ></div>

              <div className="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col gap-3">
                <div className="px-4 py-1.5 glass rounded-xl border border-white/10 text-[9px] text-white/70 font-black uppercase tracking-[0.3em] backdrop-blur-xl">Subject: Taibe</div>
                <div className="px-4 py-1.5 glass rounded-xl border border-white/10 text-[9px] text-white/70 font-black uppercase tracking-[0.3em] backdrop-blur-xl">Class: Creator</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 px-6 py-3 glass rounded-2xl border border-sky/30 text-sky font-black text-[10px] tracking-widest uppercase animate-float shadow-[0_0_30px_rgba(0,243,255,0.2)]">
              Online // Active
            </div>
          </div>
        </div>
      </div>

      {/* Background Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[180px] pointer-events-none -z-10"></div>
    </section>
  );
};
