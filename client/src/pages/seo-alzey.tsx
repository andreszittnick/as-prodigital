import Navigation from "@/components/navigation";
import HeroSectionSeoSimple from "@/components/hero-section-seo-simple";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function SeoAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionSeoSimple />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}