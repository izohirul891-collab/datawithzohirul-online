import { education, certifications } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Background
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-full" />
                  <div className="pl-4">
                    <h4 className="font-display font-bold text-foreground">{edu.institution}</h4>
                    <p className="text-sm text-primary font-semibold mt-1">{edu.degree}</p>
                    {edu.department && (
                      <p className="text-sm text-muted-foreground">{edu.department}</p>
                    )}
                    {edu.year && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {edu.year}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                <Award size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
            </div>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-full" />
                    <div className="pl-4">
                      <h4 className="font-display font-bold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-accent font-semibold mt-1">{cert.issuer}</p>
                      {cert.date && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          {cert.date}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl border-2 border-dashed border-border text-center">
                <Award size={40} className="mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-sm">
                  Certifications will be added here as they are earned.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
