import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { VideoReviews } from "@/components/video-reviews"
import { RecipeShowcase } from "@/components/recipe-showcase"
import { ProductsShowcase } from "@/components/products-showcase"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VideoReviews />
      <ProductsShowcase />
      <RecipeShowcase />
      <CTA />
      <Footer />
    </main>
  )
}
