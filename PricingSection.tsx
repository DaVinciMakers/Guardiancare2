import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AnimatedOrb from './AnimatedOrb';

const pricingPlans = [
  {
    name: 'Smart Website Setup',
    price: '$150',
    period: '/one-time',
    description: 'Custom high-converting website built on Go High Level',
    features: [
      'Custom high-converting website',
      'Integrated forms & calendar booking',
      'Mobile-friendly design',
      'Go High Level platform setup'
    ],
    icon: Zap,
    highlight: false,
    badge: null
  },
  {
    name: 'Outbound Lead Generation',
    price: '$150',
    period: '/one-time',
    description: 'Cold outreach campaigns to fill your calendar',
    features: [
      'Cold email, SMS & call campaigns',
      'Lead list sourcing & targeting',
      'Appointment setting',
      '500 guaranteed contacts per month'
    ],
    icon: Zap,
    highlight: false,
    badge: null
  },
  {
    name: 'Lead Capture & Automation',
    price: 'FREE',
    period: '/included',
    description: 'Included free with any service purchase',
    features: [
      'Automated email & SMS sequences',
      'Missed-call text back',
      'CRM pipeline setup',
      'Lead notifications'
    ],
    icon: Star,
    highlight: false,
    badge: 'Always Free'
  },
  {
    name: 'Reporting & Optimization',
    price: 'FREE',
    period: '/included',
    description: 'Included free with any service purchase',
    features: [
      'Monthly performance breakdown',
      'Conversion tracking',
      'Campaign optimization',
      'Funnel improvements'
    ],
    icon: Star,
    highlight: false,
    badge: 'Always Free'
  },
  {
    name: 'Complete Package',
    price: '$250',
    period: '/one-time',
    description: 'Both services + free automation & reporting - save $50!',
    features: [
      'Smart Website Setup (Go High Level)',
      'Outbound Lead Generation (500 leads/mo)',
      'Lead Capture & Automation (FREE)',
      'Reporting & Optimization (FREE)',
      'Complete business automation',
      'Priority onboarding & setup'
    ],
    icon: Star,
    highlight: true,
    badge: 'Best Value'
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 px-6 overflow-hidden" data-testid="section-pricing">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <AnimatedOrb size="large" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 glassmorphism border-primary/20"
            data-testid="badge-pricing"
          >
            Flexible Pricing
          </Badge>

          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight"
            data-testid="heading-pricing-title"
          >
            Simple, Transparent Pricing
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two core services at $150 each. Automation and reporting always included free.
          </p>
        </div>

        {/* Pricing Breakdown */}
        <div className="max-w-2xl mx-auto mb-10 glassmorphism p-6 rounded-xl border border-primary/20">
          <h3 className="text-xl font-bold text-center mb-4">Pricing Breakdown</h3>
          <div className="space-y-3 text-base">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <span>Smart Website Setup</span>
              <span className="text-primary font-semibold">$150</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <span>Outbound Lead Generation</span>
              <span className="text-primary font-semibold">$150</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <span>Lead Capture & Automation</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">FREE</Badge>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <span>Reporting & Optimization</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">FREE</Badge>
            </div>
            <div className="flex items-center justify-between pt-2 text-lg font-bold">
              <span>Complete Package (Save $50)</span>
              <span className="text-primary">$250</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            One-time setup fee • No recurring costs • Automation & reporting always free
          </p>
        </div>

        {/* 4 cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-6">
          {pricingPlans.slice(0, 4).map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className="relative p-6 glassmorphism hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:glow-green border-primary/20"
                data-testid={`pricing-card-${index}`}
              >
                {plan.badge && (
                  <Badge 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                    data-testid="badge-popular"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl mb-2" data-testid={`text-plan-name-${index}`}>
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-xs">
                    {plan.description}
                  </CardDescription>

                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold text-primary" data-testid={`text-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        data-testid={`pricing-feature-${index}-${featureIndex}`}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>


                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.highlight 
                        ? 'bg-primary hover:bg-primary/90 hover:glow-green-strong hover:scale-105' 
                        : 'bg-secondary hover:bg-secondary/90 hover:glow-green'
                    }`}
                    data-testid={`button-book-discovery-call-${index}`}
                    asChild
                  >
                    <a href="#booking">Book Discovery Call</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Complete Package - Full Width Below */}
        <div className="max-w-7xl mx-auto mb-16">
          {pricingPlans.slice(4).map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index + 4}
                className="relative p-8 glassmorphism hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:glow-green border-primary/40"
                data-testid={`pricing-card-${index + 4}`}
              >
                {plan.badge && (
                  <Badge 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                    data-testid="badge-popular"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <CardHeader className="text-center md:text-left pb-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto md:mx-0 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <CardTitle className="text-3xl mb-3" data-testid={`text-plan-name-${index + 4}`}>
                      {plan.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base mb-6">
                      {plan.description}
                    </CardDescription>

                    <div className="flex items-baseline justify-center md:justify-start gap-2">
                      <span className="text-6xl font-bold text-primary" data-testid={`text-price-${index + 4}`}>
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-0">
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-start gap-3"
                          data-testid={`pricing-feature-${index + 4}-${featureIndex}`}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 hover:glow-green-strong hover:scale-105 transition-all duration-300"
                      data-testid={`button-book-discovery-call-${index + 4}`}
                      asChild
                    >
                      <a href="#booking">Book Discovery Call</a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Custom Solution Section - 5x Bigger */}
        <div className="mt-20 text-center glassmorphism p-16 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-4xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. If our standard packages don't quite fit your needs, 
            we'll work with you to create a custom solution tailored specifically to your business goals.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
            data-testid="button-contact-sales"
            asChild
          >
            <a href="#booking">Book a Discovery Call →</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            30-minute consultation • No commitment required • Free strategy session
          </p>
        </div>
      </div>
    </section>
  );
}
