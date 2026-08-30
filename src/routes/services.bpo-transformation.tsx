import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Bot, Plug, Users, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import bpoImage from "../assets/services/bpo-transformation.jpeg";

export const Route = createFileRoute("/services/bpo-transformation")({
  head: () => ({
    meta: [
      { title: "BPO Transformation Services — Stralynn" },
      { name: "description", content: "Stralynn modernizes outsourced operations with AI agents, intelligent document processing, and workflow automation — shifting BPO teams from manual processing to exception handling." },
      { property: "og:title", content: "BPO Transformation Services — Stralynn" },
      { property: "og:description", content: "AI agents, IDP, and workflow automation embedded into outsourced finance, service, claims, and back-office processes." },
    ],
  }),
  component: Page,
});

const workstreams = [
  { icon: Search, title: "Process Discovery", desc: "Documented mapping of outsourced workflows, volumes, error rates, and cost drivers to identify automation candidates." },
  { icon: Bot, title: "Intelligence Layer Deployment", desc: "StraAI agents and intelligent document processing (IDP) integrated into intake, processing, and reporting steps." },
  { icon: Plug, title: "Platform Integration", desc: "Connection of the automated layer to core Salesforce, ERP, and data systems so outsourced work lands in systems of record." },
  { icon: Users, title: "Operating Model Redesign", desc: "Redefined human-in-the-loop roles, exception queues, and SLA structures for the transformed process." },
];

const outcomes = [
  { h: "Throughput", d: "Repeatable transactions execute continuously through AI agents rather than queuing for shift-based manual processing." },
  { h: "Accuracy and auditability", d: "Every automated step is logged and validated, producing audit trails manual processing cannot match." },
  { h: "Cost profile", d: "Outsourced headcount concentrates on exceptions and judgment work." },
];

const proof = [
  "Productized automation assets: StraAI Agents and Stral2C deploy into BPO contexts as configured products, not custom builds from zero.",
  "Data-first delivery: Migration and integration controls with documented validation — the same discipline applied in Stralynn's large-scale data migrations.",
  "Global delivery model: US, Canada, and India teams supporting follow-the-sun implementation alongside offshore BPO operations.",
];

const faqs = [
  { q: "Does BPO transformation replace our outsourcing provider?", a: "No. Stralynn transforms the process layer — automating repeatable volume and redefining human roles — while the client's outsourcing relationships and contracts remain their own decision." },
  { q: "Which processes are the best automation candidates?", a: "High-volume, rules-heavy processes with structured or semi-structured documents — invoice processing, order entry, claims intake, and customer onboarding — typically show the fastest returns." },
  { q: "How is success measured?", a: "Each engagement defines baseline metrics during process discovery — volumes, error rates, cycle times, and cost per transaction — and reports against them after the intelligence layer goes live." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>BPO Transformation <span className="font-editorial italic">Services</span></>}
        description="Stralynn Consulting Services modernizes business process outsourcing operations by embedding AI agents, intelligent document processing, and workflow automation into outsourced processes reducing manual effort while raising accuracy and auditability."
        video="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
      >
        <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
          Schedule a 30 minute process assessment <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </PageHeader>

      {/* Definition */}
      <section className="py-24 md:py-32">
        <div className="container-x max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              What is <span className="font-editorial italic">BPO transformation?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              BPO transformation is the modernization of outsourced business processes — finance operations, customer service, claims handling, and back-office administration — by layering automation and AI intelligence over the existing outsourcing stack. The goal is to shift outsourced teams from manual transaction processing to exception handling, while AI agents execute the repeatable volume.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl overflow-hidden aspect-[16/8] bg-secondary">
              <img
                src={bpoImage}
                alt="Team collaborating on a transformed BPO workflow"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Workstreams */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="eyebrow mb-3">Service scope</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What Stralynn's BPO transformation <span className="font-editorial italic">includes</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid sm:grid-cols-2 gap-5">
            {workstreams.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
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

      {/* Outcomes */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Outcomes</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What changes after a <span className="font-editorial italic">BPO transformation</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {outcomes.map((o) => (
              <StaggerItem key={o.h}>
                <div className="flex gap-4 p-6 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-6 w-6 text-azure shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display text-lg font-semibold mb-1">{o.h}</div>
                    <div className="text-muted-foreground leading-relaxed">{o.d}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="eyebrow mb-3">Why Stralynn</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Why choose Stralynn for <span className="font-editorial italic">BPO transformation</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-3 gap-5">
            {proof.map((p) => (
              <StaggerItem key={p}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border">
                  <CheckCircle2 className="h-6 w-6 text-azure mb-4" />
                  <p className="text-sm leading-relaxed">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="eyebrow mb-3">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-12">
              Common <span className="font-editorial italic">questions</span>
            </h2>
          </Reveal>
          <Stagger className="space-y-4">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-xl font-semibold mb-3">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-navy-deep text-cream">
        <div className="container-x max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Assess your BPO <span className="font-editorial italic">automation potential</span>
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
                Schedule a 30 minute process assessment call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold hover:bg-cream/10 transition-all">
                Fill out the contact form <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
