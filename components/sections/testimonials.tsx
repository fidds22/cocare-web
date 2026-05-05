import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  { key: "mariana", avatarInitial: "M" },
  { key: "carmen", avatarInitial: "C" },
  { key: "lucia", avatarInitial: "L" },
] as const;

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-[clamp(1rem,5svh,6rem)]">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
          {t("description")}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ key, avatarInitial }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Quote className="mb-4 size-8 text-primary/20" />
              <blockquote className="text-sm leading-relaxed text-card-foreground/80">
                &ldquo;{t(`items.${key}.quote`)}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t pt-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {avatarInitial}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-card-foreground">
                    {t(`items.${key}.name`)}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {t(`items.${key}.role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
