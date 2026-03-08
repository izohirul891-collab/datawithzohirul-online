import { hrSkills, dataSkills, type Skill } from "@/data/portfolioData";
import { Briefcase, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    className="space-y-2"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <div className="flex justify-between text-sm">
      <span className="font-medium text-foreground">{skill.name}</span>
      <span className="text-muted-foreground font-semibold">{skill.level}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            My Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* HR Skills */}
          <motion.div
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">HR Skills</h3>
            </div>
            <div className="space-y-6">
              {hrSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Data Analytics Skills */}
          <motion.div
            className="p-8 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                <BarChart3 size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Data Analytics Skills</h3>
            </div>
            <div className="space-y-6">
              {dataSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
