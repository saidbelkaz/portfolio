export type ExperienceType = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  description: string;
};

export type EducationType = {
  id: number;
  institution: string;
  degree: string;
  period: string;
};

export type CertificationType = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
};

export type SkillType = {
  id: number;
  category: string;
  items: string[];
};

export type TechnologyType = {
  id: number;
  category: string;
  items: string[];
};

export type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export type NavItem = {
  id: string;
  label: string;
};