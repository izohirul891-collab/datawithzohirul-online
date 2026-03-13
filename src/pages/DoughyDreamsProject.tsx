import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-doughy-dreams.png";

const DoughyDreamsProject = () => {
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
              Data Analytics Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Doughy Dreams Sales Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={projectImage}
                alt="Doughy Dreams Sales Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Doughy Dreams Sales Dashboard is an interactive web application designed to visualize 
                and analyze company sales data. It provides a clear overview of performance metrics 
                through KPIs, charts, and graphs, helping stakeholders make informed business decisions.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Power BI", "Excel", "Data Visualization", "SQL"].map((tool) => (
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
                <li>KPI Cards: Total Sales, MOM Growth, Profit Margin, Total Orders, Quantity Sold</li>
                <li>Annual Revenue Trend: Track monthly revenue across the year</li>
                <li>Product Revenue Analysis: Identify top-performing products</li>
                <li>Location-Based Sales: Visualize sales distribution across U.S. states</li>
                <li>Payment Method Insights: Compare revenue by cash, credit, debit, and mobile payments</li>
                <li>Top Buyers & Salesperson Performance: Highlight key customers and sales team contributions</li>
                <li>Demographics: Revenue breakdown by age group and gender</li>
                <li>Price Group Analysis: Compare high-value vs low-value product performance</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Purpose</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This dashboard empowers management to quickly identify trends, evaluate product 
                performance, and measure the effectiveness of sales strategies. It transforms raw 
                data into actionable insights for smarter decision-making.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoughyDreamsProject;
