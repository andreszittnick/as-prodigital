import { motion } from "framer-motion";
import { Code, Brain, Monitor, Search } from "lucide-react";

export default function WebdesignContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
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
              Professionelles Webdesign für Ihren Online-Erfolg
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Modernes Webdesign steigert Ihre Sichtbarkeit
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
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Bild links, Text rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
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
              Individuelle Webdesign-Lösungen für Ihr Unternehmen
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Webdesign als Grundlage für digitale Kundengewinnung
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
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}