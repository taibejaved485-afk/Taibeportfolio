
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "taibejaved485@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden bg-darkBg border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          
          {/* Left Side: Massive Call to Action */}
          <div className="flex flex-col justify-center">
            <div className="inline-block px-4 py-1 rounded-full glass border border-primary/20 mb-6 w-fit">
              <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">Available for Hire</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-10 leading-[0.9] tracking-tighter">
              Ready to <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky">Level Up?</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-md mb-12 font-light leading-relaxed">
              I'm currently scouting for bold projects that push the boundaries of digital reality. Let's make it legendary.
            </p>

            {/* Interactive Email Button */}
            <div className="relative group w-fit">
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-6 glass p-2 pr-8 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(251,78,160,0.4)] group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
                    {copied ? 'Copied to Clipboard!' : 'Click to Copy Email'}
                  </span>
                  <span className="text-xl md:text-2xl font-black text-white tracking-tight">{email}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Contact Details & Socials */}
          <div className="grid grid-cols-1 gap-8">
            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-10 relative overflow-hidden group">
              {/* Subtle inner glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-2xl glass border border-sky/20 flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(0,243,255,0.1)]">
                  <svg className="w-6 h-6 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/30 font-black uppercase tracking-[0.3em] mb-2">Voice Comms</div>
                  <div className="text-xl font-bold text-white tracking-tight">03706487654</div>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-2xl glass border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(251,78,160,0.1)]">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/30 font-black uppercase tracking-[0.3em] mb-2">Base Coordinates</div>
                  <div className="text-xl font-bold text-white tracking-tight">Ghokhuwal 121JB, Faisalabad, PK</div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 flex flex-wrap gap-4">
                {['LinkedIn', 'Twitter', 'Dribbble', 'GitHub'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="px-6 py-3 rounded-2xl glass border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-3xl font-heading font-black tracking-tighter text-white">
              TAIBE<span className="text-primary">.</span>
            </div>
            <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.5em]">
              Architecting the Digital Future
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Pulse Systems. All rights reserved.
            </div>
            <div className="text-[8px] text-white/10 font-black uppercase tracking-[0.4em]">
              Crafted by TAIBE // Faisalabad, Pakistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
