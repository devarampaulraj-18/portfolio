
import React from 'react';
import { Project, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'factguard',
    title: 'FactGuard',
    subtitle: 'AI Hallucination & Citation Verification System',
    description: 'An AI system that checks the reliability of LLM-generated responses by detecting hallucinations and factual inconsistencies.',
    features: [
      'Identifies unsupported or incorrect claims',
      'Generates explainable trust scores',
      'Improves transparency in AI outputs'
    ],
    tech: ['Python', 'NLP', 'Machine Learning'],
    links: { github: 'https://github.com/devarampaulraj/factguard' },
    icon: '🧠'
  },
  {
    id: 'leave-system',
    title: 'Student Leave Intimation System',
    subtitle: 'Role-based Web Workflow Platform',
    description: 'A digitized platform for student leave and on-duty requests with multi-tier approval flows.',
    features: [
      'Automated approval flow for faculty and admins',
      'Reduced manual effort and errors',
      'Secure role-based access control'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Node.js', 'MySQL'],
    links: { github: 'https://github.com/devarampaulraj/leave-system' },
    icon: '🏫'
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer Detection System',
    subtitle: 'Medical Deep Learning Classification',
    description: 'A high-accuracy deep learning model for classifying breast cancer from medical images.',
    features: [
      'Implemented CNNs using VGG16 and ResNet architectures',
      'Classified benign vs malignant cases',
      'Evaluated using precision-recall and medical ML metrics'
    ],
    tech: ['Python', 'TensorFlow', 'Keras'],
    links: { github: 'https://github.com/devarampaulraj/cancer-detection' },
    icon: '🩺'
  },
  {
    id: 'scent-designer',
    title: 'AI Scent Designer',
    subtitle: 'Personalized Fragrance Recommendation Engine',
    description: 'AI-powered system generating emotion-based scent suggestions through sentiment analysis.',
    features: [
      'Uses NLP to understand user olfactory preferences',
      'Delivers emotion-based scent profile matching',
      'Designed for scalable personalization'
    ],
    tech: ['React.js', 'Node.js', 'Python', 'MongoDB'],
    links: { github: 'https://github.com/devarampaulraj/scent-designer' },
    icon: '🌸'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Web Development Intern',
    company: 'eThoughtz Technology',
    period: 'Summer 2024',
    description: [
      'Worked on a real-time company project for a college website',
      'Developed responsive UI components with clean code practices',
      'Integrated complex backend and database functionality'
    ],
    type: 'work'
  },
  {
    role: 'Google Student Ambassador',
    company: 'Google Developer Groups',
    period: '2023 - Present',
    description: [
      'Selected as a Google Student Ambassador at SREC',
      'Led AI-focused initiatives and community build-outs on campus',
      'Conducted hands-on workshops on Google Gemini and generative AI'
    ],
    type: 'ambassador'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'OCI AI Foundations Associate', issuer: 'Oracle' },
  { name: 'Industry 4.0 & IIoT', issuer: 'NPTEL', level: 'Elite + Silver' },
  { name: 'AI in Medicine', issuer: 'GIAN' },
  { name: 'Software Engineering', issuer: 'IBM' },
  { name: 'Java Programming & SQL', issuer: 'Infosys' },
  { name: 'Robotic Process Automation', issuer: 'NIELIT' }
];

export const SKILLS = {
  languages: ['Python', 'Java', 'C', 'C++'],
  frontend: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  backend: ['Node.js', 'PHP'],
  ai: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'],
  db: ['MySQL', 'MongoDB'],
  tools: ['Git', 'GitHub', 'VS Code', 'Oracle Cloud']
};

export const HACKATHONS = [
  {
    name: 'Byte Quest Hackathon 2026',
    description: 'Built FactGuard in a 24-hour hackathon focused on AI reliability.',
    tag: 'AI Focus'
  },
  {
    name: 'SREC Innovate 2025 (CoIN)',
    description: 'Collaborated on innovation-driven problem solving under time constraints.',
    tag: 'Innovation'
  }
];
