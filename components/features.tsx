import { Timer, Flame, UtensilsCrossed } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Timer,
      title: "Save Time",
      description: "Cook complete meals in 30 minutes or less with our optimized recipes and settings.",
    },
    {
      icon: Flame,
      title: "Energy Efficient",
      description: "Use up to 70% less energy compared to traditional cooking methods.",
    },
    {
      icon: UtensilsCrossed,
      title: "Professional Results",
      description: "Achieve restaurant-quality dishes with consistent, perfect results every time.",
    },
  ]

  return (
    <section
      id="features"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Why Choose MultiChef?</h2>
          <p className="text-lg text-gray-100 text-balance">Experience the perfect blend of convenience and quality</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border hover:shadow-lg transition bg-transparent"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-transparent">
                  <Icon className="text-white leading-7 h-11 w-11" />
                </div>
                <h3 className="text-xl mb-2 text-sidebar-primary-foreground leading-7 font-extrabold">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-sidebar-primary-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
