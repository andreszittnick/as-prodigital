import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, Settings } from "lucide-react";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        data-testid="cookie-banner"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon & Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fa5219] to-[#19243b] rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#fa5219]" />
                        Wir respektieren Ihre Privatsphäre
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                        Notwendige Cookies sind für die Grundfunktionalität erforderlich. Mit Ihrer Zustimmung können 
                        wir zusätzlich Analyse- und Marketing-Cookies verwenden, um unsere Dienste zu verbessern.
                      </p>
                    </div>
                  </div>

                  <div className="ml-16 mb-4 lg:mb-0">
                    <a
                      href="/datenschutz"
                      className="text-sm text-[#fa5219] hover:text-[#19243b] font-medium underline transition-colors"
                      data-testid="link-privacy-policy"
                    >
                      Mehr in unserer Datenschutzerklärung
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-64">
                  <Button
                    onClick={acceptAll}
                    className="w-full bg-[#fa5219] hover:bg-[#e64810] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="button-accept-all-cookies"
                  >
                    Alle akzeptieren
                  </Button>
                  
                  <Button
                    onClick={openSettings}
                    variant="outline"
                    className="w-full border-2 border-[#19243b] text-[#19243b] hover:bg-[#19243b] hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    data-testid="button-cookie-settings"
                  >
                    <Settings className="w-4 h-4" />
                    Einstellungen
                  </Button>
                  
                  <Button
                    onClick={rejectAll}
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium py-3 rounded-xl transition-colors"
                    data-testid="button-reject-all-cookies"
                  >
                    Nur notwendige
                  </Button>
                </div>
              </div>
            </div>

            {/* DSGVO Notice */}
            <div className="bg-gray-50 dark:bg-gray-900 px-6 md:px-8 py-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                🔒 DSGVO-konform • Ihre Daten werden sicher verarbeitet • Widerrufsrecht jederzeit möglich
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
