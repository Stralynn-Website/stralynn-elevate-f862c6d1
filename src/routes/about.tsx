import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import { Compass, Heart, Sparkles, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stralynn" },
      { name: "description", content: "Stralynn is a consulting firm built for the AI era — senior operators, engineers and strategists, shoulder-to-shoulder with our clients." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, t: "Outcomes over optics", d: "We measure ourselves in shipped systems and moved metrics — not decks." },
  { icon: Heart, t: "Long-horizon partners", d: "We choose fewer clients, stay longer and bet our reputation on theirs." },
  { icon: Sparkles, t: "Craft is non-negotiable", d: "From a discovery plan to a production model, the work is built to last." },
  { icon: Users, t: "Senior at the table", d: "The partners you meet are the partners who build with you." },
];

const leaders = [
  { name: "Aravind Menon", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Shankar", role: "Partner, AI Practice", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { name: "Jordan Reyes", role: "Partner, M&A", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80" },
  { name: "Naomi Okafor", role: "Partner, Healthcare", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Stralynn"
        title={<>A firm built for the <span className="font-editorial italic">AI era.</span></>}
        description="We started Stralynn because the consulting model is overdue for a rewrite. Strategy and engineering belong on the same team — and we wanted to work that way."
        video="https://videos.pexels.com/video-files/4763824/4763824-hd_1920_1080_24fps.mp4"
        poster="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Our story</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Founded by operators who have <span className="font-editorial italic">been on the other side</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our team comes from the boardrooms of global enterprises and the engineering benches of category-defining startups. We've sold companies, scaled platforms, rebuilt operating models — and we've hired consultants who couldn't keep up with any of it.
              </p>
              <p>
                Stralynn exists to be the firm we wished we could call. Senior, technical, opinionated. In the room when the bets are made — and in the build when they get shipped.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Our values</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">Four convictions we don't compromise on.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Leadership</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">The partners you'll meet.</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l) => (
              <StaggerItem key={l.name}>
                <div className="group rounded-2xl bg-background border border-border overflow-hidden shadow-soft transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-elegant cursor-pointer">
                  <div className="overflow-hidden aspect-[4/5] bg-secondary">
                    <img src={l.img} alt={l.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-lg font-semibold">{l.name}</div>
                    <div className="text-sm text-muted-foreground">{l.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
