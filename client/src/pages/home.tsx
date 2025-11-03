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
        <meta name="description" content="AS-ProDigital bietet professionelles Webdesign und SEO-Optimierung in Alzey. Individuelle Websites, die begeistern und bei Google gefunden werden. Jetzt unverbindlich anfragen!" />
        <meta name="keywords" content="Webdesign Alzey, SEO Alzey, Webentwicklung, Suchmaschinenoptimierung, André Szittnick, AS-ProDigital, Website erstellen" />
        <link rel="canonical" href="https://asprodigital.de/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/" />
        <meta property="og:title" content="AS-ProDigital - Professionelles Webdesign & SEO aus Alzey" />
        <meta property="og:description" content="Individuelle Websites und SEO-Optimierung, die Ihr Unternehmen digital erfolgreich machen. Persönliche Beratung von André Szittnick." />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asprodigital.de/" />
        <meta property="twitter:title" content="AS-ProDigital - Professionelles Webdesign & SEO" />
        <meta property="twitter:description" content="Individuelle Websites und SEO-Optimierung aus Alzey. Persönliche Beratung und maßgeschneiderte Lösungen." />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AS-ProDigital",
            "founder": {
              "@type": "Person",
              "name": "André Szittnick"
            },
            "description": "Professionelles Webdesign und SEO-Optimierung aus Alzey",
            "url": "https://asprodigital.de",
            "telephone": "+49-6731-8789",
            "email": "Info@AS-ProDigital.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alzey",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "addressCountry": "DE"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "€€",
            "areaServed": "DE"
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
