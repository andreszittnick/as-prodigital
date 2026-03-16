import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Monitor, Smartphone, Zap, Search, Phone, Mail,
  MapPin, ArrowRight, Star, ChevronDown, Layers, Clock, Award,
  ShieldCheck, Users, MousePointerClick,
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CityLinksSection from "@/components/city-links-section";
import BlogTeaserSection from "@/components/blog-teaser-section";
import { Button } from "@/components/ui/button";
import { getCityData } from "@/data/cities";
import NotFound from "@/pages/not-found";
import andreImage from "@assets/Andre-Szittnick_Bild_1765840488630.webp";

export default function RichCityWebdesignPage() {
  const [location] = useLocation();
  const citySlug = location.replace("/webdesign-", "");
  const city = getCityData(citySlug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!city) return <NotFound />;

  const canonical = `https://www.as-prodigital.de/webdesign-${city.slug}`;

  const coreFeatures = [
    { icon: Monitor, title: "Individuelles Design", desc: "Keine Templates. Ihre Website wird zu 100% individuell für Ihr Unternehmen und Ihre Zielgruppe in " + city.name + " gestaltet." },
    { icon: Smartphone, title: "Responsiv & mobil", desc: "Über 60% aller Suchen kommen vom Smartphone. Ihre Website ist auf jedem Gerät perfekt – Smartphone, Tablet, Desktop." },
    { icon: Zap, title: "Schnell & performant", desc: "Schnelle Ladezeiten sind entscheidend: Google bevorzugt schnelle Seiten – und Besucher verlassen langsame Sites sofort." },
    { icon: Search, title: "SEO von Anfang an", desc: "Jede Website wird von Grund auf für Suchmaschinen optimiert – für bessere Google-Rankings in " + city.name + " von Tag 1." },
  ];

  const usp = [
    "Persönlicher Ansprechpartner von Anfang bis Ende – kein Callcenter",
    "Faire Preise ohne versteckte Kosten – günstiger als externe Anbieter",
    "SEO von Anfang an in jede Website eingebaut",
    "Schnelle Umsetzung: von der Idee zur fertigen Website in 2–6 Wochen",
    "Ihre Website gehört Ihnen – keine Bindung an teure Abonnements",
    "Persönliche Betreuung auch nach dem Launch",
  ];

  return (
    <>
      <Helmet>
        <title>{`Webdesign ${city.name} – Professionelle Websites | AS-ProDigital`}</title>
        <meta name="description" content={city.webdesignDescription} />
        <meta name="keywords" content={city.webdesignKeywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`Webdesign ${city.name} | AS-ProDigital`} />
        <meta property="og:description" content={city.webdesignDescription} />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Webdesign",
            "name": `Webdesign ${city.name}`,
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.as-prodigital.de/#organization",
              "name": "AS-ProDigital",
              "founder": { "@type": "Person", "name": "André Szittnick" },
              "telephone": "+49-6731-8789",
              "email": "info@as-prodigital.de",
              "address": { "@type": "PostalAddress", "addressLocality": "Alzey", "postalCode": "55232", "addressRegion": "Rheinland-Pfalz", "addressCountry": "DE" },
              "url": "https://www.as-prodigital.de",
            },
            "areaServed": { "@type": "City", "name": city.nameFull },
            "description": city.webdesignDescription,
            "url": canonical,
          })
        }} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />

        {/* ── HERO ── */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden dynamic-background">
          <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/90" />
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-[#fa5219]/10 text-[#fa5219] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Webdesign in {city.name}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#19243b] dark:text-white mb-5 leading-tight">
                Professionelles <span className="text-[#fa5219]">Webdesign</span> in {city.name}<br className="hidden md:block" />– Websites, die Kunden gewinnen
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Individuelle Websites für Unternehmen in {city.nameFull} –
                mit persönlichem Service, fairen Preisen und SEO von Anfang an.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/kontakt">
                  <Button className="bg-[#fa5219] hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-xl">
                    Kostenlos anfragen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/video-analyse">
                  <Button variant="outline" className="border-[#19243b] text-[#19243b] dark:border-gray-400 dark:text-gray-300 px-8 py-6 text-base font-semibold rounded-xl">
                    Kostenlose Video-Analyse
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500 dark:text-gray-400">
                {["Responsives Design", "SEO-optimiert", "Faire Preise", "Persönlicher Service"].map(tag => (
                  <div key={tag} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#fa5219]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-[#19243b] py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2–6", label: "Wochen bis zur fertigen Website" },
                { value: "100%", label: "individuelles Design, kein Template" },
                { value: "0€", label: "Kosten für das Erstgespräch" },
                { value: "1×", label: "zahlen – dauerhaft profitieren" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="text-2xl md:text-3xl font-black text-[#fa5219] mb-1">{s.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEKTION 1: Links Stat-Bars, Rechts Einleitungstext ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LINKS: Stat-Bars */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#fa5219]/10 p-3 rounded-xl">
                    <Monitor className="w-6 h-6 text-[#fa5219]" />
                  </div>
                  <span className="font-bold text-[#19243b] dark:text-white">Digitale Präsenz in {city.name}</span>
                </div>
                <div className="space-y-4">
                  {city.webdesignStats.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-600 dark:text-gray-300">{s.label}</span>
                        <span className="font-bold text-[#fa5219]">{s.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="bg-[#fa5219] h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-5">Basierend auf aktuellen Studien zur Digitalisierung im deutschen Mittelstand</p>
              </motion.div>

              {/* RECHTS: Einleitungstext */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Warum Webdesign in {city.name}?</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Ihre Kunden suchen online – finden sie Sie?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.localContext}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.webdesignIntro}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {city.webdesignLocalNeed}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: 4 Leistungskarten ── */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#19243b] dark:text-white">Was Ihre Website in {city.name} leisten muss</h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="bg-[#fa5219]/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-[#fa5219]" />
                  </div>
                  <h4 className="font-bold text-[#19243b] dark:text-white text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEKTION 2: Links Text persönlicher Service, Rechts André-Foto ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LINKS: Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Persönliche Betreuung</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Ihr direkter Ansprechpartner – von der ersten Idee bis zum Launch
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mein Name ist André Szittnick. Als Webdesigner und SEO-Experte aus Alzey biete ich Unternehmen in {city.name} und der gesamten Region einen direkten, persönlichen Service. Bei AS-ProDigital arbeite ich persönlich an Ihrem Projekt – kein Callcenter, kein anonymes Ticket-System, kein ständig wechselnder Ansprechpartner.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.webdesignSection3}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {city.webdesignSection4}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+4967318789" className="flex items-center gap-2 text-[#19243b] dark:text-white font-semibold hover:text-[#fa5219] transition-colors">
                    <Phone className="w-4 h-4 text-[#fa5219]" /> 06731 8789
                  </a>
                  <a href="mailto:info@as-prodigital.de" className="flex items-center gap-2 text-[#19243b] dark:text-white font-semibold hover:text-[#fa5219] transition-colors">
                    <Mail className="w-4 h-4 text-[#fa5219]" /> info@as-prodigital.de
                  </a>
                </div>
              </motion.div>

              {/* RECHTS: Foto */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#fa5219]/10 rounded-3xl -z-10 blur-xl" />
                  <img
                    src={andreImage}
                    alt="André Szittnick – Webdesigner aus Alzey"
                    className="w-72 md:w-80 rounded-2xl shadow-xl object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#fa5219]" />
                    <span className="text-sm font-semibold text-[#19243b] dark:text-white">{city.distanceFromAlzey}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: Zitat ── */}
        <section className="py-10 bg-[#fa5219]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <MousePointerClick className="w-8 h-8 text-white/60 mx-auto mb-3" />
            <p className="text-white text-xl md:text-2xl font-bold leading-snug">
              „Eine professionelle Website ist kein Kostenpunkt –<br className="hidden md:block" />
              sie ist Ihr bestes Verkaufswerkzeug, 24 Stunden am Tag."
            </p>
            <p className="text-white/70 text-sm mt-3">André Szittnick, AS-ProDigital</p>
          </div>
        </section>

        {/* ── SEKTION 3: Rechts USPs-Karte, Links Text über Qualität ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LINKS: Qualitäts-Karte */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#19243b] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-[#fa5219]" />
                  <span className="text-lg font-bold">AS-ProDigital Versprechen</span>
                </div>
                <div className="space-y-4 mb-6">
                  {usp.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fa5219] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
                  <span className="text-gray-400 text-xs">Zufriedene Kunden aus der Region</span>
                </div>
              </motion.div>

              {/* RECHTS: Text */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Warum AS-ProDigital?</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Qualität und Fairness – direkt vom Experten
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Große Webdesign-Studios in {city.name} und Umgebung haben hohe Fixkosten – Büromiete, Mitarbeiter, Vertrieb – die sich in teuren Angeboten niederschlagen. Bei AS-ProDigital zahlen Sie nur für das, was Sie wirklich bekommen: hochwertige Webdesign-Arbeit mit persönlichem Service.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Als persönlich geführter Betrieb aus Alzey kann ich faire Preise anbieten, ohne Abstriche bei der Qualität zu machen. Jede Website, die ich erstelle, ist individuell gestaltet, technisch sauber entwickelt und von Anfang an für Suchmaschinen optimiert – alles aus einer Hand, ohne Mittelsmänner.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Wählen Sie AS-ProDigital, wählen Sie Transparenz, Qualität und einen Partner, der wirklich an Ihrem Erfolg interessiert ist – nicht nur am Projektabschluss.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: Prozessvergleich ── */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#19243b] dark:text-white">So entsteht Ihre Website in {city.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Einfacher Prozess, professionelles Ergebnis – in 4 klaren Schritten</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: "01", icon: Users, title: "Erstgespräch", desc: "Kostenlos, unverbindlich. Wir besprechen Ihre Ziele, Zielgruppe und Anforderungen." },
                { step: "02", icon: Layers, title: "Design & Konzept", desc: "Individueller Entwurf, abgestimmt auf Ihr Unternehmen in " + city.name + "." },
                { step: "03", icon: Zap, title: "Entwicklung", desc: "Saubere, schnelle Entwicklung – SEO-optimiert von der ersten Zeile Code." },
                { step: "04", icon: Award, title: "Launch & Support", desc: "Ihre Website geht online – mit meiner persönlichen Betreuung auch danach." },
              ].map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm text-center"
                >
                  <div className="text-3xl font-black text-[#fa5219]/20 mb-2">{p.step}</div>
                  <div className="bg-[#fa5219]/10 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <p.icon className="w-5 h-5 text-[#fa5219]" />
                  </div>
                  <h4 className="font-bold text-[#19243b] dark:text-white text-sm mb-1">{p.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEKTION 4: Links Text Investment, Rechts Kontakt-Karte ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

              {/* LINKS: Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Investition mit Rendite</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Was eine professionelle Website für Ihr Unternehmen in {city.name} bewirkt
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Viele Unternehmen schieben eine professionelle Website auf, weil sie Kosten scheuen oder den Aufwand fürchten. Dabei ist die Realität eine andere: Eine gut gemachte Website amortisiert sich schnell – weil sie rund um die Uhr für neue Kunden sorgt, ohne dass Sie aktiv werben müssen.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Anders als Google Ads, die nur so lange funktionieren, wie Sie zahlen, baut eine optimierte Website nachhaltige Sichtbarkeit auf. Jeder Monat, in dem Ihre Website bei Google gut platziert ist, bringt neue Besucher – ohne laufende Werbekosten. Das ist der entscheidende Unterschied zwischen kurzfristiger Werbung und langfristiger digitaler Präsenz.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mit AS-ProDigital bekommen Unternehmen in {city.name} beides: eine Website, die sofort überzeugt – und eine, die langfristig bei Google gefunden wird. Diese Kombination ist Ihre stärkste digitale Visitenkarte.
                </p>
                <div className="mt-6 flex items-start gap-3 bg-[#fa5219]/5 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-[#fa5219] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-[#19243b] dark:text-white">Antwort innerhalb von 24 Stunden:</strong> Ich melde mich schnell und unkompliziert bei Ihnen – telefonisch, per E-Mail oder per WhatsApp.
                  </p>
                </div>
              </motion.div>

              {/* RECHTS: Kontakt-Karte */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#19243b] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Jetzt kostenlos anfragen</h3>
                <p className="text-gray-300 text-sm mb-6">Kostenloses Erstgespräch, unverbindliches Angebot – kein Zeitdruck, keine Verpflichtung.</p>
                <div className="space-y-4 mb-6">
                  <a href="tel:+4967318789" className="flex items-center gap-3 hover:text-[#fa5219] transition-colors">
                    <Phone className="w-5 h-5 text-[#fa5219]" /><span>06731 8789</span>
                  </a>
                  <a href="mailto:info@as-prodigital.de" className="flex items-center gap-3 hover:text-[#fa5219] transition-colors">
                    <Mail className="w-5 h-5 text-[#fa5219]" /><span>info@as-prodigital.de</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#fa5219]" />
                    <span>Alzey ({city.distanceFromAlzey} von {city.name})</span>
                  </div>
                </div>
                <Link href="/kontakt">
                  <Button className="w-full bg-[#fa5219] hover:bg-orange-600 text-white font-semibold py-5">
                    Zum Kontaktformular <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-gray-400 mt-3 text-center">Kostenlos & unverbindlich</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mb-4">
                Häufige Fragen zum Webdesign in {city.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Antworten auf die wichtigsten Fragen rund um Ihre neue Website.</p>
            </motion.div>
            <div className="space-y-3">
              {city.faqWebdesign.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span className="font-semibold text-[#19243b] dark:text-white text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#fa5219] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KARTE + STÄDTELINKS ── */}
        <CityLinksSection />

        <BlogTeaserSection category="webdesign" cityName={city.name} />

        {/* ── FINALER CTA ── */}
        <section className="py-14 bg-[#19243b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bereit für Ihre neue Website in {city.name}?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Starten Sie mit einem kostenlosen Erstgespräch – unverbindlich, ohne Zeitdruck. Ich zeige Ihnen, was eine professionelle Website für Ihr Unternehmen bewirken kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button className="bg-[#fa5219] hover:bg-orange-600 text-white px-8 py-5 font-semibold rounded-xl">
                  Jetzt kostenlos anfragen
                </Button>
              </Link>
              <Link href={`/seo-${city.slug}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-5 font-semibold rounded-xl">
                  Auch SEO in {city.name} entdecken
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
