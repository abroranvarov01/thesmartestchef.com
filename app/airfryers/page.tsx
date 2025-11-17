import { Check, Star, Wind, Timer, Flame } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { airFryerProducts } from "@/lib/products"

export default function AirFryersPage() {
  const products = airFryerProducts

  const features = [
    {
      icon: Wind,
      title: "Rapid Air Technology",
      description: "360° hot air circulation for perfectly crispy results every time",
    },
    {
      icon: Timer,
      title: "Precise Timing",
      description: "Digital timer with auto shut-off for perfect cooking results",
    },
    {
      icon: Flame,
      title: "Less Oil, More Flavor",
      description: "Use up to 85% less oil while maintaining delicious taste",
    },
  ]

  const recipes = [
    {
      name: "Crispy French Fries",
      time: "20 min",
      difficulty: "Easy",
      image: "/golden-crispy-french-fries-in-air-fryer-basket.jpg",
      description:
        "Perfectly golden and crispy french fries made with minimal oil. Cut potatoes into uniform strips, toss with a tablespoon of oil and your favorite seasonings, then air fry until golden brown. These fries are healthier than deep-fried versions while maintaining that irresistible crunch.",
    },
    {
      name: "Air Fried Chicken Wings",
      time: "25 min",
      difficulty: "Easy",
      image: "/crispy-buffalo-chicken-wings-with-sauce.jpg",
      description:
        "Juicy chicken wings with a crispy exterior, cooked to perfection without deep frying. Season with your choice of spices or toss in buffalo sauce after cooking. These wings are so crispy and flavorful, you won't believe they're made with 85% less oil than traditional fried wings.",
    },
    {
      name: "Roasted Vegetables",
      time: "15 min",
      difficulty: "Easy",
      image: "/colorful-roasted-vegetables-medley.jpg",
      description:
        "A vibrant medley of seasonal vegetables roasted to caramelized perfection. Bell peppers, zucchini, carrots, and broccoli are tossed with olive oil, garlic, and herbs, then air fried until tender with crispy edges. A healthy and delicious side dish that pairs perfectly with any main course.",
    },
    {
      name: "Fish & Chips",
      time: "30 min",
      difficulty: "Medium",
      image: "/crispy-fish-and-chips-with-tartar-sauce.jpg",
      description:
        "Classic British comfort food made healthier in the air fryer. Flaky white fish coated in a crispy breadcrumb crust, served alongside golden french fries. The fish stays moist and tender inside while achieving that perfect golden crunch outside. Serve with tartar sauce and lemon wedges for an authentic experience.",
    },
    {
      name: "Homemade Donuts",
      time: "18 min",
      difficulty: "Medium",
      image: "/glazed-donuts-with-colorful-sprinkles.jpg",
      description:
        "Light and fluffy donuts without the guilt of deep frying. These air-fried donuts are soft, pillowy, and perfect for glazing or coating with cinnamon sugar. Make a batch for breakfast or dessert, and customize with your favorite toppings like chocolate glaze, vanilla icing, or colorful sprinkles.",
    },
    {
      name: "Stuffed Peppers",
      time: "22 min",
      difficulty: "Medium",
      image: "/colorful-stuffed-bell-peppers-with-cheese.jpg",
      description:
        "Colorful bell peppers filled with a savory mixture of ground meat, rice, vegetables, and melted cheese. The air fryer cooks the peppers to tender perfection while keeping them slightly firm. This complete meal is nutritious, satisfying, and bursting with Mediterranean flavors.",
    },
  ]

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/wooden-table-ingredients.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Base Background */}
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
        {/* Dark Ingredients Overlay */}
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

        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-0.5">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Smart Air Fryers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Enjoy crispy, delicious food with up to 85% less oil
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-8 px-4 py-32 my-40 pb-4">
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="/golden-crispy-french-fries-in-white-bowl-on-dark-s.jpg"
              alt="Crispy French Fries"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="/perfectly-golden-air-fried-french-fries-in-rustic-.jpg"
              alt="Air Fried French Fries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose AirChef Air Fryers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Air Fryer Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-white/20"
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
                <div className="p-6">
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
                    <span className="text-sm text-white/80">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/90">
                        <Check className="text-sky-400" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Updated "See on Amazon" button */}
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition font-semibold cursor-pointer text-center"
                    >
                      See on Amazon
                    </a>
                    <Link
                      href={`/airfryers/${product.slug}#product-card`}
                      scroll={true}
                      className="flex-1 px-4 py-3 bg-yellow-800 text-white rounded-lg hover:bg-yellow-800/90 transition font-semibold cursor-pointer text-center"
                    >
                      Access the full review
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Compare All Models</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-left font-semibold text-white">Model</th>
                    <th className="p-4 text-left font-semibold text-white">Price</th>
                    <th className="p-4 text-left font-semibold text-white">Capacity</th>
                    <th className="p-4 text-left font-semibold text-white">Presets</th>
                    <th className="p-4 text-left font-semibold text-white">Power</th>
                    <th className="p-4 text-left font-semibold text-white">Temp Range</th>
                    <th className="p-4 text-left font-semibold text-white">Rating</th>
                    <th className="p-4 text-left font-semibold text-white">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Pro 5.5L</td>
                    <td className="p-4 text-white/90">$129.99</td>
                    <td className="p-4 text-white/90">5.5L</td>
                    <td className="p-4 text-white/90">8</td>
                    <td className="p-4 text-white/90">1700W</td>
                    <td className="p-4 text-white/90">80-200°C</td>
                    <td className="p-4 text-white/90">⭐ 4.8</td>
                    <td className="p-4 text-sm text-white/70">Everyday cooking</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Compact 3.5L</td>
                    <td className="p-4 text-white/90">$89.99</td>
                    <td className="p-4 text-white/90">3.5L</td>
                    <td className="p-4 text-white/90">6</td>
                    <td className="p-4 text-white/90">1400W</td>
                    <td className="p-4 text-white/90">80-200°C</td>
                    <td className="p-4 text-white/90">⭐ 4.7</td>
                    <td className="p-4 text-sm text-white/70">Small kitchens</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef XL 7L</td>
                    <td className="p-4 text-white/90">$179.99</td>
                    <td className="p-4 text-white/90">7L</td>
                    <td className="p-4 text-white/90">12</td>
                    <td className="p-4 text-white/90">1800W</td>
                    <td className="p-4 text-white/90">50-230°C</td>
                    <td className="p-4 text-white/90">⭐ 4.9</td>
                    <td className="p-4 text-sm text-white/70">Large meals</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Mini 2.5L</td>
                    <td className="p-4 text-white/90">$69.99</td>
                    <td className="p-4 text-white/90">2.5L</td>
                    <td className="p-4 text-white/90">5</td>
                    <td className="p-4 text-white/90">1200W</td>
                    <td className="p-4 text-white/90">80-200°C</td>
                    <td className="p-4 text-white/90">⭐ 4.6</td>
                    <td className="p-4 text-sm text-white/70">Singles/couples</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Family 9L</td>
                    <td className="p-4 text-white/90">$219.99</td>
                    <td className="p-4 text-white/90">9L</td>
                    <td className="p-4 text-white/90">15</td>
                    <td className="p-4 text-white/90">2000W</td>
                    <td className="p-4 text-white/90">40-230°C</td>
                    <td className="p-4 text-white/90">⭐ 4.9</td>
                    <td className="p-4 text-sm text-white/70">Large families</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Smart 6L</td>
                    <td className="p-4 text-white/90">$159.99</td>
                    <td className="p-4 text-white/90">6L</td>
                    <td className="p-4 text-white/90">10</td>
                    <td className="p-4 text-white/90">1750W</td>
                    <td className="p-4 text-white/90">60-220°C</td>
                    <td className="p-4 text-white/90">⭐ 4.8</td>
                    <td className="p-4 text-sm text-white/70">Smart home users</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Turbo 5L</td>
                    <td className="p-4 text-white/90">$139.99</td>
                    <td className="p-4 text-white/90">5L</td>
                    <td className="p-4 text-white/90">9</td>
                    <td className="p-4 text-white/90">1850W</td>
                    <td className="p-4 text-white/90">80-220°C</td>
                    <td className="p-4 text-white/90">⭐ 4.7</td>
                    <td className="p-4 text-sm text-white/70">Quick meals</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Deluxe 8L</td>
                    <td className="p-4 text-white/90">$199.99</td>
                    <td className="p-4 text-white/90">8L</td>
                    <td className="p-4 text-white/90">14</td>
                    <td className="p-4 text-white/90">1900W</td>
                    <td className="p-4 text-white/90">50-230°C</td>
                    <td className="p-4 text-white/90">⭐ 4.9</td>
                    <td className="p-4 text-sm text-white/70">Premium cooking</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-4 font-medium text-white">AirChef Eco 4.5L</td>
                    <td className="p-4 text-white/90">$109.99</td>
                    <td className="p-4 text-white/90">4.5L</td>
                    <td className="p-4 text-white/90">7</td>
                    <td className="p-4 text-white/90">1500W</td>
                    <td className="p-4 text-white/90">80-200°C</td>
                    <td className="p-4 text-white/90">⭐ 4.7</td>
                    <td className="p-4 text-sm text-white/70">Eco-conscious</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Popular Air Fryer Recipes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-white/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{recipe.name}</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{recipe.description}</p>
                  <div className="flex items-center justify-between text-sm text-white/80 pt-4 border-t border-white/10">
                    <span className="flex items-center gap-2">
                      <Timer size={16} />
                      {recipe.time}
                    </span>
                    <span className="px-3 py-1 text-white rounded-full bg-slate-600">{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
