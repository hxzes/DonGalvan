import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Don Galvan Restaurant",
  description: "Contact Don Galvan restaurant in Šaľa, Slovakia for reservations, inquiries, or feedback.",
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-4">Contact Us</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-stone-800">Address</p>
                    <p className="text-stone-600">Hlavná 123, 927 01 Šaľa, Slovakia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-stone-800">Phone</p>
                    <p className="text-stone-600">+421 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-stone-800">Email</p>
                    <p className="text-stone-600">info@dongalvan.sk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-stone-800">Opening Hours</p>
                    <p className="text-stone-600">Monday - Friday: 11:00 - 23:00</p>
                    <p className="text-stone-600">Saturday - Sunday: 12:00 - 00:00</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium text-stone-800 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" className="text-amber-700 hover:text-amber-800">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" className="text-amber-700 hover:text-amber-800">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" className="text-amber-700 hover:text-amber-800">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-amber-700 text-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Private Events</h2>
              <p className="mb-4">
                Looking to host a private event? Don Galvan offers a perfect setting for celebrations, corporate events,
                and special occasions.
              </p>
              <p className="mb-4">
                Contact us directly for more information about our private dining options and custom menus.
              </p>
              <p className="font-medium">
                Email: events@dongalvan.sk
                <br />
                Phone: +421 123 456 790
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 h-96 w-full rounded-lg overflow-hidden shadow-md">
          {/* This would be a Google Map in production */}
          <div className="w-full h-full bg-stone-300 flex items-center justify-center">
            <p className="text-stone-600">Google Maps Integration</p>
          </div>
        </div>
      </div>
    </main>
  )
}

