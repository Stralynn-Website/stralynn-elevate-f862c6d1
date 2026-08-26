import type { ReactNode } from "react";

/**
 * Renders a small, safe subset of markdown for job descriptions written in
 * the admin panel:
 *   ## Heading           -> <h3>
 *   - bullet item         -> <ul><li>
 *   blank line            -> paragraph break
 *   anything else         -> <p>
 * No HTML injection — everything is rendered as plain React text nodes.
 */
export function renderSimpleMarkdown(text: string): ReactNode {
  if (!text) return null;

  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let listBuffer: string[] = [];
  let paraBuffer: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length) {
      blocks.push(
        <ul key={`ul-${key++}`} className="space-y-2.5 mb-6">
          {listBuffer.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-muted-foreground leading-relaxed">
              <span className="text-azure mt-1.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  const flushPara = () => {
    if (paraBuffer.length) {
      blocks.push(
        <p key={`p-${key++}`} className="text-muted-foreground leading-relaxed mb-5">
          {paraBuffer.join(" ")}
        </p>
      );
      paraBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushPara();
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      flushPara();
      blocks.push(
        <h3 key={`h-${key++}`} className="font-display text-lg font-semibold mt-8 mb-3 first:mt-0">
          {line.slice(3)}
        </h3>
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushPara();
      listBuffer.push(line.slice(2));
      continue;
    }

    flushList();
    paraBuffer.push(line);
  }

  flushList();
  flushPara();

  return <>{blocks}</>;
}
