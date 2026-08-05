import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Divisions } from "@/components/site/Divisions";
import { Lineup } from "@/components/site/Lineup";
import { AboutUs } from "@/components/site/AboutUs";
import { BetterTomorrow } from "@/components/site/BetterTomorrow";
import { Community } from "@/components/site/Community";
import { EMI } from "@/components/site/EMI";
import { Showroom } from "@/components/site/Showroom";
import { News } from "@/components/site/News";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kanade Honda (Geet Motors) — Honda 2 Wheeler Authorized Dealer" },
      {
        name: "description",
        content:
          "Kanade Honda (Geet Motors), Honda 2 Wheeler Authorized Dealer in Undri, Pune. Sales, service, spares and genuine accessories all under one roof. Kanade Honda. Your Trusted Honda Partner.",
      },
      {
        property: "og:title",
        content: "Kanade Honda (Geet Motors) — Honda 2 Wheeler Authorized Dealer",
      },
      {
        property: "og:description",
        content:
          "Every Honda need — sales, service, spares. Kanade Honda, Undri. Your Trusted Honda Partner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Divisions />
      <Lineup />
      <AboutUs />
      <BetterTomorrow />
      <Community />
      <EMI />
      <Showroom />
      <News />
      <Footer />
      <FloatingActions />
    </main>
  );
}
