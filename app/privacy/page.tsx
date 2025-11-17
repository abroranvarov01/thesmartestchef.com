"use client"

import { Shield } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UdQa3BotzlJj6er6Oroy9QgkqDpoAS.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto mb-6 text-white" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UdQa3BotzlJj6er6Oroy9QgkqDpoAS.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              <p className="text-white/90 mb-4">
                We collect information that you provide directly to us, including when you create an account, make a
                purchase, or contact our customer support team.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Name and contact information</li>
                <li>Payment and billing information</li>
                <li>Product preferences and purchase history</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <p className="text-white/90 mb-4">
                We use the information we collect to provide, maintain, and improve our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Processing and fulfilling your orders</li>
                <li>Sending you product updates and promotional materials</li>
                <li>Responding to your questions and providing customer support</li>
                <li>Improving our products and services</li>
                <li>Detecting and preventing fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Information Sharing</h2>
              <p className="text-white/90 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Service providers who help us operate our business</li>
                <li>Payment processors to complete transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
              <p className="text-white/90">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="text-white/90 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Cookies and Tracking</h2>
              <p className="text-white/90">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze site
                traffic, and personalize content. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Policy</h2>
              <p className="text-white/90">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-white/90">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-white/90 mt-2">
                Email: privacy@thesmartchefs.com
                <br />
                Phone: 1-800-THESMARTCHEFS
              </p>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-white/70">Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
