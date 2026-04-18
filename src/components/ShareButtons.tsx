import { Linkedin, Facebook, MessageCircle, Link2, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const { toast } = useToast();
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      color: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
      color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied!", description: "Share it anywhere you like." });
    } catch {
      toast({ title: "Couldn't copy link", variant: "destructive" });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-secondary/40 border border-border">
      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Share2 size={16} className="text-primary" />
        Share this project
      </span>
      <div className="flex items-center gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full bg-background border border-border text-muted-foreground transition-all duration-200 ${link.color}`}
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
        <motion.button
          onClick={handleCopy}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy link"
          className="p-2.5 rounded-full bg-background border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        >
          <Link2 size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default ShareButtons;
