import { Check, Star, Package, Shield, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AccessoriesPage() {
  const categories = [
    {
      name: "Cooking Accessories",
      icon: Package,
      items: [
        {
          name: "Silicone Steamer Basket",
          price: "$24.99",
          rating: 4.8,
          reviews: 342,
          description: "Perfect for steaming vegetables, dumplings, and more",
        },
        {
          name: "Stainless Steel Inner Pot",
          price: "$39.99",
          rating: 4.9,
          reviews: 567,
          description: "Extra pot for convenient meal prep and cooking",
        },
        {
          name: "Egg Rack Set",
          price: "$14.99",
          rating: 4.7,
          reviews: 289,
          description: "Cook up to 14 eggs at once with perfect results",
        },
        {
          name: "Springform Pan",
          price: "$19.99",
          rating: 4.8,
          reviews: 423,
          description: "Ideal for cheesecakes, lasagna, and layered dishes",
        },
      ],
    },
    {
      name: "Cleaning & Maintenance",
      icon: Sparkles,
      items: [
        {
          name: "Cleaning Brush Set",
          price: "$12.99",
          rating: 4.6,
          reviews: 234,
          description: "Specialized brushes for thorough cleaning",
        },
        {
          name: "Sealing Ring Pack (3pcs)",
          price: "$16.99",
          rating: 4.9,
          reviews: 678,
          description: "Replacement sealing rings for optimal performance",
        },
        {
          name: "Steam Release Valve",
          price: "$8.99",
          rating: 4.7,
          reviews: 156,
          description: "Replacement valve for safe pressure release",
        },
        {
          name: "Anti-Block Shield",
          price: "$9.99",
          rating: 4.8,
          reviews: 198,
          description: "Prevents clogging and ensures proper steam flow",
        },
      ],
    },
    {
      name: "Protection & Storage",
      icon: Shield,
      items: [
        {
          name: "Tempered Glass Lid",
          price: "$29.99",
          rating: 4.9,
          reviews: 445,
          description: "See your food while it cooks with this durable lid",
        },
        {
          name: "Protective Carrying Case",
          price: "$34.99",
          rating: 4.7,
          reviews: 267,
          description: "Padded case for safe transport and storage",
        },
        {
          name: "Silicone Pot Holder",
          price: "$11.99",
          rating: 4.6,
          reviews: 312,
          description: "Heat-resistant holder for safe pot removal",
        },
        {
          name: "Recipe Book Bundle",
          price: "$24.99",
          rating: 5.0,
          reviews: 892,
          description: "500+ recipes for multicookers and air fryers",
        },
      ],
    },
  ]

  const bundles = [
    {
      name: "Essential Starter Kit",
      price: "$79.99",
      originalPrice: "$99.99",
      items: ["Steamer Basket", "Extra Pot", "Sealing Ring Pack", "Cleaning Brush Set"],
      savings: "Save $20",
    },
    {
      name: "Complete Cooking Set",
      price: "$129.99",
      originalPrice: "$169.99",
      items: ["All Starter Kit Items", "Springform Pan", "Egg Rack", "Glass Lid", "Recipe Book"],
      savings: "Save $40",
    },
    {
      name: "Premium Bundle",
      price: "$189.99",
      originalPrice: "$249.99",
      items: ["All Complete Set Items", "Carrying Case", "Pot Holder", "Extra Sealing Rings", "Premium Warranty"],
      savings: "Save $60",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Base background layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j4zN2vtfNc39xiHg3tUSTuOK4mIFq0.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Accessories & Add-ons</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Enhance your cooking experience with our premium accessories
          </p>
        </div>
      </section>

      {/* Accessory Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={
            categoryIndex === 0 || categoryIndex === 1 || categoryIndex === 2
              ? "relative py-20 overflow-hidden"
              : categoryIndex % 2 === 0
                ? "py-20 bg-background"
                : "py-20 bg-muted/30"
          }
        >
          {(categoryIndex === 0 || categoryIndex === 1 || categoryIndex === 2) && (
            <>
              {/* Base background layer - same as Hero */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j4zN2vtfNc39xiHg3tUSTuOK4mIFq0.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              />
              {/* Dark overlay for consistency with Hero */}
              <div className="absolute inset-0 bg-black/40" />
            </>
          )}
          <div
            className={
              categoryIndex === 0 || categoryIndex === 1 || categoryIndex === 2
                ? "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            }
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <category.icon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-bold text-white">{category.name}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          size={14}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({item.reviews})</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-semibold cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bundle Deals */}
      <section className="relative py-20 overflow-hidden">
        {/* Base background layer - same as Hero */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j4zN2vtfNc39xiHg3tUSTuOK4mIFq0.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark overlay for consistency */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Bundle Deals</h2>
          <p className="text-center text-white/80 mb-12">Save more when you buy together</p>
          <div className="grid md:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-primary/20"
              >
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                    {bundle.savings}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">{bundle.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{bundle.originalPrice}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {bundle.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="text-primary flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold cursor-pointer">
                  Buy Bundle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
