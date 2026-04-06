import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FEATURES, STEPS } from "@/features/landing/constants/features";

export function FeaturesSection() {
  return (
    <section id="features" className="border-t bg-muted/30 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Why Employers Choose OnlineMihna
          </h2>
          <p className="mt-2 text-muted-foreground">
            Built for efficient, modern remote hiring.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-border/70 bg-card/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="h-5 w-5 text-brand-blue" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              How It Works
            </h2>
            <p className="mt-2 text-muted-foreground">
              Simple. Structured. Professional.
            </p>
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10">
                  <span className="text-lg font-bold text-brand-green">
                    {step}
                  </span>
                </div>
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
