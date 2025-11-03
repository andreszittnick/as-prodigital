import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet, Search, TrendingUp, Settings, Palette, Layout } from "lucide-react";

// 1. Professional Webdesign Animation - Browser Window with animated elements
export function ProfessionalWebdesignAnimation() {
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="border border-orange-300"></div>
          ))}
        </div>
      </div>
      
      {/* Browser Window */}
      <motion.div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Browser Header */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 bg-white/20 rounded px-2 py-1 text-xs text-white/80">
            yourwebsite.com
          </div>
        </div>
        
        {/* Browser Content */}
        <div className="p-6 space-y-4">
          <motion.div
            className="h-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.div
            className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="h-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          ></motion.div>
          
          {/* Image placeholder */}
          <motion.div
            className="h-24 bg-gradient-to-br from-orange-100 to-blue-100 rounded flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Layout className="w-8 h-8 text-orange-500" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating sparkles */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-orange-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>
    </div>
  );
}

// 2. Responsive Design Animation - Devices transforming
export function ResponsiveDesignAnimation() {
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
      {/* Background circles */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      
      <div className="relative flex items-end justify-center gap-4">
        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-24 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-lg border-4 border-blue-700 flex items-center justify-center">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <div className="w-28 h-2 bg-blue-700 rounded-b-lg -mt-1"></div>
          <div className="w-32 h-1 bg-blue-800 rounded-full mx-auto"></div>
        </motion.div>
        
        {/* Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-16 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg border-4 border-orange-600 flex items-center justify-center">
            <Tablet className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-1 bg-orange-600 rounded-full mx-auto mt-1"></div>
        </motion.div>
        
        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-10 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg border-3 border-blue-700 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <motion.path
          d="M 100 150 Q 150 130, 200 150"
          stroke="#fa5219"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>
    </div>
  );
}

// 3. Individual Webdesign Animation - Color Palette
export function IndividualWebdesignAnimation() {
  const colors = ['#fa5219', '#19243b', '#ff6b35', '#1a5490', '#ffa500'];
  
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
      {/* Paint palette */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
          <Palette className="w-12 h-12 text-orange-500 mb-4" />
          
          {/* Color circles */}
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 rounded-full shadow-lg"
                style={{ backgroundColor: color }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              ></motion.div>
            ))}
          </div>
          
          {/* Design elements */}
          <div className="mt-6 space-y-2">
            <motion.div
              className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            ></motion.div>
            <motion.div
              className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-8 right-12 w-8 h-8 border-4 border-orange-400 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-12 left-12 w-6 h-6 bg-blue-400 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}

// 4. SEO-friendly Webdesign Animation - Search Rankings
export function SeoWebdesignAnimation() {
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
      {/* Search bar */}
      <div className="relative w-full max-w-xs">
        <motion.div
          className="bg-white rounded-full shadow-2xl p-4 flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Search className="w-6 h-6 text-blue-500" />
          <motion.div
            className="flex-1 h-4 bg-gray-100 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>
        
        {/* Search results */}
        <div className="mt-6 space-y-3">
          {[1, 2, 3].map((rank) => (
            <motion.div
              key={rank}
              className="bg-white rounded-lg shadow-lg p-4 border-l-4"
              style={{
                borderLeftColor: rank === 1 ? '#fa5219' : rank === 2 ? '#19243b' : '#94a3b8',
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + rank * 0.2 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    backgroundColor: rank === 1 ? '#fa5219' : rank === 2 ? '#19243b' : '#94a3b8',
                  }}
                >
                  {rank}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '80%' }}></div>
                  <div className="h-2 bg-gray-100 rounded" style={{ width: '60%' }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Rising arrow */}
      <motion.div
        className="absolute top-8 right-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp className="w-12 h-12 text-green-500" />
      </motion.div>
    </div>
  );
}

// 5. Conversion-oriented Webdesign - Funnel Animation
export function ConversionWebdesignAnimation() {
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
      {/* Conversion funnel */}
      <div className="relative">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Visitors */}
          <motion.div
            className="relative"
            initial={{ width: 0 }}
            whileInView={{ width: "280px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
              Besucher
            </div>
            <motion.div
              className="absolute -right-2 top-1/2 -translate-y-1/2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-500 border-b-8 border-b-transparent"></div>
            </motion.div>
          </motion.div>
          
          {/* Interested */}
          <motion.div
            className="relative mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-14 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
              Interessiert
            </div>
            <motion.div
              className="absolute -right-2 top-1/2 -translate-y-1/2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-0 h-0 border-t-7 border-t-transparent border-l-10 border-l-orange-500 border-b-7 border-b-transparent"></div>
            </motion.div>
          </motion.div>
          
          {/* Customers */}
          <motion.div
            className="relative mx-auto"
            initial={{ width: 0, scale: 0.8 }}
            whileInView={{ width: "140px", scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold relative">
              Kunden 🎉
              
              {/* Success particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 40],
                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 40],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1.5 + i * 0.1,
                    repeatDelay: 2,
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// 6. Maintenance & Development - Update Animation
export function MaintenanceWebdesignAnimation() {
  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
      {/* Gear animation */}
      <div className="relative">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-24 h-24 text-blue-500" />
        </motion.div>
        
        {/* Surrounding smaller gears */}
        <motion.div
          className="absolute -top-6 -right-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-12 h-12 text-orange-400" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 -left-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-10 h-10 text-green-400" />
        </motion.div>
      </div>
      
      {/* Progress bars indicating updates */}
      <div className="absolute bottom-8 left-8 right-8 space-y-3">
        <motion.div
          className="bg-white rounded-full p-2 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-full p-2 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            className="h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
          ></motion.div>
        </motion.div>
      </div>
      
      {/* Success checkmark */}
      <motion.div
        className="absolute top-8 right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
    </div>
  );
}
