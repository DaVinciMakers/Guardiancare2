import { Badge } from '@/components/ui/badge';

export default function RadarSection() {
  return (
    <section id="automation" className="relative py-32 px-6 overflow-hidden" data-testid="section-radar">
      <div className="max-w-5xl mx-auto text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 px-4 py-2 glassmorphism border-primary/20"
          data-testid="badge-automation"
        >
          Intelligent Outreach
        </Badge>

        <h2 
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
          data-testid="heading-radar-title"
        >
          Never Miss a Prospect
        </h2>

        <p 
          className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-radar-description"
        >
          Reach thousands of qualified leads, track every campaign interaction, and automate every follow-up sequence.
          Your outbound engine runs 24/7 while you focus on closing deals.
        </p>

        <div className="relative w-full h-[500px] flex items-center justify-center mb-20">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-primary/40 animate-pulse-glow glow-green"
                style={{
                  width: `${(i + 1) * 140}px`,
                  height: `${(i + 1) * 140}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3s'
                }}
                data-testid={`radar-ring-${i}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent origin-bottom"
                style={{
                  transform: `rotate(${angle}deg)`,
                  opacity: 0.3
                }}
                data-testid={`radar-line-${i}`}
              />
            ))}
          </div>

          <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center animate-float glow-green-strong">
            <div className="w-24 h-24 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary animate-glow-pulse" data-testid="radar-core" />
            </div>
          </div>

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-primary rounded-full animate-pulse-glow glow-green cursor-pointer hover:scale-150 transition-transform duration-300"
              style={{
                left: `${50 + 35 * Math.cos((i * 2 * Math.PI) / 8 - Math.PI / 2)}%`,
                top: `${50 + 35 * Math.sin((i * 2 * Math.PI) / 8 - Math.PI / 2)}%`,
                animationDelay: `${i * 0.15}s`,
                boxShadow: '0 0 15px rgba(0, 255, 100, 0.7)'
              }}
              data-testid={`radar-dot-${i}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl glassmorphism border border-primary/10" data-testid="card-integration">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-integration-title">Integrated with your devices</h3>
            <p className="text-muted-foreground">
              Works seamlessly across desktop, mobile, and tablet. Your data syncs instantly.
            </p>
          </div>

          <div className="p-8 rounded-2xl glassmorphism border border-primary/10" data-testid="card-security">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-security-title">Secure but open</h3>
            <p className="text-muted-foreground">
              Bank-level encryption keeps your data safe. Export anytime, your data is yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
