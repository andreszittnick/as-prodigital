import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Search, TrendingUp, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Webdesign",
    description: "Ich gestalte Ihre Website so, dass sie Ihre Marke authentisch widerspiegelt und Ihre Besucher begeistert. Jede Seite entsteht in enger Abstimmung mit Ihnen – modern, klar und für alle Geräte optimiert.",
    features: ["Responsive Design", "UX/UI Optimierung", "Performance-Fokus"],
    colorClass: "brand-gradient"
  },
  {
    icon: Search,
    title: "SEO-Setup",
    description: "Ich kümmere mich darum, dass Ihre Website die wichtigsten SEO-Grundlagen erfüllt – von der technischen Struktur bis zu schnellen Ladezeiten. So legen wir den Grundstein dafür, dass Sie online sichtbar werden und mehr Menschen Ihre Seite finden.",
    features: ["Keyword-Recherche", "Technisches SEO", "Content-Strategie"],
    colorClass: "brand-blue"
  },
  {
    icon: TrendingUp,
    title: "SEO-Management",
    description: "Ich optimiere Ihre Website fortlaufend, damit sie langfristig sichtbar bleibt und wächst. Durch regelmäßige Analysen, neue Inhalte und gezielte Anpassungen stärken wir Ihr Ranking bei Google – nachhaltig, transparent und auf Ihre Ziele abgestimmt.",
    features: ["Laufende Analyse", "Content-Pflege", "Strategische Weiterentwicklung"],
    colorClass: "brand-gradient"
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-16 md:py-20 bg-white overflow-x-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Meine <span className="gradient-text">Leistungen</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Ich schaffe Sichtbarkeit und Vertrauen mit modernem Webdesign und wirkungsvoller SEO-Optimierung.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white to-slate-50 p-8 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 md:w-18 md:h-18 ${service.colorClass} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="text-white w-8 h-8 md:w-9 md:h-9" />
                </motion.div>
                
                <h3 className="text-2xl md:text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-base md:text-base text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-slate-600 mt-auto">
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
        
        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white px-6 py-3 text-base rounded-full font-semibold hover:shadow-xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)',
              border: '2px solid transparent',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fe7a33';
              e.currentTarget.style.borderColor = '#fe7a33';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-questions-services"
          >
            Lassen Sie uns starten
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
