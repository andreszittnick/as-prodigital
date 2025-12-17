import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import HeroSectionWebdesign from "@/components/hero-section-webdesign";
import WebdesignContentSection from "@/components/webdesign-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";

export default function WebdesignAlzey() {

  return (
    <>
      <Helmet>
        <title>Webdesign Alzey - Moderne Websites | AS-ProDigital</title>
        <meta name="description" content="Professionelles Webdesign aus Alzey: Responsive, schnell & SEO-optimiert. Individuelle Websites, die Ihre Kunden begeistern. ✓ Kostenlose Beratung ✓ Fair & Transparent" />
        <meta name="keywords" content="Webdesign Alzey, Webentwicklung Alzey, Website erstellen Alzey, responsive Design, WordPress Alzey" />
        <link rel="canonical" href="https://www.asprodigital.de/webdesign" />
        
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.asprodigital.de/webdesign" />
        <meta property="og:title" content="Professionelles Webdesign Alzey - AS-ProDigital" />
        <meta property="og:description" content="Moderne, responsive Websites für Ihr Unternehmen. Individuelle Lösungen aus Alzey." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Webdesign",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AS-ProDigital",
              "founder": {
                "@type": "Person",
                "name": "André Szittnick"
              }
            },
            "areaServed": "Alzey, Deutschland",
            "description": "Professionelles Webdesign: Moderne, responsive Websites, die Ihre Kunden begeistern"
          })
        }} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionWebdesign />
      <WebdesignContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      </div>
    </>
  );
}