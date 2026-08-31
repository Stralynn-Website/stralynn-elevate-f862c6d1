import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, Headset, Megaphone, BarChart3, Code2, RefreshCw, Bot, GraduationCap, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/salesforce-transformation")({
  head: () => ({
    meta: [
      { title: "Salesforce Transformation & Agentforce AI Services | Stralynn" },
      { name: "description", content: "Accelerate enterprise growth with Stralynn's Salesforce transformation services. Expertise in Sales Cloud, CPQ, Order-to-Cash, and AI Agentforce solutions." },
      { property: "og:title", content: "Salesforce Transformation & Agentforce AI Services | Stralynn" },
      { property: "og:description", content: "Stralynn helps enterprise organizations unlock Salesforce's full potential to drive revenue, enhance customer loyalty, and scale with confidence." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: TrendingUp, title: "Sales Automation", desc: "Streamlined sales pipelines, automated forecasting, and reduction of repetitive administrative tasks." },
  { icon: Headset, title: "Customer Service & Support", desc: "Advanced case management, knowledge base creation, and live chat setup for rapid issue resolution." },
  { icon: Megaphone, title: "Marketing Automation", desc: "Targeted multi-channel campaign execution across email, social, and web with personalized customer journeys." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time executive dashboards that turn raw customer data into actionable business insights." },
  { icon: Code2, title: "Custom App Development", desc: "Tailored low-code app creation and robust API integration with core enterprise systems." },
  { icon: RefreshCw, title: "Order-to-Cash (O2C) Transformation", desc: "End-to-end integration across Quote-to-Order, Billing, Revenue, and Collections." },
  { icon: Bot, title: "AI-Powered Agentforce Solutions", desc: "Inbound lead qualification and AI sales coaching tools to practice pitches, handle objections, and support negotiations." },
  { icon: GraduationCap, title: "Training & User Adoption", desc: "Specialized enablement programs designed to equip internal teams with full platform competence." },
];

const strategicValue = [
  { t: "From Tool to Strategy", d: "Architectural design directly aligned with overarching revenue and operational goals.", impact: "Converts Salesforce from a system of record into an active growth engine." },
  { t: "Built for Transformation", d: "Implementation methodology prioritizing seamless integration and rapid adoption.", impact: "Accelerates time-to-value and eliminates internal operational friction." },
  { t: "Beyond Go-Live", d: "Continuous post-implementation support, optimization, and platform innovation updates.", impact: "Keeps your enterprise ahead of technical shifts, including embedded AI." },
];

const outcomes = [
  { stat: "20%", label: "Faster Quote Generation", desc: "Streamlined CPQ workflows closed internal knowledge gaps and accelerated sales velocity." },
  { stat: "30%", label: "Bandwidth Reclaimed", desc: "Optimized processes freed up internal team members to focus on strategic initiatives." },
  { stat: "20%", label: "Higher Lead Conversion", desc: "Faster system processing speeds improved funnel performance and drove immediate revenue growth." },
];

const verticals = ["Healthcare", "Cybersecurity", "Financial Services", "Federal Government & Public Sector", "Private Equity", "Technology Firms"];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise Implementations"
        title={<>Salesforce Transformation <span className="font-editorial italic">Services</span></>}
        description="Building the Engine for Your Digital Enterprise and Powering Future-Ready Growth."
        video="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="https://calendar.app.google/8MA2wV1iHwWdNoHB9" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <Reveal>
              <div className="eyebrow mb-3">Overview</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Total business <span className="font-editorial italic">transformation</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Successful Salesforce implementations are about total business transformation. Stralynn helps enterprise organizations unlock the platform's full potential to drive revenue, enhance customer loyalty, and scale with confidence. We deliver hyper-personalized customer experiences and proactive, data-driven business solutions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="eyebrow mb-3">Capabilities</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Core Salesforce <span className="font-editorial italic">expertise</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full p-6 rounded-2xl border border-border bg-background hover-lift">
                  <div className="h-11 w-11 rounded-xl gradient-hero grid place-items-center mb-4">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Strategic Value</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Why choose Stralynn for <span className="font-editorial italic">Salesforce?</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {strategicValue.map((s) => (
              <StaggerItem key={s.t}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card">
                  <div className="font-display text-xl font-semibold mb-3">{s.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.d}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs uppercase tracking-widest text-azure mb-1.5">Long-term impact</div>
                    <p className="text-sm font-medium leading-relaxed">{s.impact}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Proven Impact</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Measurable <span className="font-editorial italic">outcomes</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {outcomes.map((o) => (
              <StaggerItem key={o.label}>
                <div className="h-full p-8 rounded-2xl bg-navy-deep text-cream">
                  <div className="font-display text-5xl font-semibold text-cyan-glow mb-3">{o.stat}</div>
                  <div className="font-semibold mb-2">{o.label}</div>
                  <p className="text-sm text-cream/70 leading-relaxed">{o.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Industry Verticals</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-10">
              Target industry <span className="font-editorial italic">verticals</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Stralynn tailors specialized Salesforce architectures across key sectors:
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {verticals.map((v) => (
              <div key={v} className="flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-azure" /> {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-cream">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-semibold">Scope your Salesforce transformation</h3>
              <p className="mt-4 text-cream/80 leading-relaxed">Talk to Stralynn's Salesforce practice about your sales, service, and Agentforce roadmap.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="https://calendar.app.google/8MA2wV1iHwWdNoHB9" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
                Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 text-cream px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-cream/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
