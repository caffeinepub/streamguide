import { BRAND_NAME } from "@/constants/brand";
import {
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Tag,
  Users,
  Video,
} from "lucide-react";
import { useRef } from "react";
import TallyFormEmbed from "../components/forms/TallyFormEmbed";

export default function CounselingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sessionFeatures = [
    {
      icon: Users,
      title: "Personal Attention",
      description:
        "Dedicated time with an expert counselor focused entirely on your needs and current context.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description:
        "Choose a date and time that works best for you and your family.",
    },
    {
      icon: Video,
      title: "Online or In-Person",
      description:
        "Meet with us virtually or visit our office based on your preference.",
    },
    {
      icon: Clock,
      title: "60-Minute Sessions",
      description:
        "Comprehensive discussions covering all your questions, goals, and concerns.",
    },
  ];

  const topics = [
    "Stream selection after 10th (Science, Commerce, Arts)",
    "Subject combinations and their career implications",
    "Understanding your strengths and interests",
    "Career options for different streams",
    "Entrance exams and preparation strategies",
    "College selection and admission process",
    "Balancing academics with extracurricular activities",
    "Addressing parental expectations and student aspirations",
  ];

  const onlinePerks = [
    "Convenient and flexible",
    "No travel required",
    "Same quality guidance",
  ];
  const inPersonPerks = [
    "Personal interaction",
    "Access to resources",
    "Comfortable environment",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/generated/section-bg-pattern.dim_2400x600.png)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(251, 191, 36, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 to-orange-50/95 dark:from-amber-950/95 dark:to-orange-950/95" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">
                  {BRAND_NAME} Solution
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Smart Choice Guidance
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Smart Choice Guidance is the complete package — the in-depth
              assessment and personalized report from Smart Choice Discovery,
              combined with a one-on-one expert counseling session that takes
              into account your individual needs and current context.
            </p>

            {/* Pricing Display */}
            <div className="mb-8 inline-flex items-center gap-4 bg-card border-2 border-amber-600/30 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Special Launch Price — 50% Off
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-bold text-amber-600">
                  Rs. 2999
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  Rs. 5999
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              data-ocid="guidance.hero.book.button"
            >
              Book Your Session Now
            </button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              What's Included in Smart Choice Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              The Smart Choice Guidance combines everything from Smart Choice
              Discovery with a personalized 1-on-1 counseling session — the most
              comprehensive guidance program we offer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessionFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-6 bg-card border border-border rounded-lg"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Topics We Cover
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Modes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Choose Your Mode
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border-2 border-border rounded-xl hover:border-amber-600 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Online Session
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect with our counselors from the comfort of your home via
                  video call. Perfect for busy schedules and students from any
                  location.
                </p>
                <ul className="space-y-2">
                  {onlinePerks.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-card border-2 border-border rounded-xl hover:border-amber-600 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  In-Person Session
                </h3>
                <p className="text-muted-foreground mb-4">
                  Visit our office for a face-to-face consultation. Ideal for
                  those who prefer personal interaction and want to see our
                  resources.
                </p>
                <ul className="space-y-2">
                  {inPersonPerks.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section
        ref={formRef}
        className="py-16 md:py-20 bg-muted/30 scroll-mt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Book Your Smart Choice Guidance Session
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 1-2
                business days to confirm your appointment.
              </p>
            </div>
            <TallyFormEmbed
              formId="EkX2OB"
              hideTitle={true}
              dynamicHeight={true}
              height={897}
              title="Smart Choice Guidance — Counseling Session"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
