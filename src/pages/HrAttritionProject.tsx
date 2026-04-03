import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-hr-attrition.png";

const HrAttritionProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={18} /> Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              HR Analytics Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Employee Attrition Analysis Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={projectImage}
                alt="Employee Attrition Analysis Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                📌 This project uses a sample dataset created for data analysis and dashboard visualization purposes.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This interactive dashboard provides a comprehensive overview of employee attrition patterns 
                within an organization, helping uncover key drivers behind workforce turnover. It is designed 
                to help HR teams and decision-makers identify attrition patterns, improve employee retention 
                strategies, and make data-driven workforce decisions.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Employees", value: "2,924" },
                  { label: "Total Attrition", value: "492" },
                  { label: "Overtime Employees", value: "827" },
                  { label: "Male Attrition", value: "312" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Insights Covered</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Income-wise Attrition:</strong> Most attrition occurs among low-income employees, indicating a potential link between compensation and retention.</li>
                <li><strong>Job Role Analysis:</strong> Roles like Laboratory Technician, Sales Executive, and Research Scientist show higher attrition levels.</li>
                <li><strong>Department-wise Attrition:</strong> R&D and Sales departments contribute the most to employee turnover.</li>
                <li><strong>Age Group Trends:</strong> Employees aged 26–35 show the highest attrition, highlighting early to mid-career churn.</li>
                <li><strong>Distance from Home:</strong> Employees living farther away tend to leave more, suggesting commute impact.</li>
                <li><strong>Promotion Impact:</strong> Attrition is higher among employees who haven't received recent promotions.</li>
                <li><strong>Tenure Analysis:</strong> Most attrition happens within the early years of employment, emphasizing onboarding and engagement challenges.</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Interactive Filters</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Job Role", "Department", "Marital Status", "Performance Status"].map((filter) => (
                  <span key={filter} className="px-4 py-2 text-sm font-semibold rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
                    {filter}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Tools & Skills</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Data Visualization", "KPI Tracking", "Power BI", "Excel", "HR Analytics"].map((tool) => (
                  <span key={tool} className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HrAttritionProject;
