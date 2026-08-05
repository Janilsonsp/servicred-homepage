import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logo from "@/assets/servicred-logo.png";
import { CONTACT, NAV_ITEMS, whatsappLink } from "@/data/servicred";
import { trackCta } from "@/lib/track";
import { cn } from "@/lib/utils";

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <ul className="flex flex-col">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={onNavigate}
            aria-current={active === item.id ? "true" : undefined}
            className={cn(
              "tap flex items-center border-l-2 py-3 pl-4 text-sm uppercase tracking-[0.12em] transition-colors",
              active === item.id
                ? "border-gold text-gold-light"
                : "border-white/10 text-white/70 hover:border-white/40 hover:text-white",
            )}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ContactBlock() {
  return (
    <div className="space-y-3 border-t border-white/10 pt-6 text-xs text-white/65">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCta("whatsapp_sidebar", { channel: "whatsapp" })}
        className="tap flex items-center gap-2 hover:text-gold-light"
      >
        <Phone className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
        {CONTACT.phoneLabel}
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        onClick={() => trackCta("email_sidebar", { channel: "email" })}
        className="tap flex items-center gap-2 break-all hover:text-gold-light"
      >
        <Mail className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
        {CONTACT.email}
      </a>
      <p className="flex items-center gap-2">
        <MapPin className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
        {CONTACT.location}
      </p>
    </div>
  );
}

export function SideNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.3] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Desktop sidebar — always navy */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-white/10 bg-navy-deep px-7 py-8 lg:flex">
        <a
          href="/#inicio"
          className="tap flex items-center"
          aria-label="ServiCred — página inicial"
        >
          <img
            src={logo}
            alt="ServiCred — Assessoria de Crédito Imobiliário"
            width={200}
            height={132}
            className="h-28 w-auto"
          />
        </a>

        <nav aria-label="Navegação principal" className="mt-10 flex-1">
          <NavList active={active} />
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCta("whatsapp_sidebar_cta", { channel: "whatsapp" })}
          className="tap mb-6 flex items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-light"
        >
          <WhatsAppIcon className="size-4" aria-hidden={true} />
          Fale com um especialista
        </a>

        <ContactBlock />
      </aside>

      {/* Mobile header — transparent over hero, solid on scroll */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-3 transition-all duration-300 lg:hidden",
          scrolled
            ? "border-b border-white/10 bg-navy-deep/95 shadow-sm backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <a
          href="/#inicio"
          className="tap flex items-center"
          aria-label="ServiCred — página inicial"
        >
          <img
            src={logo}
            alt="ServiCred — Assessoria de Crédito Imobiliário"
            width={160}
            height={106}
            className="h-12 w-auto"
          />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="tap hidden items-center justify-center rounded-md bg-gold px-4 py-2 text-xs font-semibold text-navy-deep transition-colors hover:bg-gold-light sm:inline-flex"
        >
          Fale com um especialista
        </a>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-lateral"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="tap inline-flex items-center justify-center text-white sm:hidden"
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </header>

      {open ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-navy-deep/70 lg:hidden"
          />
          <div
            id="menu-lateral"
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col overflow-y-auto border-l border-white/10 bg-navy-deep px-6 py-6 lg:hidden"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="tap inline-flex items-center justify-center text-white"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navegação mobile" className="mt-4 flex-1">
              <NavList active={active} onNavigate={() => setOpen(false)} />
            </nav>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta("whatsapp_menu_mobile", { channel: "whatsapp" })}
              className="tap my-6 flex items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-deep"
            >
              <WhatsAppIcon className="size-4" aria-hidden={true} />
              Fale com um especialista
            </a>
            <ContactBlock />
          </div>
        </>
      ) : null}
    </>
  );
}
