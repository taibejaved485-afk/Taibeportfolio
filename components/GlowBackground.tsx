
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export const GlowBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 100);
      particles.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
      }));
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = {
        x: mousePos.x,
        y: mousePos.y
      };

      particles.current.forEach((p, i) => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (gentle repulsion)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(142, 117, 255, 0.4)' : 'rgba(0, 241, 255, 0.4)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist2 / 120) * 0.15;
            ctx.strokeStyle = `rgba(142, 117, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initCanvas);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#05070A]">
      {/* Dynamic Interactive Gemini Glow (Large Blurred Orbs) */}
      <div 
        className="absolute w-[900px] h-[900px] rounded-full opacity-[0.15] blur-[160px] bg-secondary transition-transform duration-1000 ease-out"
        style={{ 
          left: mousePos.x - 450, 
          top: mousePos.y - 450,
        }}
      ></div>

      {/* Layered Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[200px] animate-mesh"></div>
      <div className="absolute top-[20%] right-[-15%] w-[65%] h-[65%] bg-sky/15 rounded-full blur-[220px] animate-mesh" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute bottom-[-15%] left-[15%] w-[75%] h-[75%] bg-secondary/10 rounded-full blur-[180px] animate-mesh" style={{ animationDelay: '-12s' }}></div>

      {/* Neural Flow Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(#F3EEF0 1px, transparent 1px), linear-gradient(90deg, #F3EEF0 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }}
      ></div>

      {/* Radial Center Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,7,10,0.9)_100%)]"></div>
    </div>
  );
};
