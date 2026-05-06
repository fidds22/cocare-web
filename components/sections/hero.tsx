import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden border-b bg-gradient-to-b from-secondary/50 via-secondary/20 to-background py-8 md:py-[clamp(1.25rem,6svh,7rem)]"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              {t("badge")}
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              {t("headlinePrefix")}{" "}
              <span className="text-primary">{t("headlineHighlight")}</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl lg:mx-0">
              {t("subheading")}
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#waitlist"
                className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
              >
                {t("primaryCta")}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-lg border border-input bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground sm:w-auto"
              >
                {t("secondaryCta")}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="animate-fade-in-up animation-delay-300 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80"
                alt={t("imageAlt")}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
