/**
 * Rastreio semântico de CTAs sem instalar ferramenta de analytics.
 * Dispara um CustomEvent no window; qualquer ferramenta futura pode ouvir.
 */
export function trackCta(eventName: string, detail?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("servicred:cta", { detail: { eventName, ...detail } }));
}
