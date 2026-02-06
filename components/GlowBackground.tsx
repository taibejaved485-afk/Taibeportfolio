
import React, { useEffect, useState } from 'react';

export const GlowBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#020617]">
      {/* Dynamic Interactive Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[150px] bg-secondary transition-transform duration-1000 ease-out"
        style={{ 
          left: mousePos.x - 400, 
          top: mousePos.y - 400,
        }}
      ></div>

      {/* Layered Mesh Gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[180px] animate-mesh"></div>
      <div className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] bg-sky/10 rounded-full blur-[180px] animate-mesh" style={{ animationDelay: '-7s' }}></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] bg-secondary/10 rounded-full blur-[180px] animate-mesh" style={{ animationDelay: '-14s' }}></div>
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#F3EEF0 1px, transparent 1px), linear-gradient(90deg, #F3EEF0 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }}
      ></div>

      {/* Radial Center Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]"></div>
    </div>
  );
};
