import { Link } from "wouter";
import { ArrowRight, Globe, Search } from "lucide-react";

type Props = {
  currentService: "webdesign" | "seo";
  citySlug: string;
  cityName: string;
};

export default function CrossServiceBanner({ currentService, citySlug, cityName }: Props) {
  const isWebdesign = currentService === "webdesign";

  const targetService = isWebdesign ? "seo" : "webdesign";
  const targetHref = `/${targetService}-${citySlug}`;

  const Icon = isWebdesign ? Search : Globe;

  const headline = isWebdesign
    ? `Ihre neue Website braucht auch gutes Google-Ranking`
    : `Starke SEO braucht auch eine starke Website`;

  const text = isWebdesign
    ? `Ein professionelles Webdesign ist der erste Schritt – aber erst mit SEO werden Sie in ${cityName} auch bei Google gefunden. Ich kombiniere beides aus einer Hand.`
    : `Eine top-optimierte Seite bringt nichts, wenn das Design Besucher nicht überzeugt. Ich gestalte Websites, die konvertieren – individuell für ${cityName}.`;

  const cta = isWebdesign
    ? `SEO-Optimierung in ${cityName}`
    : `Webdesign in ${cityName}`;

  return (
    <section className="py-12 bg-[#19243b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#fa5219] flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {headline}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {text}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={targetHref}
              className="inline-flex items-center gap-2 bg-[#fa5219] text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-orange-600 transition-colors whitespace-nowrap"
            >
              {cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
