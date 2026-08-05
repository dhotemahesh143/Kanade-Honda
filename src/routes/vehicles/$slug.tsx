import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Fuel, Gauge, Settings2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { getRelatedVehicles, getVehicleBySlug } from "@/data/vehicles";
import { VehicleArt } from "@/components/site/VehicleArt";
import { testRideLink } from "@/lib/site-config";

export const Route = createFileRoute("/vehicles/$slug")({
  component: VehicleDetail,
  loader: ({ params }) => {
    const vehicle = getVehicleBySlug(params.slug);
    if (!vehicle) throw notFound();
    return vehicle;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Honda ${loaderData.name} — Price, Specs & Features | Kanade Honda` },
          { name: "description", content: loaderData.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Model not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find that Honda model.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-honda-red px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
        >
          Back to home
        </Link>
      </div>
    </main>
  ),
});

function VehicleDetail() {
  const vehicle = Route.useLoaderData();
  const [color, setColor] = useState(0);
  const related = getRelatedVehicles(vehicle);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-[1750px] items-center gap-2 px-6 py-3 text-xs text-muted-foreground xl:px-12">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <a href="/#lineup" className="hover:text-foreground">
            {vehicle.category}s
          </a>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{vehicle.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-[1750px] gap-10 px-6 py-12 xl:px-12 md:py-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-honda-red">
                {vehicle.division}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                {vehicle.segment}
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              {vehicle.name}
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">{vehicle.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-8 border-y border-border py-6">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Ex-showroom, starting at
                </div>
                <div className="font-display text-3xl font-bold text-foreground">
                  {vehicle.price}
                </div>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Gauge className="size-4 text-honda-red" />
                  {vehicle.specs.find((s) => s.label === "Max Power")?.value ?? vehicle.spec}
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="size-4 text-honda-red" />
                  {vehicle.specs.find((s) => s.label === "Mileage")?.value ?? ""}
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              * Price shown is ex-showroom starting at, inclusive of applicable taxes. It may vary
              according to market conditions and location. Please contact the showroom for the
              latest on-road pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={testRideLink(vehicle.name)}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-honda-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                Book Test Ride <ArrowRight className="size-4" />
              </a>
              <a
                href="/#emi"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:bg-secondary"
              >
                Calculate EMI
              </a>
            </div>

            {/* Colours */}
            <div className="mt-8">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Available colours — {vehicle.colors[color].name}
              </div>
              <div className="mt-3 flex gap-3">
                {vehicle.colors.map((c, i) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    onClick={() => setColor(i)}
                    className={`size-8 rounded-full border-2 transition ${
                      color === i ? "border-honda-red scale-110" : "border-border"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden bg-surface"
          >
            <VehicleArt vehicle={vehicle} className="aspect-[4/3] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="mx-auto w-full max-w-[1750px] px-6 py-16 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">
              Overview
            </h2>
            <div className="mt-3 h-1 w-12 bg-honda-red" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {vehicle.description}
            </p>

            <h3 className="mt-10 flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
              <Settings2 className="size-5 text-honda-red" /> Signature Features
            </h3>
            <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {vehicle.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card transition-all hover:border-honda-red/40 hover:shadow-md"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-honda-red/10 text-honda-red">
                    <Check className="size-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-foreground/90">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full specs table */}
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">
              Full Specifications
            </h2>
            <div className="mt-3 h-1 w-12 bg-honda-red" />
            <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <div className="divide-y divide-border">
                {vehicle.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 px-6 py-4 odd:bg-surface/60 transition hover:bg-secondary/40"
                  >
                    <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                    <span className="text-right text-sm font-bold text-foreground">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-surface py-14">
          <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
            <h2 className="font-display text-2xl font-bold text-foreground">You may also like</h2>
            <div className="mt-3 h-0.5 w-12 bg-honda-red" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/vehicles/$slug"
                  params={{ slug: r.slug }}
                  className="group block overflow-hidden bg-background"
                >
                  <div className="overflow-hidden">
                    <VehicleArt
                      vehicle={r}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {r.segment}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      {r.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-display text-base font-bold text-foreground">
                        {r.price}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-honda-red">
                        Explore <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingActions />
    </main>
  );
}
