import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, Github, Linkedin, Globe, Facebook, Instagram, MessageCircle, Send, FileDown, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAIL_ACCOUNTS = [
  {
    serviceId: "service_vcf8rfh",
    templateId: "template_zhje5u8",
    publicKey: "tpfj_92kWXKz04Uo2",
  },
  {
    serviceId: "service_3ynw23f",
    templateId: "template_0orbgp6",
    publicKey: "7C8eoxRe1yEc-ZHjE",
  },
];

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  website: Globe,
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };
    let sent = false;
    for (const account of EMAIL_ACCOUNTS) {
      try {
        await emailjs.send(account.serviceId, account.templateId, templateParams, account.publicKey);
        sent = true;
        break;
      } catch (error) {
        console.error("EmailJS error with account:", account.serviceId, error);
      }
    }
    if (sent) {
      toast({ title: "Message sent!", description: "Thank you for reaching out." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    }
    setSending(false);
  };

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
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 p-6 md:p-8 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="bg-card text-card-foreground border-border placeholder:text-muted-foreground focus:border-primary rounded-[5px] px-2.5 py-2.5"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email"
                className="bg-card text-card-foreground border-border placeholder:text-muted-foreground focus:border-primary rounded-[5px] px-2.5 py-2.5"
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Subject</label>
              <Input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Subject"
                className="bg-card text-card-foreground border-border placeholder:text-muted-foreground focus:border-primary rounded-[5px] px-2.5 py-2.5"
                maxLength={200}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message"
                rows={5}
                className="bg-card text-card-foreground border-border placeholder:text-muted-foreground focus:border-primary rounded-[5px] px-2.5 py-2.5 resize-none"
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl font-semibold text-base py-5"
              variant="hero"
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 flex flex-col justify-center"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
                <p className="font-semibold text-lg">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.email2}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
                <p className="font-semibold text-lg">{personalInfo.email2}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Phone</p>
                <p className="font-semibold text-lg">{personalInfo.phone}</p>
              </div>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
                <Eye size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Resume</p>
                <p className="font-semibold text-lg">View CV</p>
              </div>
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-primary/20 text-primary">
                <FileDown size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Resume</p>
                <p className="font-semibold text-lg">Download CV</p>
              </div>
            </a>

            {personalInfo.socialLinks.length > 0 && (
              <div className="flex justify-center gap-4 pt-4">
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
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;