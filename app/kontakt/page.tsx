"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 pt-32">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">KONTAKT</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
          Máte otázky alebo potrebujete pomoc? Neváhajte nás kontaktovať
        </p>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-card p-8 shadow-md mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Kontaktné informácie</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Adresa</h3>
                  <p>36, Hlavná 33</p>
                  <p>927 01 Šaľa</p>
                  <p>Slovensko</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Telefón</h3>
                  <p>+421 905 273 435</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p>info@dongalvan.sk</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Otváracie hodiny</h3>
                  <p>Pondelok: 10:00 - 21:00</p>
                  <p>Utorok: 10:00 - 21:00</p>
                  <p>Streda: 10:00 - 21:00</p>
                  <p>Štvrtok: 10:00 - 21:00</p>
                  <p>Piatok: 10:00 - 23:00</p>
                  <p>Sobota: 10:00 - 21:00</p>
                  <p>Nedeľa: 11:00 - 16:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card p-8 shadow-md mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Sledujte nás</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/restaurantdongalvan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
          </motion.div>

          <motion.div
            className="h-80 w-full overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.0476541542285!2d17.87560687674255!3d48.15202994518203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee8c4e8a9c7%3A0x400f7671ca33d20!2zSGxhdm7DoSAzMy8zNiwgOTI3IDAxIMWgYcS-YSwgU2xvdmFraWE!5e0!3m2!1sen!2sus!4v1710430000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Don Galvan reštaurácie"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

