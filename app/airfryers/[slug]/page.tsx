import { Check, Star, ArrowLeft, Wind, Timer, Flame } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    slug: "airchef-pro-5-5l",
    name: "AirChef Pro 5.5L",
    price: "$129.99",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 4.8,
    reviews: 856,
    capacity: "5.5L",
    presets: 8,
    features: ["5.5L Capacity", "Digital Display", "8 Presets", "Dishwasher Safe"],
    badge: "Best Seller",
    wattage: "1700W",
    tempRange: "80-200°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Pro 5.5L is our best-selling air fryer, combining generous capacity with user-friendly features that make healthy cooking effortless. With its 5.5-liter basket, you can prepare meals for 4-5 people in one go, making it perfect for families. The intuitive digital display provides precise control over temperature and timing, while 8 pre-programmed presets take the guesswork out of cooking your favorite foods. The non-stick basket is dishwasher safe for easy cleanup, and the compact footprint won't take up too much counter space. Whether you're making crispy french fries, juicy chicken wings, or roasted vegetables, the AirChef Pro delivers consistent, delicious results with up to 85% less oil than traditional frying methods.",
    specifications: {
      capacity: "5.5 Liters",
      presets: "8 Cooking Presets",
      power: "1700W",
      tempRange: "80-200°C",
      warranty: "2 Years",
      dimensions: "12 x 12 x 13 inches",
    },
  },
  {
    slug: "airchef-compact-3-5l",
    name: "AirChef Compact 3.5L",
    price: "$89.99",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.7,
    reviews: 623,
    capacity: "3.5L",
    presets: 6,
    features: ["3.5L Capacity", "Touch Control", "6 Presets", "Compact Design"],
    badge: "Budget Pick",
    wattage: "1400W",
    tempRange: "80-200°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Compact 3.5L is the perfect entry-level air fryer for singles, couples, or anyone with limited kitchen space. Despite its compact size, this budget-friendly model doesn't compromise on performance, delivering crispy, delicious results every time. The sleek touch control panel makes operation simple and intuitive, while 6 essential cooking presets cover all your basic air frying needs. The 3.5-liter capacity is ideal for preparing meals for 1-2 people, and the compact design means it won't take up valuable counter space. The energy-efficient 1400W heating element provides fast, even cooking, while the removable basket makes cleanup a breeze. If you're new to air frying or looking for an affordable option that delivers great results, the Compact 3.5L is an excellent choice.",
    specifications: {
      capacity: "3.5 Liters",
      presets: "6 Cooking Presets",
      power: "1400W",
      tempRange: "80-200°C",
      warranty: "1 Year",
      dimensions: "10 x 10 x 11 inches",
    },
  },
  {
    slug: "airchef-xl-7l",
    name: "AirChef XL 7L",
    price: "$179.99",
    image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
    rating: 4.9,
    reviews: 1034,
    capacity: "7L",
    presets: 12,
    features: ["7L Capacity", "Smart Control", "12 Presets", "Dual Basket"],
    badge: "Premium",
    wattage: "1800W",
    tempRange: "50-230°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef XL 7L represents the pinnacle of air frying technology, offering premium features and exceptional versatility for serious home cooks. The generous 7-liter capacity with dual basket design allows you to cook two different foods simultaneously at different temperatures, perfect for preparing complete meals in one go. Smart control technology with 12 pre-programmed presets ensures perfect results every time, while the extended temperature range from 50-230°C opens up new cooking possibilities including dehydrating and slow cooking. The powerful 1800W heating element provides rapid, even heat distribution for consistently crispy results. Premium construction with stainless steel accents and a sleek design makes this air fryer a beautiful addition to any kitchen. If you're looking for the ultimate air frying experience with maximum versatility, the XL 7L is your perfect choice.",
    specifications: {
      capacity: "7 Liters (Dual Basket)",
      presets: "12 Cooking Presets",
      power: "1800W",
      tempRange: "50-230°C",
      warranty: "3 Years",
      dimensions: "14 x 13 x 14 inches",
    },
  },
  {
    slug: "airchef-mini-2-5l",
    name: "AirChef Mini 2.5L",
    price: "$69.99",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.6,
    reviews: 412,
    capacity: "2.5L",
    presets: 5,
    features: ["2.5L Capacity", "Manual Control", "5 Presets", "Space Saving"],
    badge: "Compact",
    wattage: "1200W",
    tempRange: "80-200°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Mini 2.5L is the ultimate space-saving solution for small kitchens, dorm rooms, or RVs. This ultra-compact air fryer may be small in size, but it delivers big on performance and convenience. The 2.5-liter capacity is perfect for preparing individual portions or small meals for one person, making it ideal for singles or those living alone. Simple manual controls make operation straightforward, while 5 essential presets cover the most popular air frying applications. The compact footprint means you can easily store it in a cabinet when not in use, and the lightweight design makes it portable enough to take with you on trips. Despite its affordable price point, the Mini 2.5L doesn't compromise on quality, featuring a durable non-stick basket and reliable heating element that delivers consistent results.",
    specifications: {
      capacity: "2.5 Liters",
      presets: "5 Cooking Presets",
      power: "1200W",
      tempRange: "80-200°C",
      warranty: "1 Year",
      dimensions: "9 x 9 x 10 inches",
    },
  },
  {
    slug: "airchef-family-9l",
    name: "AirChef Family 9L",
    price: "$219.99",
    image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
    rating: 4.9,
    reviews: 789,
    capacity: "9L",
    presets: 15,
    features: ["9L Capacity", "WiFi Control", "15 Presets", "Triple Basket"],
    badge: "Family Size",
    wattage: "2000W",
    tempRange: "40-230°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Family 9L is specifically engineered for large families and those who love to entertain. With its massive 9-liter capacity and innovative triple basket design, you can cook three different foods simultaneously, making meal preparation faster and more efficient than ever. WiFi connectivity allows you to control and monitor your cooking from anywhere using your smartphone, receiving notifications when your food is ready. Fifteen versatile cooking presets cover everything from basic air frying to advanced techniques like rotisserie and dehydrating. The powerful 2000W heating element ensures even cooking throughout the large capacity, while the extended temperature range from 40-230°C provides maximum versatility. If you're tired of cooking in batches or need a reliable appliance for feeding a crowd, the Family 9L is your ultimate solution.",
    specifications: {
      capacity: "9 Liters (Triple Basket)",
      presets: "15 Cooking Presets",
      power: "2000W",
      tempRange: "40-230°C",
      warranty: "3 Years",
      dimensions: "16 x 15 x 15 inches",
    },
  },
  {
    slug: "airchef-smart-6l",
    name: "AirChef Smart 6L",
    price: "$159.99",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 4.8,
    reviews: 945,
    capacity: "6L",
    presets: 10,
    features: ["6L Capacity", "App Control", "10 Presets", "Voice Assistant"],
    badge: "Smart Home",
    wattage: "1750W",
    tempRange: "60-220°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Smart 6L brings your air fryer into the smart home era with advanced connectivity features and intelligent cooking technology. Control your air fryer using the dedicated smartphone app, allowing you to start, stop, and adjust cooking settings from anywhere in your home. Voice assistant compatibility means you can control your air fryer hands-free using Alexa or Google Assistant. The 6-liter capacity is perfect for families of 3-4, while 10 smart presets automatically adjust time and temperature for optimal results. The app provides access to hundreds of recipes with step-by-step instructions, and you can save your favorite custom settings for one-touch cooking. For tech-savvy home cooks who want the convenience of smart home integration, the Smart 6L is the perfect choice.",
    specifications: {
      capacity: "6 Liters",
      presets: "10 Smart Presets",
      power: "1750W",
      tempRange: "60-220°C",
      warranty: "2 Years",
      dimensions: "13 x 12 x 13 inches",
    },
  },
  {
    slug: "airchef-turbo-5l",
    name: "AirChef Turbo 5L",
    price: "$139.99",
    image: "/modern-multicooker-on-kitchen-counter.jpg",
    rating: 4.7,
    reviews: 678,
    capacity: "5L",
    presets: 9,
    features: ["5L Capacity", "Turbo Mode", "9 Presets", "Quick Preheat"],
    badge: "Fast Cook",
    wattage: "1850W",
    tempRange: "80-220°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Turbo 5L is engineered for speed without sacrificing quality, making it perfect for busy families who need dinner on the table fast. The innovative Turbo Mode increases air circulation and heat intensity, reducing cooking times by up to 30% compared to standard air fryers. Quick preheat technology means you can start cooking in just 2 minutes, eliminating the long wait times associated with traditional ovens. The 5-liter capacity is ideal for families of 3-4, while 9 optimized presets ensure perfect results even when you're in a hurry. The powerful 1850W heating element provides rapid, even cooking, and the streamlined design makes operation simple even when you're rushing. If time is precious and you need an air fryer that can keep up with your busy lifestyle, the Turbo 5L is your ideal solution.",
    specifications: {
      capacity: "5 Liters",
      presets: "9 Cooking Presets",
      power: "1850W",
      tempRange: "80-220°C",
      warranty: "2 Years",
      dimensions: "12 x 11 x 12 inches",
    },
  },
  {
    slug: "airchef-deluxe-8l",
    name: "AirChef Deluxe 8L",
    price: "$199.99",
    image: "/large-professional-multicooker-8-liter-stainless-s.jpg",
    rating: 4.9,
    reviews: 1156,
    capacity: "8L",
    presets: 14,
    features: ["8L Capacity", "Rotisserie", "14 Presets", "Window View"],
    badge: "Deluxe",
    wattage: "1900W",
    tempRange: "50-230°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Deluxe 8L is the ultimate premium air fryer for culinary enthusiasts who demand the best. The built-in rotisserie function allows you to prepare perfectly roasted chicken, kebabs, and other rotating foods with restaurant-quality results. The large viewing window lets you monitor your food without opening the basket, maintaining optimal cooking conditions. With an impressive 8-liter capacity, you can easily prepare meals for 6-8 people, making it perfect for entertaining. Fourteen versatile presets cover everything from basic air frying to advanced techniques, while the extended temperature range provides maximum cooking flexibility. Premium construction with stainless steel accents and a sleek design makes this air fryer a stunning addition to any kitchen. If you're passionate about cooking and want an air fryer that can handle any culinary challenge, the Deluxe 8L is your perfect companion.",
    specifications: {
      capacity: "8 Liters",
      presets: "14 Cooking Presets",
      power: "1900W",
      tempRange: "50-230°C",
      warranty: "3 Years",
      dimensions: "15 x 14 x 14 inches",
    },
  },
  {
    slug: "airchef-eco-4-5l",
    name: "AirChef Eco 4.5L",
    price: "$109.99",
    image: "/compact-multicooker-6-liter-red.jpg",
    rating: 4.7,
    reviews: 534,
    capacity: "4.5L",
    presets: 7,
    features: ["4.5L Capacity", "Energy Saving", "7 Presets", "Eco Mode"],
    badge: "Eco-Friendly",
    wattage: "1500W",
    tempRange: "80-200°C",
    amazonLink: "https://www.amazon.com",
    description:
      "The AirChef Eco 4.5L is the environmentally conscious choice for sustainable cooking without compromising performance. This innovative air fryer features an advanced energy-saving mode that reduces power consumption by up to 25% compared to standard models, helping you reduce your carbon footprint while saving on electricity bills. The basket is made from eco-friendly materials that are free from PFOA and other harmful chemicals, ensuring safe and healthy cooking for your family. The 4.5-liter capacity is perfect for small to medium families, while 7 cooking presets cover all essential air frying needs. The exterior is constructed from recycled materials, and the packaging is 100% recyclable. For environmentally conscious consumers who want to make sustainable choices without sacrificing convenience or performance, the Eco 4.5L is the ideal air fryer.",
    specifications: {
      capacity: "4.5 Liters",
      presets: "7 Cooking Presets",
      power: "1500W (Energy Efficient)",
      tempRange: "80-200°C",
      warranty: "2 Years",
      dimensions: "11 x 11 x 12 inches",
    },
  },
]

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
