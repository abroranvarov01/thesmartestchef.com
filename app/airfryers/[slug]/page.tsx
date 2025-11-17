import { Check, Star, ArrowLeft, Wind, Timer, Flame } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { airFryerProducts } from "@/lib/products"

const products = airFryerProducts

export default function AirFryerDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Product Image */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u84NRE4GgSpbTNEqP3emVt1KT5LlMI.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/airfryers"
            scroll={true}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={20} />
            Back to Air Fryers
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              id="product-card"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 scroll-mt-24"
            >
              <div
                className="w-full h-96 rounded-lg"
                style={{
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div>
              {product.badge && (
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {product.badge}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-lg text-white/90">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <Check className="text-sky-400" size={20} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold text-lg"
              >
                See on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u84NRE4GgSpbTNEqP3emVt1KT5LlMI.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Product Overview</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u84NRE4GgSpbTNEqP3emVt1KT5LlMI.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Technical Specifications</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-semibold text-white capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                  <span className="text-white/90">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u84NRE4GgSpbTNEqP3emVt1KT5LlMI.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Wind className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Rapid Air Technology</h3>
              <p className="text-white/80">360° hot air circulation for perfectly crispy results every time</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Timer className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Precise Timing</h3>
              <p className="text-white/80">Digital timer with auto shut-off for perfect cooking results</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Flame className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Less Oil, More Flavor</h3>
              <p className="text-white/80">Use up to 85% less oil while maintaining delicious taste</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
