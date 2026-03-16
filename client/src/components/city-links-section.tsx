import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  { slug: "alzey", name: "Alzey" },
  { slug: "worms", name: "Worms" },
  { slug: "kaiserslautern", name: "Kaiserslautern" },
  { slug: "bingen", name: "Bingen" },
  { slug: "bad-kreuznach", name: "Bad Kreuznach" },
  { slug: "ingelheim", name: "Ingelheim" },
  { slug: "mannheim", name: "Mannheim" },
];

type Props = {
  service: "webdesign" | "seo";
};

export default function CityLinksSection({ service }: Props) {
  const isWebdesign = service === "webdesign";

  const title = isWebdesign
    ? "Webdesign – auch in Ihrer Stadt"
    : "SEO-Optimierung – auch in Ihrer Stadt";

  const description = isWebdesign
    ? "Ich betreue Kunden in ganz Rheinhessen und der Region. Schauen Sie, ob Ihre Stadt dabei ist:"
    : "Lokale SEO-Optimierung für Unternehmen in der Region Rheinhessen und Rheinland-Pfalz:";

  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-[#fa5219] font-semibold text-sm mb-2">
            <MapPin className="w-4 h-4" />
            Regionale Präsenz
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#19243b] dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${service}-${city.slug}`}
              className="group flex items-center justify-between gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-medium text-[#19243b] dark:text-gray-200 hover:border-[#fa5219] hover:text-[#fa5219] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>{isWebdesign ? "Webdesign" : "SEO"} {city.name}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
