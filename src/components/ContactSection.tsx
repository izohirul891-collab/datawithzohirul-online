import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, Globe, Facebook, Linkedin, Github, Instagram, MessageCircle, Send, FileDown, Eye } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  website: Globe,
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[150px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Send size={14} />
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/25 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
              <Mail size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
              <p className="font-semibold text-sm truncate">{personalInfo.email}</p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${personalInfo.email2}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/25 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
              <Mail size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
              <p className="font-semibold text-sm truncate">{personalInfo.email2}</p>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${personalInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/25 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Phone</p>
              <p className="font-semibold text-lg">{personalInfo.phone}</p>
            </div>
          </motion.a>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/25 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-accent/20 text-accent">
              <Eye size={24} />
            </div>
            <div>
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Resume</p>
              <p className="font-semibold text-lg">View CV</p>
            </div>
          </motion.a>

          <motion.a
            href="/cv.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/25 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-accent/20 text-accent">
              <FileDown size={24} />
            </div>
            <div>
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Resume</p>
              <p className="font-semibold text-lg">Download CV</p>
            </div>
          </motion.a>
        </div>

        {personalInfo.socialLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center gap-4 mt-10"
          >
            {personalInfo.socialLinks.map((link, i) => {
              const Icon = iconMap[link.icon] || Globe;
              return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-xl bg-background/10 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
