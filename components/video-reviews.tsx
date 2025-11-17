"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

export function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

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
      chef: "Chef Aishwarya",
      thumbnail: "/aromatic-chicken-curry-in-multicooker.jpg",
      duration: "10:30",
      videoUrl: "https://youtu.be/196O0LPFCec",
    },
  ]

  const getEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop()
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
  }

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
          backgroundAttachment: "fixed",
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
            <div key={review.id} className="group cursor-pointer" onClick={() => setSelectedVideo(review.videoUrl)}>
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
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <iframe
              src={getEmbedUrl(selectedVideo)}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
