import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stralynn" },
      { name: "description", content: "Tell us where you are and where you want to be. We'll bring the team." },
    ],
  }),
  component: Contact,
});

function Field({
  label, name, type = "text", as, required, placeholder,
}: { label: string; name: string; type?: string; as?: "textarea"; required?: boolean; placeholder?: string }) {
  const common = "peer w-full bg-transparent border-0 border-b border-border focus:border-azure outline-none py-3 text-foreground placeholder-transparent transition-colors";
  return (
    <label className="relative block group">
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder ?? label} rows={4} className={common + " resize-none"} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder ?? label} className={common} />
      )}
      <span className="pointer-events-none absolute left-0 -top-2 text-xs uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-azure">
        {label}{required && " *"}
      </span>
    </label>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Tell us what you're <span className="font-editorial italic">building.</span></>}
        description="One of our partners will reply within one business day. No SDR funnels — just the people who'd do the work."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div className="space-y-10">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Reach us</div>
                <h2 className="font-display text-3xl font-semibold leading-tight">Three ways to start a conversation.</h2>
              </div>
              {[
                { icon: Mail, t: "Email", d: "connect@stralynn.com" },
                { icon: Phone, t: "Phone", d: "+1 (415) 555-0142" },
                { icon: MapPin, t: "LOCATIONS", d: "USA · Canada· India" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center shrink-0">
                    <c.icon className="h-5 w-5 text-navy" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-display text-lg font-semibold mt-0.5 break-words">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
            >
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="mx-auto h-14 w-14 rounded-full gradient-hero grid place-items-center mb-6">
                    <Check className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Message received</h3>
                  <p className="text-muted-foreground">A partner will be in touch within one business day.</p>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Field label="Company" name="company" />
                    <Field label="Role" name="role" />
                  </div>
                  <Field label="What are you working on?" name="message" as="textarea" required />
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all"
                  >
                    Send message <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
