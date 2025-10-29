import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { blogPosts } from "@/data/blog-posts";
import { BlogPost } from "@shared/schema";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "webdesign" | "seo">("all");

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    { id: "all", label: "Alle Beiträge", count: blogPosts.length },
    { id: "webdesign", label: "Webdesign", count: blogPosts.filter(p => p.category === "webdesign").length },
    { id: "seo", label: "SEO", count: blogPosts.filter(p => p.category === "seo").length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog & Ratgeber - Webdesign & SEO Tipps | AS ProDigital</title>
        <meta 
          name="description" 
          content="Praktische Tipps, Anleitungen und Insights zu Webdesign, SEO und digitalem Marketing. Experten-Wissen von AS ProDigital aus Alzey." 
        />
        <meta 
          name="keywords" 
          content="Webdesign Blog, SEO Ratgeber, Webdesign Tipps, SEO Tipps, Digital Marketing, Webentwicklung, Suchmaschinenoptimierung" 
        />
        <meta property="og:title" content="Blog & Ratgeber - Webdesign & SEO Tipps | AS ProDigital" />
        <meta property="og:description" content="Praktische Tipps, Anleitungen und Insights zu Webdesign, SEO und digitalem Marketing." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://asprodigital.de/blog" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden dynamic-background">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
          
          <motion.div 
            className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-white/20 rounded-full filter blur-3xl floating-orb"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-20 sm:top-40 right-4 sm:right-20 w-32 sm:w-64 lg:w-80 h-32 sm:h-64 lg:h-80 bg-white/30 rounded-full filter blur-2xl floating-orb"
            animate={{ 
              x: [0, -25, 0],
              y: [0, 25, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          <motion.div 
            className="absolute bottom-10 sm:bottom-20 left-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/25 rounded-full filter blur-xl pulse-orb"
            animate={{ 
              x: [-15, 15, -15],
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          />
          
          <div className="hidden sm:block absolute top-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-white/15 rounded-full filter blur-xl floating-orb" />
          <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full filter blur-2xl pulse-orb" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Blog</span> & Ratgeber
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Praktische Tipps, Anleitungen und Insights zu Webdesign, SEO und digitalem Marketing
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  selectedCategory === category.id
                    ? "bg-[#fe7a33] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                data-testid={`category-${category.id}`}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-lg md:text-xl text-gray-500">Keine Beiträge in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
      data-testid={`blog-card-${post.slug}`}
    >
      {/* Category Badge */}
      <div className="p-5 md:p-6 pb-0">
        <span className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
          post.category === "webdesign" 
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}>
          {post.category === "webdesign" ? "Webdesign" : "SEO"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <Link href={`/blog/${post.slug}`} className="block mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#fe7a33] transition-colors duration-300">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-sm md:text-base text-slate-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString('de-DE', { 
              day: '2-digit',
              month: 'short',
              year: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{post.readTime} Min.</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#fe7a33] font-semibold hover:gap-3 transition-all duration-300 text-sm md:text-base"
          data-testid={`read-more-${post.slug}`}
        >
          Weiterlesen
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.article>
  );
}
