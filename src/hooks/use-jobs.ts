import { useEffect, useState } from "react";

export interface JobItem {
  _id?: string;
  team: string;
  role: string;
  location: string;
  type: string;
  description?: string;
  applyUrl?: string;
  applicantsCount?: number;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Fetches active open roles from the backend. Falls back to `fallback` if
 * the request fails or nothing's been saved in the admin panel yet, so the
 * careers page never shows an empty/broken list.
 */
export function useJobs(fallback: JobItem[]) {
  const [jobs, setJobs] = useState<JobItem[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/jobs`);
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        if (!cancelled) {
          setJobs(Array.isArray(data.jobs) && data.jobs.length > 0 ? data.jobs : fallback);
        }
      } catch {
        if (!cancelled) setJobs(fallback);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jobs, loading };
}
