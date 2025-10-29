import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { motion } from "framer-motion";

export default function AGB() {
  return (
    <>
      <Helmet>
        <title>AGB - Allgemeine Geschäftsbedingungen | AS ProDigital</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen (AGB) von AS ProDigital - André Szittnick. Vertragsgrundlagen für Webdesign und SEO-Dienstleistungen." />
        <link rel="canonical" href="https://asprodigital.de/agb" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/agb" />
        <meta property="og:title" content="AGB - AS ProDigital" />
        <meta property="og:description" content="Allgemeine Geschäftsbedingungen von AS ProDigital - André Szittnick" />
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8" data-testid="heading-agb">
                Allgemeine Geschäftsbedingungen (AGB)
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
              {/* 1. Geltungsbereich */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  1. Geltungsbereich
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
                </p>
                <div className="text-slate-700 mb-4">
                  <p className="font-semibold">André Szittnick – AS ProDigital,</p>
                  <p>Am Schlosspark 21, 55232 Alzey</p>
                  <p className="italic">(nachfolgend „Auftragnehmer")</p>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  und seinen Kunden (nachfolgend „Auftraggeber").
                  Die Leistungen richten sich ausschließlich an Unternehmer im Sinne von § 14 BGB (B2B).
                </p>
              </div>

              {/* 2. Vertragsgegenstand */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Vertragsgegenstand
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Der Auftragnehmer erbringt Dienstleistungen in den Bereichen Webdesign, Suchmaschinenoptimierung (SEO) – sowohl einmalig als auch fortlaufend – sowie laufende Pflege und Aktualisierung von Websites, die vom Auftragnehmer erstellt wurden.
                  Domain- oder Hosting-Leistungen sind nicht Bestandteil der angebotenen Services.
                </p>
              </div>

              {/* 3. Vertragsschluss und Angebote */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Vertragsschluss und Angebote
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Angebote des Auftragnehmers sind freibleibend.
                  Ein Vertrag kommt erst mit schriftlicher Auftragsbestätigung oder durch Beginn der Ausführung der Leistung zustande.
                  Änderungen oder Ergänzungen bedürfen der Schriftform.
                </p>
              </div>

              {/* 4. Mitwirkungspflichten des Auftraggebers */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Mitwirkungspflichten des Auftraggebers
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Der Auftraggeber stellt sämtliche für die Durchführung erforderlichen Informationen, Inhalte, Materialien und Zugänge rechtzeitig zur Verfügung.
                  Verzögerungen, die durch verspätete oder unvollständige Mitwirkung entstehen, verlängern vereinbarte Fristen entsprechend.
                </p>
              </div>

              {/* 5. Vergütung und Zahlungsbedingungen */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Vergütung und Zahlungsbedingungen
                </h2>
                <div className="text-slate-700 leading-relaxed space-y-3">
                  <p>(1) Die Vergütung richtet sich nach dem im Angebot genannten Preis.</p>
                  <p>(2) Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen ohne Abzug zu zahlen.</p>
                  <p>(3) Bei umfangreicheren Projekten kann der Auftragnehmer Teilzahlungen verlangen. Diese werden im Angebot oder Vertrag festgelegt.</p>
                  <p>(4) Laufende Leistungen (z. B. fortlaufende SEO-Betreuung oder Websitepflege) werden monatlich in Rechnung gestellt.</p>
                  <p>(5) Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.</p>
                </div>
              </div>

              {/* 6. Leistungsumfang und Änderungen */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Leistungsumfang und Änderungen
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der Projektvereinbarung.
                  Wünscht der Auftraggeber nachträgliche Änderungen oder Erweiterungen, sind diese gesondert zu vergüten.
                </p>
              </div>

              {/* 7. Abnahme und Gewährleistung */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Abnahme und Gewährleistung
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Nach Fertigstellung teilt der Auftragnehmer die Abnahmebereitschaft mit.
                  Der Auftraggeber hat die Leistung innerhalb von 10 Tagen zu prüfen und eventuelle Mängel schriftlich mitzuteilen.
                  Erfolgt keine fristgerechte Beanstandung, gilt die Leistung als abgenommen.
                  Bei berechtigten Mängeln hat der Auftragnehmer das Recht zur Nachbesserung.
                </p>
              </div>

              {/* 8. Nutzungsrechte */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Nutzungsrechte
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Bis zur vollständigen Bezahlung verbleiben alle Rechte an den erstellten Websites, Designs, Texten und Konzepten beim Auftragnehmer.
                  Nach Zahlung erhält der Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht für den vereinbarten Zweck.
                  Eine Weitergabe oder Bearbeitung durch Dritte bedarf der vorherigen Zustimmung des Auftragnehmers.
                </p>
              </div>

              {/* 9. Haftung */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  9. Haftung
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit.
                  Für mittelbare Schäden, entgangenen Gewinn oder Datenverluste wird keine Haftung übernommen, soweit gesetzlich zulässig.
                  Für Inhalte, die vom Auftraggeber bereitgestellt werden, übernimmt der Auftragnehmer keine Verantwortung.
                </p>
              </div>

              {/* 10. Vertragslaufzeit und Kündigung */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  10. Vertragslaufzeit und Kündigung bei laufenden Leistungen
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Bei fortlaufenden Leistungen (z. B. SEO-Betreuung oder Websitepflege) gilt, sofern nichts anderes vereinbart ist, eine Mindestvertragslaufzeit von drei Monaten mit einer Kündigungsfrist von vier Wochen zum Monatsende.
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </div>

              {/* 11. Vertraulichkeit */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  11. Vertraulichkeit
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Beide Parteien verpflichten sich, sämtliche im Rahmen der Zusammenarbeit bekannt gewordenen Informationen vertraulich zu behandeln und nicht an Dritte weiterzugeben.
                </p>
              </div>

              {/* 12. Schlussbestimmungen */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  12. Schlussbestimmungen
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                  Erfüllungsort und Gerichtsstand ist – soweit gesetzlich zulässig – Alzey.
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
                </p>
              </div>

              {/* Stand und Copyright */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-slate-700">
                  <span className="font-semibold">Stand:</span> Oktober 2025
                </p>
                <p className="text-slate-700 mt-2">
                  © André Szittnick – AS ProDigital<br />
                  <a 
                    href="https://www.as-prodigital.de" 
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    https://www.as-prodigital.de
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
