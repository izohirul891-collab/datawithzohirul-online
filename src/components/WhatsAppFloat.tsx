import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const WhatsAppFloat = () => {
  const whatsappLink = personalInfo.socialLinks.find((l) => l.icon === "whatsapp")?.url
    || `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      <span className="relative flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl shadow-[#25D366]/40">
        <MessageCircle size={22} strokeWidth={2.4} />
        <span className="hidden sm:inline font-semibold text-sm pr-1">
          Chat on WhatsApp
        </span>
      </span>

      {/* Tooltip on mobile */}
      <span className="sm:hidden absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with me
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;
