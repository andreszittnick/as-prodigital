import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Seite nicht gefunden - 404 | AS ProDigital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold text-[#fa5219] mb-6">404</h1>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Seite nicht gefunden
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Die gesuchte Seite existiert leider nicht oder wurde verschoben.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <a className="inline-flex items-center gap-2 px-8 py-4 bg-[#fa5219] text-white rounded-full font-semibold hover:bg-[#e66a23] transition-colors duration-300"
                  data-testid="back-home">
                  <Home className="w-5 h-5" />
                  Zur Startseite
                </a>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-full font-semibold hover:border-[#fa5219] hover:text-[#fa5219] transition-colors duration-300"
                data-testid="back-button"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
