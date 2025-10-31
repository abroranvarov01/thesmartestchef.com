import Link from "next/link"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xreaGO9q6iY6Wu4JKBifbyqqTYTdte.png)",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Cook Smarter, Eat Better
            </h1>
            <p className="text-lg text-white leading-relaxed text-balance">
              Discover the power of TheSmartChef cooking. From quick weeknight dinners to impressive meals, prepare
              restaurant-quality dishes in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/multicookers"
                className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition bg-transparent text-xl text-card cursor-pointer text-center"
              >
                Multicookers
              </Link>
              <Link
                href="/airfryers"
                className="border-2 px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-card border-background cursor-pointer text-center"
              >
                Airfryers
              </Link>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <img
              src="/modern-multicooker-on-kitchen-counter.jpg"
              alt="Modern multicooker"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
