import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { motion } from "framer-motion";
import { Code, Search, Brain } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Code,
      title: "Webdesign",
      description: "Moderne, responsive Websites, die Ihre Marke perfekt repräsentieren und Ihre Besucher zu Kunden konvertieren.",
      features: [
        "Responsive Design für alle Geräte",
        "Performance-optimierte Umsetzung", 
        "SEO-freundliche Struktur",
        "Benutzerfreundliche Navigation",
        "Content Management System",
        "Wartung und Updates"
      ],
      textContent: `Als erfahrener Webdesigner und Entwickler erstelle ich moderne, benutzerfreundliche Websites, die nicht nur optisch überzeugen, sondern auch technisch auf dem neuesten Stand sind. Mein Fokus liegt auf responsivem Design, das auf allen Geräten perfekt funktioniert, und einer optimalen User Experience.

Von der ersten Konzeption bis zur finalen Umsetzung begleite ich Sie durch den gesamten Entwicklungsprozess. Dabei setze ich auf bewährte Technologien und moderne Frameworks, um sicherzustellen, dass Ihre Website schnell lädt, suchmaschinenfreundlich ist und Ihre Besucher begeistert.`,
      color: "bg-blue-500"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Bessere Sichtbarkeit in Suchmaschinen durch professionelle SEO-Strategien, die nachhaltig mehr organischen Traffic bringen.",
      features: [
        "Keyword-Analyse und -Optimierung",
        "On-Page SEO-Optimierung",
        "Content-Optimierung",
        "Local SEO für regionale Unternehmen",
        "SEO-Monitoring und Reporting",
        "Technisches SEO"
      ],
      textContent: `Suchmaschinenoptimierung ist essentiell für den Erfolg Ihrer Website. Mit meiner SEO Leistung sorge ich dafür, dass Ihre Website bei Google und anderen Suchmaschinen besser gefunden wird. Ich analysiere Ihre Zielgruppe, recherchiere relevante Keywords und optimiere Ihre Inhalte gezielt.

Mein Ansatz umfasst technische Optimierungen, On-Page-SEO und die Verbesserung der Ladegeschwindigkeit. Dabei achte ich darauf, dass alle Maßnahmen nachhaltig und Google-konform sind. Sie erhalten regelmäßige Reports über die Fortschritte und können den Erfolg der Optimierungen direkt verfolgen.`,
      color: "bg-green-500"
    },
    {
      icon: Brain,
      title: "Individuelle KI-Lösungen",
      description: "Innovative KI-Anwendungen, die Ihre Geschäftsprozesse automatisieren und neue Möglichkeiten für Ihr Unternehmen schaffen.",
      features: [
        "Chatbots und virtuelle Assistenten",
        "Automatisierung von Workflows",
        "Datenanalyse und Insights",
        "Personalisierte Kundenerlebnisse",
        "KI-gestützte Content-Erstellung",
        "Predictive Analytics"
      ],
      textContent: `Künstliche Intelligenz revolutioniert die Art, wie Unternehmen arbeiten. Ich entwickle maßgeschneiderte KI-Lösungen, die perfekt auf Ihre Geschäftsprozesse zugeschnitten sind. Von intelligenten Chatbots bis hin zu automatisierten Workflows - ich helfe Ihnen dabei, das Potenzial der KI voll auszuschöpfen.

Meine Lösungen sind praktisch orientiert und bringen echten Mehrwert für Ihr Unternehmen. Ob Kundensupport-Automatisierung, Datenanalyse oder personalisierte Empfehlungssysteme - ich finde die richtige KI-Anwendung für Ihre Herausforderungen und implementiere sie benutzerfreundlich und zuverlässig.`,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
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
              Drei Kernbereiche, die Ihr Unternehmen digital transformieren und erfolgreich machen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Card */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-8`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Was Sie erhalten:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg"
                  >
                    Jetzt anfragen
                  </motion.button>
                </div>

                {/* Text Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 h-full">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Mein Ansatz
                    </h4>
                    <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.textContent.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}