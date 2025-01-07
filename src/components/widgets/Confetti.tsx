import { useRef, useEffect, useCallback } from 'react';

const colors = ['#ffa500', '#aa6300', '#8a2be2', '#4c187c', '#ff4500', '#3cb371', '#1e90ff', '#ff69b4'];

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  createdAt: number;
};

export function Confetti({ btnRef }: { btnRef: React.RefObject<HTMLButtonElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const isAnimating = useRef<boolean>(false);
  const gravity = 0.1;

  const createParticle = useCallback((w: number, h: number): Particle => {
    const btnRect = btnRef.current?.getBoundingClientRect();

    return {
      x: btnRect ? btnRect.left + btnRect.width / 2 : w / 2,
      y: btnRect ? btnRect.top + btnRect.height / 2 : h / 2,
      size: Math.random() * 15 + 15,
      vx: (Math.random() - 0.5) * 15,
      vy: -1 * Math.abs(Math.random() * 15),
      rotation: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: (['circle', 'square', 'triangle'] as const)[Math.floor(Math.random() * 3)],
      createdAt: Date.now(),
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = Date.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter((p) => {
      if (now - p.createdAt > 2500 && p.y > canvas.height) return false;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += gravity;
      p.rotation += 2;

      if (now - p.createdAt <= 2500) {
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
      }

      ctx.save();
      ctx.fillStyle = p.color;
      ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
      ctx.rotate((p.rotation * Math.PI) / 180);

      switch (p.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, 2 * Math.PI);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
          ctx.fill();
          break;
      }
      ctx.restore();

      return true;
    });

    if (particles.current.length > 0) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      isAnimating.current = false;
    }
  }, []);

  const throwConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const maxParticles = 250;
    const particleCount = 50;

    const availableSlots = Math.max(0, maxParticles - particles.current.length);
    const particlesToAdd = Math.min(particleCount, availableSlots);

    if (particlesToAdd > 0) {
      const newParticles = Array.from({ length: particlesToAdd }, () => createParticle(canvas.width, canvas.height));
      particles.current = [...particles.current, ...newParticles];
    }

    if (!isAnimating.current && particles.current.length > 0) {
      isAnimating.current = true;
      animRef.current = requestAnimationFrame(animate);
    }
  }, [animate, createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !btnRef.current) return;

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const clickHandler = () => throwConfetti();

    resizeHandler();
    btnRef.current.addEventListener('click', clickHandler);
    window.addEventListener('resize', resizeHandler);

    return () => {
      btnRef.current?.removeEventListener('click', clickHandler);
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animRef.current);
    };
  }, [btnRef, throwConfetti]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }} />;
}
