import { useRef } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import TallyFormEmbed from '../components/forms/TallyFormEmbed';

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // TODO: Replace this placeholder URL with your actual Tally form URL
  // Example: 'https://tally.so/r/yourFormId'
  // Or paste the full embed code from Tally
  const tallyFormUrl = 'https://tally.so/r/PLACEHOLDER';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Have questions about our services? Want to learn more about how we can help you choose the right
              educational path? We're here to help!
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Send Us a Message
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Other Ways to Reach Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">Available Mon-Sat, 9 AM - 6 PM</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Schedule an in-person meeting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How We Can Help You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'General Inquiries',
                  description: 'Learn more about our services, pricing, and how we can help your family.',
                },
                {
                  title: 'Stream Selection Guidance',
                  description: 'Get initial advice on choosing between Science, Commerce, and Arts streams.',
                },
                {
                  title: 'Test Information',
                  description: 'Understand our psychometric testing process and what to expect.',
                },
                {
                  title: 'Counseling Details',
                  description: 'Learn about our one-on-one counseling sessions and how they work.',
                },
                {
                  title: 'Parent Consultations',
                  description: 'Discuss your concerns as a parent and how we can support your child.',
                },
                {
                  title: 'Follow-up Support',
                  description: 'Get additional guidance after your initial consultation or test.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Tally Embed */}
      <section ref={formRef} className="py-16 md:py-20 bg-background scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 1-2 business days.
              </p>
            </div>
            <TallyFormEmbed formUrlOrEmbedCode={tallyFormUrl} height="700px" />
          </div>
        </div>
      </section>
    </div>
  );
}
