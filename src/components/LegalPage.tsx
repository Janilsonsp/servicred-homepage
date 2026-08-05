import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="bg-white">
      <div className="bg-navy-deep pb-12 pt-28 md:pt-32 lg:pt-24">
        <div className="container-page">
          <div className="rule-gold" />
          <h1 className="h-section mt-5 text-white">{title}</h1>
        </div>
      </div>

      <div className="container-page py-14">
        <div className="max-w-3xl space-y-5 text-sm leading-7 text-slate-blue [&_h2]:pt-4 [&_h2]:text-xl [&_h2]:text-navy-deep">
          {children}
        </div>
        <Link
          to="/"
          className="tap mt-12 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para o início
        </Link>
      </div>
    </article>
  );
}
