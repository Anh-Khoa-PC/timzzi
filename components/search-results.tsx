"use client"

import { useState } from "react"
import { Star, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SearchFilters } from "./search-filters"
import { useSearchParams } from "next/navigation"

const categoryBusinessData: Record<string, any[]> = {
  Restaurants: [
    {
      id: 1,
      slug: "golden-gate-dim-sum",
      name: "Golden Gate Dim Sum",
      image: "/chinese-food-table.jpg",
      rating: 4.5,
      reviewCount: 1247,
      price: "$$",
      category: "Chinese, Dim Sum",
      neighborhood: "Chinatown",
      address: "644 Broadway, San Francisco, CA 94133",
      tags: ["Offers Delivery", "Offers Takeout", "Outdoor Seating"],
      snippet: "Amazing dim sum! The har gow and siu mai are must-tries...",
    },
    {
      id: 2,
      slug: "tartine-bakery",
      name: "Tartine Bakery",
      image: "/pastries-bakery.jpg",
      rating: 4.5,
      reviewCount: 3421,
      price: "$$",
      category: "Bakeries, Cafes",
      neighborhood: "Mission District",
      address: "600 Guerrero St, San Francisco, CA 94110",
      tags: ["Offers Takeout", "Outdoor Seating"],
      snippet: "The morning bun is legendary! Get there early...",
    },
  ],
  Takeout: [
    {
      id: 1,
      slug: "golden-gate-dim-sum",
      name: "Golden Gate Dim Sum",
      image: "/chinese-food-table.jpg",
      rating: 4.5,
      reviewCount: 1247,
      price: "$$",
      category: "Chinese, Dim Sum",
      neighborhood: "Chinatown",
      address: "644 Broadway, San Francisco, CA 94133",
      tags: ["Offers Delivery", "Offers Takeout", "Outdoor Seating"],
      snippet: "Amazing dim sum! The har gow and siu mai are must-tries...",
    },
    {
      id: 3,
      slug: "la-taqueria",
      name: "La Taqueria",
      image: "/mexican-taqueria-interior.jpg",
      rating: 4.5,
      reviewCount: 5234,
      price: "$",
      category: "Mexican, Tacos",
      neighborhood: "Mission District",
      address: "2889 Mission St, San Francisco, CA 94110",
      tags: ["Offers Takeout", "Cash Only"],
      snippet: "Best burrito in SF! No rice, just perfectly seasoned meat...",
    },
  ],
  Plumbers: [
    {
      id: 1,
      slug: "bay-area-plumbing",
      name: "Bay Area Plumbing Pros",
      image: "/plumber-working.png",
      rating: 4.8,
      reviewCount: 342,
      price: "$$$",
      category: "Plumbing, Water Heater Installation",
      neighborhood: "Mission Bay",
      address: "1234 Mission St, San Francisco, CA 94103",
      tags: ["Licensed", "Emergency Service", "Free Estimates"],
      snippet: "Quick response time and professional service. Fixed our leak...",
    },
  ],
  Dentists: [
    {
      id: 1,
      slug: "sf-dental-care",
      name: "SF Dental Care",
      image: "/dental-office.png",
      rating: 4.9,
      reviewCount: 567,
      price: "$$$",
      category: "General Dentistry, Cosmetic Dentistry",
      neighborhood: "Financial District",
      address: "123 Market St, San Francisco, CA 94105",
      tags: ["Accepts Insurance", "Evening Hours", "Gentle Care"],
      snippet: "Dr. Smith is amazing! Very gentle and explains everything...",
    },
  ],
  "Auto Repair": [
    {
      id: 1,
      slug: "precision-auto-repair",
      name: "Precision Auto Repair",
      image: "/auto-repair-shop.png",
      rating: 4.7,
      reviewCount: 892,
      price: "$$",
      category: "Auto Repair, Oil Change",
      neighborhood: "SOMA",
      address: "456 Folsom St, San Francisco, CA 94107",
      tags: ["Free Inspection", "Warranty", "Shuttle Service"],
      snippet: "Honest mechanics who don't try to upsell. Fair prices...",
    },
  ],
}

export function SearchResults() {
  const [sortBy, setSortBy] = useState("best-match")
  const searchParams = useSearchParams()
  const category = searchParams.get("find_desc") || "Restaurants"
  const location = searchParams.get("find_loc") || "San Francisco, CA"

  const businesses = categoryBusinessData[category] || categoryBusinessData.Restaurants || []

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <SearchFilters onFilterChange={(filters) => console.log("[v0] Filters changed:", filters)} />

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  Best {category} in {location}
                </h1>
                <p className="text-sm text-gray-600">
                  Showing 1-{businesses.length} of {businesses.length * 50} results
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort:</span>
                <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded text-sm hover:border-gray-400">
                  Best Match
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Business Cards */}
            <div className="space-y-4">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Business Image */}
                    <Link href={`/biz/${business.slug}`} className="flex-shrink-0">
                      <img
                        src={business.image || "/placeholder.svg"}
                        alt={business.name}
                        className="w-48 h-48 object-cover rounded"
                      />
                    </Link>

                    {/* Business Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link href={`/biz/${business.slug}`} className="text-xl font-bold hover:underline">
                            {business.name}
                          </Link>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(business.rating)
                                      ? "fill-[#d32323] text-[#d32323]"
                                      : i < business.rating
                                        ? "fill-[#d32323] text-[#d32323] opacity-50"
                                        : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{business.reviewCount} reviews</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-600 font-medium">{business.price}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-2">{business.category}</div>

                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{business.neighborhood}</span>
                        <span className="mx-1">•</span>
                        <span>{business.address}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {business.tags.map((tag: string) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 line-clamp-2">{business.snippet}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-[#d32323] text-white border-[#d32323]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="sm">
                {Math.ceil((businesses.length * 50) / 8)}
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
