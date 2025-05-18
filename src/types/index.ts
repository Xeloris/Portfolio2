export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AboutMe {
  name: string;
  title: string;
  description: string;
  image: string;
  resumeUrl: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}