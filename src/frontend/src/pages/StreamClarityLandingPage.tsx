import { Badge } from "@/components/ui/badge";
import { BRAND_NAME } from "@/constants/brand";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle,
  Target,
} from "lucide-react";

export default function StreamClarityLandingPage() {
  const benefits = [
    {
      icon: Target,
      title: "Identify Your Strengths",
      description: "Know exactly where your natural abilities lie",
    },
    {
      icon: Brain,
      title: "Discover Your Interests",
      description: "Find streams and careers that match your personality",
    },
    {
      icon: BarChart2,
      title: "Get Stream Recommendations",
      description: "Science-backed guidance: Science, Commerce, or Arts",
    },
    {
      icon: BookOpen,
      title: "Receive a 40+ Page Report",
      description: "A detailed, personalized report — not a generic template",
    },
  ];

  const reportItems = [
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
      <section className="bg-gradient-to-b from-orange-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Stop Guessing. Start Knowing.{" "}
              <span className="text-amber-600">
                Choose Your Stream with Confidence.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {BRAND_NAME} Discovery, our comprehensive scientifically designed
              stream and career selection test, gives you a 40+ page
              personalized report that shows exactly which stream - Science,
              Commerce, or Arts - is right for{" "}
              <strong className="text-foreground">YOU</strong>.
            </p>

            {/* Pricing Block */}
            <div className="inline-flex flex-col items-center gap-3 mb-8">
              <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-4 py-1 font-semibold">
                Special Launch Price — 50% Off
              </Badge>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-bold text-amber-600">
                  Rs. 999
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  Rs. 1999
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                data-ocid="stream_clarity.primary_button"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Complete Clarity Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-muted-foreground">
                40+ page report · Science-backed · Personalized for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              What You'll Discover
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-amber-200 hover:shadow-md transition-all"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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

      {/* What's in Your Report */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What's Inside Your 40+ Page Report
            </h2>
            <p className="text-muted-foreground mb-8">
              Every section is crafted specifically for you — not a generic
              template.
            </p>
            <ul className="space-y-3 text-left inline-block">
              {reportItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Take the Next Step Towards Clarity
            </h2>
            <p className="text-amber-100 mb-6 text-lg">
              Thousands of students are confused about their stream.{" "}
              {BRAND_NAME} Discovery gives you the clarity you need — backed by
              data, not guesswork.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">Rs. 999</span>
                <span className="text-amber-200 line-through text-lg">
                  Rs. 1999
                </span>
              </div>
              <button
                type="button"
                data-ocid="stream_clarity.secondary_button"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-amber-700 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Complete Clarity Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
