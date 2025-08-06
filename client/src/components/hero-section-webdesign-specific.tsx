import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import andreImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";

// Typing Animation Component for Webdesign
function TypingAnimationWebdesignSpecific() {
  const words = ["Performant.", "Responsiv.", "Überzeugend."];
  
  return (
    <motion.span
      className="text-slate-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5 + index * 0.8,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: words.length * 0.8 - 0.5
          }}
          style={{
            position: index === 0 ? "relative" : "absolute",
            left: index === 0 ? "auto" : "0"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroSectionWebdesignSpecific() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dynamic-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        
        {/* Floating animated elements - responsive sizes */}
        <motion.div 
          className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-white/20 rounded-full filter blur-3xl floating-orb"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 sm:top-40 right-4 sm:right-20 w-32 sm:w-64 lg:w-80 h-32 sm:h-64 lg:h-80 bg-white/30 rounded-full filter blur-2xl floating-orb"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 left-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/25 rounded-full filter blur-xl pulse-orb"
          animate={{ 
            x: [-15, 15, -15],
            y: [0, -15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Additional dynamic elements - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-white/15 rounded-full filter blur-xl floating-orb" />
        <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full filter blur-2xl pulse-orb" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professionelles Webdesign aus einer Hand
            </motion.span>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Maßgeschneidertes Webdesign</span><br />
              <span className="text-slate-900">für Ihren professionellen Online-Auftritt</span>
            </motion.h1>
            
            <motion.div 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-slate-700">Modern. Schnell. </span>
              <TypingAnimationWebdesignSpecific />
            </motion.div>
            
            <motion.div 
              className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                Ich entwickle moderne, schnelle und optisch ansprechende Webseiten, die Ihre Marke perfekt präsentieren und Ihre Besucher in Kunden verwandeln.
                <br /><br />
                Ob Unternehmensseite, Landingpage oder Online-Portfolio – ich gestalte Ihre Website individuell, nutzerfreundlich und ausdrucksstark.
              </p>
              <br />
              <motion.p 
                className="text-lg sm:text-xl font-medium text-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <span className="gradient-text font-bold">Ihre Vision. Meine Mission.</span><br />
                Damit Ihr Online-Auftritt begeistert.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-webdesign-anfragen"
              >
                <span className="flex items-center gap-2">
                  Webdesign anfragen
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl border border-slate-200 hover:border-orange-300 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-portfolio"
              >
                <span className="flex items-center gap-2">
                  Portfolio ansehen
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-orange-300 rounded-full filter blur-2xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 bg-blue-300 rounded-full filter blur-3xl opacity-25"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, -120, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              {/* Main image container */}
              <motion.div 
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={andreImage}
                  alt="André Szittnick - AS ProDigital"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 sm:p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Webdesign aktiv</span>
                  </div>
                </motion.div>
                
                {/* Experience badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl p-3 sm:p-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold">3+</div>
                    <div className="text-xs font-medium opacity-90">Jahre</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}