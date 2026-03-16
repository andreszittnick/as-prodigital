import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import HeroSectionWebdesign from "@/components/hero-section-webdesign";
import WebdesignContentSection from "@/components/webdesign-content-section";
import CityLinksSection from "@/components/city-links-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";

export default function WebdesignAlzey() {

  return (
    <>
      <Helmet>
        <title>Webdesign - Professionelle Websites | AS-ProDigital</title>
        <meta name="description" content="Professionelles Webdesign von AS-ProDigital: Individuelle, responsive und SEO-optimierte Websites, die Kunden begeistern. ✓ Persönliche Beratung ✓ Fair & Transparent ✓ Schnelle Umsetzung" />
        <meta name="keywords" content="Webdesign, Webentwicklung, Website erstellen lassen, professionelle Website, responsive Webdesign, SEO-optimierte Website" />
        <link rel="canonical" href="https://www.asprodigital.de/webdesign" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asprodigital.de/webdesign" />
        <meta property="og:title" content="Professionelles Webdesign | AS-ProDigital" />
        <meta property="og:description" content="Moderne, responsive Websites für Ihr Unternehmen. Individuelle Lösungen mit SEO von Anfang an." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Webdesign",
            "name": "Professionelles Webdesign",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.asprodigital.de/#organization",
              "name": "AS-ProDigital",
              "founder": {
                "@type": "Person",
                "name": "André Szittnick"
              },
              "telephone": "+49-6731-8789",
              "email": "info@as-prodigital.de",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alzey",
                "postalCode": "55232",
                "addressRegion": "Rheinland-Pfalz",
                "addressCountry": "DE"
              },
              "url": "https://www.asprodigital.de"
            },
            "areaServed": "Deutschland",
            "description": "Professionelles Webdesign: Moderne, responsive Websites, die Ihre Kunden begeistern und bei Google gefunden werden",
            "url": "https://www.asprodigital.de/webdesign"
          })
        }} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionWebdesign />
      <WebdesignContentSection />
      <CityLinksSection service="webdesign" />

      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      </div>
    </>
  );
}
