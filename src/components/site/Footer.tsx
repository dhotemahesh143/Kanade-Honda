import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import logo from "@/assets/kanade-honda-logo.png";
import { siteConfig, testRideLink, whatsappLink } from "@/lib/site-config";

const columns = [
  { title: "Products", items: ["Motorcycles", "Scooters", "Accessories"] },
  {
    title: "Ownership",
    items: ["Book a service", "Extended warranty", "Genuine parts", "Roadside assistance"],
  },
  {
    title: "Buying",
    items: ["Book a test ride", "EMI calculator", "Exchange your bike", "Offers"],
  },
  { title: "Company", items: ["About Kanade Honda", "Careers", "News", "Contact us"] },
];

function getFooterLink(item: string) {
  switch (item) {
    case "Motorcycles":
    case "Scooters":
      return "/vehicles";
    case "About Kanade Honda":
    case "Careers":
      return "/#about";
    case "Book a service":
    case "Extended warranty":
    case "Genuine parts":
    case "Roadside assistance":
    case "Exchange your bike":
    case "Contact us":
    case "Accessories":
      return "/#showroom";
    case "EMI calculator":
      return "/#emi";
    case "Offers":
    case "News":
      return "/#news";
    case "Book a test ride":
      return testRideLink();
    default:
      return "/#about";
  }
}

export function Footer() {
  return (
    <footer className="bg-honda-dark text-white/70">
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1750px] flex-col items-start justify-between gap-5 px-6 py-10 xl:px-12 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-honda-red">
              13 years since 2012.
            </span>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-white md:text-3xl">
              Sales | Service | Spares — all under one roof.
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white/80">
              Every Honda need — sales, service, spares. Kanade Honda, Undri.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={testRideLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-honda-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Book test ride
            </a>
            <a
              href={siteConfig.phoneHref}
              className="border border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
            >
              Call us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1750px] px-6 py-14 xl:px-12">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3.5">
              <img
                src={logo}
                alt="Kanade Honda logo"
                className="h-14 w-auto object-contain md:h-16"
              />
              <div>
                <div className="font-display text-lg font-black tracking-tight text-white md:text-xl">
                  KANADE HONDA (GEET MOTORS)
                </div>
                <div className="mt-1 text-[10px] font-bold tracking-[0.2em] text-honda-red uppercase">
                  HONDA 2 WHEELER AUTHORIZED DEALER
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Kanade Honda (Geet Motors) — Honda 2 Wheeler Authorized Dealer. Sales, service, spares
              and genuine accessories serving Undri, Pune since {siteConfig.established}.
            </p>

            <div className="mt-5 space-y-2.5 text-sm text-white/70">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-2.5 transition hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-honda-red" />
                {siteConfig.address}
              </a>
              <div className="flex flex-col gap-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-honda-red" />
                  {siteConfig.email}
                </a>
                <a
                  href={`mailto:${siteConfig.secondaryEmail}`}
                  className="flex items-center gap-2.5 transition hover:text-white pl-6 text-xs text-white/60"
                >
                  {siteConfig.secondaryEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-honda-red" />
                {siteConfig.hours}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: MessageCircle, href: whatsappLink("Hi Kanade Honda, "), label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid size-10 place-items-center border border-white/20 text-white/80 transition hover:border-honda-red hover:bg-honda-red hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                {c.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href={getFooterLink(i)} className="transition hover:text-white">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1750px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 xl:px-12 md:flex-row">
          <div>
            © {new Date().getFullYear()} Kanade Honda (Geet Motors). All rights reserved. Kanade
            Honda. Your Trusted Honda Partner.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
