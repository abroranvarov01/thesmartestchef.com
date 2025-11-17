import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { VideoReviews } from "@/components/video-reviews"
import { RecipeShowcase } from "@/components/recipe-showcase"
import { ArticlesShowcase } from "@/components/articles-showcase"
import { ProductsShowcaseHome } from "@/components/products-showcase-home"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VideoReviews />
      <ProductsShowcaseHome />
      <ArticlesShowcase />
      <RecipeShowcase />
      <CTA />
      <Footer />
    </main>
  )
}
