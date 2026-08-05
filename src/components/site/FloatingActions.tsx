import { MessageCircle, Phone, Instagram } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function FloatingActions() {
  const actions = [
    {
      Icon: MessageCircle,
      href: whatsappLink("Hi Kanade Honda, "),
      label: "WhatsApp",
      cls: "bg-emerald-500",
    },
    { Icon: Phone, href: siteConfig.phoneHref, label: "Call", cls: "bg-[color:var(--honda-red)]" },
    {
      Icon: Instagram,
      href: siteConfig.social.instagram,
      label: "Instagram",
      cls: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    },
  ];
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:right-6">
      {actions.map(({ Icon, href, label, cls }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className={`group relative grid size-12 place-items-center rounded-full ${cls} text-white shadow-lg transition hover:scale-110`}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
