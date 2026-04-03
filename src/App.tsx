import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioProject from "./pages/PortfolioProject";
import DashboardProject from "./pages/DashboardProject";
import DoughyDreamsProject from "./pages/DoughyDreamsProject";
import UrbanBrewProject from "./pages/UrbanBrewProject";
import HrAttritionProject from "./pages/HrAttritionProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/portfolio" element={<PortfolioProject />} />
          <Route path="/projects/dashboard" element={<DashboardProject />} />
          <Route path="/projects/doughy-dreams" element={<DoughyDreamsProject />} />
          <Route path="/projects/urban-brew" element={<UrbanBrewProject />} />
          <Route path="/projects/hr-attrition" element={<HrAttritionProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
