// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================

export const personalInfo = {
  name: "MD. ZOHIRUL ISLAM",
  title: "Turning HR Data into Actionable Insights",
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
    "I am MD. Zohirul Islam, a Human Resource Management student passionate about Data Analytics and evidence-based HR decision-making. My journey focuses on transforming workforce data into actionable insights while building HR foundations.",
    "Currently pursuing my Bachelor's degree, I am expanding skills in data analysis and visualization to grow as a learner in this evolving field.",
  ],
};

export interface Skill {
  name: string;
  level?: number; // 0-100
}

export const hrSkills: Skill[] = [
  { name: "HR Analytics (Excel & Power BI)", level: 80 },
  { name: "Workforce Analytics", level: 75 },
  { name: "Recruitment Analytics", level: 70 },
  { name: "Employee Engagement Analytics", level: 65 },
  { name: "Attrition Analysis (Excel & Power BI)", level: 65 },
  { name: "Workforce Planning Analytics", level: 60 },
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
    description: "Problem: HR teams struggled with scattered employee metrics and manual reporting. Solution: Designed an interactive dashboard in Power BI and Excel to centralize attrition rates, recruitment funnels, and workforce demographics. Impact: Reduced reporting time by 40% and uncovered workforce trends that supported smarter HR planning.",
    tools: ["Power BI", "Excel", "Data Cleaning"],
    image: "project-hr",
  },
  {
    title: "Employee Attrition Analysis Dashboard",
    description: "Problem: High attrition rates across departments made it difficult to identify risk groups. Solution: Built a comprehensive HR analytics dashboard analyzing attrition patterns by income level, job role, department, age group, and tenure. Impact: Helped HR managers pinpoint vulnerable employee segments and design targeted retention strategies.",
    tools: ["Power BI", "Excel", "HR Analytics", "Data Visualization"],
    image: "project-hr-attrition",
  },
  {
    title: "Doughy Dreams Sales Dashboard",
    description: "Problem: Sales teams lacked visibility into product performance and regional revenue trends. Solution: Developed a sales analytics dashboard visualizing KPIs, revenue growth, product-wise performance, and location-based sales. Impact: Enabled faster decision-making, identified top-performing regions, and improved profit margin tracking by 15%.",
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
