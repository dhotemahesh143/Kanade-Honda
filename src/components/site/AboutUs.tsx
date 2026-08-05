import { motion } from "framer-motion";
import { ShieldCheck, Heart, Award, Sparkles, UserCheck } from "lucide-react";
import showroomTeam from "@/assets/showroom-team.jpg";
import anilKanade from "@/assets/anil-kanade.jpg";
import rohiniKanade from "@/assets/rohini-kanade.jpg";
import { siteConfig } from "@/lib/site-config";

export function AboutUs() {
  return (
    <section id="about" className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        {/* About Section Header & Main Content */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full bg-honda-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-honda-red">
              <Award className="size-4" /> 13 Years Since 2012
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              About Us
            </h2>
            <div className="mt-4 h-1 w-20 bg-honda-red" />
            <p className="mt-2 text-sm font-semibold text-honda-red uppercase tracking-wider">
              {siteConfig.name} · {siteConfig.subtitle}
            </p>

            <div className="mt-8 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                For 13 years, Kanade Honda has been a trusted name for Honda two-wheeler customers
                in Undri, Pune. What sets us apart is simple:{" "}
                <strong className="text-foreground font-semibold">
                  sales, genuine accessories, service, and genuine spares — all under one roof
                </strong>
                . Whether you’re buying your first Activa, upgrading to a Hornet 2.0, or just
                walking in for a routine service, you don’t need to go anywhere else. We handle it
                all, with the same care and honesty every single time.
              </p>

              <p>
                Our team believes a two-wheeler purchase isn’t just a transaction — it’s the start
                of a relationship. That’s why our sales executives take the time to understand what
                you actually need, our service bay is staffed with trained technicians who work only
                with genuine Honda parts, and our spares counter ensures you’re never stuck waiting
                for the right component. From financing support to on-the-spot loan approvals, from
                festival offers to AMC and extended warranty plans, everything is designed to make
                owning a Honda effortless.
              </p>

              <p>
                Thirteen years of riders trusting us with their journeys is what keeps us moving
                forward. It is this warmth of loyalty — customers returning year after year, service
                after service — that gives us the confidence to keep growing, keep improving, and
                keep serving Undri and Pune with the same dedication we started with. At Kanade
                Honda, we’re not just here to sell you a two-wheeler; we’re here for every mile that
                follows.
              </p>
            </div>

            {/* Signature Tagline Callout */}
            <div className="mt-10 rounded-2xl bg-surface border-l-4 border-honda-red p-6 md:p-8 shadow-card">
              <div className="flex items-start gap-4">
                <Heart className="size-6 text-honda-red shrink-0 mt-1" />
                <div>
                  <p className="font-display text-lg font-bold text-foreground md:text-xl italic">
                    "Drive Home Happiness - where every ride begins with Trust , only at Kanade
                    Honda"
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-widest text-honda-red uppercase">
                    Kanade Honda. Your Trusted Honda Partner.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
              {[
                { title: "Sales", desc: "Complete Honda Range" },
                { title: "Service", desc: "5-Bay Service Center" },
                { title: "Spares", desc: "100% Genuine Honda Parts" },
                { title: "Accessories", desc: "Official Honda Boutique" },
              ].map((p) => (
                <div key={p.title} className="flex flex-col">
                  <span className="font-display text-base font-bold text-foreground flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-honda-red" /> {p.title}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">{p.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={showroomTeam}
                alt="Kanade Honda Team"
                className="w-full h-[480px] md:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-honda-red px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="size-3.5" /> Undri & Pune
                </div>
                <h3 className="font-display text-2xl font-bold">Kanade Honda (Geet Motors)</h3>
                <p className="mt-1 text-sm text-white/80">
                  Honda 2 Wheeler Authorized Dealer · Serving since 2012
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-honda-red text-white p-6 rounded-2xl shadow-xl max-w-[220px] flex-col">
              <span className="font-display text-3xl font-black">13+</span>
              <span className="text-xs font-bold uppercase tracking-wider mt-1">
                Years of Trust & Loyalty
              </span>
              <span className="text-[11px] text-white/80 mt-1">
                Katraj-Saswad By Pass Road, Undri
              </span>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team Showcase */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-honda-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-honda-red">
              <UserCheck className="size-4" /> Leadership & Management
            </div>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Meet Our Leadership
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Guiding Kanade Honda with dedication, integrity, and customer-first values since 2012.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Proprietor - Anil Kanade */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={anilKanade}
                  alt="Anil Kanade - Proprietor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-honda-red bg-honda-red/10 px-3 py-1 rounded-full w-fit">
                  Proprietor
                </span>
                <h4 className="mt-3 font-display text-2xl font-bold text-foreground">
                  Anil Kanade
                </h4>
                <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Kanade Honda (Geet Motors)
                </p>
                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Leading Kanade Honda with a vision of transparent, customer-centric service and
                  building long-lasting relationships across Undri and Pune.
                </p>
              </div>
            </motion.div>

            {/* Director - Rohini Kanade */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={rohiniKanade}
                  alt="Rohini Kanade - Director"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-honda-red bg-honda-red/10 px-3 py-1 rounded-full w-fit">
                  Director
                </span>
                <h4 className="mt-3 font-display text-2xl font-bold text-foreground">
                  Rohini Kanade
                </h4>
                <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Kanade Honda (Geet Motors)
                </p>
                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Directing operations and customer care excellence to ensure every rider receives
                  warmth, care, and an effortless Honda ownership experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
