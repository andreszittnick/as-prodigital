import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyChooseSection from "@/components/why-choose-section";
import ProcessTimeline from "@/components/process-timeline";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhyChooseSection />
      <ProcessTimeline />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
