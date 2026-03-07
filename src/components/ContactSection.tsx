import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  website: Globe,
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase text-center mb-2">
          Contact
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Let's Work Together
        </h2>

        <div className="max-w-xl mx-auto space-y-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary/20 text-primary">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-background/60 uppercase tracking-wider">Email</p>
              <p className="font-medium">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary/20 text-primary">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs text-background/60 uppercase tracking-wider">Phone</p>
              <p className="font-medium">{personalInfo.phone}</p>
            </div>
          </a>

          {personalInfo.socialLinks.length > 0 && (
            <div className="flex justify-center gap-4 pt-4">
              {personalInfo.socialLinks.map((link, i) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background/10 hover:bg-primary/20 text-background/80 hover:text-primary transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
