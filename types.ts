
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'ambassador';
}

export interface Certification {
  name: string;
  issuer: string;
  level?: string;
}
