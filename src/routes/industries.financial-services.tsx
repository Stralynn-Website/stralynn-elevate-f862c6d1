import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Landmark,
  Bot,
  DatabaseZap,
  Layers,
  ShieldCheck,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/financial-services")({
  head: () => ({
    meta: [
      { title: "Financial Services IT Modernization & Compliance — Stralynn" },
      {
        name: "description",
        content:
          "Stralynn engineers resilient financial IT architectures, secure multi-cloud database cutovers and enterprise AI workflow automation — with zero operational downtime.",
      },
      {
        property: "og:title",
        content: "Financial Services IT Modernization & Compliance — Stralynn",
      },
      {
        property: "og:description",
        content:
          "Core platform modernization, automated compliance operations and high-integrity database cutovers for banks, wealth managers and fintech enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const platforms = [
  "Salesforce Financial Services Cloud",
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
    icon: Landmark,
    track: "Core Platform & Legacy Modernization",
    scope:
      "Refactoring legacy core platforms, mainframe architectures, and complex database environments into agile, cloud-native infrastructures.",
    impact:
      "Eliminates technical debt, shrinks operational overhead, and supports high-volume transaction processing.",
  },
  {
    icon: Bot,
    track: "Automated Workflow & AI Agent Deployment",
    scope:
      "Architecting intelligent process automation layers for transaction reconciliation, risk tracking, and regulatory reporting.",
    impact:
      "Accelerates decisioning velocity, reduces manual processing errors, and optimizes middle/back-office efficiency.",
  },
  {
    icon: DatabaseZap,
    track: "Secure Multi-Cloud Database Cutovers",
    scope:
      "Executing high-velocity database migrations and cloud transitions with total schema integrity and zero operational downtime.",
    impact:
      "Guarantees continuous business operations, zero financial data loss, and complete transaction auditability.",
  },
  {
    icon: Layers,
    track: "Enterprise CRM & ERP Implementations",
    scope:
      "Aligning Salesforce Financial Services Cloud, ERP engines, and Certinia enterprise environments across financial operations.",
    impact:
      "Delivers unified client visibility, streamlines portfolio management, and synchronizes front-to-back office workflows.",
  },
  {
    icon: ShieldCheck,
    track: "Regulatory Risk & Data Governance",
    scope:
      "Implementing automated compliance tracking, strict data handling protocols, and continuous risk monitoring frameworks.",
    impact:
      "Secures sensitive financial assets, mitigates regulatory exposure, and simplifies institutional audit reporting.",
  },
];

const metrics = [
  {
    kpi: "800GB",
    t: "Cloud Database Cutover",
    l: "High-velocity multi-cloud database transition executed with verified 100% record accuracy and zero business disruption.",
  },
  {
    kpi: "42TB",
    t: "Enterprise Data Migration",
    l: "Complex financial data assets successfully migrated and validated within a compressed 90-day execution window.",
  },
  {
    kpi: "90 Days",
    t: "Execution Timeline",
    l: "Complete enterprise content and infrastructure platform cutover finalized with zero operational data loss.",
  },
];

const caseStudies = [
  {
    t: "800GB Multi-Cloud Database Cutover Brief",
    d: "Read how Stralynn executed a high-velocity cloud database cutover with total schema integrity and zero operational downtime.",
  },
  {
    t: "42TB Financial Infrastructure Migration Case Study",
    d: "Discover the technical validation methodologies and timeline parameters used to migrate 42TB of core enterprise assets in 90 days.",
  },
  {
    t: "Automated Workflow & Financial Compliance Brief",
    d: "Examine how our engineering teams deployed intelligent process automation layers to eliminate manual processing errors and elevate delivery speed.",
  },
];

const pathways = [
  {
    icon: CalendarClock,
    t: "Financial Enterprise Consultation",
    d: "Schedule a 30-minute strategic consultation with our financial services practice lead to review active platform modernizations, core system cutovers, or Salesforce deployments.",
    cta: "Schedule consultation",
  },
  {
    icon: ShieldCheck,
    t: "Risk Governance & AI Evaluation",
    d: "Request a comprehensive technical evaluation to assess multi-cloud database security, automated workflow compliance, or infrastructure resilience.",
    cta: "Request evaluation",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Financial Services"
        title={
          <>
            High-velocity financial services infrastructure and{" "}
            <span className="font-editorial italic">automated compliance operations.</span>
          </>
        }
        description="Stralynn engineers resilient financial IT architectures, secure multi-cloud database cutovers, and enterprise AI workflow automation to protect sensitive financial assets and accelerate transaction processing without operational downtime."
        image="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1800&q=80"
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
            Financial services architecture compatibility
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
                Financial services IT modernization and{" "}
                <span className="font-editorial italic">core architecture.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stralynn Consulting Services delivers specialized IT consulting for financial
              institutions, private wealth managers, capital markets firms, and fintech enterprises,
              executing core banking platform modernizations, automated workflow integrations,
              high-integrity database cutovers, and AI-driven compliance frameworks. By bridging
              legacy core environments with agile multi-cloud infrastructures, Stralynn reduces
              operational friction, enforces auditable risk governance, and accelerates transaction
              processing speeds across global financial operations.
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
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=2000&q=80"
                alt="Financial operations team reviewing transaction and risk data"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">
                  In focus
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  Modernize the core without pausing transaction flow.
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
              Specialized financial services technical capabilities and{" "}
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
                      Financial &amp; operational impact
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
              Documented scale metrics and proven financial system performance.
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
              Featured financial services case studies
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
                <span className="font-editorial italic">financial services leadership.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Stralynn's financial services technology practice operates under the strategic
                leadership of Founder, CEO, and Board Chairwoman Alpna J. Doshi, NACD.DC. Bringing
                extensive experience as a former Fortune 500 Group CIO, Thoma Bravo Operating Partner
                alumna, and former board director at Mimecast, Alpna provides board-level governance,
                institutional risk oversight, and transactional execution discipline to every
                financial engagement.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Former - Group CIO Royal Philips, Thoma Bravo Operating Partner",
                  "Former board director, Mimecast",
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
                "In financial services technology transformation, architectural precision and risk
                governance are paramount. We build resilient, auditable technical foundations that
                empower financial leaders to modernize legacy stacks with complete operational
                confidence."
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
              Initiate a financial services strategic consultation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Stralynn provides direct engagement pathways tailored to active financial modernization
              timelines, core system cutovers, and enterprise deployment schedules.
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
