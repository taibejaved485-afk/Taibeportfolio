
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
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-darkBg">
      {/* Dynamic Interactive Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.1] blur-[140px] bg-primary transition-transform duration-1000 ease-out"
        style={{ 
          left: mousePos.x - 400, 
          top: mousePos.y - 400,
        }}
      ></div>

      {/* Layered Mesh Gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-secondary/15 rounded-full blur-[180px] animate-mesh"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-primary/15 rounded-full blur-[180px] animate-mesh" style={{ animationDelay: '-5s' }}></div>
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#F3EEF0 1px, transparent 1px), linear-gradient(90deg, #F3EEF0 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }}
      ></div>

      {/* Radial Center Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,21,57,0.8)_100%)]"></div>
    </div>
  );
};
