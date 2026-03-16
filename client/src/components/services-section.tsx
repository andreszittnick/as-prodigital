import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Palette, Search, ArrowRight, Check } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const services = [
    {
      icon: Palette,
      title: "Webdesign",
      subtitle: "Professionelle Websites, die überzeugen",
      description: "Ich gestalte Ihre Website so, dass sie Ihre Marke authentisch widerspiegelt und Besucher begeistert. Individuell, modern und für alle Geräte optimiert – immer mit SEO als fester Grundlage.",
      features: ["Individuelles Design – kein Template", "Responsive für alle Geräte", "SEO von Anfang an eingebaut", "Schnelle Ladezeiten"],
      href: "/webdesign",
      bg: "bg-white dark:bg-gray-800",
      iconBg: "bg-[#fa5219]",
      accentColor: "text-[#fa5219]",
      borderHover: "hover:border-[#fa5219]/40",
      cta: "Webdesign entdecken",
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      subtitle: "Besser gefunden werden bei Google",
      description: "Mit gezielter Suchmaschinenoptimierung bringe ich Ihr Unternehmen auf Seite 1 bei Google – nachhaltig, ohne Tricks und mit persönlicher Betreuung. Kein Linkaufbau, nur sicheres On-Page & Local SEO.",
      features: ["Local SEO für Ihre Region", "Technisches SEO & Ladezeiten", "Keyword-Strategie & Content", "Regelmäßige Reports"],
      href: "/seo",
      bg: "bg-[#19243b] dark:bg-[#19243b]",
      iconBg: "bg-[#fa5219]",
      accentColor: "text-[#fa5219]",
      borderHover: "hover:border-[#fa5219]/40",
      cta: "SEO entdecken",
      dark: true,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19243b] dark:text-white mb-4">
            Meine <span className="text-[#fa5219]">Leistungen</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Zwei Leistungen, ein Ziel: mehr Sichtbarkeit und mehr Kunden für Ihr Unternehmen.
          </p>
        </motion.div>

        {/* 2 Kacheln */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link href={s.href}>
                <div className={`relative rounded-3xl border-2 border-transparent ${s.borderHover} ${s.bg} p-8 md:p-10 h-full flex flex-col cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl`}>

                  {/* Icon */}
                  <div className={`${s.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${s.dark ? "text-white" : "text-[#19243b] dark:text-white"}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 ${s.accentColor}`}>
                    {s.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-base leading-relaxed mb-6 flex-grow ${s.dark ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                    {s.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${s.dark ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                        <Check className={`w-4 h-4 flex-shrink-0 ${s.accentColor}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 font-semibold text-sm ${s.accentColor} group-hover:gap-3 transition-all duration-200`}>
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Beide Leistungen auch als Kombi-Paket – Webdesign & SEO aus einer Hand.
        </motion.p>

      </div>
    </section>
  );
}
