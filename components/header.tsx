"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { CoCareWordmark } from "@/components/brand/co-care-wordmark";
import { Button } from "@/components/ui/button";
import { SECTIONS, scrollToSectionId } from "@/components/ui/section-nav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const closeFromNavRef = useRef(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "es" : "en";
  const localizedPath = pathname.replace(/^\/(en|es)/, `/${nextLocale}`) || `/${nextLocale}`;

  function handleNavClick(id: string) {
    closeFromNavRef.current = true;
    scrollToSectionId(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 md:backdrop-blur-lg">
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-4 md:flex md:justify-between md:px-8">
        <a href="#" className="min-w-0 shrink py-1">
          <CoCareWordmark layout="horizontal" size="sm" />
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={localizedPath} locale={false}>
            <Button variant="ghost" size="sm" aria-label={t("switchLanguage")}>
              {nextLocale.toUpperCase()}
            </Button>
          </Link>
          <a href="#waitlist">
            <Button size="default" className="shadow-sm">
              {t("joinWaitlist")}
            </Button>
          </a>
        </div>

        <a href="#waitlist" className="justify-self-center md:hidden">
          <Button size="sm">{t("joinWaitlist")}</Button>
        </a>

        <div className="justify-self-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("openMenu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(20rem,85vw)]"
              onCloseAutoFocus={(e) => {
                e.preventDefault();
                if (closeFromNavRef.current) closeFromNavRef.current = false;
              }}
            >
              <SheetHeader>
                <SheetTitle className="text-left">{t("menu")}</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-2" aria-label={t("sectionsAria")}>
                <Link href={localizedPath} locale={false} className="w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-normal text-muted-foreground hover:text-foreground"
                  >
                    {t("switchTo", { locale: nextLocale.toUpperCase() })}
                  </Button>
                </Link>
                <a href="#waitlist" className="w-full" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full">
                    {t("joinWaitlist")}
                  </Button>
                </a>
                <div className="my-2 border-t" />
                {SECTIONS.map(({ id, key }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className={cn(
                      "w-full rounded-r-md border-l-2 py-2.5 pl-3 pr-3 text-left text-sm font-medium transition-colors",
                      active === id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                    )}
                  >
                    {t(`sections.${key}`)}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
