import { aboutMe } from "@/data/portfolioData";
import { Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: TrendingUp, label: "Data Analytics Journey", desc: "Exploring insights for smarter HR decisions" },
  { icon: Users, label: "HR Foundations in Learning", desc: "Building knowledge of HRM principles" },
  { icon: Target, label: "Problem Solver in Progress", desc: "Applying analytics to HR challenges" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-alt relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Designing Solutions, Not Just Visuals
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutMe.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-base md:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="grid gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <item.icon size={26} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
