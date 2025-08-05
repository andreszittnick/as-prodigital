import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const portfolioItems = [
  {
    title: "E-Commerce Plattform",
    description: "Moderne E-Commerce-Lösung mit KI-gestützten Empfehlungen und nahtloser Benutzererfahrung.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Webdesign", "KI-Integration"]
  },
  {
    title: "Analytics Dashboard",
    description: "Echtzeit-Business-Intelligence-Plattform mit individueller KI-Analytik und Berichterstattung.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Dashboard", "KI-Analytik"]
  },
  {
    title: "Kreatives Portfolio",
    description: "Preisgekrönte Portfolio-Website mit innovativen Animationen und SEO-Optimierung.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Portfolio", "SEO"]
  }
];

const stats = [
  { value: "50+", label: "Abgeschlossene Projekte" },
  { value: "40+", label: "Zufriedene Kunden" },
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "250%", label: "Durchschn. Traffic-Wachstum" }
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Aktuelle <span className="gradient-text">Arbeiten</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Eine Auswahl erfolgreicher Projekte, die die Kraft von modernem Webdesign und digitaler Innovation demonstrieren.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`portfolio-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                <motion.img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className={`px-3 py-1 text-sm rounded-full ${
                        tagIndex % 2 === 0 
                          ? "bg-orange-500/10 text-orange-500" 
                          : "bg-blue-600/10 text-blue-600"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (tagIndex * 0.1) + 0.5 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0.5 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
