import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/logo-new.png" 
              alt="AS-ProDigital Logo" 
              className="h-7 md:h-8 w-auto object-contain"
            />
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-sm md:text-base">
              © 2025 André Szittnick | AS-ProDigital.<br />
              Alle Rechte vorbehalten.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end space-x-5 md:space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="/impressum" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm md:text-base"
              data-testid="link-imprint"
            >
              Impressum
            </a>
            <a 
              href="/datenschutz" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm md:text-base"
              data-testid="link-privacy"
            >
              Datenschutz
            </a>
            <a 
              href="/agb" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm md:text-base"
              data-testid="link-terms"
            >
              AGB
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
