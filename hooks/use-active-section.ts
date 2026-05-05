"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/components/ui/section-nav";

export function useActiveSection() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY + window.innerHeight * 0.35;
          let current: string = SECTIONS[0].id;

          for (const { id } of SECTIONS) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= offset) current = id;
          }

          setActive(current);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}
