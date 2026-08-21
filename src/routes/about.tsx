import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import {
  ArrowUpRight, Heart, MessageCircle, Target, Lightbulb, BookOpen, ScanSearch,
  Zap, Boxes, Gauge, Handshake, Rocket, Database, Cloud, Server, LayoutDashboard,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stralynn | Enterprise AI & Digital Transformation Consultancy" },
      { name: "description", content: "Discover Stralynn Consulting Services. Learn about our mission, core values, 4 Is transformation methodology, leadership governance, and global enterprise platform expertise." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, t: "Passion & Commitment", d: "A dedicated drive to see each client relationship succeed, delivering beyond mere transactional service boundaries." },
  { icon: MessageCircle, t: "Honesty & Openness", d: "Maintaining direct, transparent communications in advising partners on systems, capabilities, and expectations." },
  { icon: Target, t: "Value Driven", d: "Ensuring every consultation, program integration, and software deployment yields measurable operational advantages." },
];

const fourIs = [
  { icon: Lightbulb, t: "Domain Expertise", d: "Leveraging a deep, living knowledge base of best practices, business cases, and customized solutions extracted from multiple global projects across diverse industry verticals." },
  { icon: ScanSearch, t: "Business Alignment System Evaluation", d: "An industry-first proprietary framework that blends business consulting with digital transformation to assess value creation early in the engagement." },
  { icon: Zap, t: "Flexibility", d: "Utilizing customized Program Management and Agile Delivery models superimposed with Organizational Change Management (OCM) impact touchpoints to ensure seamless system adoption." },
  { icon: Boxes, t: "Proprietary Software Offerings", d: "Accelerating enterprise transformation with tailored software products including StraL2C.ai, StraBoard, and intelligent AI Agents." },
];

const methodology = [
  {
    icon: Gauge,
    t: "Operational Excellence",
    items: [
      "TCO Optimization & OPEX reduction",
      "Eliminating disparate systems & manual touchpoints",
      "Automating processes from Opportunity-to-Cash (O2C)",
    ],
  },
  {
    icon: Handshake,
    t: "Trusted Partner",
    items: [
      "Collaborative Engagement Model with Integrated Governance",
      "Insightful dashboard reporting at all operational levels",
      "Strong, structured Organizational Change Management (OCM)",
    ],
  },
  {
    icon: Rocket,
    t: "Accelerated Roadmap",
    items: [
      "Timely execution & accelerated program delivery models",
      "Agile-based approach with multiple continuous-delivery milestones",
      "Robust, cross-functional Knowledge Management",
    ],
  },
  {
    icon: Database,
    t: "Value of Data",
    items: [
      "Multi-engagement integrated architectures supporting Salesforce, SAP, Oracle Apps, and NetSuite",
      "Deep domain expertise in enterprise system security",
      "Highly flexible delivery models to rapidly adopt changes",
    ],
  },
];

const ecosystem = [
  { icon: Cloud, t: "Salesforce Enterprise Consulting", d: "Architecting CRM, CPQ, Order-to-Cash, and Agentforce AI workflows." },
  { icon: LayoutDashboard, t: "SAP Platform Modernization", d: "Streamlining core ERP operations and enterprise data integrations." },
  { icon: Server, t: "Dell Technology Architecture", d: "Designing resilient cloud infrastructure and enterprise hardware networks." },
  { icon: BookOpen, t: "Oracle NetSuite Business Systems", d: "Delivering end-to-end cloud ERP implementation, optimization, and data migration." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Stralynn"
        title={<>About Stralynn <span className="font-editorial italic">Consulting Services</span></>}
        description="REIMAGINE. DIGITALIZE. TRANSCEND."
        video="https://videos.pexels.com/video-files/4763824/4763824-hd_1920_1080_24fps.mp4"
        poster="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 text-cream px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-cream/10 transition-all">
            Contact Us
          </Link>
        </div>
      </PageHeader>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="eyebrow mb-3">Speed & Certainty</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Built for <span className="font-editorial italic">complex digital transformations</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                At Stralynn, speed and certainty are the core pillars of developing and implementing complex digital transformations. In modern, fast-moving markets, organizations face the dual pressure of deploying cutting-edge technologies while fully optimizing their existing workforce skills.
              </p>
              <p>
                Stralynn understands that because global markets evolve rapidly, a digital transformation must move even faster to maximize ROI on technology investments.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Mission & Core Values</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-8">Our Mission</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="text-2xl md:text-3xl font-editorial italic leading-snug max-w-3xl mb-16 border-l-4 border-azure pl-6">
              "To deliver business-focused technology solutions to our partners by collaborating with them as their Trusted Technology Advisors."
            </blockquote>
          </Reveal>

          <Reveal><div className="eyebrow mb-3">Foundational Corporate Values</div></Reveal>
          <Stagger className="mt-8 grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.t}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <v.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* VALUE PROPOSITION — THE 4 IS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">The Stralynn Value Proposition</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Insights, Interactions, Integrations & <span className="font-editorial italic">Innovations</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Stralynn focuses specifically on the factors that matter most in digital transformation — the "4 Is." Through this framework, Stralynn enables extraordinary outcomes for enterprise businesses and their customers.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {fourIs.map((f) => (
              <StaggerItem key={f.t}>
                <div className="h-full p-6 rounded-2xl border border-border bg-card">
                  <div className="h-11 w-11 rounded-xl gradient-hero grid place-items-center mb-4">
                    <f.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{f.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CORE METHODOLOGY */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Core Methodology</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">What we do</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Stralynn delivers high-impact digital solutions organized across four distinct functional dimensions to execute organizational change.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-5">
            {methodology.map((m) => (
              <StaggerItem key={m.t}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <m.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">{m.t}</h3>
                  <ul className="space-y-2.5">
                    {m.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                        <span className="text-azure mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Technology Ecosystem Expertise</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Elite expertise across <span className="font-editorial italic">world-class systems</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              To support clients who want to proactively define their future rather than react to it, Stralynn maintains elite engineering and consulting expertise across world-class technology systems.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystem.map((e) => (
              <StaggerItem key={e.t}>
                <div className="h-full p-6 rounded-2xl border border-border bg-card">
                  <div className="h-11 w-11 rounded-xl gradient-hero grid place-items-center mb-4">
                    <e.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Methodological Governance & Leadership Vision</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-10">
              Leading digital strategies <span className="font-editorial italic">globally</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
              Stralynn leads digital strategies globally by uniting digital, technical, and creative competencies under a mission-critical approach. Driven by humility, humanity, and a passion for technology, Stralynn helps organizations transform customer experiences and improve lives globally.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-navy-deep text-cream p-10 md:p-14 max-w-3xl">
              <blockquote className="text-xl md:text-2xl font-editorial italic leading-relaxed">
                "Our people are our most valuable assets and I've learned that, given the right opportunities, attention and resources, they have the ability and drive to progress from success to significance."
              </blockquote>
              <div className="mt-6">
                <div className="font-display text-lg font-semibold">Alpna J. Doshi</div>
                <div className="text-sm text-cream/70">Chairman & CEO</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
