"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type AnimationVariant = "up" | "left" | "right" | "fade";

const variantClass: Record<AnimationVariant, string> = {
  up: "animate-fade-in-up",
  left: "animate-fade-in-left",
  right: "animate-fade-in-right",
  fade: "animate-fade-in",
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: AnimationVariant;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
}

export function AnimatedSection({
  children,
  className,
  id,
  variant = "up",
  delay,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-none",
        !inView && "opacity-0",
        inView && variantClass[variant],
        delay && `animation-delay-${delay}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
