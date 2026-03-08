import { experiences } from "@/data/portfolioData";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-24 section-alt relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Work Experience
          </h2>
        </motion.div>

        {experiences.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-full" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary font-semibold">{exp.company}</p>
                    <span className="inline-block mt-1 px-3 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {exp.duration}
                    </span>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto p-12 rounded-2xl border-2 border-dashed border-border text-center"
          >
            <BriefcaseBusiness size={44} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              Work experience and internships will be showcased here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
