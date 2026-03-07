import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Hello, I'm{" "}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <p className="text-lg font-medium text-muted-foreground mb-2">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Get In Touch
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">
                  <ArrowDown size={18} />
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 absolute top-4 left-4 -z-10" />
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-display font-bold text-2xl text-primary">HRM</p>
                <p className="text-xs text-muted-foreground">& Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
