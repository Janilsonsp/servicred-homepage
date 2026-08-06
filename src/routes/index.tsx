import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Differentials } from "@/components/Differentials";
import { DirectorProfile } from "@/components/DirectorProfile";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/Hero";
import { HeroTransition } from "@/components/HeroTransition";
import { PartnerBanks } from "@/components/PartnerBanks";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT, SERVICES } from "@/data/servicred";

const TITLE = "ServiCred | Assessoria de Crédito Imobiliário em São Paulo";
const DESCRIPTION =
  "Assessoria especializada em crédito imobiliário, refinanciamento, portabilidade, consórcio e análise de crédito em São Paulo. Fale com a ServiCred.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "ServiCred",
  alternateName: "ServiCred — Assessoria de Crédito Imobiliário",
  description: DESCRIPTION,
  url: CONTACT.siteUrl,
  email: CONTACT.email,
  telephone: "+5511989525276",
  areaServed: "São Paulo, SP, Brasil",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  slogan: "Especialistas em realizar sonhos.",
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.description },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: CONTACT.siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CONTACT.siteUrl }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#quem-somos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-deep"
      >
        Ir para o conteúdo
      </a>
      <SideNav />
      <div className="lg:pl-72">
        <main>
          <Hero />
          <HeroTransition />
          <About />
          <DirectorProfile />
          <ServicesGrid />
          <ProcessTimeline />
          <PartnerBanks />
          <Differentials />
          <FinalCTA />
        </main>
        <Footer />
        <div aria-hidden="true" className="h-[40vh]" />
      </div>
      <WhatsAppButton />
    </>
  );
}
