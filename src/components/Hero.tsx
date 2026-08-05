import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { whatsappLink } from "@/data/servicred";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.currentTime = 0;
      video.pause();
    };

    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[min(820px,92vh)] items-center overflow-hidden bg-navy-deep lg:min-h-[720px]"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 size-full object-cover object-center"
      >
        <source src="/servicred-analise-aprovacao-hero.mp4" type="video/mp4" />
      </video>

      {/* Layered overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,18,35,0.94) 0%, rgba(3,18,35,0.78) 34%, rgba(3,18,35,0.30) 66%, rgba(3,18,35,0.12) 100%), linear-gradient(180deg, rgba(3,18,35,0.10) 55%, rgba(3,18,35,0.82) 100%)",
        }}
      />

      {/* Content */}
      <div className="container-page relative z-10 w-full py-32 md:py-40 lg:py-0">
        <div className="max-w-[620px]">
          <p className="eyebrow text-gold-light animate-[fadeSlideUp_0.7s_ease-out_0.15s_both]">
            Assessoria de Crédito Imobiliário
          </p>
          <div className="rule-gold mt-4 animate-[expandWidth_0.5s_ease-out_0.3s_both]" />
          <h1 className="mt-6 font-display text-[clamp(2rem,1.6rem+2.4vw,4.75rem)] leading-[1.06] font-semibold text-white animate-[fadeSlideUp_0.7s_ease-out_0.4s_both]">
            Seu imóvel começa com a escolha certa.
          </h1>
          <p className="lead mt-6 max-w-[580px] text-white/85 animate-[fadeSlideUp_0.7s_ease-out_0.55s_both]">
            Assessoria completa para encontrar as melhores condições de crédito imobiliário, com
            segurança, transparência e acompanhamento em todas as etapas.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-[fadeSlideUp_0.7s_ease-out_0.7s_both]">
            <a
              href={whatsappLink(
                "Olá, Juliane! Acessei o site da ServiCred e gostaria de simular meu crédito imobiliário.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center justify-center rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              Simule seu crédito
            </a>
            <a
              href="#quem-somos"
              className="tap inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              Conheça a ServiCred
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center animate-[fadeSlideUp_0.7s_ease-out_1.2s_both]">
        <a
          href="#quem-somos"
          aria-label="Rolar para baixo"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
        >
          <span className="text-xs uppercase tracking-[0.18em]">Saiba mais</span>
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
