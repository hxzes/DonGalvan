import type { Metadata } from "next"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Don Galvan Restaurant",
  description: "Read reviews and testimonials from our guests at Don Galvan restaurant in Šaľa, Slovakia.",
}

type Review = {
  name: string
  date: string
  rating: number
  text: string
  source?: string
}

const reviews: Review[] = [
  {
    name: "Martina K.",
    date: "October 15, 2023",
    rating: 5,
    text: "The best dining experience in Šaľa! The atmosphere is cozy and the food is absolutely delicious. I especially loved the Bryndzové Halušky - authentic and flavorful. The service was impeccable, and the staff was very attentive. Will definitely be coming back!",
    source: "Google",
  },
  {
    name: "Tomáš B.",
    date: "September 3, 2023",
    rating: 5,
    text: "Don Galvan has become our favorite place for family celebrations. The service is impeccable and the menu offers something for everyone. We recently celebrated my father's birthday here and the staff went above and beyond to make it special. The steak was cooked to perfection!",
    source: "TripAdvisor",
  },
  {
    name: "Eva M.",
    date: "August 22, 2023",
    rating: 5,
    text: "I was impressed by the attention to detail in every dish. The chef truly understands how to balance flavors perfectly. The wine selection is also excellent, with great recommendations from the staff. The chocolate fondant dessert is a must-try!",
    source: "Facebook",
  },
  {
    name: "Peter H.",
    date: "July 10, 2023",
    rating: 4,
    text: "Great food and atmosphere. We enjoyed a lovely dinner on the terrace. The only reason for 4 stars instead of 5 is that we had to wait a bit longer than expected for our main course. However, the quality of the food made up for it. The duck confit was exceptional.",
    source: "Google",
  },
  {
    name: "Lucia V.",
    date: "June 28, 2023",
    rating: 5,
    text: "Visited Don Galvan for our anniversary dinner and it was perfect. The romantic setting, attentive service, and exquisite food made for an unforgettable evening. The seafood was fresh and beautifully prepared. Highly recommend for special occasions!",
    source: "TripAdvisor",
  },
  {
    name: "Marek D.",
    date: "May 15, 2023",
    rating: 5,
    text: "As a food enthusiast, I can confidently say that Don Galvan offers some of the best cuisine in the region. The flavors are authentic and the presentation is beautiful. I've tried many restaurants across Slovakia, and this one stands out for its commitment to quality and tradition. Their mushroom risotto is creamy perfection!",
    source: "Google",
  },
  {
    name: "Jana K.",
    date: "April 2, 2023",
    rating: 5,
    text: "We hosted a business dinner at Don Galvan and everyone was impressed. The private dining room provided the perfect setting for our discussions, and the menu catered to all dietary preferences. The staff was professional and discreet. Will definitely use this venue again for corporate events.",
    source: "Facebook",
  },
  {
    name: "Milan S.",
    date: "March 18, 2023",
    rating: 4,
    text: "Very good food and nice ambiance. The restaurant has a warm, inviting atmosphere with tasteful decor. I particularly enjoyed the appetizers and desserts. The main course was good but slightly oversalted for my taste. Overall, a pleasant dining experience that I would recommend.",
    source: "TripAdvisor",
  },
]

export default function ReviewsPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-4">Reviews & Testimonials</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          See what our guests have to say about their dining experiences at Don Galvan.
        </p>

        {/* Overall Rating */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 text-center">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Overall Rating</h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current text-amber-500" />
            ))}
          </div>
          <p className="text-3xl font-bold text-stone-800 mb-2">4.8 / 5</p>
          <p className="text-stone-600">Based on {reviews.length} reviews</p>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-800">{review.name}</h3>
                  <p className="text-stone-500 text-sm">{review.date}</p>
                </div>
                {review.source && (
                  <span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded">via {review.source}</span>
                )}
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? "fill-current text-amber-500" : "text-stone-300"}`}
                  />
                ))}
              </div>

              <p className="text-stone-600">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div className="mt-12 bg-amber-700 text-white rounded-lg shadow-md p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Enjoyed Your Visit?</h2>
          <p className="mb-6">
            We'd love to hear about your experience at Don Galvan. Share your feedback on Google, TripAdvisor, or
            Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://g.page/review/don-galvan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 px-6 py-2 rounded-md font-medium hover:bg-stone-100 transition-colors"
            >
              Review on Google
            </a>
            <a
              href="https://tripadvisor.com/don-galvan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 px-6 py-2 rounded-md font-medium hover:bg-stone-100 transition-colors"
            >
              Review on TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

