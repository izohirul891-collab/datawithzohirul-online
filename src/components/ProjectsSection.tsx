import { projects } from "@/data/portfolioData";
import projectSales from "@/assets/project-sales.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectAgriculture from "@/assets/project-agriculture.jpg";

const imageMap: Record<string, string> = {
  "project-sales": projectSales,
  "project-hr": projectHr,
  "project-agriculture": projectAgriculture,
};

const ProjectsSection = () => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          Portfolio
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={imageMap[project.image] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
