import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Wrench,
  ShieldCheck,
  Sparkles,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import showroomExterior from "@/assets/showroom-exterior.jpg";
import showroomDelivery from "@/assets/showroom-delivery.jpg";
import showroomCelebration from "@/assets/showroom-celebration.jpg";
import showroomTeam from "@/assets/showroom-team.jpg";
import showroomReception from "@/assets/showroom-reception.jpg";
import showroomLounge from "@/assets/showroom-lounge.jpg";
import showroomCamp from "@/assets/showroom-camp.jpg";
import showroomCelebrationNew from "@/assets/showroom-celebration-new.jpg";
import showroomReceptionActiva from "@/assets/showroom-reception-activa.jpg";
import sp125Unveiling from "@/assets/sp125-unveiling.jpg";
import serviceCampSetup from "@/assets/service-camp-setup.jpg";
import deliveryZoneActiva from "@/assets/delivery-zone-activa.jpg";
import { siteConfig, testRideLink } from "@/lib/site-config";

const showroomGallery = [
  {
    img: showroomExterior,
    title: "Kanade Honda Dealership (Geet Motors)",
    caption: "Sr.No-28/1 Katraj-Saswad By Pass Road, Undri, Pune",
  },
  {
    img: deliveryZoneActiva,
    title: "Honda Red Carpet Delivery Zone",
    caption: "Celebrate your new Activa & motorcycle delivery with key handovers",
  },
  {
    img: showroomReceptionActiva,
    title: "Decorated Showroom Reception & Display",
    caption: "Festive booking desk with Activa 6G and Activa 125 premium models",
  },
  {
    img: showroomCelebrationNew,
    title: "Kanade Honda Team & Management",
    caption: "Celebrating 13 years of trust and customer satisfaction in Pune",
  },
  {
    img: sp125Unveiling,
    title: "SP125 Launch & Unveiling Zone",
    caption: "Explore Honda's latest SP125 with TFT display and RoadSync",
  },
  {
    img: serviceCampSetup,
    title: "5-Bay Service Center & Outdoor Camp",
    caption: "Free checkup camps, genuine Honda parts counter & lounge setup",
  },
  {
    img: showroomTeam,
    title: "Certified Honda Sales & Support Team",
    caption: "Dedicated advisors assisting you from financing to delivery",
  },
  {
    img: showroomCelebration,
    title: "Festive Celebrations & Booking Desk",
    caption: "Special festive offers, AMC plans and instant loan approvals",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Periodic Service",
    copy: "Factory-trained technicians and genuine Honda parts.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    copy: "Cover your Honda for up to 6 years of worry-free riding.",
  },
  {
    icon: Sparkles,
    title: "Accessories Boutique",
    copy: "Genuine Honda accessories, riding gear and merchandise.",
  },
];

export function Showroom() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showroomGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = showroomGallery[activeSlide];

  return (
    <section id="showroom" className="bg-surface">
      <div className="grid lg:grid-cols-2">
        {/* Interactive Showroom Image Slider */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[600px] bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={current.img}
              alt={current.title}
              initial={{ opacity: 0.3, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.3 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

          {/* Caption & Location badge */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-honda-red px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md w-fit">
                <MapPin className="size-3.5" /> Katraj-Saswad By Pass Road
              </span>
              <h3 className="font-display text-xl font-bold text-white md:text-2xl drop-shadow-md">
                {current.title}
              </h3>
              <p className="text-xs text-white/80 md:text-sm drop-shadow">{current.caption}</p>
            </div>

            {/* Slider Dots & Navigation Buttons */}
            <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
              <div className="flex gap-2">
                {showroomGallery.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Showroom picture ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === activeSlide ? "w-8 bg-honda-red" : "w-3 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  aria-label="Previous showroom image"
                  onClick={() =>
                    setActiveSlide(
                      (prev) => (prev - 1 + showroomGallery.length) % showroomGallery.length,
                    )
                  }
                  className="grid size-9 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  aria-label="Next showroom image"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % showroomGallery.length)}
                  className="grid size-9 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="px-6 py-16 md:px-12 md:py-24"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Visit {siteConfig.legalName}
          </h2>
          <div className="mt-2 text-sm font-bold text-honda-red uppercase tracking-wider">
            {siteConfig.subtitle} · {siteConfig.tagline}
          </div>
          <div className="mt-4 h-1 w-16 bg-honda-red" />
          <p className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed">
            Our flagship honda 2 wheelers dealership serving at Pune . Explore our complete lineup,
            5 bay service center and dedicated finance desk.
          </p>

          <div className="mt-8 space-y-4">
            <Info
              icon={<MapPin className="size-5 text-honda-red" />}
              label="Branch Address"
              value={
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1.5 transition hover:text-honda-red"
                >
                  <span>{siteConfig.address}</span>
                  <Navigation className="size-4 shrink-0 text-honda-red opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              }
            />
            <Info
              icon={<Clock className="size-5 text-honda-red" />}
              label="Operating Hours"
              value="9.00 am - 7.00 pm · Open All 7 Days (No Weekly Off)"
            />
            <Info
              icon={<Phone className="size-5 text-honda-red" />}
              label="Contact Numbers"
              value={
                <div className="flex flex-wrap gap-4">
                  <a href={siteConfig.phoneHref} className="transition hover:text-honda-red">
                    Sales: {siteConfig.phone}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={siteConfig.serviceCenterPhoneHref}
                    className="transition hover:text-honda-red"
                  >
                    Service: {siteConfig.serviceCenterPhone}
                  </a>
                </div>
              }
            />
            <Info
              icon={<Mail className="size-5 text-honda-red" />}
              label="Email Address"
              value={
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition hover:text-honda-red"
                  >
                    {siteConfig.email}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={`mailto:${siteConfig.secondaryEmail}`}
                    className="transition hover:text-honda-red"
                  >
                    {siteConfig.secondaryEmail}
                  </a>
                </div>
              }
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-5 shadow-card border border-border">
                <s.icon className="size-6 text-honda-red" />
                <div className="mt-3 text-sm font-bold text-foreground">{s.title}</div>
                <p className="mt-1 text-xs text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={testRideLink("Service Booking")}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-honda-red px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition hover:brightness-110"
            >
              Book a service
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 border-2 border-honda-red bg-honda-red/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-honda-red transition hover:bg-honda-red hover:text-white shadow-sm"
            >
              <Navigation className="size-4" /> Get directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-border/80 pb-4">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-semibold text-foreground leading-relaxed">{value}</div>
      </div>
    </div>
  );
}
