import { Check, Star, Zap, Shield, Thermometer } from 'lucide-react'
import { Footer } from "@/components/footer"
import Link from "next/link"
import { multicookerProducts } from "@/lib/products"

export default function MulticookersPage() {
  const products = multicookerProducts

  const features = [
    {
      icon: Zap,
      title: "Fast Cooking",
      description: "Pressure cooking technology reduces cooking time by up to 70%",
    },
    {
      icon: Thermometer,
      title: "Precise Temperature",
      description: "Advanced sensors maintain perfect temperature throughout cooking",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Multiple safety features including pressure release and auto shut-off",
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Premium Multicookers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our range of intelligent multicookers designed to make cooking effortless
          </p>
        </div>
      </section>

      {/* Features Section */}
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose TheSmartChefs Multicookers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 relative">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Multicooker Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-white/20 flex flex-col"
              >
                {/* Изображение */}
                <div className="relative h-64 flex-shrink-0">
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

                {/* Текстовая часть — растягивается */}
                <div className="flex flex-col flex-1 p-6 bg-white/15">
                  <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                          }
                          size={16}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white/70">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/90">
                        <Check className="text-primary" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold text-center"
                    >
                      See on Amazon
                    </a>
                    <Link
                      href={`/multicookers/${product.slug}`}
                      className="flex-1 px-4 py-3 text-white rounded-lg hover:bg-yellow-800/90 transition font-semibold text-center bg-yellow-800"
                    >
                      Access the full review
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Compare All Models</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left p-3 font-semibold sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Feature
                  </th>
                  {products.map((product) => (
                    <th key={product.slug} className="text-center p-3 font-semibold text-white min-w-[120px]">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Capacity</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.Capacity || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Power Output
                  </td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.PowerOutput || product.specifications["Power Output"] || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Material</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.Material || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    WiFi / Smart Features
                  </td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.SmartFeatures || product.specifications.Connectivity ? "✓" : "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Special Features
                  </td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90 text-xs">
                      {product.specifications.SpecialFeature ||
                        product.specifications.Technology ||
                        product.specifications.CooktopType ||
                        "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Cooking Functions
                  </td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90 text-xs">
                      {product.specifications.CookingPrograms ||
                        product.specifications.Functions ||
                        product.specifications.CookingFunctions ||
                        "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Dimensions</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90 text-xs">
                      {product.specifications.Dimensions || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Weight</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.Weight || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Warranty</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90">
                      {product.specifications.Warranty || "-"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Best For</td>
                  {products.map((product) => (
                    <td key={product.slug} className="text-center p-3 text-white/90 text-xs">
                      {product.specifications.IdealFor || product.specifications["Ideal For"] || "-"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
