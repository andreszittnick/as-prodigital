import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { blogPosts } from "@/data/blog-posts";
import { useEffect } from "react";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel nicht gefunden</h1>
            <p className="text-xl text-slate-600 mb-8">Der gesuchte Blogartikel existiert nicht.</p>
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-[#fe7a33] font-semibold hover:gap-3 transition-all duration-300"
                data-testid="back-to-blog">
                <ArrowLeft className="w-5 h-5" />
                Zurück zum Blog
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-slate-600 hover:text-[#fe7a33] mb-8 transition-colors duration-300"
              data-testid="back-link">
              <ArrowLeft className="w-5 h-5" />
              Zurück zum Blog
            </a>
          </Link>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              post.category === "webdesign" 
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}>
              {post.category === "webdesign" ? "Webdesign" : "SEO"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-testid="blog-title"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fe7a33]" />
              <span>{new Date(post.publishedAt).toLocaleDateString('de-DE', { 
                day: '2-digit',
                month: 'long',
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#fe7a33]" />
              <span>{post.readTime} Min. Lesezeit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">von</span>
              <span className="font-semibold">{post.author}</span>
            </div>
          </motion.div>

          {/* Excerpt */}
          <motion.p
            className="text-xl text-slate-700 mb-12 leading-relaxed italic border-l-4 border-[#fe7a33] pl-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {post.excerpt}
          </motion.p>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-testid="blog-content"
          >
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-slate-600 font-medium mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Hat Ihnen dieser Artikel geholfen?
            </h3>
            <p className="text-slate-600 mb-6">
              Teilen Sie ihn mit anderen, die davon profitieren könnten!
            </p>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fe7a33] text-white rounded-full font-semibold hover:bg-[#e66a23] transition-colors duration-300"
              data-testid="share-button"
            >
              <Share2 className="w-5 h-5" />
              Artikel teilen
            </button>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Weitere <span className="text-[#fe7a33]">Beiträge</span> zum Thema
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <a className="block group" data-testid={`related-${relatedPost.slug}`}>
                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        relatedPost.category === "webdesign" 
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {relatedPost.category === "webdesign" ? "Webdesign" : "SEO"}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#fe7a33] transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{relatedPost.readTime} Min.</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
