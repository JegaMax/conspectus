import type { LucideIcon } from "lucide-react";

export type SectionId =
  | "about"
  | "education"
  | "projects"
  | "courses"
  | "experience"
  | "contact";

export interface SectionHeadingContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    external?: boolean;
  };
  stats: Stat[];
  portrait: ImageAsset;
}

export interface AboutContent {
  heading: SectionHeadingContent;
  bio: string[];
  highlights: string[];
  skillGroups: SkillGroup[];
}

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image: ImageAsset | null;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "live" | "github" | "article" | "video";
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  thumbnail: ImageAsset;
  heroImage: ImageAsset;
  links: ProjectLink[];
}

export interface Course {
  name: string;
  provider: string;
  duration: string;
  focus?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export interface ContactContent {
  heading: SectionHeadingContent;
  availability: string;
  channels: ContactChannel[];
  socials: ContactChannel[];
}

export interface PortfolioContent {
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  education: {
    heading: SectionHeadingContent;
    entries: TimelineEntry[];
  };
  projects: {
    heading: SectionHeadingContent;
    items: Project[];
  };
  courses: {
    heading: SectionHeadingContent;
    items: Course[];
  };
  experience: {
    heading: SectionHeadingContent;
    items: Experience[];
  };
  contact: ContactContent;
}
