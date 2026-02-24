import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, BookOpen, Users, MessageSquare } from 'lucide-react';
import { BRAND_NAME } from '@/constants/brand';

export default function HomePage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: MessageSquare,
      title: 'Contact Us',
      description: 'Get in touch with our counseling experts for personalized guidance.',
      path: '/contact',
      iconPosition: 'left',
    },
    {
      icon: BookOpen,
      title: 'Psychometric Test',
      description: 'Discover your strengths and interests through scientific assessment.',
      path: '/psychometric-test',
      iconPosition: 'center',
    },
    {
      icon: Users,
      title: '1:1 Counseling',
      description: 'Book a personal session with experienced education counselors.',
      path: '/counseling',
      iconPosition: 'right',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Choose Your Path with{' '}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert guidance for students in grades 8-10 to make informed decisions about their educational stream
                after 10th standard. We help you discover your strengths and choose the right path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate({ to: '/psychometric-test' })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                >
                  Take Psychometric Test
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate({ to: '/counseling' })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-amber-700 bg-white dark:bg-gray-800 dark:text-amber-400 border-2 border-amber-600 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-all"
                >
                  Book Counseling Session
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src="/assets/generated/hero-illustration.dim_1600x900.png"
                alt="Indian student and parent consulting with an education counselor"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive support to help you make the best educational decisions for your future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate({ to: service.path })}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose {BRAND_NAME}?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the Indian education system and help you navigate your options with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Expert Counselors',
                description: 'Experienced professionals who understand the Indian education landscape.',
              },
              {
                title: 'Scientific Assessment',
                description: 'Psychometric tests designed for Indian students and curriculum.',
              },
              {
                title: 'Personalized Guidance',
                description: 'One-on-one sessions tailored to your unique strengths and goals.',
              },
              {
                title: 'Proven Results',
                description: 'Helping students make confident decisions about their future.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards making an informed decision about your educational future.
          </p>
          <button
            onClick={() => navigate({ to: '/contact' })}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-600 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
