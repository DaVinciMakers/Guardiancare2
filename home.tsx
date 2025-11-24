import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import FeatureShowcase from '@/components/FeatureShowcase';
import RadarSection from '@/components/RadarSection';
import IndustrySelector from '@/components/IndustrySelector';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import PricingSection from '@/components/PricingSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import ProductTour from '@/components/ProductTour';
import AppointmentDashboard from '@/components/mockups/AppointmentDashboard';
import LeadDashboard from '@/components/mockups/LeadDashboard';
import CommunicationDashboard from '@/components/mockups/CommunicationDashboard';

export default function Home() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" data-testid="page-home">
      <Navigation />
      
      <Button
        size="lg"
        className="fixed bottom-6 right-6 z-40 rounded-full shadow-2xl bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300"
        onClick={() => setIsTourOpen(true)}
        data-testid="button-open-tour"
        style={{
          boxShadow: '0 0 30px rgba(0, 255, 100, 0.3), 0 10px 25px rgba(0, 0, 0, 0.4)'
        }}
      >
        <Compass className="w-5 h-5 mr-2" />
        Take a Tour
      </Button>

      <ProductTour isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
      
      {/* 1. Hook: Grab attention with hero */}
      <Hero />
      
      {/* 2. Personalize: Help visitors see themselves */}
      <IndustrySelector />
      
      {/* 3. Educate: Show what we offer */}
      <FeaturesGrid />

      <FeatureShowcase
        badge="Smart Website"
        title="Professional Website Built on Go High Level"
        description="Get a custom high-converting website that captures leads 24/7. Integrated booking calendar, mobile-friendly design, and conversion-optimized layout—all set up and ready to go."
        features={[
          "Custom design tailored to your business",
          "Integrated booking calendar for appointments",
          "Mobile-responsive and fast-loading",
          "Lead capture forms strategically placed",
          "Built on Go High Level platform"
        ]}
        imagePosition="left"
        mockupContent={<LeadDashboard />}
      />

      <FeatureShowcase
        badge="Automation"
        title="Never Miss a Lead Again"
        description="Automated email and SMS follow-ups nurture every prospect. Missed call text back ensures you respond instantly even when you are busy. Set it up once and let it run forever."
        features={[
          "Automated email and SMS sequences",
          "Missed call text back for instant response",
          "Personalized messaging at scale",
          "CRM pipeline with notifications",
          "Track every interaction automatically"
        ]}
        imagePosition="right"
        mockupContent={<CommunicationDashboard />}
      />

      <FeatureShowcase
        badge="Outbound Leads"
        title="500 Qualified Contacts Every Month"
        description="Cold email, SMS, and call campaigns that fill your calendar. We source, target, and deliver 500 guaranteed contacts monthly while you focus on closing deals."
        features={[
          "500 guaranteed contacts per month",
          "Lead list sourcing and targeting",
          "Multi-channel outreach (email, SMS, calls)",
          "Appointment setting automation",
          "Performance tracking and optimization"
        ]}
        imagePosition="left"
        mockupContent={<AppointmentDashboard />}
      />

      {/* 3b. Visual break: Intelligent automation showcase */}
      <RadarSection />

      {/* 4. Build trust: Show real results and social proof */}
      <CaseStudies />
      <Testimonials />

      {/* 5. Convert: Present pricing */}
      <PricingSection />

      {/* 7. Close: Final CTA for booking */}
      <BookingSection />

      <Footer />
    </div>
  );
}
