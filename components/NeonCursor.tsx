
import React, { useEffect, useState, useRef } from 'react';

export const NeonCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
          setAngle(newAngle);
        }

        return {
          x: prev.x + dx * 0.15, // Smooth lag
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Primary Gemini Glow Tube */}
      <div 
        className="absolute w-[2px] h-14 bg-primary rounded-full transition-opacity duration-300"
        style={{ 
          left: -1,
          top: -28,
          transform: `translate(${trail.x}px, ${trail.y}px) rotate(${angle}deg)`,
          boxShadow: `0 0 18px var(--primary), 0 0 35px var(--primary)`,
          transformOrigin: 'center center',
          WebkitTransform: `translate(${trail.x}px, ${trail.y}px) rotate(${angle}deg)`,
        }}
      ></div>

      {/* Reactive Leading Particle */}
      <div 
        className="absolute w-2 h-2 bg-sky rounded-full shadow-[0_0_15px var(--sky), 0_0_30px var(--sky)]"
        style={{ 
          left: -1,
          top: -1,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      
      {/* Subtle trail effect */}
      <div 
        className="absolute w-1 h-1 bg-secondary rounded-full opacity-50"
        style={{ 
          left: -0.5,
          top: -0.5,
          transform: `translate(${trail.x}px, ${trail.y}px)`,
        }}
      ></div>
    </div>
  );
};
