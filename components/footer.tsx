import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-sans text-xl font-bold mb-4">Don Galvan</h3>
            <p className="text-muted-foreground dark:text-gray-400 mb-4">
              Exkluzívna reštaurácia s jedinečným kulinárskym zážitkom v srdci Šale.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/restaurantdongalvan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/don_galvan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigácia</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  Galéria
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  href="/recenzie"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  Recenzie
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-400">
              <li>36, Hlavná 33, 927 01 Šaľa</li>
              <li>+421 905 273 435</li>
              <li>info@dongalvan.sk</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Otváracie hodiny</h3>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-400">
              <li>Pondelok: 10:00 - 21:00</li>
              <li>Utorok: 10:00 - 21:00</li>
              <li>Streda: 10:00 - 21:00</li>
              <li>Štvrtok: 10:00 - 21:00</li>
              <li>Piatok: 10:00 - 23:00</li>
              <li>Sobota: 10:00 - 21:00</li>
              <li>Nedeľa: 11:00 - 16:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Don Galvan. Všetky práva vyhradené.</p>
          <p className="mt-2">
            Website made by{" "}
            <a
              href="https://hazedesign.framer.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg tracking-wide hover:text-primary transition-colors"
            >
              HAZE<span className="text-black dark:text-white">Design</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

