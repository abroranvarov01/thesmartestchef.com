import { Check, Star } from 'lucide-react'
import Link from "next/link"
import { multicookerProducts } from "@/lib/products"

export function ProductsShowcaseHome() {
  // Select first 4 products
  const products = multicookerProducts.slice(0, 4)

  return (
    <section className="relative">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Featured Multicookers</h2>
        <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto">
          Discover our most popular multicookers designed to make your cooking experience effortless and enjoyable
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-white/20 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-48 flex-shrink-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${product.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-1 p-6 bg-white/15">
                <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/70">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="space-y-1.5 mb-6 flex-1">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-white/90">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold text-center text-sm"
                  >
                    See on Amazon
                  </a>
                  <Link
                    href={`/multicookers/${product.slug}`}
                    className="w-full px-4 py-2.5 text-white rounded-lg hover:bg-yellow-800/90 transition font-semibold text-center bg-yellow-800 text-sm"
                  >
                    Full Review
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/multicookers"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold"
          >
            View All Multicookers
          </Link>
        </div>
      </div>
    </section>
  )
}
