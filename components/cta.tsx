import Link from "next/link"

export function CTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
          backgroundAttachment: "fixed",
          opacity: 0.85,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-card">Ready to Transform Your Cooking?</h2>
        <p className="text-lg mb-8 text-balance text-card">
          Join thousands of home cooks who've discovered the joy of multicooker cooking. Get your TheSmartChefs today
          and start creating amazing meals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/multicookers#products"
            scroll={true}
            className="text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg cursor-pointer bg-transparent"
          >
            Shop Now
          </Link>
          <Link
            href="/airfryers#products"
            scroll={true}
            className="border-2 px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition text-card border-popover cursor-pointer"
          >
            Other products
          </Link>
        </div>
      </div>
    </section>
  )
}
