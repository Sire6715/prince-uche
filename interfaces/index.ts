export interface SectionBlockProps{
     title: string;
     body: string;
     title_style: string;
     body_style: string;
}

export interface IconLabelProps{
     icon: React.ReactElement;
     label: string;
     link: string;
}


export interface SkillProps {
  label: string;
  icon: React.ReactElement;
  color?: string;
}

export interface TimelineItemProps {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface CertificationProps {
  label: string;
  issuer: string;
  period: string;
  link: string;
}
