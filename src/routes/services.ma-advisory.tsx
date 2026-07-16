import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileSearch, Scissors, GitMerge, TrendingUp, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/ma-advisory")({
  head: () => ({
    meta: [
      { title: "M&A Technology Due Diligence and Integration — Stralynn" },
      { name: "description", content: "Technology due diligence, carve-out data separation, and post-acquisition system integration for private equity firms and corporate acquirers — executing 100-day plans." },
      { property: "og:title", content: "M&A Technology Due Diligence and Integration — Stralynn" },
      { property: "og:description", content: "Diligence and integration as one continuous engagement — 42TB migrated, 90-day ERP cutover, zero operational data loss." },
    ],
  }),
  component: Page,
});

const stages = [
  { icon: FileSearch, t: "Pre-Close Diligence", d: "Systems and data architecture assessment, security and compliance review, technical-debt inventory, and integration cost modeling." },
  { icon: Scissors, t: "Carve-Out Execution", d: "Data separation planning and execution under transaction constraints, including entity-level data isolation and TSA scoping." },
  { icon: GitMerge, t: "Post-Close Integration", d: "ERP, Salesforce, and data platform consolidation aligned to the 100-day plan, with vendor rationalization and cutover management." },
  { icon: TrendingUp, t: "Value Creation", d: "Automation and AI agent deployment across the consolidated stack to drive EBITDA optimization and fund-level visibility." },
];

const buyers = [
  { t: "Private Equity Firms", d: "Diligence support across active deal pipelines, plus repeatable integration playbooks across portfolio companies." },
  { t: "Portfolio Company Operators", d: "Execution capacity for 100-day plans — carve-outs, system consolidations, and vendor rationalization under tight timelines." },
  { t: "Corporate Acquirers", d: "Technical integration of acquired entities into existing ERP and CRM environments without disrupting the core business." },
];

const proof = [
  { t: "Diligence-to-delivery continuity", d: "The team that assesses the target executes the integration — no advisory/delivery handoff risk." },
  { t: "Scale record", d: "Documented large-scale migration and cutover benchmarks — 42TB migrated and validated in a compressed 90-day window." },
  { t: "Cross-platform depth", d: "Certified implementation capability across Salesforce, NetSuite, and Certinia — the platforms most frequently consolidated post-close." },
];

const faqs = [
  { q: "How fast can Stralynn start on a live deal?", a: "Diligence engagements are scoped to transaction timelines. The intake pathway is a direct scoping call to evaluate active M&A timelines, so mobilization aligns to the deal calendar rather than a standard sales cycle." },
  { q: "What does a carve-out data separation involve?", a: "Carve-out separation isolates the divested entity's data — customer records, financials, and operational systems — from the parent environment, with validation at each stage so both entities remain operational through the transaction." },
  { q: "Does Stralynn handle both diligence and integration?", a: "Yes. Stralynn performs pre-close technology due diligence and post-close integration as a continuous engagement, converting identified risks directly into the 100-day execution plan." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>M&A technology due diligence <span className="font-editorial italic">and integration.</span></>}
        description="Stralynn Consulting Services provides technology due diligence, carve-out data separation, and post-acquisition system integration for private equity firms and corporate acquirers — executing 100-day plans that protect data integrity through close and beyond."
        video="https://videos.pexels.com/video-files/6774633/6774633-hd_1920_1080_30fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Book a deal-timeline scoping call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* DEFINITION */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Definition</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">What is technology due diligence in M&A?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>Technology due diligence is the pre-close evaluation of a target company's systems, data architecture, security posture, and technical debt to identify integration risks, hidden costs, and post-close transition requirements.</p>
                <p>Stralynn performs diligence and integration as one continuous engagement, so risks identified before close become the execution plan after close — eliminating the handoff gap between advisory and delivery teams.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Service scope</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Four deal stages, one <span className="font-editorial italic">continuous team.</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s) => (
              <StaggerItem key={s.t}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <s.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DELIVERY / BENCHMARKS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Delivery model</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">How Stralynn executes post-acquisition integration.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Integration follows a data-first sequence: separate or consolidate data assets with validation checkpoints before platform cutover, so operational continuity is never dependent on untested migrations.
                </p>
                <div className="mt-10 grid sm:grid-cols-2 gap-5">
                  <div className="p-7 rounded-2xl border border-border bg-card">
                    <div className="font-display text-4xl font-semibold gradient-accent-text">90 days</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Complete ERP platform cutover finalized post-close with zero operational data loss.</p>
                  </div>
                  <div className="p-7 rounded-2xl border border-border bg-card">
                    <div className="font-display text-4xl font-semibold gradient-accent-text">42TB</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Core data assets migrated and validated within a compressed 90-day window.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUYERS */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Who we serve</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">Who uses Stralynn for M&A work.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {buyers.map((b) => (
              <StaggerItem key={b.t}>
                <div className="p-7 rounded-2xl bg-background border border-border h-full">
                  <div className="font-display text-xl font-semibold mb-2">{b.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Why Stralynn</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Operators, not <span className="font-editorial italic">spectators.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {proof.map((p) => (
              <StaggerItem key={p.t}>
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-6 w-6 text-azure shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-lg">{p.t}</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">Common questions.</h2>
          </Reveal>
          <div className="mt-14 max-w-3xl space-y-6">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="p-7 rounded-2xl border border-border bg-background">
                  <div className="font-display text-lg font-semibold mb-2">{f.q}</div>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-cream">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-semibold">Align Stralynn to your deal timeline.</h3>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Link to="/contact" className="inline-flex items-center justify-between gap-3 rounded-2xl bg-cream text-navy-deep px-6 py-5 font-semibold">
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-navy-deep/60 mb-1">Active deal</span>
                  Book a 30-minute deal-timeline scoping call
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-between gap-3 rounded-2xl border border-cream/30 bg-cream/5 text-cream px-6 py-5 font-semibold backdrop-blur">
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-cream/60 mb-1">Pipeline planning</span>
                  Download the technical due diligence brief
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
