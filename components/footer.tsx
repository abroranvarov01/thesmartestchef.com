import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative text-background py-16 overflow-hidden">
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
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <span className="text-popover-foreground font-sans leading-7 font-bold border-0 opacity-100 tracking-normal">
                  M
                </span>
              </div>
              <span className="text-xl font-bold">TheSmartChef</span>
            </div>
            <p className="text-background/70">Making quick, delicious cooking accessible to everyone.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="/" className="hover:text-background transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/recipes" className="hover:text-background transition">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-background transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="/faq" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-background transition">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:hello@multichef.com" className="hover:text-background transition">
                  write-to@thesmartchef.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-background transition">
                  +1 (888) 348-512
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-background/60 text-sm">
            <p>© 2025 TheSmartChef. All rights reserved.</p>
            <p className="text-right max-w-2xl">
              As part of the Amazon Associates Program, we may earn a commission on qualifying purchases. Our content
              remains impartial and based on honest assessments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
