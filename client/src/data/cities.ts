export type CityData = {
  slug: string;
  name: string;
  nameFull: string;
  region: string;
  population: string;
  distanceFromAlzey: string;
  webdesignKeywords: string[];
  seoKeywords: string[];
  webdesignDescription: string;
  seoDescription: string;
  localFact: string;
};

export const cities: Record<string, CityData> = {
  alzey: {
    slug: "alzey",
    name: "Alzey",
    nameFull: "Alzey",
    region: "Rheinhessen, Rheinland-Pfalz",
    population: "18.000",
    distanceFromAlzey: "0 km",
    webdesignKeywords: ["Webdesign Alzey", "Website erstellen Alzey", "Webentwicklung Alzey", "Homepage Alzey"],
    seoKeywords: ["SEO Alzey", "Suchmaschinenoptimierung Alzey", "Google Ranking Alzey", "Local SEO Alzey"],
    webdesignDescription: "Professionelles Webdesign in Alzey: Individuelle Websites, die Kunden gewinnen. ✓ Responsive ✓ SEO-optimiert ✓ Persönliche Beratung vor Ort.",
    seoDescription: "SEO-Optimierung in Alzey: Mehr Sichtbarkeit bei Google für Ihr Unternehmen. ✓ Local SEO ✓ On-Page & Off-Page ✓ Transparente Ergebnisse.",
    localFact: "als Ihre lokale Webagentur direkt in Alzey",
  },
  worms: {
    slug: "worms",
    name: "Worms",
    nameFull: "Worms",
    region: "Rheinland-Pfalz",
    population: "85.000",
    distanceFromAlzey: "ca. 25 km",
    webdesignKeywords: ["Webdesign Worms", "Website erstellen Worms", "Webentwicklung Worms", "Homepage Worms", "Webdesigner Worms"],
    seoKeywords: ["SEO Worms", "Suchmaschinenoptimierung Worms", "Google Ranking Worms", "Local SEO Worms", "SEO Agentur Worms"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Worms: Individuelle Websites, die Kunden gewinnen. ✓ Responsive ✓ SEO-optimiert ✓ Persönliche Beratung.",
    seoDescription: "SEO-Optimierung für Unternehmen in Worms: Mehr Sichtbarkeit bei Google. ✓ Local SEO ✓ On-Page & Off-Page ✓ Messbare Ergebnisse.",
    localFact: "mit langjähriger Erfahrung in der Region Worms und Umgebung",
  },
  kaiserslautern: {
    slug: "kaiserslautern",
    name: "Kaiserslautern",
    nameFull: "Kaiserslautern",
    region: "Rheinland-Pfalz",
    population: "100.000",
    distanceFromAlzey: "ca. 55 km",
    webdesignKeywords: ["Webdesign Kaiserslautern", "Website erstellen Kaiserslautern", "Webentwicklung Kaiserslautern", "Homepage Kaiserslautern"],
    seoKeywords: ["SEO Kaiserslautern", "Suchmaschinenoptimierung Kaiserslautern", "Google Ranking Kaiserslautern", "SEO Agentur Kaiserslautern"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Kaiserslautern: Moderne Websites, die überzeugen. ✓ Responsive ✓ SEO-optimiert ✓ Faire Preise.",
    seoDescription: "SEO-Optimierung für Unternehmen in Kaiserslautern: Top-Rankings bei Google erreichen. ✓ Local SEO ✓ Technisches SEO ✓ Content-Optimierung.",
    localFact: "mit Betreuung von Kunden in ganz Rheinland-Pfalz, auch in Kaiserslautern",
  },
  bingen: {
    slug: "bingen",
    name: "Bingen",
    nameFull: "Bingen am Rhein",
    region: "Rheinland-Pfalz",
    population: "26.000",
    distanceFromAlzey: "ca. 25 km",
    webdesignKeywords: ["Webdesign Bingen", "Website erstellen Bingen", "Webentwicklung Bingen am Rhein", "Homepage Bingen"],
    seoKeywords: ["SEO Bingen", "Suchmaschinenoptimierung Bingen", "Google Ranking Bingen am Rhein", "SEO Agentur Bingen"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Bingen am Rhein: Websites, die Kunden begeistern. ✓ Responsive ✓ SEO-optimiert ✓ Persönliche Beratung.",
    seoDescription: "SEO-Optimierung für Unternehmen in Bingen am Rhein: Bessere Sichtbarkeit bei Google. ✓ Local SEO ✓ On-Page SEO ✓ Nachhaltige Ergebnisse.",
    localFact: "als verlässlicher Partner für Unternehmen im Raum Bingen",
  },
  "bad-kreuznach": {
    slug: "bad-kreuznach",
    name: "Bad Kreuznach",
    nameFull: "Bad Kreuznach",
    region: "Rheinland-Pfalz",
    population: "52.000",
    distanceFromAlzey: "ca. 30 km",
    webdesignKeywords: ["Webdesign Bad Kreuznach", "Website erstellen Bad Kreuznach", "Webentwicklung Bad Kreuznach", "Homepage Bad Kreuznach"],
    seoKeywords: ["SEO Bad Kreuznach", "Suchmaschinenoptimierung Bad Kreuznach", "Google Ranking Bad Kreuznach", "SEO Agentur Bad Kreuznach"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Bad Kreuznach: Individuelle Websites mit Wirkung. ✓ Responsive ✓ SEO-optimiert ✓ Transparent.",
    seoDescription: "SEO-Optimierung für Unternehmen in Bad Kreuznach: Mehr Kunden durch bessere Google-Rankings. ✓ Local SEO ✓ On-Page & Off-Page SEO.",
    localFact: "als erfahrener Partner für Betriebe im Raum Bad Kreuznach",
  },
  ingelheim: {
    slug: "ingelheim",
    name: "Ingelheim",
    nameFull: "Ingelheim am Rhein",
    region: "Rheinland-Pfalz",
    population: "34.000",
    distanceFromAlzey: "ca. 20 km",
    webdesignKeywords: ["Webdesign Ingelheim", "Website erstellen Ingelheim", "Webentwicklung Ingelheim am Rhein", "Homepage Ingelheim"],
    seoKeywords: ["SEO Ingelheim", "Suchmaschinenoptimierung Ingelheim", "Google Ranking Ingelheim am Rhein", "SEO Agentur Ingelheim"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Ingelheim am Rhein: Moderne Websites, die gefunden werden. ✓ Responsive ✓ SEO-optimiert ✓ Fair.",
    seoDescription: "SEO-Optimierung für Unternehmen in Ingelheim am Rhein: Sichtbarkeit bei Google steigern. ✓ Local SEO ✓ Technisches SEO ✓ Content-SEO.",
    localFact: "als regionaler Partner für Unternehmen in Ingelheim und Rheinhessen",
  },
  mannheim: {
    slug: "mannheim",
    name: "Mannheim",
    nameFull: "Mannheim",
    region: "Baden-Württemberg",
    population: "310.000",
    distanceFromAlzey: "ca. 55 km",
    webdesignKeywords: ["Webdesign Mannheim", "Website erstellen Mannheim", "Webentwicklung Mannheim", "Homepage Mannheim", "Webdesigner Mannheim"],
    seoKeywords: ["SEO Mannheim", "Suchmaschinenoptimierung Mannheim", "Google Ranking Mannheim", "SEO Agentur Mannheim", "Local SEO Mannheim"],
    webdesignDescription: "Professionelles Webdesign für Unternehmen in Mannheim: Hochwertige Websites, die konvertieren. ✓ Responsive ✓ SEO-optimiert ✓ Individuelle Lösungen.",
    seoDescription: "SEO-Optimierung für Unternehmen in Mannheim: Top-Rankings bei Google – nachhaltig und messbar. ✓ Local SEO ✓ On-Page & Off-Page ✓ Transparente Berichte.",
    localFact: "als spezialisierter SEO- und Webdesign-Experte auch im Raum Mannheim",
  },
};

export function getCityData(slug: string): CityData | null {
  return cities[slug] ?? null;
}
