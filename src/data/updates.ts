export type Honor = {
  period: string;
  title: string;
  detail?: string;
};

export const honors: Honor[] = [
  {
    period: "2026",
    title: "First Prize — Provincial Informatics Team Selection Exam for VOI 2026"
  },
  {
    period: "2026",
    title: "Selected — Vietnam IOAI National Team Selection Test"
  },
  {
    period: "2026",
    title: "Second Prize — Northern Vietnam Informatics Summer Camp"
  },
  {
    period: "2026",
    title: "Silver Medal — Northern Mountainous & Midland Region Informatics Olympiad"
  },
  {
    period: "2026",
    title: "Bronze Medal — Northern & Coastal Area Informatics Olympiad"
  },
  {
    period: "2025",
    title: "Honorable Mention — ICPC Vietnam National"
  },
  {
    period: "",
    title: "Codeforces Expert",
    detail: "Competitive programming distinction"
  }
];

export type Update = {
  period: string;
  category: "Award" | "Selection" | "Research" | "Engineering" | "Writing" | "Announcement";
  title: string;
  summary?: string;
  url?: string;
};

export const updates: Update[] = [
  {
    period: "2026",
    category: "Award",
    title: honors[0].title
  },
  {
    period: "2026",
    category: "Selection",
    title: honors[1].title
  },
  {
    period: "2026",
    category: "Award",
    title: honors[2].title
  },
  {
    period: "2026",
    category: "Award",
    title: honors[3].title
  }
];
