import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/project-powerbi-sales-1.png";
import img2 from "@/assets/project-powerbi-sales-2.png";
import img3 from "@/assets/project-powerbi-sales-3.png";
import img4 from "@/assets/project-powerbi-sales-4.png";
import ShareButtons from "@/components/ShareButtons";
import { personalInfo } from "@/data/portfolioData";

const PowerBiSalesProject = () => {
  const images = [
    { src: img1, caption: "Executive Overview – KPIs & Monthly Comparisons" },
    { src: img2, caption: "Geographic Revenue Distribution" },
    { src: img3, caption: "Product & Subcategory Performance" },
    { src: img4, caption: "Customer-Level Sales Breakdown" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={18} /> Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              Power BI Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Power BI Sales Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-4 border border-border">
              <img src={images[0].src} alt="Power BI Sales Dashboard - Executive Overview" className="w-full h-auto object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is one of my practice projects where I worked with a sales dataset and tried to turn it into something meaningful using Power BI. The main goal was simple—take raw data and build a dashboard that clearly shows how the business is performing. I focused on keeping it clean, easy to understand, and interactive.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">What's Inside</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The dashboard includes overall metrics like total orders (25K), revenue ($24.9M), profit ($10.4M), cost, returns, and quantity sold. I also explored monthly trends to see how revenue and profit change over time. Beyond overall numbers, I looked into product categories to find the best performers, used customer data (gender and occupation) for deeper insight, and added a map view to understand sales across different regions.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Tools I Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Power BI", "DAX", "Data Cleaning", "Data Modeling"].map((tool) => (
                  <span key={tool} className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Dashboard Pages</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {images.slice(1).map((im, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border">
                    <img src={im.src} alt={im.caption} className="w-full h-auto object-cover" />
                    <p className="text-xs text-muted-foreground p-3 bg-card">{im.caption}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">What I Learned</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This project helped me understand how important it is to organize data properly before visualization. I also got more comfortable with building dashboards and thinking from a business perspective instead of just working with numbers.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Project Links</h2>
              <div className="flex flex-wrap gap-3 mb-8 not-prose">
                <Button asChild variant="heroOutline" className="rounded-full">
                  <a href="https://github.com/izohirul891-collab/Power-BI-Sales-Analysis-Project" target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub Repository
                  </a>
                </Button>
                <Button asChild variant="heroOutline" className="rounded-full">
                  <a href="https://izohirul891-collab.github.io/Power-BI-Sales-Analysis-Project/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live GitHub Page
                  </a>
                </Button>
              </div>
            </div>

            <div className="mb-8">
              <ShareButtons title="Power BI Sales Dashboard by MD. Zohirul Islam" />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border border-primary/20 p-6 md:p-8 text-center">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Need a Power BI dashboard like this?
              </h3>
              <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
                I build clean, interactive Power BI dashboards that turn raw data into clear business insights.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" className="rounded-full">
                  <Link to="/#contact"><Mail size={16} /> Hire Me</Link>
                </Button>
                <Button asChild variant="heroOutline" className="rounded-full">
                  <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PowerBiSalesProject;
