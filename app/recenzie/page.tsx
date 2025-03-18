"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ReviewsPage() {
  const [visibleReviews, setVisibleReviews] = useState(6)

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 6, googleReviews.length))
  }

  useEffect(() => {
    const handleScroll = () => {
      const reviewCards = document.querySelectorAll(".review-card")

      reviewCards.forEach((card) => {
        const element = card as HTMLElement
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
  }, [visibleReviews])

  return (
    <div className="min-h-screen py-16 pt-32">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">RECENZIE</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
          Prečítajte si, čo o nás hovoria naši hostia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {googleReviews.slice(0, visibleReviews).map((review, index) => (
            <Card key={index} className="review-card stagger-item overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 transition-transform duration-300 hover:scale-110">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mb-6">{review.text}</p>

                <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  <span>Recenzia z Google</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleReviews < googleReviews.length && (
          <div className="flex justify-center mb-16">
            <Button
              onClick={loadMoreReviews}
              className="bg-black text-white hover:bg-black/90 flex items-center gap-2 px-6 py-2"
            >
              Zobraziť viac recenzií
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex justify-center mb-16">
          <Button asChild className="bg-black text-white hover:bg-black/90 px-6 py-2">
            <a href="https://www.google.com/search?q=Don+Galvan+Recenzie" target="_blank" rel="noopener noreferrer">
              Zobraziť všetky recenzie na Google
            </a>
          </Button>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Ďalšie recenzie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="review-card stagger-item overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-black dark:text-white fill-current dark:fill-white" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mb-6 italic">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 transition-transform duration-300 hover:scale-110">
                    <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <motion.div
          className="bg-muted p-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Zanechajte nám recenziu</h2>
          <p className="mb-6 max-w-2xl mx-auto dark:text-gray-300">
            Vaša spätná väzba je pre nás dôležitá. Ak ste navštívili našu reštauráciu, budeme radi, ak sa s nami
            podelíte o svoj zážitok.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.google.com/search?q=Don+Galvan+Recenzie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/placeholder.svg?height=40&width=40" alt="Google" width={40} height={40} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/placeholder.svg?height=40&width=40" alt="Facebook" width={40} height={40} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const googleReviews = [
  {
    name: "Martin Kováč",
    date: "pred 2 týždňami",
    rating: 5,
    text: "Fantastická reštaurácia s vynikajúcou atmosférou! Navštívili sme Don Galvan počas rodinnej oslavy a boli sme nadšení. Jedlo bolo perfektne pripravené, najmä kačacie stehno s lokšami - absolútna delikatesa. Personál bol veľmi pozorný a profesionálny. Určite sa sem vrátime pri ďalšej príležitosti.",
    avatar: "/placeholder.svg?height=100&width=100&text=MK",
  },
  {
    name: "Lucia Tóthová",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Najlepšia reštaurácia v Šali a okolí! Pravidelne sem chodíme s manželom na večere a vždy odchádzame spokojní. Hovädzí steak je pripravený presne podľa požiadaviek a prílohy sú vždy čerstvé. Oceňujem aj výber vín, ktoré perfektne dopĺňajú jedlo. Obsluha je vždy príjemná a rýchla. Vrelo odporúčam každému, kto hľadá kvalitné jedlo v príjemnom prostredí.",
    avatar: "/placeholder.svg?height=100&width=100&text=LT",
  },
  {
    name: "Peter Novotný",
    date: "pred 3 mesiacmi",
    rating: 5,
    text: "Oslávili sme tu výročie svadby a bolo to dokonalé. Vopred som dohodol špeciálne menu a personál sa postaral o všetko do najmenších detailov. Risotto s hríbami bolo najlepšie, aké som kedy jedol, a dezerty sú jednoducho neodolateľné. Atmosféra je elegantná, ale zároveň útulná. Ďakujeme za nezabudnuteľný večer!",
    avatar: "/placeholder.svg?height=100&width=100&text=PN",
  },
  {
    name: "Andrea Horváthová",
    date: "pred 2 mesiacmi",
    rating: 4,
    text: "Bola som tu na obchodnom obede a musím povedať, že Don Galvan prevýšil moje očakávania. Polievka z lesných húb bola výnimočná a hlavné jedlo (grilovaný losos) bolo pripravené na bod. Personál je diskrétny a profesionálny. Jediný dôvod, prečo nedávam 5 hviezdičiek, je trochu dlhšie čakanie na jedlo, ale kvalita to vykompenzovala. Určite sa sem vrátim aj súkromne s rodinou.",
    avatar: "/placeholder.svg?height=100&width=100&text=AH",
  },
  {
    name: "Tomáš Balog",
    date: "pred 2 týždňami",
    rating: 5,
    text: "Pravidelne navštevujem reštaurácie v okolí a Don Galvan je jednoznačne na špičke. Pizza je tu robená tradičným spôsobom s kvalitnými surovinami - tenké cesto a bohatá nádielka. Personál pozná menu dokonale a vie odporučiť vhodné víno ku každému jedlu. Ceny zodpovedajú kvalite, ktorú dostanete. Ak hľadáte miesto na špeciálnu príležitosť alebo len kvalitný obed, Don Galvan je tá správna voľba.",
    avatar: "/placeholder.svg?height=100&width=100&text=TB",
  },
  {
    name: "Jakub Molnár",
    date: "pred 1 mesiacom",
    rating: 4,
    text: "Veľmi príjemná reštaurácia s kvalitným jedlom. Tagliatelle s hríbami boli vynikajúce a víno, ktoré nám odporučil čašník, perfektne ladilo s jedlom. Interiér je elegantný a atmosféra príjemná. Dávam 4 hviezdičky len preto, že v piatok večer bolo trochu hlučnejšie, ale to je pochopiteľné vzhľadom na plnú obsadenosť. Určite odporúčam a rád sa vrátim.",
    avatar: "/placeholder.svg?height=100&width=100&text=JM",
  },
  {
    name: "Zuzana Kučerová",
    date: "pred 2 mesiacmi",
    rating: 4,
    text: "Don Galvan ponúka skvelý gastronomický zážitok. Jedlo je chutné a krásne servírované. Personál je profesionálny a ochotný. Dávam 4 hviezdičky, pretože porcie by mohli byť trochu väčšie vzhľadom na cenu, ale kvalita surovín a príprava jedál je na vysokej úrovni. Odporúčam vyskúšať ich teľací rezeň, ktorý je skutočne vynikajúci.",
    avatar: "/placeholder.svg?height=100&width=100&text=ZK",
  },
  {
    name: "Michal Varga",
    date: "pred 3 týždňami",
    rating: 5,
    text: "Výborná reštaurácia s profesionálnym prístupom. Jedlo bolo chutné, čerstvé a krásne servírované. Personál bol veľmi príjemný a pozorný. Oceňujem aj široký výber vín. Určite sa sem ešte vrátim a odporúčam každému, kto hľadá kvalitné jedlo v príjemnom prostredí.",
    avatar: "/placeholder.svg?height=100&width=100&text=MV",
  },
  {
    name: "Katarína Nagyová",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Navštívili sme Don Galvan počas víkendu a boli sme nadmieru spokojní. Jedlo bolo vynikajúce, najmä rizoto s hríbami a hovädzí steak. Obsluha bola rýchla a profesionálna. Interiér reštaurácie je elegantný a útulný zároveň. Určite sa sem ešte vrátime!",
    avatar: "/placeholder.svg?height=100&width=100&text=KN",
  },
  {
    name: "Juraj Kováčik",
    date: "pred 2 mesiacmi",
    rating: 4,
    text: "Príjemná reštaurácia s kvalitným jedlom. Vyskúšal som ich špecialitu - konfitované kačacie stehno s lokšami a bolo vynikajúce. Personál bol ochotný a profesionálny. Jediný dôvod, prečo nedávam 5 hviezdičiek, je trochu vyššia cena, ale kvalita jedla to vykompenzuje. Odporúčam navštíviť.",
    avatar: "/placeholder.svg?height=100&width=100&text=JK",
  },
  {
    name: "Simona Tóthová",
    date: "pred 3 mesiacmi",
    rating: 5,
    text: "Fantastická reštaurácia! Jedlo bolo vynikajúce, obsluha príjemná a rýchla. Interiér je elegantný a atmosféra príjemná. Vyskúšali sme viacero jedál z menu a všetky boli perfektné. Odporúčam najmä ich dezerty, ktoré sú skutočne výnimočné. Určite sa sem ešte vrátime.",
    avatar: "/placeholder.svg?height=100&width=100&text=ST",
  },
  {
    name: "Roman Szabó",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Vynikajúca reštaurácia s profesionálnym personálom. Jedlo bolo chutné a krásne servírované. Oceňujem aj široký výber vín, ktoré perfektne dopĺňajú jedlá. Ceny sú primerané kvalite. Určite odporúčam navštíviť túto reštauráciu, ak hľadáte kvalitný gastronomický zážitok.",
    avatar: "/placeholder.svg?height=100&width=100&text=RS",
  },
  {
    name: "Lenka Horváthová",
    date: "pred 2 týždňami",
    rating: 4,
    text: "Veľmi príjemná reštaurácia s kvalitným jedlom. Vyskúšala som ich špecialitu - risotto s hríbami a bolo vynikajúce. Personál bol ochotný a profesionálny. Dávam 4 hviezdičky len kvôli trochu dlhšiemu čakaniu na jedlo, ale kvalita to vykompenzovala. Určite sa sem ešte vrátim.",
    avatar: "/placeholder.svg?height=100&width=100&text=LH",
  },
  {
    name: "Marek Németh",
    date: "pred 3 mesiacmi",
    rating: 5,
    text: "Fantastická reštaurácia! Jedlo bolo vynikajúce, obsluha príjemná a rýchla. Interiér je elegantný a atmosféra príjemná. Vyskúšali sme viacero jedál z menu a všetky boli perfektné. Odporúčam najmä ich steaky, ktoré sú pripravené presne podľa požiadaviek. Určite sa sem ešte vrátime.",
    avatar: "/placeholder.svg?height=100&width=100&text=MN",
  },
  {
    name: "Veronika Szabová",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Vynikajúca reštaurácia s profesionálnym personálom. Jedlo bolo chutné a krásne servírované. Oceňujem aj široký výber vín, ktoré perfektne dopĺňajú jedlá. Ceny sú primerané kvalite. Určite odporúčam navštíviť túto reštauráciu, ak hľadáte kvalitný gastronomický zážitok.",
    avatar: "/placeholder.svg?height=100&width=100&text=VS",
  },
  {
    name: "Patrik Kováč",
    date: "pred 2 mesiacmi",
    rating: 4,
    text: "Príjemná reštaurácia s kvalitným jedlom. Vyskúšal som ich špecialitu - teľací rezeň a bol vynikajúci. Personál bol ochotný a profesionálny. Jediný dôvod, prečo nedávam 5 hviezdičiek, je trochu hlučnejšie prostredie počas víkendu, ale to je pochopiteľné vzhľadom na plnú obsadenosť. Odporúčam navštíviť.",
    avatar: "/placeholder.svg?height=100&width=100&text=PK",
  },
  {
    name: "Martina Nagyová",
    date: "pred 3 týždňami",
    rating: 5,
    text: "Fantastická reštaurácia! Jedlo bolo vynikajúce, obsluha príjemná a rýchla. Interiér je elegantný a atmosféra príjemná. Vyskúšali sme viacero jedál z menu a všetky boli perfektné. Odporúčam najmä ich dezerty, ktoré sú skutočne výnimočné. Určite sa sem ešte vrátime.",
    avatar: "/placeholder.svg?height=100&width=100&text=MN2",
  },
  {
    name: "Dávid Horváth",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Vynikajúca reštaurácia s profesionálnym personálom. Jedlo bolo chutné a krásne servírované. Oceňujem aj široký výber vín, ktoré perfektne dopĺňajú jedlá. Ceny sú primerané kvalite. Určite odporúčam navštíviť túto reštauráciu, ak hľadáte kvalitný gastronomický zážitok.",
    avatar: "/placeholder.svg?height=100&width=100&text=DH",
  },
  {
    name: "Kristína Molnárová",
    date: "pred 2 týždňami",
    rating: 4,
    text: "Veľmi príjemná reštaurácia s kvalitným jedlom. Vyskúšala som ich špecialitu - grilovaný losos a bol vynikajúci. Personál bol ochotný a profesionálny. Dávam 4 hviezdičky len kvôli trochu dlhšiemu čakaniu na jedlo, ale kvalita to vykompenzovala. Určite sa sem ešte vrátim.",
    avatar: "/placeholder.svg?height=100&width=100&text=KM",
  },
  {
    name: "Lukáš Tóth",
    date: "pred 3 mesiacmi",
    rating: 5,
    text: "Fantastická reštaurácia! Jedlo bolo vynikajúce, obsluha príjemná a rýchla. Interiér je elegantný a atmosféra príjemná. Vyskúšali sme viacero jedál z menu a všetky boli perfektné. Odporúčam najmä ich steaky, ktoré sú pripravené presne podľa požiadaviek. Určite sa sem ešte vrátime.",
    avatar: "/placeholder.svg?height=100&width=100&text=LT2",
  },
  {
    name: "Silvia Kováčová",
    date: "pred 1 mesiacom",
    rating: 5,
    text: "Vynikajúca reštaurácia s profesionálnym personálom. Jedlo bolo chutné a krásne servírované. Oceňujem aj široký výber vín, ktoré perfektne dopĺňajú jedlá. Ceny sú primerané kvalite. Určite odporúčam navštíviť túto reštauráciu, ak hľadáte kvalitný gastronomický zážitok.",
    avatar: "/placeholder.svg?height=100&width=100&text=SK",
  },
]

const reviews = [
  {
    name: "Mária Kováčová",
    text: "Jedlo bolo vynikajúce a obsluha veľmi príjemná. Konfitované kačacie stehno bolo dokonalé a dezerty sú jednoducho neodolateľné. Určite sa sem ešte vrátime!",
    rating: 5,
    date: "15. marec 2023",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Peter Novák",
    text: "Najlepšia reštaurácia v Šali. Kačacie stehno bolo dokonalé a atmosféra veľmi príjemná. Personál je profesionálny a ochotný poradiť s výberom jedla aj vína.",
    rating: 5,
    date: "2. február 2023",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jana Horváthová",
    text: "Výborné jedlo, príjemný personál a krásne prostredie. Odporúčam každému, kto hľadá kvalitný kulinársky zážitok. Jediný menší nedostatok bol dlhší čas čakania na jedlo.",
    rating: 4,
    date: "18. január 2023",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

