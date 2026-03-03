import { IconLabelProps, SkillProps } from "@/interfaces";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
  SiNotion,
    SiChakraui,
  SiShadcnui,SiCss
} from "@icons-pack/react-simple-icons";
import { Claude, OpenAI } from "@lobehub/icons";


export const SKILLS: SkillProps[] = [
  {
    label: "Excel",
    icon: (
      <svg viewBox="0 0 24 24" fill="#217346" width="24" height="24">
        <path d="M21.17 1.5H8.83A1.83 1.83 0 0 0 7 3.33V6H2.83A1.83 1.83 0 0 0 1 7.83v8.34A1.83 1.83 0 0 0 2.83 18H7v2.67A1.83 1.83 0 0 0 8.83 22.5h12.34A1.83 1.83 0 0 0 23 20.67V3.33A1.83 1.83 0 0 0 21.17 1.5zM7 16H3V8h4zm5.57 1.5L10.5 14l-2 3.5H6.4l3-5-2.8-5h2.1l1.8 3.5 1.9-3.5H14.5l-2.9 5 3 5zM21 20.5H9V18h5.17A1.83 1.83 0 0 0 16 16.17V7.83A1.83 1.83 0 0 0 14.17 6H9V3.5h12z" />
      </svg>
    ),
  },
  {
    label: "Power BI",
    icon: (
      <svg viewBox="0 0 24 24" fill="#F2C811" width="24" height="25">
        <path d="M5 3h2v18H5zm4 4h2v14H9zm4-2h2v16h-2zm4 4h2v12h-2z" />
      </svg>
    ),
  },
  { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { label: "Python", icon: <SiPython />, color: "#3776AB" },
  { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { label: "SQL", icon: <SiMysql />, color: "#4479A1" },
  { label: "React.js", icon: <SiReact />, color: "#61DAFB" },
  {
    label: "Google Sheets",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
      </svg>
    ),
    color: "#34A853",
  },
  {
    label: "Google Slides",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M14.727 0v6h6L14.727 0zM4.91 0A1.636 1.636 0 0 0 3.273 1.636v20.728A1.636 1.636 0 0 0 4.91 24h14.18a1.636 1.636 0 0 0 1.636-1.636V6.5h-6V0H4.91zm1.635 9.818h10.91v7.91H6.545v-7.91zm1.637 1.637v4.637h7.636v-4.637H8.182z" />
      </svg>
    ),
    color: "#FBBC04",
  },
  {
    label: "Slack",
    icon: (
      <svg viewBox="0 0 60 60" width="24" height="24">
        <path
          d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
          fill="#36C5F0"
        />
        <path
          d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
          fill="#2EB67D"
        />
        <path
          d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
          fill="#ECB22E"
        />
        <path
          d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
          fill="#E01E5A"
        />
      </svg>
    ),
  },
  { label: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { label: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { label: "CSS3", icon: <SiCss />, color: "#1572B6" },
  { label: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { label: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { label: "Pandas", icon: <SiPandas />, color: "#150458" },

  { label: "Claude", icon: <Claude.Color size={24} /> },
  { label: "ChatGPT", icon: <OpenAI size={24} /> },
  { label: "NumPy", icon: <SiNumpy />, color: "#013243" },
  { label: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
  { label: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { label: "Git", icon: <SiGit />, color: "#F05032" },
  { label: "GitHub", icon: <SiGithub />, color: "#181717" },
  { label: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { label: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { label: "Chakra UI", icon: <SiChakraui />, color: "#319795" },
  { label: "shadcn/ui", icon: <SiShadcnui />, color: "#000000" },
  { label: "JIRA", icon: <SiJira />, color: "#0052CC" },
  { label: "Notion", icon: <SiNotion />, color: "#000000" },
];

export const CONTACTS: IconLabelProps[] = [
  {
    label: "Github",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        classlabel="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
    link: "https://github.com/Sire6715",
  },
  {
    label: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        classlabel="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
    link: "https://twitter.com/sire_reings",
  },
  {
    label: "Whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.244 1.606 6.109L.057 23.882a.5.5 0 0 0 .61.61l5.885-1.544A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.03-1.362l-.36-.214-3.733.979.999-3.645-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    link: "https://wa.me/+2347037600794",
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    link: "https://linkedin.com/in/",
  },
  {
    label: "Upwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
    link: "https://www.upwork.com/freelancers/~01e603b699e5574da2?mp_source=share",
  },
];

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

export const WORK_EXPERIENCE: TimelineItemProps[] = [
  {
    role: "Intern Data Analyst",
    company: "SchoolPhix",
    period: "Aug 2025 – Jan 2026",
    location: "Remote",
    bullets: [
      "Collaborated with product and engineering teams to analyze customer retention, onboarding efficiency, and churn patterns, producing weekly reports that informed product prioritization decisions.",
      "Developed analytics dashboards to track acquisition, feature usage, and revenue performance, reducing reporting time.",
      "Conducted behavioral analysis using login frequency, engagement metrics, and payment data to support a churn prediction model with ~78% accuracy.",
      "Supported the creation of technical reports and strategic recommendations, contributing to an improvement in platform onboarding completion rates.",
      "Contributed to feature planning initiatives including offline access modes and pricing optimization strategies.",
    ],
  },
  {
    role: "Intern Data Analyst",
    company: "Multisoft Consulting",
    period: "Dec 2023 – May 2024",
    location: "Rivers, Nigeria",
    bullets: [
      "Managed and queried databases using Microsoft SQL Server, supporting data retrieval, updates, and reporting tasks that reduced manual query time by 30%.",
      "Used Excel to clean, organize, and analyze datasets, improving data accuracy and reliability for team decision-making.",
      "Supported minor development and automation tasks using C#, contributing to internal tools and process improvements.",
      "Assisted with documentation, troubleshooting, and preparing basic reports for team leads.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AfriSplash",
    period: "Feb 2023 – Jun 2024",
    location: "Remote (Contract)",
    bullets: [
      "Developed and maintained web and mobile application features using React, TypeScript, and RESTful APIs, contributing to a reduction in page load time through component optimization.",
      "Implemented and tested platform functionality with senior developers, contributing to stable and user-friendly product releases.",
      "Translated Figma mockups into responsive interfaces using Tailwind CSS, improving UI consistency across devices.",
      "Collaborated in cross-functional teams to streamline development processes, contributing to faster delivery cycles.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Idealsyntax",
    period: "Jun 2022 – Mar 2023",
    location: "Remote (Contract)",
    bullets: [
      "Collaborated with the development team to design and implement new mobile application features for a music streaming platform, improving user engagement.",
      "Assisted with application testing, bug fixing, and documentation to improve software reliability and maintainability.",
    ],
  },
];

export const EDUCATION: TimelineItemProps[] = [
  {
    role: "B.Tech. Mathematics",
    company: "Federal University of Technology, Owerri",
    period: "Jan 2019 – Dec 2024",
    location: "Imo State, Nigeria",
    bullets: [
      ""
    ],
  },
];

export const CERTIFICATIONS = [
  {
    label: "Professional Foundation Certificate",
    issuer: "ALX",
    period: "15th April 2025",
    link: "https://intranet.alxswe.com/certificates/professional-foundation",
    description:
      "Collaborated with peers on group projects, practiced technical communication, managed deadlines, and applied problem-solving frameworks to real-life case studies and simulations.",
  },
  {
    label: "Prodev Frontend Certificate",
    issuer: "ALX",
    period: "22nd Aug 2025",
    link: "https://intranet.alxswe.com/certificates/prodev-frontend",
    description:
      "Built responsive web interfaces using React, JavaScript, and Tailwind CSS, implemented reusable components, optimized page performance, and collaborated through GitHub workflows.",
  },
  {
    label: "Data Analyst Certificate",
    issuer: "ALX",
    period: "28th Aug 2025",
    link: "https://intranet.alxswe.com/certificates/data-analyst",
    description:
      "Collected, cleaned, and analyzed large datasets using Python and SQL, created dashboards and reports, and translated raw data into actionable business insights.",
  },
  {
    label: "Python Learning Certificate",
    issuer: "ALX",
    period: "24th Nov 2025",
    link: "https://intranet.alxswe.com/certificates/python-learning",
    description:
      "Developed automation scripts, implemented data structures, handled files and APIs, and solved algorithmic problems using Python in practical project-based exercises.",
  },
  {
    label: "Data Literacy Certificate",
    issuer: "DataCamp",
    period: "Dec 2025",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/data-literacy",
    description:
      "Interpreted datasets, evaluated data quality, created data-driven narratives, and presented insights clearly to support informed decision-making.",
  },
  {
    label: "GitHub Foundations",
    issuer: "DataCamp",
    period: "Dec 2025",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/github-foundations",
    description:
      "Managed repositories, created feature branches, reviewed pull requests, resolved merge conflicts, and collaborated on shared codebases using GitHub best practices.",
  },
  {
    label: "B.Tech. Mathematics",
    issuer: "Federal University of Technology, Owerri",
    period: "Jan 2019 – Dec 2024",
    link: "Imo State, Nigeria",
    description:
      "Completed advanced coursework and projects in calculus, linear algebra, and statistics, applied mathematical modeling to real-world problems, and developed strong analytical reasoning skills.",
  },
];