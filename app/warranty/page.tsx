import Link from "next/link"
import { Shield, CheckCircle, Clock, FileText } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50 flex gap-2 flex-wrap">
        <Link
          href="/"
          className="px-4 py-2 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium hover:bg-white bg-transparent text-white"
        >
          Home
        </Link>
        <Link
          href="/recipes"
          className="px-4 py-2 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium hover:bg-white bg-transparent text-card"
        >
          Recipes
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium hover:bg-white bg-transparent text-card"
        >
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGSVxZ9lxVpbdB8hmHiDXNQpcUekln.png')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto mb-6 text-white" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Warranty Information</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your satisfaction and peace of mind are our top priorities
          </p>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGSVxZ9lxVpbdB8hmHiDXNQpcUekln.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 shadow-lg border border-border mb-12 bg-transparent text-white">
            <h2 className="text-3xl font-bold mb-6">Standard Warranty Coverage</h2>
            <p className="text-lg mb-6 text-white">
              All MultiChef products come with a comprehensive 2-year manufacturer's warranty from the date of purchase.
              This warranty covers defects in materials and workmanship under normal use.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Clock className="mx-auto mb-3 text-destructive" size={40} />
                <h3 className="font-semibold mb-2">2-Year Coverage</h3>
                <p className="text-sm text-muted-foreground">Full protection for 24 months</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <CheckCircle className="mx-auto mb-3 text-destructive" size={40} />
                <h3 className="font-semibold mb-2">Free Repairs</h3>
                <p className="text-sm text-muted-foreground">No cost for covered repairs</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <FileText className="mx-auto mb-3 text-destructive" size={40} />
                <h3 className="font-semibold mb-2">Easy Claims</h3>
                <p className="text-sm text-muted-foreground">Simple warranty process</p>
              </div>
            </div>
          </div>

          {/* What's Covered */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Covered</h2>
            <div className="rounded-lg p-6 border border-border bg-transparent">
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Manufacturing defects in materials or workmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Electrical or mechanical failures under normal use</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Defective heating elements or pressure systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Control panel malfunctions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Structural defects in the housing or inner pot</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What's Not Covered */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Not Covered</h2>
            <div className="rounded-lg p-6 border border-border bg-transparent">
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-red-500 font-extrabold">✕</span>
                  <span className="text-white">Damage from misuse, abuse, or accidents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-1 font-extrabold">✕</span>
                  <span className="text-white">Normal wear and tear (scratches, discoloration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-1 font-extrabold">✕</span>
                  <span className="text-white">Damage from unauthorized repairs or modifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-1 font-extrabold">✕</span>
                  <span className="text-white">Consumable parts (sealing rings, filters)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-1 font-extrabold">✕</span>
                  <span className="text-white">Damage from improper voltage or power surges</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to File a Claim */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How to File a Warranty Claim</h2>
            <div className="space-y-4">
              <div className="rounded-lg p-6 border border-border bg-transparent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold bg-card text-black">
                    1
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold mb-2">Contact Customer Support</h3>
                    <p className="text-white">
                      Email us at warranty@multichef.com or call +1 (234) 567-890 with your product details and issue
                      description.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-6 border border-border bg-transparent">
                <div className="flex items-start gap-4 text-white">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold bg-white text-black">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Provide Proof of Purchase</h3>
                    <p className="text-white">
                      Submit your original receipt or order confirmation showing the purchase date.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-6 border border-border bg-transparent">
                <div className="flex items-start gap-4 text-white">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold bg-white text-black">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Receive Instructions</h3>
                    <p className="text-white">
                      Our team will review your claim and provide shipping instructions or troubleshooting steps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-6 border border-border bg-transparent text-white">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold bg-white text-black">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Your Product Repaired or Replaced</h3>
                    <p className="text-white">
                      We'll repair or replace your product and ship it back to you within 7-10 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Warranty */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-white bg-transparent">
            <h2 className="text-3xl font-bold mb-4">Extended Warranty Available</h2>
            <p className="text-lg mb-6 text-white">
              Extend your coverage for up to 5 years with our Extended Warranty Plan. Get additional protection and
              priority support for complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
