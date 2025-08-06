import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Code, Search, Brain, Smartphone, Globe, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Webdesign & Entwicklung",
      description: "Moderne, responsive Websites, die Ihre Marke perfekt repräsentieren und Ihre Besucher zu Kunden konvertieren.",
      features: [
        "Responsive Design für alle Geräte",
        "Performance-optimierte Umsetzung", 
        "SEO-freundliche Struktur",
        "Benutzerfreundliche Navigation",
        "Content Management System",
        "Wartung und Updates"
      ],
      color: "bg-orange-500"
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Bessere Sichtbarkeit in Suchmaschinen durch professionelle SEO-Strategien, die nachhaltig mehr organischen Traffic bringen.",
      features: [
        "Keyword-Analyse und -Optimierung",
        "On-Page SEO-Optimierung",
        "Content-Optimierung",
        "Local SEO für regionale Unternehmen",
        "SEO-Monitoring und Reporting",
        "Technisches SEO"
      ],
      color: "bg-blue-600"
    },
    {
      icon: Brain,
      title: "KI-gestützte Lösungen",
      description: "Innovative KI-Anwendungen, die Ihre Geschäftsprozesse automatisieren und neue Möglichkeiten für Ihr Unternehmen schaffen.",
      features: [
        "Chatbots und virtuelle Assistenten",
        "Automatisierung von Workflows",
        "Datenanalyse und Insights",
        "Personalisierte Kundenerlebnisse",
        "KI-gestützte Content-Erstellung",
        "Predictive Analytics"
      ],
      color: "bg-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimierung",
      description: "Perfekte Darstellung und Funktionalität auf allen mobilen Geräten für die beste Nutzererfahrung.",
      features: [
        "Mobile-First Design",
        "App-ähnliche Weberlebnisse",
        "Touch-optimierte Navigation",
        "Schnelle Ladezeiten",
        "Progressive Web Apps",
        "Cross-Platform Kompatibilität"
      ],
      color: "bg-blue-600"
    },
    {
      icon: Globe,
      title: "E-Commerce Lösungen",
      description: "Komplette Online-Shop Systeme, die Ihre Produkte erfolgreich verkaufen und Ihr Business digitalisieren.",
      features: [
        "Benutzerfreundliche Shop-Systeme",
        "Sichere Zahlungsabwicklung",
        "Inventarverwaltung",
        "Customer Journey Optimierung",
        "Multi-Channel Integration",
        "Analytics und Reporting"
      ],
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategische Online-Marketing Kampagnen, die Ihre Reichweite erhöhen und messbare Ergebnisse liefern.",
      features: [
        "Social Media Marketing",
        "Google Ads & PPC",
        "Email Marketing Automation",
        "Content Marketing Strategien",
        "Conversion Optimierung",
        "Performance Tracking"
      ],
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meine <span className="text-orange-500">Leistungen</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Umfassende digitale Lösungen, die Ihr Unternehmen erfolgreich in die Zukunft führen. 
              Von moderner Webentwicklung bis hin zu KI-gestützten Innovationen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Mehr erfahren
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}