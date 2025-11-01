import { Check, Star, Zap, Shield, Thermometer } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MulticookersPage() {
  const products = [
    {
      slug: "ninja-mc1001-foodi",
      name: "Ninja MC1001 Foodi PossibleCooker PRO 8.5",
      price: "",
      image: "https://m.media-amazon.com/images/I/61-hMn0AQsL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      rating: 4.7,
      reviews: 4893,
      features: ["Ninja", "Sea Salt Gray", "Aluminum", '18"D x 12.64"W x 10.59"H', "8.5 Quarts", "825 watts"],
      badge: "Premium",
      amazonLink: "https://www.amazon.com/Ninja-MC1001-PossibleCooker-Multi-Cooker-Integrated/dp/B0B4PPHG8G",
    },
    {
      slug: "compact-6l",
      name: "CHEF iQ Smart Pressure Cooker with WiFi",
      price: "",
      image: "https://m.media-amazon.com/images/I/71qaNsaMkpL._AC_SX679_.jpg",
      rating: 4.8,
      reviews: 892,
      features: ["CHEF iQ", "6 Quarts", "Aluminum / ABS & PP plastic", "Black", "Matte", '13"D x 13"W x 13"H'],
      badge: "Limited time deal",
      amazonLink: "https://www.amazon.com/CHEF-Worlds-Smartest-Pressure-Cooker/dp/B0863JB424",
    },
    {
      slug: "elite-10l",
      name: "TheSmartChefs Elite 10L",
      price: "$249.99",
      image: "/modern-multicooker-on-kitchen-counter.jpg",
      rating: 5.0,
      reviews: 634,
      features: ["10L Capacity", "20 Cooking Programs", "Premium Build", "WiFi Connected"],
      badge: "Premium",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "mini-4l",
      name: "TheSmartChefs Mini 4L",
      price: "$99.99",
      image: "/compact-multicooker-6-liter-red.jpg",
      rating: 4.7,
      reviews: 543,
      features: ["4L Capacity", "10 Cooking Programs", "Compact Design", "Perfect for 2-3 People"],
      badge: "Budget Friendly",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "family-12l",
      name: "TheSmartChefs Family 12L",
      price: "$299.99",
      image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
      rating: 4.9,
      reviews: 421,
      features: ["12L Capacity", "18 Cooking Programs", "Extra Large Pot", "Feeds 8-10 People"],
      badge: "Family Size",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "air-7l",
      name: "TheSmartChefs Air 7L",
      price: "$229.99",
      image: "/modern-multicooker-on-kitchen-counter.jpg",
      rating: 4.8,
      reviews: 789,
      features: ["7L Capacity", "Air Fry Function", "16 Programs", "Dual Cooking Modes"],
      badge: "Versatile",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "express-5l",
      name: "TheSmartChefs Express 5L",
      price: "$179.99",
      image: "/compact-multicooker-6-liter-red.jpg",
      rating: 4.6,
      reviews: 612,
      features: ["5L Capacity", "High Pressure Mode", "13 Programs", "Quick Release Valve"],
      badge: "Fast Cooking",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "gourmet-9l",
      name: "TheSmartChefs Gourmet 9L",
      price: "$279.99",
      image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
      rating: 4.9,
      reviews: 356,
      features: ["9L Capacity", "22 Cooking Programs", "Sous Vide Mode", "Recipe App Included"],
      badge: "Chef's Choice",
      amazonLink: "https://www.amazon.com",
    },
    {
      slug: "eco-6l",
      name: "TheSmartChefs Eco 6L",
      price: "$139.99",
      image: "/modern-multicooker-on-kitchen-counter.jpg",
      rating: 4.7,
      reviews: 498,
      features: ["6L Capacity", "Energy Saving Mode", "12 Programs", "Eco-Friendly Materials"],
      badge: "Eco-Friendly",
      amazonLink: "https://www.amazon.com",
    },
  ]

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
                className="bg-white/15 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-white/20"
              >
                <div className="relative h-64">
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
                <div className="p-6 bg-white/15 backdrop-blur-md">
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
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/90">
                        <Check className="text-primary" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold cursor-pointer text-center"
                    >
                      See on Amazon
                    </a>
                    <Link
                      href={`/multicookers/${product.slug}`}
                      className="flex-1 px-4 py-3 text-white rounded-lg hover:bg-yellow-800/90 transition font-semibold cursor-pointer text-center bg-yellow-800"
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
                  <th className="text-center p-3 font-semibold text-white">Mini 4L</th>
                  <th className="text-center p-3 font-semibold text-white">Express 5L</th>
                  <th className="text-center p-3 font-semibold text-white">Compact 6L</th>
                  <th className="text-center p-3 font-semibold text-white">Eco 6L</th>
                  <th className="text-center p-3 font-semibold text-white">Air 7L</th>
                  <th className="text-center p-3 font-semibold text-white">Pro 8L</th>
                  <th className="text-center p-3 font-semibold text-white">Gourmet 9L</th>
                  <th className="text-center p-3 font-semibold text-white">Elite 10L</th>
                  <th className="text-center p-3 font-semibold text-white">Family 12L</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Capacity</td>
                  <td className="text-center p-3 text-white/90">4L</td>
                  <td className="text-center p-3 text-white/90">5L</td>
                  <td className="text-center p-3 text-white/90">6L</td>
                  <td className="text-center p-3 text-white/90">6L</td>
                  <td className="text-center p-3 text-white/90">7L</td>
                  <td className="text-center p-3 text-white/90">8L</td>
                  <td className="text-center p-3 text-white/90">9L</td>
                  <td className="text-center p-3 text-white/90">10L</td>
                  <td className="text-center p-3 text-white/90">12L</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Cooking Programs
                  </td>
                  <td className="text-center p-3 text-white/90">10</td>
                  <td className="text-center p-3 text-white/90">13</td>
                  <td className="text-center p-3 text-white/90">12</td>
                  <td className="text-center p-3 text-white/90">12</td>
                  <td className="text-center p-3 text-white/90">16</td>
                  <td className="text-center p-3 text-white/90">15</td>
                  <td className="text-center p-3 text-white/90">22</td>
                  <td className="text-center p-3 text-white/90">20</td>
                  <td className="text-center p-3 text-white/90">18</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    WiFi Connected
                  </td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">✓</td>
                  <td className="text-center p-3 text-white/90">✓</td>
                  <td className="text-center p-3 text-white/90">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Air Fry Function
                  </td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">✓</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Sous Vide Mode
                  </td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">✓</td>
                  <td className="text-center p-3 text-white/90">-</td>
                  <td className="text-center p-3 text-white/90">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Material</td>
                  <td className="text-center p-3 text-white/90">Non-Stick</td>
                  <td className="text-center p-3 text-white/90">Stainless</td>
                  <td className="text-center p-3 text-white/90">Non-Stick</td>
                  <td className="text-center p-3 text-white/90">Eco-Ceramic</td>
                  <td className="text-center p-3 text-white/90">Stainless</td>
                  <td className="text-center p-3 text-white/90">Stainless</td>
                  <td className="text-center p-3 text-white/90">Premium Steel</td>
                  <td className="text-center p-3 text-white/90">Premium Steel</td>
                  <td className="text-center p-3 text-white/90">Stainless</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">
                    Energy Efficiency
                  </td>
                  <td className="text-center p-3 text-white/90">A+</td>
                  <td className="text-center p-3 text-white/90">A</td>
                  <td className="text-center p-3 text-white/90">A++</td>
                  <td className="text-center p-3 text-white/90">A+++</td>
                  <td className="text-center p-3 text-white/90">A+</td>
                  <td className="text-center p-3 text-white/90">A+</td>
                  <td className="text-center p-3 text-white/90">A</td>
                  <td className="text-center p-3 text-white/90">A+</td>
                  <td className="text-center p-3 text-white/90">A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Warranty</td>
                  <td className="text-center p-3 text-white/90">1 Year</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                  <td className="text-center p-3 text-white/90">3 Years</td>
                  <td className="text-center p-3 text-white/90">3 Years</td>
                  <td className="text-center p-3 text-white/90">2 Years</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 font-medium sticky left-0 bg-black/60 backdrop-blur-sm text-white">Best For</td>
                  <td className="text-center p-3 text-white/90">Singles</td>
                  <td className="text-center p-3 text-white/90">Quick Meals</td>
                  <td className="text-center p-3 text-white/90">Couples</td>
                  <td className="text-center p-3 text-white/90">Eco-Conscious</td>
                  <td className="text-center p-3 text-white/90">Versatility</td>
                  <td className="text-center p-3 text-white/90">Families</td>
                  <td className="text-center p-3 text-white/90">Gourmet Cooks</td>
                  <td className="text-center p-3 text-white/90">Tech Lovers</td>
                  <td className="text-center p-3 text-white/90">Large Families</td>
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
