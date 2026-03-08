import { personalInfo } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <motion.div
      className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <a href="#home" className="font-display text-lg font-bold text-foreground">
        {personalInfo.name.split(" ").pop()}
        <span className="text-primary">.</span>
      </a>
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        © {new Date().getFullYear()} {personalInfo.name}. Made with
        <Heart size={14} className="text-primary fill-primary" />
      </p>
    </motion.div>
  </footer>
);

export default Footer;
