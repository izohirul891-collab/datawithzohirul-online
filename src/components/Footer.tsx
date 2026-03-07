import { personalInfo } from "@/data/portfolioData";

const Footer = () => (
  <footer className="py-6 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
