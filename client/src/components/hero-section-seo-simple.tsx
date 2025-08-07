import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import andreImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";
import TypingAnimationSeoWords from "./typing-animation-seo-words";

export default function HeroSectionSeoSimple() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-16 left-16 w-20 h-20 bg-orange-200 rounded-full filter blur-xl opacity-60"
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-16 w-32 h-32 bg-blue-200 rounded-full filter blur-2xl opacity-50"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-orange-300 rounded-full filter blur-xl opacity-40"
          animate={{ 
            scale: [1, 1.2, 1],
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
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-slate-600 font-medium text-xl">Suchmaschinenoptimierung für mehr Sichtbarkeit</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Effektive SEO</span><br />
              <span className="text-slate-900">für mehr Reichweite und neue Kunden</span>
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-slate-700">Sichtbar. Nachhaltig. </span>
              <TypingAnimationSeoWords />
            </motion.div>
            
            <motion.div 
              className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                Ich helfe Ihnen dabei, Ihre Website bei Google sichtbarer zu machen und neue Besucher auf Ihre Angebote aufmerksam zu machen. Mit Basic-SEO optimiere ich Ihre Seite technisch und inhaltlich, damit sie langfristig besser gefunden wird.
                <br /><br />
                Von der Keyword-Analyse über die OnPage-Optimierung bis hin zu strukturierten Inhalten – ich lege die Basis für eine bessere Platzierung in den Suchergebnissen und damit für mehr Anfragen über Ihre Website.
              </p>
              <br />
              <div className="space-y-2">
                <div className="text-lg font-bold text-slate-800">Ihre Sichtbarkeit. Mein Ziel.</div>
                <div className="font-medium text-slate-600">Damit Ihre Website von Kunden gefunden wird.</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection("services")}
                className="text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:shadow-xl transition-all duration-500 ease-in-out"
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
                data-testid="button-explore-services"
              >
                Meine Leistungen
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-portfolio"
              >
                Portfolio ansehen
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow Effect Behind Image */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div 
                className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px] mx-auto rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(254, 122, 51, 0.3) 0%, rgba(254, 122, 51, 0.15) 40%, rgba(7, 67, 124, 0.1) 70%, transparent 100%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)'
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm drop-shadow-2xl relative z-10"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={andreImage} 
                alt="Andre Szittnick - Professioneller Webdesigner" 
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                data-testid="img-hero-photo"
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("content")}
          >
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}