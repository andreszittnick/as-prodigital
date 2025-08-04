import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Search, Bot, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Modern, responsive websites that captivate your audience and drive conversions. Every pixel crafted with purpose and precision.",
    features: ["Responsive Design", "UX/UI Optimization", "Performance Focus"],
    gradient: "from-orange-500 to-blue-600"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic search engine optimization that elevates your visibility and brings qualified traffic to your business.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    gradient: "from-blue-600 to-orange-500"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Custom AI integrations and automation solutions that streamline operations and unlock new possibilities for your business.",
    features: ["Custom AI Integration", "Process Automation", "Smart Analytics"],
    gradient: "from-orange-500 to-blue-600"
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
            Delivering cutting-edge solutions that drive growth, enhance visibility, and automate success for forward-thinking businesses.
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
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
