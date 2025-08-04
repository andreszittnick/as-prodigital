import { motion } from "framer-motion";
import { Code, Brain } from "lucide-react";
import TypingAnimation from "./typing-animation";

export default function HeroSection() {
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
        
        {/* Floating animated elements */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-white/20 rounded-full filter blur-3xl floating-orb"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-white/30 rounded-full filter blur-2xl floating-orb"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/2 w-64 h-64 bg-white/25 rounded-full filter blur-xl pulse-orb"
          animate={{ 
            x: [-20, 20, -20],
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Additional dynamic elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/15 rounded-full filter blur-xl floating-orb" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/10 rounded-full filter blur-2xl pulse-orb" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <span className="text-slate-600 font-medium text-xl">Welcome to</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Andre Szittnick</span><br />
              <span className="text-slate-900">AS-ProDigital</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-medium mb-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-slate-700">Improve your digital </span>
              <TypingAnimation />
            </motion.div>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crafting exceptional digital experiences through modern web design, strategic SEO, and cutting-edge AI solutions. Transforming your vision into digital reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection("services")}
                className="brand-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-explore-services"
              >
                Explore Services
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-portfolio"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Professional photo */}
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                  alt="Andre Szittnick - Professional Web Designer" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  data-testid="img-hero-photo"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 brand-gradient rounded-2xl opacity-80 glass-effect flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="text-white w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 brand-blue rounded-xl opacity-80 glass-effect flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Brain className="text-white w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
