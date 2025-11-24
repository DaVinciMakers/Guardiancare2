import { Card } from '@/components/ui/card';
import { Database, Mail, Users, CheckCircle, BarChart, Zap, Globe, Phone } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Smart Website Setup',
    description: 'Custom high-converting website built on Go High Level with integrated booking calendar and mobile-friendly design.',
    highlight: 'Go High Level'
  },
  {
    icon: Mail,
    title: 'Email & SMS Automation',
    description: 'Automated follow-up sequences that engage leads via email and SMS. Never miss a follow-up again.',
    highlight: 'Auto follow-ups'
  },
  {
    icon: Phone,
    title: 'Missed Call Text Back',
    description: 'Automatically send SMS when you miss a call. Capture every opportunity even when you are busy.',
    highlight: 'Never miss leads'
  },
  {
    icon: Database,
    title: 'Outbound Lead Generation',
    description: 'Cold email, SMS, and call campaigns to fill your calendar. We provide 500 guaranteed contacts per month.',
    highlight: '500 leads/month'
  },
  {
    icon: Users,
    title: 'CRM Pipeline Setup',
    description: 'Organized pipeline with automated notifications. Track every lead from first contact to closed deal.',
    highlight: 'Full visibility'
  },
  {
    icon: BarChart,
    title: 'Performance Reporting',
    description: 'Monthly breakdown of conversions, campaign performance, and funnel optimization recommendations.',
    highlight: 'Data-driven'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-32 px-6" data-testid="section-features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            data-testid="heading-features-title"
          >
            Everything You Need to Grow Your Business
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-features-description"
          >
            Smart website with automated follow-ups, plus outbound lead generation that delivers
            500+ qualified contacts monthly—all working together to fill your calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 glassmorphism hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:glow-green group cursor-pointer hover:scale-105"
              data-testid={`card-feature-${index}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/30 group-hover:glow-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:text-glow">
                    <Zap className="w-4 h-4 group-hover:animate-pulse" />
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
