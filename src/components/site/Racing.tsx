import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cbr from "@/assets/bike-cbr.jpg";

export function Racing() {
  return (
    <section id="racing" className="relative overflow-hidden bg-honda-dark">
      <img
        src={cbr}
        alt="Honda racing"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1750px] px-6 py-28 md:py-40 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-0.5 w-10 bg-honda-red" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
              Honda Racing
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Born on the track. Built for the road.
          </h2>
          <p className="mt-5 text-white/70">
            Decades of racing DNA feed into every Honda we sell — from the CBR superbikes to the
            commuter you ride every day.
          </p>
          <a
            href="#lineup"
            className="group mt-8 inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            Explore racing
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
