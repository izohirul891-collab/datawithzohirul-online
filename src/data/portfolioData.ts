// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================

export const personalInfo = {
  name: "MD. ZOHIRUL ISLAM",
  title: "HRM Student | Data Analytics Enthusiast",
  tagline: "Using data and HR knowledge to support smarter business decisions.",
  email: "izohirul891@gmail.com",
  email2: "mdzohirulislam3000@gmail.com",
  phone: "01306853224",
  socialLinks: [
    { name: "Facebook", url: "https://www.facebook.com/share/14V5ws9cPYG/?mibextid=wwXIfr", icon: "facebook" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/yourprofile", icon: "github" },
    { name: "WhatsApp", url: "https://wa.me/1306853224", icon: "whatsapp" },
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
  { name: "HR Analytics", level: 80 },
  { name: "Workforce Planning", level: 75 },
];

export const dataSkills: Skill[] = [
  { name: "Microsoft Excel", level: 90 },
  { name: "Power BI", level: 85 },
  { name: "Power Query", level: 80 },
  { name: "Data Analysis", level: 85 },
  { name: "Data Visualization", level: 85 },
  { name: "Basic SQL", level: 70 },
];

export interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "HR Data Analysis Dashboard",
    description: "Interactive dashboard analyzing employee metrics including attrition rates, recruitment funnels, and workforce demographics to optimize HR strategies.",
    tools: ["Power BI", "Excel", "Data Cleaning"],
    image: "project-hr",
  },
  {
    title: "Doughy Dreams Sales Dashboard",
    description: "Interactive sales analytics dashboard visualizing KPIs, revenue trends, product performance, location-based sales, payment methods, top buyers, and demographic breakdowns for data-driven business decisions.",
    tools: ["Data Cleaning", "Excel", "Data Visualization"],
    image: "project-doughy-dreams",
  },
  {
    title: "Urban Brew Co. Business Dashboard",
    description: "Comprehensive business intelligence dashboard for Urban Brew Co. featuring executive metrics, category insights, trend analysis, geographic revenue distribution, and profitability comparison across multiple dimensions.",
    tools: ["Data Cleaning", "Excel", "Data Visualization"],
    image: "project-urban-brew",
  },
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
];

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export const certifications: Certification[] = [];

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
