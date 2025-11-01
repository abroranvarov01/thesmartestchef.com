"use client"
import { ChefHat, Users, Award, Heart } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/round-wood-ingredients-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About TheSmartChefs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Revolutionizing home cooking with innovative multicooker technology
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/round-wood-ingredients-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
                <p className="text-lg text-white/90 mb-4">
                  Founded in 2020, TheSmartChefs was born from a simple idea: cooking delicious, healthy meals
                  shouldn&#39;t be complicated or time-consuming.
                </p>
                <p className="text-lg text-white/90 mb-4">
                  Our team of engineers and culinary experts came together to create the perfect multicooker that
                  combines cutting-edge technology with intuitive design.
                </p>
                <p className="text-lg text-white/90">
                  Today, TheSmartChefs products are trusted by millions of families worldwide, helping them create
                  memorable meals with ease.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('/modern-kitchen-with-multicooker.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/round-wood-ingredients-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Quality</h3>
                <p className="text-white/90">
                  We never compromise on the quality of our products and customer service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Community</h3>
                <p className="text-white/90">Building a community of passionate home cooks who inspire each other.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
                <p className="text-white/90">Constantly improving and innovating to meet our customers' needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Passion</h3>
                <p className="text-white/90">We love what we do and it shows in every product we create.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/round-wood-ingredients-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Veronika Mendez",
                  role: "CEO & Founder",
                  image: "/professional-businesswoman-ceo-portrait-headshot.jpg",
                },
                {
                  name: "Roy Cherian",
                  role: "Chief Technology Officer",
                  image: "/professional-businessman-cto-portrait-headshot.jpg",
                },
                {
                  name: "Briggita Keen",
                  role: "Head of Culinary Innovation",
                  image: "/professional-female-chef-portrait-headshot.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-white/90">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
