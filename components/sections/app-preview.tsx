"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Heart,
  MessageCircle,
  Monitor,
  Smartphone,
  Tablet,
  User,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "calendar", icon: CalendarDays },
  { key: "messages", icon: MessageCircle },
  { key: "expenses", icon: Wallet },
  { key: "profile", icon: User },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const DEVICES = [
  { key: "mobile", icon: Smartphone },
  { key: "tablet", icon: Tablet },
  { key: "desktop", icon: Monitor },
] as const;

type DeviceKey = (typeof DEVICES)[number]["key"];

const PLATFORMS = ["iOS", "Android", "Web", "macOS", "Windows"] as const;

export function AppPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("calendar");
  const [activeDevice, setActiveDevice] = useState<DeviceKey>("mobile");
  const t = useTranslations("appPreview");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (activeDevice === "desktop" && window.innerWidth < 768) {
          setActiveDevice("mobile");
        }
      }, 150);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [activeDevice]);

  return (
    <section className="border-t bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
          {t("description")}
        </p>

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          {PLATFORMS.map((platform) => (
            <div
              key={platform}
              className="flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {platform}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-lg border bg-background/60 p-1 shadow-sm backdrop-blur-sm">
          {DEVICES.map(({ key, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveDevice(key)}
              className={cn(
                "flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition-all",
                activeDevice === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
                key === "desktop" && "hidden md:flex",
              )}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{t(`devices.${key}`)}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center px-4 py-8">
          <div
            className={cn(
              "relative rounded-2xl border-8 border-foreground/10 bg-background shadow-2xl transition-all duration-300",
              activeDevice === "mobile" &&
                "h-[550px] w-[280px] sm:h-[600px] sm:w-[300px] md:h-[700px] md:w-[350px]",
              activeDevice === "tablet" &&
                "h-[450px] w-full max-w-[650px] md:h-[550px] lg:h-[600px] lg:max-w-[800px]",
              activeDevice === "desktop" &&
                "h-[450px] w-full max-w-4xl md:h-[550px] lg:h-[600px] lg:max-w-5xl",
            )}
          >
            <div
              className={cn(
                "relative flex h-full w-full flex-col overflow-hidden rounded-xl p-4",
                activeDevice === "mobile" && "text-sm",
                activeDevice === "tablet" && "p-6 text-base",
                activeDevice === "desktop" && "p-8 text-base",
              )}
            >
              {activeDevice === "mobile" && (
                <div className="mb-3 flex shrink-0 items-center justify-between text-[10px] text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-4 rounded-full bg-foreground/30" />
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                  </div>
                </div>
              )}

              <div className="mb-4 flex shrink-0 items-center justify-between">
                <span className="font-bold text-primary">coCare</span>
                <div className="size-6 rounded-full bg-primary/20 md:size-10" />
              </div>

              <div
                className={cn(
                  "flex flex-1 gap-4",
                  activeDevice === "mobile" && "flex-col pb-16",
                  activeDevice !== "mobile" && "flex-row gap-6",
                )}
              >
                {activeDevice !== "mobile" && (
                  <div className="flex w-36 flex-col gap-2 lg:w-48">
                    {TABS.map(({ key, icon: Icon }) => (
                      <PreviewNavButton
                        key={key}
                        active={activeTab === key}
                        label={t(`tabs.${key}`)}
                        onClick={() => setActiveTab(key)}
                        icon={<Icon className="size-4 lg:size-5" />}
                      />
                    ))}
                  </div>
                )}

                <div className="relative min-h-0 flex-1">
                  <PreviewScreen tab={activeTab} />
                </div>
              </div>

              {activeDevice === "mobile" && (
                <div className="absolute inset-x-0 bottom-0 z-10 flex justify-around border-t bg-card/80 px-2 py-1.5 backdrop-blur-sm">
                  {TABS.map(({ key, icon: Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={cn(
                        "flex flex-col items-center gap-0.5 transition-colors",
                        activeTab === key
                          ? "text-primary"
                          : "text-muted-foreground/40 hover:text-muted-foreground/70",
                      )}
                      aria-label={t(`tabs.${key}`)}
                    >
                      <span
                        className={cn(
                          "mb-0.5 h-0.5 w-3 rounded-full transition-all duration-200",
                          activeTab === key ? "bg-primary" : "bg-transparent",
                        )}
                      />
                      <Icon className="size-3.5" />
                      <span className="text-[6px] font-medium">{t(`tabs.${key}`)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewNavButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-medium transition-all",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PreviewScreen({ tab }: { tab: TabKey }) {
  const t = useTranslations("appPreview.screens");

  if (tab === "messages") {
    return (
      <div className="scrollbar-none absolute inset-0 flex flex-col gap-1.5 overflow-y-auto">
        <div className="mb-1 flex items-center gap-1.5 border-b pb-1.5">
          <div className="size-4 rounded-full bg-primary/20" />
          <span className="text-[9px] font-semibold text-card-foreground">Carlos</span>
        </div>
        {["one", "two", "three", "four"].map((key, index) => (
          <div
            key={key}
            className={cn(
              "flex max-w-[80%] flex-col",
              index % 2 ? "items-end self-end" : "items-start self-start",
            )}
          >
            <div
              className={cn(
                "rounded-lg px-2 py-1 text-[8px] leading-snug",
                index % 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-card-foreground",
              )}
            >
              {t(`messages.${key}`)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tab === "expenses") {
    return (
      <div className="scrollbar-none absolute inset-0 space-y-2 overflow-y-auto">
        <div className="rounded-lg bg-primary/10 p-2 text-center">
          <div className="text-[7px] text-muted-foreground">{t("expenses.month")}</div>
          <div className="text-[10px] font-bold text-primary">{t("expenses.balance")}</div>
          <div className="text-[7px] text-muted-foreground">{t("expenses.owed")}</div>
        </div>
        {["uniform", "swimming", "supplies"].map((key) => (
          <div key={key} className="flex items-center gap-2 rounded-lg border bg-card p-1.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded bg-secondary text-[10px]">
              $
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[8px] font-medium text-card-foreground">
                {t(`expenses.items.${key}`)}
              </div>
              <div className="text-[7px] text-muted-foreground">{t("expenses.split")}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tab === "profile") {
    return (
      <div className="scrollbar-none absolute inset-0 space-y-2 overflow-y-auto">
        <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-[14px]">
            <Heart className="size-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-card-foreground">Lucas Garcia</div>
            <div className="text-[8px] text-muted-foreground">{t("profile.age")}</div>
          </div>
        </div>
        {["school", "allergies", "emergency"].map((key) => (
          <div key={key} className="rounded-lg border bg-card p-2">
            <div className="text-[7px] font-semibold text-primary">
              {t(`profile.cards.${key}.label`)}
            </div>
            <div className="text-[8px] text-card-foreground">
              {t(`profile.cards.${key}.value`)}
            </div>
            <div className="text-[7px] text-muted-foreground">
              {t(`profile.cards.${key}.detail`)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="scrollbar-none absolute inset-0 space-y-2 overflow-y-auto">
      <div className="rounded-lg border bg-card p-2">
        <div className="mb-1.5 text-[9px] font-semibold text-card-foreground">
          {t("calendar.month")}
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {Array.from({ length: 28 }, (_, i) => (
            <div
              key={i}
              className={cn(
                "flex size-5 items-center justify-center rounded text-[8px]",
                i === 6 && "bg-primary font-bold text-primary-foreground",
                i === 13 && "bg-accent font-bold text-accent-foreground",
                i !== 6 && i !== 13 && "text-muted-foreground",
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border bg-card p-2">
        <div className="text-[8px] font-medium text-card-foreground">
          {t("calendar.pickup")}
        </div>
        <div className="text-[7px] text-muted-foreground">{t("calendar.time")}</div>
      </div>
      <div className="rounded-lg border bg-card p-2">
        <div className="text-[8px] font-medium text-card-foreground">
          {t("calendar.appointment")}
        </div>
        <div className="text-[7px] text-muted-foreground">{t("calendar.appointmentTime")}</div>
      </div>
    </div>
  );
}
