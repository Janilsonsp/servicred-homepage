import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logo from "@/assets/servicred-logo.png";
import { CONTACT, LEGAL_DISCLAIMER, NAV_ITEMS, whatsappLink } from "@/data/servicred";
import { trackCta } from "@/lib/track";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="ServiCred — Assessoria de Crédito Imobiliário"
            width={180}
            height={120}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-4 font-display text-xl italic text-gold-light">
            Especialistas em realizar sonhos.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Navegação
          </h2>
          <ul className="mt-5 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="tap inline-flex items-center text-sm hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCta("whatsapp_rodape", { channel: "whatsapp" })}
                className="tap inline-flex items-center gap-3 hover:text-gold-light"
              >
                <WhatsAppIcon className="size-4 text-gold" aria-hidden={true} />
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => trackCta("email_rodape", { channel: "email" })}
                className="tap inline-flex items-center gap-3 break-all hover:text-gold-light"
              >
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4 text-gold" aria-hidden="true" />
              {CONTACT.site}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-7 text-xs leading-relaxed">
          <p className="max-w-4xl">{LEGAL_DISCLAIMER}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} ServiCred — Assessoria de Crédito Imobiliário.</p>
            <div className="flex gap-5">
              <Link
                to="/politica-de-privacidade"
                className="tap inline-flex items-center hover:text-gold-light"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="tap inline-flex items-center hover:text-gold-light"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
