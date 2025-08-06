import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useScrollPosition } from "@/hooks/use-scroll";
import logoImage from "@assets/Logo_1754308337340.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
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
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="logo-link"
            >
              <img 
                src={logoImage} 
                alt="AS-ProDigital Logo" 
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { name: "Leistungen", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Über mich", href: "/about" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <span
                  className={`transition-colors duration-300 cursor-pointer ${
                    location === item.href 
                      ? "text-orange-500 font-semibold" 
                      : "text-slate-600 hover:text-orange-500"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                className={`text-white px-4 py-2 lg:px-6 lg:py-2 text-sm lg:text-base rounded-full font-medium hover:shadow-lg transition-all duration-300 ${
                  location === "/contact" 
                    ? "bg-orange-600" 
                    : "brand-gradient"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="nav-contact"
              >
                Kontakt
              </motion.button>
            </Link>
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
                { name: "Leistungen", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Über mich", href: "/about" },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-300 text-left cursor-pointer ${
                      location === item.href 
                        ? "text-orange-500 font-semibold" 
                        : "text-slate-600 hover:text-orange-500"
                    }`}
                    data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 text-left ${
                    location === "/contact" 
                      ? "text-orange-500 font-semibold" 
                      : "text-slate-600 hover:text-orange-500"
                  }`}
                  data-testid="mobile-nav-contact"
                >
                  Kontakt
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
