
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const serviceData = [
  {
    title: 'Web Development',
    description: 'Bespoke full-stack applications built with React, Node.js, and Python. Scalable, secure, and future-proof codebases.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#8E75FF',
    tag: 'Advanced Coding'
  },
  {
    title: 'WordPress Solutions',
    description: 'Expert WordPress ecosystem development. Custom themes, plugin optimization, and headless WP architectures.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: '#4285F4',
    tag: 'CMS Architecture'
  },
  {
    title: 'Speed Optimization',
    description: 'Lightning-fast load times. Core Web Vitals optimization to ensure your site hits 100/100 on PageSpeed Insights.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#00F1FF',
    tag: 'Performance'
  },
  {
    title: 'Website Design',
    description: 'High-fidelity UI/UX design focusing on Gen-Z aesthetics. Immersive layouts that convert visitors into loyal users.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#8E75FF',
    tag: 'Visual UI'
  },
  {
    title: 'Logo & Branding',
    description: 'Memorable brand identities. Vector-perfect logos and comprehensive design systems built with Illustrator and Photoshop.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: '#4285F4',
    tag: 'Graphic Design'
  },
  {
    title: 'Landing Pages',
    description: 'High-conversion sales funnels. Optimized layouts designed to drive results and maximize your ROI.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    color: '#00F1FF',
    tag: 'Conversion'
  }
];

const FloatingBox: React.FC<{ delay: string; left: number; top: number; size: string; color: string }> = ({ delay, left, top, size, color }) => (
  <div 
    className="absolute pointer-events-none opacity-10 animate-float"
    style={{ 
      left: `${left}%`, 
      top: `${top}%`, 
      animationDelay: delay,
      width: size,
      height: size,
      border: `2px solid ${color}`,
      boxShadow: `0 0 20px ${color}`
    }}
  />
);

const ServiceCard: React.FC<{ service: typeof serviceData[0]; index: number }> = ({ service, index }) => (
  <ScrollReveal delay={index * 150} className="flex-shrink-0 w-[280px] md:w-[340px] h-[420px] mx-4 rounded-[2.5rem] group relative">
    {/* Orb Border Wrapper */}
    <div className="orb-border-wrap h-full rounded-[2.5rem]">
      <div className="orb-inner h-full overflow-hidden flex flex-col glass p-8 transition-all duration-500 hover:bg-white/[0.04]">
        <div 
          className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shrink-0"
          style={{ 
            color: service.color,
            boxShadow: `0 0 25px ${service.color}44` 
          }}
        >
          {service.icon}
        </div>

        <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">
          {service.tag}
        </div>
        
        <h3 className="text-xl font-heading font-black text-white mb-3">
          {service.title}
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <button className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-white group-hover:text-sky transition-colors mt-auto">
          Acquire Service
          <svg className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Specular Top Highlight */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div 
          className="absolute -bottom-8 -right-8 w-24 h-24 blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
          style={{ backgroundColor: service.color }}
        ></div>
      </div>
    </div>
  </ScrollReveal>
);

export const Services: React.FC = () => {
  const tripledServices = [...serviceData, ...serviceData, ...serviceData];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingBox delay="0s" left={5} top={20} size="30px" color="#8E75FF" />
        <FloatingBox delay="2s" left={85} top={10} size="45px" color="#4285F4" />
        <FloatingBox delay="4s" left={40} top={80} size="25px" color="#00F1FF" />
        <FloatingBox delay="1s" left={70} top={60} size="40px" color="#8E75FF" />
        <FloatingBox delay="3s" left={15} top={90} size="15px" color="#4285F4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <ScrollReveal className="flex flex-col items-center text-center">
          <div className="px-4 py-1.5 glass rounded-full border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-4">
            Monetized Skills
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight mb-6">
            Premium <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky">Solutions</span>
          </h2>
          <p className="text-white/40 max-w-lg text-base italic">
            "Turning vision into digital gold through precision engineering and visual storytelling."
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Slider Section */}
      <div className="services-slider-container relative w-full overflow-hidden py-6">
        <div className="services-track flex animate-scroll w-fit">
          {tripledServices.map((service, idx) => (
            <ServiceCard key={`service-${idx}`} service={service} index={idx % serviceData.length} />
          ))}
        </div>
        
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-darkBg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-darkBg to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 text-center mt-8">
        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] animate-pulse-slow">
          Scroll horizontally or hover to inspect artifact details
        </p>
      </div>
    </section>
  );
};
