
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 relative overflow-hidden bg-[#0D3034]/20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
              Let's build <br /> something <span className="text-neonCyan">Insane</span>.
            </h2>
            <p className="text-white/50 text-lg max-w-md mb-12">
              Ready to take your digital presence to the next dimension? I'm currently accepting new projects and collaborations.
            </p>
            
            <a 
              href="mailto:taibejaved485@gmail.com" 
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(251,78,160,0.4)]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">taibejaved485@gmail.com</span>
            </a>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-white/5 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <svg className="w-5 h-5 text-neonCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] mb-1">Call Me</div>
                <div className="text-white font-medium">03706487654</div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(251,78,160,0.1)]">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] mb-1">Location</div>
                <div className="text-white font-medium">Ghokhuwal 121JB, Faisalabad, Pakistan</div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex gap-6">
              <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-widest font-bold">Twitter</a>
              <a href="#" className="text-white/40 hover:text-neonCyan transition-colors text-sm uppercase tracking-widest font-bold">LinkedIn</a>
              <a href="#" className="text-white/40 hover:text-secondary transition-colors text-sm uppercase tracking-widest font-bold">Dribbble</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-heading font-bold tracking-tighter text-white">
            TAIBE <span className="text-primary">.</span>
          </div>
          <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} All rights reserved. Designed by TAIBE.
          </div>
        </div>
      </div>
    </footer>
  );
};
