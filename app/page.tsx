"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"

export default function Home() {
  const controls = useAnimation()
  const heroRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Animate sections as they come into view
      ;[welcomeRef, menuRef, testimonialsRef].forEach((ref) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          ref.current.classList.add("animate-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    // Start hero animation
    controls.start({ opacity: 1, y: 0, scale: 1 })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  const isDark = theme === "dark"
  const logoSrc = isDark
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20biele-Xbg22QvOETXNTBZzyn9LkLlr4c0tav.png"
    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/343761348_561299316147763_2573134807779043085_n-removebg-preview-kJTrprCVnV0s6ttrFPkCFnSKqTbgVn.png"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - With animation */}
      <motion.section
        ref={heroRef}
        className="relative h-[90vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20sekcia.jpg-OPAwQdTsVj2qx7otwjBqc7vhzaK6Ds.jpeg"
            alt="Don Galvan Restaurant - Grilované kura s granátovým jablkom"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center text-white p-10 max-w-2xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -m-6 rounded-lg"></div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-serif relative text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Don Galvan
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl relative text-shadow mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Exkluzívna reštaurácia v srdci Šale
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 h-auto transition-all duration-300 hover:scale-105 relative"
              >
                <Link href="/menu">ZOBRAZIŤ MENU</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Welcome Section */}
      <section
        ref={welcomeRef}
        className="py-24 bg-background opacity-0 translate-y-10 scale-95 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Vitajte v Don Galvan</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Reštaurácia Don Galvan je miestom, kde sa tradičná slovenská kuchyňa stretáva s modernými kulinárskymi
                trendmi. Naši šéfkuchári pripravujú jedlá z najkvalitnejších lokálnych surovín, aby vám priniesli
                nezabudnuteľný gastronomický zážitok.
              </p>
              <p className="text-lg mb-10 leading-relaxed">
                Či už hľadáte miesto na romantickú večeru, rodinné stretnutie alebo obchodný obed, naša reštaurácia vám
                poskytne dokonalé prostredie s príjemnou atmosférou a prvotriednym servisom.
              </p>
              <Button
                asChild
                variant="outline"
                className="group border-black hover:bg-black hover:text-white text-base px-6 py-6 h-auto transition-all duration-300 hover:scale-105"
              >
                <Link href="/o-nas" className="flex items-center">
                  Spoznajte nás bližšie
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="Don Galvan Restaurant Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu - With animations */}
      <section ref={menuRef} className="py-24 bg-muted opacity-0 translate-y-10 scale-95 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center font-serif">Naše špeciality</h2>
          <p className="text-lg text-center mb-16 text-muted-foreground dark:text-gray-300 max-w-xl mx-auto">
            Objavte výber z našich najobľúbenejších jedál
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={index}
                className="group transform transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative h-80 w-full overflow-hidden mb-6">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-1">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-3">{dish.description}</p>
                <p className="font-bold">{dish.price} €</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 text-base px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
            >
              <Link href="/menu">Zobraziť celé menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - With animations */}
      <section
        ref={testimonialsRef}
        className="py-24 bg-background opacity-0 translate-y-10 scale-95 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center font-serif">Čo hovoria naši hostia</h2>
          <p className="text-lg text-center mb-16 text-muted-foreground dark:text-gray-300 max-w-xl mx-auto">
            Prečítajte si recenzie od našich spokojných zákazníkov
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black p-8 border border-border transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-black dark:text-white fill-current" : "text-muted"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 transition-transform duration-300 hover:scale-110">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const featuredDishes = [
  {
    name: "Argentína",
    description: "Šťavnatý hovädzí rump steak z kvetovej špičky s omáčkou podľa výberu a prílohou v cene",
    price: 18.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/argentina.JPG-8orPoHzklejzjnsyuD10ceJgKrekip.jpeg",
  },
  {
    name: "Rebierka",
    description: "Bravčové marinované vysoké rebierka, smažená cibuľka, chimmichuri, pečivo",
    price: 14.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vysoke%20rebierka.JPG-tcWZKY1aFAracZmYNZfi37sO5fxWJW.jpeg",
  },
  {
    name: "Pizza Trhanec",
    description: "Pomodoro, mozzarella, pomaly pečené trhané bravčové, cibuľa, slanina, BBQ omáčka, cesnakový okraj",
    price: 10.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trhanec.JPG-4p3i1FAtk2jGMJwsjvvjfkfwgS62HK.jpeg",
  },
]

const testimonials = [
  {
    name: "Mária Kováčová",
    text: "Jedlo bolo vynikajúce a obsluha veľmi príjemná. Určite sa sem ešte vrátime!",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Peter Novák",
    text: "Najlepšia reštaurácia v Šali. Kačacie stehno bolo dokonalé a atmosféra veľmi príjemná.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jana Horváthová",
    text: "Výborné jedlo, príjemný personál a krásne prostredie. Odporúčam každému, kto hľadá kvalitný kulinársky zážitok.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

