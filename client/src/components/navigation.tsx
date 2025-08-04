import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 100 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm" 
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="logo-link"
          >
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="font-semibold text-lg text-slate-900">AS ProDigital</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "why-choose" },
              { name: "Process", id: "process" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-orange-500 transition-colors duration-300"
                data-testid={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="brand-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="nav-contact"
            >
              Contact
            </motion.button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "why-choose" },
                { name: "Process", id: "process" },
                { name: "Services", id: "services" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-orange-500 transition-colors duration-300 text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
