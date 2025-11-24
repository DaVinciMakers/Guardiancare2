import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import AnimatedOrb from './AnimatedOrb';

export default function BookingSection() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="relative py-32 px-6 overflow-hidden" data-testid="section-booking">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <AnimatedOrb size="large" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 glassmorphism border-primary/20"
            data-testid="badge-booking"
          >
            <Calendar className="w-4 h-4 mr-2 inline" />
            Book Your Discovery Call
          </Badge>

          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            data-testid="heading-booking-title"
          >
            Ready to Transform
            <br />
            <span className="text-primary">Your Business?</span>
          </h2>

          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            data-testid="text-booking-description"
          >
            Schedule a free discovery call with our lead generation experts. We will analyze your target market and show you exactly how Guardian Care can fill your pipeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">30-Minute Call</h3>
              <p className="text-sm text-muted-foreground">
                Quick, focused discussion about your outbound lead gen goals
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Custom Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Get a personalized outbound campaign roadmap for your business
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No Obligation</h3>
              <p className="text-sm text-muted-foreground">
                Free consultation with zero pressure to commit
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl border border-primary/20 p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Choose Your Time</h3>
            <p className="text-muted-foreground">
              Select a time that works best for you. All times are shown in your local timezone.
            </p>
          </div>

          <div className="bg-background/50 rounded-xl p-4" data-testid="booking-calendar-container">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/4o4DDIzwr1jPLiN1MRAo" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
              scrolling="no" 
              id="4o4DDIzwr1jPLiN1MRAo_1763882568947"
              title="Book Discovery Call"
              data-testid="booking-iframe"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By booking a call, you agree to receive communications from Guardian Care.
              <br />
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">
            Have questions before booking?
          </p>
          <a 
            href="mailto:admin@guardiancare.tech" 
            className="inline-block text-primary hover:underline font-medium"
            data-testid="link-email-support"
          >
            Email us at admin@guardiancare.tech →
          </a>
        </div>
      </div>
    </section>
  );
}
