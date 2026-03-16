import { BRAND_NAME } from "@/constants/brand";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle, Star } from "lucide-react";

function PackagesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-background" id="programs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span>Special Launch Prices — 50% Off</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Smart Choice Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the program that best suits your needs. All programs are
            designed specifically for Class 8-10 students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Smart Choice Discovery */}
          <div
            className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            data-ocid="packages.discovery.card"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Smart Choice Discovery
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand yourself, discover your path
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-foreground">
                  Rs. 999
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  Rs. 1999
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                  50% Off — Special Launch Price
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Stream & Career Assessment Test
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">
                  Personalized 40+ Page Report including:
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">Detailed Skills Map</span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">Skills Gap Analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">Personality Analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Learning Recommendations
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Recommended Streams Selection
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm pl-4">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Most Suitable Career Recommendations
                </span>
              </li>
            </ul>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() =>
                  navigate({ to: "/psychometric-test", hash: "booking" })
                }
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
                data-ocid="packages.discovery.register.button"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <Link
                to="/psychometric-test"
                className="mt-2 w-full inline-flex items-center justify-center gap-1 text-sm text-amber-700 hover:text-amber-800 hover:underline transition-colors"
                data-ocid="packages.discovery.learn_more.link"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2: Smart Choice Guidance — Most Popular */}
          <div
            className="bg-card border-2 border-amber-500 rounded-2xl p-6 flex flex-col shadow-xl relative"
            data-ocid="packages.guidance.card"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                <Star className="w-3 h-3 fill-current" />
                Most Popular
              </span>
            </div>

            <div className="mb-4 mt-2">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Smart Choice Guidance
              </h3>
              <p className="text-sm text-muted-foreground">
                Assessment + Expert Counseling
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-amber-600">
                  Rs. 2999
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  Rs. 5999
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                  50% Off — Special Launch Price
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">
                  Everything in Smart Choice Discovery, plus:
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Individual Counseling Session — 1 session up to 60 minutes
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Takes into account your specific needs and current context
                </span>
              </li>
            </ul>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() => navigate({ to: "/counseling", hash: "booking" })}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
                data-ocid="packages.guidance.register.button"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <Link
                to="/counseling"
                className="mt-2 w-full inline-flex items-center justify-center gap-1 text-sm text-amber-700 hover:text-amber-800 hover:underline transition-colors"
                data-ocid="packages.guidance.learn_more.link"
              >
                Learn More
              </Link>
              <a
                href="https://www.bodhami.com/summary/counselor?id=SameerPopli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors"
                data-ocid="packages.guidance.meet_counselor.link"
              >
                Meet your Counselor
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Smart Choice Mentorship — Coming Soon */}
          <div
            className="bg-card border border-dashed border-border rounded-2xl p-6 flex flex-col opacity-80"
            data-ocid="packages.mentorship.card"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-foreground">
                  Smart Choice Mentorship Program
                </h3>
              </div>
              <span className="inline-block text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">
                Coming Soon
              </span>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground italic">
                Pricing to be announced
              </p>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Full guidance & support throughout your academic journey from
                  Class 8 to 12
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Stream and subject selection guidance
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">Careful career planning</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Course and college selection
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-foreground">Bridging skill gaps</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:border-amber-300 hover:text-amber-700 transition-all"
                data-ocid="packages.mentorship.contact.button"
              >
                Contact Us for More Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StreamCareer810Page() {
  const whyPoints = [
    {
      title: "Right Stream = Right Career",
      description:
        "Choosing the right stream in class 10 sets the foundation for every career decision that follows. The Smart Choice helps you get it right the first time.",
    },
    {
      title: "Science-Backed Assessment",
      description:
        "Our psychometric tests are designed specifically for Indian students, measuring aptitude, personality, and interests to give you reliable, actionable insights.",
    },
    {
      title: "Personalized, Not Generic",
      description:
        "Every student is unique. The Smart Choice tailors its guidance to your specific strengths, learning style, and aspirations.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full">
                <BookOpen className="w-4 h-4" />
                <span>For Students in Classes 8–10</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Stream Selection for{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Class 8-10
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Help students in classes 8–10 discover the right stream —
                Science, Commerce, or Arts — and aligned career paths through{" "}
                <strong className="text-foreground">{BRAND_NAME}'s</strong>{" "}
                proven assessment and guidance programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                  data-ocid="stream810.hero.explore.button"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/hero-stream-810.dim_1600x900.png"
                alt="Class 8-10 students choosing their stream with The Smart Choice"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <PackagesSection />

      {/* Why The Smart Choice */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why {BRAND_NAME}?
              </h2>
              <p className="text-lg text-muted-foreground">
                The decision made at the end of class 10 shapes a student's
                entire academic and professional trajectory. Don't leave it to
                guesswork.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
