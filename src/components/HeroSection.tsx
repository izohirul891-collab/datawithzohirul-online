import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import iconCv from "@/assets/icon-cv.png";
import iconPortfolio from "@/assets/icon-portfolio.png";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import DownloadPortfolioDialog from "./DownloadPortfolioDialog";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background">
      {/* Scene 1: Background fade-in with gradient accent */}
      <motion.div
        className="absolute inset-0 -z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 1, x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1.5 } }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.15, 1], opacity: 1, x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1.5, delay: 0.3 } }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Scene 1: Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={14} />
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Scene 1: Name zoom-in */}
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            >
              Hello, I'm{" "}
              <span className="relative text-primary">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Scene 2: Typewriter tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground/80">
                <TypewriterText text={personalInfo.title} delay={1400} speed={45} />
              </p>
              <motion.p
                className="text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.8 }}
              >
                {personalInfo.tagline}
              </motion.p>
            </motion.div>

            {/* Scene 4: CTA Buttons bounce-in */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2, type: "spring", stiffness: 120, damping: 14 }}
            >
              <Button size="lg" asChild className="group bg-primary text-primary-foreground hover:bg-primary/85 shadow-lg shadow-primary/20 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-shadow">
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
              <Button size="lg" asChild className="border-2 border-border bg-transparent hover:bg-secondary text-foreground rounded-full font-semibold">
                <a href="#projects">
                  <ArrowDown size={18} />
                  View Projects
                </a>
              </Button>

              {/* Download buttons with bounce */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 3.6, type: "spring", stiffness: 200, damping: 12 }}
              >
                <Button size="lg" asChild variant="heroOutline" className="hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                  <a href="/cv.pdf" download>
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
                <span className="text-muted-foreground font-medium">or</span>
                <Button size="lg" variant="hero" onClick={() => setDownloadOpen(true)} className="hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                  <Download size={18} />
                  Download Portfolio
                </Button>
              </motion.div>

              {/* Quick Overview & Detailed Showcase cards */}
              <motion.div
                className="flex gap-12 pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4.0 }}
              >
                <a href="/cv.pdf" download className="group flex flex-col items-center gap-3 cursor-pointer">
                  <p className="font-display font-bold text-base text-foreground">Quick Overview</p>
                  <div className="w-28 h-28 rounded-2xl bg-secondary/60 border border-border p-3 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                    <img src={iconCv} alt="CV Document" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-primary underline underline-offset-4 font-medium">Download CV</span>
                </a>
                <div className="border-l border-dashed border-border" />
                <button onClick={() => setDownloadOpen(true)} className="group flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none">
                  <p className="font-display font-bold text-base text-foreground">Detailed Showcase</p>
                  <div className="w-28 h-28 rounded-2xl bg-secondary/60 border border-border p-3 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                    <img src={iconPortfolio} alt="Portfolio Book" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-primary underline underline-offset-4 font-medium">Detailed Portfolio</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Stats row - fade in last */}
            <motion.div
              className="flex gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.4 }}
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

          {/* Scene 3: Photo slide-in from right */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.0, type: "spring", stiffness: 60, damping: 15 }}
          >
            <div className="relative">
              {/* Decorative rotating ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ opacity: { duration: 0.5, delay: 1.5 }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
              />

              {/* Glow behind image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-110"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_60px_-15px_hsl(30,100%,50%,0.2)]">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Scene 6: HRM badge fade-in */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-card rounded-2xl px-5 py-3 shadow-xl border border-border"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4.2, type: "spring", stiffness: 150, damping: 12 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display font-bold text-2xl text-primary">HRM</p>
                <p className="text-xs text-muted-foreground">& Analytics</p>
              </motion.div>

              {/* Top-left floating dot */}
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.3, 1] }}
                transition={{ opacity: { duration: 0.3, delay: 1.8 }, scale: { duration: 2, repeat: Infinity, delay: 2 } }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <DownloadPortfolioDialog open={downloadOpen} onOpenChange={setDownloadOpen} />
    </section>
  );
};

export default HeroSection;
