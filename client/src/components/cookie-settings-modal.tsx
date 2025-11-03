import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, BarChart3, Target, Sliders, Shield, CheckCircle2, XCircle } from "lucide-react";
import { useCookieConsent, CookiePreferences } from "@/hooks/use-cookie-consent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookieCategory {
  id: keyof CookiePreferences;
  title: string;
  description: string;
  icon: any;
  required: boolean;
  examples: string[];
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    title: 'Notwendige Cookies',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    icon: Shield,
    required: true,
    examples: ['Session-Verwaltung', 'Sicherheit', 'Cookie-Einstellungen']
  },
  {
    id: 'preferences',
    title: 'Präferenz-Cookies',
    description: 'Diese Cookies ermöglichen es der Website, sich an Ihre Einstellungen zu erinnern (z.B. Sprache, Region).',
    icon: Sliders,
    required: false,
    examples: ['Spracheinstellungen', 'Design-Präferenzen', 'Regionale Einstellungen']
  },
  {
    id: 'analytics',
    title: 'Analyse-Cookies',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt werden.',
    icon: BarChart3,
    required: false,
    examples: ['Google Analytics', 'Besucherzahlen', 'Seitenaufrufe', 'Verweildauer']
  },
  {
    id: 'marketing',
    title: 'Marketing-Cookies',
    description: 'Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.',
    icon: Target,
    required: false,
    examples: ['Werbenetzwerke', 'Social Media Integration', 'Personalisierte Werbung']
  }
];

export default function CookieSettingsModal() {
  const { showSettings, closeSettings, preferences: savedPreferences, savePreferences, acceptAll, rejectAll } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(savedPreferences);

  useEffect(() => {
    setLocalPreferences(savedPreferences);
  }, [savedPreferences]);

  if (!showSettings) return null;

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return;
    setLocalPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeSettings}
        data-testid="cookie-settings-modal"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#fa5219] to-[#19243b] p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Cookie-Einstellungen</h2>
                  <p className="text-sm text-white/90 mt-1">Verwalten Sie Ihre Datenschutz-Präferenzen</p>
                </div>
              </div>
              <button
                onClick={closeSettings}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                data-testid="button-close-settings"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                Sie können wählen, welche Cookie-Kategorien Sie zulassen möchten. Notwendige Cookies 
                sind immer aktiv, da sie für die Grundfunktionen der Website erforderlich sind.
              </p>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {cookieCategories.map((category) => {
                const Icon = category.icon;
                const isEnabled = localPreferences[category.id];
                
                return (
                  <div
                    key={category.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"
                    data-testid={`cookie-category-${category.id}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg ${
                          isEnabled 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              {category.title}
                            </h3>
                            {category.required && (
                              <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                Erforderlich
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {category.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.examples.map((example, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Switch
                          checked={isEnabled}
                          onCheckedChange={() => handleToggle(category.id)}
                          disabled={category.required}
                          className="data-[state=checked]:bg-[#fa5219]"
                          data-testid={`switch-${category.id}`}
                        />
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {isEnabled ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Aktiviert</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-400 font-medium">Deaktiviert</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* DSGVO Info */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <p className="font-semibold mb-1">DSGVO-konforme Datenverarbeitung</p>
                  <p className="text-blue-700 dark:text-blue-300">
                    Ihre Einstellungen werden lokal in Ihrem Browser gespeichert. Sie können Ihre Zustimmung 
                    jederzeit widerrufen. Weitere Informationen finden Sie in unserer{' '}
                    <a href="/datenschutz" className="underline hover:text-blue-800">Datenschutzerklärung</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-[#fa5219] hover:bg-[#e64810] text-white font-semibold py-3 rounded-xl"
                data-testid="button-accept-all"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1 bg-[#19243b] hover:bg-[#2d3a5c] text-white font-semibold py-3 rounded-xl"
                data-testid="button-save-preferences"
              >
                Auswahl speichern
              </Button>
              <Button
                onClick={rejectAll}
                variant="outline"
                className="flex-1 border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 font-semibold py-3 rounded-xl"
                data-testid="button-reject-all"
              >
                Nur notwendige
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
