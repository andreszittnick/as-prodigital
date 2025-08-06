import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Monitor, Search, Brain } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useScrollPosition } from "@/hooks/use-scroll";
import logoImage from "@assets/Logo_1754308337340.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link href="/services">
                <span
                  className={`flex items-center transition-colors duration-300 cursor-pointer ${
                    location === "/services" 
                      ? "text-orange-500 font-semibold" 
                      : "text-slate-600 hover:text-orange-500"
                  }`}
                  data-testid="nav-leistungen"
                >
                  Leistungen
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isServicesHovered ? "rotate-180" : ""
                  }`} />
                </span>
              </Link>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {[
                        { 
                          name: "Webdesign", 
                          href: "/services#webdesign",
                          description: "Moderne, responsive Websites",
                          icon: Monitor,
                          color: "text-blue-500"
                        },
                        { 
                          name: "Basic-SEO", 
                          href: "/services#seo",
                          description: "Suchmaschinenoptimierung",
                          icon: Search,
                          color: "text-green-500"
                        },
                        { 
                          name: "Individuelle KI-Lösungen", 
                          href: "/services#ki-loesungen",
                          description: "Maßgeschneiderte KI-Anwendungen",
                          icon: Brain,
                          color: "text-purple-500"
                        }
                      ].map((service, index) => (
                        <Link key={index} href={service.href}>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(254, 122, 51, 0.1)" }}
                            transition={{ duration: 0.05 }}
                            className="px-4 py-3 cursor-pointer flex items-start space-x-3"
                            data-testid={`dropdown-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <motion.div
                              initial={{ scale: 1, rotate: 0 }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.1, ease: "easeOut" }}
                              className={`mt-0.5 ${service.color}`}
                            >
                              <service.icon className="w-5 h-5" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-white">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {service.description}
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            {[
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
              {/* Mobile Services Dropdown */}
              <div>
                <div className="flex items-center justify-between">
                  <Link href="/services">
                    <span
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors duration-300 text-left cursor-pointer ${
                        location === "/services" 
                          ? "text-orange-500 font-semibold" 
                          : "text-slate-600 hover:text-orange-500"
                      }`}
                      data-testid="mobile-nav-leistungen"
                    >
                      Leistungen
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="p-1 text-slate-600 hover:text-orange-500"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      {[
                        { 
                          name: "Webdesign", 
                          href: "/services#webdesign",
                          icon: Monitor,
                          color: "text-blue-500"
                        },
                        { 
                          name: "Basic-SEO", 
                          href: "/services#seo",
                          icon: Search,
                          color: "text-green-500"
                        },
                        { 
                          name: "Individuelle KI-Lösungen", 
                          href: "/services#ki-loesungen",
                          icon: Brain,
                          color: "text-purple-500"
                        }
                      ].map((service, index) => (
                        <Link key={index} href={service.href}>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-sm text-slate-500 hover:text-orange-500 cursor-pointer transition-colors duration-75 py-1"
                          >
                            <motion.div
                              initial={{ scale: 1, rotate: 0 }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.1, ease: "easeOut" }}
                              className={service.color}
                            >
                              <service.icon className="w-4 h-4" />
                            </motion.div>
                            <span>{service.name}</span>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Mobile Navigation Items */}
              {[
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
