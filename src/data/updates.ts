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
  if (!period) return "Year unconfirmed";
  if (/^\d{4}$/.test(period)) return period;
  const match = /^(\d{4})-(\d{2})$/.exec(period);
  if (!match) return period;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : period;
}

const voiSelection = "Provincial Team Selection Exam for the National Informatics Olympiad (VOI)";
const voiContext = "Annual provincial Informatics competition that also selects the provincial team for the national VOI contest.";

export const honors: Honor[] = [
  {
    period: "2026-09",
    category: "Award",
    title: `First Prize — ${voiSelection}`,
    detail: voiContext
  },
  {
    period: "2026-08",
    category: "Award",
    title: "Silver Medal — Northern Mountainous & Midland Region Informatics Olympiad"
  },
  {
    period: "2026-06",
    category: "Award",
    title: "Second Prize — Northern Vietnam Informatics Summer Camp"
  },
  {
    period: "2026-05",
    category: "Selection",
    title: "National Selection Test Participant — Vietnam IOAI"
  },
  {
    period: "2026-04",
    category: "Award",
    title: "Bronze Medal — Northern & Coastal Area Informatics Olympiad"
  },
  {
    period: "2025-11",
    category: "Award",
    title: "Honorable Mention — ICPC Vietnam National",
    detail: "Team distinction at the ICPC Vietnam National Programming Contest, 8–9 November 2025."
  },
  {
    period: "2025-09",
    category: "Award",
    title: `Consolation Prize — ${voiSelection}`,
    detail: voiContext
  },
  {
    period: "2025",
    category: "Award",
    title: "Third Prize — Northern Vietnam Youth Informatics Contest",
    detail: "Le Hong Phong Secondary School."
  },
  {
    period: "2022",
    category: "Award",
    title: "Second Prize — Provincial Youth Informatics Contest",
    detail: "Le Hong Phong Secondary School."
  },
  {
    period: "2022-03",
    category: "Award",
    title: "Second Prize — District-Level Mathematics Excellent Student Competition",
    detail: "Awarded in March 2022 while attending Le Hong Phong Secondary School."
  },
  {
    period: "",
    category: "Distinction",
    title: "Codeforces Expert — @zvwg.vx",
    url: "https://codeforces.com/profile/zvwg.vx"
  }
].sort((a, b) => b.period.localeCompare(a.period));

export const announcements: Update[] = [];

export const updates: Update[] = [
  ...announcements,
  ...honors.map((honor) => ({
    period: honor.period,
    category: honor.category,
    title: honor.title,
    summary: honor.detail,
    url: honor.url
  }))
].sort((a, b) => b.period.localeCompare(a.period));
