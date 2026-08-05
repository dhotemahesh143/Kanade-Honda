import { Link } from "@tanstack/react-router";
import { Search, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/kanade-honda-logo.png";
import { siteConfig, testRideLink } from "@/lib/site-config";

const links = [
  { label: "Motorcycles", href: "/vehicles" },
  { label: "Scooters", href: "/vehicles" },
  { label: "About", href: "/#about" },
  { label: "Service", href: "/#showroom" },
  { label: "Finance", href: "/#emi" },
  { label: "News", href: "/#news" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden border-b border-border bg-surface text-xs text-muted-foreground md:block">
        <div className="mx-auto flex w-full max-w-[1750px] items-center justify-between px-6 py-2.5 xl:px-12">
          <span className="font-medium tracking-wide flex items-center gap-2">
            <span className="font-bold text-foreground">Kanade Honda (Geet Motors)</span>
            <span>·</span>
            <span className="text-honda-red font-semibold">Honda 2 Wheeler Authorized Dealer</span>
            <span>·</span>
            <span>Sales, service, spares & genuine accessories</span>
          </span>
          <div className="flex items-center gap-6 font-medium">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <MapPin className="size-4 text-honda-red" /> Dealer Locator
            </a>
            <a href={siteConfig.phoneHref} className="transition hover:text-foreground">
              {siteConfig.phone}
            </a>
            <a href="/#emi" className="transition hover:text-foreground">
              EMI Calculator
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "glass-strong shadow-card" : "border-b border-border bg-background"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1750px] items-center gap-8 px-6 py-3.5 xl:px-12">
          <Link to="/" className="flex shrink-0 items-center gap-3.5 py-0.5">
            <img
              src={logo}
              alt="Kanade Honda logo"
              className="h-12 w-auto object-contain sm:h-14 md:h-16 transition-transform duration-300 hover:scale-105"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-black tracking-tight text-foreground sm:text-xl md:text-2xl">
                KANADE HONDA
              </span>
              <span className="mt-1 text-[10px] font-bold tracking-[0.2em] text-honda-red sm:text-[11px] uppercase">
                AUTHORIZED DEALER (GEET MOTORS)
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center lg:flex gap-1 xl:gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground/80 transition hover:text-foreground xl:px-5"
              >
                {l.label}
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 bg-honda-red transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <button
              aria-label="Search"
              className="grid size-11 place-items-center rounded-full text-foreground/80 transition hover:bg-secondary hover:text-foreground"
            >
              <Search className="size-5" />
            </button>
            <a
              href={testRideLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-2 bg-honda-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition hover:brightness-110 md:inline-flex"
            >
              Book Test Ride <ChevronRight className="size-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid size-11 place-items-center rounded-full text-foreground transition hover:bg-secondary lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto w-full max-w-[1750px] px-6 py-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-4 text-base font-bold uppercase tracking-wider text-foreground"
                >
                  {l.label}
                  <ChevronRight className="size-5 text-muted-foreground" />
                </a>
              ))}
              <a
                href={testRideLink()}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="mt-5 mb-4 block bg-honda-red px-6 py-4 text-center text-base font-bold uppercase tracking-wider text-primary-foreground shadow-md"
              >
                Book Test Ride
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
