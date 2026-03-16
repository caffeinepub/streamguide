import { BRAND_NAME } from "@/constants/brand";
import {
  BarChart,
  Brain,
  CheckCircle,
  FileText,
  Tag,
  Target,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import TallyFormEmbed from "../components/forms/TallyFormEmbed";

export default function PsychometricTestPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    {
      icon: Target,
      title: "Identify Your Strengths",
      description:
        "Understand your natural abilities and the areas where you truly excel.",
    },
    {
      icon: Brain,
      title: "Discover Your Interests",
      description:
        "Find out which subjects and careers align with your passions and personality.",
    },
    {
      icon: TrendingUp,
      title: "Recommended Streams & Careers",
      description:
        "Get science-backed recommendations for streams and careers that match your profile.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights",
      description:
        "Receive a detailed 40+ page personalized report with actionable guidance.",
    },
  ];

  const reportIncludes = [
    "Detailed Skills Map",
    "Skills Gap Analysis",
    "Personality Analysis",
    "Learning Recommendations",
    "Recommended Streams Selection",
    "Most Suitable Career Recommendations",
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
                <Brain className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">
                  {BRAND_NAME} Solution
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Smart Choice Discovery
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The Smart Choice Discovery is your first step toward a confident
              future. Through a scientifically designed assessment and a
              personalized 40+ page report, you'll discover your strengths,
              interests, and the streams and careers best suited to you.
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
                  Rs. 999
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  Rs. 1999
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              data-ocid="discovery.hero.book.button"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              What's Included in Smart Choice Discovery?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              The Smart Choice Discovery gives you everything you need to
              understand yourself and make an informed decision about your
              academic stream and career path.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((item) => {
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

      {/* 40+ Page Report */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Your Personalized 40+ Page Report
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Every Smart Choice Discovery assessment comes with a
                  comprehensive, personalized 40+ page report — crafted
                  specifically for you, not a generic template.
                </p>
                <ul className="space-y-3">
                  {reportIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border-2 border-amber-200 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-amber-600 mb-2">
                  40+
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  Page Report
                </div>
                <div className="text-sm text-muted-foreground">
                  Personalized for you
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  Make The Smart Choice with confidence — backed by data and
                  expert analysis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section
        id="booking"
        ref={formRef}
        className="py-16 md:py-20 bg-background scroll-mt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Register for Smart Choice Discovery
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 1-2
                business days to confirm your registration.
              </p>
            </div>
            <TallyFormEmbed
              formId="81k97r"
              hideTitle={true}
              dynamicHeight={true}
              height={200}
              title="Smart Choice Discovery — Registration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
