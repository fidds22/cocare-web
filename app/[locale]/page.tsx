import { CoCareWordmark } from "@/components/brand/co-care-wordmark";
import { Header } from "@/components/header";
import { AppPreview } from "@/components/sections/app-preview";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { PhotoBreak } from "@/components/sections/photo-break";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionNav } from "@/components/ui/section-nav";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("footer");

  return (
    <main>
      <SectionNav />
      <Header />

      <Hero />

      <AnimatedSection id="problema" variant="up">
        <Problem />
      </AnimatedSection>

      <AnimatedSection variant="up">
        <Solution />
      </AnimatedSection>

      <AnimatedSection
        id="como-funciona"
        variant="up"
        className="flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <AppPreview />
      </AnimatedSection>

      <AnimatedSection
        id="funciones"
        variant="up"
        className="flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <Features />
      </AnimatedSection>

      <AnimatedSection variant="fade">
        <Stats />
      </AnimatedSection>

      <AnimatedSection variant="fade">
        <PhotoBreak />
      </AnimatedSection>

      <AnimatedSection
        id="testimonios"
        variant="up"
        className="flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection
        id="faq"
        variant="up"
        className="flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <Faq />
      </AnimatedSection>

      <AnimatedSection
        id="waitlist"
        variant="up"
        className="flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <Cta />
      </AnimatedSection>

      <footer className="border-t bg-muted/50 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <a href="#" className="inline-flex min-w-0 justify-center sm:justify-start">
              <CoCareWordmark layout="horizontal" size="sm" />
            </a>
            <p className="text-sm text-muted-foreground">{t("tagline")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
