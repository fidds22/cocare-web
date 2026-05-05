import { Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export function Cta() {
  const t = useTranslations("cta");

  return (
    <section
      className="relative border-t bg-gradient-to-b from-background via-secondary/30 to-secondary/50 py-[clamp(1.25rem,6svh,7rem)]"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2
            id="waitlist-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl border bg-card p-6 shadow-lg md:p-8">
          <WaitlistForm />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="size-4 shrink-0" />
          <span>{t("privacy")}</span>
        </div>
      </div>
    </section>
  );
}
