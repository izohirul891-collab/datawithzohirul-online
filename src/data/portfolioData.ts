// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================

export const personalInfo = {
  name: "MD. Zohirul Islam",
  title: "HRM Student | Data Analytics Enthusiast",
  tagline: "Using data and HR knowledge to support smarter business decisions.",
  email: "izohirul891@gmail.com",
  phone: "01306853224",
  socialLinks: [
    // Add your social links here:
    // { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    // { name: "GitHub", url: "https://github.com/yourprofile", icon: "github" },
  ] as { name: string; url: string; icon: string }[],
};

export const aboutMe = {
  paragraphs: [
    "I am MD. Zohirul Islam, a dedicated Human Resource Management student at Islamic University, Bangladesh, with a strong passion for HR analytics and data-driven decision making.",
    "I combine HR expertise with data analytics skills to uncover insights that drive smarter workforce strategies. My goal is to bridge the gap between traditional HR practices and modern analytics to support evidence-based business decisions.",
    "Currently pursuing my Bachelor's degree, I am constantly expanding my skills in data analysis, visualization, and HR technology to prepare for a career at the intersection of people management and data science.",
  ],
};

export interface Skill {
  name: string;
  level?: number; // 0-100
}

export const hrSkills: Skill[] = [
  { name: "Human Resource Management", level: 90 },
  { name: "Recruitment & Selection", level: 85 },
  { name: "Organizational Behavior", level: 80 },
  { name: "Workforce Planning", level: 75 },
  // Add more HR skills here
];

export const dataSkills: Skill[] = [
  { name: "Microsoft Excel", level: 90 },
  { name: "Power BI", level: 80 },
  { name: "Data Analysis", level: 85 },
  { name: "Data Cleaning", level: 80 },
  { name: "Data Visualization", level: 85 },
  { name: "Basic SQL", level: 70 },
  // Add more data skills here
];

export interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "Sales Data Analysis Dashboard",
    description: "Comprehensive sales analytics dashboard analyzing revenue trends, regional performance, and key business KPIs using interactive visualizations.",
    tools: ["Power BI", "Excel", "SQL"],
    image: "project-sales",
  },
  {
    title: "HR Data Analysis",
    description: "In-depth analysis of employee metrics including attrition rates, recruitment funnels, and workforce demographics to optimize HR strategies.",
    tools: ["Power BI", "Excel", "Data Cleaning"],
    image: "project-hr",
  },
  {
    title: "Agriculture Data Analysis",
    description: "Data-driven analysis of agricultural trends, crop yields, and weather patterns to support informed farming decisions.",
    tools: ["Excel", "Power BI", "Data Visualization"],
    image: "project-agriculture",
  },
  // Add more projects here
];

export interface Education {
  institution: string;
  degree: string;
  department?: string;
  year?: string;
}

export const education: Education[] = [
  {
    institution: "Islamic University, Bangladesh",
    degree: "Bachelor's Degree",
    department: "Human Resource Management",
    year: "Currently Pursuing",
  },
  // Add more education entries here
];

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export const certifications: Certification[] = [
  // Add certifications here, e.g.:
  // { name: "Google Data Analytics", issuer: "Google", date: "2024", link: "https://..." },
];

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  // Add experiences here, e.g.:
  // { title: "HR Intern", company: "ABC Corp", duration: "Jan 2024 - Present", description: "..." },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
