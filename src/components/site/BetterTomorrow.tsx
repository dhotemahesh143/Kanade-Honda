import { motion } from "framer-motion";
import showroom from "@/assets/showroom.jpg";
import africa from "@/assets/bike-africa.jpg";
import cb350 from "@/assets/bike-cb350.jpg";
import activa from "@/assets/bike-activa.jpg";

const tiles = [
  {
    label: "Visit our Showroom",
    title: "Step inside Kanade Honda and see every model up close.",
    img: showroom,
  },
  {
    label: "Heritage",
    title: "Revving up a legacy of Honda excellence.",
    img: cb350,
  },
  {
    label: "Environment",
    title: "Riding towards a greener future.",
    img: activa,
  },
  {
    label: "Road Safety",
    title: "Training safer riders through every ride.",
    img: africa,
  },
];

export function BetterTomorrow() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Building for a better tomorrow
        </h2>
        <div className="mt-4 h-0.5 w-16 bg-honda-red" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.article
              key={t.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-card shadow-card"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-honda-red">
                  {t.label}
                </div>
                <p className="mt-3 text-base font-medium leading-snug text-foreground">{t.title}</p>
                <a
                  href="#"
                  className="mt-4 inline-block border-b border-foreground/30 pb-0.5 text-sm font-semibold text-foreground transition hover:border-honda-red hover:text-honda-red"
                >
                  Read more
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
