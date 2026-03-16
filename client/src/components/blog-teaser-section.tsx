import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

interface BlogTeaserSectionProps {
  category: "webdesign" | "seo";
  cityName?: string;
}

export default function BlogTeaserSection({ category, cityName }: BlogTeaserSectionProps) {
  const posts = blogPosts
    .filter(p => p.category === category)
    .slice(0, 3);

  const heading =
    category === "webdesign"
      ? "Ratgeber rund ums Webdesign"
      : "Ratgeber rund ums SEO";

  const subheading =
    category === "webdesign"
      ? `Kostenlose Tipps und Wissen für ${cityName ? `Unternehmen in ${cityName}` : "Ihr Unternehmen"} – damit Ihre Website wirklich funktioniert.`
      : `Kostenlose SEO-Tipps für ${cityName ? `Unternehmen in ${cityName}` : "Ihr Unternehmen"} – für mehr Sichtbarkeit bei Google.`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#fa5219]/10 text-[#fa5219] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Gratis-Wissen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#19243b] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <a className="block group h-full">
                  <div className="bg-white rounded-2xl p-7 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      category === "webdesign"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {category === "webdesign" ? "Webdesign" : "SEO"}
                    </span>
                    <h3 className="text-lg font-bold text-[#19243b] mb-3 group-hover:text-[#fa5219] transition-colors duration-300 leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} Min. Lesezeit</span>
                      </div>
                      <span className="text-[#fa5219] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Lesen <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-[#fa5219] font-semibold hover:gap-3 transition-all duration-300 text-lg">
              Alle Ratgeber-Artikel ansehen <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
