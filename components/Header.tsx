
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-white/10' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold tracking-tighter text-white">
          TAIBE <span className="text-primary">.</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-full glass border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-primary/20 hover:border-primary/50 transition-all">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};
