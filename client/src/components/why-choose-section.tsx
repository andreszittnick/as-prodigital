import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "No agency prices",
    description: "Direct collaboration without agency markups - transparent, fair pricing for premium quality work.",
    colorClass: "brand-gradient"
  },
  {
    icon: Users,
    title: "Personal consultation from start to finish",
    description: "One-on-one guidance throughout your entire project journey with dedicated personal attention.",
    colorClass: "brand-blue"
  },
  {
    icon: Zap,
    title: "Fast implementation",
    description: "Quick turnaround times without compromising quality - your project delivered efficiently and professionally.",
    colorClass: "brand-gradient"
  }
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What speaks for <span className="gradient-text">AS-ProDigital</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the difference of working with a dedicated digital specialist who puts your success first.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`benefit-card-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className={`w-20 h-20 ${benefit.colorClass} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}