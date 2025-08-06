import { motion } from "framer-motion";
import { Code, Brain, Monitor, Search } from "lucide-react";

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