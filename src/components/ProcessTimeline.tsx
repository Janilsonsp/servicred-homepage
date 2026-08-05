import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/servicred";

export function ProcessTimeline() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="section-y bg-white overflow-hidden" ref={sectionRef}>
      <div className="container-page">
        <div className="max-w-2xl">
          <p
            className={`eyebrow text-gold transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Como funciona
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
            Nosso atendimento, passo a passo
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`relative flex gap-5 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-cream font-display text-lg font-semibold text-navy-deep transition-all duration-500 hover:bg-gold/20 hover:scale-110 hover:border-gold ${
                      visible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    {index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-3 w-px flex-1 bg-border transition-all duration-700 delay-500 ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <div className="pb-2">
                  <span className="flex size-9 items-center justify-center rounded-md bg-navy-deep/5 text-navy hover:bg-navy-deep/10 transition-all duration-300">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-lg text-navy-deep">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-blue">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
