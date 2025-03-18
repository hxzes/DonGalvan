"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"

export default function AboutPage() {
  const controls = useAnimation()
  const storyRef = useRef<HTMLDivElement>(null)
  const philosophyRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      ;[storyRef, philosophyRef, teamRef].forEach((ref) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          ref.current.classList.add("animate-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    setTimeout(handleScroll, 100)

    // Start animations
    controls.start({ opacity: 1, y: 0 })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  const isDark = theme === "dark"
  const logoSrc = isDark
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20biele-Xbg22QvOETXNTBZzyn9LkLlr4c0tav.png"
    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/343761348_561299316147763_2573134807779043085_n-removebg-preview-kJTrprCVnV0s6ttrFPkCFnSKqTbgVn.png"

  return (
    <main className="pt-32 pb-16 px-4 md:px-8 bg-background">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">O NÁS</h1>
        <p className="text-center text-muted-foreground dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Spoznajte náš príbeh, našu vášeň pre jedlo a tím, ktorý stojí za reštauráciou Don Galvan.
        </p>

        {/* Our Story */}
        <section ref={storyRef} className="mb-24 opacity-0 translate-y-10 scale-95 transition-all duration-1000">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-80 w-full md:h-96 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src={logoSrc || "/placeholder.svg"} alt="Don Galvan Logo" fill className="object-contain" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">História Don Galvan</h2>
              <p className="text-muted-foreground dark:text-gray-300 mb-4">
                Reštauráciu Don Galvan v pôvodnom znení založila Ivana Luxová 16.7. v roku 2004. Bola značkou výborného
                gastra a známkou poskytovania kvalitných služieb. Žiaľ, jej neuveriteľná sila nezvládla posledný boj so
                zákernou chorobou a v roku 2023, naveky odišla.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Reštaurácia prešla kompletnými zmenami od personálu, rekonštrukcie priestorov až po vedúci manažment,
                aby opäť nadobudla povesť unikátnej reštaurácie kde spájame chuť skvelého jedla s kvalitnými službami s
                dôrazom na osobitný prístup k Vašim požiadavkám.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section ref={philosophyRef} className="mb-24 opacity-0 translate-y-10 scale-95 transition-all duration-1000">
          <h2 className="text-3xl font-semibold text-center mb-12">Naša kulinárska filozofia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lokálne suroviny",
                description:
                  "Používame tie najčerstvejšie suroviny od miestnych farmárov a výrobcov, čím podporujeme našu komunitu a zároveň zabezpečujeme najvyššiu kvalitu.",
              },
              {
                title: "Tradičné techniky",
                description:
                  "Ctíme si tradičné kuchárske metódy, ktoré prešli skúškou času, a prinášame autentické chute do každého jedla, ktoré podávame.",
              },
              {
                title: "Kreatívna inovácia",
                description:
                  "Rešpektujeme tradíciu, ale zároveň prijímame inovácie, vytvárame jedinečné kulinárske zážitky, ktoré prekvapujú a potešia našich hostí.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-card shadow-md"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section ref={teamRef} className="mb-24 opacity-0 translate-y-10 scale-95 transition-all duration-1000">
          <h2 className="text-3xl font-semibold text-center mb-12">Spoznajte náš tím</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ea27fc5-40fe-4005-a9c3-2253c9baf48c.jpg-6CAJDrt6EVKHVKpoJ9stA6P6OLdFSX.jpeg",
                description:
                  "Naši šéfkuchári prinášajú do každého jedla svoju vášeň a kreativitu. S rokmi skúseností a neustálym zdokonaľovaním svojich zručností vytvárajú kulinárske zážitky, ktoré zanechávajú nezabudnuteľný dojem.",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cc76e6a4-1688-47c8-95aa-99a92a7c521f.jpg-MIV2sNcPBFEVj55C6n1xckCAETWT3h.jpeg",
                description:
                  "Náš tím je ako jedna veľká rodina. Spoločne sa snažíme vytvárať príjemnú atmosféru a poskytovať našim hosťom ten najlepší zážitok. Každý člen prináša svoje jedinečné schopnosti a spolu tvoríme harmóniu, ktorá sa odráža v kvalite našich služieb.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Tím Don Galvan"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  )
}

