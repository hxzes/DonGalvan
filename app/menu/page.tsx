"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

// Menu Item Component
function MenuItem({ item, index }) {
  return (
    <div
      className="menu-item flex flex-col md:flex-row gap-6 opacity-0 transform translate-y-10 scale-95 transition-all duration-700"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {item.image && (
        <div className="md:w-1/3 relative h-48 overflow-hidden group">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className={`${item.image ? "md:w-2/3" : "w-full"} flex flex-col justify-between`}>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium mb-1">{item.name}</h3>
              {item.weight && <span className="text-sm text-muted-foreground">{item.weight}</span>}
            </div>
            <span className="font-bold text-lg whitespace-nowrap">{item.price.toFixed(2)} €</span>
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {item.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <p className="text-muted-foreground dark:text-gray-300 mb-2">{item.description}</p>

          {item.allergens && item.allergens.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen, i) => (
                <span
                  key={i}
                  className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center"
                >
                  {allergen}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Drink Item Component
function DrinkItem({ item, index }) {
  return (
    <div
      className="menu-item opacity-0 transform translate-y-10 scale-95 transition-all duration-700"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-medium">{item.name}</h3>
          {item.volume && <span className="text-sm text-muted-foreground">{item.volume}</span>}
          {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
          {item.note && <p className="text-xs text-muted-foreground italic mt-1">{item.note}</p>}
        </div>
        <span className="font-bold whitespace-nowrap">
          {typeof item.price === "number" ? `${item.price.toFixed(2)} €` : item.price}
        </span>
      </div>
    </div>
  )
}

export default function MenuPage() {
  // Reference for scroll animations
  const menuRef = useRef(null)

  useEffect(() => {
    // Initialize animations on scroll
    const handleScroll = () => {
      const menuItems = document.querySelectorAll(".menu-item")

      menuItems.forEach((item) => {
        const element = item
        const rect = element.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.85) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0) scale(1)"
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dummy data for menu items
  const pastas = [
    { name: "Aglio e Olio", description: "Pasta with garlic and olive oil.", price: 9.9, allergens: ["1"] },
    {
      name: "Carbonara",
      description: "Pasta with eggs, cheese, pancetta, and black pepper.",
      price: 12.5,
      allergens: ["1", "3", "7"],
    },
  ]

  const pizzas = [
    { name: "Margherita", description: "Tomato sauce, mozzarella, and basil.", price: 11.0, allergens: ["1", "7"] },
    { name: "Pepperoni", description: "Tomato sauce, mozzarella, and pepperoni.", price: 13.5, allergens: ["1", "7"] },
  ]

  const mainCourses = [
    { name: "Steak", description: "Grilled steak with vegetables.", price: 25.0 },
    { name: "Salmon", description: "Baked salmon with potatoes.", price: 22.0 },
  ]

  const specialties = [
    { name: "Special Dish 1", description: "A unique dish.", price: 28.0 },
    { name: "Special Dish 2", description: "Another special dish.", price: 30.0 },
  ]

  const snacks = [
    { name: "Olives", description: "A selection of olives.", price: 5.0 },
    { name: "Nuts", description: "Mixed nuts.", price: 6.0 },
  ]

  const soups = [
    { name: "Tomato Soup", description: "Classic tomato soup.", price: 6.5 },
    { name: "Chicken Soup", description: "Homemade chicken soup.", price: 7.0 },
  ]

  const salads = [
    {
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
      price: 10.0,
      allergens: ["1", "3", "4", "7"],
    },
    {
      name: "Greek Salad",
      description: "Tomatoes, cucumbers, onions, olives, and feta cheese.",
      price: 9.5,
      allergens: ["7"],
    },
  ]

  const desserts = [
    { name: "Tiramisu", description: "Coffee-flavored Italian dessert.", price: 8.0, allergens: ["1", "3", "7"] },
    { name: "Cheesecake", description: "Classic cheesecake.", price: 7.5, allergens: ["1", "3", "7"] },
  ]

  // Domáce limonády
  const homemadeLemonades = [
    { name: "Ruža", volume: "0.3l", price: 3.5 },
    { name: "Mango-Maracuja", volume: "0.3l", price: 3.5 },
    { name: "Levanduľa", volume: "0.3l", price: 3.5 },
    { name: "Baza", volume: "0.3l", price: 3.5 },
    { name: "Granátové jablko/Čerešňa", volume: "0.3l", price: 3.5 },
    { name: "Ananás-Kiwi", volume: "0.3l", price: 3.5 },
  ]

  // Nealko
  const softDrinks = [
    { name: "Coca-cola, Fanta, Sprite", volume: "0.33l", price: 2.1 },
    { name: "Kinley Tonic", volume: "0.25l", price: 2.1 },
    { name: "Bitter/Rose/Ginger", volume: "", price: 2.1 },
    { name: "Cappy", volume: "0.25l", price: 2.1 },
    { name: "Vinea", volume: "0.25l", price: 2.1 },
    { name: "Fuzetea", volume: "0.25l", price: 2.1 },
    { name: "Natura", volume: "0.33l", price: 1.8 },
    { name: "Minerálne vody", volume: "0.33l", price: "", description: "sýtená/jemne sýtená/nesýtená" },
    { name: "Red Bull", volume: "0.25l", price: 3.9 },
    { name: "Soda", volume: "0.10l", price: 0.5 },
    { name: "Kofola Original", volume: "0.10l", price: 0.4 },
  ]

  // Miešané drinky
  const cocktails = [
    { name: "Aperol Spritz", volume: "", price: 4.5 },
    { name: "Mochito", volume: "", price: "4.50/5.80" },
    { name: "Mimosa", volume: "", price: 5.5 },
    { name: "Negroni", volume: "", price: 4.2 },
    { name: "Gin Tonic", volume: "", price: 4.2 },
  ]

  // Pivo - výčap
  const draftBeers = [
    { name: "Plzeň 12", volume: "0.3l", price: 2.5 },
    { name: "Plzeň 12", volume: "0.5l", price: 3.5 },
    { name: "Gambrinus 10", volume: "0.3l", price: 2.0 },
    { name: "Gambrinus 10", volume: "0.5l", price: 2.5 },
  ]

  // Pivo - fľaškové
  const bottledBeers = [
    { name: "Šariš", volume: "0.5l", price: 2.5 },
    { name: "Birell", volume: "0.5l", price: 2.5 },
    { name: "Birell pomelo-grep", volume: "0.5l", price: 2.5 },
  ]

  // Víno
  const wines = [
    { name: "Riesling suché (suché)", volume: "0.10l", price: 1.5 },
    { name: "Chardonnay (polosuché)", volume: "0.10l", price: 1.5 },
    { name: "Pálava (polosladké)", volume: "0.10l", price: 1.8 },
    { name: "Cabernet Sauvignon rosé (polosuché)", volume: "0.10l", price: 1.8 },
    { name: "Frankovka modrá (suché)", volume: "0.10l", price: 1.8 },
    { name: "Sauvignon (polosuché)", volume: "0.10l", price: 1.8 },
    { name: "Prosecco DOC Millesimato IRIS", volume: "0.10l", price: 1.8 },
    { name: "Prosecco (podľa aktuálnej ponuky)", volume: "0.75l", price: "" },
    {
      name: "Hubert De Luxe",
      volume: "0.75l",
      price: 14.9,
      note: "Akostné šumivé s prívlastkom (podľa aktuálnej ponuky)",
    },
    { name: "Karton vína", volume: "0.10l", price: 2.0, description: "biele/červené/dry/rosso" },
  ]

  // Alkohol - Rum
  const rum = [
    { name: "Don papa", volume: "0.4cl", price: 4.0 },
    { name: "Diplomatico", volume: "0.4cl", price: 4.0, note: "reserva exclusiva" },
    { name: "Captain Morgan", volume: "0.4cl", price: 2.0 },
  ]

  // Alkohol - Vodka
  const vodka = [
    { name: "Ruský Štandart", volume: "0.4cl", price: 3.0 },
    { name: "Finlandia", volume: "0.4cl", price: 2.5 },
    { name: "Nicolaus", volume: "0.4cl", price: 2.0 },
  ]

  // Alkohol - Gin
  const gin = [
    { name: "Citadella", volume: "0.4cl", price: 3.5 },
    { name: "Beefeater", volume: "0.4cl", price: 2.5 },
  ]

  // Alkohol - Ovocné
  const fruitSpirits = [
    { name: "DOMOVINA Hruškovica", volume: "0.4cl", price: 3.5 },
    { name: "Tri slivmy Marhuľovica", volume: "0.4cl", price: 3.0 },
    { name: "Bošácka Slivovica", volume: "0.4cl", price: 2.5 },
  ]

  // Alkohol - Whiskey
  const whiskey = [
    { name: "Proper", volume: "0.4cl", price: 4.0 },
    { name: "Jameson", volume: "0.4cl", price: 3.0 },
    { name: "Jack Daniels", volume: "0.4cl", price: 3.5 },
  ]

  // Alkohol - Destiláty
  const spirits = [
    { name: "Tequila Olmega", volume: "0.4cl", price: 3.5 },
    { name: "Spišská Borovička", volume: "0.4cl", price: 2.0 },
    { name: "Karpatské Brandy Spec.", volume: "0.4cl", price: 3.5 },
    { name: "Fernet Stock", volume: "0.4cl", price: 2.0 },
    { name: "Fernet Citrus", volume: "0.4cl", price: 2.0 },
    { name: "Becherovka", volume: "0.4cl", price: 2.0 },
    { name: "Jägermeister", volume: "0.4cl", price: 2.5 },
  ]

  return (
    <div className="min-h-screen py-16 pt-32" ref={menuRef}>
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">MENU</h1>
        <p className="text-lg text-center mb-16 text-muted-foreground max-w-2xl mx-auto">
          Objavte naše špeciality pripravené z najkvalitnejších surovín
        </p>

        <div className="mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="tyzdenne-menu">
            <AccordionItem value="tyzdenne-menu" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                TÝŽDENNÉ MENU
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  <div className="bg-muted p-6 rounded-md">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-lg font-medium">Aktuálna týždenná ponuka</h3>
                      <div className="text-right">
                        <p className="font-medium">Každý deň od</p>
                        <p className="font-bold">10:30-14:00</p>
                        <p className="font-medium">alebo do vypredania</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-bold text-xl mb-2">Menu počas celého týždňa:</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>4. Losos, bylinkové maslo, varené zemiaky</p>
                          <p className="font-bold">8,50€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>5. Kurací/Bravčový rezeň, ryža</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>6. Vyprážaný Syr, varené zemiaky-hranolky, tatarka</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>7. Pizza, cena Menu sa odvíja z jedálneho lístka (pečieme od štvrtka do soboty)</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="font-bold text-xl italic mb-2">Pondelok</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>1. Kuracie placky, americké zemiaky, cesnakový dresing</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>2. Krémové tarhoto, bravčové výpečky</p>
                          <p className="font-bold">7,70€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">FITKO: Chrumkavá tortila, omeleta, karfiol, feta, cottage</p>
                          <p className="font-bold">7,90€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">ŠPESL: Rolované prasiatko, pivová omáčka, kapustová štrúdla</p>
                          <p className="font-bold">12,80€</p>
                        </div>
                        <p className="text-sm text-muted-foreground">kulajda</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="font-bold text-xl italic mb-2">Utorok</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>1. Kura na úteku, ryža</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>2. Mäsové guličky, zemiakový prívarok</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">FITKO: wasabi rizoto, losos</p>
                          <p className="font-bold">9,90€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">ŠPESL: Rolované prasiatko, pivová omáčka, kapustová štrúdla</p>
                          <p className="font-bold">12,80€</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="font-bold text-xl italic mb-2">Streda</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>1. Vyprážané kuracie pečienky, ryža, uhorka</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>2. Hovädzie na hubách s tarhoňou</p>
                          <p className="font-bold">8,50€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">
                            FITKO: Fazuľovo-cviklový humus, cuketová kapsička so syrom a olivami
                          </p>
                          <p className="font-bold">7,90€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">ŠPESL: Rolované prasiatko, pivová omáčka, kapustová štrúdla</p>
                          <p className="font-bold">12,80€</p>
                        </div>
                        <p className="text-sm text-muted-foreground">šošovicová ml.</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="font-bold text-xl italic mb-2">Štvrtok</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>1. Kurací steak, cestoviny s paradajkovou omáčkou, parmezán, olej</p>
                          <p className="font-bold">7,90€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>2. Segedínsky guláš, knedľa</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">FITKO: Pokéčko, grilované halumi/kura</p>
                          <p className="font-bold">8,20€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">ŠPESL: Rolované prasiatko, pivová omáčka, kapustová štrúdla</p>
                          <p className="font-bold">12,80€</p>
                        </div>
                        <p className="text-sm text-muted-foreground">gulášová</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="font-bold text-xl italic mb-2">Piatok</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <p>1. Žemlovka</p>
                          <p className="font-bold">7,40€</p>
                        </div>
                        <div className="flex justify-between">
                          <p>2. Casoulet (fazuľa, klobása, kačacie mäso, bravčové), halušky</p>
                          <p className="font-bold">8,50€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">FITKO: Grilovaný kozí syr, pečená cvikla, rukola salát</p>
                          <p className="font-bold">9,90€</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-medium">ŠPESL: Rolované prasiatko, pivová omáčka, kapustová štrúdla</p>
                          <p className="font-bold">12,80€</p>
                        </div>
                        <p className="text-sm text-muted-foreground">slepačí vývar</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 flex justify-between">
                      <div>
                        <p className="font-medium">Dovoz</p>
                        <p className="font-bold">0,50€</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Rozvoz jedál:</p>
                        <p className="font-bold text-xl">0905 273 435</p>
                      </div>
                    </div>

                    <p className="text-center mt-4 text-sm">
                      Bližšie info na IG, FB a na našej stránke www.dongalvan.sk
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pasta" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                CESTOVINY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {pastas.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pizza" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                PIZZA
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {pizzas.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hlavne-jedla" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                HLAVNÉ JEDLÁ
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {mainCourses.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="speciality" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                ŠPECIALITY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {specialties.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="snack" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                SNACK
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {snacks.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="polievky" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                POLIEVKY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {soups.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="salaty" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                ŠALÁTY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {salads.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dezerty" className="border-b border-t-0 border-x-0 border-border">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                DEZERTY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-12 pt-2 pb-8">
                  {desserts.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">NÁPOJE</h2>
            <div className="w-full h-px bg-border"></div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="domace-limonady" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                DOMÁCE LIMONÁDY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {homemadeLemonades.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nealko" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                NEALKO
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {softDrinks.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="miesane-drinky" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                MIEŠANÉ DRINKY
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cocktails.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pivo" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                PIVO
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2 pb-8">
                  <h3 className="font-medium mb-4">VÝČAP:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {draftBeers.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>

                  <h3 className="font-medium mt-8 mb-4">FĽAŠKOVÉ:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bottledBeers.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vino" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                VÍNO
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wines.map((item, index) => (
                      <DrinkItem key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="alkohol" className="border-b border-t-0 border-x-0 border-border bg-muted/30">
              <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline transition-all duration-300 hover:pl-2">
                ALKOHOL
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8 pt-2 pb-8">
                  <div>
                    <h3 className="font-medium mb-4">RUM</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {rum.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">VODKA</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {vodka.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">GIN</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {gin.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">OVOCNÉ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {fruitSpirits.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">WHISKEY</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {whiskey.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">DESTILÁTY</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {spirits.map((item, index) => (
                        <DrinkItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <motion.div
            className="mt-16 p-8 border border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Informácie o alergénoch
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Naše jedlá môžu obsahovať nasledujúce alergény:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground dark:text-gray-400">
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  1
                </span>
                Obilniny obsahujúce lepok
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  2
                </span>
                Kôrovce
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  3
                </span>
                Vajcia
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  4
                </span>
                Ryby
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  5
                </span>
                Arašidy
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  6
                </span>
                Sójové zrná
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  7
                </span>
                Mlieko
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  8
                </span>
                Orechy
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  9
                </span>
                Zeler
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  10
                </span>
                Horčica
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  11
                </span>
                Sezamové semená
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  12
                </span>
                Oxid siričitý a siričitany
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  13
                </span>
                Vlčí bôb
              </li>
              <li className="flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mr-2">
                  14
                </span>
                Mäkkýše
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

