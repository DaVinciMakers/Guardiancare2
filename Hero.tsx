import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Clock, TrendingUp, Shield, Sparkles } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface FloatingCard {
  icon: typeof Zap;
  label: string;
  x: number;
  y: number;
}

const floatingCards: FloatingCard[] = [
  { icon: Zap, label: 'Smart Website', x: 10, y: 20 },
  { icon: Clock, label: 'Auto Follow-ups', x: 85, y: 30 },
  { icon: TrendingUp, label: '500+ Leads/Mo', x: 15, y: 70 },
  { icon: Shield, label: 'CRM Automation', x: 80, y: 75 }
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ automation: 0, hours: 0, rating: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const fullText = 'Grow Your Business With Smart Websites & Outbound Leads';

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        automation: Math.floor(98 * progress),
        hours: Math.floor(40 * progress),
        rating: parseFloat((5.0 * progress).toFixed(1))
      });

      if (step >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking and particle spawning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });

        // Spawn particles directly in ref (no state update)
        if (Math.random() < 0.1) {
          particlesRef.current.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1
          });
          
          // Keep only last 50 particles
          if (particlesRef.current.length > 50) {
            particlesRef.current = particlesRef.current.slice(-50);
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles from ref
      particlesRef.current = particlesRef.current.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        life: p.life - 0.01
      })).filter(p => p.life > 0);

      particlesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 100, ${p.life * 0.5})`;
        ctx.fill();
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 255, 100, 0.8)';
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/20" 
      data-testid="section-hero"
    >
      {/* Animated canvas for particles */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Floating cards that follow mouse */}
      {floatingCards.map((card, index) => {
        const Icon = card.icon;
        const offsetX = (mousePos.x - 50) * 0.05;
        const offsetY = (mousePos.y - 50) * 0.05;
        
        return (
          <Card
            key={index}
            className="absolute glassmorphism border-primary/20 p-3 hover:border-primary/50 transition-all duration-500 hover:scale-110 cursor-pointer group"
            style={{
              left: `calc(${card.x}% + ${offsetX * (index % 2 === 0 ? 1 : -1)}px)`,
              top: `calc(${card.y}% + ${offsetY * (index % 2 === 0 ? -1 : 1)}px)`,
              transform: `rotate(${Math.sin(Date.now() / 1000 + index) * 3}deg)`,
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              zIndex: 5
            }}
            data-testid={`floating-card-${index}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary">{card.label}</span>
            </div>
          </Card>
        );
      })}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
        <Badge 
          variant="secondary" 
          className="mb-8 px-4 py-2 text-sm font-medium glassmorphism border-primary/30 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-top-4"
          data-testid="badge-tag"
        >
          <Sparkles className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
          Smart Websites & Automated Lead Generation
        </Badge>

        {/* Typing animation headline */}
        <h1 
          className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
          data-testid="heading-hero-title"
        >
          <span className="block mb-4 animate-in slide-in-from-left-8 duration-700">
            {typedText.split(' ').slice(0, 3).join(' ')}
          </span>
          <span 
            className="inline-block bg-gradient-to-r from-green-400 via-primary to-green-500 animate-gradient relative"
            style={{
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(0, 255, 100, 0.3))'
            }}
          >
            {typedText.split(' ').slice(3).join(' ')}
            <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-primary ml-2 animate-pulse" />
          </span>
        </h1>

        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000"
          data-testid="text-hero-description"
        >
          Professional Go High Level website ($150) and 500 monthly outbound leads ($150). 
          Free automation and reporting included with any purchase. Get both services for just $250. One-time fee, no recurring costs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in zoom-in duration-1000">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group transition-all duration-300 hover:scale-110 hover:rotate-1 relative overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(0, 255, 100, 0.3), 0 8px 16px rgba(0, 0, 0, 0.4)'
            }}
            data-testid="button-book-discovery-call"
            asChild
          >
            <a href="#booking">
              <span className="relative z-10 flex items-center">
                Book Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </Button>
        </div>

        {/* Animated stats counter */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div 
            data-testid="stat-automation" 
            className="group cursor-pointer relative"
          >
            <div 
              className="absolute inset-0 bg-primary/5 rounded-xl blur group-hover:bg-primary/10 transition-all duration-300"
              style={{ transform: 'scale(0.95)' }}
            />
            <div className="relative p-4 rounded-xl border border-primary/20 glassmorphism group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {stats.automation}%
              </div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
          </div>
          <div 
            data-testid="stat-time-saved" 
            className="group cursor-pointer relative"
          >
            <div 
              className="absolute inset-0 bg-primary/5 rounded-xl blur group-hover:bg-primary/10 transition-all duration-300"
              style={{ transform: 'scale(0.95)' }}
            />
            <div className="relative p-4 rounded-xl border border-primary/20 glassmorphism group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {stats.hours}
                <span className="text-2xl">hrs</span>
              </div>
              <div className="text-sm text-muted-foreground">Saved Monthly</div>
            </div>
          </div>
          <div 
            data-testid="stat-satisfaction" 
            className="group cursor-pointer relative"
          >
            <div 
              className="absolute inset-0 bg-primary/5 rounded-xl blur group-hover:bg-primary/10 transition-all duration-300"
              style={{ transform: 'scale(0.95)' }}
            />
            <div className="relative p-4 rounded-xl border border-primary/20 glassmorphism group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {stats.rating}
                <span className="text-2xl">x</span>
              </div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
