import { Check, Star, ArrowLeft, Shield, Zap, Thermometer } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    slug: "ninja-mc1001-foodi",
    name: "Ninja MC1001 Foodi PossibleCooker PRO 8.5",
    image: "https://m.media-amazon.com/images/I/61-hMn0AQsL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    rating: 4.7,
    reviews: 4893,
    features: ["8.5 Quarts", "15 Cooking Programs", "Stainless Steel", "Smart Control"],
    badge: "Premium",
    amazonLink: "https://www.amazon.com/Ninja-MC1001-PossibleCooker-Multi-Cooker-Integrated/dp/B0B4PPHG8G",
    description:
      "The Ninja MC1001 Foodi PossibleCooker PRO is a revolutionary 8-in-1 multi-cooker that combines the functionality of multiple kitchen appliances into one powerful device. With its generous 8.5-quart capacity, this premium multicooker is perfect for families and meal prep enthusiasts. The integrated smart control system allows you to monitor and adjust cooking settings with precision, ensuring perfect results every time. The stainless steel construction provides durability and easy cleaning, while the 15 pre-programmed cooking functions cover everything from slow cooking and pressure cooking to sautéing and steaming. Whether you're preparing a quick weeknight dinner or an elaborate weekend feast, the Ninja Foodi PossibleCooker PRO delivers consistent, delicious results with minimal effort.",
    specifications: {
      capacity: "8.5 Quarts",
      programs: "15 Cooking Programs",
      material: "Stainless Steel",
      power: "1400W",
      warranty: "2 Years",
      dimensions: "14.5 x 13.5 x 12.5 inches",
    },
  },
  {
    slug: "compact-6l",
    name: "TheSmartChef Compact 6L",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.8,
    reviews: 892,
    features: ["6L Capacity", "12 Cooking Programs", "Non-Stick Pot", "Energy Efficient"],
    badge: "Popular",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Compact 6L is designed for couples and small families who want the convenience of a multicooker without taking up too much counter space. This popular model features a 6-liter capacity that's perfect for preparing meals for 2-4 people. The non-stick inner pot ensures easy food release and simple cleanup, while the 12 pre-programmed cooking functions handle everything from rice and porridge to stews and yogurt. Energy-efficient design means you can cook delicious meals while keeping your electricity bills low. The intuitive control panel makes operation straightforward, even for first-time multicooker users. With its compact footprint and vibrant red finish, this multicooker looks great on any kitchen counter while delivering professional-quality results.",
    specifications: {
      capacity: "6 Liters",
      programs: "12 Cooking Programs",
      material: "Non-Stick Coating",
      power: "1000W",
      warranty: "2 Years",
      dimensions: "11 x 11 x 10 inches",
    },
  },
  {
    slug: "elite-10l",
    name: "TheSmartChef Elite 10L",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 5.0,
    reviews: 634,
    features: ["10L Capacity", "20 Cooking Programs", "Premium Build", "WiFi Connected"],
    badge: "Premium",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Elite 10L represents the pinnacle of multicooker technology, combining massive capacity with cutting-edge smart features. With its impressive 10-liter capacity, this premium appliance can easily handle large family meals and entertaining. The WiFi connectivity allows you to control and monitor your cooking from anywhere using your smartphone, receiving notifications when your meal is ready. Twenty pre-programmed cooking functions provide unmatched versatility, from traditional pressure cooking and slow cooking to advanced techniques like sous vide and fermentation. The premium build quality features a brushed stainless steel exterior, reinforced inner pot, and precision temperature sensors for consistent results. Perfect for tech-savvy home chefs who demand the best in both performance and convenience.",
    specifications: {
      capacity: "10 Liters",
      programs: "20 Cooking Programs",
      material: "Premium Stainless Steel",
      power: "1500W",
      warranty: "3 Years",
      dimensions: "15 x 14 x 13 inches",
    },
  },
  {
    slug: "mini-4l",
    name: "TheSmartChef Mini 4L",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.7,
    reviews: 543,
    features: ["4L Capacity", "10 Cooking Programs", "Compact Design", "Perfect for 2-3 People"],
    badge: "Budget Friendly",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Mini 4L is the perfect entry-level multicooker for singles, couples, or anyone with limited kitchen space. Despite its compact 4-liter capacity, this budget-friendly appliance doesn't compromise on functionality, offering 10 essential cooking programs that cover all your basic cooking needs. The ultra-compact design makes it ideal for small apartments, dorm rooms, or RVs, while still providing enough capacity to prepare satisfying meals for 2-3 people. The simple interface and straightforward operation make it perfect for beginners, while the quality construction ensures years of reliable service. Whether you're cooking rice, making soup, or preparing a quick stew, the Mini 4L delivers consistent results without breaking the bank.",
    specifications: {
      capacity: "4 Liters",
      programs: "10 Cooking Programs",
      material: "Non-Stick Coating",
      power: "800W",
      warranty: "1 Year",
      dimensions: "10 x 10 x 9 inches",
    },
  },
  {
    slug: "family-12l",
    name: "TheSmartChef Family 12L",
    image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
    rating: 4.9,
    reviews: 421,
    features: ["12L Capacity", "18 Cooking Programs", "Extra Large Pot", "Feeds 8-10 People"],
    badge: "Family Size",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Family 12L is specifically engineered for large families and those who love to entertain. With its massive 12-liter capacity, this multicooker can easily prepare meals for 8-10 people, making it perfect for family gatherings, parties, or batch cooking for the week ahead. The extra-large inner pot is constructed from heavy-duty stainless steel for superior heat distribution and durability. Eighteen versatile cooking programs handle everything from everyday meals to special occasion dishes, while the powerful heating element ensures even cooking throughout the large capacity. The reinforced lid and enhanced safety features provide peace of mind when cooking large quantities. If you're tired of cooking in batches or need a reliable appliance for feeding a crowd, the Family 12L is your ideal solution.",
    specifications: {
      capacity: "12 Liters",
      programs: "18 Cooking Programs",
      material: "Heavy-Duty Stainless Steel",
      power: "1600W",
      warranty: "2 Years",
      dimensions: "16 x 15 x 14 inches",
    },
  },
  {
    slug: "air-7l",
    name: "TheSmartChef Air 7L",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 4.8,
    reviews: 789,
    features: ["7L Capacity", "Air Fry Function", "16 Programs", "Dual Cooking Modes"],
    badge: "Versatile",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Air 7L is the ultimate versatile kitchen appliance, combining traditional multicooker functions with advanced air frying technology. This innovative 2-in-1 design eliminates the need for a separate air fryer, saving valuable counter space while expanding your cooking possibilities. The 7-liter capacity is perfect for families of 4-6, while the dual cooking modes allow you to pressure cook and air fry in the same appliance. Sixteen pre-programmed functions cover everything from crispy air-fried chicken to tender slow-cooked roasts. The unique air frying lid creates perfectly crispy results with up to 75% less fat than traditional frying methods. Whether you're craving healthy crispy foods or comforting pressure-cooked meals, the Air 7L delivers exceptional versatility and performance.",
    specifications: {
      capacity: "7 Liters",
      programs: "16 Cooking Programs",
      material: "Stainless Steel with Air Fry Lid",
      power: "1400W",
      warranty: "2 Years",
      dimensions: "13 x 13 x 12 inches",
    },
  },
  {
    slug: "express-5l",
    name: "TheSmartChef Express 5L",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.6,
    reviews: 612,
    features: ["5L Capacity", "High Pressure Mode", "13 Programs", "Quick Release Valve"],
    badge: "Fast Cooking",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Express 5L is engineered for speed without sacrificing quality, making it perfect for busy professionals and families on the go. The enhanced high-pressure mode cooks food up to 70% faster than traditional methods, turning tough cuts of meat tender in minutes and cooking dried beans without pre-soaking. The 5-liter capacity is ideal for small to medium families, while the quick-release valve allows for safe and rapid pressure release when you need your meal in a hurry. Thirteen cooking programs are optimized for speed and efficiency, covering all your essential cooking needs from quick rice to express stews. The streamlined design and intuitive controls make operation simple, even when you're rushing to get dinner on the table.",
    specifications: {
      capacity: "5 Liters",
      programs: "13 Cooking Programs",
      material: "Stainless Steel",
      power: "1200W",
      warranty: "2 Years",
      dimensions: "11.5 x 11.5 x 10.5 inches",
    },
  },
  {
    slug: "gourmet-9l",
    name: "TheSmartChef Gourmet 9L",
    image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
    rating: 4.9,
    reviews: 356,
    features: ["9L Capacity", "22 Cooking Programs", "Sous Vide Mode", "Recipe App Included"],
    badge: "Chef's Choice",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Gourmet 9L is designed for culinary enthusiasts who demand restaurant-quality results at home. This chef-grade multicooker features an impressive 22 cooking programs, including advanced techniques like sous vide for perfectly cooked proteins and vegetables. The precision temperature control maintains exact temperatures within 0.5°C, ensuring consistent results every time. The included recipe app provides access to hundreds of chef-developed recipes with step-by-step instructions, automatically adjusting cooking parameters for perfect results. The 9-liter capacity is ideal for serious home cooks who want to experiment with complex recipes and techniques. Premium construction with a heavy-gauge stainless steel pot and reinforced heating element ensures professional-level performance and durability. If you're passionate about cooking and want to elevate your culinary skills, the Gourmet 9L is your perfect kitchen companion.",
    specifications: {
      capacity: "9 Liters",
      programs: "22 Cooking Programs",
      material: "Premium Stainless Steel",
      power: "1500W",
      warranty: "3 Years",
      dimensions: "14.5 x 13.5 x 12.5 inches",
    },
  },
  {
    slug: "eco-6l",
    name: "TheSmartChef Eco 6L",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 4.7,
    reviews: 498,
    features: ["6L Capacity", "Energy Saving Mode", "12 Programs", "Eco-Friendly Materials"],
    badge: "Eco-Friendly",
    amazonLink: "https://www.amazon.com",
    description:
      "The TheSmartChef Eco 6L is the environmentally conscious choice for sustainable cooking without compromising performance. This innovative multicooker features an advanced energy-saving mode that reduces power consumption by up to 30% compared to standard models, helping you reduce your carbon footprint while saving on electricity bills. The inner pot is made from eco-friendly ceramic coating that's free from PFOA and other harmful chemicals, ensuring safe and healthy cooking for your family. The 6-liter capacity is perfect for everyday family meals, while the 12 cooking programs cover all essential cooking methods. The exterior is constructed from recycled materials, and the packaging is 100% recyclable. For environmentally conscious consumers who want to make sustainable choices without sacrificing convenience or performance, the Eco 6L is the ideal multicooker.",
    specifications: {
      capacity: "6 Liters",
      programs: "12 Cooking Programs",
      material: "Eco-Ceramic Coating",
      power: "900W",
      warranty: "2 Years",
      dimensions: "11.5 x 11.5 x 10.5 inches",
    },
  },
]

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
                    <Check className="text-primary" size={20} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
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
