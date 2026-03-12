import { projects } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import projectSales from "@/assets/project-sales.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectAgriculture from "@/assets/project-agriculture.jpg";
import { motion } from "framer-motion";

const imageMap: Record<string, string> = {
  "project-sales": projectSales,
  "project-hr": projectHr,
  "project-agriculture": projectAgriculture,
};

const linkMap: Record<string, string> = {
  "HR Data Analysis Dashboard": "/projects/portfolio",
  "Excel Data Analysis Project": "/projects/dashboard",
  "Business Data Insights": "/projects/portfolio",
};

const ProjectsSection = () => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 section-alt relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              link={linkMap[project.title] || "/"}
              image={imageMap[project.image] || "/placeholder.svg"}
              tools={project.tools}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
