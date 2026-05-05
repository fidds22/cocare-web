import { Clock, Lock, Smartphone, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const stats = [
  { icon: Users, value: "500+", key: "families" },
  { icon: Clock, value: "3 min", key: "setup" },
  { icon: Lock, value: "100%", key: "private" },
  { icon: Smartphone, value: "1 app", key: "app" },
] as const;

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="border-y bg-gradient-to-b from-primary/5 to-primary/10 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, key }) => (
            <div key={key} className="text-center">
              <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {value}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
