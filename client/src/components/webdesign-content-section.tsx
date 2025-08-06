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