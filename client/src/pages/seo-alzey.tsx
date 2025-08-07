import Navigation from "@/components/navigation";
import HeroSectionSeo from "@/components/hero-section-seo";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";

export default function SeoAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionSeo />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
    </div>
  );
}