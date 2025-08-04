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
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-orange-500 to-blue-600 transform -translate-y-1/2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 2, delay: 0.8 }}
          />
          
          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                data-testid={`process-step-${step.number}`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className={`w-16 h-16 ${step.colorClass} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="text-white w-8 h-8" />
                </motion.div>
                
                {/* Step Number */}
                <div className="text-6xl font-bold text-slate-100 mb-4">{step.number}</div>
                
                {/* Content */}
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`mobile-process-step-${step.number}`}
            >
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className={`w-12 h-12 ${step.colorClass} rounded-full flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="text-white w-6 h-6" />
                </motion.div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-16 bg-slate-200 mt-4" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="text-4xl font-bold text-slate-100 mb-2">{step.number}</div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}