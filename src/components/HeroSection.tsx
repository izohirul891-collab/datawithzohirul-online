import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden hero-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-0">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={14} />
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I am{" "}
              <span className="relative">
                {personalInfo.name.toUpperCase()}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-white/40"
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
              <p className="text-lg md:text-xl font-semibold text-white/90">
                {personalInfo.title}
              </p>
              <p className="text-white/70 max-w-lg leading-relaxed text-base md:text-lg">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild className="group bg-white text-primary hover:bg-white/90 shadow-lg rounded-full font-semibold">
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
              <Button size="lg" asChild className="border-2 border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full font-semibold">
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
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</p>
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
                className="absolute -inset-4 rounded-full border-2 border-dashed border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-white/25 shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-5 py-3 shadow-xl"
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
                className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white shadow-lg shadow-white/40"
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
