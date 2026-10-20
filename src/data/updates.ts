export type UpdateCategory = "Award" | "Selection" | "Distinction" | "Research" | "Engineering" | "Writing" | "Announcement";

export type Honor = {
  period: string;
  category: UpdateCategory;
  title: string;
  detail?: string;
  url?: string;
};

export type Update = {
  period: string;
  category: UpdateCategory;
  title: string;
  summary?: string;
  url?: string;
};

export function formatPeriod(period: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(period);
  if (!match) return period || "Undated";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : period;
}

export const honors: Honor[] = [
  {
    period: "2026-09",
    category: "Award",
    title: "First Prize — Provincial Informatics Team Selection for VOI 2026",
    detail: "First Prize in the provincial excellent-student informatics team selection."
  },
  {
    period: "2026-08",
    category: "Award",
    title: "Silver Medal — Northern Mountainous & Midland Region Informatics Olympiad 2026"
  },
  {
    period: "2026-06",
    category: "Award",
    title: "Second Prize — Northern Vietnam Informatics Summer Camp 2026"
  },
  {
    period: "2026-05",
    category: "Selection",
    title: "National Selection Test Participant — Vietnam IOAI 2026"
  },
  {
    period: "2026-04",
    category: "Award",
    title: "Bronze Medal — Northern & Coastal Area Informatics Olympiad 2026"
  },
  {
    period: "2025-11",
    category: "Award",
    title: "Honorable Mention — ICPC Vietnam National 2025",
    detail: "Team distinction at the 2025 ICPC Vietnam National Programming Contest, 8–9 November 2025."
  },
  {
    period: "2025-09",
    category: "Award",
    title: "Consolation Prize — Provincial Excellent Student Competition (Informatics) 2025"
  },
  {
    period: "",
    category: "Distinction",
    title: "Codeforces Expert — @zvwg.vx",
    url: "https://codeforces.com/profile/zvwg.vx"
  }
];

export const announcements: Update[] = [];

export const updates: Update[] = [
  ...announcements,
  ...honors.filter((honor) => honor.period).map((honor) => ({
    period: honor.period,
    category: honor.category,
    title: honor.title,
    summary: honor.detail,
    url: honor.url
  }))
].sort((a, b) => b.period.localeCompare(a.period));
