import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import { insightsArticles } from "../data/insights-content";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Stralynn" },
      { name: "description", content: "Field notes, research and points of view from Stralynn on cybersecurity, digital transformation and enterprise resilience." },
      { property: "og:title", content: "Insights — Stralynn" },
      { property: "og:description", content: "Research and POVs on cybersecurity and enterprise digital transformation." },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", ...Array.from(new Set(insightsArticles.map((a) => a.cat)))];

function InsightsPage() {
  const [active, setActive] = useState("All");
  const featured = insightsArticles.find((a) => a.featured) ?? insightsArticles[0];
  const rest = insightsArticles.filter((a) => a.slug !== featured.slug);
  const filtered = active === "All" ? rest : rest.filter((a) => a.cat === active);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={<>Field notes from the <span className="font-editorial italic">front lines</span></>}
        description="Research, frameworks and points of view from the partners and practitioners building inside our clients."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80"
      />

      {/* FEATURED */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/11] bg-secondary">
                <img src={featured.img} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                  Featured
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 eyebrow mb-5">
                  <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" />{featured.cat}</span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" />{featured.read}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-azure transition-colors">
                  Read the full report <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="pb-28 md:pb-36">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 border-t border-border pt-10">
            <Reveal>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">Latest thinking</h3>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative px-4 py-2 text-sm rounded-full border transition-colors ${
                    active === c
                      ? "border-navy bg-navy text-cream"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {active === c && (
                    <motion.span layoutId="insights-pill" className="absolute inset-0 rounded-full bg-navy -z-10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground py-10">No articles in this category yet.</p>
          ) : (
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((a) => (
                <StaggerItem key={a.slug}>
                  <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block">
                    <div className="overflow-hidden rounded-2xl aspect-[5/3] bg-secondary mb-5">
                      <img src={a.img} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex items-center gap-3 eyebrow mb-3">
                      <span>{a.cat}</span>
                      <span className="text-muted-foreground/60">•</span>
                      <span className="text-muted-foreground">{a.date}</span>
                    </div>
                    <h4 className="font-display text-xl font-semibold leading-snug group-hover:text-azure transition-colors">
                      {a.title}
                    </h4>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{a.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {a.read}
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

    </>
  );
}
