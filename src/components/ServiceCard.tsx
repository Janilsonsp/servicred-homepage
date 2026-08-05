import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/servicred";
import { whatsappLink } from "@/data/servicred";
import { trackCta } from "@/lib/track";

export function ServiceCard({ service }: { service: Service }) {
  const { title, description, icon: Icon } = service;
  const message = `Olá, Juliane! Acessei o site da ServiCred e gostaria de falar sobre o serviço: ${title}.`;

  return (
    <article className="flex h-full flex-col border-l-2 border-border bg-white py-5 pl-6 pr-4 transition-colors hover:border-gold">
      <span className="flex size-10 items-center justify-center text-gold">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-3 text-xl text-navy-deep">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-blue">{description}</p>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCta("servico_falar", { servico: title })}
        className="tap mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:text-gold"
      >
        Falar sobre este serviço
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  );
}
