import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";

export default function WebdesignAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
    </div>
  );
}