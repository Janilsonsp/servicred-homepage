import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  Clock,
  Coins,
  Eye,
  FileSignature,
  FileText,
  Gem,
  Handshake,
  Home,
  Landmark,
  LineChart,
  MessageCircle,
  Repeat,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export const CONTACT = {
  phoneLabel: "(11) 98952-5276",
  whatsappNumber: "5511989525276",
  email: "juliane.batezati@servi-cred.com",
  site: "www.servicred.com.br",
  siteUrl: "https://www.servicred.com.br/",
  location: "São Paulo — SP",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Juliane! Acessei o site da ServiCred e gostaria de receber uma orientação sobre crédito imobiliário.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type NavItem = { label: string; href: string; id: string };

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Início", href: "/#inicio", id: "inicio" },
  { label: "Quem Somos", href: "/#quem-somos", id: "quem-somos" },
  { label: "Serviços", href: "/#servicos", id: "servicos" },
  { label: "Como Funciona", href: "/#como-funciona", id: "como-funciona" },
  { label: "Diferenciais", href: "/#diferenciais", id: "diferenciais" },
  { label: "Contato", href: "/#contato", id: "contato" },
];

export type Pillar = { label: string; icon: LucideIcon };

export const TRUST_PILLARS: readonly Pillar[] = [
  { label: "Segurança", icon: ShieldCheck },
  { label: "Transparência", icon: Eye },
  { label: "Agilidade", icon: Zap },
  { label: "Confiança", icon: Handshake },
  { label: "Excelência", icon: Star },
];

export const ABOUT_TEXT =
  "A ServiCred é uma assessoria especializada em crédito imobiliário que conecta pessoas às melhores soluções financeiras para a realização do sonho da casa própria ou de grandes investimentos. Trabalhamos com os principais bancos do país para oferecer as melhores condições, com segurança, transparência e agilidade.";

export const PILLARS: readonly { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Missão",
    text: "Oferecer soluções inteligentes em crédito imobiliário com excelência e ética, proporcionando segurança e tranquilidade para que nossos clientes realizem seus sonhos.",
    icon: Target,
  },
  {
    title: "Visão",
    text: "Ser referência em assessoria de crédito imobiliário em São Paulo, reconhecida pela confiança, resultados e relacionamento.",
    icon: Eye,
  },
  {
    title: "Valores",
    text: "Integridade, compromisso com o cliente, transparência, excelência no atendimento, responsabilidade e foco em resultados.",
    icon: Gem,
  },
];

export const DIRECTOR = {
  name: "Juliane Batezati",
  role: "Consultora Especialista em Crédito Imobiliário",
  bio: "Com sólida experiência em gestão financeira e assessoria de crédito imobiliário, Juliane lidera a ServiCred com foco em excelência, transparência e atendimento personalizado. Seu compromisso é oferecer soluções financeiras seguras e acompanhar cada cliente em todas as etapas da conquista do seu imóvel.",
} as const;

export type Service = { title: string; description: string; icon: LucideIcon };

export const SERVICES: readonly Service[] = [
  {
    title: "Crédito imobiliário",
    description: "Compra de imóveis novos e usados.",
    icon: Home,
  },
  {
    title: "Refinanciamento e portabilidade",
    description: "Melhores condições para o seu contrato.",
    icon: Repeat,
  },
  {
    title: "Consórcio imobiliário",
    description: "Planejamento e conquista com inteligência.",
    icon: Building2,
  },
  {
    title: "Assessoria completa",
    description: "Do início à assinatura do contrato, com suporte total.",
    icon: ClipboardCheck,
  },
  {
    title: "Análise de crédito",
    description: "Orientação para aumentar suas chances de aprovação.",
    icon: Search,
  },
  {
    title: "Soluções para investidores",
    description: "Estratégias para quem investe no mercado imobiliário.",
    icon: TrendingUp,
  },
];

export type Step = { title: string; description: string; icon: LucideIcon };

export const PROCESS_STEPS: readonly Step[] = [
  {
    title: "Primeiro contato",
    description: "Entendimento da sua necessidade.",
    icon: MessageCircle,
  },
  { title: "Análise de perfil", description: "Estudo de crédito e viabilidade.", icon: UserCheck },
  {
    title: "Simulação personalizada",
    description: "Busca das melhores taxas e condições.",
    icon: LineChart,
  },
  {
    title: "Documentação",
    description: "Orientação completa sobre os documentos necessários.",
    icon: FileText,
  },
  {
    title: "Aprovação do crédito",
    description: "Acompanhamento de todo o processo.",
    icon: BadgeCheck,
  },
  {
    title: "Assinatura e realização",
    description: "Assinatura do contrato e concretização do seu sonho.",
    icon: FileSignature,
  },
];

export const PARTNER_BANKS: readonly string[] = [
  "Caixa Econômica Federal",
  "Itaú",
  "Santander",
  "Bradesco",
  "Banco do Brasil",
];

export const BANKS_DISCLAIMER =
  "A disponibilidade de produtos, taxas e condições está sujeita à análise e às regras de cada instituição financeira.";

export const DIFFERENTIALS: readonly string[] = [
  "Atendimento personalizado e humanizado",
  "Especialistas em crédito imobiliário",
  "Parceria com os principais bancos",
  "Agilidade em cada etapa do processo",
  "Transparência e segurança nas negociações",
  "Acompanhamento do início ao fim",
  "Sob medida para cada cliente",
];

export const WHY_CHOOSE: readonly { title: string; icon: LucideIcon }[] = [
  { title: "Mais chances de aprovação", icon: Sparkles },
  { title: "Melhores taxas e condições", icon: Banknote },
  { title: "Economia de tempo e dinheiro", icon: Clock },
  { title: "Segurança e tranquilidade", icon: ShieldCheck },
];

export const LEGAL_DISCLAIMER =
  "A ServiCred atua como assessoria de crédito imobiliário. A concessão de crédito, taxas, prazos e condições dependem da análise e aprovação da instituição financeira escolhida.";

export const MISC_ICONS = { Landmark, Users, Wallet, Coins };
