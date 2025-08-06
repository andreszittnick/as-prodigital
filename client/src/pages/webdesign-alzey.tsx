import Navigation from "@/components/navigation";
import HeroSectionWebdesign from "@/components/hero-section-webdesign";
import WebdesignContentSection from "@/components/webdesign-content-section";
import Footer from "@/components/footer";

export default function WebdesignAlzey() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionWebdesign />
      <WebdesignContentSection />



      <Footer />
    </div>
  );
}