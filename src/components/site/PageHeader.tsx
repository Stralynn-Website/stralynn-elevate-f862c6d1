import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  video,
  poster,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  video?: string;
  poster?: string;
  children?: ReactNode;
}) {
  const hasMedia = Boolean(video || image);
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden gradient-hero text-cream">
      {/* Background media */}
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src={video}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
      ) : image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
      ) : null}

      {/* Overlays — always present so text stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/75 to-navy-deep"
      />
      <div
        aria-hidden
        className={
          "absolute inset-0 " +
          (hasMedia
            ? "[background:radial-gradient(900px_500px_at_75%_15%,oklch(0.72_0.14_220/.35),transparent_60%),radial-gradient(700px_500px_at_5%_100%,oklch(0.55_0.16_240/.4),transparent_60%)]"
            : "opacity-40 [background:radial-gradient(800px_400px_at_80%_0%,oklch(0.72_0.14_220/.5),transparent_60%),radial-gradient(600px_400px_at_10%_100%,oklch(0.55_0.16_240/.4),transparent_60%)]")
        }
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="container-x relative">
        <div className="max-w-4xl">
          <Reveal>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 eyebrow-light mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                {eyebrow}
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed">
                {description}
              </p>
            </Reveal>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
