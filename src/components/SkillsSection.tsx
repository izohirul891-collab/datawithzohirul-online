import { hrSkills, dataSkills, type Skill } from "@/data/portfolioData";
import { Briefcase, BarChart3 } from "lucide-react";

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-foreground">{skill.name}</span>
      <span className="text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          Skills
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          My Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* HR Skills */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">HR Skills</h3>
            </div>
            <div className="space-y-5">
              {hrSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* Data Analytics Skills */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Data Analytics Skills</h3>
            </div>
            <div className="space-y-5">
              {dataSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
