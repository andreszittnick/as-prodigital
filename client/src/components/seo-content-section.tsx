import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Monitor, Search, DollarSign, Users, Zap, Target, TrendingUp, Rocket, Sparkles, ArrowRight, Palette, Bot, Check } from "lucide-react";

// Process Timeline Content Component
function ProcessTimelineContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const steps = [
    {
      id: 1,
      title: "Kontaktaufnahme",
      subtitle: "Erster Schritt in Richtung Erfolg",
      description: "Sie nehmen unkompliziert Kontakt mit mir auf und teilen mir Ihre Wünsche und Ziele für Ihr Projekt mit.",
      icon: Target,
      primaryColor: "#fe7a33",
      secondaryColor: "#ff9966",
      position: "left",
    },
    {
      id: 2,
      title: "Persönliches Strategiegespräch",
      subtitle: "Ich entwickle Ihren Plan",
      description: "In einem persönlichen Gespräch besprechen wir die Vorgehensweise, entwickeln die passende Strategie und stimmen Designideen ab.",
      icon: Search,
      primaryColor: "#07437c",
      secondaryColor: "#1a5490",
      position: "right",
    },
    {
      id: 3,
      title: "Umsetzung",
      subtitle: "Ihre Vision wird Realität",
      description: "Ich setze Ihr Projekt mit höchster Sorgfalt um – von der technischen Umsetzung bis zum modernen, professionellen Design.",
      icon: TrendingUp,
      primaryColor: "#fe7a33",
      secondaryColor: "#ff9966",
      position: "left",
    },
    {
      id: 4,
      title: "Finalisierung & Übergabe",
      subtitle: "Fertigstellung und Start",
      description: "Nach dem letzten Feinschliff erhalten Sie Ihr fertiges Projekt, inklusive Einweisung und allen benötigten Dateien.",
      icon: Rocket,
      primaryColor: "#07437c",
      secondaryColor: "#1a5490",
      position: "right",
    },
  ];

  return (
    <>
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <motion.div
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-5 h-5 text-[#fe7a33]" />
          <span className="text-sm font-medium text-slate-600">Bewährter Prozess</span>
        </motion.div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent px-4 sm:px-0"
          style={{ lineHeight: '1.4' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Von Ihrer <span className="text-[#064a7f]">Idee</span> zum digitalen <span className="bg-gradient-to-r from-[#fe7a33] to-[#ff6b1a] bg-clip-text text-transparent">Erfolg</span>
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Vertrauen Sie auf einen strukturierten Entwicklungsprozess, der Ihre spezifischen Anforderungen in den Mittelpunkt stellt
        </motion.p>
      </div>
      
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central timeline line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-[#fe7a33] via-[#07437c] to-[#fe7a33] opacity-30"></div>
        
        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = step.position === "left";
            
            return (
              <motion.div
                key={step.id}
                className={`relative flex flex-col lg:flex-row items-center ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${isLeft ? 'lg:pr-16' : 'lg:pl-16 lg:order-2'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: step.primaryColor }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-slate-800">{step.id.toString().padStart(2, '0')}</div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base font-medium text-slate-500 mb-4">{step.subtitle}</p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Center icon for large screens */}
                <div className="hidden lg:flex lg:w-2/12 justify-center lg:order-1">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl z-10 relative"
                    style={{
                      background: `linear-gradient(135deg, ${step.primaryColor} 0%, ${step.secondaryColor} 100%)`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8" />
                    
                    {/* Pulsing ring effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                      style={{ backgroundColor: step.primaryColor }}
                    ></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function SeoContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section 
      id="content" 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Search className="w-5 h-5 text-[#fe7a33]" />
            <span className="text-sm font-medium text-slate-600">SEO-Optimierung</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent px-4 sm:px-0"
            style={{ lineHeight: '1.4' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SEO-Optimierung: Sichtbarkeit steigern und Kunden gewinnen
          </motion.h2>
          
          <motion.div 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Wer bei Google nicht gefunden wird, existiert online kaum. Mit professioneller SEO-Optimierung sorgen Sie dafür, dass Ihre Website in den Suchergebnissen sichtbar wird – genau dann, wenn potenzielle Kunden nach Ihren Produkten oder Dienstleistungen suchen.
            </p>
            
            <p>
              Die Optimierung umfasst technische Aspekte wie Ladegeschwindigkeit, mobile Darstellung und Indexierbarkeit, aber auch inhaltliche Faktoren wie Keyword-Platzierung, strukturierte Inhalte und Meta-Texte.
            </p>
            
            <p>
              Ich analysiere Ihre aktuelle Website und entwickle eine maßgeschneiderte SEO-Strategie, die langfristig wirkt. So steigern Sie nicht nur Ihre Reichweite, sondern auch die Qualität der Besucher – und damit Ihre Chancen auf echte Anfragen und Verkäufe.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <ProcessTimelineContent />
      </div>
    </section>
  );
}