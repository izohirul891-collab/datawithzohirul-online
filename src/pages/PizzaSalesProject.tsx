import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/project-pizza-sales-1.png";
import img2 from "@/assets/project-pizza-sales-2.png";
import ShareButtons from "@/components/ShareButtons";
import { personalInfo } from "@/data/portfolioData";

const PizzaSalesProject = () => {
  const images = [
    { src: img1, caption: "Home – KPIs, Daily & Monthly Trends, Category & Size Insights" },
    { src: img2, caption: "Best & Worst – Top 5 and Bottom 5 Sellers Analysis" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={18} /> Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              Excel & Power BI Project
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Pizza Sales Analysis Dashboard
            </h1>

            <div className="rounded-2xl overflow-hidden mb-4 border border-border">
              <img src={images[0].src} alt="Pizza Sales Dashboard - Home" className="w-full h-auto object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Completed a Pizza Sales Analysis project where I transformed raw sales data into an interactive dashboard to generate meaningful business insights. I cleaned and prepared the dataset by removing errors and duplicates to make it analysis-ready. I also created a Calendar Table using the order date — including Year, Month, Month Name, Start of Month, Start of Week, Day Name, and Day of Week — for time-based analysis.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Highlights</h2>
              <ul className="text-muted-foreground mb-6 leading-relaxed list-disc pl-6 space-y-1">
                <li>Total Revenue: <strong>817.86K</strong></li>
                <li>Total Orders: <strong>21K</strong></li>
                <li>Total Pizzas Sold: <strong>50K</strong></li>
                <li>Average Order Value: <strong>37.56</strong></li>
                <li>Average Pizzas per Order: <strong>2.32</strong></li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Dashboard Insights</h2>
              <ul className="text-muted-foreground mb-6 leading-relaxed list-disc pl-6 space-y-1">
                <li>Friday recorded the highest number of orders</li>
                <li>July was the best-performing month with 1,935 orders</li>
                <li>Classic category generated the highest sales (30%)</li>
                <li>Large-size pizzas were the most preferred size (38%)</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">What's Inside</h2>
              <ul className="text-muted-foreground mb-6 leading-relaxed list-disc pl-6 space-y-1">
                <li>Sales Trend Analysis</li>
                <li>Category-wise & Size-wise Performance</li>
                <li>Top 5 Best Sellers Analysis</li>
                <li>Bottom 5 Best Sellers Analysis</li>
                <li>Interactive KPI Dashboard</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Tools Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Excel", "Power BI", "DAX", "Data Modeling", "Data Cleaning"].map((tool) => (
                  <span key={tool} className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">Dashboard Pages</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {images.map((im, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border">
                    <img src={im.src} alt={im.caption} className="w-full h-auto object-cover" />
                    <p className="text-xs text-muted-foreground p-3 bg-card">{im.caption}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mb-4">What I Learned</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through this project, I improved my skills in data cleaning, data modeling, DAX calculations, calendar table creation, and dashboard design. I also learned how proper data visualization helps identify customer behavior, sales trends, and business performance more effectively.
              </p>
            </div>

            <div className="mb-8">
              <ShareButtons title="Pizza Sales Analysis Dashboard by MD. Zohirul Islam" />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border border-primary/20 p-6 md:p-8 text-center">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Need a dashboard like this?
              </h3>
              <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
                I build clean, interactive Excel & Power BI dashboards that turn raw data into clear business insights.
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

export default PizzaSalesProject;
