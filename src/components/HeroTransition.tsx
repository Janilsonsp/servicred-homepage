import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Eye, Lightning } from "@phosphor-icons/react";

const ITEMS = [
  { label: "Segurança em todas as etapas", icon: ShieldCheck },
  { label: "Transparência nas negociações", icon: Eye },
  { label: "Agilidade na aprovação", icon: Zap },
];

export function HeroTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative z-20 -mt-1 bg-navy-deep">
      <div className="container-page">
        <ul className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10">
          {ITEMS.map(({ label, icon: Icon }, i) => (
            <li
              key={label}
              className={`flex items-center justify-center gap-3 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-white/80">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
