import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  FileSearch,
  Scissors,
  Layers,
  BarChart3,
  Bot,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/private-equity")({
  head: () => ({
    meta: [
      { title: "Private Equity IT Integration & EBITDA Expansion — Stralynn" },
      {
        name: "description",
        content:
          "Stralynn executes M&A technical due diligence, carve-out data isolation and 100-day platform consolidations across private equity portfolio companies — without operational downtime.",
      },
      { property: "og:title", content: "Private Equity IT Integration & EBITDA Expansion — Stralynn" },
      {
        property: "og:description",
        content:
          "Rapid technical due diligence, carve-out separations and portfolio platform consolidation that accelerate 100-day value creation plans.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const platforms = [
  "Salesforce",
  "Certinia",
  "NetSuite",
  "SAP",
  "Oracle",
  "Google Cloud",
  "AWS",
  "Azure",
];

const capabilities = [
  {
    icon: FileSearch,
    track: "M&A Technical Due Diligence & Carve-Outs",
    scope:
      "Evaluating target technology stacks, quantifying technical debt, and isolating carve-out data assets within compressed 30 to 60 day deal windows.",
    impact:
      "Mitigates post-close transition risk and establishes clean operational boundaries before deal close.",
  },
  {
    icon: Scissors,
    track: "100-Day Post-Close Integration Plans",
    scope:
      "Executing accelerated technology unification, consolidating redundant SaaS licenses, and rationalizing vendor contracts.",
    impact:
      "Captures immediate cost synergies and accelerates time-to-value across newly acquired portfolio assets.",
  },
  {
    icon: Layers,
    track: "Enterprise Platform Consolidation",
    scope:
      "Unifying fragmented Salesforce, ERP engines, and Certinia architectures across roll-up acquisitions with absolute data integrity.",
    impact:
      "Establishes single-pane-of-glass operational reporting and eliminates legacy platform maintenance overhead.",
  },
  {
    icon: BarChart3,
    track: "Fund-Level Visibility & Reporting",
    scope:
      "Architecting centralized executive dashboards and automated data pipelines across all portfolio investments.",
    impact:
      "Delivers real-time operational metrics and financial transparency to PE Operating Partners and fund leadership.",
  },
  {
    icon: Bot,
    track: "Agentic AI & Workflow Automation",
    scope:
      "Infusing enterprise AI agent layers and automated processing workflows into core portfolio operating stacks.",
    impact:
      "Drives sustainable margin expansion, reduces SG&A overhead, and improves portfolio operating leverage.",
  },
];

const metrics = [
  {
    kpi: "90 Days",
    t: "Post-Close Execution",
    l: "Complete enterprise platform cutover and system consolidation finalized with zero operational data loss.",
  },
  {
    kpi: "42TB",
    t: "Carve-Out Data Separation",
    l: "Core data assets successfully isolated, migrated, and validated within a compressed 90-day integration window.",
  },
  {
    kpi: "100%",
    t: "Record Accuracy",
    l: "Multi-cloud database cutovers executed across portfolio systems with zero business disruption.",
  },
];

const caseStudies = [
  {
    t: "Multi-Portco ERP Cutover Brief",
    d: "Review how Stralynn executed a parallel-track ERP cutover for a private equity-backed buy-and-build platform, completing full go-live within 90 days post-close.",
  },
  {
    t: "Carve-Out Infrastructure Isolation Brief",
    d: "Discover how our engineering team separated legacy IT infrastructure and migrated 42TB of mission-critical data for an enterprise carve-out with zero operational downtime.",
  },
  {
    t: "Post-Acquisition Technical Due Diligence Framework",
    d: "Examine the exact risk evaluation criteria used by PE Operating Partners to identify tech debt and lock in EBITDA synergies pre-close.",
  },
];

const pathways = [
  {
    icon: CalendarClock,
    t: "Active Deal & Carve-Out Pathway",
    d: "Schedule a 30-minute strategic consultation with our PE technology practice to review upcoming deal timelines, carve-out isolation plans, or 100-day execution roadmaps.",
    cta: "Schedule consultation",
  },
  {
    icon: FileSearch,
    t: "Portfolio Synergy & AI Review Pathway",
    d: "Request a comprehensive technical evaluation to identify vendor rationalization, platform consolidation, and AI automation opportunities across active portfolio assets.",
    cta: "Request evaluation",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Private Equity"
        title={
          <>
            Post-acquisition EBITDA expansion and{" "}
            <span className="font-editorial italic">100-day IT integration.</span>
          </>
        }
        description="Stralynn executes rapid M&A technical due diligence, carve-out data isolation, and enterprise platform consolidations across portfolio companies to accelerate value creation without operational downtime."
        image="https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1800&q=80"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all"
          >
            Schedule a strategic consultation{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-10">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cream/60 mb-4">
            Portfolio platform compatibility
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {platforms.map((p) => (
              <span key={p} className="text-sm text-cream/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </PageHeader>

      {/* WHAT WE DO */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Private equity IT modernization and{" "}
                <span className="font-editorial italic">portfolio value creation.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stralynn Consulting Services delivers specialized IT consulting for private equity
              firms, executing rapid technical due diligence, carve-out data separations, vendor
              rationalizations, and enterprise platform integrations across portfolio assets. By
              aligning technology execution directly with fund investment theses, Stralynn
              accelerates 100-day value creation plans, eliminates post-close transition risks, and
              drives measurable EBITDA optimization across mid-market and enterprise portfolio
              investments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="pb-8">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[16/7] relative shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=2000&q=80"
                alt="Deal team reviewing portfolio performance data"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">
                  In focus
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  Protect deal velocity while eliminating post-acquisition risk.
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">
              Our capabilities
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Specialized private equity technical capabilities and{" "}
              <span className="font-editorial italic">service tracks.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.track}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card hover-lift flex flex-col">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{c.track}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.scope}</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-azure mb-2">
                      EBITDA &amp; portfolio impact
                    </div>
                    <p className="text-sm leading-relaxed">{c.impact}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">
              Industry insights
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              Documented scale metrics and proven portfolio performance.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden">
            {metrics.map((m) => (
              <StaggerItem key={m.kpi} className="bg-ink p-10">
                <div className="font-display text-5xl md:text-6xl font-semibold gradient-accent-text">
                  {m.kpi}
                </div>
                <div className="mt-3 font-display text-lg font-semibold">{m.t}</div>
                <div className="mt-2 text-sm text-cream/70 leading-relaxed">{m.l}</div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <h3 className="mt-20 font-display text-2xl md:text-3xl font-semibold">
              Featured private equity case studies
            </h3>
          </Reveal>
          <Stagger className="mt-8 grid md:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <StaggerItem key={c.t}>
                <Link
                  to="/insights"
                  className="group block h-full p-7 rounded-2xl border border-cream/15 bg-cream/[0.04] hover:bg-cream/[0.08] transition-colors"
                >
                  <h4 className="font-display text-lg font-semibold leading-snug">{c.t}</h4>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.d}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-glow">
                    Read the brief
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">
                Our leadership
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Methodological governance and{" "}
                <span className="font-editorial italic">private equity board oversight.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Stralynn's private equity practice operates under the strategic leadership of Alpna
                J. Doshi, NACD.DC, Founder, CEO, and former Operating Partner at Thoma Bravo.
                Combining Fortune 500 CIO governance with direct private equity transaction
                experience, Alpna ensures that every technical integration directly advances the
                fund's investment thesis and exit valuation goals.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Former - Group CIO Royal Philips, Thoma Bravo Operating Partner",
                  "NACD.DC certified director",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
              <blockquote className="font-editorial italic text-2xl md:text-3xl leading-snug">
                "In private equity value creation, technology execution must directly drive EBITDA
                expansion and exit multiple growth. We engineer technical integrations that protect
                deal velocity while eliminating post-acquisition operational risk."
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">Alpna J. Doshi, NACD.DC</span>
                Founder, CEO &amp; Board Chairwoman (Former Thoma Bravo Operating Partner Alumna)
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Initiate a private equity strategic consultation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Stralynn provides direct engagement pathways tailored to active deal timelines, due
              diligence periods, and portfolio integration schedules.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-5">
            {pathways.map((p) => (
              <StaggerItem key={p.t}>
                <div className="h-full p-8 rounded-2xl bg-background border border-border flex flex-col">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <p.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold self-start"
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
