export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  technologies: string[];
  highlights: string[];
  type: "Work" | "Freelance" | "Open Source";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  score?: string;
  description: string;
  coursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "Competitive Programming" | "Certification" | "Hackathon" | "Milestone";
  platformOrIssuer: string;
  date: string;
  description: string;
  link?: string;
  stat?: string;
}
