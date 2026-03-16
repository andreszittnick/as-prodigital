import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import HeroSectionSeoSimple from "@/components/hero-section-seo-simple";
import SeoContentSection from "@/components/seo-content-section";
import CityLinksSection from "@/components/city-links-section";
import ContactSectionWebdesign from "@/components/contact-section-webdesign";
import Footer from "@/components/footer";

export default function SeoAlzey() {

  return (
    <>
      <Helmet>
        <title>SEO - Suchmaschinenoptimierung | AS-ProDigital</title>
        <meta name="description" content="Professionelle SEO-Optimierung von AS-ProDigital: Bessere Google-Rankings, mehr organischer Traffic und mehr Kunden. ✓ Local SEO ✓ On-Page SEO ✓ Technisches SEO ✓ Transparente Ergebnisse" />
        <meta name="keywords" content="SEO, Suchmaschinenoptimierung, Google Ranking verbessern, Local SEO, SEO Beratung, On-Page SEO, Technisches SEO" />
        <link rel="canonical" href="https://www.asprodigital.de/seo" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asprodigital.de/seo" />
        <meta property="og:title" content="SEO - Professionelle Suchmaschinenoptimierung | AS-ProDigital" />
        <meta property="og:description" content="Erreichen Sie Top-Rankings bei Google. Professionelle SEO-Optimierung mit messbaren Erfolgen." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Suchmaschinenoptimierung (SEO)",
            "name": "Professionelle SEO-Optimierung",
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
            "description": "Professionelle Suchmaschinenoptimierung für bessere Google-Rankings, mehr Sichtbarkeit und mehr Kunden",
            "url": "https://www.asprodigital.de/seo"
          })
        }} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSectionSeoSimple />
      <SeoContentSection />
      <CityLinksSection />

      {/* Contact Section */}
      <ContactSectionWebdesign />

      <Footer />
      </div>
    </>
  );
}
