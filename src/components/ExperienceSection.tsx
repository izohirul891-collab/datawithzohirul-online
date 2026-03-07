import { experiences } from "@/data/portfolioData";
import { BriefcaseBusiness } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          Experience
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Work Experience
        </h2>

        {experiences.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto p-10 rounded-2xl border-2 border-dashed border-border text-center">
            <BriefcaseBusiness size={40} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground">
              Work experience and internships will be showcased here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
