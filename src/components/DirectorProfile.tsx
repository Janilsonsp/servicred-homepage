import { useEffect, useRef, useState } from "react";
import juliane from "@/assets/juperfil.jpg";
import { DIRECTOR } from "@/data/servicred";
import { WhatsAppLink } from "./WhatsAppLink";

export function DirectorProfile() {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-y bg-navy-deep overflow-hidden" ref={sectionRef}>
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div
          className={`relative mx-auto w-full max-w-sm transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-x-6 bottom-0 top-8 rounded-none border border-gold/40 transition-all duration-700 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative overflow-hidden">
            <img
              src={juliane}
              alt={`${DIRECTOR.name}, ${DIRECTOR.role}`}
              width={948}
              height={1902}
              loading="lazy"
              decoding="async"
              className={`relative w-full rounded-none object-cover transition-all duration-[1.2s] ease-out ${
                visible ? "scale-100 opacity-100" : "scale-110 opacity-0"
              }`}
            />
            {/* Gradient overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent"
            />
          </div>

          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className={`absolute -bottom-4 -right-4 size-24 border-r-2 border-b-2 border-gold/30 transition-all duration-700 delay-500 ${
              visible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-4 translate-y-4"
            }`}
          />
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <p className="eyebrow text-gold-light">Nossa diretora</p>
          <div className="rule-gold mt-4" />
          <h2 className="h-section mt-5 text-white">{DIRECTOR.name}</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-gold">
            {DIRECTOR.role}
          </p>
          <p className="lead mt-6 max-w-xl text-white/80">{DIRECTOR.bio}</p>
          <div className="mt-8">
            <WhatsAppLink
              event="diretora_falar"
              message="Olá, Juliane! Acessei o site da ServiCred e gostaria de falar diretamente com você sobre crédito imobiliário."
              variant="outline"
            >
              Falar com a Juliane
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
