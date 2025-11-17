import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { articles } from "@/lib/articles"

export function ArticlesShowcase() {
  return (
    <section id="articles" className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/dark-rustic-wood-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.85,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-card">Multicooker Guides & Articles</h2>
          <p className="text-lg text-balance text-card">
            Expert tips, recipes, and guides to help you get the most out of your multicooker
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/20 hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-3 left-3 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold bg-orange-800">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-primary transition line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-white/70 mb-4 line-clamp-3">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/articles/${article.id}`}
                  className="w-full text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition text-sm font-medium flex items-center justify-center gap-2 group bg-orange-800"
                >
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
