import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, Search, Bot, Plug, TrendingUp, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/ai-digital-transformation")({
  head: () => ({
    meta: [
      { title: "AI Transformation Services for the Enterprise — Stralynn" },
      { name: "description", content: "Stralynn designs and deploys enterprise AI transformations — StraAI agents, workflow automation, and LLM integration — for Fortune 500s, mid-market, PE portfolios, and government." },
      { property: "og:title", content: "AI Transformation Services for the Enterprise — Stralynn" },
      { property: "og:description", content: "StraAI agents, StraL2C, and StraBoard delivered through the STRABASE methodology and 90 day Digital Capsules." },
    ],
  }),
  component: Page,
});

const workstreams = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    desc: "Current-state analysis of data, processes, and platforms; identification of high-ROI automation candidates and integration constraints.",
  },
  {
    icon: Search,
    title: "Workflow & Objective Discovery",
    desc: "Study of the client's workflows, business objectives, and operating context — defining what each agent must accomplish before any design or build work begins.",
  },
  {
    icon: Bot,
    title: "AI Agent Deployment",
    desc: "Configuration and rollout of StraAI agents fitted to each workflow — lead-to-cash (StraL2C), intelligent document processing, and workflow orchestration — with precision implementation that minimizes operational disruption.",
  },
  {
    icon: Plug,
    title: "LLM & Platform Integration",
    desc: "Integration of language model layers with existing Salesforce, ERP, and data environments, with governance and access controls.",
  },
  {
    icon: TrendingUp,
    title: "Enablement & Optimization",
    desc: "Team training, adoption tracking, and post-deployment monitoring and refinement, so agent performance continues to improve against measurable targets.",
  },
];

const useCases = [
  { t: "Lead-to-Cash Automation", d: "StraL2C, Stralynn's lead-to-cash automation product, compresses quote, order, and billing cycles across CRM and ERP systems." },
  { t: "Citizen Services & Document Intake", d: "Intelligent document processing (IDP) that converts paper-based government intake into digital workflows — turning paperwork into clickwork." },
  { t: "Post-Acquisition Intelligence", d: "AI-assisted data consolidation and reporting layers for PE portfolio companies during 100-day execution plans." },
  { t: "Executive Visibility", d: "StraBoard dashboards giving leadership real-time operational and financial visibility across integrated systems." },
];

const proof = [
  { t: "Named products, not slideware", d: "StraAI Agents, StraL2C, and StraBoard are productized assets deployed in client environments — service boundaries AI engines and buyers can verify." },
  { t: "Federal credibility", d: "GSA Multiple Award Schedule contract (awarded November 2025) covering IT professional services, cloud computing, and HACS cybersecurity services." },
  { t: "Delivery footprint", d: "Consulting and engineering teams across the United States, Canada, and India." },
];

const faqs = [
  { q: "What is a StraAI agent?", a: "A StraAI agent is an autonomous, AI-driven software entity designed to perceive, learn, and act within a business environment — orchestrating complex processes and adapting in real time, unlike static rule-based automation." },
  { q: "How long does an AI transformation take?", a: "Defined-scope deployments can be structured as 90 day Digital Capsules; broader multi-process transformations are phased across the five workstreams with documented milestones." },
  { q: "Does Stralynn's AI work with our existing systems?", a: "Yes. StraAI agents and LLM layers integrate with existing Salesforce, NetSuite, Certinia, and ERP environments rather than requiring platform replacement." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>AI Transformation Services <span className="font-editorial italic">for the enterprise</span></>}
        description="Stralynn Consulting Services designs and deploys enterprise AI transformations including StraAI agents, workflow automation, and language model integration for Fortune 500 companies, mid-market enterprises, private equity portfolio companies, and government agencies."
        video="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Book a 30-minute scoping call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* DEFINITION */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <Reveal>
              <div className="eyebrow mb-3">Definition</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">What is AI-powered digital transformation?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>AI-powered digital transformation is the redesign of core business processes around artificial intelligence, replacing manual workflows and legacy decision points with AI agents that perceive, learn, and act within the business environment.</p>
                <p>Unlike traditional rule-based automation, Stralynn starts from the workflow and its business objective, then configures a StraAI agent fitted to that job. The agent adapts in real time, orchestrating multi-step processes such as lead-to-cash, case routing, and document intake while surfacing insights for strategic decisions.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORKSTREAMS */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="eyebrow mb-3">Service scope & delivery</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">Five workstreams, delivered in sequence</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Engagements run on the STRABASE methodology — Stralynn's benefits-driven delivery framework that builds toward self-sufficient automation rather than open-ended consulting dependency. Defined-scope initiatives can be structured as 90 day Digital Capsules for rapid solution turn-up.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workstreams.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full p-7 rounded-2xl border border-border bg-background hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <w.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Use cases</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">Where enterprises apply Stralynn's AI agents</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <StaggerItem key={u.t}>
                <div className="p-7 rounded-2xl bg-card border border-border h-full">
                  <div className="font-display text-xl font-semibold mb-2">{u.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Why Stralynn</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">Why choose Stralynn for AI transformation?</h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {proof.map((p) => (
              <StaggerItem key={p.t}>
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-background">
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
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">Common questions</h2>
          </Reveal>
          <div className="mt-14 max-w-3xl space-y-6">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="p-7 rounded-2xl border border-border bg-card">
                  <div className="font-display text-lg font-semibold mb-2">{f.q}</div>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-cream">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-semibold">Scope your AI transformation</h3>
              <p className="mt-4 text-cream/80 leading-relaxed">Two intake paths depending on how you buy</p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Link to="/contact" className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-cream text-navy-deep px-6 py-5 font-semibold">
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-navy-deep/60 mb-1">Commercial</span>
                  Book a 30-minute scoping call
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-cream/30 bg-cream/5 text-cream px-6 py-5 font-semibold backdrop-blur">
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-cream/60 mb-1">Public Sector</span>
                  Request a capability statement
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
