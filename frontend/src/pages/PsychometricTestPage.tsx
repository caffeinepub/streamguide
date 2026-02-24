import { useRef } from 'react';
import { CheckCircle, Brain, Target, TrendingUp, BarChart, Tag } from 'lucide-react';
import PsychometricTestBookingForm from '../components/forms/PsychometricTestBookingForm';

export default function PsychometricTestPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/section-bg-pattern.dim_2400x600.png)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(251, 191, 36, 0.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 to-orange-50/95 dark:from-amber-950/95 dark:to-orange-950/95"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                <Brain className="w-8 h-8 text-amber-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Psychometric Test</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover your unique strengths, interests, and aptitudes through our scientifically designed psychometric
              assessment tailored for Indian students.
            </p>

            {/* Pricing Display */}
            <div className="mb-8 inline-flex items-center gap-4 bg-card border-2 border-amber-600/30 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Intro Offer</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-bold text-amber-600">Rs. 749</span>
                <span className="text-lg text-muted-foreground line-through">Rs. 1249</span>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Book Your Test Now
            </button>
          </div>
        </div>
      </section>

      {/* What is Psychometric Testing */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              What is Psychometric Testing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              A psychometric test is a scientific assessment that measures your cognitive abilities, personality traits,
              interests, and aptitudes. It helps you understand yourself better and make informed decisions about your
              educational stream.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  icon: Target,
                  title: 'Identify Your Strengths',
                  description: 'Understand your natural abilities and areas where you excel.',
                },
                {
                  icon: Brain,
                  title: 'Discover Your Interests',
                  description: 'Find out what subjects and careers align with your passions.',
                },
                {
                  icon: TrendingUp,
                  title: 'Career Guidance',
                  description: 'Get recommendations for streams that match your profile.',
                },
                {
                  icon: BarChart,
                  title: 'Data-Driven Insights',
                  description: 'Receive detailed reports based on scientific analysis.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">How It Works</h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Book Your Test',
                  description:
                    "Fill out the booking form below with your preferred date and time. We'll confirm your appointment.",
                },
                {
                  step: '2',
                  title: 'Take the Assessment',
                  description:
                    'Complete the psychometric test at our center or online. The test typically takes 60-90 minutes.',
                },
                {
                  step: '3',
                  title: 'Receive Your Report',
                  description:
                    'Get a detailed report analyzing your strengths, interests, and recommended educational streams.',
                },
                {
                  step: '4',
                  title: 'Counseling Session',
                  description:
                    'Discuss your results with our expert counselors to understand the best path forward.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={formRef} className="py-16 md:py-20 bg-background scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Psychometric Test</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 1-2 business days to confirm your appointment.
              </p>
            </div>
            <PsychometricTestBookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
