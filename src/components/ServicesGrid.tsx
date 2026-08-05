import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/servicred";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
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
    <section id="servicos" className="section-y bg-cream overflow-hidden" ref={sectionRef}>
      <div className="container-page">
        <div className="max-w-2xl">
          <p
            className={`eyebrow text-gold transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nossos serviços
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
            Soluções completas para cada momento do seu projeto
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
