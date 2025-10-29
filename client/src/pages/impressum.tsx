import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Impressum - AS ProDigital | André Szittnick</title>
        <meta name="description" content="Impressum von AS ProDigital - André Szittnick. Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise." />
        <link rel="canonical" href="https://asprodigital.de/impressum" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/impressum" />
        <meta property="og:title" content="Impressum - AS ProDigital" />
        <meta property="og:description" content="Impressum und rechtliche Angaben von AS ProDigital - André Szittnick" />
        <meta property="og:locale" content="de_DE" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 sm:pt-36 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8" data-testid="heading-impressum">
                Impressum
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Angaben gemäß § 5 TMG */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-slate-700 space-y-1">
                  <p className="font-semibold">André Szittnick</p>
                  <p>AS ProDigital</p>
                  <p>Webdesign & Online-Marketing</p>
                  <p>Am Schlosspark 21</p>
                  <p>55232 Alzey</p>
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Kontakt
                </h2>
                <div className="text-slate-700 space-y-2">
                  <p>
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a href="tel:+491708109482" className="text-orange-600 hover:text-orange-700 transition-colors">
                      0170 810 9482
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">E-Mail:</span>{" "}
                    <a href="mailto:info@as-prodigital.de" className="text-orange-600 hover:text-orange-700 transition-colors">
                      info@as-prodigital.de
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Website:</span>{" "}
                    <a href="https://www.as-prodigital.de" className="text-orange-600 hover:text-orange-700 transition-colors">
                      https://www.as-prodigital.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Umsatzsteuer-ID */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG
                </h2>
                <p className="text-slate-700 italic">Wird nachgereicht</p>
              </div>

              {/* Inhaltlich verantwortlich */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
                </h2>
                <p className="text-slate-700">André Szittnick, Adresse wie oben</p>
              </div>

              {/* Haftungsausschluss */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Haftungsausschluss (Disclaimer)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                  Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>

              {/* Urheberrecht */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Urheberrecht
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                  Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
