import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Gallery | Don Galvan Restaurant",
  description:
    "View our gallery of delicious dishes, restaurant interior, and special events at Don Galvan in Šaľa, Slovakia.",
}

type GalleryImage = {
  src: string
  alt: string
  category: "food" | "interior" | "events"
}

const galleryImages: GalleryImage[] = [
  // Food images
  { src: "/placeholder.svg?height=600&width=800", alt: "Signature steak dish", category: "food" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Fresh seafood platter", category: "food" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Traditional Slovak dumplings", category: "food" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Gourmet dessert selection", category: "food" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Seasonal salad", category: "food" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Chef's special pasta", category: "food" },

  // Interior images
  { src: "/placeholder.svg?height=600&width=800", alt: "Main dining area", category: "interior" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Private dining room", category: "interior" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Bar area", category: "interior" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Outdoor terrace", category: "interior" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Restaurant entrance", category: "interior" },

  // Events images
  { src: "/placeholder.svg?height=600&width=800", alt: "Wedding reception", category: "events" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Corporate dinner", category: "events" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Wine tasting event", category: "events" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Chef's table experience", category: "events" },
]

export default function GalleryPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-4">Gallery</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Take a visual journey through our restaurant, our dishes, and the special moments we've created.
        </p>

        {/* Gallery Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">Our Cuisine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages
              .filter((img) => img.category === "food")
              .map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">Our Space</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages
              .filter((img) => img.category === "interior")
              .map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">Special Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages
              .filter((img) => img.category === "events")
              .map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

