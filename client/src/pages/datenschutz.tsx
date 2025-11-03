import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Datenschutz() {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - AS ProDigital | André Szittnick</title>
        <meta name="description" content="Datenschutzerklärung von AS ProDigital - André Szittnick. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." />
        <link rel="canonical" href="https://asprodigital.de/datenschutz" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/datenschutz" />
        <meta property="og:title" content="Datenschutzerklärung - AS ProDigital" />
        <meta property="og:description" content="Datenschutzerklärung und Informationen zur Datenverarbeitung von AS ProDigital" />
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8" data-testid="heading-datenschutz">
                Datenschutzerklärung
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
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  1. Verantwortlicher
                </h2>
                <div className="text-slate-700 space-y-1">
                  <p className="font-semibold">André Szittnick</p>
                  <p>AS ProDigital</p>
                  <p>Am Schlosspark 21</p>
                  <p>55232 Alzey</p>
                  <br />
                  <p>
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a href="tel:+4967318789" className="text-orange-600 hover:text-orange-700 transition-colors">
                      06731 8789
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

              {/* 2. Allgemeines zur Datenverarbeitung */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Wir verarbeiten personenbezogene Daten unserer Website-Besucher grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                  Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung der betroffenen Person oder auf Grundlage gesetzlicher Vorschriften (Art. 6 Abs. 1 DSGVO).
                </p>
              </div>

              {/* 3. Zugriffsdaten und Logfiles */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Zugriffsdaten und Logfiles
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Beim Aufrufen dieser Website erhebt und speichert der Server automatisch Informationen in sogenannten Logfiles.
                  Diese Daten umfassen:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name der abgerufenen Datei</li>
                  <li>verwendeter Browser und Betriebssystem</li>
                  <li>Referrer-URL</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der technischen Sicherheit und Stabilität der Website.
                  Eine Weitergabe oder Zusammenführung dieser Daten mit anderen Quellen findet nicht statt.
                </p>
              </div>

              {/* 4. Kontaktaufnahme */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Kontaktaufnahme
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen gespeichert.
                  Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).
                </p>
              </div>

              {/* 5. Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Cookies
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln entscheiden, ob Sie diese akzeptieren möchten.
                  Die Nutzung technisch notwendiger Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              {/* 6. Einbindung von Google Fonts */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Einbindung von Google Fonts
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Zur einheitlichen Darstellung von Schriftarten nutzt diese Website Google Fonts, bereitgestellt von Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland).
                  Beim Aufruf der Seite werden die benötigten Schriftarten von Google-Servern geladen.
                  Dabei kann Google Ihre IP-Adresse erfassen.
                  Die Nutzung von Google Fonts erfolgt im Interesse einer ansprechenden Darstellung unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
                  Weitere Informationen:{" "}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              {/* 7. Analyse-Tools */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Analyse-Tools (optional, falls eingesetzt)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Sofern Analyse-Tools wie Google Analytics verwendet werden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                  Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                  (Dieser Abschnitt kann entfernt werden, wenn keine Analyse-Tools eingesetzt werden.)
                </p>
              </div>

              {/* 8. Rechte der betroffenen Personen */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Rechte der betroffenen Personen
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Sie haben jederzeit das Recht auf:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                  <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO).
                </p>
              </div>

              {/* 9. Aktualität und Änderung */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  9. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Oktober 2025.
                  Wir behalten uns vor, sie bei Änderungen unserer Website oder gesetzlichen Vorgaben anzupassen.
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
