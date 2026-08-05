import { useEffect, useRef, useState } from "react";
import { Target, Eye, Diamond } from "@phosphor-icons/react";
import { ABOUT_TEXT } from "@/data/servicred";

const PILLARS = [
  {
    title: "Missão",
    text: "Oferecer soluções inteligentes em crédito imobiliário com excelência e ética, proporcionando segurança e tranquilidade para que nossos clientes realizem seus sonhos.",
    icon: Target,
  },
  {
    title: "Visão",
    text: "Ser referência em assessoria de crédito imobiliário em São Paulo, reconhecida pela confiança, resultados e relacionamento.",
    icon: Eye,
  },
  {
    title: "Valores",
    text: "Integridade, compromisso com o cliente, transparência, excelência no atendimento, responsabilidade e foco em resultados.",
    icon: Gem,
  },
];

export function About() {
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quem-somos" className="section-y bg-white" ref={sectionRef}>
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
        {/* Left column — heading + text */}
        <div>
          <p
            className={`eyebrow text-gold transition-all duration-600 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          >
            Quem somos
          </p>
          <div
            className={`rule-gold mt-4 transition-all duration-600 delay-200 ${visible ? "w-16 opacity-100" : "w-0 opacity-0"}`}
          />
          <h2
            className={`h-section mt-5 text-navy-deep transition-all duration-600 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Crédito imobiliário com orientação em cada etapa
          </h2>
          <p
            className={`lead mt-6 max-w-xl text-slate-blue transition-all duration-600 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {ABOUT_TEXT}
          </p>

          <a
            href="#servicos"
            className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep transition-colors hover:text-gold transition-all duration-600 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
          >
            Conheça nossos serviços
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </div>

        {/* Right column — Missão, Visão, Valores */}
        <div className="grid gap-5">
          {PILLARS.map(({ title, text, icon: Icon }, i) => (
            <div
              key={title}
              className={`group border border-gold/10 bg-cream/50 p-7 transition-all duration-600 hover:border-gold/30 hover:shadow-soft ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${350 + i * 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold transition-colors group-hover:bg-gold/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-deep">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-blue">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
