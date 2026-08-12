import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Cloud, Database, Briefcase } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/services/enterprise-implementations")({
  head: () => ({
    meta: [
      { title: "Enterprise Platform Implementation Services — Stralynn" },
      { name: "description", content: "Stralynn implements and optimizes Salesforce, ERP (including NetSuite), and Certinia platforms — from current-state assessment through data migration, cutover, and post-go-live optimization." },
      { property: "og:title", content: "Enterprise Platform Implementation Services — Stralynn" },
      { property: "og:description", content: "Salesforce, ERP and Certinia implementations for enterprises and government agencies." },
    ],
  }),
  component: Page,
});

type TabId = "salesforce" | "erp" | "certinia";

const tabs: {
  id: TabId;
  label: string;
  short: string;
  icon: typeof Cloud;
  teaser: string;
}[] = [
  {
    id: "salesforce",
    label: "Salesforce Transformation",
    short: "Salesforce",
    icon: Cloud,
    teaser: "Custom Salesforce design, implementation, and training, including identity and Zero Trust security for federal workforces.",
  },
  {
    id: "erp",
    label: "ERP Transformation",
    short: "ERP",
    icon: Database,
    teaser: "NetSuite and enterprise ERP implementation, optimization, and integration across financials, inventory, CRM, and e-commerce.",
  },
  {
    id: "certinia",
    label: "Certinia Transformation",
    short: "Certinia",
    icon: Briefcase,
    teaser: "Certinia (formerly FinancialForce) deployment for professional services automation on the Salesforce platform.",
  },
];

const tabContent: Record<TabId, {
  intro: string;
  stages: { n: string; t: string; d: string }[];
  why: { t: string; d: string }[];
  cta: string;
}> = {
  salesforce: {
    intro: "Stralynn designs, implements, and trains teams on customized Salesforce solutions that integrate with the client's existing systems, covering Sales Cloud, Service Cloud, and government-grade identity and security configurations.",
    stages: [
      { n: "01", t: "Org Assessment", d: "Review of existing Salesforce org (or legacy CRM), business goals, and process gaps; documented findings before design." },
      { n: "02", t: "Solution Design", d: "Object model, automation, and security architecture designed around the client's actual sales and service processes." },
      { n: "03", t: "Build & Integrate", d: "Configuration of clouds and flows; integration with ERP, marketing, and data platforms; legacy CRM data migration with validation checkpoints." },
      { n: "04", t: "Secure (Public Sector)", d: "Salesforce Identity and Zero Trust security configuration for federal workforce deployments." },
      { n: "05", t: "Train & Optimize", d: "Role-based user training, adoption tracking, and post-go-live refinement of automation and dashboards." },
    ],
    why: [
      { t: "Fit over template", d: "Solutions are designed from the client's business goals and existing systems, then built — the approach documented across Stralynn's Salesforce practice." },
      { t: "Federal security depth", d: "Published expertise on Salesforce Identity and Zero Trust principles for the federal workforce, plus intelligent document processing (IDP) built on Salesforce for citizen services." },
      { t: "Cross-platform bench", d: "The same team handles ERP and Certinia integration points, so Salesforce doesn't get built in isolation." },
    ],
    cta: "Book a Salesforce Scoping Call",
  },
  erp: {
    intro: "Stralynn implements, optimizes, and integrates ERP systems — with a certified NetSuite practice covering financials, inventory management, CRM, and e-commerce — to consolidate operations into a single system of record.",
    stages: [
      { n: "01", t: "Process & Data Discovery", d: "Mapping of financial, inventory, and order processes; inventory of data sources, volumes, and quality issues." },
      { n: "02", t: "Solution Design", d: "Chart of accounts, entity structure, workflows, and reporting design matched to the client's operating model." },
      { n: "03", t: "Data Migration", d: "Staged migration with validation checkpoints at every stage — the discipline behind Stralynn's documented 42 TB/90 day migration and 800 GB cloud cutover with sub-10% error rates." },
      { n: "04", t: "Integration & Cutover", d: "Connections to CRM, e-commerce, and banking systems; rehearsed cutover plan with rollback criteria." },
      { n: "05", t: "Optimize", d: "Post-go-live monitoring, close-cycle tuning, and report refinement against baseline metrics." },
    ],
    why: [
      { t: "Certified practice", d: "Certified NetSuite professionals with experience across all core modules, supported by a global consultant network." },
      { t: "Documented migration scale", d: "The section's benchmarks are published delivery records, not projections — data integrity is validated before cutover, never assumed." },
      { t: "M&A-ready", d: "The same ERP team executes post-acquisition consolidations, so PE-backed timelines are familiar territory." },
    ],
    cta: "Book an ERP Scoping Call",
  },
  certinia: {
    intro: "Stralynn deploys Certinia (formerly FinancialForce) — professional services automation and services-business financial management built natively on the Salesforce platform — connecting project delivery, resourcing, billing, and revenue in one system.",
    stages: [
      { n: "01", t: "Services Process Discovery", d: "Mapping of the quote-to-project-to-cash flow: opportunity handoff, project setup, resourcing, time capture, billing, and revenue recognition." },
      { n: "02", t: "PSA Configuration", d: "Projects, resource planning, utilization targets, and rate cards configured to the firm's delivery model." },
      { n: "03", t: "Salesforce Alignment", d: "Native integration with the client's Salesforce org so opportunities convert to projects without re-keying." },
      { n: "04", t: "Billing & Revenue Setup", d: "Billing events, invoicing rules, and revenue recognition schedules configured and tested against real contracts." },
      { n: "05", t: "Adopt & Optimize", d: "PM and finance training, utilization and margin dashboards, and post-go-live refinement." },
    ],
    why: [
      { t: "One team, one platform", d: "Certinia runs on Salesforce — Stralynn's combined Salesforce and Certinia practice means the CRM and PSA sides are designed together, not stitched later." },
      { t: "Services-business focus", d: "Configuration decisions are made by consultants who run services delivery themselves — utilization, margin, and backlog are working metrics, not abstractions." },
      { t: "Published practice", d: "Stralynn maintains active Certinia consulting content and insights on its site, an indexable proof signal for this niche." },
    ],
    cta: "Book a Certinia Scoping Call",
  },
};

const faqs = [
  {
    q: "Does Stralynn replace or integrate with existing systems?",
    a: "Stralynn designs implementations to integrate with existing systems and processes; platform replacement happens only where the assessment shows it is the lower-risk path.",
  },
  {
    q: "How long does an enterprise implementation take?",
    a: "Timelines depend on scope, but defined-scope deployments can be structured as 90 day Digital Capsules, and documented cutovers have completed within 90 day windows.",
  },
  {
    q: "Does Stralynn provide training?",
    a: "Yes. Implementation and training are delivered together — Stralynn also operates comprehensive training programs to build client self-sufficiency after go-live.",
  },
];

function Page() {
  const [active, setActive] = useState<TabId>("salesforce");
  const activeTab = tabs.find((t) => t.id === active)!;
  const content = tabContent[active];

  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>Enterprise Platform <span className="font-editorial italic">Implementation Services</span></>}
        description="Stralynn Consulting Services implements and optimizes Salesforce, ERP (including NetSuite), and Certinia platforms for enterprises and government agencies from current state assessment through data migration, cutover, and post go live optimization."
        video="https://videos.pexels.com/video-files/7773543/7773543-hd_1920_1080_30fps.mp4"
        poster="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Scope an implementation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* Definition */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Definition</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What are enterprise <span className="font-editorial italic">implementations?</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enterprise implementations are structured deployments of business-critical platforms (CRM, ERP, and professional services automation), covering solution design, configuration, data migration, integration, training, and cutover. Stralynn designs each implementation around the client's existing systems and business goals rather than a generic template, then validates data integrity at every migration checkpoint before cutover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Platform Portfolio</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Which platforms does Stralynn <span className="font-editorial italic">implement?</span>
              </h2>
            </Reveal>
          </div>

          {/* Tab cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "text-left p-7 rounded-2xl border transition-all hover-lift",
                    isActive
                      ? "bg-navy-deep text-cream border-navy-deep shadow-lg"
                      : "bg-background border-border hover:border-azure/40",
                  )}
                >
                  <div className={cn(
                    "h-12 w-12 rounded-xl grid place-items-center mb-6",
                    isActive ? "bg-cream/10" : "gradient-hero",
                  )}>
                    <t.icon className={cn("h-5 w-5", isActive ? "text-cream" : "text-cream")} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t.label}</h3>
                  <p className={cn("text-sm leading-relaxed", isActive ? "text-cream/80" : "text-muted-foreground")}>
                    {t.teaser}
                  </p>
                  <div className={cn("mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider", isActive ? "text-cyan-glow" : "text-azure")}>
                    {isActive ? "Viewing" : "View details"} <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Credibility strip */}
          <div className="rounded-2xl border border-border bg-background px-6 py-5 text-sm text-muted-foreground leading-relaxed mb-12">
            Certified platform teams across the US, Canada, and India · GSA Multiple Award Schedule contract holder (November 2025) · Public sector implementations aligned to FISMA requirements and NIST 800-53 controls.
          </div>

          {/* Active tab content */}
          <div className="rounded-3xl bg-background border border-border p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">{activeTab.short}</div>
            <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6 max-w-3xl">
              What is Stralynn's {activeTab.short} <span className="font-editorial italic">transformation service?</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
              {content.intro}
            </p>

            <div className="mb-14">
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-6">How the implementation runs</div>
              <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {content.stages.map((s) => (
                  <StaggerItem key={s.n}>
                    <div className="p-6 rounded-2xl bg-secondary/60 border border-border h-full">
                      <div className="font-display text-2xl text-azure mb-3">{s.n}</div>
                      <div className="font-semibold mb-2">{s.t}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div className="mb-10">
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-6">Why Stralynn for {activeTab.short}</div>
              <div className="grid md:grid-cols-3 gap-5">
                {content.why.map((w) => (
                  <div key={w.t} className="p-6 rounded-2xl border border-border bg-secondary/40">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1.5">{w.t}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-navy-deep text-cream px-6 py-3.5 text-sm font-semibold hover:bg-navy-deep/90 transition-all">
              {content.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Common FAQ</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Questions before <span className="font-editorial italic">kickoff</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="font-semibold text-lg mb-2">{f.q}</div>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
