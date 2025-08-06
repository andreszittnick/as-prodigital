import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Brain, Bot, Zap, Cpu, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react";

export default function KiLoesungenAlzey() {
  const benefits = [
    "Automatisierung von Geschäftsprozessen",
    "Intelligente Chatbots für Kundensupport",
    "Datenanalyse und Business Intelligence",
    "Personalisierte Kundenerlebnisse",
    "Kostenreduktion durch Automation",
    "24/7 verfügbare KI-Assistenten",
    "Skalierbare KI-Lösungen",
    "Integration in bestehende Systeme"
  ];

  const process = [
    {
      step: "1",
      title: "Bedarfsanalyse",
      description: "Analyse Ihrer Geschäftsprozesse und Identifikation von KI-Potenzialen für Ihr Unternehmen in Alzey."
    },
    {
      step: "2", 
      title: "KI-Konzeption",
      description: "Entwicklung einer maßgeschneiderten KI-Strategie, die perfekt zu Ihrem Business und Ihren Kunden passt."
    },
    {
      step: "3",
      title: "Implementierung",
      description: "Professionelle Umsetzung und Integration der KI-Lösung in Ihre bestehenden Systeme und Workflows."
    },
    {
      step: "4",
      title: "Optimierung",
      description: "Kontinuierliche Überwachung und Verbesserung der KI-Performance für maximalen ROI."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Petra Schmidt",
      company: "Arztpraxis Schmidt, Alzey",
      text: "Der Chatbot für unsere Praxis ist fantastisch! Patienten aus Alzey können rund um die Uhr Termine buchen.",
      rating: 5
    },
    {
      name: "Frank Weber",
      company: "Weber GmbH, Worms", 
      text: "Die KI-Lösung hat unseren Kundenservice revolutioniert. Automatische Anfragenverwaltung spart uns Stunden täglich.",
      rating: 5
    },
    {
      name: "Sandra Klein",
      company: "Klein Consulting, Mainz",
      text: "Dank der intelligenten Datenanalyse treffen wir bessere Geschäftsentscheidungen. Sehr empfehlenswert!",
      rating: 5
    }
  ];

  const serviceAreas = [
    "Alzey", "Worms", "Mainz", "Bingen", "Ingelheim", "Nieder-Olm", 
    "Osthofen", "Guntersblum", "Oppenheim", "Nierstein"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KI-Lösungen in <span className="text-orange-400">Alzey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Individuelle KI-Anwendungen für Unternehmen in Alzey und Umgebung. 
              Automatisierung, Effizienz und Innovation für Ihren Geschäftserfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg"
              >
                KI-Potenzial entdecken
              </motion.button>
              <div className="flex items-center text-orange-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Alzey & 25km Umkreis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Warum KI-Lösungen in <span className="text-orange-500">Alzey</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Als KI-Spezialist mit regionalem Bezug entwickle ich Lösungen, die perfekt zu 
              lokalen Unternehmen und deren Kundenbedürfnissen in Alzey passen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Mein <span className="text-orange-500">KI-Entwicklungsprozess</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Von der Idee zur intelligenten Lösung - strukturiert und zielgerichtet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              KI-Erfolge in <span className="text-orange-500">Alzey & Umgebung</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex text-orange-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              KI-Service in der <span className="text-orange-500">Region</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Intelligente Lösungen für Unternehmen in Alzey und im gesamten Umkreis
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md text-gray-900 dark:text-white font-medium"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für intelligente Automatisierung?
            </h2>
            <p className="text-xl mb-8">
              Lassen Sie uns gemeinsam Ihr Unternehmen in Alzey digitalisieren. 
              Kostenlose KI-Beratung und unverbindliche Potenzialanalyse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg hover:bg-gray-50"
              >
                Jetzt KI-Beratung buchen
              </motion.button>
              
              <div className="flex flex-col sm:flex-row gap-4 text-white">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+49 (0) 89 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Info@AS-ProDigital.de</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}