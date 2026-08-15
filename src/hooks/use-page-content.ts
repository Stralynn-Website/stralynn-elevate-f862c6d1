import { useEffect, useState } from "react";

export interface ContentItem {
  _id?: string;
  icon?: string;
  tag?: string;
  title: string;
  description: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Fetches editable page content (Insights / Case Study cards) from the
 * backend CMS for the given pageKey. Falls back to `fallback` if the
 * request fails or the admin hasn't saved anything yet, so the site never
 * shows a broken/empty section.
 */
export function usePageContent(pageKey: string, fallback: ContentItem[]) {
  const [items, setItems] = useState<ContentItem[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/content/${pageKey}`);
        if (!res.ok) throw new Error("Failed to fetch content");
        const data = await res.json();
        if (!cancelled) {
          setItems(Array.isArray(data.items) && data.items.length > 0 ? data.items : fallback);
        }
      } catch {
        if (!cancelled) setItems(fallback);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageKey]);

  return { items, loading };
}
