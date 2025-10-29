import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState, useEffect } from "react";

export default function FloatingContactButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col gap-3">
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

      {/* Scroll to Top Button - etwas weiter unten zur Abgrenzung */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 mt-6"
            style={{
              background: 'linear-gradient(135deg, #07437c 0%, #0a5a9e 100%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
