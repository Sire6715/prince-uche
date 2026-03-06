import {
  IconLabelProps,
  SkillProps,
  TimelineItemProps,
  CertificationProps,
  ProjectProps,
} from "@/interfaces";
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
  SiStreamlit,
  SiShadcnui,
  SiCss,
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
  { label: "Streamlit", icon: <SiStreamlit />, color: "#FF4B4B" },
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
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
    ],
  },
  {
    role: "Intern Data Analyst",
    company: "Multisoft Consulting",
    period: "Dec 2023 – May 2024",
    location: "Rivers, Nigeria",
    bullets: [
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

// export const EDUCATION: TimelineItemProps[] = [
//   {
//     role: "B.Tech. Mathematics",
//     company: "Federal University of Technology, Owerri",
//     period: "Jan 2019 – Dec 2024",
//     location: "Imo State, Nigeria",
//     bullets: [""],
//   },
// ];

export const CERTIFICATIONS: CertificationProps[] = [
  {
    label: "Professional Foundation Certificate",
    issuer: "ALX",
    period: "15th April 2025",
    link: "https://savanna.alxafrica.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMElTSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--85b66099f998506f937502094c840d374727c264/89-professional-foundations-certificate-prince-uche.png",
    description:
      "Collaborated with peers on group projects, practiced technical communication, managed deadlines, and applied problem-solving frameworks to real-life case studies and simulations.",
  },
  {
    label: "Prodev Frontend Certificate",
    issuer: "ALX",
    period: "22nd Aug 2025",
    link: "https://www.alxafrica.com/",
    description:
      "Built responsive web interfaces using React, JavaScript, and Tailwind CSS, implemented reusable components, optimized page performance, and collaborated through GitHub workflows.",
  },
  {
    label: "Data Analyst Certificate",
    issuer: "ALX",
    period: "",
    link: "https://alx-intranet-active-storage-production.s3.amazonaws.com/75hkhfc65uo9patvnqs09as5xogn?response-content-disposition=inline%3B%20filename%3D%2251-data-analytics-certificate-prince-uche.png%22%3B%20filename%2A%3DUTF-8%27%2751-data-analytics-certificate-prince-uche.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20260224%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260224T161808Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2d3ea675dd4feb7742d46194dce3a87e4c58f28b1bfbc05dc14e0c40bf46b147",
    description:
      "Collected, cleaned, and analyzed large datasets using Python and SQL, created dashboards and reports, and translated raw data into actionable business insights.",
  },
  {
    label: "Python Learning Certificate",
    issuer: "ALX",
    period: "",
    link: "https://savanna.alxafrica.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNytqTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4f669e09b72d3170f4a94e9217348313cb4b9b16/189-python-programming-certificate-prince-uche.png",
    description:
      "Developed automation scripts, implemented data structures, handled files and APIs, and solved algorithmic problems using Python in practical project-based exercises.",
  },
  {
    label: "Data Literacy Certificate",
    issuer: "DataCamp",
    period: "",
    link: "https://www.datacamp.com/skill-verification/DL0034948978061",
    description:
      "Interpreted datasets, evaluated data quality, created data-driven narratives, and presented insights clearly to support informed decision-making.",
  },
  {
    label: "GitHub Foundations",
    issuer: "DataCamp",
    period: "",
    link: "https://education.github.com/experiences/foundations_certificate",
    description:
      "Managed repositories, created feature branches, reviewed pull requests, resolved merge conflicts, and collaborated on shared codebases using GitHub best practices.",
  },
  {
    label: "Bachelor Of Technology In Mathematics",
    issuer: "Federal University of Technology, Owerri",
    period: "| Jan 2019 – Dec 2024",
    link: "Imo State, Nigeria",
    description:
      "Completed advanced coursework and projects in calculus, linear algebra, and statistics, applied mathematical modeling to real-world problems, and developed strong analytical reasoning skills.",
  },
];

export const PROJECTS: ProjectProps[] = [
  {
    title: "Job Board",
    repo: "https://github.com/Sire6715/Interactive-Job-Board-Platform",
    live: "https://job-board-ebon-eta.vercel.app/",
    image: "/assets/images/Projects/JobBoard.png",
    category: "Web",
    description: "An online job boarding platform.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "React",
      "Framer Motion",
      "React Context API",
      "Vercel",
    ],
    features: [
      "Filter by jobs, location and level",
      "Search for jobs, location and level",
      "API integration for live jobs (static dataset as backup if call fails)",
      "Form for sending job applications",
    ],
  },
  {
    title: "Personal Portfolio",
    repo: "https://github.com/Sire6715/prince-uche",
    live: "https://prince-uche.vercel.app/",
    image: "/assets/images/Projects/portfolio.png",
    category: "Web",
    description:
      "My personal portfolio site built with Next.js, showcasing my projects and identity as a developer.",
    technologies: ["Next.js", "TypeScript", "CSS"],
    features: [
      "Home page, resume section, and links to projects",
      "Responsive portfolio layout for professional presentation",
    ],
  },
  {
    title: "Maji Ndogo",
    repo: "https://github.com/Sire6715/Maji-Ndogo-",
    live: "",
    image: "/assets/images/Projects/Maji_ndogo.png",
    category: "Data",
    description:
      "A comprehensive Power BI data analysis project examining water access, quality, safety, and improvement planning across the five provinces of Maji Ndogo.",
    technologies: ["Power BI", "DAX", "SQL"],
    features: [
      "Population distribution and water source types",
      "Queue times and gender dynamics at water collection points",
      "Water quality and contamination testing results",
      "Crime and safety data around water collection",
      "Province-level infrastructure improvement plans and budget allocation",
    ],
  },
  {
    title: "EA Sports FC 25 Dashboard",
    repo: "https://github.com/Sire6715/EA-SPORTS-FC-25-Player-Performance-Dashboard",
    live: "https://ea-sports-fc-25-player-performance-dashboard.streamlit.app/",
    image: "/assets/images/Projects/EA_SPORTS_FC_25_PLAYER.png",
    category: ["Web", "Data"],
    description:
      "An interactive football analytics dashboard that analyzes player data from the EA SPORTS FC 25 database, allowing users to explore, compare, and scout players based on performance metrics.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
    features: [
      "Filter and sort players by league, team, nationality, position, and attributes",
      "Compare two players side-by-side using visual charts",
      "Identify young talents (≤ 25 years) ranked by a custom Potential Index",
      "Dynamic and responsive charts built with Plotly",
    ],
  },
  {
    title: "Room Listing App",
    repo: "https://github.com/Sire6715/room-homepage",
    live: "https://room-homepag3.netlify.app/",
    image: "/assets/images/Projects/room_homepage.jpg",
    category: "Web",
    description:
      "A modern responsive furniture showcase homepage built with React and Tailwind CSS, designed to display room scenes and furniture products with interactive visuals and smooth navigation.",
    technologies: ["React", "Tailwind CSS", "PostCSS", "Autoprefixer"],
    features: [
      "Hero carousel with interactive image slides showing furniture and room setups",
      "Responsive layout that adjusts smoothly for mobile, tablet, and desktop screens",
      "Navigation bar with smooth scrolling between page sections",
      "About section explaining the design concepts and collection details",
      "Clean minimalist UI focused on visual impact and simplicity",
    ],
  },
  {
    title: "Easy Bank",
    repo: "https://github.com/Sire6715/easy-bank-landing-page",
    live: "https://3asy-bank.netlify.app/",
    image: "/assets/images/Projects/digitalbank_landing_page.jpg",
    category: "Web",
    description:
      "A responsive landing page for a digital banking service built as a Frontend Mentor challenge, designed to match the Easybank design and showcase key features of the bank.",
    technologies: ["HTML", "CSS", "Netlify"],
    features: [
      "Hero section introducing the bank with a call-to-action button",
      "Responsive layout that adapts for mobile, tablet, and desktop screen sizes",
      "Navigation menu with mobile toggle interaction via JavaScript",
      "Sections describing banking features: Online Banking, Budgeting, Fast Onboarding, and Open API",
      "Featured articles section with preview cards showcasing recent updates",
      "Hover states and interactive UI elements for buttons and links",
    ],
  },
  {
    title: "Dynamic Themed Calculator App",
    repo: "https://github.com/Sire6715/calculator",
    live: "https://calculator-app67.netlify.app/",
    image: "/assets/images/Projects/calculator_app_main.jpg",
    category: "Web",
    description:
      "A dynamic themed calculator app built as a frontend challenge, letting users perform basic arithmetic operations with responsive design and theme customization.",
    technologies: ["React", "Tailwind CSS", "React Context API", "Netlify"],
    features: [
      "Responsive layout that adjusts based on screen size for mobile, tablet, and desktop",
      "Basic mathematical operations: addition, subtraction, multiplication, and division",
      "Dynamic theme support allowing users to change color themes manually",
      "Initial theme preference detected via system prefers-color-scheme and saved in the browser",
    ],
  },
  {
    title: "E-Commerce Product Page",
    repo: "https://github.com/Sire6715/E-commerce-product-page",
    live: "https://ecommerce-product-page671.netlify.app/",
    image: "/assets/images/Projects/ecommerce_product_page.jpg",
    category: "Web",
    description:
      "A responsive e-commerce product details page built with React that lets users view product images, add items to a shopping cart, and interact with UI elements in a polished frontend layout.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "React Context API"],
    features: [
      "Responsive product page layout for mobile and desktop screens (mobile-first design)",
      "Image gallery with thumbnail navigation and lightbox-style image viewing",
      "Add item(s) to cart with interactive cart display",
      "Switching between product images by clicking thumbnails or arrows",
      "Cart view where users can see items added and remove them",
    ],
  },
  {
    title: "Random Advice Generator",
    repo: "https://github.com/Sire6715/ad-gen",
    live: "https://ad-gen.netlify.app/",
    image: "/assets/images/Projects/advice_generator_app.jpg",
    category: "Web",
    description:
      "A random advice generator app that generates quotes/advice on click.",
    technologies: ["React", "Tailwind CSS", "API Integration", "Netlify"],
    features: [],
  },
  {
    title: "IP Address Tracker",
    repo: "https://github.com/Sire6715/ip-address-tracker-master",
    live: "https://ip-address-tracker-master-lovat.vercel.app/",
    image: "/assets/images/Projects/ip-address_tracker_master.jpg",
    category: "Web",
    description:
      "A responsive IP address tracker web app that lets users view geolocation information for their own or any entered IP/domain and displays the result on a map with key metadata.",
    technologies: [
      "React",
      "JavaScript",
      "Axios",
      "Tailwind CSS",
      "Leaflet",
      "API Integration",
      "Vercel",
    ],
    features: [
      "Displays geolocation details for the user's current public IP address on initial load",
      "Allows searching for any IP address or domain with updated information",
      "Shows location, city, region, country, postal code, and timezone via geo.ipify.org",
      "Interactive map component that marks the geolocation visually",
      "Responsive UI with API integration built as a Frontend Mentor challenge",
    ],
  },
  {
    title: "Marketing Calls Dashboard",
    repo: "",
    live: "https://docs.google.com/spreadsheets/d/1WJWfjE35mhv0TCbpjaoJToprhMK1jv05Ppk1N5EKU_A/edit?usp=sharing",
    image: "/assets/images/Projects/Marketing_Calls_dashboard.png",
    category: "Data",
    description:
      "A dynamic Google Sheets dashboard analysing marketing call outcomes across programmes, filterable by date range and programme type.",
    technologies: ["Google Sheets"],
    features: [
      "Filter by programme, start date, and end date via dropdown controls",
      "Commitment rate KPI — e.g. 32% of prospects showed commitment",
      "Unanswered call breakdown tracking ringing, not available, switched off, dropped, and invalid numbers",
      "Negative feedback theme analysis identifying top deterrents like Technical Difficulty and No Longer Interested",
      "Dynamic bar charts that update based on selected filters",
    ],
  },
  {
    title: "Hospital Records Dashboard",
    repo: "",
    live: "https://docs.google.com/spreadsheets/d/19F1cyadfPDBamDBbIJftg2UqYI9RHt0w3u0c-NfRwpo/edit?usp=sharing",
    image: "/assets/images/Projects/Hospital_Records.png",
    category: "Data",
    description:
      "A dynamic Google Sheets dashboard providing a per-doctor surgical performance summary, including procedure breakdowns, case complexity, referral types, and key clinical metrics.",
    technologies: ["Google Sheets"],
    features: [
      "Doctor-level filter via dropdown to switch between surgeons",
      "Auto-generated narrative summary of the selected doctor's activity and case profile",
      "Key metrics: mortality rate, average patient age, avg. time to surgery, avg. length of stay",
      "Procedure frequency table listing all operation types and counts",
      "Case complexity breakdown across Routine, Moderate, High-Risk, Complex, and Critical",
      "Referral type distribution covering Urgent, Elective, Emergency, and inter-hospital referrals",
    ],
  },
];
