import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Typing Animation Component for Webdesign
function TypingAnimationWebdesignSpecific() {
  const words = ["Modern.", "Schnell.", "Performant.", "Responsiv.", "Überzeugend."];
  
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
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(254,122,51,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(7,67,124,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-40"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professionelles Webdesign aus einer Hand
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Maßgeschneidertes Webdesign</span><br />
              <span className="text-slate-900">für Ihren professionellen Online-Auftritt</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl sm:text-3xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-slate-700">Modern. Schnell. </span>
              <TypingAnimationWebdesignSpecific />
            </motion.div>
            
            <motion.div 
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
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
                className="text-xl font-medium text-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <span className="gradient-text font-bold">Ihre Vision. Meine Mission.</span><br />
                Damit Ihr Online-Auftritt begeistert.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="#contact">
                <motion.button
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-webdesign-anfragen"
                >
                  <span className="flex items-center gap-2">
                    Webdesign anfragen
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Main Card */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
                whileHover={{ y: -5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-300 to-blue-400 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded w-5/6"></div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    </div>
                    
                    <div className="h-6 bg-gradient-to-r from-orange-400 to-blue-400 rounded-lg mt-6"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg"
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg"
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}