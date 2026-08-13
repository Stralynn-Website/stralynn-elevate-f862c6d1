import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Check } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { COUNTRY_CODES, type CountryCode } from "../lib/country-codes";
import { CountryCodeSelect } from "../components/site/CountryCodeSelect";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stralynn" },
      { name: "description", content: "Tell us where you are and where you want to be. We'll bring the team." },
    ],
  }),
  component: Contact,
});

const REASONS = [
  "General inquiry",
  "New business opportunity",
  "Media / Press",
  "Careers",
  "Partnerships",
  "Other",
];

function LabeledInput({
  label, name, type = "text", required, as, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; as?: "textarea"; placeholder?: string }) {
  const inputCls = "w-full bg-transparent border border-border focus:border-azure outline-none rounded-md px-4 py-3 text-foreground transition-colors";
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-foreground">
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} placeholder={placeholder} rows={6} className={inputCls + " resize-none"} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={inputCls} />
      )}
    </div>
  );
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function Contact() {
  const [sent, setSent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [privacyOk, setPrivacyOk] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [country, setCountry] = useState<CountryCode>(
    COUNTRY_CODES.find((c) => c.iso === "US") ?? COUNTRY_CODES[0],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);
    setSubmitError(null);
    if (!privacyOk) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      reason: formData.get("reason") || "",
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
      email: formData.get("email") || "",
      countryCode: formData.get("countryCode") || "",
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      message: formData.get("message") || "",
      privacyAccepted: privacyOk,
    };

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
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
      <PageHeader
        eyebrow="Contact"
        title={<>Tell us what you're <span className="font-editorial italic">building</span></>}
        description="One of our partners will reply within one business day. No SDR funnels just the people who'd do the work."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div className="space-y-10">
              <div>
                <div className="eyebrow mb-3">Reach us</div>
                <h2 className="font-display text-3xl font-semibold leading-tight">Two ways to start a conversation</h2>
              </div>
              {[
                { icon: Mail, t: "Email", d: "connect@stralynn.com" },
                { icon: MapPin, t: "LOCATIONS", d: "USA · Canada · India" },
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
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
              noValidate
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
                <div className="space-y-10">
                  <div className="space-y-2">
                    <label htmlFor="reason" className="block text-sm text-foreground">
                      Reason for contacting Stralynn
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      defaultValue=""
                      className="w-full bg-transparent border border-border focus:border-azure outline-none rounded-md px-4 py-3 text-foreground transition-colors"
                    >
                      <option value="" disabled>Reason for contacting Stralynn</option>
                      {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-display text-2xl font-semibold">About you</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <LabeledInput label="First Name" name="firstName" required />
                      <LabeledInput label="Last Name" name="lastName" required />
                    </div>
                    <LabeledInput label="Email Address" name="email" type="email" required />
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm text-foreground">Phone Number:</label>
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

                  <div className="space-y-6">
                    <h3 className="font-display text-2xl font-semibold">About your business</h3>
                    <LabeledInput label="Company Name:" name="company" required />
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-display text-2xl font-semibold">Your message</h3>
                    <LabeledInput
                      label="Message:"
                      name="message"
                      as="textarea"
                      required
                      placeholder="Describe your reason for contacting Stralynn in 1,500 characters or less..."
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={privacyOk}
                        onChange={(e) => setPrivacyOk(e.target.checked)}
                        className="mt-1 h-4 w-4 accent-azure"
                      />
                      <span>
                        <span className="text-red-600 mr-1">*</span>
                        I have read and understand{" "}
                        <a href="#" className="underline text-azure">Stralynn's Privacy Notice</a>.
                      </span>
                    </label>
                    {attempted && !privacyOk && (
                      <p className="mt-2 text-sm text-red-600">This field is required</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-600">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-2 inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Submit"} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
