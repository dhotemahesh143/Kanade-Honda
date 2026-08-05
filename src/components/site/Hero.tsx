import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import showroomExterior from "@/assets/showroom-exterior.jpg";
import showroomDelivery from "@/assets/showroom-delivery.jpg";
import showroomCelebration from "@/assets/showroom-celebration.jpg";
import showroomTeam from "@/assets/showroom-team.jpg";
import showroomReception from "@/assets/showroom-reception.jpg";
import showroomLounge from "@/assets/showroom-lounge.jpg";
import showroomCelebrationNew from "@/assets/showroom-celebration-new.jpg";
import showroomReceptionActiva from "@/assets/showroom-reception-activa.jpg";
import sp125Unveiling from "@/assets/sp125-unveiling.jpg";
import serviceCampSetup from "@/assets/service-camp-setup.jpg";
import deliveryZoneActiva from "@/assets/delivery-zone-activa.jpg";
import img5622 from "@/assets/img-5622.png";

const slides = [
  {
    img: showroomExterior,
    kicker: "Honda 2 Wheeler Authorized Dealer",
    title: "Kanade Honda, Your Trusted Honda Partner",
    copy: "Sales, service, spares and genuine accessories. Serving Undri & Pune since 2012.",
    cta: "Visit Showroom",
    href: "/#showroom",
  },
  {
    img: deliveryZoneActiva,
    kicker: "Delivery Zone",
    title: "Red Carpet Deliveries",
    copy: "Drive Home Happiness — where every ride begins with Trust, only at Kanade Honda.",
    cta: "Explore Models",
    href: "/#lineup",
  },
  {
    img: showroomReceptionActiva,
    kicker: "Showroom Display",
    title: "India's Favourite Scooters",
    copy: "Explore the new Activa lineup at Kanade Honda with instant festive booking offers.",
    cta: "Book Test Ride",
    href: "/#lineup",
  },
  {
    img: showroomCelebrationNew,
    kicker: "Team Celebrations",
    title: "13 Years of Customer Trust",
    copy: "We celebrate every customer’s happiness with care , commitment and honesty.",
    cta: "About Us",
    href: "/#about",
  },
  {
    img: sp125Unveiling,
    kicker: "New Launch & Unveiling",
    title: "SP125 — Be Bold, Be Advanced",
    copy: "Experience Honda's latest tech with Honda RoadSync and digital TFT display at our dealership.",
    cta: "Explore SP125",
    href: "/#lineup",
  },
  {
    img: img5622,
    kicker: "Workshop & Service",
    title: "4+1 Bay Workshop",
    copy: "State-of-the-art 4+1 bay workshop with factory-trained mechanics and genuine Honda parts.",
    cta: "Book Service",
    href: "/#showroom",
  },
  {
    img: serviceCampSetup,
    kicker: "Service Camps",
    title: "Camps",
    copy: "Free service checkup camps organized regularly for your convenience and peace of mind.",
    cta: "Book Service",
    href: "/#showroom",
  },
  {
    img: showroomTeam,
    kicker: "Customer Service",
    title: "Our Certified Honda Staff",
    copy: "Experienced sales advisors and factory-trained mechanics working only with genuine Honda parts.",
    cta: "Contact Team",
    href: "/#showroom",
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative h-[82vh] min-h-[600px] w-full overflow-hidden bg-honda-dark md:h-[90vh] lg:h-[92vh]">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={s.img}
          alt={s.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

<div className="relative mx-auto flex h-full w-full max-w-[1750px] flex-col justify-end px-6 pb-16 pt-28 md:pb-24 md:pt-32 xl:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-1 w-12 bg-honda-red" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 md:text-sm">
                {s.kicker}
              </span>
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {s.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl leading-relaxed">
              {s.copy}
            </p>
            <a
              href={s.href}
              className="group mt-8 inline-flex items-center gap-3.5 bg-honda-red px-8 py-4.5 text-base font-bold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
            >
              {s.cta}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  idx === i ? "w-14 bg-honda-red" : "w-7 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2.5">
            <button
              aria-label="Previous slide"
              onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
              className="grid size-12 place-items-center border border-white/30 text-white transition hover:bg-white hover:text-black"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => setI((p) => (p + 1) % slides.length)}
              className="grid size-12 place-items-center border border-white/30 text-white transition hover:bg-white hover:text-black"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
