import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform für Fashion Brand",
      description: "Moderne Online-Shop Lösung mit personalisierten Empfehlungen und nahtloser Mobile Experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["E-Commerce", "React", "Node.js", "Stripe"],
      year: "2024",
      link: "#",
      github: "#"
    },
    {
      title: "Intelligentes CRM System",
      description: "Modernes Kundenmanagementsystem mit automatischer Lead-Bewertung und umfassenden Analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["CRM", "Python", "React", "PostgreSQL"],
      year: "2024",
      link: "#",
      github: "#"
    },
    {
      title: "Restaurant Management App",
      description: "Komplette Digitalisierung eines Restaurants mit Online-Reservierungen und Bestellsystem.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["PWA", "Vue.js", "Firebase", "Payment"],
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      title: "Immobilien-Portal mit VR Integration",
      description: "Innovative Immobilienplattform mit virtuellen Besichtigungen und 3D-Rundgängen.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["VR", "Three.js", "React", "WebGL"],
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      title: "Fitness App mit Personal Trainer",
      description: "Mobile Fitness-Anwendung mit digitalem Personal Trainer und Ernährungsberatung.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Mobile App", "Health Tech", "React Native"],
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      title: "SaaS Dashboard für Marketing Agenturen",
      description: "Umfassendes Analytics-Dashboard für Marketing-Kampagnen mit Echtzeit-Reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["SaaS", "Analytics", "D3.js", "Node.js"],
      year: "2022",
      link: "#",
      github: "#"
    }
  ];

  const testimonials = [
    {
      text: "André hat unsere Vision perfekt umgesetzt. Die Website übertrifft alle Erwartungen und die Performance ist hervorragend.",
      author: "Maria Schmidt",
      company: "Fashion Studio München",
      rating: 5
    },
    {
      text: "Professionelle Arbeitsweise, innovative Lösungen und immer erreichbar. Absolute Empfehlung!",
      author: "Thomas Weber",
      company: "Weber Immobilien GmbH",
      rating: 5
    },
    {
      text: "Das intelligente CRM System hat unsere Vertriebsprozesse revolutioniert. Danke für die exzellente Umsetzung!",
      author: "Sarah Klein",
      company: "TechStart Solutions",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mein <span className="text-orange-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie eine Auswahl meiner erfolgreichsten Projekte und erfahren Sie, 
              wie ich digitale Visionen in beeindruckende Realitäten verwandle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Das sagen meine <span className="text-orange-500">Kunden</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Erfolgsgeschichten sprechen für sich
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
              >
                <div className="flex text-orange-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}