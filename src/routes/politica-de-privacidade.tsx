import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { LegalPage } from "@/components/LegalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT } from "@/data/servicred";

const TITLE = "Política de Privacidade | ServiCred";
const DESCRIPTION =
  "Saiba como a ServiCred trata os dados de quem entra em contato pelo site, em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}politica-de-privacidade` }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <>
      <SideNav />
      <div className="lg:pl-72">
        <main>
          <LegalPage title="Política de Privacidade">
            <p>
              Esta política explica como a ServiCred — Assessoria de Crédito Imobiliário trata as
              informações de quem visita este site e entra em contato com a nossa equipe.
            </p>

            <h2>Dados que tratamos</h2>
            <p>
              Este site é institucional e não possui formulários de cadastro, área de login ou banco
              de dados de visitantes. Não coletamos CPF, RG, comprovantes de renda, documentos ou
              qualquer dado financeiro sensível por meio do site.
            </p>
            <p>
              Ao clicar em um botão de WhatsApp ou no endereço de e-mail, você é direcionado para o
              respectivo aplicativo e passa a se comunicar diretamente com a nossa equipe. As
              informações que você decidir compartilhar nessa conversa são utilizadas apenas para
              entender a sua necessidade e orientar o seu atendimento.
            </p>

            <h2>Finalidade e base legal</h2>
            <p>
              Os dados compartilhados voluntariamente no atendimento são usados exclusivamente para
              responder à sua solicitação e conduzir a assessoria de crédito imobiliário, com base
              no legítimo interesse e nos procedimentos preliminares relacionados a um contrato,
              conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>

            <h2>Compartilhamento</h2>
            <p>
              Informações necessárias à análise de crédito podem ser encaminhadas à instituição
              financeira escolhida por você, sempre mediante o seu consentimento e apenas na medida
              necessária para a operação pretendida. Não vendemos nem cedemos dados para finalidades
              publicitárias de terceiros.
            </p>

            <h2>Seus direitos</h2>
            <p>
              Você pode solicitar a confirmação de tratamento, o acesso, a correção, a portabilidade
              ou a exclusão dos seus dados, além de revogar o consentimento a qualquer momento.
              Basta enviar o pedido para {CONTACT.email} ou pelo WhatsApp {CONTACT.phoneLabel}.
            </p>

            <h2>Atualizações</h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças nos nossos processos. A
              versão vigente é sempre a publicada nesta página.
            </p>
          </LegalPage>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
