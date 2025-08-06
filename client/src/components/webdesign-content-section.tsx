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
              Webdesign für moderne Unternehmen
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ein professionelles Webdesign ist heutzutage weit mehr als nur ein optischer Blickfang – es ist das digitale Schaufenster Ihres Unternehmens und oft der erste Berührungspunkt für potenzielle Kunden. Studien zeigen, dass Besucher innerhalb weniger Sekunden entscheiden, ob sie auf einer Webseite bleiben oder sie wieder verlassen. Eine klare Struktur, ein modernes Design und eine benutzerfreundliche Navigation sind daher entscheidend, um Vertrauen zu schaffen und Besucher auf Ihrer Seite zu halten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Eine erfolgreiche Website vereint Ästhetik, Funktionalität und Performance. Dazu gehört ein ansprechendes Layout, das Ihre Markenidentität widerspiegelt, ebenso wie kurze Ladezeiten, saubere Programmierung und die Optimierung für mobile Endgeräte. Immer mehr Nutzer greifen über Smartphones oder Tablets auf Webseiten zu – wer hier kein responsives Design bietet, verliert wertvolle Interessenten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Darüber hinaus spielt technisch sauberes und SEO-freundliches Webdesign eine zentrale Rolle. Nur wenn Ihre Seite für Suchmaschinen optimal vorbereitet ist, kann sie langfristig gute Platzierungen erreichen und kontinuierlich neue Besucher generieren. Ich setze auf individuelle, maßgeschneiderte Lösungen, die sowohl visuell begeistern als auch technisch überzeugen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Von der Planung und Konzeption, über die kreative Gestaltung bis hin zur Umsetzung und Optimierung erhalten Sie bei mir alles aus einer Hand – damit Ihre Website nicht nur gut aussieht, sondern auch messbare Ergebnisse liefert. Ein starkes Webdesign ist die Grundlage für Ihren nachhaltigen digitalen Erfolg.
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
              Platzhalter Überschrift 2
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
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
              Platzhalter Überschrift 3
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
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
              Platzhalter Überschrift 4
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
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