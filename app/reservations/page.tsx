import type { Metadata } from "next"
import ReservationForm from "@/components/reservation-form"

export const metadata: Metadata = {
  title: "Reservations | Don Galvan Restaurant",
  description: "Book a table at Don Galvan restaurant in Šaľa, Slovakia for an unforgettable dining experience.",
}

export default function ReservationsPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-4">Make a Reservation</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Reserve your table at Don Galvan for a memorable dining experience. For special events or large groups, please
          contact us directly.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <ReservationForm />
        </div>

        <div className="mt-12 p-6 bg-stone-100 rounded-lg">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">Reservation Policy</h2>
          <ul className="space-y-2 text-stone-600">
            <li>• Reservations are recommended, especially for weekends and holidays.</li>
            <li>• For groups of 8 or more, please contact us directly at +421 123 456 789.</li>
            <li>• We hold reservations for 15 minutes past the reserved time.</li>
            <li>• For cancellations, please notify us at least 24 hours in advance.</li>
            <li>• Special requests can be noted in the reservation form.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

