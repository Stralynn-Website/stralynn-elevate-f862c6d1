import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Stralynn" },
      { name: "description", content: "Field notes, research and points of view from Stralynn on AI, operations, M&A and the future of enterprise." },
      { property: "og:title", content: "Insights — Stralynn" },
      { property: "og:description", content: "Research and POVs on AI, operations and enterprise transformation." },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", "AI & Data", "Operations", "M&A", "Industry"];

const articles = [
  {
    cat: "AI & Data",
    title: "The post-pilot enterprise: why 73% of AI initiatives never reach production",
    excerpt: "Most AI programs stall at the proof of concept. We unpack the operating model changes that separate the 27% who ship.",
    read: "9 min read",
    date: "May 2026",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    cat: "Operations",
    title: "Intelligent operations: a new mandate for the COO",
    excerpt: "Automation alone is table stakes. The next wave is human-in-the-loop systems engineered around outcomes.",
    read: "6 min read",
    date: "Apr 2026",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "M&A",
    title: "Value capture in the first 100 days: a diligence-to-integration playbook",
    excerpt: "The deals that outperform aren't won at signing. They're won in the first quarter post-close.",
    read: "11 min read",
    date: "Apr 2026",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "Industry",
    title: "Healthcare's AI moment: from documentation burden to clinical leverage",
    excerpt: "Where ambient AI, prior-auth automation and revenue cycle intelligence are creating measurable ROI today.",
    read: "8 min read",
    date: "Mar 2026",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "AI & Data",
    title: "Data foundations: the unglamorous prerequisite to enterprise AI",
    excerpt: "A practical guide to building the data architecture your models actually need.",
    read: "7 min read",
    date: "Mar 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "Operations",
    title: "BPO 2.0: rebuilding outsourcing for the agentic era",
    excerpt: "When agents handle the volume, the value of human work shifts upmarket. Here's how to reorganize for it.",
    read: "10 min read",
    date: "Feb 2026",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cat: "M&A",
    title: "The private equity operating partner's new toolkit",
    excerpt: "Why portfolio value creation is increasingly an engineering problem — and what that means for sponsors.",
    read: "5 min read",
    date: "Feb 2026",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];

function InsightsPage() {
  const [active, setActive] = useState("All");
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => a !== featured);
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
            <Link to="/insights" className="group grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/11] bg-secondary">
                <img src={featured.img} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                  Featured
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-azure mb-5">
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

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((a) => (
              <StaggerItem key={a.title}>
                <Link to="/insights" className="group block">
                  <div className="overflow-hidden rounded-2xl aspect-[5/3] bg-secondary mb-5">
                    <img src={a.img} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-azure mb-3">
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
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="pb-28 md:pb-36">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-cream">
            <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-cream/70 mb-4">The Stralynn Brief</div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] max-w-2xl">
                  Monthly notes from the field - <span className="font-editorial italic">No fluff.</span>
                </h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-cream/10 border border-cream/20 px-5 py-3 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-cream/60 transition-colors"
                />
                <button className="rounded-full bg-cream text-navy-deep px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-cream/90 transition-colors">
                  Subscribe <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
