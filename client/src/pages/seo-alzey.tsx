import Navigation from "@/components/navigation";
import HeroSectionSEO from "@/components/hero-section-seo";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionSEO from "@/components/contact-section-seo";
import Footer from "@/components/footer";

export default function SeoAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionSEO />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionSEO />

      <Footer />
    </div>
  );
}