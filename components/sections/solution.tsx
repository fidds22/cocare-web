import { Bell, Smartphone, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const solutions = [
  { icon: Users, key: "family" },
  { icon: Bell, key: "aligned" },
  { icon: Smartphone, key: "singleApp" },
] as const;

export function Solution() {
  const t = useTranslations("solution");

  return (
    <section className="border-t bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
          {t("description")}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, key }, i) => (
            <div
              key={key}
              className={`group overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md${
                i === solutions.length - 1 ? " sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
