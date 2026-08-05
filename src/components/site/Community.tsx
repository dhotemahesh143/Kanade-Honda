import { motion } from "framer-motion";
import { Play, Instagram } from "lucide-react";
import showroom from "@/assets/showroom.jpg";
import cb350 from "@/assets/bike-cb350.jpg";
import africa from "@/assets/bike-africa.jpg";
import cbr from "@/assets/bike-cbr.jpg";

const videos = [
  { title: "Kanade Riders Breakfast Ride", img: africa, big: true },
  { title: "CB350 Delivery Day", img: cb350 },
  { title: "Track Experience", img: cbr },
  { title: "Showroom Walkthrough", img: showroom },
];

export function Community() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Our Community
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-honda-red" />
          </div>
          <a
            href="https://www.instagram.com/kanadehonda"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-honda-red hover:text-honda-red"
          >
            <Instagram className="size-4" /> Follow @kanadehonda
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {videos.map((v, i) => (
            <motion.button
              key={v.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden bg-honda-dark text-left ${
                v.big ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] ${
                  v.big ? "aspect-[16/10]" : "aspect-[16/9]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-honda-red">
                <Play className="size-6 fill-white text-white" />
              </span>
              <span className="absolute bottom-5 left-6 right-6 font-display text-lg font-semibold text-white">
                {v.title}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {[
            { k: "25K+", l: "Happy Riders" },
            { k: "13+", l: "Years of Trust" },
            { k: "5", l: "Service Bays" },
            { k: "4.9★", l: "Google Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
