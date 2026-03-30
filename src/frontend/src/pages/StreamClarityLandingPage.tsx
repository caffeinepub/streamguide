import { Badge } from "@/components/ui/badge";
import { BRAND_NAME } from "@/constants/brand";
import {
  ArrowDown,
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle,
  Target,
} from "lucide-react";
import { useMemo } from "react";

type ClarityLevel = "low" | "moderate" | "high" | null;

function getClarityLevel(score: number): ClarityLevel {
  if (score > 0 && score <= 40) return "low";
  if (score > 40 && score <= 70) return "moderate";
  if (score > 70 && score <= 100) return "high";
  return null;
}

const CLARITY_CONFIG = {
  low: {
    label: "Low Clarity",
    badgeClass: "bg-red-100 text-red-800 border-red-200",
    body: "You currently have low clarity about your stream selection. This means your decision may be based on incomplete or unclear information.",
    insights: [
      "You may not fully understand subjects or career paths",
      "External influence could be affecting your thinking",
      "You may not have explored enough options",
    ],
    actionPlan: [
      "Explore different streams and careers",
      "Talk to a mentor or counselor",
      "Avoid making a rushed decision",
      "Get Clarity - Take our Stream and Career Guidance Test today!",
    ],
    ctaLabel: "Get Clarity",
    sectionBg: "from-red-50 via-orange-50 to-amber-50",
  },
  moderate: {
    label: "Moderate Clarity",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    body: "You have some clarity, but important gaps still exist. There's a risk of making a decision that may not fully align with your strengths.",
    insights: [
      "You have a general idea, but lack depth",
      "Career awareness may be limited",
      "Confidence may not be backed by data",
    ],
    actionPlan: [
      "Explore real career paths",
      "Identify your strengths scientifically",
      "Validate your stream choice - Take our Stream and Career Guidance Test today!",
    ],
    ctaLabel: "Validate your Choice",
    sectionBg: "from-amber-50 via-yellow-50 to-orange-50",
  },
  high: {
    label: "High Clarity",
    badgeClass: "bg-green-100 text-green-800 border-green-200",
    body: "You seem confident about your stream choice. However, confidence alone doesn't guarantee a right decision.",
    insights: [
      "You have done some research",
      "You understand your interests to some extent",
      "But hidden gaps may still exist",
    ],
    actionPlan: [
      "Double-check alignment with career goals",
      "Get expert validation before finalizing",
      "Be 100% Sure - Take our Stream and Career Guidance Test today!",
    ],
    ctaLabel: "Be 100% Sure",
    sectionBg: "from-green-50 via-emerald-50 to-amber-50",
  },
};

export default function StreamClarityLandingPage() {
  const { name, score, clarityLevel } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name") || "";
    const scoreParam = params.get("score");
    const scoreNum = scoreParam ? Number.parseFloat(scoreParam) : null;
    const level =
      scoreNum !== null && !Number.isNaN(scoreNum)
        ? getClarityLevel(scoreNum)
        : null;
    return { name: nameParam, score: scoreNum, clarityLevel: level };
  }, []);

  const scrollToMain = () => {
    document
      .getElementById("main-content")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const config = clarityLevel ? CLARITY_CONFIG[clarityLevel] : null;

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
      title: "Receive a Personalized Report",
      description:
        "A detailed, personalized report \u2014 not a generic template",
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
      {/* Part 1: Score Section */}
      {config && score !== null && (
        <section
          data-ocid="stream_clarity.panel"
          className={`bg-gradient-to-br ${config.sectionBg} py-14 md:py-20 border-b border-amber-100`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {/* Thank You Header */}
              {name && (
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    Thank You <span className="text-amber-600">{name}</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                    Your Report is Ready!
                  </p>
                </div>
              )}

              {/* Score Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 shadow-lg p-6 md:p-8">
                {/* Score + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-wide">
                      Your Stream Clarity Score
                    </p>
                    <p className="text-5xl font-extrabold text-amber-600">
                      {score.toFixed(2)}%
                    </p>
                  </div>
                  <Badge
                    className={`${config.badgeClass} text-base px-4 py-1.5 font-semibold self-start sm:self-center border`}
                  >
                    Clarity Level: {config.label}
                  </Badge>
                </div>

                {/* Body */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {config.body}
                </p>

                {/* Key Insights */}
                <div className="mb-5">
                  <h3 className="font-bold text-foreground mb-3">
                    Key Insights:
                  </h3>
                  <ul className="space-y-2">
                    {config.insights.map((insight) => (
                      <li key={insight} className="flex items-start gap-2">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-foreground text-sm">
                          {insight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Plan */}
                <div>
                  <h3 className="font-bold text-foreground mb-3">
                    Action Plan:
                  </h3>
                  <ul className="space-y-2">
                    {config.actionPlan.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">
                          {action}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Editorial scroll CTA \u2014 outside the card */}
              <button
                type="button"
                data-ocid="stream_clarity.scroll_button"
                className="mt-8 w-full flex flex-col items-center gap-2 cursor-pointer group bg-transparent border-none outline-none focus:outline-none"
                onClick={scrollToMain}
              >
                <span className="text-xl font-bold text-amber-700 group-hover:text-amber-900 transition-colors tracking-tight">
                  {config.ctaLabel}
                </span>
                <ArrowDown className="w-6 h-6 text-amber-600 group-hover:text-amber-800 animate-bounce transition-colors" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Part 2: Main Content */}
      <div id="main-content">
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
                {BRAND_NAME} Discovery, our comprehensive scientifically
                designed stream and career selection test, gives you a detailed
                personalized report that shows exactly which stream - Science,
                Commerce, or Arts - is right for{" "}
                <strong className="text-foreground">YOU</strong>.
              </p>

              {/* Pricing Block */}
              <div className="inline-flex flex-col items-center gap-3 mb-8">
                <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-4 py-1 font-semibold">
                  Special Launch Price \u2014 50% Off
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
                  40 page report \u00b7 Science-backed \u00b7 Personalized for
                  you
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
                What's Inside Your Personalized Report
              </h2>
              <p className="text-muted-foreground mb-8">
                Every section is crafted specifically for you \u2014 not a
                generic template.
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
                {BRAND_NAME} Discovery gives you the clarity you need \u2014
                backed by data, not guesswork.
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
    </div>
  );
}
