import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, TrendingUp, Rocket, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      id: 1,
      title: "Analyse & Strategieentwicklung",
      description: "Wir analysieren Ihre aktuelle Online-Präsenz und entwickeln eine maßgeschneiderte Digitalstrategie für Ihr Unternehmen.",
      icon: Target,
      primaryColor: "#fe7a33",
      secondaryColor: "#ff9966",
      position: "left",
    },
    {
      id: 2,
      title: "Design & Entwicklung", 
      description: "Unsere Experten erstellen ein modernes, responsives Design und entwickeln Ihre Website mit neuesten Technologien.",
      icon: Zap,
      primaryColor: "#07437c",
      secondaryColor: "#1a5490",
      position: "right",
    },
    {
      id: 3,
      title: "SEO-Optimierung",
      description: "Wir optimieren Ihre Website für Suchmaschinen und sorgen für bessere Sichtbarkeit in den Suchergebnissen.",
      icon: TrendingUp,
      primaryColor: "#fe7a33",
      secondaryColor: "#ff9966",
      position: "left",
    },
    {
      id: 4,
      title: "Launch & Erfolg",
      description: "Ihre neue Website geht live und wir unterstützen Sie beim erfolgreichen Start in die digitale Zukunft.",
      icon: Rocket,
      primaryColor: "#07437c",
      secondaryColor: "#1a5490",
      position: "right",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#fe7a33] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#07437c] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#fe7a33] rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-[#fe7a33]" />
            <span className="text-sm font-medium text-slate-600">Unser bewährter Prozess</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Von der Idee zum <span className="bg-gradient-to-r from-[#fe7a33] to-[#ff6b1a] bg-clip-text text-transparent">Erfolg</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            In vier strategischen Phasen verwandele ich Ihre digitale Vision in messbare Erfolge
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Central timeline */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent transform -translate-x-1/2 hidden lg:block">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#fe7a33] via-[#07437c] to-[#fe7a33] rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.position === "left";
              
              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}
                  initial={{ opacity: 0, y: 80 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
                >
                  {/* Content Card */}
                  <motion.div 
                    className="flex-1 max-w-lg"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden group"
                      style={{ 
                        boxShadow: `0 20px 40px -12px ${step.primaryColor}20` 
                      }}
                      whileHover={{ 
                        boxShadow: `0 30px 60px -12px ${step.primaryColor}30` 
                      }}
                    >
                      {/* Background gradient */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.primaryColor} 0%, ${step.secondaryColor} 100%)` 
                        }}
                      />
                      
                      <div className="relative z-10">
                        {/* Step number */}
                        <motion.div 
                          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 text-white font-bold text-lg"
                          style={{ backgroundColor: step.primaryColor }}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          {step.id}
                        </motion.div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900">
                          {step.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        {/* Action indicator */}
                        <motion.div 
                          className="flex items-center gap-2 text-sm font-medium"
                          style={{ color: step.primaryColor }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          <span>Phase {step.id} starten</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Central Icon */}
                  <motion.div 
                    className="relative z-20 flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white relative overflow-hidden"
                      style={{ backgroundColor: step.primaryColor }}
                      animate={{ 
                        boxShadow: [
                          `0 0 0 0 ${step.primaryColor}40`,
                          `0 0 0 20px ${step.primaryColor}00`,
                          `0 0 0 0 ${step.primaryColor}40`
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5 + 1
                      }}
                    >
                      <Icon className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Rotating background */}
                      <motion.div 
                        className="absolute inset-0 opacity-20"
                        style={{ 
                          background: `conic-gradient(from 0deg, transparent 0deg, ${step.secondaryColor} 180deg, transparent 360deg)` 
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 max-w-lg hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-[#fe7a33] to-[#ff6b1a] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Projekt starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessTimeline;