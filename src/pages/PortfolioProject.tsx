import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectHr from "@/assets/project-hr.jpg";

const PortfolioProject = () => {
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
              Portfolio Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Portfolio Website
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={projectHr}
                alt="Portfolio Website"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A modern, responsive portfolio website built with React, TypeScript, and Vite. 
                This project showcases my skills, projects, and experience with a clean, 
                professional design featuring smooth animations and an intuitive user interface.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map((tool) => (
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
                <li>Responsive design that works on all devices</li>
                <li>Smooth scroll animations with Framer Motion</li>
                <li>Contact form with EmailJS integration</li>
                <li>Dark/light mode ready design system</li>
                <li>SEO optimized with proper meta tags</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioProject;
