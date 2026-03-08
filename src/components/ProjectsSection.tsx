import { projects } from "@/data/portfolioData";
import projectSales from "@/assets/project-sales.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectAgriculture from "@/assets/project-agriculture.jpg";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const imageMap: Record<string, string> = {
  "project-sales": projectSales,
  "project-hr": projectHr,
  "project-agriculture": projectAgriculture,
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={imageMap[project.image] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <ExternalLink size={14} />
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
