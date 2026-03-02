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

// interfaces/index.ts
export interface SkillProps {
  label: string;
  icon: React.ReactElement;
  color?: string;
}
