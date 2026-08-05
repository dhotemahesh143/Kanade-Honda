import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cb350 from "@/assets/bike-cb350.jpg";
import activa from "@/assets/bike-activa.jpg";
import showroom from "@/assets/showroom.jpg";

const news = [
  {
    date: "24 July 2026",
    title: "Honda unveils a 10-product Made-in-India portfolio",
    copy: "Seven all-new models and three refreshed models across ICE, EV and flex-fuel mobility.",
    img: cb350,
  },
  {
    date: "12 June 2026",
    title: "Festive offers live at Kanade Honda",
    copy: "Zero down payment on Activa 6G plus exchange bonus up to ₹5,000 this month.",
    img: activa,
  },
  {
    date: "02 May 2026",
    title: "Kanade Honda opens an expanded 5-bay service centre",
    copy: "Five state-of-the-art bays, genuine spares counter and comfortable customer lounge.",
    img: showroom,
  },
];

export function News() {
  return (
    <section id="news" className="bg-surface py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Honda in the News
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-honda-red" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-honda-red"
          >
            All news <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-card shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {n.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.copy}</p>
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
