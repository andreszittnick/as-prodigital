import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/491708109482"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 group"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        data-testid="button-whatsapp-float"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </motion.a>

      {/* Mail Button */}
      <motion.a
        href="mailto:info@as-prodigital.de"
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        data-testid="button-mail-float"
      >
        <Mail className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
