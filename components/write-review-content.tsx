"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const recentBusinesses = [
  {
    id: 1,
    name: "Brenda's French Soul Food",
    image: "/french-soul-food.jpg",
    slug: "brendas-french-soul-food",
  },
  {
    id: 2,
    name: "Fog Harbor Fish House",
    image: "/seafood-counter-restaurant.jpg",
    slug: "fog-harbor-fish-house",
  },
  {
    id: 3,
    name: "Lapisara Eatery",
    image: "/colorful-garden-flowers.png",
    slug: "lapisara-eatery",
  },
  {
    id: 4,
    name: "Bodega",
    image: "/chinese-noodle-soup.jpg",
    slug: "bodega",
  },
  {
    id: 5,
    name: "Sweet Maple",
    image: "/pastries-bakery.jpg",
    slug: "sweet-maple",
  },
]

export function WriteReviewContent() {
  const [businesses, setBusinesses] = useState(recentBusinesses)
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("San Francisco, CA")

  const removeBusiness = (id: number) => {
    setBusinesses(businesses.filter((b) => b.id !== id))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Find a business to review</h1>
            <p className="text-gray-600 mb-6">
              Review anything from your favorite patio spot to your local flower shop.
            </p>

            {/* Search Form */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="text"
                placeholder="Try lunch, yoga studio, plumber"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 h-12"
              />
              <Input
                type="text"
                placeholder="San Francisco, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 h-12"
              />
              <Button className="bg-[#d32323] hover:bg-[#b91c1c] h-12 px-6">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-shrink-0">
            <Image
              src="/review-illustration.png"
              alt="Write a review"
              width={300}
              height={200}
              className="w-64 md:w-80"
            />
          </div>
        </div>

        {/* Recent Businesses */}
        {businesses.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visited one of these places recently?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={business.image || "/placeholder.svg"}
                      alt={business.name}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => removeBusiness(business.id)}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{business.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">Do you recommend this business?</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="text-gray-300 hover:text-[#d32323] transition-colors">
                          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
