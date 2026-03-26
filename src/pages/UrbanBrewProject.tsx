import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-urban-brew.png";

const UrbanBrewProject = () => {
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
              Business Intelligence Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Urban Brew Co. Business Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={projectImage}
                alt="Urban Brew Co. Business Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This interactive business intelligence dashboard provides a comprehensive overview of 
                Urban Brew Co.'s performance across multiple dimensions. Designed with a clean and modern 
                interface, it enables dynamic analysis through filters for year, city, and month, making 
                data exploration intuitive and actionable.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Data Cleaning", "Excel", "Data Visualization"].map((tool) => (
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
                <li>Executive Metrics: Total transactions, quantity sold, revenue, profit, and cost at a glance</li>
                <li>Category Insights: Product categories including coffee, tea, snacks, sandwiches, desserts, cold drinks, and specialty beverages</li>
                <li>Weekly Transaction Trends: Day-wise transaction patterns analysis</li>
                <li>Monthly Sales Trend: Performance tracking across the calendar year</li>
                <li>Year-over-Year Revenue Comparison: Strategic growth tracking across 2021-2023</li>
                <li>Geographic Insights: City-wise revenue distribution across Seattle, New York, Los Angeles, Chicago, and Austin</li>
                <li>Revenue vs Profit Comparison: Clear visualization by product category</li>
                <li>Interactive Filters: Dynamic filtering by year, city, and month</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Design Highlights</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The dashboard features a modern, user-friendly UI with interactive filters, enabling 
                data-driven storytelling through charts and graphs. It delivers actionable insights 
                for decision-making and performance optimization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UrbanBrewProject;
