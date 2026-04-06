import { Shield, CreditCard, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_INDICATORS = [
  { icon: CreditCard, label: "No credit card required" },
  { icon: Clock, label: "Cancel anytime" },
  { icon: Shield, label: "Full platform access" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20 md:py-28 lg:min-h-screen lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-brand-blue/8 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-56 w-56 rounded-full bg-brand-green/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-1.5 text-sm font-medium text-brand-green">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
          </span>
          Limited to 20 employers this month
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Smarter Remote Hiring - {" "}
          <span className="bg-linear-to-r from-brand-blue to-brand-green bg-clip-text">
            Try It Free for 7 Days
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Connect with verified bilingual professionals from the Arab world,
          Asia, and Eastern Europe. Post jobs, review candidates, and hire
          directly - no agency fees, no salary markups.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-brand-green px-8 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green-hover hover:shadow-lg active:translate-y-0"
          >
            <a href="#signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-8 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            <a href="#features">See How It Works</a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-brand-green" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
