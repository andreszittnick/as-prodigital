import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Search, TrendingUp, Target, BarChart3, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react";

export default function SeoAlzey() {
  const benefits = [
    "Bessere Google Rankings",
    "Mehr lokale Sichtbarkeit", 
    "Steigerung der Website-Besucher",
    "Höhere Conversion-Raten",
    "Local SEO für Alzey & Region",
    "Keyword-Optimierung",
    "Technisches SEO",
    "Kontinuierliches Monitoring"
  ];

  const process = [
    {
      step: "1",
      title: "SEO-Analyse",
      description: "Umfassende Analyse Ihrer Website und Konkurrenz in Alzey. Identifikation von Optimierungspotenzialen."
    },
    {
      step: "2", 
      title: "Keyword-Recherche",
      description: "Ermittlung relevanter Suchbegriffe für Ihr Business in Alzey und Umgebung mit lokalem Fokus."
    },
    {
      step: "3",
      title: "On-Page Optimierung",
      description: "Technische und inhaltliche Optimierung Ihrer Website für bessere Suchmaschinen-Rankings."
    },
    {
      step: "4",
      title: "Local SEO",
      description: "Optimierung für lokale Suchanfragen in Alzey, Google My Business und regionale Verzeichnisse."
    }
  ];

  const testimonials = [
    {
      name: "Klaus Müller",
      company: "Müller Autohaus, Alzey",
      text: "Dank der SEO-Optimierung finden uns Kunden aus Alzey viel besser. Unser Online-Umsatz hat sich verdoppelt!",
      rating: 5
    },
    {
      name: "Andrea Wagner",
      company: "Friseur Wagner, Worms", 
      text: "Wir stehen jetzt auf Platz 1 bei Google für 'Friseur Worms'. Herr Szittnick versteht Local SEO perfekt.",
      rating: 5
    },
    {
      name: "Michael König",
      company: "König Elektrotechnik, Mainz",
      text: "Professionelle SEO-Betreuung mit messbaren Erfolgen. Mehr Anfragen aus der Region als je zuvor.",
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
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO in <span className="text-orange-400">Alzey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Professionelle Suchmaschinenoptimierung für Unternehmen in Alzey und Umgebung. 
              Mehr Sichtbarkeit, mehr Kunden, mehr Erfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg"
              >
                Kostenlose SEO-Analyse
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
              Warum SEO in <span className="text-orange-500">Alzey</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Als lokaler SEO-Spezialist kenne ich den Markt in Alzey und der Region. 
              Gezielte Optimierung für lokale Suchanfragen und regionale Sichtbarkeit.
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
              Mein <span className="text-orange-500">SEO-Prozess</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Systematische Suchmaschinenoptimierung für nachhaltigen Erfolg
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
              SEO-Erfolge in <span className="text-orange-500">Alzey & Umgebung</span>
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
              SEO-Service in der <span className="text-orange-500">Region</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Local SEO für Unternehmen in Alzey und im gesamten Umkreis
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
              Bereit für bessere Google-Rankings?
            </h2>
            <p className="text-xl mb-8">
              Lassen Sie uns gemeinsam Ihre Sichtbarkeit in Alzey steigern. 
              Kostenlose SEO-Analyse und unverbindliche Beratung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg hover:bg-gray-50"
              >
                Jetzt SEO-Beratung anfragen
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