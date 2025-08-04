import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Users, Cog, CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial contact",
    description: "We start with a friendly conversation about your goals, challenges, and vision for your digital project.",
    colorClass: "brand-gradient"
  },
  {
    number: "02", 
    icon: Users,
    title: "Individual personal consultation",
    description: "One-on-one strategy session where we dive deep into your specific needs and create a tailored solution plan.",
    colorClass: "brand-blue"
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementation and transparent communication",
    description: "Development begins with regular updates, clear progress reports, and open communication throughout the entire process.",
    colorClass: "brand-gradient"
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Finalization and product handover",
    description: "Final testing, optimization, and complete handover with documentation and ongoing support guidance.",
    colorClass: "brand-blue"
  }
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A streamlined approach that ensures your project success from initial contact to final delivery.
          </p>
        </motion.div>
        
        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-slate-200 transform md:-translate-x-0.5" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-600 transform md:-translate-x-0.5"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex items-center flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                data-testid={`process-step-${step.number}`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className={`w-16 h-16 ${step.colorClass} rounded-full flex items-center justify-center shadow-xl z-10 relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="text-white w-8 h-8" />
                </motion.div>
                
                {/* Content Card */}
                <motion.div 
                  className={`flex-1 max-w-md mx-auto md:mx-0 mt-6 md:mt-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                      step.colorClass === 'brand-gradient' ? 'bg-orange-500' : 'bg-blue-600'
                    }`} />
                    
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-slate-100 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Decorative element */}
                    <motion.div 
                      className={`absolute -top-2 -right-2 w-20 h-20 ${step.colorClass} rounded-full opacity-10`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}