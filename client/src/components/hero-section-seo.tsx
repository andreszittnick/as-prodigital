import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import andreImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";
import TypingAnimationSeo from "@/components/typing-animation-seo";

export default function HeroSectionSeo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#f97316" fillOpacity="0.05"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-orange-500 font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
                Suchmaschinenoptimierung für mehr Sichtbarkeit
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Professionelle SEO für Ihren 
              <br />
              <span className="relative">
                <span className="gradient-text">nachhaltigen Erfolg</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <TypingAnimationSeo />
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Steigern Sie Ihre Online-Sichtbarkeit mit strategischer Suchmaschinenoptimierung. 
              Mehr Traffic, bessere Rankings und nachhaltige Erfolge für Ihr Unternehmen.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
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
                data-testid="button-seo-request"
              >
                SEO-Analyse anfragen
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end relative order-1 lg:order-2"
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
                alt="Andre Szittnick - SEO Experte" 
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