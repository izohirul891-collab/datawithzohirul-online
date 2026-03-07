import { education, certifications } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          Background
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                  <p className="text-sm text-primary font-medium">{edu.degree}</p>
                  {edu.department && (
                    <p className="text-sm text-muted-foreground">{edu.department}</p>
                  )}
                  {edu.year && (
                    <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Award size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-5 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-xl border-2 border-dashed border-border text-center">
                <p className="text-muted-foreground text-sm">
                  Certifications will be added here as they are earned.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
