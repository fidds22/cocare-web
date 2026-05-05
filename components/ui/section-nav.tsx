"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export const SECTIONS = [
  { id: "inicio", key: "home" },
  { id: "problema", key: "problem" },
  { id: "como-funciona", key: "howItWorks" },
  { id: "funciones", key: "features" },
  { id: "testimonios", key: "testimonials" },
  { id: "faq", key: "faq" },
  { id: "waitlist", key: "contact" },
] as const;

export const HEADER_OFFSET = 64;

export function scrollToSectionId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }
}

export function SectionNav() {
  const active = useActiveSection();
  const t = useTranslations("nav");

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    scrollToSectionId(id);
  }

  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      aria-label={t("sectionsAria")}
    >
      <ul className="flex flex-col items-center gap-3">
        {SECTIONS.map(({ id, key }) => {
          const label = t(`sections.${key}`);

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="group relative flex items-center"
                aria-label={label}
              >
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </span>
                <span
                  className={cn(
                    "block rounded-full transition-all duration-200",
                    active === id
                      ? "size-3 bg-primary shadow-sm shadow-primary/30"
                      : "size-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
