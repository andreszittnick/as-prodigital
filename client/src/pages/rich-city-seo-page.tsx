import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, TrendingUp, Search, BarChart3, Phone, Mail,
  MapPin, ArrowRight, Star, Target, ChevronDown, ShieldCheck,
  Clock, Award, AlertTriangle, Eye, Zap, Globe,
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

export default function RichCitySeoPage() {
  const [location] = useLocation();
  const citySlug = location.replace("/seo-", "");
  const city = getCityData(citySlug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!city) return <NotFound />;

  const canonical = `https://www.asprodigital.de/seo-${city.slug}`;

  const usp = [
    "Persönlicher Ansprechpartner – kein Callcenter, kein Ticket-System",
    "Faire Preise ohne versteckte Kosten",
    "Nur Google-konforme Methoden – kein Abstrafungsrisiko",
    "Kein Linkaufbau – nachhaltiges On-Page SEO und Local SEO",
    "Verständliche Berichte auf Deutsch – kein Fachjargon",
    "Webdesign und SEO aus einer Hand",
  ];

  return (
    <>
      <Helmet>
        <title>{`SEO ${city.name} – Suchmaschinenoptimierung | AS-ProDigital`}</title>
        <meta name="description" content={city.seoDescription} />
        <meta name="keywords" content={city.seoKeywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`SEO ${city.name} | AS-ProDigital`} />
        <meta property="og:description" content={city.seoDescription} />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Suchmaschinenoptimierung (SEO)",
            "name": `SEO ${city.name}`,
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.asprodigital.de/#organization",
              "name": "AS-ProDigital",
              "founder": { "@type": "Person", "name": "André Szittnick" },
              "telephone": "+49-6731-8789",
              "email": "info@as-prodigital.de",
              "address": { "@type": "PostalAddress", "addressLocality": "Alzey", "postalCode": "55232", "addressRegion": "Rheinland-Pfalz", "addressCountry": "DE" },
              "url": "https://www.asprodigital.de",
            },
            "areaServed": { "@type": "City", "name": city.nameFull },
            "description": city.seoDescription,
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
                SEO Experte {city.name}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#19243b] dark:text-white mb-5 leading-tight">
                Mehr Kunden durch besseres{" "}
                <span className="text-[#fa5219]">Google-Ranking</span>{" "}
                in {city.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Professionelle Suchmaschinenoptimierung für Unternehmen in {city.nameFull} –
                persönlicher Service, faire Preise, nachhaltige Ergebnisse.
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
                {["Local SEO", "On-Page Optimierung", "Technisches SEO", "Kein Linkaufbau"].map(tag => (
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
                { value: "Seite 1", label: "– 95% aller Klicks auf Google Seite 1" },
                { value: "3–6", label: "Monate bis zu ersten stabilen Ergebnissen" },
                { value: "0€", label: "laufende Werbekosten bei gutem SEO-Ranking" },
                { value: "100%", label: "transparente Methoden ohne Risiken" },
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
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#fa5219]/10 p-3 rounded-xl">
                    <Search className="w-6 h-6 text-[#fa5219]" />
                  </div>
                  <span className="font-bold text-[#19243b] dark:text-white">Lokale Suche in {city.name}</span>
                </div>
                <div className="space-y-4">
                  {city.seoStats.map((s, i) => (
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
                <p className="text-xs text-gray-400 mt-5">Basierend auf aktuellen Studien zur lokalen Online-Suche in Deutschland</p>
              </motion.div>

              {/* RECHTS: Text */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Warum SEO in {city.name}?</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Ihre Kunden suchen Google – finden sie Sie?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.localContext}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.seoIntro}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {city.seoLocalNeed}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: 3 Leistungssäulen ── */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#19243b] dark:text-white">SEO-Leistungen für Ihr Unternehmen in {city.name}</h3>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Local SEO", desc: "Sichtbarkeit bei Google Maps und lokalen Suchanfragen in " + city.name + " – genau dort, wo Ihre Kunden suchen." },
                { icon: TrendingUp, title: "On-Page SEO", desc: "Texte, Überschriften, Meta-Tags und interne Struktur – alles optimiert, damit Google Ihre Website versteht." },
                { icon: Zap, title: "Technisches SEO", desc: "Ladezeiten, mobile Optimierung, strukturierte Daten und Crawlbarkeit – die technische Basis für gute Rankings." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
                  <div className="bg-[#fa5219]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#fa5219]" />
                  </div>
                  <h3 className="font-bold text-[#19243b] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
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
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Persönliche Beratung</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Ihr direkter SEO-Experte – ohne Umwege, ohne Overhead
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mein Name ist André Szittnick. Als SEO-Experte und Webdesigner aus Alzey betreue ich Unternehmen in {city.name} und der gesamten Region persönlich. Bei AS-ProDigital arbeite ich direkt an Ihrem Projekt – kein Callcenter, kein anonymes Ticket-System, kein ständig wechselnder Ansprechpartner.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {city.seoSection3}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {city.seoSection4}
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
                    alt={`André Szittnick – SEO-Experte für ${city.name}`}
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
            <Eye className="w-8 h-8 text-white/60 mx-auto mb-3" />
            <p className="text-white text-xl md:text-2xl font-bold leading-snug">
              „Wer bei Google nicht auf Seite 1 ist, ist praktisch unsichtbar –<br className="hidden md:block" />
              unabhängig davon, wie gut das Angebot ist."
            </p>
            <p className="text-white/70 text-sm mt-3">André Szittnick, AS-ProDigital</p>
          </div>
        </section>

        {/* ── SEKTION 3: Rechts Trust-Karte, Links Methoden-Text ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LINKS: Methoden-Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">Mein Ansatz</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Sicheres SEO – ohne Risiken, ohne Tricks
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Im SEO gibt es viele Versprechen: schnelle Rankings, tausend Backlinks in einer Woche, garantierte Seite-1-Platzierung. Solche Versprechen sind gefährlich. Google bekämpft manipulative SEO-Taktiken aktiv – und Unternehmen, die darauf gesetzt haben, wurden oft schwer abgestraft, manchmal mit dauerhafter Sichtbarkeitsverlust.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Ich gehe einen anderen Weg: Nachhaltiges On-Page SEO, technische Optimierung und lokales SEO – nach den offiziellen Google-Richtlinien. Kein Linkaufbau, keine Tricks, keine Versprechen, die ich nicht halten kann. Dafür solide, messbare Fortschritte, die langfristig stabil bleiben.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Für die meisten Unternehmen in {city.name} ist dieser Ansatz ideal: Mit konsequentem On-Page SEO und einem gut gepflegten Google Unternehmensprofil lassen sich sehr gute lokale Rankings erreichen – sicher und nachhaltig.
                </p>
              </motion.div>

              {/* RECHTS: Trust-Karte */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#19243b] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-[#fa5219]" />
                  <span className="text-lg font-bold">Mein SEO-Versprechen</span>
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
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: SEO vs. Google Ads ── */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#19243b] dark:text-white">SEO vs. Google Ads – was ist besser für Ihr Unternehmen in {city.name}?</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-[#fa5219]/30 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#fa5219]" />
                  <h4 className="font-bold text-[#19243b] dark:text-white">SEO (organisch)</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {["✓ Langfristig kostenlos – kein Klickpreis", "✓ Sichtbarkeit wächst mit der Zeit", "✓ Hohe Glaubwürdigkeit bei Nutzern", "✓ Nachhaltige Investition – einmal zahlen, dauerhaft profitieren", "~ Erste Ergebnisse nach 3–6 Monaten sichtbar"].map((i2, idx) => <li key={idx}>{i2}</li>)}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-gray-400" />
                  <h4 className="font-bold text-gray-500 dark:text-gray-400">Google Ads (bezahlt)</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  {["✓ Sofortige Sichtbarkeit", "✗ Endet, sobald Budget aufgebraucht ist", "✗ Laufende monatliche Kosten", "✗ Klickpreise steigen mit Wettbewerb", "✗ Keine nachhaltige Wirkung"].map((i2, idx) => <li key={idx}>{i2}</li>)}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SEKTION 4: Links Prozess-Text, Rechts Prozess-Karten ── */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LINKS: Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#fa5219] text-sm font-semibold uppercase tracking-wider">So arbeite ich</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mt-2 mb-4">
                  Was bei der SEO-Optimierung Ihres Unternehmens in {city.name} konkret passiert
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  SEO ist kein einmaliger Vorgang, sondern ein kontinuierlicher Prozess. Ich beginne mit einer umfassenden Analyse Ihrer aktuellen Website und der Suchlandschaft in {city.name}: Welche technischen Fehler gibt es? Welche Keywords nutzen Ihre potenziellen Kunden? Wie ist Ihre Konkurrenz online aufgestellt?
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Auf Basis dieser Analyse entwickle ich eine klare Strategie: Welche Seiten brauchen neue Texte? Welche technischen Probleme müssen behoben werden? Wie optimieren wir Ihr Google Unternehmensprofil für maximale lokale Sichtbarkeit in {city.name}?
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nach der Umsetzung monitore ich regelmäßig Ihre Rankings und passe die Strategie bei Bedarf an. Sie erhalten regelmäßige, verständliche Berichte, die Ihnen zeigen, was die SEO-Maßnahmen konkret bewirkt haben – in Zahlen, die Sie verstehen.
                </p>
              </motion.div>

              {/* RECHTS: Prozess-Karten */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
                {[
                  { step: "01", icon: BarChart3, title: "SEO-Audit & Analyse", desc: "Technische Fehler, fehlende Optimierungen und konkrete Chancen werden identifiziert." },
                  { step: "02", icon: Search, title: "Keyword-Recherche", desc: "Welche Begriffe nutzen Ihre Kunden in " + city.name + "? Wir finden die richtigen Keywords." },
                  { step: "03", icon: TrendingUp, title: "Optimierung umsetzen", desc: "On-Page SEO, technisches SEO und Google-Profil-Optimierung – strukturiert und nachhaltig." },
                  { step: "04", icon: Globe, title: "Monitoring & Reports", desc: "Regelmäßige Berichte über Rankings, Traffic und Fortschritt – verständlich und transparent." },
                ].map((p, i) => (
                  <motion.div key={p.step} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                    <div className="bg-[#fa5219] text-white text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <div className="font-bold text-[#19243b] dark:text-white text-sm mb-0.5">{p.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ZWISCHENELEMENT: Kontakt-Banner ── */}
        <section className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#19243b] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#fa5219]" />
                  <span className="text-white font-bold">Antwort innerhalb von 24 Stunden</span>
                </div>
                <p className="text-gray-300 text-sm">Kostenloses Erstgespräch – unverbindlich, ohne Zeitdruck.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href="tel:+4967318789">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                    <Phone className="w-4 h-4" /> 06731 8789
                  </Button>
                </a>
                <Link href="/kontakt">
                  <Button className="bg-[#fa5219] hover:bg-orange-600 text-white gap-2">
                    Jetzt anfragen <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mb-4">
                Häufige Fragen zur SEO-Optimierung in {city.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Antworten auf die wichtigsten Fragen rund um SEO für Ihr Unternehmen.</p>
            </motion.div>
            <div className="space-y-3">
              {city.faqSeo.map((faq, i) => (
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

        <BlogTeaserSection category="seo" cityName={city.name} />

        {/* ── FINALER CTA ── */}
        <section className="py-14 bg-[#19243b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Award className="w-10 h-10 text-[#fa5219] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Starten Sie jetzt mit SEO in {city.name}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Jeder Tag ohne professionelle SEO-Optimierung ist ein Tag, an dem Ihre Konkurrenz bei Google weiter vorne ist. Lassen Sie uns das gemeinsam ändern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button className="bg-[#fa5219] hover:bg-orange-600 text-white px-8 py-5 font-semibold rounded-xl">
                  Jetzt kostenlos anfragen
                </Button>
              </Link>
              <Link href={`/webdesign-${city.slug}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-5 font-semibold rounded-xl">
                  Auch Webdesign in {city.name} entdecken
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
