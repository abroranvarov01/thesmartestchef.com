"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

export function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const reviews = [
    {
      id: 1,
      title: "Perfect Risotto in 15 Minutes",
      chef: "Chef Maria",
      thumbnail: "/creamy-risotto-in-multicooker.jpg",
      duration: "8:42",
      videoUrl: "https://youtu.be/TxY6fta2g_c",
    },
    {
      id: 2,
      title: "Tender Beef Stew Recipe",
      chef: "Chef Fred",
      thumbnail: "/beef-stew-cooking-in-multicooker.jpg",
      duration: "12:15",
      videoUrl: "https://youtu.be/it_G4K9QkN0",
    },
    {
      id: 3,
      title: "Quick Chicken Curry",
      chef: "Chef Aishwarya", // Changed from "Chef Sarah" to "Chef Aishwarya"
      thumbnail: "/aromatic-chicken-curry-in-multicooker.jpg",
      duration: "10:30",
      videoUrl: "https://youtu.be/196O0LPFCec",
    },
  ]

  return (
    <section id="reviews" className="relative py-20 md:py-32 overflow-hidden">
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
          backgroundAttachment: "fixed", // Added fixed attachment to align with base background
          opacity: 0.85,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">Video Reviews & Recipes</h2>
          <p className="text-lg text-balance text-white">Learn from expert chefs how to master quick cooking</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="group cursor-pointer" onClick={() => setSelectedVideo(review.id)}>
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={review.thumbnail || "/placeholder.svg"}
                  alt={review.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition bg-destructive">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {review.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition text-sky-100">
                {review.title}
              </h3>
              <p className="text-white">by {review.chef}</p>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-background rounded-xl overflow-hidden max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={reviews.find((r) => r.id === selectedVideo)?.videoUrl}
                  title={reviews.find((r) => r.id === selectedVideo)?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reviews.find((r) => r.id === selectedVideo)?.title}
                </h3>
                <p className="text-muted-foreground">by {reviews.find((r) => r.id === selectedVideo)?.chef}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
