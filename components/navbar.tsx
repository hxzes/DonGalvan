"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Domov", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Galéria", href: "/galeria" },
    { name: "O nás", href: "/o-nas" },
    { name: "Recenzie", href: "/recenzie" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"
  const logoSrc = isDark
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20biele-Xbg22QvOETXNTBZzyn9LkLlr4c0tav.png"
    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/343761348_561299316147763_2573134807779043085_n-removebg-preview-kJTrprCVnV0s6ttrFPkCFnSKqTbgVn.png"

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : isDark
            ? "bg-transparent"
            : "bg-black/20 backdrop-blur-sm"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <motion.div variants={itemVariants}>
            <Link href="/" className="relative w-12 h-12 block">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Don Galvan Restaurant Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={itemVariants} custom={index}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    pathname === link.href
                      ? "text-black dark:text-white font-bold"
                      : isScrolled
                        ? "text-foreground/80 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        : isDark
                          ? "text-white hover:text-white/70"
                          : "text-white hover:text-white/70"
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div variants={itemVariants}>
              <ModeToggle />
            </motion.div>

            <motion.div variants={itemVariants} className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Otvoriť menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-10 pt-4">
                      <Link href="/" className="relative w-12 h-12 block" onClick={() => setIsOpen(false)}>
                        <Image
                          src={logoSrc || "/placeholder.svg"}
                          alt="Don Galvan Restaurant Logo"
                          fill
                          className="object-contain"
                        />
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Zatvoriť menu</span>
                      </Button>
                    </div>

                    <nav className="flex flex-col space-y-8 mb-10">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className={`text-lg font-medium tracking-wide transition-colors hover:text-black dark:hover:text-white ${
                              pathname === link.href
                                ? "text-black dark:text-white font-bold"
                                : "text-foreground/80 dark:text-gray-300"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name.toUpperCase()}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

