import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/data/servicred";

const MOBILE_HEADER_HEIGHT = 56;

export function useSectionNavigation() {
  const [active, setActive] = useState("inicio");
  const isProgrammatic = useRef(false);
  const target = useRef<number | null>(null);
  const cleanup = useRef<(() => void) | null>(null);

  const navigateToSection = useCallback((sectionId: string) => {
    cleanup.current?.();
    cleanup.current = null;

    const section = document.getElementById(sectionId);
    if (!section) return;

    setActive(sectionId);
    isProgrammatic.current = true;

    const isMobile = window.innerWidth < 1024;
    const headerH = isMobile ? MOBILE_HEADER_HEIGHT : 0;
    const vpH = window.innerHeight - headerH;
    const secTop = section.getBoundingClientRect().top + window.scrollY;
    const secH = section.offsetHeight;

    const shouldCenter = secH < vpH && sectionId !== "contato";
    const top = sectionId === "contato"
      ? Math.max(0, secTop - headerH)
      : shouldCenter
        ? Math.max(0, secTop - headerH - (vpH - secH) / 2)
        : Math.max(0, secTop - headerH);

    target.current = top;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);

    const title = section.querySelector<HTMLElement>("h1, h2, h3");
    if (title) {
      title.setAttribute("tabindex", "-1");
      title.focus({ preventScroll: true });
    }

    if (reduced) {
      isProgrammatic.current = false;
      target.current = null;
      return;
    }

    let raf: number;
    let lastY = window.scrollY;
    let idle = 0;

    const check = () => {
      if (target.current === null) return;
      const y = window.scrollY;
      if (y === lastY) {
        idle++;
      } else {
        idle = 0;
        lastY = y;
      }
      if (idle > 5 || Math.abs(y - target.current) < 3) {
        isProgrammatic.current = false;
        target.current = null;
        return;
      }
      raf = requestAnimationFrame(check);
    };

    raf = requestAnimationFrame(check);
    cleanup.current = () => cancelAnimationFrame(raf);

    setTimeout(() => {
      cleanup.current?.();
      cleanup.current = null;
      isProgrammatic.current = false;
      target.current = null;
    }, 2000);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammatic.current) return;
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && NAV_ITEMS.some((i) => i.id === hash)) {
      requestAnimationFrame(() => navigateToSection(hash));
    }
  }, [navigateToSection]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && NAV_ITEMS.some((i) => i.id === hash)) {
        navigateToSection(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [navigateToSection]);

  return { active, navigateToSection } as const;
}
