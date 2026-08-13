import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { COUNTRY_CODES, type CountryCode } from "../../lib/country-codes";

function flagEmoji(iso: string) {
  return iso
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
}

export function CountryCodeSelect({
  value,
  onChange,
}: {
  value: CountryCode;
  onChange: (c: CountryCode) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRY_CODES;
    return COUNTRY_CODES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        c.dial.includes(q),
    );
  }, [query]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-label="Country code"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 rounded-md border border-border bg-transparent px-3 py-3 text-foreground transition-colors hover:border-azure focus:border-azure outline-none"
      >
        <span className="text-lg leading-none">{flagEmoji(value.iso)}</span>
        <span className="font-medium">{value.dial}</span>
        <ChevronDown className={"ml-auto h-4 w-4 text-muted-foreground transition-transform " + (open ? "rotate-180" : "")} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-[min(20rem,80vw)] overflow-hidden rounded-xl border border-border bg-card shadow-elegant">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country"
              className="w-full bg-transparent py-1 text-sm outline-none"
            />
          </div>
          <ul className="max-h-64 overflow-y-auto py-1">
            {list.map((c) => (
              <li key={c.iso}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={
                    "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-secondary " +
                    (c.iso === value.iso ? "bg-secondary" : "")
                  }
                >
                  <span className="text-lg leading-none">{flagEmoji(c.iso)}</span>
                  <span className="truncate">{c.name}</span>
                  <span className="ml-auto text-muted-foreground">({c.dial})</span>
                </button>
              </li>
            ))}
            {list.length === 0 && (
              <li className="px-3 py-3 text-sm text-muted-foreground">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
