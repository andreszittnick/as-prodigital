import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyChooseSection from "@/components/why-choose-section";
import ProcessTimeline from "@/components/process-timeline";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Webdesign & SEO Alzey - AS-ProDigital André Szittnick</title>
        <meta name="description" content="Professionelles Webdesign & SEO aus Alzey – individuelle Websites, die Kunden gewinnen. Persönliche Beratung von André Szittnick. Jetzt kostenlos anfragen!" />
        <meta name="keywords" content="Webdesign Alzey, SEO Alzey, Webentwicklung, Suchmaschinenoptimierung, André Szittnick, AS-ProDigital, Website erstellen" />
        <link rel="canonical" href="https://www.asprodigital.de/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asprodigital.de/" />
        <meta property="og:title" content="AS-ProDigital - Professionelles Webdesign & SEO aus Alzey" />
        <meta property="og:description" content="Individuelle Websites und SEO-Optimierung, die Ihr Unternehmen digital erfolgreich machen. Persönliche Beratung von André Szittnick." />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.asprodigital.de/" />
        <meta property="twitter:title" content="AS-ProDigital - Professionelles Webdesign & SEO" />
        <meta property="twitter:description" content="Individuelle Websites und SEO-Optimierung aus Alzey. Persönliche Beratung und maßgeschneiderte Lösungen." />
        
        {/* Structured Data - Local Business (vollständig) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.asprodigital.de/#organization",
            "name": "AS-ProDigital",
            "alternateName": "AS ProDigital",
            "founder": {
              "@type": "Person",
              "name": "André Szittnick",
              "jobTitle": "Webdesigner & SEO-Experte"
            },
            "description": "AS-ProDigital bietet professionelles Webdesign und SEO-Optimierung für Unternehmen in Rheinhessen und ganz Deutschland. Individuelle Websites und nachhaltige Google-Rankings.",
            "url": "https://www.asprodigital.de",
            "telephone": "+49-6731-8789",
            "email": "info@as-prodigital.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alzey",
              "postalCode": "55232",
              "addressRegion": "Rheinland-Pfalz",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.7467",
              "longitude": "8.1153"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "€€",
            "areaServed": [
              { "@type": "City", "name": "Alzey" },
              { "@type": "City", "name": "Worms" },
              { "@type": "City", "name": "Bad Kreuznach" },
              { "@type": "City", "name": "Bingen am Rhein" },
              { "@type": "City", "name": "Ingelheim am Rhein" },
              { "@type": "City", "name": "Kaiserslautern" },
              { "@type": "City", "name": "Mannheim" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webdesign",
                    "description": "Individuelle, responsive Websites mit SEO-Optimierung"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO-Optimierung",
                    "description": "Suchmaschinenoptimierung für bessere Google-Rankings"
                  }
                }
              ]
            }
          })
        }} />
      </Helmet>
      
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <WhyChooseSection />
        <ProcessTimeline />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
