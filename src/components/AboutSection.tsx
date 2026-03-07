import { aboutMe } from "@/data/portfolioData";
import { Target, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: Users, label: "HR Expertise", desc: "Deep understanding of HRM principles" },
  { icon: TrendingUp, label: "Data Analytics", desc: "Transforming data into actionable insights" },
  { icon: Target, label: "Problem Solver", desc: "Data-driven approach to HR challenges" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          About Me
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Designing Solutions, Not Just Visuals
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
