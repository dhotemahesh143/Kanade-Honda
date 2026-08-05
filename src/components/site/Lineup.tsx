import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { VehicleArt } from "@/components/site/VehicleArt";

const tabs = ["All", "Motorcycle", "Scooter"] as const;

export function Lineup() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const list = tab === "All" ? vehicles : vehicles.filter((b) => b.category === tab);

  return (
    <section id="lineup" className="bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Explore the Honda range
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-honda-red" />
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              The complete Honda 2Wheelers India lineup — every motorcycle and scooter, in one
              place. Tap Explore for full specs, features and colours.
            </p>
          </div>
          <div className="flex gap-1 border border-border p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition ${
                  tab === t
                    ? "bg-honda-red text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "All"
                  ? `All (${vehicles.length})`
                  : `${t} (${vehicles.filter((v) => v.category === t).length})`}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group"
            >
              <Link to="/vehicles/$slug" params={{ slug: b.slug }} className="block">
                <div className="overflow-hidden bg-surface">
                  <VehicleArt
                    vehicle={b}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {b.segment}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-honda-red">
                      {b.division}
                    </div>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{b.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.spec}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        Starting at
                      </div>
                      <div className="font-display text-lg font-bold text-foreground">
                        {b.price}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-honda-red">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
