import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logoUrl from '@assets/logo 2_1763917533342.png';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-background/80 border-b border-border' : 'bg-transparent'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" data-testid="logo-container">
            <img 
              src={logoUrl} 
              alt="Guardian Care" 
              className="h-32 w-auto"
              data-testid="img-logo"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#automation" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-automation"
            >
              Automation
            </a>
            <a 
              href="#testimonials" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-testimonials"
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              data-testid="button-login"
            >
              Log in
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90"
              data-testid="button-book-discovery-call"
              asChild
            >
              <a href="#booking">Book Discovery Call</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
