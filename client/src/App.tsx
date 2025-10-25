import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import WebdesignAlzey from "@/pages/webdesign-alzey";
import SeoAlzey from "@/pages/seo-alzey";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Leistungen" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/ueber-mich" component={About} />
      <Route path="/Kontakt" component={Contact} />
      <Route path="/Webdesign" component={WebdesignAlzey} />
      <Route path="/SEO" component={SeoAlzey} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
