import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fc7hIAMz1EexOCOCibu5D0pzGH5CNz.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Disclaimer</h1>
            <p className="text-lg text-white/90">Important information about the use of our website and products</p>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fc7hIAMz1EexOCOCibu5D0pzGH5CNz.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">General Information</h2>
                <p className="text-white/90 mb-4">
                  The information provided on this website is for general informational purposes only. While we strive
                  to keep the information up to date and correct, we make no representations or warranties of any kind,
                  express or implied, about the completeness, accuracy, reliability, suitability, or availability with
                  respect to the website or the information, products, services, or related graphics contained on the
                  website for any purpose.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Product Usage</h2>
                <p className="text-white/90 mb-4">
                  All TheSmartChef products should be used in accordance with the provided user manuals and safety
                  instructions. We are not responsible for any damage, injury, or loss resulting from improper use,
                  modification, or failure to follow safety guidelines.
                </p>
                <ul className="list-disc pl-6 text-white/90 space-y-2">
                  <li>Always read the instruction manual before first use</li>
                  <li>Follow all safety warnings and precautions</li>
                  <li>Do not modify or alter the product in any way</li>
                  <li>Keep products away from children unless supervised</li>
                  <li>Unplug appliances when not in use</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Recipe Information</h2>
                <p className="text-white/90 mb-4">
                  Recipes provided on our website are for informational purposes only. Cooking times and results may
                  vary based on your specific appliance model, ingredients used, and environmental factors. We recommend
                  monitoring your food during cooking and adjusting times as needed.
                </p>
                <p className="text-white/90 mb-4">
                  We are not responsible for any allergic reactions or dietary issues that may arise from following our
                  recipes. Please check all ingredients for allergens and consult with a healthcare professional if you
                  have specific dietary concerns.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">External Links</h2>
                <p className="text-white/90 mb-4">
                  Our website may contain links to external websites that are not provided or maintained by us. We do
                  not guarantee the accuracy, relevance, timeliness, or completeness of any information on these
                  external websites.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-white/90 mb-4">
                  In no event will TheSmartChef be liable for any loss or damage including without limitation, indirect
                  or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
                  arising out of, or in connection with, the use of this website or our products.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Professional Advice</h2>
                <p className="text-white/90 mb-4">
                  The information on this website is not intended to replace professional advice. For specific concerns
                  about food safety, nutrition, or appliance maintenance, please consult with qualified professionals.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Disclaimer</h2>
                <p className="text-white/90 mb-4">
                  We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
                  posting to the website. Your continued use of the website following the posting of changes constitutes
                  your acceptance of such changes.
                </p>
              </div>

              <div className="bg-amber-500/20 border-l-4 border-amber-400 p-6 rounded-r-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Important Notice</h3>
                <p className="text-white/90">
                  By using our website and products, you acknowledge that you have read, understood, and agree to be
                  bound by this disclaimer. If you do not agree with any part of this disclaimer, please do not use our
                  website or products.
                </p>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-white/70">Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
