import { notFound } from "next/navigation"
import { articles } from "@/lib/articles"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number.parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Same background as home page */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/dark-rustic-wood-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="fixed inset-0 bg-black/40 -z-10" />

        {/* Article Content */}
        <article className="relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/#articles"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
              Back to Articles
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <div className="inline-block text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-amber-900">
                {article.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{article.title}</h1>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-12 shadow-2xl">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-8">
                <p className="text-white/90 text-lg leading-relaxed">{article.content.introduction}</p>
              </div>

              {/* Sections */}
              {article.content.sections.map((section, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  <p className="text-white/80 leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl p-8 mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                <p className="text-white/90 leading-relaxed">{article.content.conclusion}</p>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/#articles"
                className="inline-flex items-center gap-2 text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-medium bg-accent-foreground"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
