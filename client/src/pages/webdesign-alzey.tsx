import Navigation from "@/components/navigation";
import HeroSectionWebdesign from "@/components/hero-section-webdesign";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function WebdesignAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionWebdesign />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}