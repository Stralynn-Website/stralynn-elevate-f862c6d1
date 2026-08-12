# Homepage content update from Webpage_Home.docx

Rewrite the homepage so every section uses the exact wording from the document, in the document's order.

## New section order

1. **Hero** — H1 "Enterprise AI Transformation", the new intro paragraph (says "Enterprise modernizations" instead of "ERP modernizations"), buttons relabeled to "Schedule a Conversation" (primary) and "Contact us" (secondary). Keeps the existing video background and scroll animation.
2. **Trust bar** — same headline, logo list updated to include Google Cloud: Salesforce, Certinia, NetSuite, SAP, Oracle, Google Cloud, AWS, Azure.
3. **About Stralynn** — definitional sentence and the "We move fast…" subheadline (already close to current copy; aligned exactly).
4. **Executive Leadership** (new section) — "Executive Leadership and Methodological Governance": the two bio paragraphs on Alpna J. Doshi, her pull quote in the editorial serif style, attribution line, and a row of credibility signals (Former Fortune 500 CIO · Thoma Bravo Operating Partner Alumna · NACD.DC Certified Director · Former Board Director, Mimecast). Styled as a dark accent band so it stands apart from the neighboring light sections.
5. **Stats** — heading "Documented Scale Metrics and Operational Outcomes" with the three metrics reworded to the document's descriptions (42 TB, 800 GB, 90 Days).
6. **Services** — heading "Enterprise Technical Consulting Services and Value Delivery". The four service cards now carry both columns from the doc's table: technical scope and the C-suite business outcome. Cards keep their links to the existing service pages.
7. **Industries** — heading "Vertical IT Consulting Capabilities and Sector Boundaries", replaced with the five sector entries (Private Equity, Healthcare, Financial Services, Technology, Public Sector), each with its one-line description and link to its page. This replaces the current three long prose blocks plus icon row.
8. **CTA** — heading "Initiate a Strategic Engagement or Consultation" with the two pathway cards using the doc's commercial and public-sector copy.

## Removals

- The current **Insights** section (case studies / technical briefs grid) is not in the document, so it is removed from the homepage. The `/insights` page itself stays live and linked from the nav and footer.

## Technical notes

- All changes are in `src/routes/index.tsx`; existing `Reveal`/`Stagger` animation wrappers, design tokens, and media are reused. No new dependencies.
- Route `head()` description updated to match the new hero paragraph.
- No changes to nav, footer, or any other route.
