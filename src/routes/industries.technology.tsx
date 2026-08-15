import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Cloud,
  Bot,
  Layers,
  Code2,
  GitBranch,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import { usePageContent } from "../hooks/use-page-content";

export const Route = createFileRoute("/industries/technology")({
  head: () => ({
    meta: [
      { title: "Technology Cloud Architecture & AI Platform Optimization — Stralynn" },
      {
        name: "description",
        content:
          "Stralynn engineers scalable multi-cloud architectures, enterprise AI workflows and unified Salesforce, ERP and Certinia implementations for technology enterprises.",
      },
      {
        property: "og:title",
        content: "Technology Cloud Architecture & AI Platform Optimization — Stralynn",
      },
      {
        property: "og:description",
        content:
          "Zero-downtime cloud migrations, legacy refactoring and agentic AI integration that accelerate speed-to-market for SaaS and enterprise technology firms.",
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
    icon: Cloud,
    track: "Scalable Cloud Architecture & Migration",
    scope:
      "Designing zero-downtime multi-cloud environments, modernizing cloud infrastructure, and executing complex database cutovers.",
    impact:
      "Guarantees continuous platform availability, optimizes cloud expenditure, and supports rapid user growth.",
  },
  {
    icon: Bot,
    track: "Enterprise AI Agent & Workflow Integration",
    scope:
      "Deploying custom enterprise AI agent frameworks, intelligent automation layers, and language model integrations.",
    impact:
      "Reclaims operational bandwidth, automates manual processes, and accelerates decision-making velocity.",
  },
  {
    icon: Layers,
    track: "Salesforce, ERP & Certinia Implementation",
    scope:
      "Unifying Salesforce environments, core ERP systems, and Certinia financial operations across enterprise applications.",
    impact:
      "Establishes single-pane-of-glass operational visibility and eliminates cross-platform data friction.",
  },
  {
    icon: Code2,
    track: "Legacy Code Refactoring & Technical Debt Reduction",
    scope:
      "Modernizing legacy architectures, decoupling monolithic codebases, and building modern RESTful/GraphQL API networks.",
    impact:
      "Accelerates product development velocity, improves code maintainability, and mitigates architectural risk.",
  },
  {
    icon: GitBranch,
    track: "Data Pipeline & Multi-Cloud Interoperability",
    scope:
      "Constructing high-throughput data pipelines, real-time analytics integrations, and automated schema governance frameworks.",
    impact:
      "Ensures absolute data integrity, prevents data loss, and enables unified real-time executive reporting.",
  },
];

const metrics = [
  {
    kpi: "42 TB",
    t: "Enterprise Data Migration",
    l: "Core infrastructure assets and complex databases successfully migrated and validated within 90 days.",
  },
  {
    kpi: "800 GB",
    t: "Cloud Database Cutover",
    l: "Multi-cloud database transition executed with verified 100% record accuracy and zero business disruption.",
  },
  {
    kpi: "90 Days",
    t: "Post-Close Execution",
    l: "Complete enterprise platform cutover and system consolidation finalized with zero operational data loss.",
  },
];

const caseStudiesDefault = [
  {
    title: "42 TB Infrastructure Migration Brief",
    description: "Discover the technical validation methodologies and scale metrics used to execute a 42 TB multi-cloud infrastructure migration in 90 days.",
  },
  {
    title: "Enterprise Platform Consolidation Brief",
    description: "Read how Stralynn unified fragmented Salesforce, ERP, and Certinia architectures into a single operational system.",
  },
  {
    title: "AI Workflow & Autonomous Agent Case Study",
    description: "Examine how our engineering teams deployed enterprise AI agent layers to automate business processes and drive high-margin efficiency.",
  },
];

const pathways = [
  {
    icon: CalendarClock,
    t: "Technology Enterprise Consultation",
    d: "Schedule a 30-minute strategic consultation with our technology practice lead to review active cloud migrations, platform consolidations, or Salesforce rollouts.",
    cta: "Schedule consultation",
  },
  {
    icon: Cloud,
    t: "Technical Architecture & AI Evaluation",
    d: "Request a comprehensive technical evaluation to assess cloud infrastructure scalability, legacy refactoring requirements, or enterprise AI workflow integration.",
    cta: "Request evaluation",
  },
];

function Page() {
  const { items: caseStudies } = usePageContent("technology", caseStudiesDefault);
  return (
    <>
      <PageHeader
        eyebrow="Industries — Technology"
        title={
          <>
            Scalable cloud architecture and{" "}
            <span className="font-editorial italic">
              AI driven enterprise platform optimization
            </span>
          </>
        }
        description="Stralynn engineers high velocity cloud infrastructures, custom enterprise AI workflows, and unified Salesforce and ERP implementations to eliminate architecture bottlenecks and increase enterprise speed to market."
        video="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4"
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
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
          <div className="eyebrow-light mb-4">
            Technology platform compatibility
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
              <div className="eyebrow mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Technology sector IT modernization and{" "}
                <span className="font-editorial italic">cloud architecture</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stralynn Consulting Services delivers specialized IT consulting for technology
              companies, software-as-a-service providers, and enterprise technology firms, executing
              scalable cloud environment architectures, legacy code refactoring, enterprise platform
              consolidations, and agentic AI workflow integration. By building resilient cloud
              foundations and unifying front-to-back office systems across Salesforce, ERP platforms,
              and Certinia architectures, Stralynn reclaims engineering bandwidth, reduces technical
              debt, and accelerates speed-to-market for growth-oriented technology enterprises.
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
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80"
                alt="Engineering team reviewing cloud architecture on screens"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="eyebrow-light mb-3">
                  In focus
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  Ship faster without trading away architectural resilience
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
            <div className="eyebrow mb-3">
              Our capabilities
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Specialized technology capabilities and{" "}
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
                    <div className="eyebrow mb-2">
                      Operational &amp; strategic impact
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
            <div className="eyebrow-light mb-3">
              Industry insights
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              Documented scale metrics and proven technology performance
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
              Featured technology case studies
            </h3>
          </Reveal>
          <Stagger className="mt-8 grid md:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <StaggerItem key={c._id || c.title}>
                <Link
                  to="/insights"
                  className="group block h-full p-7 rounded-2xl border border-cream/15 bg-cream/[0.04] hover:bg-cream/[0.08] transition-colors"
                >
                  <h4 className="font-display text-lg font-semibold leading-snug">{c.title}</h4>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.description}</p>
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
              <div className="eyebrow mb-3">
                Our leadership
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Methodological governance and{" "}
                <span className="font-editorial italic">technology industry leadership</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Stralynn's technology sector practice operates under the strategic leadership of
                Founder, CEO, and Board Chairwoman Alpna J. Doshi, NACD.DC. A former Fortune 500
                Group CIO at Royal Philips and Reliance Group, an alumna Operating Partner at Thoma
                Bravo, and a featured speaker at Google Cloud Next alongside Google CEO Sundar Pichai
                and Google Cloud CEO Thomas Kurian, Alpna brings proven technical governance, cloud
                scale expertise, and executive oversight to technology engagements.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Former - Group CIO Royal Philips, Thoma Bravo Operating Partner",
                  "Google Cloud Next featured speaker",
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
                "In technology transformation, speed-to-market cannot come at the expense of
                architectural resilience. We engineer scalable, secure technical foundations that
                allow technology leaders to innovate rapidly while eliminating operational friction."
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">Alpna J. Doshi, NACD.DC</span>
                Founder CEO &amp; Board Chairwoman
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
              Initiate a technology sector strategic consultation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Stralynn provides direct engagement pathways tailored to technology modernization
              timelines, cloud architecture reviews, and platform deployment schedules.
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
