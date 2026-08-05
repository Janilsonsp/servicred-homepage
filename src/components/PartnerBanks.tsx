import { useEffect, useRef, useState } from "react";
import { Landmark } from "lucide-react";
import { BANKS_DISCLAIMER, PARTNER_BANKS } from "@/data/servicred";

export function PartnerBanks() {
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
    <section className="section-y bg-cream overflow-hidden" ref={sectionRef}>
      <div className="container-page">
        <div className="max-w-2xl">
          <p
            className={`eyebrow text-gold transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Bancos parceiros
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
            Trabalhamos com as principais instituições do país
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PARTNER_BANKS.map((bank, index) => (
            <li
              key={bank}
              className={`flex flex-col items-center justify-center gap-3 border border-border bg-white px-4 py-8 text-center transition-all duration-700 hover:shadow-lg hover:-translate-y-1 hover:border-gold/50 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <Landmark
                className="size-6 text-gold transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-navy-deep">{bank}</span>
            </li>
          ))}
        </ul>

        <p
          className={`mt-6 max-w-3xl text-xs leading-relaxed text-slate-blue transition-all duration-700 delay-800 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {BANKS_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
