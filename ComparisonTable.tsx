import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import AnimatedOrb from './AnimatedOrb';

const plans = [
  {
    name: 'Smart Website',
    price: '$100',
    period: '/month',
    popular: false
  },
  {
    name: 'Lead Gen Inbound',
    price: '$100',
    period: '/month',
    popular: false
  },
  {
    name: 'Lead Gen Outbound',
    price: '$100',
    period: '/month',
    popular: false
  },
  {
    name: 'Total Package',
    price: '$295',
    period: '/month',
    popular: true
  }
];

const features = [
  {
    category: 'Core Features',
    items: [
      { name: 'Automated appointment booking', smart: true, inbound: false, outbound: false, total: true },
      { name: 'Calendar integrations', smart: true, inbound: false, outbound: false, total: true },
      { name: 'Email & SMS notifications', smart: true, inbound: false, outbound: false, total: true },
      { name: 'Customer communication automation', smart: true, inbound: false, outbound: false, total: true },
      { name: 'Real-time analytics dashboard', smart: true, inbound: false, outbound: false, total: true },
      { name: 'Custom branding', smart: true, inbound: false, outbound: false, total: true }
    ]
  },
  {
    category: 'Lead Generation - Inbound',
    items: [
      { name: 'City-based search capture', smart: false, inbound: true, outbound: false, total: true },
      { name: 'Smart lead capture forms', smart: false, inbound: true, outbound: false, total: true },
      { name: 'Lead qualification & scoring', smart: false, inbound: true, outbound: false, total: true },
      { name: 'Automated lead routing', smart: false, inbound: true, outbound: false, total: true },
      { name: 'Follow-up automation', smart: false, inbound: true, outbound: false, total: true },
      { name: 'Real-time notifications', smart: false, inbound: true, outbound: false, total: true }
    ]
  },
  {
    category: 'Lead Generation - Outbound',
    items: [
      { name: 'Targeted customer outreach', smart: false, inbound: false, outbound: true, total: true },
      { name: 'Smart lead capture forms', smart: false, inbound: false, outbound: true, total: true },
      { name: 'Lead qualification & scoring', smart: false, inbound: false, outbound: true, total: true },
      { name: 'Automated lead routing', smart: false, inbound: false, outbound: true, total: true },
      { name: 'Follow-up automation', smart: false, inbound: false, outbound: true, total: true },
      { name: 'Campaign tracking', smart: false, inbound: false, outbound: true, total: true }
    ]
  },
  {
    category: 'Advanced Features',
    items: [
      { name: 'CRM integration', smart: false, inbound: false, outbound: false, total: true },
      { name: 'Reputation management', smart: false, inbound: false, outbound: false, total: true },
      { name: 'Workflow automation builder', smart: false, inbound: false, outbound: false, total: true },
      { name: 'Priority support', smart: false, inbound: false, outbound: false, total: true },
      { name: 'Unlimited team members', smart: false, inbound: false, outbound: false, total: true }
    ]
  }
];

export default function ComparisonTable() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-card/30" data-testid="section-comparison-table">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <AnimatedOrb size="medium" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 glassmorphism border-primary/20"
            data-testid="badge-comparison"
          >
            Compare Plans
          </Badge>

          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            data-testid="heading-comparison-title"
          >
            Find Your Perfect Plan
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare features side-by-side to choose the plan that fits your business needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse" data-testid="comparison-table">
            <thead className="sticky top-0 z-10">
              <tr className="bg-background/95 backdrop-blur-sm border-b-2 border-primary/20">
                <th className="p-6 text-left font-semibold text-lg">Features</th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-6 text-center relative" data-testid={`plan-header-${index}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs">
                        Most Popular
                      </Badge>
                    )}
                    <div className="mt-4">
                      <div className="font-bold text-xl mb-1">{plan.name}</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.flatMap((category, categoryIndex) => [
                <tr key={`category-${categoryIndex}`} className="bg-muted/30">
                  <td colSpan={5} className="p-4 font-semibold text-sm text-primary uppercase tracking-wide">
                    {category.category}
                  </td>
                </tr>,
                ...category.items.map((feature, featureIndex) => (
                  <tr 
                    key={`feature-${categoryIndex}-${featureIndex}`}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                    data-testid={`feature-row-${categoryIndex}-${featureIndex}`}
                  >
                    <td className="p-4 text-sm">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.smart ? (
                        <Check className="w-5 h-5 text-primary mx-auto" data-testid={`check-smart-${categoryIndex}-${featureIndex}`} />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.inbound ? (
                        <Check className="w-5 h-5 text-primary mx-auto" data-testid={`check-inbound-${categoryIndex}-${featureIndex}`} />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.outbound ? (
                        <Check className="w-5 h-5 text-primary mx-auto" data-testid={`check-outbound-${categoryIndex}-${featureIndex}`} />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.total ? (
                        <Check className="w-5 h-5 text-primary mx-auto" data-testid={`check-total-${categoryIndex}-${featureIndex}`} />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))
              ])}
            </tbody>
            <tfoot className="bg-background/95 backdrop-blur-sm border-t-2 border-primary/20">
              <tr>
                <td className="p-6"></td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-6 text-center">
                    <Button 
                      size="lg"
                      className={plan.popular 
                        ? 'w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300' 
                        : 'w-full bg-secondary hover:bg-secondary/90 transition-all duration-300'
                      }
                      data-testid={`button-select-plan-${index}`}
                      asChild
                    >
                      <a href="#booking">Book Discovery Call</a>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>All plans include 14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
