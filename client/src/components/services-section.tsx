import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Search, Bot, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Webdesign",
    description: "Moderne, responsive Websites, die Ihr Publikum begeistern und Conversions fördern. Jedes Pixel mit Zweck und Präzision gestaltet.",
    features: ["Responsive Design", "UX/UI Optimierung", "Performance-Fokus"],
    colorClass: "brand-gradient"
  },
  {
    icon: Search,
    title: "SEO-Optimierung",
    description: "Strategische Suchmaschinenoptimierung, die Ihre Sichtbarkeit erhöht und qualifizierten Traffic zu Ihrem Unternehmen bringt.",
    features: ["Keyword-Recherche", "Technisches SEO", "Content-Strategie"],
    colorClass: "brand-blue"
  },
  {
    icon: Bot,
    title: "KI-Lösungen",
    description: "Maßgeschneiderte KI-Integrationen und Automatisierungslösungen, die Abläufe optimieren und neue Möglichkeiten für Ihr Unternehmen erschließen.",
    features: ["Individuelle KI-Integration", "Prozess-Automatisierung", "Intelligente Analytik"],
    colorClass: "brand-gradient"
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modernste Lösungen, die Wachstum fördern, Sichtbarkeit erhöhen und Erfolg für zukunftsorientierte Unternehmen automatisieren.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className={`w-16 h-16 ${service.colorClass} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="text-white w-8 h-8" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                    >
                      <Check className="text-orange-500 w-4 h-4 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
