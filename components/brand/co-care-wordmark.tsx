"use client";

import { cn } from "@/lib/utils";

export type CoCareWordmarkProps = {
  layout?: "horizontal" | "vertical";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const WORD_ROW = {
  sm: "text-[22px] tracking-[-0.5px]",
  md: "text-[32px] tracking-[-1px] sm:text-[36px]",
  lg: "text-[36px] tracking-[-1.5px] sm:text-[42px]",
} as const;

export function CoCareWordmark({
  layout = "horizontal",
  showTagline = false,
  size = "md",
  className,
}: CoCareWordmarkProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1",
        layout === "vertical" && "items-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-0 items-baseline gap-px leading-none",
          layout === "vertical" && "justify-center",
          WORD_ROW[size],
        )}
      >
        <span className="font-display font-extralight italic text-[var(--wordmark-d-co)] dark:text-primary">
          Co
        </span>
        <span className="font-display font-light text-[var(--wordmark-d-care)] dark:text-foreground">
          Care
        </span>
      </div>
      {showTagline ? (
        <p
          className={cn(
            "max-w-[22rem] font-sans text-[10px] font-light uppercase tracking-[0.2em] text-[var(--wordmark-d-tagline)] dark:text-primary/80",
            layout === "vertical" && "text-center",
          )}
        >
          family coordination app
        </p>
      ) : null}
    </div>
  );
}
