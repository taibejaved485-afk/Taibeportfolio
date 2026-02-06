
import React from 'react';

const strategyPoints = [
  {
    title: 'Fast Delivery',
    description: 'Optimization is my second nature. I utilize high-performance frameworks and pre-built design systems to ship artifacts at warp speed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#00F3FF'
  },
  {
    title: 'Clean & Modern',
    description: 'Pixel-perfect aesthetics. I follow a strict minimal philosophy where every line of code and every hex color serves a specific purpose.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: '#FB4EA0'
  },
  {
    title: 'Mobile-First',
    description: 'The majority of the web is mobile. I ensure every component feels native and fluid on touch devices before scaling to desktop.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: '#3B82F6'
  },
  {
    title: 'Client Strategy',
    description: 'I dont just build; I consult. We align your business goals with digital architecture to ensure the final product delivers real value.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#F3EEF0'
  }
];

export const Partner: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 glass rounded-full border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-6">
              Collaboration
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-10">
              Partner <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky">With Me</span>
            </h2>
            
            <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Working with me is more than just a transaction; it's a strategic alliance. I approach every project with a "mission-critical" mindset, ensuring that your vision is translated into a robust, high-performance digital environment.
              </p>
              <p>
                Whether you're a startup looking to disrupt the market or an established brand seeking a visual overhaul, I bring a blend of technical expertise and creative intuition to the table. Let's create something that doesn't just work—it inspires.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strategyPoints.map((point, idx) => (
              <div key={idx} className="p-8 glass border-white/5 rounded-3xl hover:bg-white/[0.03] transition-colors group">
                <div 
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ color: point.color, boxShadow: `0 0 20px ${point.color}33` }}
                >
                  {point.icon}
                </div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-3">{point.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
