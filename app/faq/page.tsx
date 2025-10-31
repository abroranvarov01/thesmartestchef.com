import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is a multicooker?",
          a: "A multicooker is a versatile kitchen appliance that combines multiple cooking functions in one device. It can pressure cook, slow cook, steam, sauté, make rice, yogurt, and more.",
        },
        {
          q: "How does the MultiChef differ from other multicookers?",
          a: "MultiChef features advanced temperature control, a larger capacity, premium non-stick coating, and 15+ cooking programs. It also includes smart sensors for perfect results every time.",
        },
        {
          q: "Is the MultiChef easy to use for beginners?",
          a: "The MultiChef comes with preset programs, a detailed recipe book, and an intuitive control panel. Most users master it within their first few uses.",
        },
      ],
    },
    {
      category: "Usage & Cooking",
      questions: [
        {
          q: "What can I cook in the MultiChef?",
          a: "You can cook virtually anything: rice, soups, stews, roasts, steamed vegetables, yogurt, desserts, bread, and much more. The possibilities are endless!",
        },
        {
          q: "How long does it take to cook meals?",
          a: "Cooking times vary by recipe. Pressure cooking can reduce cooking time by up to 70%. For example, rice takes 12 minutes, chicken stew takes 25 minutes, and beans take 30 minutes.",
        },
        {
          q: "Can I use the MultiChef for meal prep?",
          a: "Yes! The MultiChef is perfect for meal prep. You can cook large batches and use the keep-warm function for up to 24 hours.",
        },
        {
          q: "Is it safe to leave the MultiChef unattended?",
          a: "Yes, the MultiChef has multiple safety features including automatic pressure release, overheat protection, and a locking lid. However, we recommend staying nearby during the first few uses.",
        },
      ],
    },
    {
      category: "Maintenance & Care",
      questions: [
        {
          q: "How do I clean the MultiChef?",
          a: "The inner pot, lid, and accessories are dishwasher safe. The exterior can be wiped with a damp cloth. Always ensure the pressure valve is clean and clear.",
        },
        {
          q: "How often should I replace the sealing ring?",
          a: "We recommend replacing the sealing ring every 12-18 months or if you notice any cracks or odors. Replacement rings are available on our website.",
        },
        {
          q: "Can I use metal utensils in the pot?",
          a: "We recommend using silicone, wood, or plastic utensils to protect the non-stick coating. Metal utensils may scratch the surface over time.",
        },
      ],
    },
    {
      category: "Warranty & Support",
      questions: [
        {
          q: "What warranty does the MultiChef come with?",
          a: "All MultiChef products come with a 2-year manufacturer's warranty covering defects in materials and workmanship. Extended warranties are available for purchase.",
        },
        {
          q: "What if my MultiChef stops working?",
          a: "Contact our customer support team immediately. If it's within warranty, we'll repair or replace it free of charge. We also offer troubleshooting guides on our website.",
        },
        {
          q: "Where can I buy replacement parts?",
          a: "Replacement parts are available on our website, including inner pots, sealing rings, steam racks, and more. Most parts ship within 24 hours.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aoxMCWCQZnOhRVGpZxHXl7vBWFVAy4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about MultiChef products
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9ZijeNCp56BZwBwBWy732irzCM7qlC.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group bg-card rounded-lg border border-border overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition">
                      <h3 className="text-lg font-semibold pr-8">{faq.q}</h3>
                      <ChevronDown className="flex-shrink-0 text-muted-foreground group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BViZw7FzsMLgX6vOQ5JDEYSW0Juc9w.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h2>
          <p className="text-lg mb-8 text-white/90">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white rounded-lg hover:bg-gray-900 transition bg-black font-extrabold cursor-pointer"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
