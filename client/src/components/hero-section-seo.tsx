import { motion } from "framer-motion";
import TypingAnimationSEO from "./typing-animation-seo";
import andreImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";

export default function HeroSectionSEO() {
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
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#07437c] to-[#fe7a33] bg-clip-text text-transparent">
                André Szittnick - AS ProDigital
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Suchmaschinenoptimierung für mehr Sichtbarkeit
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#07437c]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Effektives Basic-SEO<br />
              für mehr Reichweite und neue Kunden
            </motion.p>
            
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TypingAnimationSEO />
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ich helfe Ihnen dabei, Ihre Website bei Google sichtbarer zu machen und neue Besucher auf Ihre Angebote aufmerksam zu machen. Mit Basic-SEO optimiere ich Ihre Seite technisch und inhaltlich, damit sie langfristig besser gefunden wird.
              <br /><br />
              Von der Keyword-Analyse über die OnPage-Optimierung bis hin zu strukturierten Inhalten – ich lege die Basis für eine bessere Platzierung in den Suchergebnissen und damit für mehr Anfragen über Ihre Website.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                data-testid="button-seo-anfragen"
              >
                <span className="flex items-center justify-center">
                  SEO anfragen
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="group border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 active:scale-95"
                data-testid="button-mehr-erfahren"
              >
                Mehr erfahren
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={andreImage} 
                  alt="André Szittnick - SEO Spezialist" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-2">
            Ihre Sichtbarkeit. Mein Ziel.
          </p>
          <p className="text-base sm:text-lg text-slate-500">
            Damit Ihre Website von Kunden gefunden wird.
          </p>
        </motion.div>
      </div>
    </section>
  );
}