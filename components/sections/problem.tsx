import { Building, Calendar, FileText, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

const problems = [
  { icon: MessageSquare, key: "messages" },
  { icon: Calendar, key: "calendar" },
  { icon: FileText, key: "documents" },
  { icon: Building, key: "healthSchool" },
] as const;

export function Problem() {
  const t = useTranslations("problem");

  return (
    <section className="py-[clamp(1rem,5svh,6rem)]">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
          {t("description")}
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {problems.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="flex items-center gap-4 rounded-xl border border-destructive/10 bg-destructive/[0.03] p-4 transition-colors dark:border-destructive/20 dark:bg-destructive/[0.06]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <Icon className="size-5" />
              </div>
              <p className="text-sm font-medium leading-snug text-foreground/80">
                {t(`items.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
