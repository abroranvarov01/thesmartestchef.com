import { Check, Star, ArrowLeft, Shield, Zap, Thermometer } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { multicookerProducts } from "@/lib/products"

const products = multicookerProducts

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Product Image */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xreaGO9q6iY6Wu4JKBifbyqqTYTdte-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-slate-ingredients-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/multicookers"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={20} />
            Back to Multicookers
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
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
                <div className="inline-block px-4 py-2 rounded-full font-semibold mb-4 bg-stone-900 text-white text-base">
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
                    <Check className="text-primary" size={20} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg hover:bg-primary/90 transition font-semibold text-lg bg-yellow-500 text-slate-800"
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
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xreaGO9q6iY6Wu4JKBifbyqqTYTdte-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-slate-ingredients-bg.jpg')",
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
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xreaGO9q6iY6Wu4JKBifbyqqTYTdte-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-slate-ingredients-bg.jpg')",
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
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xreaGO9q6iY6Wu4JKBifbyqqTYTdte-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dark-slate-ingredients-bg.jpg')",
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
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Fast Cooking</h3>
              <p className="text-white/80">Pressure cooking technology reduces cooking time by up to 70%</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Thermometer className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Precise Temperature</h3>
              <p className="text-white/80">Advanced sensors maintain perfect temperature throughout cooking</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Safety First</h3>
              <p className="text-white/80">Multiple safety features including pressure release and auto shut-off</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
