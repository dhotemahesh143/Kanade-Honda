import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import activa from "@/assets/bike-activa.jpg";
import heroBike from "@/assets/hero-bike.jpg";
import cbr from "@/assets/bike-cbr.jpg";

const divisions = [
  {
    tag: "Activa & Scooters",
    title: "India's Favourite Scooters",
    copy: "Explore Activa 110, Activa 125 and Dio for everyday comfort.",
    img: activa,
  },
  {
    tag: "Redwing Commuters",
    title: "Shine & SP Series",
    copy: "Shine 100, Shine 125, SP125 & Unicorn for class-leading mileage and comfort.",
    img: heroBike,
  },
  {
    tag: "Redwing Sport",
    title: "Hornet & CB200X",
    copy: "Aggressive streetfighters and urban adventure tourers built for excitement.",
    img: cbr,
  },
];

export function Divisions() {
  return (
    <section id="divisions" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {divisions.map((d, i) => (
            <motion.a
              key={d.tag}
              href="#lineup"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative block overflow-hidden bg-honda-dark"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-honda-red">
                  {d.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/70">{d.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
                  View all
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
