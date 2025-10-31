"use client"

import { FileText } from "lucide-react"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VUycjd867Qj6B9Ksyia2At7XxmkoMj.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="mx-auto mb-6 text-white" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our products and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VUycjd867Qj6B9Ksyia2At7XxmkoMj.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-white/90">
                By accessing and using TheSmartChef products and services, you accept and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, please do not use our products or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Product Usage</h2>
              <p className="text-white/90 mb-4">
                Our multicooker products are designed for household use only. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Use the product according to the provided instructions and safety guidelines</li>
                <li>Not use the product for commercial purposes without authorization</li>
                <li>Not modify or tamper with the product in any way</li>
                <li>Keep the product away from children unless supervised</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Warranty and Returns</h2>
              <p className="text-white/90 mb-4">
                All TheSmartChef products come with a standard warranty. Please refer to our Warranty page for detailed
                information about coverage, exclusions, and claim procedures.
              </p>
              <p className="text-white/90">
                Returns are accepted within 30 days of purchase for unused products in original packaging. Shipping
                costs for returns are the responsibility of the customer unless the product is defective.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Limitation of Liability</h2>
              <p className="text-white/90">
                TheSmartChef shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of our products. Our total liability shall not exceed the purchase price
                of the product.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Intellectual Property</h2>
              <p className="text-white/90">
                All content on our website, including text, graphics, logos, images, and software, is the property of
                TheSmartChef and protected by copyright and trademark laws. You may not reproduce, distribute, or create
                derivative works without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">6. User Accounts</h2>
              <p className="text-white/90 mb-4">If you create an account with us, you are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Pricing and Payment</h2>
              <p className="text-white/90">
                All prices are subject to change without notice. We reserve the right to modify prices, discontinue
                products, or refuse service to anyone. Payment must be received before products are shipped. We accept
                major credit cards and other payment methods as indicated at checkout.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Shipping and Delivery</h2>
              <p className="text-white/90">
                We ship to addresses within the United States and select international locations. Delivery times are
                estimates and not guaranteed. Risk of loss passes to you upon delivery to the carrier. We are not
                responsible for delays caused by shipping carriers or customs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Governing Law</h2>
              <p className="text-white/90">
                These Terms and Conditions are governed by the laws of the United States. Any disputes shall be resolved
                in the courts of [Your State/Country].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to Terms</h2>
              <p className="text-white/90">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to our website. Your continued use of our products and services constitutes acceptance of the
                modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Contact Information</h2>
              <p className="text-white/90">For questions about these Terms and Conditions, please contact us at:</p>
              <p className="text-white/90 mt-2">
                Email: write-to@multichef.com
                <br />
                Phone: +1 (888) 348-512
                <br />
                Address: 421 Maple Street, New York, NY 10005
              </p>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-white/80">Last Updated: October 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
