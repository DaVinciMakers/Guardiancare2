import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface FeatureShowcaseProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
  imagePosition: 'left' | 'right';
  mockupContent: React.ReactNode;
}

export default function FeatureShowcase({
  badge,
  title,
  description,
  features,
  imagePosition,
  mockupContent
}: FeatureShowcaseProps) {
  return (
    <section className="relative py-32 px-6" data-testid={`section-showcase-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 glassmorphism border-primary/20"
              data-testid="badge-category"
            >
              {badge}
            </Badge>

            <h2 
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
              data-testid="heading-showcase-title"
            >
              {title}
            </h2>

            <p 
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              data-testid="text-showcase-description"
            >
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`feature-item-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${imagePosition === 'right' ? 'lg:order-1' : ''} relative`}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-muted/20 opacity-50" />
              {mockupContent}
            </div>

            <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-br from-primary to-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
