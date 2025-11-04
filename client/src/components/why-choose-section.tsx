import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Keine Agentur-Preise",
    description: "Direkte Zusammenarbeit ohne Agentur-Aufschläge - transparente, faire Preise für Premium-Qualität.",
    colorClass: "brand-gradient"
  },
  {
    icon: Users,
    title: "Persönliche Beratung von Anfang bis Ende",
    description: "Individuelle Betreuung während Ihres gesamten Projekts mit persönlicher Aufmerksamkeit.",
    colorClass: "brand-blue"
  },
  {
    icon: Zap,
    title: "Schnelle Umsetzung",
    description: "Kurze Umsetzungszeiten ohne Qualitätsverlust - Ihr Projekt wird effizient und professionell geliefert.",
    colorClass: "brand-gradient"
  }
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="why-choose" className="py-16 md:py-20 bg-slate-50 overflow-x-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Warum ich der richtige <span className="gradient-text">Partner</span> für Ihr Projekt bin
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Erleben Sie den Unterschied bei der Zusammenarbeit mit einem engagierten Digitalspezialisten, der Ihren Erfolg an erste Stelle setzt.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative bg-white p-8 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`benefit-card-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-[#fa5219]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className={`w-20 h-20 ${benefit.colorClass} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-base md:text-base text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
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
              background: '#fa5219',
              border: '2px solid transparent',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fa5219';
              e.currentTarget.style.borderColor = '#fa5219';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fa5219';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-contact-why-choose"
          >
            Projekt unverbindlich starten
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}