import { useEffect, useRef, useState } from "react";
import chaves from "@/assets/conquista-chaves.jpg";
import { WhatsAppLink } from "./WhatsAppLink";

export function FinalCTA() {
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="relative isolate overflow-hidden bg-navy-deep" ref={sectionRef}>
      <img
        src={chaves}
        alt="Entrega das chaves de um imóvel"
        width={1408}
        height={1008}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 size-full object-cover opacity-25 transition-all duration-[2s] ease-out ${
          visible ? "scale-100" : "scale-110"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold to-transparent transition-all duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Floating particles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-gold/20 rounded-full animate-[float_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gold/15 rounded-full animate-[float_7s_ease-in-out_infinite_1s]" />
      </div>

      <div className="container-page relative section-y">
        <div className="max-w-2xl">
          <div
            className={`rule-gold transition-all duration-700 ${
              visible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <h2
            className={`h-section mt-6 text-white transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Vamos realizar grandes sonhos juntos?
          </h2>
          <p
            className={`lead mt-5 text-white/80 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Conte com a ServiCred para transformar seu sonho em realidade com segurança,
            transparência e as melhores condições para o seu perfil.
          </p>
          <div
            className={`mt-9 transition-all duration-700 delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <WhatsAppLink event="cta_final_whatsapp">Falar agora pelo WhatsApp</WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
