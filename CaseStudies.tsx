import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Clock, Users, Star } from 'lucide-react';

interface CaseStudy {
  id: string;
  industry: string;
  companySize: string;
  challenge: string;
  solution: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  metrics: {
    before: {
      label: string;
      value: string;
    }[];
    after: {
      label: string;
      value: string;
    }[];
  };
  improvements: {
    metric: string;
    improvement: string;
    icon: 'time' | 'growth' | 'users' | 'star';
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'saas-company',
    industry: 'Local Business',
    companySize: 'Solo Service Provider',
    challenge: 'Local service business with no website and manual follow-ups. Missing calls meant lost clients. No systematic way to capture leads or follow up consistently.',
    solution: 'Deployed Guardian Care complete package: Go High Level website with booking calendar, automated SMS/email follow-ups, missed call text back, and 500 monthly outbound leads.',
    testimonial: {
      quote: "Guardian Care transformed my business. The smart website looks professional and handles bookings automatically. The missed call text back alone has saved dozens of clients. Plus the outbound leads fill my calendar every month. I went from struggling to fully booked.",
      author: "Marcus Chen",
      role: "Owner",
      company: "Elite HVAC Services"
    },
    metrics: {
      before: [
        { label: 'Monthly bookings', value: '12' },
        { label: 'Missed call recovery', value: '0%' },
        { label: 'Lead follow-up rate', value: '30%' }
      ],
      after: [
        { label: 'Monthly bookings', value: '48' },
        { label: 'Missed call recovery', value: '85%' },
        { label: 'Lead follow-up rate', value: '100%' }
      ]
    },
    improvements: [
      { metric: 'Monthly Bookings', improvement: '300%', icon: 'users' },
      { metric: 'Lead Recovery', improvement: '85%', icon: 'growth' },
      { metric: 'Time Saved', improvement: '20hrs/mo', icon: 'time' }
    ]
  },
  {
    id: 'marketing-agency',
    industry: 'Coaching Business',
    companySize: 'Solo Coach',
    challenge: 'Business coach with outdated website and zero automation. Manually following up with every inquiry. No outbound system to generate new leads consistently.',
    solution: 'Implemented Guardian Care: professional Go High Level website, automated email/SMS nurture sequences, CRM pipeline, and outbound campaigns to local business owners.',
    testimonial: {
      quote: "The smart website makes me look like a real company. Automated follow-ups nurture every lead perfectly. The outbound campaigns bring me 15-20 qualified prospects monthly. I went from chasing leads to having clients chase me. Best investment I have made.",
      author: "Jennifer Rodriguez",
      role: "Founder",
      company: "Success Path Coaching"
    },
    metrics: {
      before: [
        { label: 'Monthly qualified leads', value: '8' },
        { label: 'Follow-up automation', value: 'Manual' },
        { label: 'New clients/month', value: '2' }
      ],
      after: [
        { label: 'Monthly qualified leads', value: '45' },
        { label: 'Follow-up automation', value: '100%' },
        { label: 'New clients/month', value: '10' }
      ]
    },
    improvements: [
      { metric: 'Lead Generation', improvement: '462%', icon: 'users' },
      { metric: 'Client Acquisition', improvement: '400%', icon: 'growth' },
      { metric: 'Revenue Growth', improvement: '380%', icon: 'star' }
    ]
  },
  {
    id: 'consulting-firm',
    industry: 'Real Estate',
    companySize: '3 Agents',
    challenge: 'Small real estate team with basic website and no lead automation. Losing leads due to slow response times. Zero outbound prospecting to homeowners.',
    solution: 'Deployed Guardian Care complete package: high-converting website with listing showcases, instant SMS/email responses, CRM tracking, and outbound campaigns to FSBO homeowners.',
    testimonial: {
      quote: "The smart website showcases our listings beautifully and captures leads 24/7. Automated responses mean we never lose a hot buyer. The outbound campaigns to FSBO owners generate 3-5 new listing appointments monthly. This system has doubled our business.",
      author: "David Park",
      role: "Team Lead",
      company: "Park Realty Group"
    },
    metrics: {
      before: [
        { label: 'Monthly leads captured', value: '18' },
        { label: 'Response time', value: '4+ hours' },
        { label: 'Outbound listings/mo', value: '0' }
      ],
      after: [
        { label: 'Monthly leads captured', value: '65' },
        { label: 'Response time', value: '<5 min' },
        { label: 'Outbound listings/mo', value: '4' }
      ]
    },
    improvements: [
      { metric: 'Lead Capture', improvement: '261%', icon: 'users' },
      { metric: 'Response Speed', improvement: '98%', icon: 'time' },
      { metric: 'New Listings', improvement: 'Infinite', icon: 'growth' }
    ]
  }
];

const iconMap = {
  time: Clock,
  growth: TrendingUp,
  users: Users,
  star: Star
};

export default function CaseStudies() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" data-testid="section-case-studies">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 backdrop-blur-xl bg-muted/30 border-primary/30"
            data-testid="badge-case-studies"
          >
            Success Stories
          </Badge>
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            data-testid="heading-case-studies-title"
          >
            Real Results, Real Impact
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-case-studies-description"
          >
            See how businesses like yours scaled their outbound pipeline and revenue with Guardian Care lead generation system
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="group"
              data-testid={`case-study-${study.id}`}
            >
              <Card className="backdrop-blur-xl bg-card/50 border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left: Story & Challenge */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <Badge variant="secondary" data-testid={`badge-industry-${study.id}`}>
                          {study.industry}
                        </Badge>
                        <span className="text-sm text-muted-foreground" data-testid={`text-size-${study.id}`}>
                          {study.companySize}
                        </span>
                      </div>

                      <h3 
                        className="text-2xl font-bold mb-4"
                        data-testid={`heading-challenge-${study.id}`}
                      >
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.challenge}
                      </p>

                      <h3 
                        className="text-2xl font-bold mb-4"
                        data-testid={`heading-solution-${study.id}`}
                      >
                        The Solution
                      </h3>
                      <p className="text-foreground mb-8 leading-relaxed">
                        {study.solution}
                      </p>

                      {/* Improvements */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {study.improvements.map((improvement, idx) => {
                          const Icon = iconMap[improvement.icon];
                          return (
                            <div 
                              key={idx} 
                              className="text-center"
                              data-testid={`improvement-${study.id}-${idx}`}
                            >
                              <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                              <p className="text-2xl font-bold text-primary">
                                {improvement.improvement}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {improvement.metric}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Testimonial */}
                      <div className="border-l-4 border-primary/50 pl-4 py-2">
                        <p className="text-foreground italic mb-3 leading-relaxed">
                          "{study.testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold" data-testid={`text-author-${study.id}`}>
                            {study.testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {study.testimonial.role}, {study.testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Before/After Metrics */}
                    <div className="bg-muted/20 p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-8 text-center">
                        Before & After
                      </h3>

                      <div className="space-y-6">
                        {study.metrics.before.map((metric, idx) => (
                          <div 
                            key={idx}
                            data-testid={`metric-${study.id}-${idx}`}
                          >
                            <p className="text-sm text-muted-foreground mb-2">
                              {metric.label}
                            </p>
                            <div className="flex items-center gap-4">
                              <Card className="flex-1 bg-destructive/10 border-destructive/30">
                                <CardContent className="py-3 px-4">
                                  <p className="text-sm font-mono text-muted-foreground">
                                    Before: <span className="font-semibold">{metric.value}</span>
                                  </p>
                                </CardContent>
                              </Card>
                              
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                              
                              <Card className="flex-1 bg-primary/10 border-primary/30">
                                <CardContent className="py-3 px-4">
                                  <p className="text-sm font-mono text-foreground">
                                    After: <span className="font-semibold text-primary">{study.metrics.after[idx].value}</span>
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Ready to write your own success story?
          </p>
          <a 
            href="#booking" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all"
            data-testid="link-contact-from-case-studies"
          >
            Book Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
