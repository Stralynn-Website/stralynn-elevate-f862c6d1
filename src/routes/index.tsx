import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight, ArrowDown, Sparkles, Workflow, Brain, Handshake,
  Stethoscope, Banknote, Cpu, Building2, ShieldCheck, Landmark,
  Database, Server, CalendarCheck, FileText, GaugeCircle, ClipboardCheck,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stralynn — Enterprise AI Transformation" },
      { name: "description", content: "Stralynn delivers specialized IT consulting — ERP modernizations, Salesforce implementations, and data migrations for private equity-backed enterprises and public sector agencies." },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Brain,
    title: "AI Transformation",
    desc: "Architecting enterprise AI agent frameworks, custom LLM integrations, and intelligent process automation layers.",
    outcome: "Reclaims executive and operational bandwidth, accelerates decision speed, and drives high-margin operational efficiency.",
    to: "/services/ai-digital-transformation",
  },
  {
    icon: Handshake,
    title: "M&A Technical Integration",
    desc: "Conducting technical due diligence, carve-out data separations, and post-acquisition tech stack consolidations.",
    outcome: "Protects deal timelines, eliminates post-close transition risk, and captures portfolio synergies within 60–90 day windows.",
    to: "/services/ma-advisory",
  },
  {
    icon: Workflow,
    title: "BPO Transformation",
    desc: "Re-engineering legacy outsourcing stacks through autonomous workflow automation and straight-through processing.",
    outcome: "Shrinks operational overhead, reduces manual error rates, and elevates delivery speed across enterprise workflows.",
    to: "/services/bpo-transformation",
  },
  {
    icon: Building2,
    title: "Enterprise Implementations",
    desc: "Executing complex architectures across Salesforce, ERP platforms, and Certinia enterprise environments.",
    outcome: "Guarantees zero-downtime platform cutovers, complete data integrity, and unified real-time visibility across global operations.",
    to: "/services/enterprise-implementations",
  },
];

const industries = [
  {
    icon: Banknote,
    name: "Private Equity",
    to: "/industries/private-equity",
    desc: "Accelerating 100-day execution plans, complex carve-out data separations, and system consolidations to drive measurable EBITDA growth and portfolio visibility.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    to: "/industries/healthcare",
    desc: "Engineering resilient, zero-downtime cloud infrastructure that guarantees absolute data integrity and secure compliance for scaling healthcare organizations.",
  },
  {
    icon: ShieldCheck,
    name: "Financial Services",
    to: "/industries/financial-services",
    desc: "Modernizing legacy platform stacks through automated workflows and secure database transitions to reduce operational overhead.",
  },
  {
    icon: Cpu,
    name: "Technology",
    to: "/industries/technology",
    desc: "Building scalable cloud architectures, AI agent layers, and unified Salesforce and ERP implementations to increase enterprise speed-to-market.",
  },
  {
    icon: Landmark,
    name: "Public Sector",
    to: "/industries/public-sector",
    desc: "Delivering Next-Gen Portal Development and legacy mainframe migrations fully compliant with NIST 800-53, FISMA standards, and ADA accessibility requirements.",
  },
];

const stats = [
  { kpi: "42TB", label: "Core data assets successfully migrated and validated within a compressed 90-day window" },
  { kpi: "800GB", label: "Multi-cloud database transition executed with total schema integrity and zero business disruption" },
  { kpi: "90 Days", label: "Complete enterprise content platform cutover finalized post-close with zero operational data loss" },
];

const leadershipSignals = [
  "Former Fortune 500 CIO (Royal Philips & Reliance)",
  "Thoma Bravo Operating Partner Alumna",
  "NACD.DC Certified Director",
  "Former Board Director (Mimecast)",
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden gradient-hero text-cream">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="https://videos.pexels.com/video-files/3252919/3252919-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/60 to-navy-deep" />
        <div aria-hidden className="absolute inset-0 [background:radial-gradient(900px_500px_at_70%_20%,oklch(0.72_0.14_220/.35),transparent_60%)]" />

        <motion.div style={{ y, opacity }} className="relative container-x pt-40 md:pt-48 pb-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/85">
              <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
              Specialized IT consulting for the AI era
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.98] tracking-tight max-w-5xl">
              Enterprise <span className="font-editorial italic gradient-accent-text">AI Transformation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/75 leading-relaxed">
              Stralynn executes specialized IT consulting services, driving complex Enterprise modernizations, Salesforce implementations, and data migrations for Private Equity backed enterprises and public sector agencies.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
                Schedule a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors">
                Contact us
              </Link>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE / TRUST */}
      <section className="border-y border-border bg-background py-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
            Trusted across Private Equity, Healthcare, Financial Services & the Public Sector
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-foreground/40 font-display text-xl md:text-2xl font-semibold">
            {["Salesforce", "Certinia", "NetSuite", "SAP", "Oracle", "Google Cloud", "AWS", "Azure"].map((b) => (
              <span key={b} className="hover:text-foreground transition-colors">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-end mb-16">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Documented scale metrics <span className="font-editorial italic text-azure">& operational outcomes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stralynn tracks precise operational milestones across data integrity, migration velocity, and post-acquisition system integration — to eliminate delivery risk.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-navy-deep">{s.kpi}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">About Stralynn</div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15]">
                  Stralynn Consulting Services is an enterprise technology consultancy that delivers <span className="font-editorial italic text-azure">AI transformation, M&A technical due diligence, and ERP and Salesforce implementations</span> for private equity, healthcare, financial services, and public sector organizations.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  We move fast, protect data integrity, and deliver at scale — without the risk of a slow, generic transformation partner.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep text-cream">
        <div aria-hidden className="absolute inset-0 [background:radial-gradient(800px_450px_at_20%_20%,oklch(0.72_0.14_220/.22),transparent_60%)]" />
        <div className="relative container-x grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/85 mb-5">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-glow" /> Leadership
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Executive leadership & <span className="font-editorial italic gradient-accent-text">methodological governance.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {leadershipSignals.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-cream/75">
                    <ClipboardCheck className="h-4 w-4 mt-0.5 shrink-0 text-cyan-glow" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <p className="text-lg text-cream/80 leading-relaxed">
                Stralynn operates under the strategic leadership of <strong className="text-cream font-semibold">Alpna J. Doshi, NACD.DC</strong>, Founder, CEO, and Board Chairwoman. A former Fortune 500 Group CIO at Royal Philips and Reliance Group, an alumna Operating Partner at Thoma Bravo, and a former board director at Mimecast, Alpna brings proven enterprise scale, board-level governance, and transaction execution experience to every Stralynn engagement.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-cream/70 leading-relaxed">
                As an NACD-certified director and globally recognized thought leader on agentic AI, data strategy, and enterprise risk management, Alpna has spearheaded some of the IT industry's most complex digital transformations. Having shared main keynote stages at Google Cloud Next alongside Google CEO Sundar Pichai and Google Cloud CEO Thomas Kurian, her execution frameworks bridge the gap between complex core architectures and high-velocity AI automation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur p-8 md:p-10">
                <p className="font-editorial italic text-2xl md:text-3xl leading-snug text-cream">
                  “In high-stakes enterprise transformation, speed without governance creates unacceptable risk. We engineer resilient technical architectures that allow boardrooms, private equity partners, and government leadership to execute complex modernizations with total confidence.”
                </p>
                <footer className="mt-6 text-sm text-cyan-glow">
                  Alpna J. Doshi, NACD.DC — Founder, CEO & Board Chairwoman
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
                  Enterprise technical consulting services & <span className="font-editorial italic text-azure">value delivery.</span>
                </h2>
                <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
                  Stralynn delivers specialized IT consulting services engineered to modernize core enterprise systems, eliminate integration risk, and deploy high-margin AI automation workflows.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services/ai-digital-transformation" className="text-sm font-semibold inline-flex items-center gap-2 text-navy hover:text-azure transition-colors">
                All services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title} className="h-full">
                <Link
                  to={s.to}
                  className="flex flex-col h-full p-7 rounded-2xl bg-card border border-border hover-lift group"
                >
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <s.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-azure mb-2">Business outcome</div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{s.outcome}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-azure transition-colors">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Industries</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Vertical IT consulting capabilities & <span className="font-editorial italic">sector boundaries</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Stralynn aligns enterprise technology implementations with industry-specific regulatory standards and operational business models across five distinct sectors.
              </p>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-5">
            {industries.map((i) => (
              <StaggerItem key={i.name} className="h-full">
                <Link to={i.to} className="group flex flex-col h-full p-8 rounded-2xl bg-card border border-border hover-lift">
                  <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center mb-5 group-hover:gradient-hero transition-all">
                    <i.icon className="h-5 w-5 text-navy group-hover:text-cream transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{i.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-azure transition-colors">
                    Explore sector <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INSIGHTS */}
      <InsightsSection />

      {/* CTA — Pathways */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Get started</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Initiate a strategic engagement <span className="font-editorial italic">or consultation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Stralynn provides direct engagement pathways tailored to your active deal timelines, enterprise rollouts, or public agency procurement requirements.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-12 text-cream h-full">
                <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-cyan-glow mb-5">
                    <CalendarCheck className="h-3.5 w-3.5" /> Commercial & Private Equity
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                    Book a 30-minute scoping call.
                  </h3>
                  <p className="mt-4 text-cream/75 max-w-md">
                    Evaluate active M&A timelines, Salesforce rollouts, or ERP cutover schedules with a senior partner.
                  </p>
                  <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold">
                    Schedule scoping call
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-12 h-full">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-azure mb-5">
                  <ClipboardCheck className="h-3.5 w-3.5" /> Public Sector Procurement
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                  Formal agency intake & RFI/RFP response.
                </h3>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Download our Capability Statement, request a security architecture brief, or submit an official agency RFI/RFP.
                </p>
                <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full border border-navy/20 text-navy px-6 py-3.5 text-sm font-semibold hover:bg-navy hover:text-cream transition-colors">
                  Contact public sector team
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

const insights = [
  {
    icon: FileText,
    tag: "Case Study",
    title: "UVP Portal Modernization",
    desc: "Operational record tracking 100% record fidelity and zero reportable data incidents during a complete government portal overhaul.",
  },
  {
    icon: Database,
    tag: "Technical Brief",
    title: "42TB Infrastructure Migration",
    desc: "Technical timeline data, scale metrics, and validation methodologies used to move core enterprise assets in 90 days.",
  },
  {
    icon: GaugeCircle,
    tag: "Diligence Insight",
    title: "Technical Due Diligence",
    desc: "Risk evaluation parameters used to identify post-close transition risks and secure operational continuity for PE-backed acquisitions.",
  },
  {
    icon: Server,
    tag: "Cutover Playbook",
    title: "800GB Cloud Database Cutover",
    desc: "Structural cloud deployment completed with documented sub-10% error rates and validated rollback checkpoints.",
  },
];

function InsightsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep text-cream">
      <div aria-hidden className="absolute inset-0 [background:radial-gradient(700px_400px_at_85%_15%,oklch(0.72_0.14_220/.25),transparent_60%)]" />
      <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,transparent_0_38px,oklch(0.95_0_0)_38px_39px),repeating-linear-gradient(90deg,transparent_0_60px,oklch(0.95_0_0)_60px_61px)]" />

      <div className="relative container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-end mb-14">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/85 mb-5">
                <FileText className="h-3.5 w-3.5 text-cyan-glow" />
                Insights
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Verified case studies & <span className="font-editorial italic gradient-accent-text">evidence-rich technical material.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-cream/75 leading-relaxed">
              Documented case studies, structured technical briefs, and source material demonstrating past engineering performance across regulated and high-stakes environments.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 gap-5">
          {insights.map((item) => (
            <StaggerItem key={item.title}>
              <Link to="/insights" className="group block h-full p-7 md:p-8 rounded-2xl border border-cream/10 bg-cream/[0.03] backdrop-blur hover:bg-cream/[0.06] hover:border-cream/20 transition-all">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-xl bg-cream/10 grid place-items-center shrink-0 group-hover:bg-cyan-glow/20 transition-colors">
                    <item.icon className="h-5 w-5 text-cyan-glow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-glow mb-2">{item.tag}</div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug text-cream">{item.title}</h3>
                    <p className="mt-3 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
