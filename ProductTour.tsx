import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Users,
  MessageSquare,
  BarChart,
  Zap,
  CheckCircle2
} from 'lucide-react';

const tourSteps = [
  {
    id: 1,
    title: 'Smart Website Setup',
    description: 'Get a custom high-converting website built on Go High Level. Integrated booking calendar, mobile-friendly design, and optimized for conversions.',
    icon: Calendar,
    features: [
      'Go High Level platform',
      'Integrated booking calendar',
      'Mobile-responsive design',
      'Conversion-focused layout'
    ]
  },
  {
    id: 2,
    title: 'Automated Follow-Ups (FREE)',
    description: 'Included free with any purchase! Never lose a lead with automated email and SMS sequences. Missed call text back ensures every prospect gets a response.',
    icon: MessageSquare,
    features: [
      'Email & SMS automation (FREE)',
      'Missed call text back (FREE)',
      'Smart follow-up sequences (FREE)',
      'CRM pipeline setup (FREE)'
    ]
  },
  {
    id: 3,
    title: 'Outbound Lead Generation',
    description: 'Cold email, SMS, and call campaigns that fill your calendar. We deliver 500 guaranteed contacts per month.',
    icon: Users,
    features: [
      '500 contacts per month',
      'Lead list sourcing',
      'Appointment setting',
      'Multi-channel outreach'
    ]
  },
  {
    id: 4,
    title: 'Complete Package ($250)',
    description: 'Get both Smart Website Setup and Outbound Lead Generation plus all automation features for just $250. Best value package!',
    icon: Zap,
    features: [
      'Smart Website + Outbound Leads',
      'Free automation included',
      'Save $50 on bundle',
      'One-time fee, no recurring costs'
    ]
  },
  {
    id: 5,
    title: 'Get Started Today',
    description: 'Simple pricing: $150 per service or $250 for everything. Automation always free. Book a discovery call to get started.',
    icon: CheckCircle2,
    features: [
      'Smart Website Setup - $150',
      'Outbound Lead Generation - $150',
      'Complete Package - $250',
      'Free automation with any purchase'
    ]
  }
];

interface ProductTourProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductTour({ isOpen, onClose }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = tourSteps[currentStep];
  const StepIcon = step.icon;
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  // Reset to first step when tour is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  // Handle ESC key to close tour
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
      data-testid="product-tour-overlay"
    >
      <Card className="w-full max-w-3xl glassmorphism border-primary/30 relative animate-in zoom-in-95 duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 hover:bg-destructive/20"
          onClick={onClose}
          data-testid="button-close-tour"
        >
          <X className="w-5 h-5" />
        </Button>

        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="px-3 py-1">
                Step {currentStep + 1} of {tourSteps.length}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Product Tour
              </div>
            </div>
            
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-primary transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
                data-testid="tour-progress-bar"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-center">
                <div className="w-32 h-32 rounded-2xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center mx-auto">
                  <StepIcon className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4" data-testid="tour-step-title">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-3">
                {step.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-sm"
                    data-testid={`tour-feature-${currentStep}-${index}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border/50">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="glassmorphism"
              data-testid="button-tour-prev"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {tourSteps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                  data-testid={`tour-dot-${index}`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextStep}
              className="bg-primary hover:bg-primary/90"
              data-testid="button-tour-next"
            >
              {currentStep === tourSteps.length - 1 ? (
                <>
                  Book Discovery Call
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
