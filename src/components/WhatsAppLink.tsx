import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/servicred";
import { trackCta } from "@/lib/track";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  event: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "green";
  className?: string;
  showIcon?: boolean;
};

const variants = {
  gold: "bg-gold text-navy-deep hover:bg-gold-light shadow-soft",
  outline: "border border-gold/60 text-gold hover:bg-gold/10",
  green: "bg-whatsapp text-white hover:brightness-95 shadow-soft",
} as const;

export function WhatsAppLink({
  message,
  event,
  children,
  variant = "gold",
  className,
  showIcon = true,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta(event, { channel: "whatsapp" })}
      className={cn(
        "tap inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {showIcon ? <MessageCircle className="size-4 shrink-0" aria-hidden="true" /> : null}
      {children}
    </a>
  );
}
