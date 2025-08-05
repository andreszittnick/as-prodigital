import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const portfolioItems = [
  {
    title: "Projekt 1",
    description: "Projekt 1 - Beschreibung",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Webdesign", "Basic-SEO", "KI-Integration"]
  },
  {
    title: "Projekt 2",
    description: "Projekt 2 - Beschreibung",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Webdesign", "Basic-SEO"]
  },
  {
    title: "Projekt 3",
    description: "Projekt 3 - Beschreibung",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Webdesign", "Basic-SEO"]
  }
];

const stats = [
  { value: "3+", label: "Jahre Erfahrung", number: 3, suffix: "+" },
  { value: "80+", label: "Betreute Projekte", number: 80, suffix: "+" },
  { value: "99,8%", label: "Zufriedene Kunden", number: 99.8, suffix: "%" }
];

// Custom hook for counting animation
function useCountUp(target: number, duration: number = 2000, isInView: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const startTime = Date.now();
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = target * easeOutCubic;
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration, isInView]);
  
  return count;
}

// StatCard component with counting animation
function StatCard({ stat, index, isInView }: { stat: typeof stats[0], index: number, isInView: boolean }) {
  const count = useCountUp(stat.number, 2000, isInView);
  
  const formatNumber = (num: number, suffix: string) => {
    if (suffix === "%") {
      return num.toFixed(1) + suffix;
    }
    return Math.floor(num) + suffix;
  };
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4, type: "spring", bounce: 0.4 }}
      >
        <span 
          className="relative z-10 text-orange-500"
          style={{
            textShadow: '0 4px 8px rgba(254, 122, 51, 0.3), 0 2px 4px rgba(254, 122, 51, 0.2)',
          }}
        >
          {formatNumber(count, stat.suffix)}
        </span>
      </motion.div>
      <motion.div 
        className="text-slate-700 font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
}

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
            Ergebnisse, die für sich <span className="gradient-text">sprechen</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Jedes Projekt ist ein individuelles Abenteuer – hier sehen Sie Ergebnisse, die durch enge Zusammenarbeit und kreative Ideen entstanden sind.
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
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="w-16 h-16 bg-slate-400 rounded-lg mb-4 mx-auto opacity-50"></div>
                  <p className="text-sm font-medium">Projekt-Vorschau</p>
                  <p className="text-xs">Bild folgt</p>
                </div>
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
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-16 justify-center">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label}
                stat={stat}
                index={index}
                isInView={statsInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
