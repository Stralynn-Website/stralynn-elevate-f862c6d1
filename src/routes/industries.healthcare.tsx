import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  Network,
  Bot,
  Layers,
  DatabaseZap,
  CheckCircle2,
  CalendarClock,
  FileSearch,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare IT & HIPAA-Compliant AI — Stralynn" },
      {
        name: "description",
        content:
          "Stralynn engineers zero-downtime healthcare infrastructure, secure EHR integrations and HIPAA-compliant enterprise AI automation for health organizations.",
      },
      { property: "og:title", content: "Healthcare IT & HIPAA-Compliant AI — Stralynn" },
      {
        property: "og:description",
        content:
          "Resilient healthcare IT architectures, secure data integrations and AI workflow automation — delivered without service disruption.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Healthcare,
});

const platforms = [
  "Google Cloud",
  "AWS",
  "Azure",
  "Salesforce Health Cloud",
  "Certinia",
  "NetSuite",
  "SAP",
  "Oracle",
];

const capabilities = [
  {
    icon: ShieldCheck,
    track: "HIPAA Compliant Cloud Infrastructure & Migration",
    scope:
      "Executing zero-downtime multi-cloud migrations, secure data lake construction, and HIPAA/HITRUST-aligned cloud architectures.",
    impact:
      "Guarantees zero care disruption, complete health data sovereignty, and audit-ready security compliance.",
  },
  {
    icon: Network,
    track: "EHR & Enterprise System Integration",
    scope:
      "Unifying disparate health record platforms, legacy core systems, and modern cloud APIs across complex enterprise environments.",
    impact:
      "Eliminates clinical data silos and provides unified, real-time operational visibility across care networks.",
  },
  {
    icon: Bot,
    track: "AI Workflow & Administrative Automation",
    scope:
      "Architecting custom enterprise AI agent frameworks, automated processing layers, and intelligent workflow orchestration.",
    impact:
      "Reduces administrative overhead on healthcare staff, accelerates operational throughput, and improves resource utilization.",
  },
  {
    icon: Layers,
    track: "Enterprise Platform Implementations",
    scope:
      "Deploying and optimizing Salesforce Health Cloud, ERP platforms, and Certinia enterprise environments for health organizations.",
    impact:
      "Connects front-office patient engagement with back-office financial, HR, and operational management.",
  },
  {
    icon: DatabaseZap,
    track: "Data Integrity & Governance Frameworks",
    scope:
      "Implementing continuous risk monitoring, automated data validation, and disaster recovery protocols for mission-critical databases.",
    impact:
      "Eliminates data loss risks and secures sensitive Protected Health Information (PHI) across digital touchpoints.",
  },
];

const metrics = [
  {
    kpi: "42 TB",
    t: "Enterprise Data Migration",
    l: "Mission-critical health data assets successfully migrated and validated within a compressed 90 day execution window.",
  },
  {
    kpi: "100%",
    t: "Record Accuracy",
    l: "Multi-cloud database cutovers executed across core health environments with verified data fidelity and zero operational loss.",
  },
  {
    kpi: "90 Days",
    t: "Execution Timeline",
    l: "Complete enterprise content and infrastructure cutover finalized with zero operational downtime.",
  },
];

const caseStudies = [
  {
    t: "Global Health Technology Digital Transformation Brief",
    d: "Read how Stralynn's leadership spearheaded the digital modernization of a global health leader, harnessing cloud, AI, and machine learning to advance care outcomes at sustainable cost.",
  },
  {
    t: "42 TB Health Infrastructure Migration Brief",
    d: "Discover the exact technical validation methodologies and timeline parameters used to migrate 42 TB of core data assets in 90 days.",
  },
  {
    t: "EHR Interoperability & Data Integrity Case Study",
    d: "Examine how our technical teams executed a multi-system database cutover with zero downtime and absolute data accuracy.",
  },
];

const pathways = [
  {
    icon: CalendarClock,
    t: "Healthcare Enterprise Consultation",
    d: "Schedule a 30-minute strategic consultation with our healthcare practice lead to evaluate active cloud migrations, EHR platform integrations, or enterprise rollouts.",
    cta: "Schedule consultation",
  },
  {
    icon: FileSearch,
    t: "Health Tech Security & AI Evaluation",
    d: "Request a comprehensive technical evaluation to assess HIPAA data pipeline compliance, clinical AI workflow automation, or cloud infrastructure resilience.",
    cta: "Request evaluation",
  },
];

function Healthcare() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Healthcare"
        title={
          <>
            Zero downtime healthcare infrastructure and{" "}
            <span className="font-editorial italic">HIPAA compliant AI automation</span>
          </>
        }
        description="Stralynn engineers resilient healthcare IT architectures, secure data integrations, and enterprise AI workflow automation to protect patient data integrity and scale clinical operations without service disruption."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=80"
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
            Healthcare architecture compatibility
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
                Healthcare IT modernization and{" "}
                <span className="font-editorial italic">clinical data infrastructure</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stralynn Consulting Services delivers specialized IT consulting for healthcare provider
              networks, health technology platforms, and enterprise health organizations, executing
              resilient cloud migrations, EHR/EMR system integrations, HIPAA compliant data pipeline
              development, and agentic AI workflow automation. By modernizing legacy health
              architectures while maintaining 100% record accuracy and uninterrupted care delivery,
              Stralynn accelerates digital transformation, reduces operational overhead, and supports
              the quadruple aim of improved patient care, enhanced provider experience, and
              sustainable care delivery at scale.
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
                alt="Clinical team reviewing patient data on connected health systems"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">In focus</div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  Modernize the architecture without interrupting care delivery
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
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Our capabilities</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Specialized healthcare technical capabilities and{" "}
              <span className="font-editorial italic">service tracks</span>
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
                      Clinical & operational impact
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
              Documented scale metrics and proven healthcare system performance
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
              Featured healthcare case studies
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
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Our leadership</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Methodological governance and{" "}
                <span className="font-editorial italic">global healthcare leadership</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Stralynn's healthcare technology practice operates under the strategic leadership of
                Founder, CEO, and Board Chairwoman Alpna J. Doshi, NACD.DC, former Fortune 500 Group
                CIO at Royal Philips. Having led the digital transformation of a 127-year-old global
                health technology organization and keynoted Google Cloud Next alongside Google CEO
                Sundar Pichai and Google Cloud CEO Thomas Kurian, Alpna brings proven enterprise
                governance, clinical risk mitigation, and large scale execution experience to every
                healthcare engagement.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Former - Group CIO Royal Philips, Thoma Bravo Operating Partner",
                  "NACD.DC certified director",
                  "Keynote speaker, Google Cloud Next",
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
                "In healthcare technology transformation, architectural resilience and data integrity
                directly impact patient outcomes and institutional trust. We engineer secure,
                compliant technical foundations that allow health enterprise leaders to innovate at
                speed without compromising care continuity."
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">
                  Alpna J. Doshi, NACD.DC
                </span>
                Founder CEO &amp; Board Chairwoman (Former Group CIO, Royal Philips)
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
              Initiate a healthcare strategic consultation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Stralynn provides direct engagement pathways tailored to healthcare enterprise
              transformation deadlines, cloud migration schedules, and system integration timelines.
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
