import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { LegalPage } from "@/components/LegalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT, LEGAL_DISCLAIMER } from "@/data/servicred";

const TITLE = "Termos de Uso | ServiCred";
const DESCRIPTION =
  "Condições de uso do site institucional da ServiCred — Assessoria de Crédito Imobiliário em São Paulo.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}termos-de-uso` }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <>
      <SideNav />
      <div className="lg:pl-72">
        <main>
          <LegalPage title="Termos de Uso">
            <p>
              Ao navegar neste site, você concorda com as condições descritas abaixo. Este é um site
              institucional da ServiCred — Assessoria de Crédito Imobiliário.
            </p>

            <h2>Natureza das informações</h2>
            <p>
              Os conteúdos publicados têm caráter informativo e não constituem oferta, proposta
              vinculante ou promessa de contratação de crédito. {LEGAL_DISCLAIMER}
            </p>

            <h2>Atendimento</h2>
            <p>
              Todo o atendimento da ServiCred é humano e personalizado, conduzido pela nossa equipe.
              Os canais oficiais são o WhatsApp {CONTACT.phoneLabel} e o e-mail {CONTACT.email}.
            </p>

            <h2>Propriedade intelectual</h2>
            <p>
              A marca ServiCred, o logotipo, os textos e as imagens deste site pertencem à ServiCred
              ou são utilizados sob licença. É vedada a reprodução sem autorização prévia. Os nomes
              das instituições financeiras citadas pertencem aos seus respectivos titulares e são
              mencionados apenas para indicar as instituições com as quais trabalhamos.
            </p>

            <h2>Links externos</h2>
            <p>
              Este site direciona para aplicativos e serviços de terceiros, como WhatsApp e
              provedores de e-mail. A ServiCred não se responsabiliza pelo conteúdo, pelas políticas
              ou pela disponibilidade desses serviços.
            </p>

            <h2>Alterações</h2>
            <p>
              Estes termos podem ser revisados a qualquer momento. Recomendamos a consulta periódica
              desta página.
            </p>
          </LegalPage>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
