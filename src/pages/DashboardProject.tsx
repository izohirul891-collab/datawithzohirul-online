import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectSales from "@/assets/project-sales.jpg";

const DashboardProject = () => {
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
              Data Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Data Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={projectSales}
                alt="Data Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                An interactive data dashboard built with TypeScript and Chart.js for visualizing 
                business metrics, sales trends, and key performance indicators. Features dynamic 
                filtering, responsive charts, and real-time data updates.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["TypeScript", "Chart.js", "Power BI", "Excel", "Data Visualization"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Interactive charts with drill-down capabilities</li>
                <li>Dynamic data filtering and sorting</li>
                <li>KPI tracking with trend analysis</li>
                <li>Regional performance comparisons</li>
                <li>Export functionality for reports</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardProject;
