import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Don Galvan Restaurant",
  description: "Learn about Don Galvan restaurant in Šaľa, Slovakia - our history, culinary philosophy, and team.",
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-4">About Don Galvan</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Discover our story, our passion for food, and the team behind Don Galvan.
        </p>

        {/* Our Story */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-80 w-full md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Don Galvan Restaurant"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-stone-800 mb-4">Our Story</h2>
              <p className="text-stone-600 mb-4">
                Don Galvan was established in 2010 by the Galvan family, who brought their culinary traditions from
                southern Europe to Slovakia. What began as a small family restaurant has grown into one of the most
                beloved dining establishments in Šaľa.
              </p>
              <p className="text-stone-600 mb-4">
                Our restaurant is named after the family patriarch, Don Galvan, whose passion for authentic cuisine and
                warm hospitality continues to inspire everything we do. His recipes and cooking techniques have been
                passed down through generations and form the foundation of our menu.
              </p>
              <p className="text-stone-600">
                Over the years, we've evolved and refined our offerings, but we've never lost sight of our roots:
                creating memorable dining experiences through exceptional food, attentive service, and a welcoming
                atmosphere.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-stone-800 text-center mb-8">Our Culinary Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Ingredients",
                description:
                  "We source the freshest ingredients from local farmers and producers, supporting our community while ensuring the highest quality.",
              },
              {
                title: "Traditional Techniques",
                description:
                  "We honor traditional cooking methods that have stood the test of time, bringing authentic flavors to every dish we serve.",
              },
              {
                title: "Creative Innovation",
                description:
                  "While respecting tradition, we embrace innovation, creating unique culinary experiences that surprise and delight our guests.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Galvan",
                role: "Head Chef & Owner",
                bio: "Grandson of Don Galvan, Marco trained in top European restaurants before returning to Slovakia to continue the family legacy.",
              },
              {
                name: "Elena Novák",
                role: "Sous Chef",
                bio: "With over 15 years of experience, Elena brings her expertise in traditional Slovak cuisine to our kitchen.",
              },
              {
                name: "Tomáš Kováč",
                role: "Restaurant Manager",
                bio: "Tomáš ensures that every guest receives exceptional service and leaves with a memorable dining experience.",
              },
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-1">{person.name}</h3>
                  <p className="text-amber-700 font-medium mb-3">{person.role}</p>
                  <p className="text-stone-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="bg-stone-800 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { year: "2022", award: "Best Restaurant in Šaľa - Local Gastronomy Awards" },
              { year: "2020", award: "Top 50 Restaurants in Slovakia" },
              { year: "2018", award: "Excellence in Customer Service - Hospitality Awards" },
              { year: "2015", award: "Chef of the Year - Marco Galvan" },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 border-b border-stone-700 last:border-b-0">
                <div className="text-amber-500 font-bold text-xl mr-4">{item.year}</div>
                <div>{item.award}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

