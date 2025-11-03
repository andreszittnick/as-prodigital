import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { CookieConsentProvider } from "@/hooks/use-cookie-consent";
import FloatingContactButtons from "@/components/floating-contact-buttons";
import CookieBanner from "@/components/cookie-banner";
import CookieSettingsModal from "@/components/cookie-settings-modal";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import WebdesignAlzey from "@/pages/webdesign-alzey";
import SeoAlzey from "@/pages/seo-alzey";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";
import AGB from "@/pages/agb";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactButtons />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Leistungen" component={Services} />
        <Route path="/ueber-mich" component={About} />
        <Route path="/Kontakt" component={Contact} />
        <Route path="/Webdesign" component={WebdesignAlzey} />
        <Route path="/SEO" component={SeoAlzey} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogDetail} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route path="/agb" component={AGB} />
        <Route component={NotFound} />
      </Switch>
      <CookieBanner />
      <CookieSettingsModal />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CookieConsentProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </CookieConsentProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
