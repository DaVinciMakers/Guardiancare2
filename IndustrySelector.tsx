import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, 
  Briefcase, 
  Building2, 
  Factory, 
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

const industries = [
  {
    id: 'saas',
    name: 'B2B SaaS',
    icon: Cloud,
    description: 'Professional website and automated lead generation for SaaS',
    benefits: [
      { icon: Target, text: '500 qualified contacts monthly plus smart website' },
      { icon: Users, text: 'Automated follow-ups and booking calendar' },
      { icon: TrendingUp, text: 'Complete business automation for $250' }
    ],
    features: [
      'Go High Level website with integrated booking',
      'Automated email and SMS follow-up sequences',
      '500 targeted outbound contacts per month',
      'CRM pipeline setup and notifications',
      'Performance tracking and optimization'
    ],
    testimonial: {
      quote: 'The Smart Website captures leads 24/7, and the automated follow-ups make sure we never miss anyone. Perfect package for our SaaS business.',
      author: 'Alex Kumar',
      role: 'Founder, CloudSync Solutions'
    }
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: Briefcase,
    description: 'Professional website with automated client acquisition',
    benefits: [
      { icon: Target, text: 'Smart website that converts visitors to clients' },
      { icon: Users, text: 'Missed call text back and automated follow-ups' },
      { icon: TrendingUp, text: '500 outbound contacts monthly included' }
    ],
    features: [
      'Custom Go High Level website design',
      'Automated email and SMS sequences',
      'Lead capture forms and booking calendar',
      '500 targeted outbound leads per month',
      'CRM pipeline and monthly reporting'
    ],
    testimonial: {
      quote: 'The website looks professional and the automation handles all our follow-ups. We went from chasing leads to having them book appointments automatically.',
      author: 'Jennifer Blake',
      role: 'Partner, Blake Consulting Group'
    }
  },
  {
    id: 'agency',
    name: 'Marketing & Creative',
    icon: Building2,
    description: 'Showcase your work with a smart website and steady leads',
    benefits: [
      { icon: Target, text: 'Professional portfolio website on Go High Level' },
      { icon: Users, text: 'Automated lead nurturing and booking' },
      { icon: TrendingUp, text: '500 potential clients reached monthly' }
    ],
    features: [
      'Custom website with portfolio showcase',
      'Automated email and SMS follow-up',
      'Lead capture forms and booking calendar',
      '500 outbound contacts per month',
      'CRM pipeline and performance tracking'
    ],
    testimonial: {
      quote: 'The Smart Website shows off our work beautifully, and the outbound leads keep our pipeline full. Best decision we made this year.',
      author: 'Marcus Stone',
      role: 'Founder, Stone Digital'
    }
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & B2B',
    icon: Factory,
    description: 'Professional website with steady stream of qualified buyers',
    benefits: [
      { icon: Target, text: 'Smart website showcasing your capabilities' },
      { icon: Users, text: 'Automated follow-ups and RFQ handling' },
      { icon: TrendingUp, text: '500 buyer contacts reached monthly' }
    ],
    features: [
      'Go High Level website with spec sheets',
      'Automated email and SMS sequences',
      'Lead capture forms and booking calendar',
      '500 outbound buyer contacts per month',
      'CRM pipeline and monthly reporting'
    ],
    testimonial: {
      quote: 'The website looks professional and the automated outreach brings in qualified buyers consistently. Perfect for our B2B manufacturing business.',
      author: 'Robert Chen',
      role: 'VP Sales, Precision Manufacturing'
    }
  }
];

export default function IndustrySelector() {
  const [selectedIndustry, setSelectedIndustry] = useState('saas');
  const currentIndustry = industries.find(i => i.id === selectedIndustry) || industries[0];
  const Icon = currentIndustry.icon;

  return (
    <section className="relative py-32 px-6 overflow-hidden" data-testid="section-industry-selector">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 glassmorphism border-primary/20"
            data-testid="badge-industry"
          >
            Industry Solutions
          </Badge>

          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            data-testid="heading-industry-title"
          >
            Built for Your Industry
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Guardian Care helps businesses in your industry with smart websites and lead generation
          </p>
        </div>

        <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent mb-12" data-testid="industry-tabs">
            {industries.map((industry) => {
              const IndustryIcon = industry.icon;
              return (
                <TabsTrigger 
                  key={industry.id}
                  value={industry.id}
                  className="flex flex-col items-center gap-2 p-4 h-auto data-[state=active]:bg-primary/10 data-[state=active]:border-primary/30 border-2 border-transparent rounded-xl transition-all duration-300 hover:border-primary/20"
                  data-testid={`tab-${industry.id}`}
                >
                  <IndustryIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">{industry.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {industries.map((industry) => {
            const IndustryIcon = industry.icon;
            return (
              <TabsContent key={industry.id} value={industry.id} className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="glassmorphism border-primary/20">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                        <IndustryIcon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-2">{industry.name}</CardTitle>
                      <CardDescription className="text-base">{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-8">
                        {industry.benefits.map((benefit, index) => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <div 
                              key={index}
                              className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                              data-testid={`benefit-${industry.id}-${index}`}
                            >
                              <BenefitIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-medium">{benefit.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="border-t border-border/50 pt-6">
                        <h4 className="font-semibold mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {industry.features.map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="glassmorphism border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-xl">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-lg italic text-foreground mb-4">
                          "{industry.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">
                              {industry.testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold">{industry.testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{industry.testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glassmorphism border-primary/20 bg-primary/5">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3">Ready to transform your {industry.name.toLowerCase()}?</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Join hundreds of {industry.name.toLowerCase()} businesses saving time and money with Guardian automation.
                        </p>
                        <a 
                          href="#pricing"
                          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
                          data-testid={`button-get-started-${industry.id}`}
                        >
                          Get Started Free
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
