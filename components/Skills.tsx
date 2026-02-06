
import React, { useState } from 'react';

// SVG Icons as components for cleaner usage
const Icons = {
  HTML: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.77l.19 2.19h9.46l-.285 3.007-3.955 1.103-3.954-1.103-.256-2.659H5.214l.53 6.05 6.255 1.733 6.255-1.733.82-8.588H6.59zM5.8 5.45l.235 2.622h12.35l.235-2.622H5.8z"/>
    </svg>
  ),
  JS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.105-.705 0-.525.21-.915.78-.915.585 0 .855.225 1.02.63.33.75 1.155.75 1.56.585.195-.105.3-.24.3-.54 0-1.29-1.23-1.755-2.385-1.755-1.335 0-2.43.6-2.43 2.1 0 .975.615 1.59 1.785 2.085.855.36 1.635.555 1.845 1.155.045.33.045.495.045.66 0 .87-.69 1.2-1.32 1.2-.825 0-1.26-.345-1.455-.945-.33-.735-1.185-.735-1.575-.585-.21.135-.315.33-.315.645 0 1.215 1 1.905 2.7 1.905 1.605 0 2.895-.735 2.895-2.475zm-11.231.258c-.195-.84-.57-1.305-1.335-1.305-.705 0-1.125.405-1.125.945 0 .915.51 1.185 1.23 1.32.33.075.645.15 1.14.225.81.12 1.74.315 1.74 1.815 0 1.755-1.395 2.31-3.135 2.31-1.605 0-2.79-.645-3.045-2.19-.105-.42-.51-.615-.81-.615-.285 0-.555.21-.555.585 0 .21.03.39.06.57.435 2.25 2.1 3.12 4.305 3.12 2.445 0 4.455-.855 4.455-3.48 0-1.545-.825-2.13-2.925-2.505z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.927 0C5.352 0 5.603 2.852 5.603 2.852l.005 2.947h6.427V6.21h-8.99s-3.04 0-3.04 4.349c0 4.349 2.704 4.547 2.704 4.547h1.616v-2.285s-.174-2.731 2.742-2.731h6.392s2.671-.07 2.671-2.585V2.852S16.474 0 11.927 0zm-3.322 1.442a.91.91 0 110 1.82.91.91 0 010-1.82zM12.073 24c6.575 0 6.324-2.852 6.324-2.852l-.005-2.947h-6.427v-.411h8.99s3.04 0 3.04-4.349c0-4.349-2.704-4.547-2.704-4.547h-1.616v2.285s.174 2.731-2.742 2.731H10.54s-2.671.07-2.671 2.585V21.148S7.526 24 12.073 24zm3.322-1.442a.91.91 0 110-1.82.91.91 0 010-1.82z"/>
    </svg>
  ),
  Photoshop: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M0 0v24h24V0H0zm9.356 16.295H7.728v-4.144H6.234V10.74h4.634v1.411H9.356v4.144zm5.552-2.565c0 .641-.186 1.16-.557 1.556-.371.396-.893.593-1.564.593-.243 0-.466-.026-.67-.078v1.314H10.61V8.657c.481-.076.994-.114 1.539-.114 1.002 0 1.769.191 2.3.573.531.382.797.973.797 1.774 0 .399-.074.743-.223 1.033a2.215 2.215 0 01-.615.807zm-2.791-2.483v1.896c.143.051.311.076.505.076.315 0 .565-.084.749-.253.184-.168.276-.438.276-.81 0-.301-.08-.535-.241-.703s-.404-.251-.727-.251c-.19 0-.376.015-.562.045z"/>
    </svg>
  ),
  Illustrator: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M0 0v24h24V0H0zm8.932 16.295H7.014l-.531-1.612H4.128l-.531 1.612H1.673l2.844-8.086h2.15l2.265 6.447v1.639zM6.024 13.34l-.698-2.115-.698 2.115h1.396zm8.139 2.955h-1.516V8.632h1.516v7.663zm-1.516-9.157h1.516V5.454h-1.516v1.684z"/>
    </svg>
  ),
  Canva: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.182 14.856c-1.22.42-2.583.633-4.088.633-1.42 0-2.613-.243-3.58-.727-.723-.36-1.085-.823-1.085-1.39 0-.256.09-.49.271-.7.243-.274.55-.472.924-.596.536-.183 1.15-.274 1.843-.274h2.176c1.152 0 1.728-.27 1.728-.813 0-.173-.06-.313-.182-.422-.243-.223-.623-.335-1.141-.335-1.002 0-1.503.21-1.503.633h-2.13c0-1.01.69-1.515 2.07-1.515 1.545 0 2.318.526 2.318 1.577v3.313c0 .356.12.533.363.533.155 0 .232-.123.232-.37v-.704h1.794v.85c0 .644-.333.966-1.002.966-.185 0-.277.104-.277.311.002.321.18.481.536.481z"/>
    </svg>
  ),
};

const techIcons = [
  { name: 'HTML', color: '#FB4EA0', delay: '0s', top: '10%', left: '5%', Icon: Icons.HTML },
  { name: 'CSS', color: '#3B82F6', delay: '2s', top: '15%', left: '85%', Icon: Icons.CSS },
  { name: 'JS', color: '#00F3FF', delay: '4s', top: '75%', left: '10%', Icon: Icons.JS },
  { name: 'Python', color: '#FB4EA0', delay: '1s', top: '80%', left: '80%', Icon: Icons.Python },
  { name: 'Photoshop', color: '#3B82F6', delay: '3s', top: '45%', left: '92%', Icon: Icons.Photoshop },
  { name: 'Illustrator', color: '#00F3FF', delay: '5s', top: '25%', left: '15%', Icon: Icons.Illustrator },
];

const skills = [
  { name: 'Frontend Architecture', level: '95%', color: '#FB4EA0', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { name: 'Backend Engineering', level: '90%', color: '#3B82F6', icon: 'M5 12h14M5 12l4-4m-4 4l4 4' },
  { name: 'Adobe Photoshop', level: '80%', color: '#00F3FF', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { name: 'Vector Mastery', level: '80%', color: '#FB4EA0', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17l.354-.354' },
  { name: 'React Ecosystem', level: '98%', color: '#3B82F6', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'Typed Systems', level: '85%', color: '#00F3FF', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Node.js Core', level: '88%', color: '#FB4EA0', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { name: 'Interface Design', level: '92%', color: '#3B82F6', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 013 12c0-3.683 1.998-6.9 5-8.583C10.832 1.888 19 1.6 19 1.6s.3 6.9-3.235 9.513a5.5 5.5 0 01-4.765-.513z' },
];

const SkillCard: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
  <div className="w-[280px] sm:w-full p-8 glass border-white/5 rounded-[2rem] transition-all duration-500 mr-6 sm:mr-0">
    <div 
      className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center mb-8"
      style={{ boxShadow: `0 0 20px ${skill.color}33` }}
    >
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={skill.color}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
      </svg>
    </div>
    <h4 className="text-accent font-black text-lg mb-5 tracking-tight">{skill.name}</h4>
    <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <div 
        className="h-full" 
        style={{ width: skill.level, backgroundColor: skill.color }}
      ></div>
    </div>
    <div className="flex justify-between mt-3">
      <span className="text-[9px] text-accent/20 uppercase font-black tracking-widest">Mastery</span>
      <span className="text-[10px] font-black" style={{ color: skill.color }}>{skill.level}</span>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <div className="inline-block px-4 py-1 rounded-full glass border border-primary/20 mb-6">
            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">Technological Arsenal</h2>
          </div>
          <h3 className="text-4xl md:text-7xl font-heading font-black text-accent leading-tight">
            The Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky">Matrix & Canvas</span>
          </h3>
        </div>

        <div className="relative w-full overflow-hidden py-12 mb-12">
          <div className="flex animate-scroll whitespace-nowrap gap-8 w-fit">
            {[...techIcons, ...techIcons].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-4 px-10 py-6 glass rounded-3xl border border-white/5 group">
                <div 
                  className="p-3 rounded-xl bg-white/5"
                  style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}88)` }}
                >
                  <item.Icon />
                </div>
                <span className="text-xl font-black text-white/40 group-hover:text-white transition-colors uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-slider lg:grid lg:grid-cols-4 gap-8 pb-10">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
        <div className="lg:hidden flex justify-center mt-2 gap-1.5 opacity-20">
           {skills.map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
      </div>
    </section>
  );
};
