"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  id,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div ref={ref} id={id} className={cn(inView && "animate-fade-in-up", className)}>
      {children}
    </div>
  );
}
