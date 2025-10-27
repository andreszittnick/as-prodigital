import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import HeroSectionSeoSimple from "@/components/hero-section-seo-simple";
import SeoContentSection from "@/components/seo-content-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function SeoAlzey() {

  return (
    <>
      <Helmet>
        <title>SEO Alzey - Suchmaschinenoptimierung für mehr Sichtbarkeit | AS-ProDigital</title>
        <meta name="description" content="Professionelle SEO-Optimierung aus Alzey: Bessere Google-Rankings, mehr organischer Traffic. ✓ Local SEO ✓ On-Page & Off-Page ✓ Transparente Ergebnisse" />
        <meta name="keywords" content="SEO Alzey, Suchmaschinenoptimierung Alzey, Google Ranking, Local SEO, SEO Beratung Alzey" />
        <link rel="canonical" href="https://asprodigital.de/SEO" />
        
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://asprodigital.de/SEO" />
        <meta property="og:title" content="SEO Alzey - Professionelle Suchmaschinenoptimierung" />
        <meta property="og:description" content="Erreichen Sie Top-Rankings bei Google. Professionelle SEO-Optimierung aus Alzey mit messbaren Erfolgen." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO-Optimierung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AS-ProDigital",
              "founder": {
                "@type": "Person",
                "name": "André Szittnick"
              }
            },
            "areaServed": "Alzey, Deutschland",
            "description": "Professionelle Suchmaschinenoptimierung für bessere Google-Rankings und mehr Sichtbarkeit"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionSeoSimple />
      <SeoContentSection />
      
      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      <ScrollToTopButton />
      </div>
    </>
  );
}