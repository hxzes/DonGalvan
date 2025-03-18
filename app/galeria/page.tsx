"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

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
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e7dc65a3-71ab-4a33-99ab-424d2efa85e3.jpg-zvCyuAcTagdLRq2xevu3PkL15MCRnU.jpeg",
    alt: "Šéfkuchár pripravujúci špeciálne jedlá pre event",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/73e81ba7-6bcb-4d34-9988-ce724b2bf02a.jpg-VDHlGgDdDgCONCJjxcc2Ah5YXuQtCt.jpeg",
    alt: "Večerná párty s priateľmi v Don Galvan",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84013a3a-016d-4044-bca0-dff75c3ba148.jpg-NbA52yGp9U8av3Z0W2VQSKGYZdGN6b.jpeg",
    alt: "DJ set počas letnej párty",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d19f014-368c-44c1-a4a2-a3bc59b21cd1.jpg-z2bkLa8eu9dKomNo81u2SQ8w8FSviP.jpeg",
    alt: "Posedenie na letnej terase počas špeciálnej udalosti",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acc3b144-a722-4642-bfa8-15312ec877fb.jpg-O8Lgh5rW9PEQ56yaiGjWwc2eTqZUym.jpeg",
    alt: "Tanečné vystúpenie počas večerného programu",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b38424fc-cdad-4bed-99ca-7c80c65b8de0.jpg-BHYWgz7m9aM4dN3HRux5U89a3ZjfPf.jpeg",
    alt: "DJ pult s výhľadom na terasu počas večernej akcie",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0c289377-a816-4b62-afb7-1bc183b0aeab.jpg-iLDSfufydXCKioMVcKQLQvzZZQ2ADv.jpeg",
    alt: "Večerné posedenie pod drevenou pergolou s osvetlením",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e68ec70a-1105-480c-a815-49187741c62c.jpg-9vEQD1qptkPsj0N6Hv5ymqsncVItdN.jpeg",
    alt: "Bohémska dekorácia na letnej terase",
    category: "events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fabcad8a-a458-457b-95bf-7a42a0ba66d3.jpg-Zgzbhh4LALY3IzcwELXnrq6X7ur2KT.jpeg",
    alt: "Večerná atmosféra s priateľmi pri spoločnom stole",
    category: "events",
  },
]

export default function GalleryPage() {
  const eventsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize animations on scroll
    const handleScroll = () => {
      const galleryItems = document.querySelectorAll(".gallery-item")

      galleryItems.forEach((item, index) => {
        const element = item as HTMLElement
        const rect = element.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.85) {
          element.classList.add("in-view")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen py-16 pt-32">
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">GALÉRIA</h1>
        <p className="text-lg text-center mb-16 text-muted-foreground max-w-2xl mx-auto">
          Pozrite si vizuálnu cestu našou reštauráciou, našimi jedlami a špeciálnymi momentmi, ktoré sme vytvorili
        </p>

        {/* Gallery Categories */}
        <div className="mb-16" ref={eventsRef}>
          <motion.h2
            className="text-2xl font-semibold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GALÉRIA
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages
              .filter((img) => img.category === "events")
              .map((image, index) => (
                <div
                  key={index}
                  className={`gallery-item stagger-item relative h-64 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

