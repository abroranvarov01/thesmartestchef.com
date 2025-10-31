import { Star, ThumbsUp, MessageCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Angela Pintes",
      rating: 5,
      date: "March 15, 2025",
      title: "Best Kitchen Investment Ever!",
      content:
        "I've been using my MultiChef for 6 months now and it's completely transformed my cooking routine. The rice comes out perfect every time, and the slow cooker function is amazing for busy weekdays.",
      helpful: 124,
      verified: true,
    },
    {
      name: "Brian Coster",
      rating: 5,
      date: "March 10, 2025",
      title: "Professional Quality at Home",
      content:
        "As a former chef, I'm very picky about my kitchen equipment. This multicooker exceeded my expectations. The temperature control is precise and the build quality is outstanding.",
      helpful: 98,
      verified: true,
    },
    {
      name: "Luisa Casa",
      rating: 5,
      date: "March 5, 2025",
      title: "Perfect for Busy Families",
      content:
        "With three kids and a full-time job, this multicooker has been a lifesaver. I can prep ingredients in the morning and come home to a hot, delicious meal. The yogurt function is also fantastic!",
      helpful: 156,
      verified: true,
    },
    {
      name: "Kevin Peterson",
      rating: 4,
      date: "February 28, 2025",
      title: "Great Product, Minor Learning Curve",
      content:
        "The multicooker is excellent once you get the hang of it. Took me a few tries to master the timing, but now I use it almost daily. The recipe book that comes with it is very helpful.",
      helpful: 67,
      verified: true,
    },
    {
      name: "Natalia Burges",
      rating: 5,
      date: "February 20, 2025",
      title: "Energy Efficient and Versatile",
      content:
        "I love that I can cook everything from soups to desserts in one appliance. It's also much more energy-efficient than using my oven. The non-stick pot is easy to clean too!",
      helpful: 89,
      verified: true,
    },
    {
      name: "Simon Carrick",
      rating: 5,
      date: "February 15, 2025",
      title: "Exceeded All Expectations",
      content:
        "I was skeptical at first, but this multicooker has become my most-used kitchen appliance. The pressure cooking function cuts cooking time in half, and everything tastes amazing.",
      helpful: 112,
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FtyP0KXGPFcsTwnM0PJRR62imnw0ti.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            See what our customers are saying about MultiChef
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={32} />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9/5.0</span>
            <span className="text-white/80">(2,847 reviews)</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FtyP0KXGPFcsTwnM0PJRR62imnw0ti.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-2xl p-8 shadow-lg border border-border bg-transparent">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-card">{review.name}</h3>
                      {review.verified && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-card">{review.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card">{review.title}</h4>
                <p className="mb-4 leading-relaxed text-card">{review.content}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm hover:text-foreground transition text-card">
                    <ThumbsUp size={16} />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-foreground transition text-card">
                    <MessageCircle size={16} />
                    Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section
        className="relative py-16"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FtyP0KXGPFcsTwnM0PJRR62imnw0ti.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        {/* Additional content can be added here */}
      </section>

      <Footer />
    </div>
  )
}
