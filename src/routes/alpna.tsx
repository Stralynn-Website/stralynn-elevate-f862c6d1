import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Mic, Link as LinkIcon, Globe, Phone, Mail, CalendarClock } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { COUNTRY_CODES, type CountryCode } from "../lib/country-codes";
import { CountryCodeSelect } from "../components/site/CountryCodeSelect";
import alpnaPortrait from "../assets/leadership/alpna-doshi.jpeg";

export const Route = createFileRoute("/alpna")({
  head: () => ({
    meta: [
      { title: "Alpna J. Doshi — Speaker Profile | Stralynn" },
      {
        name: "description",
        content:
          "Alpna J. Doshi, NACD.DC — Founder, CEO & Board Chairwoman of Stralynn Consulting Services. Speaker on agentic AI, data strategy, board governance, and women in leadership. Schedule a conversation to book Alpna.",
      },
    ],
  }),
  component: AlpnaSpeakerPage,
});

const SIGNATURE_TALKS = [
  {
    event: "Google Cloud Next 2019",
    place: "California, US",
    date: "Apr 9, 2019",
    desc: "Featured on the main keynote stage as Google Cloud's healthcare-industry voice, sharing the program with Google CEO Sundar Pichai and Google Cloud CEO Thomas Kurian. Alpna presented how Philips harnesses cloud, AI, and machine learning to pursue its mission of improving three billion lives a year by 2030 — advancing the \"quadruple aim\" of better patient care, outcomes, and provider experiences at sustainable cost.",
  },
  {
    event: "CIODAY 2018",
    place: "Amsterdam, Netherlands",
    date: "Nov 27, 2018",
    desc: "Speaking as one of four finalists for Europe's CIO of the Year Award at the continent's largest CIO gathering, Alpna shared what motivated her to become a change agent — reflecting on leading the digital transformation of a 127-year-old company as Group CIO of Royal Philips, reframing IT as a business partner.",
  },
  {
    event: "NASSCOM India Leadership Forum 2017",
    place: "Mumbai, India",
    date: "Feb 15, 2017",
    desc: "Speaking at the 25th edition of NASSCOM's flagship conference — Asia's largest leadership forum, drawing over 2,000 industry leaders — Alpna joined a featured panel on the digitalisation of healthcare, mapping how predictive analytics, remote monitoring, and new partnership models can make care smarter and more affordable at scale.",
  },
];

const SPEAKING_FORMATS = ["Keynotes", "Fireside chats", "Executive panels", "Podcasts", "Board & CXO workshops", "Webinars"];

const TOPICS = ["Agentic AI", "Data Strategy", "Human-Centric Transformation", "Board Governance", "Women in Leadership"];

const EVENT_FORMATS = ["In-person", "Virtual", "Hybrid"];
const AUDIENCE_SIZES = ["Under 50", "50–150", "150–500", "500–1,000", "1,000+"];
const BUDGET_RANGES = ["Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+", "Prefer to discuss"];

function LabeledInput({
  label, name, type = "text", required, as, placeholder, options,
}: {
  label: string; name: string; type?: string; required?: boolean;
  as?: "textarea" | "select"; placeholder?: string; options?: string[];
}) {
  const inputCls = "w-full bg-transparent border border-border focus:border-azure outline-none rounded-md px-4 py-3 text-foreground transition-colors";
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-foreground">
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} placeholder={placeholder} rows={5} className={inputCls + " resize-none"} />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} defaultValue="" className={inputCls}>
          <option value="" disabled>{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={inputCls} />
      )}
    </div>
  );
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function AlpnaSpeakerPage() {
  const [expanded, setExpanded] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [country, setCountry] = useState<CountryCode>(
    COUNTRY_CODES.find((c) => c.iso === "US") ?? COUNTRY_CODES[0],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      eventName: formData.get("eventName") || "",
      eventDate: formData.get("eventDate") || "",
      eventFormat: formData.get("eventFormat") || "",
      eventLocation: formData.get("eventLocation") || "",
      organization: formData.get("organization") || "",
      audienceSize: formData.get("audienceSize") || "",
      budgetRange: formData.get("budgetRange") || "",
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
      email: formData.get("email") || "",
      countryCode: formData.get("countryCode") || "",
      phone: formData.get("phone") || "",
      message: formData.get("message") || "",
    };

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/speaking-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 gradient-hero text-cream overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background:radial-gradient(800px_400px_at_80%_0%,oklch(0.72_0.14_220/.5),transparent_60%),radial-gradient(600px_400px_at_10%_100%,oklch(0.55_0.16_240/.4),transparent_60%)]"
        />
        <div className="container-x relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 eyebrow-light mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
              Speaker Profile
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
              Alpna J. Doshi, <span className="font-editorial italic">NACD.DC</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed">
              Founder, CEO & Board Chairwoman — Stralynn Consulting Services, Inc.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[minmax(0,380px)_1fr] gap-14 lg:gap-20 items-start">
          {/* LEFT: Photo */}
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-soft">
                <img
                  src={alpnaPortrait}
                  alt="Alpna J. Doshi, NACD.DC — Founder CEO & Board Chairwoman of Stralynn"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 mt-0.5 text-azure shrink-0" />
                  <div className="text-sm">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Web</div>
                    <div className="font-medium">stralynn.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LinkIcon className="h-4 w-4 mt-0.5 text-azure shrink-0" />
                  <div className="text-sm min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                    <div className="font-medium break-words">linkedin.com/in/alpnajaindoshi</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-azure shrink-0" />
                  <div className="text-sm">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Booking Phone</div>
                    <div className="font-medium">+1 917 636 0687</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-azure shrink-0" />
                  <div className="text-sm min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Booking Email</div>
                    <div className="font-medium break-words">connect@stralynn.com</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Info */}
          <div className="space-y-14">
            <Reveal>
              <div>
                <div className="eyebrow mb-3">Speaker Bio</div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Alpna J. Doshi is Board Chairwoman and Founder CEO of Stralynn Consulting Services, Inc, an AI-powered
                  digital transformation hi-tech organization for enterprise and US government sector with Headquarters
                  in Nashville, TN, and coverage for the entire US. A former Fortune 500 CIO at Royal Philips and
                  Reliance Group, Alpna has led some of the industry's most complex transformations and is considered
                  to have left a legacy. A Thoma Bravo Operating Partner alumna, a former board member at Mimecast and
                  Private entities, and an NACD-Certified director, Alpna speaks on agentic AI, data strategy, and
                  human-centric transformation, board governance, and women leadership. She is a seasoned speaker at
                  US and global events, highly respected for her thought leadership on diverse topics for Board and
                  C-suite executives. She is a member of the premium North America Corporate Directors (NACD), and
                  will be on a Panel on AI and Cybersecurity in November 2026.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <div className="eyebrow mb-3">Speaking Topics</div>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <span key={t} className="text-sm rounded-full border border-border px-4 py-1.5 bg-secondary/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="eyebrow mb-3">Signature Talks</div>
                <div className="space-y-6">
                  {SIGNATURE_TALKS.map((t) => (
                    <div key={t.event} className="rounded-2xl border border-border bg-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-xl gradient-hero grid place-items-center shrink-0">
                          <Mic className="h-4 w-4 text-cream" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold">{t.event}</h3>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                            {t.place} · {t.date}
                          </div>
                          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <div className="eyebrow mb-3">Speaking Formats</div>
                <div className="flex flex-wrap gap-2">
                  {SPEAKING_FORMATS.map((f) => (
                    <span key={f} className="text-sm rounded-full border border-border px-4 py-1.5">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* SCHEDULE A CONVERSATION */}
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
                {!expanded ? (
                  <div className="text-center py-4">
                    <CalendarClock className="h-8 w-8 text-azure mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold mb-2">Book Alpna for your event</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Tell us about your event and we'll get back to you to schedule a conversation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpanded(true)}
                      className="group inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all"
                    >
                      Schedule a Conversation
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="mx-auto h-14 w-14 rounded-full gradient-hero grid place-items-center mb-6">
                          <Check className="h-6 w-6 text-cream" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold mb-2">Conversation scheduled</h3>
                        <p className="text-muted-foreground">
                          Thanks — your request has been sent. Alpna's team will follow up shortly to confirm a time.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-10 overflow-hidden"
                      >
                        <div>
                          <h3 className="font-display text-2xl font-semibold mb-1">Schedule a conversation</h3>
                          <p className="text-sm text-muted-foreground">Share your event details and we'll follow up to confirm.</p>
                        </div>

                        <div className="space-y-6">
                          <h4 className="font-display text-lg font-semibold">About the event</h4>
                          <LabeledInput label="Event Name" name="eventName" required />
                          <div className="grid md:grid-cols-2 gap-6">
                            <LabeledInput label="Preferred Event Date" name="eventDate" type="date" required />
                            <LabeledInput label="Event Format" name="eventFormat" as="select" options={EVENT_FORMATS} required />
                          </div>
                          <LabeledInput label="Event Location" name="eventLocation" placeholder="City, State / Virtual" />
                          <div className="grid md:grid-cols-2 gap-6">
                            <LabeledInput label="Estimated Audience Size" name="audienceSize" as="select" options={AUDIENCE_SIZES} />
                            <LabeledInput label="Budget Range" name="budgetRange" as="select" options={BUDGET_RANGES} />
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h4 className="font-display text-lg font-semibold">About the organization</h4>
                          <LabeledInput label="Organization Name" name="organization" required />
                        </div>

                        <div className="space-y-6">
                          <h4 className="font-display text-lg font-semibold">About you</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <LabeledInput label="First Name" name="firstName" required />
                            <LabeledInput label="Last Name" name="lastName" required />
                          </div>
                          <LabeledInput label="Email Address" name="email" type="email" required />
                          <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm text-foreground">Phone Number</label>
                            <div className="grid grid-cols-[minmax(0,8rem)_1fr] gap-3">
                              <input type="hidden" name="countryCode" value={country.dial} />
                              <CountryCodeSelect value={country} onChange={setCountry} />
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="tel"
                                placeholder="Phone number"
                                className="w-full bg-transparent border border-border focus:border-azure outline-none rounded-md px-4 py-3 text-foreground transition-colors"
                              />
                            </div>
                          </div>
                        </div>

                        <LabeledInput
                          label="Additional Details"
                          name="message"
                          as="textarea"
                          placeholder="Tell us more about the event, audience, and what you'd like Alpna to speak about..."
                        />

                        {submitError && <p className="text-sm text-red-600">{submitError}</p>}

                        <div className="flex items-center gap-4">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="group inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all disabled:opacity-60"
                          >
                            {submitting ? "Sending..." : "Submit"}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setExpanded(false)}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
