import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={14} />
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello, I'm{" "}
              <span className="text-gradient relative">
                {personalInfo.name}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-primary/40"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground/80">
                {personalInfo.title}
              </p>
              <p className="text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#contact">
                  <Mail size={18} />
                  Get In Touch
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">
                  <ArrowDown size={18} />
                  View Projects
                </a>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "6+", label: "Skills" },
                { value: "HRM", label: "Focused" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl scale-110" />

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display font-bold text-2xl text-primary">HRM</p>
                <p className="text-xs text-muted-foreground">& Analytics</p>
              </motion.div>

              {/* Top-left floating dot */}
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
