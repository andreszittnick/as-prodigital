import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { motion } from "framer-motion";
import { Award, Users, Coffee, Code2, Target, Heart } from "lucide-react";
import profileImage from "@assets/Bild_Andre_Szittnick_1754308315756.jpg";

export default function About() {
  const stats = [
    { number: "50+", label: "Erfolgreiche Projekte", icon: Award },
    { number: "30+", label: "Zufriedene Kunden", icon: Users },
    { number: "1000+", label: "Kaffees getrunken", icon: Coffee },
    { number: "5+", label: "Jahre Erfahrung", icon: Code2 }
  ];

  const values = [
    {
      icon: Target,
      title: "Perfektion im Detail",
      description: "Jedes Projekt bekommt meine volle Aufmerksamkeit. Ich glaube, dass Exzellenz in den Details liegt und jeder Pixel zählt."
    },
    {
      icon: Heart,
      title: "Leidenschaft für Technologie",
      description: "Technologie ist nicht nur mein Beruf, sondern meine Berufung. Ich liebe es, innovative Lösungen zu entwickeln, die wirklich einen Unterschied machen."
    },
    {
      icon: Users,
      title: "Partnerschaftlicher Ansatz",
      description: "Ich sehe meine Kunden als Partner. Gemeinsam entwickeln wir Lösungen, die nicht nur funktionieren, sondern begeistern."
    }
  ];


  return (
    <>
      <Helmet>
        <title>Über André Szittnick - Webdesigner & SEO-Experte aus Alzey | AS-ProDigital</title>
        <meta name="description" content="André Szittnick - Ihr Partner für professionelles Webdesign & SEO in Alzey. 5+ Jahre Erfahrung, 50+ erfolgreiche Projekte, 30+ zufriedene Kunden. Lernen Sie mich kennen!" />
        <meta name="keywords" content="André Szittnick, Webdesigner Alzey, SEO-Experte, AS-ProDigital, Über mich, Portfolio" />
        <link rel="canonical" href="https://asprodigital.de/ueber-mich" />
        
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://asprodigital.de/ueber-mich" />
        <meta property="og:title" content="Über André Szittnick - Webdesigner & SEO-Experte" />
        <meta property="og:description" content="5+ Jahre Erfahrung in Webdesign & SEO. Leidenschaft für Technologie und perfekte digitale Lösungen." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "André Szittnick",
            "jobTitle": "Webdesigner & SEO-Experte",
            "worksFor": {
              "@type": "LocalBusiness",
              "name": "AS-ProDigital"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alzey",
              "addressCountry": "DE"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Über <span className="text-orange-500">André Szittnick</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Ich bin André – jemand, der sich mit Leidenschaft in jedes Projekt hineindenkt. 
                  Webdesign ist für mich mehr als nur Gestaltung: Es ist die Verbindung aus Technik, 
                  Kreativität und Strategie.
                </p>
                <p>
                  Ich arbeite gerne strukturiert und präzise, Schritt für Schritt, bis alles perfekt 
                  passt – vom ersten Entwurf bis zur fertigen Website. Besonders wichtig ist mir, dass 
                  jede Seite authentisch wirkt und wirklich zu meinem Kunden passt.
                </p>
                <p>
                  Ich mag klare Designs, logische Abläufe und Lösungen, die langfristig funktionieren. 
                  Was mich antreibt: der Moment, in dem aus einer Idee eine Website wird, die Menschen 
                  begeistert.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative"
            >
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <div 
                  className="w-72 h-96 sm:w-80 sm:h-[500px] md:w-96 md:h-[600px] lg:w-[450px] lg:h-[650px] mx-auto rounded-3xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(254, 122, 51, 0.3) 0%, rgba(254, 122, 51, 0.15) 40%, rgba(7, 67, 124, 0.1) 70%, transparent 100%)',
                    filter: 'blur(40px)',
                    transform: 'scale(1.2)'
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="w-72 h-96 sm:w-80 sm:h-[500px] md:w-96 md:h-[600px] lg:w-[450px] lg:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm drop-shadow-2xl relative z-10"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage} 
                  alt="André Szittnick"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meine <span className="text-orange-500">Werte</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Was mich bei jedem Projekt antreibt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
      </div>
    </>
  );
}