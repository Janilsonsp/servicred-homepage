import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { DIFFERENTIALS, WHY_CHOOSE } from "@/data/servicred";

export function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="page-section bg-white overflow-hidden" ref={sectionRef}>
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p
            className={`eyebrow text-gold transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Diferenciais da ServiCred
          </p>
          <div
            className={`rule-gold mt-4 transition-all duration-700 delay-200 ${
              visible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <h2
            className={`h-section mt-5 text-navy-deep transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Um acompanhamento próximo, do primeiro contato à assinatura
          </h2>

          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 transition-all duration-600 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold hover:bg-gold/25 hover:scale-125 transition-all duration-300">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-slate-blue">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`rounded-none bg-navy-deep p-8 md:p-10 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h3 className="text-2xl text-white">Por que escolher a ServiCred?</h3>
          <div className="rule-gold mt-4" />
          <ul className="mt-8 space-y-6">
            {WHY_CHOOSE.map(({ title, icon: Icon }, index) => (
              <li
                key={title}
                className={`flex items-center gap-4 transition-all duration-600 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 hover:scale-110 transition-all duration-300">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-white/85">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
