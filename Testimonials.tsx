import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Rachel Martinez',
    role: 'Owner',
    company: 'Martinez Home Services',
    avatar: 'RM',
    quote: 'The smart website with booking calendar changed everything. The missed call text back alone saves me 10+ clients per month. The outbound leads keep my calendar full. Worth every penny.',
    rating: 5
  },
  {
    name: 'Tom Anderson',
    role: 'Founder',
    company: 'Anderson Coaching',
    avatar: 'TA',
    quote: 'I went from a basic website to a professional Go High Level site with full automation. Follow-ups happen automatically and the outbound campaigns bring qualified leads every week. Game changer.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Agent',
    company: 'Elite Realty',
    avatar: 'PP',
    quote: 'The website showcases our listings beautifully. Instant SMS responses mean we never lose a hot buyer. The outbound FSBO campaigns generate new listing appointments monthly. Best investment.',
    rating: 5
  },
  {
    name: 'Marcus Williams',
    role: 'CEO',
    company: 'Williams Consulting',
    avatar: 'MW',
    quote: 'Professional website, automated follow-ups, and 500 outbound leads monthly - all for $250. The complete package has tripled my booked discovery calls. Incredible value.',
    rating: 5
  },
  {
    name: 'Jessica Lee',
    role: 'Owner',
    company: 'Pristine Auto Detailing',
    avatar: 'JL',
    quote: 'The smart website handles bookings 24/7. Automated SMS keeps clients engaged. The outbound campaigns to car dealerships fill my schedule. I have hired 2 more employees to keep up.',
    rating: 5
  },
  {
    name: 'Brian Foster',
    role: 'Founder',
    company: 'Foster Financial',
    avatar: 'BF',
    quote: 'Guardian Care built my website, set up all my automations, and delivers 500 qualified leads monthly. The CRM pipeline tracks everything perfectly. This is how you scale a business.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            data-testid="heading-testimonials-title"
          >
            Loved by Business Owners
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-testimonials-description"
          >
            Hear from business owners growing with Guardian Care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 glassmorphism hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-testid={`star-${index}-${i}`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
