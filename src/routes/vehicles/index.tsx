import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { vehicles, type VehicleCategory } from "@/data/vehicles";
import { VehicleArt } from "@/components/site/VehicleArt";

export const Route = createFileRoute("/vehicles/")({
  component: VehiclesIndex,
  head: () => ({
    meta: [
      { title: "All Honda Motorcycles & Scooters | Kanade Honda" },
      {
        name: "description",
        content:
          "Browse the complete Honda 2Wheelers India lineup — every motorcycle and scooter with full specs, features and pricing.",
      },
    ],
  }),
});

const categoryFilters = ["All", "Motorcycle", "Scooter"] as const;
const divisions = ["All", "Redwing", "Activa & Scooters"] as const;

function VehiclesIndex() {
  const [category, setCategory] = useState<(typeof categoryFilters)[number]>("All");
  const [division, setDivision] = useState<(typeof divisions)[number]>("All");

  const list = useMemo(() => {
    return vehicles.filter((v) => {
      const catOk = category === "All" || v.category === (category as VehicleCategory);
      const divOk = division === "All" || v.division === division;
      return catOk && divOk;
    });
  }, [category, division]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-honda-dark py-16 text-center text-white md:py-24">
        <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-honda-red">
            Full Range
          </div>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Every Honda Motorcycle & Scooter
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            {vehicles.length} models across Redwing Motorcycles and Activa &amp; Scooters — explore
            full specs, features, colours and pricing for each one.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1750px] px-6 py-12 xl:px-12">
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-1 border border-border p-1">
            {categoryFilters.map((t) => (
              <button
                key={t}
                onClick={() => setCategory(t)}
                className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-wide transition ${
                  category === t
                    ? "bg-honda-red text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 border border-border p-1">
            {divisions.map((d) => (
              <button
                key={d}
                onClick={() => setDivision(d)}
                className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-wide transition ${
                  division === d
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">{list.length} models</div>

        <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            >
              <Link to="/vehicles/$slug" params={{ slug: b.slug }} className="group block">
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
                      Explore{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {list.length === 0 && (
          <div className="py-24 text-center text-muted-foreground">
            No models match these filters.
          </div>
        )}
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
