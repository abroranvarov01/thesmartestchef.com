import { Star } from "lucide-react"

export function ProductsShowcase() {
  const products = [
    {
      id: 1,
      name: "MultiChef Pro 8L",
      price: "$299",
      rating: 4.8,
      reviews: 324,
      image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
      features: ["8L Capacity", "14 Programs", "Smart Timer"],
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "QuickCook Express 6L",
      price: "$179",
      rating: 4.6,
      reviews: 218,
      image: "/compact-multicooker-6-liter-red.jpg",
      features: ["6L Capacity", "10 Programs", "Budget Friendly"],
      badge: "Value Pick",
    },
    {
      id: 3,
      name: "Elite Pressure Master 10L",
      price: "$449",
      rating: 4.9,
      reviews: 456,
      image: "/premium-large-multicooker-10-liter-luxury.jpg",
      features: ["10L Capacity", "20 Programs", "WiFi Control"],
      badge: "Premium",
    },
    {
      id: 4,
      name: "FamilyFeast 12L",
      price: "$399",
      rating: 4.7,
      reviews: 287,
      image: "/extra-large-multicooker-12-liter-family-size.jpg",
      features: ["12L Capacity", "18 Programs", "Batch Cooking"],
      badge: "Family Size",
    },
    {
      id: 5,
      name: "SlimChef Compact 3L",
      price: "$99",
      rating: 4.4,
      reviews: 156,
      image: "/small-compact-multicooker-3-liter-apartment.jpg",
      features: ["3L Capacity", "8 Programs", "Portable"],
      badge: "Compact",
    },
    {
      id: 6,
      name: "SteamPerfect Duo 7L",
      price: "$349",
      rating: 4.8,
      reviews: 312,
      image: "/multicooker-with-steamer-basket-7-liter.jpg",
      features: ["7L Capacity", "16 Programs", "Steamer Basket"],
      badge: "Healthy Cooking",
    },
    {
      id: 7,
      name: "VintageStyle Classic 5L",
      price: "$189",
      rating: 4.5,
      reviews: 198,
      image: "/retro-vintage-multicooker-5-liter-cream-color.jpg",
      features: ["5L Capacity", "12 Programs", "Retro Design"],
      badge: "Stylish",
    },
    {
      id: 8,
      name: "ProChef Stainless 9L",
      price: "$429",
      rating: 4.9,
      reviews: 389,
      image: "/professional-stainless-steel-multicooker-9-liter.jpg",
      features: ["9L Capacity", "22 Programs", "Stainless Steel"],
      badge: "Professional",
    },
    {
      id: 9,
      name: "EcoSmart Energy 6L",
      price: "$219",
      rating: 4.6,
      reviews: 241,
      image: "/energy-efficient-multicooker-6-liter-eco-friendly.jpg",
      features: ["6L Capacity", "14 Programs", "Energy Saving"],
      badge: "Eco Friendly",
    },
    {
      id: 10,
      name: "TravelMate Portable 4L",
      price: "$129",
      rating: 4.5,
      reviews: 167,
      image: "/portable-travel-multicooker-4-liter-lightweight.jpg",
      features: ["4L Capacity", "9 Programs", "Travel Ready"],
      badge: "Portable",
    },
    {
      id: 11,
      name: "GourmetMax Deluxe 8L",
      price: "$379",
      rating: 4.8,
      reviews: 334,
      image: "/deluxe-gourmet-multicooker-8-liter-touchscreen.jpg",
      features: ["8L Capacity", "19 Programs", "Touchscreen"],
      badge: "Deluxe",
    },
    {
      id: 12,
      name: "BudgetBest Basic 5L",
      price: "$139",
      rating: 4.3,
      reviews: 142,
      image: "/basic-simple-multicooker-5-liter-affordable.jpg",
      features: ["5L Capacity", "7 Programs", "No Frills"],
      badge: "Budget",
    },
  ]

  return (
    <section id="products" className="relative py-20 md:py-32 overflow-hidden">
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
          backgroundAttachment: "fixed", // Added fixed attachment to align with base background
          opacity: 0.85,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-card">Our Multicooker Collection</h2>
          <p className="text-lg text-balance text-card">
            Find the perfect multicooker for your kitchen, from compact models to family-sized powerhouses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="group rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/20 hover:shadow-xl transition duration-300"
            >
              {/* Badge */}
              <div className="relative">
                <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-primary transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition text-sm font-medium text-center"
                  >
                    See on Amazon
                  </a>
                  <button className="flex-1 bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-800/90 transition text-sm font-medium">
                    Access the full review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
