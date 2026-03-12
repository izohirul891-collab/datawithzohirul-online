import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  tools?: string[];
  index?: number;
};

export function ProjectCard({ title, description, link, image, tools = [], index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
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
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool, j) => (
              <span
                key={j}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View Project <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
