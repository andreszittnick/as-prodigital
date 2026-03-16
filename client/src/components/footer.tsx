import { motion } from "framer-motion";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { MapPin, Phone, Mail } from "lucide-react";

const webdesignCities = [
  { name: "Alzey", slug: "alzey" },
  { name: "Worms", slug: "worms" },
  { name: "Bad Kreuznach", slug: "bad-kreuznach" },
  { name: "Bingen", slug: "bingen" },
  { name: "Ingelheim", slug: "ingelheim" },
  { name: "Kaiserslautern", slug: "kaiserslautern" },
  { name: "Mannheim", slug: "mannheim" },
];

const seoCities = [
  { name: "Alzey", slug: "alzey" },
  { name: "Worms", slug: "worms" },
  { name: "Bad Kreuznach", slug: "bad-kreuznach" },
  { name: "Bingen", slug: "bingen" },
  { name: "Ingelheim", slug: "ingelheim" },
  { name: "Kaiserslautern", slug: "kaiserslautern" },
  { name: "Mannheim", slug: "mannheim" },
];

export default function Footer() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="bg-[#19243b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Spalte 1: Logo & Kontakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <picture>
              <source srcSet="/logo-new.webp" type="image/webp" />
              <img
                src="/logo-new.png"
                alt="AS-ProDigital Logo"
                className="h-14 w-auto object-contain mb-4"
                width="72"
                height="72"
                loading="lazy"
              />
            </picture>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Professionelles Webdesign & SEO für Unternehmen in Rheinhessen und Rheinland-Pfalz.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+4967318789" className="flex items-center gap-2.5 text-slate-400 hover:text-[#fa5219] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#fa5219] flex-shrink-0" />
                06731 8789
              </a>
              <a href="mailto:info@as-prodigital.de" className="flex items-center gap-2.5 text-slate-400 hover:text-[#fa5219] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#fa5219] flex-shrink-0" />
                info@as-prodigital.de
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-[#fa5219] flex-shrink-0" />
                Alzey, Rheinland-Pfalz
              </div>
            </div>
          </motion.div>

          {/* Spalte 2: Webdesign nach Stadt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Webdesign nach Stadt
            </h3>
            <ul className="space-y-2">
              {webdesignCities.map(city => (
                <li key={city.slug}>
                  <a
                    href={`/webdesign-${city.slug}`}
                    className="text-slate-400 hover:text-[#fa5219] transition-colors text-sm"
                  >
                    Webdesign {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 3: SEO nach Stadt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              SEO nach Stadt
            </h3>
            <ul className="space-y-2">
              {seoCities.map(city => (
                <li key={city.slug}>
                  <a
                    href={`/seo-${city.slug}`}
                    className="text-slate-400 hover:text-[#fa5219] transition-colors text-sm"
                  >
                    SEO {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 4: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Startseite", href: "/" },
                { label: "Webdesign", href: "/webdesign" },
                { label: "SEO", href: "/seo" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Über mich", href: "/ueber-mich" },
                { label: "Blog", href: "/blog" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Kostenlose Video-Analyse", href: "/video-analyse" },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#fa5219] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <p>© 2025 André Szittnick | AS-ProDigital. Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/impressum" className="hover:text-[#fa5219] transition-colors" data-testid="link-imprint">Impressum</a>
              <a href="/datenschutz" className="hover:text-[#fa5219] transition-colors" data-testid="link-privacy">Datenschutz</a>
              <a href="/agb" className="hover:text-[#fa5219] transition-colors" data-testid="link-terms">AGB</a>
              <button
                onClick={openSettings}
                className="hover:text-[#fa5219] transition-colors cursor-pointer"
                data-testid="button-cookie-settings-footer"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
