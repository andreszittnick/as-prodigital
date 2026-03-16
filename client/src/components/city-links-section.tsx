import { Link } from "wouter";
import { MapPin, Globe, Search } from "lucide-react";

const cities = [
  { slug: "alzey", name: "Alzey" },
  { slug: "worms", name: "Worms" },
  { slug: "kaiserslautern", name: "Kaiserslautern" },
  { slug: "bingen", name: "Bingen" },
  { slug: "bad-kreuznach", name: "Bad Kreuznach" },
  { slug: "ingelheim", name: "Ingelheim" },
  { slug: "mannheim", name: "Mannheim" },
];

export default function CityLinksSection() {
  return (
    <section className="py-14 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-[#fa5219] font-semibold text-sm mb-2">
            <MapPin className="w-4 h-4" />
            Regionales Einzugsgebiet
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#19243b] dark:text-white mb-2">
            Webdesign & SEO – in Ihrer Region
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Als Freelancer aus Alzey betreue ich Unternehmen in der gesamten Region Rheinhessen und Rheinland-Pfalz.
          </p>
        </div>

        {/* Map + City Links */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">

          {/* Left: OpenStreetMap */}
          <div className="relative h-64 md:h-auto min-h-[300px] bg-gray-100 dark:bg-gray-800">
            <iframe
              title="Einzugsgebiet AS-ProDigital – Rheinhessen und Rheinland-Pfalz"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.55%2C49.25%2C8.65%2C50.05&layer=mapnik&marker=49.7458%2C8.1167"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            {/* Badge overlay */}
            <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-900 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#fa5219]" />
              <span className="text-xs font-semibold text-[#19243b] dark:text-white">AS-ProDigital · Alzey</span>
            </div>
          </div>

          {/* Right: City Links */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Alle Standorte
            </p>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.slug} className="flex items-center justify-between gap-3 border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[#19243b] dark:text-white text-sm flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#fa5219] flex-shrink-0" />
                    {city.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                      href={`/webdesign-${city.slug}`}
                      className="flex items-center gap-1 text-xs font-medium text-white bg-[#19243b] hover:bg-[#fa5219] transition-colors px-2.5 py-1.5 rounded-lg"
                    >
                      <Globe className="w-3 h-3" />
                      Webdesign
                    </Link>
                    <Link
                      href={`/seo-${city.slug}`}
                      className="flex items-center gap-1 text-xs font-medium text-white bg-[#fa5219] hover:bg-orange-600 transition-colors px-2.5 py-1.5 rounded-lg"
                    >
                      <Search className="w-3 h-3" />
                      SEO
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
              Nicht dabei? Ich arbeite auch für Kunden deutschlandweit – 
              <Link href="/kontakt" className="text-[#fa5219] hover:underline ml-1">
                einfach anfragen.
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
