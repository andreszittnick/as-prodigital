import { motion } from "framer-motion";
import logoImage from "@assets/Logo_1754308337340.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={logoImage} 
              alt="AS-ProDigital Logo" 
              className="h-8 w-auto object-contain"
            />
          </motion.div>
          
          <motion.div 
            className="text-center md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400">
              © 2024 AS ProDigital. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-start md:justify-end space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              data-testid="link-privacy"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              data-testid="link-terms"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              data-testid="link-imprint"
            >
              Imprint
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
