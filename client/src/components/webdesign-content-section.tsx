import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Monitor, Search, DollarSign, Users, Zap, Target, TrendingUp, Rocket, Sparkles, ArrowRight, Palette, Check } from "lucide-react";

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
          className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          In vier klaren Schritten begleite ich Sie von der ersten Idee bis zum erfolgreichen Online-Auftritt
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

        <div className="space-y-12 sm:space-y-16 lg:space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = step.position === "left";
            
            return (
              <motion.div
                key={step.id}
                className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-6 sm:gap-8 lg:gap-16`}
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
                    className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 relative overflow-hidden group"
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
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-white font-bold text-base sm:text-lg"
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
                      
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">
                        {step.title}
                      </h3>
                      
                      {step.subtitle && (
                        <h4 className="text-lg font-semibold mb-4" style={{ color: step.primaryColor }}>
                          {step.subtitle}
                        </h4>
                      )}
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Action indicator */}
                      <motion.div 
                        className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                        style={{ color: step.primaryColor }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        onClick={() => {
                          const contactSection = document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        data-testid={`button-phase-${step.id}`}
                      >
                        <span>
                          {step.id === 1 && "Jetzt Kontakt aufnehmen"}
                          {step.id === 2 && "Strategie abstimmen"}
                          {step.id === 3 && "Umsetzung starten"}
                          {step.id === 4 && "Projekt live schalten"}
                        </span>
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
    </>
  );
}

// Premium Digital Services Component
function PremiumDigitalServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });

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

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Premium <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
            Modernste Lösungen, die Wachstum fördern, Sichtbarkeit erhöhen und Erfolg für zukunftsorientierte Unternehmen automatisieren.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 ${service.colorClass} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="text-white w-8 h-8" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
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
          className="text-center mt-16"
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
            className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#07437c';
              e.currentTarget.style.color = '#fe7a33';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)';
              e.currentTarget.style.color = 'white';
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

export default function WebdesignContentSection() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Bild links, Text rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                SEO-Optimierung: Sichtbarkeit steigern und Kunden gewinnen
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Wer bei Google nicht gefunden wird, existiert online kaum. Mit professioneller SEO-Optimierung sorgen Sie dafür, dass Ihre Website in den Suchergebnissen sichtbar wird – genau dann, wenn potenzielle Kunden nach Ihren Produkten oder Dienstleistungen suchen.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Die Optimierung umfasst technische Aspekte wie Ladegeschwindigkeit, mobile Darstellung und Indexierbarkeit, aber auch inhaltliche Faktoren wie Keyword-Platzierung, strukturierte Inhalte und Meta-Texte.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ich analysiere Ihre aktuelle Website und entwickle eine maßgeschneiderte SEO-Strategie, die langfristig wirkt. So steigern Sie nicht nur Ihre Reichweite, sondern auch die Qualität der Besucher – und damit Ihre Chancen auf echte Anfragen und Verkäufe.
              </p>
            </motion.div>
          </div>

          {/* Section 2: Text links, Bild rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                Technisches SEO: Die Basis für gute Google-Rankings
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Technisches SEO ist das unsichtbare Fundament Ihrer Website – und unverzichtbar, wenn Sie bei Google erfolgreich sein möchten. Denn nur wenn Ihre Seite technisch sauber aufgebaut ist, kann sie von Suchmaschinen vollständig erfasst und korrekt bewertet werden.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zu den wichtigsten Maßnahmen zählen die Optimierung von Ladezeiten, die Mobilfreundlichkeit (Responsive Design), eine fehlerfreie Indexierung sowie die Strukturierung mit sprechenden URLs, H1/H2-Hierarchien und internen Verlinkungen.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ich überprüfe Ihre Website auf technische Schwächen und behebe sie gezielt – damit Ihre Seite eine stabile Grundlage für erfolgreiche SEO-Strategien bietet.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Warum ich der richtige <span className="text-orange-500">Partner</span> für Ihr Projekt bin
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
              Erleben Sie den Unterschied bei der Zusammenarbeit mit einem engagierten Digitalspezialisten, der Ihren Erfolg an erste Stelle setzt.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <DollarSign className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Keine Agentur-Preise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Direkte Zusammenarbeit ohne Agentur-Aufschläge - transparente, faire Preise für Premium-Qualität.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Persönliche Beratung von Anfang bis Ende</h3>
                <p className="text-slate-600 leading-relaxed">
                  Individuelle Betreuung während Ihres gesamten Projekts mit persönlicher Aufmerksamkeit.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Schnelle Umsetzung</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kurze Umsetzungszeiten ohne Qualitätsverlust - Ihr Projekt wird effizient und professionell geliefert.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section continued */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 3: Bild links, Text rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                <span className="text-orange-500">Individuelle Webdesign-Lösungen</span> für Ihr Unternehmen
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Jedes Unternehmen hat individuelle Anforderungen, die sich nicht mit einer Standard-Website erfüllen lassen. Deshalb setze ich auf maßgeschneiderte Webdesign-Lösungen, die exakt auf Ihre Marke, Ihre Zielgruppe und Ihre Geschäftsziele zugeschnitten sind.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Individuelles Webdesign bedeutet, dass Farben, Layout, Schriftarten und Bildsprache perfekt zu Ihrem Unternehmen passen. Gleichzeitig wird die Website technisch optimiert, damit sie schnell lädt, auf allen Geräten funktioniert und von Google optimal gelesen werden kann.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                So entsteht ein Online-Auftritt, der nicht nur optisch überzeugt, sondern auch Vertrauen schafft, neue Kunden anzieht und langfristig messbare Ergebnisse liefert.
              </p>
            </motion.div>
          </div>

          {/* Section 4: Text links, Bild rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                <span className="text-orange-500">Webdesign</span> als Grundlage für digitale <span className="text-orange-500">Kundengewinnung</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ihre Website ist heute der wichtigste Vertriebskanal, denn die meisten Kunden informieren sich online, bevor sie eine Entscheidung treffen. Professionelles Webdesign ist daher die Grundlage für eine erfolgreiche Kundengewinnung im Internet.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ein überzeugendes Design verbindet ästhetische Gestaltung mit klarer Nutzerführung und Conversion-Optimierung. Besucher finden sich schnell zurecht, können Ihre Angebote leicht erfassen und werden gezielt zu Kontaktanfragen oder Käufen geführt.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zusätzlich profitieren Sie von SEO-Vorteilen: Eine saubere technische Struktur, optimierte Inhalte und mobile Darstellung sorgen für bessere Google-Rankings und langfristig mehr Reichweite.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                So wird Ihre Website von einer einfachen Visitenkarte zu einem leistungsstarken Marketing- und Vertriebstool, das Ihrem Unternehmen messbaren Erfolg bringt.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Von Ihrer Idee zum digitalen Erfolg - Process Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#fe7a33] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#07437c] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#fe7a33] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ProcessTimelineContent />
        </div>
      </section>

      {/* Content Section continued */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 5: Bild links, Text rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                Erfolgreiches <span className="text-orange-500">Webdesign</span> kombiniert <span className="text-orange-500">Design</span> und <span className="text-orange-500">Technik</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Viele unterschätzen, dass Webdesign weit mehr ist als ein schönes Layout. Eine erfolgreiche Website entsteht erst, wenn Design, Technik und Nutzerfreundlichkeit perfekt ineinandergreifen.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ein moderner Internetauftritt muss übersichtlich, schnell und mobiloptimiert sein. Wenn Besucher sofort finden, wonach sie suchen, steigt die Chance, dass sie länger auf der Seite bleiben und mit Ihrem Unternehmen in Kontakt treten.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Gleichzeitig sollten Inhalte so aufbereitet sein, dass Google sie optimal erfassen kann. SEO-freundliches Webdesign sorgt dafür, dass Ihre Website langfristig sichtbar bleibt und kontinuierlich neue Interessenten erreicht.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Das Zusammenspiel aus starker Optik, intuitiver Bedienung und sauberer Technik macht Ihre Website zu einem echten Erfolgsfaktor für Ihr Business.
              </p>
            </motion.div>
          </div>

          {/* Section 6: Text links, Bild rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                Mit <span className="text-orange-500">Webdesign</span> Vertrauen und <span className="text-orange-500">Markenstärke</span> aufbauen
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Eine professionelle Website ist oft der erste Berührungspunkt zwischen Ihnen und Ihren Kunden. Ein modernes Webdesign schafft hier Vertrauen und vermittelt sofort Kompetenz und Seriosität.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Neben der optischen Wirkung spielt auch die Benutzerfreundlichkeit eine entscheidende Rolle. Besucher erwarten heute eine klare Navigation, kurze Ladezeiten und eine optimale Darstellung auf allen Endgeräten. Wenn Ihre Website diese Erwartungen erfüllt, bleiben Nutzer länger und beschäftigen sich intensiver mit Ihren Angeboten.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Gleichzeitig stärken Sie Ihre Markenidentität, wenn Design, Bildwelt und Texte ein stimmiges Gesamtbild ergeben. Auf diese Weise wird Ihre Website nicht nur zum Aushängeschild Ihres Unternehmens, sondern auch zu einem zentralen Werkzeug für die Kundengewinnung und Markenbindung.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Digital Services Section */}
      <PremiumDigitalServicesSection />
    </>
  );
}