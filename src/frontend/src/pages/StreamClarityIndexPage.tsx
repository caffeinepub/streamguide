import TallyFormEmbed from "@/components/forms/TallyFormEmbed";
import { ArrowRight, ClipboardList, Sparkles, Target } from "lucide-react";

export default function StreamClarityIndexPage() {
  return (
    <div className="w-full">
      {/* Intro Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
              <Sparkles className="w-4 h-4" />
              <span>Free Tool — Takes 2 Minutes</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Confused About Which Stream to Choose After 10th?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3">
              Take this quick 2-minute test to find out how clear you really
              are.
            </p>
            <p className="text-base text-muted-foreground">
              Get your{" "}
              <strong className="text-foreground">Stream Clarity Score</strong>,
              key insights, and a personalised action plan — completely free.
            </p>
          </div>

          {/* What you get */}
          <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center bg-white/70 rounded-xl p-5 border border-amber-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Your Clarity Score
              </p>
              <p className="text-xs text-muted-foreground">
                Know exactly where you stand before making a major decision
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/70 rounded-xl p-5 border border-amber-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <ClipboardList className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Key Insights
              </p>
              <p className="text-xs text-muted-foreground">
                Understand what's holding you back or confirming your choice
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/70 rounded-xl p-5 border border-amber-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <ArrowRight className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                What to Do Next
              </p>
              <p className="text-xs text-muted-foreground">
                Get a clear action plan tailored to your clarity level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Form Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Start the Stream Clarity Index Test
              </h2>
              <p className="text-muted-foreground text-sm">
                It only takes 2 minutes.
              </p>
            </div>
            <TallyFormEmbed
              formId="44LA9b"
              hideTitle={true}
              dynamicHeight={true}
              height={600}
              title="Stream Clarity Index Test"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
