import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import stralynnLogo from "../../assets/stralynn-logo.avif";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; desc?: string; children?: { label: string; to: string; desc?: string }[] }[];
};

const NAV: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "AI Digital Transformation", to: "/services/ai-digital-transformation", desc: "Enterprise AI, automation & data platforms" },
      { label: "M&A Advisory", to: "/services/ma-advisory", desc: "Diligence, integration & value capture" },
      { label: "BPO Transformation", to: "/services/bpo-transformation", desc: "Reinvent operations with intelligent ops" },
      {
        label: "Enterprise Implementations",
        to: "/services/enterprise-implementations",
        desc: "Salesforce, ERP & Certinia transformations",
        children: [
          { label: "Salesforce Transformation", to: "/services/salesforce-transformation", desc: "Sales, service & Agentforce AI" },
          { label: "NetSuite Consulting", to: "/services/netsuite-consulting", desc: "ERP implementation & migration" },
          { label: "Certinia Consulting", to: "/services/certinia-consulting", desc: "PSA & financial management" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Healthcare", to: "/industries/healthcare", desc: "Care delivery, payers & life sciences" },
      { label: "Private Equity", to: "/industries/private-equity", desc: "Portfolio value creation" },
      { label: "Financial Services", to: "/industries/financial-services", desc: "Banking, insurance & capital markets" },
      { label: "Technology", to: "/industries/technology", desc: "Scale-ups to platform giants" },
      { label: "Public Sector", to: "/industries/public-sector", desc: "Government, defense & civic platforms" },
    ],
  },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`h-12 w-12 rounded-full grid place-items-center transition-colors ${scrolled ? "bg-cream ring-1 ring-border" : "bg-cream ring-2 ring-cream/40 shadow-soft"}`}>
            <img src={stralynnLogo} alt="Stralynn" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-extrabold tracking-[0.2em] text-xl md:text-[1.4rem] transition-colors ${scrolled ? "text-navy-deep" : "text-cream drop-shadow-[0_2px_10px_oklch(0.18_0.02_260/0.7)]"}`}>
              STRALYNN
            </span>
            <span className={`mt-1.5 text-[9px] md:text-[10px] font-bold tracking-[0.2em] transition-colors ${scrolled ? "text-azure" : "text-cyan-glow drop-shadow-[0_1px_8px_oklch(0.18_0.02_260/0.8)]"}`}>
              REIMAGINE.DIGITALIZE.TRANSCEND
            </span>
          </div>
        </Link>


        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/85 hover:text-cream"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </button>
              ) : (
                <Link
                  to={item.to!}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/85 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-3 w-[420px]"
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <div className="rounded-2xl border border-border bg-popover/95 backdrop-blur-xl shadow-elegant p-3">
                      {item.children.map((c) => (
                        <div
                          key={c.label}
                          className="relative"
                          onMouseEnter={() => c.children && setOpenSubMenu(c.label)}
                        >
                          <Link
                            to={c.to}
                            onClick={() => { setOpenMenu(null); setOpenSubMenu(null); }}
                            className="flex items-start gap-3 rounded-xl p-3 hover:bg-muted transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-foreground">{c.label}</div>
                              {c.desc && <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>}
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>

                          <AnimatePresence>
                            {c.children && openSubMenu === c.label && (
                              <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 pl-3 w-[320px]"
                              >
                                <div className="rounded-2xl border border-border bg-popover/95 backdrop-blur-xl shadow-elegant p-3">
                                  {c.children.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      to={sub.to}
                                      onClick={() => { setOpenMenu(null); setOpenSubMenu(null); }}
                                      className="flex items-start gap-3 rounded-xl p-3 hover:bg-muted transition-colors group"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-semibold text-foreground">{sub.label}</div>
                                        {sub.desc && <div className="text-xs text-muted-foreground mt-0.5">{sub.desc}</div>}
                                      </div>
                                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/about"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border"
                : "bg-cream/10 text-cream hover:bg-cream/20 border border-cream/20 backdrop-blur"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-5 py-2.5 text-sm font-semibold hover:bg-cream/90 transition-all"
          >
            Contact us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-cream"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-2">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.label}</div>
                    {item.children.map((c) =>
                      c.children ? (
                        <div key={c.label} className="mb-1">
                          <button
                            type="button"
                            onClick={() => setMobileSubOpen((v) => (v === c.label ? null : c.label))}
                            className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                          >
                            {c.label}
                            <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${mobileSubOpen === c.label ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileSubOpen === c.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 border-l border-border ml-1"
                              >
                                <Link
                                  to={c.to}
                                  onClick={() => setOpen(false)}
                                  className="block py-2 text-sm text-muted-foreground font-medium"
                                >
                                  {c.label} overview
                                </Link>
                                {c.children.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 text-sm text-foreground font-medium"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-foreground font-medium"
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="py-3 text-foreground font-medium border-b border-border"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full gradient-hero text-cream px-5 py-3 font-semibold"
              >
                Contact us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
