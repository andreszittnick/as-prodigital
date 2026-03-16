import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Search, BarChart3, Globe, Phone, Mail, MapPin, ArrowRight, Star, Target } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getCityData } from "@/data/cities";
import NotFound from "@/pages/not-found";

export default function CitySeoPage() {
  const params = useParams<{ city: string }>();
  const city = getCityData(params.city ?? "");

  if (!city) return <NotFound />;

  const canonical = `https://www.asprodigital.de/seo-${city.slug}`;

  const features = [
    {
      icon: Search,
      title: "Local SEO",
      desc: `Werden Sie bei Google-Suchen in ${city.name} gefunden – von Kunden, die genau Ihr Angebot suchen.`,
    },
    {
      icon: TrendingUp,
      title: "On-Page SEO",
      desc: "Technische und inhaltliche Optimierung Ihrer Website: Struktur, Texte, Meta-Tags und Ladezeiten.",
    },
    {
      icon: Globe,
      title: "Off-Page SEO",
      desc: "Aufbau hochwertiger Backlinks und Brancheneinträge für mehr Autorität in den Suchmaschinen.",
    },
    {
      icon: BarChart3,
      title: "Messbare Ergebnisse",
      desc: "Transparente Reports und regelmäßige Updates – Sie sehen genau, was Ihre SEO-Investition bringt.",
    },
  ];

  const seoSteps = [
    { step: "01", title: "SEO-Analyse & Audit", desc: `Wir analysieren Ihre aktuelle Sichtbarkeit in ${city.name} und identifizieren konkrete Potenziale.` },
    { step: "02", title: "Strategie & Keyword-Recherche", desc: "Welche Suchbegriffe nutzen Ihre Kunden? Wir finden die richtigen Keywords für Ihr Unternehmen." },
    { step: "03", title: "Umsetzung & Optimierung", desc: "Technisches SEO, Content-Optimierung und Linkaufbau – strukturiert und nachhaltig." },
    { step: "04", title: "Monitoring & Reporting", desc: "Regelmäßige Berichte und Anpassungen, damit Ihr Ranking langfristig wächst." },
  ];

  return (
    <>
      <Helmet>
        <title>{`SEO ${city.name} - Suchmaschinenoptimierung | AS-ProDigital`}</title>
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
              "name": "AS-ProDigital",
              "founder": { "@type": "Person", "name": "André Szittnick" },
              "telephone": "+49-6731-8789",
              "email": "info@as-prodigital.de",
              "address": { "@type": "PostalAddress", "addressLocality": "Alzey", "addressCountry": "DE" },
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

        {/* Hero */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden dynamic-background">
          <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/90" />
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#fa5219]/10 text-[#fa5219] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                SEO in {city.name}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#19243b] dark:text-white mb-5 leading-tight">
                Mehr Kunden durch{" "}
                <span className="text-[#fa5219]">besseres Google-Ranking</span>{" "}
                in {city.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Professionelle Suchmaschinenoptimierung für Unternehmen in {city.nameFull} –
                {" "}{city.localFact}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/kontakt">
                  <Button className="bg-[#fa5219] hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-xl">
                    Kostenlos anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/video-analyse">
                  <Button variant="outline" className="border-[#19243b] text-[#19243b] dark:border-gray-400 dark:text-gray-300 px-8 py-6 text-base font-semibold rounded-xl">
                    Kostenlose Video-Analyse
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500 dark:text-gray-400">
                {["Local SEO", "On-Page Optimierung", "Backlink-Aufbau", "Transparente Reports"].map(tag => (
                  <div key={tag} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#fa5219]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mb-4">
                SEO-Leistungen für {city.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Ganzheitliche Suchmaschinenoptimierung – von der technischen Basis bis zum Linkaufbau.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-[#fa5219]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-[#fa5219]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#19243b] dark:text-white mb-2">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why / CTA */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mb-5">
                  Warum SEO für Ihr Unternehmen in {city.name}?
                </h2>
                <div className="space-y-4 mb-6">
                  {[
                    `${Math.round(parseInt(city.population.replace(".", "")) * 0.7 / 1000)}% der Einwohner in ${city.name} suchen online nach lokalen Dienstleistern`,
                    "Wer bei Google nicht auf Seite 1 ist, wird kaum gefunden",
                    "SEO bringt langfristig mehr Besucher – ohne laufende Werbekosten",
                    `Ihre Konkurrenz in ${city.name} investiert bereits in SEO`,
                    "Local SEO macht Sie sichtbar bei Kunden direkt in Ihrer Nähe",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-[#fa5219] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Zufriedene Kunden aus der Region</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#19243b] rounded-2xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-6">Jetzt kostenlos anfragen</h3>
                <div className="space-y-4 mb-6">
                  <a href="tel:+4967318789" className="flex items-center gap-3 hover:text-[#fa5219] transition-colors">
                    <Phone className="w-5 h-5 text-[#fa5219]" />
                    <span>06731 8789</span>
                  </a>
                  <a href="mailto:info@as-prodigital.de" className="flex items-center gap-3 hover:text-[#fa5219] transition-colors">
                    <Mail className="w-5 h-5 text-[#fa5219]" />
                    <span>info@as-prodigital.de</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#fa5219]" />
                    <span>Alzey ({city.distanceFromAlzey} von {city.name})</span>
                  </div>
                </div>
                <Link href="/kontakt">
                  <Button className="w-full bg-[#fa5219] hover:bg-orange-600 text-white font-semibold py-5">
                    Zum Kontaktformular
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-gray-400 mt-3 text-center">Kostenlos & unverbindlich</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#19243b] dark:text-white mb-4">
                So läuft Ihre SEO-Optimierung in {city.name} ab
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Strukturiert, transparent und mit klaren Ergebnissen.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {seoSteps.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-4xl font-black text-[#fa5219]/20 mb-2">{p.step}</div>
                  <h3 className="text-base font-bold text-[#19243b] dark:text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-14 bg-[#19243b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Starten Sie jetzt mit SEO in {city.name}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Jeder Tag ohne professionelle SEO-Optimierung ist ein Tag, an dem Ihre Konkurrenz bei Google weiter vorne ist.
              Lassen Sie uns das ändern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button className="bg-[#fa5219] hover:bg-orange-600 text-white px-8 py-5 font-semibold rounded-xl">
                  Jetzt kostenlos anfragen
                </Button>
              </Link>
              <Link href={`/webdesign-${city.slug}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-5 font-semibold rounded-xl">
                  Webdesign in {city.name}
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
