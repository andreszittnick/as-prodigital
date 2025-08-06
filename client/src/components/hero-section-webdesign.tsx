import { motion } from "framer-motion";
import { Code, Brain, Monitor, Search } from "lucide-react";
import TypingAnimationWebdesign from "./typing-animation-webdesign";
import andreImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";

export default function HeroSectionWebdesign() {
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
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-slate-600 font-medium text-xl">Professionelles Webdesign aus einer Hand</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Maßgeschneidertes Webdesign</span><br />
              <span className="text-slate-900">für Ihren professionellen Online-Auftritt</span>
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-slate-700">Modern. Schnell. </span>
              <TypingAnimationWebdesign />
            </motion.div>
            
            <motion.div 
              className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                Ich entwickle moderne, schnelle und optisch ansprechende Webseiten, die Ihre Marke perfekt präsentieren und Ihre Besucher in Kunden verwandeln.
                <br /><br />
                Ob Unternehmensseite, Landingpage oder Online-Portfolio – ich gestalte Ihre Website individuell, nutzerfreundlich und SEO-optimiert
              </p>
              <br />
              <div className="space-y-2">
                <div className="text-lg font-bold text-slate-800">Ihre Vision. Meine Mission.</div>
                <div className="font-medium text-slate-600">Damit Ihr Online-Auftritt begeistert</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/contact"
                className="text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:shadow-xl transition-all duration-500 ease-in-out text-center inline-block"
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
                data-testid="button-contact-webdesign"
              >
                Webdesign anfragen
              </motion.a>
              <motion.a
                href="/services"
                className="border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300 text-center inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-services-overview"
              >
                Weitere Leistungen
              </motion.a>
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
      </div>
      
      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section 1: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
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
              Platzhalter Überschrift 1
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Platzhalter Überschrift 2
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
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
              Platzhalter Überschrift 3
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </motion.div>
        </div>

        {/* Section 4: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Platzhalter Überschrift 4
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}