import { motion } from "framer-motion";
import { Code, Brain, Monitor, Search, DollarSign, Users, Zap } from "lucide-react";

export default function WebdesignContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              <span className="text-orange-500">Professionelles Webdesign</span> für Ihren Online-Erfolg
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Eine moderne Website ist heute weit mehr als nur ein digitales Schaufenster – sie ist der zentrale Baustein Ihres Online-Marketings. Mit einem professionellen Webdesign hinterlassen Sie bei Besuchern sofort einen positiven Eindruck und steigern die Wahrscheinlichkeit, dass aus Interessenten Kunden werden.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein durchdachtes Webdesign überzeugt durch klare Strukturen, schnelle Ladezeiten und mobile Optimierung. Da immer mehr Nutzer über Smartphones auf Websites zugreifen, ist Responsive Design unverzichtbar. Gleichzeitig sorgt eine saubere technische Umsetzung dafür, dass Google Ihre Seite als benutzerfreundlich einstuft und mit besseren Platzierungen belohnt.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              So wird Ihre Website nicht nur optisch zum Aushängeschild Ihres Unternehmens, sondern auch zu einem wirksamen Marketinginstrument, das Ihnen langfristig mehr Sichtbarkeit und neue Kunden bringt.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              <span className="text-orange-500">Modernes Webdesign</span> steigert Ihre Sichtbarkeit
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein professionelles Webdesign ist nicht nur für Ihre Besucher wichtig, sondern auch für Suchmaschinen wie Google. Technisch saubere und optisch ansprechende Websites werden von Suchmaschinen bevorzugt, weil sie den Nutzern ein besseres Erlebnis bieten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein gutes Webdesign umfasst daher schnelle Ladezeiten, mobilfreundliche Strukturen und eine intuitive Navigation. Wenn Ihre Besucher schnell finden, was sie suchen, steigt die Verweildauer – ein wichtiger Faktor für Ihr Ranking.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Darüber hinaus trägt ein modernes Design dazu bei, dass Ihre Marke kompetent, vertrauenswürdig und professionell wahrgenommen wird. Wer beim ersten Eindruck überzeugt, gewinnt nicht nur neue Kunden, sondern stärkt auch langfristig seine Markenpräsenz im digitalen Raum.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Section */}
        <div className="py-16 lg:py-24 bg-slate-50 rounded-3xl mb-16 lg:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Warum ich der richtige <span className="text-orange-500">Partner</span> für Ihr Projekt bin
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
                Erleben Sie den Unterschied bei der Zusammenarbeit mit einem engagierten Digitalspezialisten, der Ihren Erfolg an erste Stelle setzt.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DollarSign className="text-white w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Keine Agentur-Preise</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Direkte Zusammenarbeit ohne Agentur-Aufschläge - transparente, faire Preise für Premium-Qualität.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="text-white w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Persönliche Beratung von Anfang bis Ende</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Individuelle Betreuung während Ihres gesamten Projekts mit persönlicher Aufmerksamkeit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="text-white w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Schnelle Umsetzung</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kurze Umsetzungszeiten ohne Qualitätsverlust - Ihr Projekt wird effizient und professionell geliefert.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 3: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              <span className="text-orange-500">Individuelle Webdesign-Lösungen</span> für Ihr Unternehmen
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Jedes Unternehmen hat individuelle Anforderungen, die sich nicht mit einer Standard-Website erfüllen lassen. Deshalb setze ich auf maßgeschneiderte Webdesign-Lösungen, die exakt auf Ihre Marke, Ihre Zielgruppe und Ihre Geschäftsziele zugeschnitten sind.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Individuelles Webdesign bedeutet, dass Farben, Layout, Schriftarten und Bildsprache perfekt zu Ihrem Unternehmen passen. Gleichzeitig wird die Website technisch optimiert, damit sie schnell lädt, auf allen Geräten funktioniert und von Google optimal gelesen werden kann.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              So entsteht ein Online-Auftritt, der nicht nur optisch überzeugt, sondern auch Vertrauen schafft, neue Kunden anzieht und langfristig messbare Ergebnisse liefert.
            </p>
          </motion.div>
        </div>

        {/* Section 4: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              <span className="text-orange-500">Webdesign</span> als Grundlage für digitale <span className="text-orange-500">Kundengewinnung</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ihre Website ist heute der wichtigste Vertriebskanal, denn die meisten Kunden informieren sich online, bevor sie eine Entscheidung treffen. Professionelles Webdesign ist daher die Grundlage für eine erfolgreiche Kundengewinnung im Internet.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein überzeugendes Design verbindet ästhetische Gestaltung mit klarer Nutzerführung und Conversion-Optimierung. Besucher finden sich schnell zurecht, können Ihre Angebote leicht erfassen und werden gezielt zu Kontaktanfragen oder Käufen geführt.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Zusätzlich profitieren Sie von SEO-Vorteilen: Eine saubere technische Struktur, optimierte Inhalte und mobile Darstellung sorgen für bessere Google-Rankings und langfristig mehr Reichweite.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              So wird Ihre Website von einer einfachen Visitenkarte zu einem leistungsstarken Marketing- und Vertriebstool, das Ihrem Unternehmen messbaren Erfolg bringt.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 5: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Erfolgreiches <span className="text-orange-500">Webdesign</span> kombiniert <span className="text-orange-500">Design</span> und <span className="text-orange-500">Technik</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Viele unterschätzen, dass Webdesign weit mehr ist als ein schönes Layout. Eine erfolgreiche Website entsteht erst, wenn Design, Technik und Nutzerfreundlichkeit perfekt ineinandergreifen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein moderner Internetauftritt muss übersichtlich, schnell und mobiloptimiert sein. Wenn Besucher sofort finden, wonach sie suchen, steigt die Chance, dass sie länger auf der Seite bleiben und mit Ihrem Unternehmen in Kontakt treten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Gleichzeitig sollten Inhalte so aufbereitet sein, dass Google sie optimal erfassen kann. SEO-freundliches Webdesign sorgt dafür, dass Ihre Website langfristig sichtbar bleibt und kontinuierlich neue Interessenten erreicht.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Das Zusammenspiel aus starker Optik, intuitiver Bedienung und sauberer Technik macht Ihre Website zu einem echten Erfolgsfaktor für Ihr Business.
            </p>
          </motion.div>
        </div>

        {/* Section 6: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Mit <span className="text-orange-500">Webdesign</span> Vertrauen und <span className="text-orange-500">Markenstärke</span> aufbauen
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Eine professionelle Website ist oft der erste Berührungspunkt zwischen Ihnen und Ihren Kunden. Ein modernes Webdesign schafft hier Vertrauen und vermittelt sofort Kompetenz und Seriosität.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Neben der optischen Wirkung spielt auch die Benutzerfreundlichkeit eine entscheidende Rolle. Besucher erwarten heute eine klare Navigation, kurze Ladezeiten und eine optimale Darstellung auf allen Endgeräten. Wenn Ihre Website diese Erwartungen erfüllt, bleiben Nutzer länger und beschäftigen sich intensiver mit Ihren Angeboten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Gleichzeitig stärken Sie Ihre Markenidentität, wenn Design, Bildwelt und Texte ein stimmiges Gesamtbild ergeben. Auf diese Weise wird Ihre Website nicht nur zum Aushängeschild Ihres Unternehmens, sondern auch zu einem zentralen Werkzeug für die Kundengewinnung und Markenbindung.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}