import { BRAND_NAME } from "@/constants/brand";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: BookOpen,
      title: "Stream & Career Selection for Class 8-10",
      description:
        "Discover the right stream — Science, Commerce, or Arts — and the most aligned career paths through The Smart Choice's proven assessment and guidance programs.",
      path: "/stream-career-8-10",
      badge: "Classes 8-10",
    },
    {
      icon: GraduationCap,
      title: "Career Selection & Planning for Class 11-12",
      description:
        "Make informed career choices and plan your path to the right colleges and courses with The Smart Choice's expert guidance tailored for senior secondary students.",
      path: "/career-planning-11-12",
      badge: "Classes 11-12",
    },
  ];

  const features = [
    {
      title: "Scientific Assessment",
      description:
        "Psychometric tests designed specifically for Indian students across classes 8-12.",
    },
    {
      title: "Personalized Reports",
      description:
        "Detailed 40+ page reports with skills map, personality analysis, and career recommendations.",
    },
    {
      title: "Expert Counselors",
      description:
        "Experienced professionals who understand the Indian education landscape inside out.",
    },
    {
      title: "End-to-End Guidance",
      description:
        "From stream selection in 8th grade to college planning in 12th — The Smart Choice has you covered.",
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
                <span>For Students in Classes 8–12</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Make{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  The Smart Choice
                </span>{" "}
                for Your Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert career and stream guidance for students in grades 8–12.
                Discover your strengths, choose the right stream, and plan your
                path to success with science-backed assessments and personalized
                counseling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate({ to: "/stream-career-8-10" })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                  data-ocid="home.stream810.primary_button"
                >
                  For Class 8-10
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/career-planning-11-12" })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                  data-ocid="home.career1112.primary_button"
                >
                  For Class 11-12
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/hero-home-counseling.dim_1600x900.png"
                alt="A student and parent in a counseling session with The Smart Choice career counselor"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Smart Choice offers tailored programs for every stage of your
              academic journey, from class 8 all the way to class 12.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.path}
                  className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer"
                  onClick={() => navigate({ to: service.path })}
                  onKeyUp={(e) =>
                    e.key === "Enter" && navigate({ to: service.path })
                  }
                  data-ocid={
                    service.path === "/stream-career-8-10"
                      ? "home.stream810.card"
                      : "home.career1112.card"
                  }
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-amber-600" />
                      </div>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-1 transition-transform">
                      Explore Programs
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose {BRAND_NAME}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine scientific assessments with personalized counseling to
              help every student — from class 8 to class 12 — make confident,
              informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Smart Choice Journey Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a confident, well-planned academic
            future. Our experts are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate({ to: "/stream-career-8-10" })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-600 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              data-ocid="home.cta.stream810.button"
            >
              Class 8-10 Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/career-planning-11-12" })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all"
              data-ocid="home.cta.career1112.button"
            >
              Class 11-12 Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
