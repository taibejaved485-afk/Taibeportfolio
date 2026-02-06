
import React, { useState, useEffect } from 'react';

const techIcons = [
  { name: 'HTML', color: '#FB4EA0', delay: '0s', top: '10%', left: '5%' },
  { name: 'CSS', color: '#3B82F6', delay: '2s', top: '15%', left: '85%' },
  { name: 'JS', color: '#00F3FF', delay: '4s', top: '75%', left: '10%' },
  { name: 'Python', color: '#FB4EA0', delay: '1s', top: '80%', left: '80%' },
  { name: 'React', color: '#3B82F6', delay: '3s', top: '45%', left: '92%' },
  { name: 'Node', color: '#00F3FF', delay: '5s', top: '25%', left: '15%' },
];

const designIcons = [
  { name: 'Ps', color: '#FB4EA0', delay: '1.5s', top: '12%', left: '45%' },
  { name: 'Ai', color: '#3B82F6', delay: '3.5s', top: '85%', left: '55%' },
  { name: 'Canva', color: '#00F3FF', delay: '2.5s', top: '50%', left: '5%' },
  { name: 'Figma', color: '#FB4EA0', delay: '0.5s', top: '35%', left: '75%' },
];

const SkillParticle: React.FC<{ icon: typeof techIcons[0] }> = ({ icon }) => (
  <div 
    className="absolute pointer-events-none animate-float opacity-30 hover:opacity-100 transition-opacity duration-500"
    style={{ 
      top: icon.top, 
      left: icon.left, 
      animationDelay: icon.delay,
    }}
  >
    <div 
      className="px-4 py-2 glass rounded-lg border border-white/10 flex items-center justify-center font-black text-[10px] tracking-tighter"
      style={{ 
        color: icon.color,
        boxShadow: `0 0 15px ${icon.color}33`,
        textShadow: `0 0 5px ${icon.color}`
      }}
    >
      {icon.name}
    </div>
  </div>
);

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

const SkillCard: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="group relative p-8 glass border-white/5 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl"
      style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
          style={{ boxShadow: `0 0 20px ${skill.color}33` }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={skill.color}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
          </svg>
        </div>

        <h4 className="text-accent font-black text-lg mb-5 tracking-tight">{skill.name}</h4>
        
        <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-1000 ease-out" 
            style={{ width: skill.level, backgroundColor: skill.color }}
          ></div>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-[9px] text-accent/20 uppercase font-black tracking-widest">Mastery</span>
          <span className="text-[10px] font-black" style={{ color: skill.color }}>{skill.level}</span>
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {techIcons.map((icon, idx) => <SkillParticle key={`tech-${idx}`} icon={icon} />)}
        {designIcons.map((icon, idx) => <SkillParticle key={`design-${idx}`} icon={icon} />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full glass border border-primary/20 mb-6">
            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">Technological Arsenal</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-heading font-black text-accent leading-tight">
            The Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-sky">Matrix & Canvas</span>
          </h3>
          <p className="mt-8 text-accent/40 max-w-2xl mx-auto text-lg font-light italic">
            "Merging the logic of Python and JavaScript with the aesthetics of Photoshop and Illustrator."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
