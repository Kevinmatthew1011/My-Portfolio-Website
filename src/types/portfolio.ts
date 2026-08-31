export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ProfileConfig {
  name: string;
  headline: string;
  bio: string;
  institution: string;
  degree: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resumeUrl?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  problem?: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  status?: "completed" | "active" | "prototype";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  location: string;
  focus?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  description: string;
  date?: string;
  type: "hackathon" | "selection" | "project" | "achievement";
}
