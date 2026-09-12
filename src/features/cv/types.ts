export interface CvEntry {
  title: string;
  organization?: string;
  location?: string;
  period: string;
  start?: string;
  end?: string;
  term?: number;
  stack?: string;
  description?: string;
  bullets: readonly string[];
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface CvProfile {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
  summary: string;
  experience: readonly CvEntry[];
  education: readonly CvEntry[];
  projects: readonly CvEntry[];
  awards: readonly CvEntry[];
  leadership: readonly CvEntry[];
  skillGroups: readonly SkillGroup[];
  spokenLanguages: readonly string[];
  pdf: { href: string; label: string; downloadLabel: string; closeLabel: string };
  latestStory: string;
}
