import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/data/servicred";
import { trackCta } from "@/lib/track";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta("whatsapp_floating", { channel: "whatsapp" })}
      aria-label="Falar com a ServiCred pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-110 animate-[pulseGlow_2s_ease-in-out_infinite]"
    >
      <WhatsAppIcon className="size-6" aria-hidden={true} />
    </a>
  );
}
