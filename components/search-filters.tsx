"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterState {
  price: string[]
  openNow: boolean
  reservations: boolean
  onlineWaitlist: boolean
  delivery: boolean
  takeout: boolean
  goodForDinner: boolean
  categories: string[]
  features: string[]
  distance: string
}

interface SearchFiltersProps {
  onFilterChange?: (filters: FilterState) => void
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    price: [],
    openNow: false,
    reservations: false,
    onlineWaitlist: false,
    delivery: false,
    takeout: false,
    goodForDinner: false,
    categories: [],
    features: [],
    distance: "driving-5",
  })

  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const categories = [
    "New American",
    "Italian",
    "French",
    "Restaurants",
    "American",
    "Steakhouses",
    "Chinese",
    "Mexican",
    "Japanese",
    "Thai",
    "Vietnamese",
    "Korean",
  ]

  const features = [
    "Full Bar",
    "Outdoor Seating",
    "Good for Lunch",
    "Good for Kids",
    "Good for Groups",
    "Dogs Allowed",
    "Wi-Fi",
    "Wheelchair Accessible",
    "Gender-neutral Restrooms",
    "Bike Parking",
  ]

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters }
    setFilters(updated)
    onFilterChange?.(updated)
  }

  const togglePrice = (price: string) => {
    const newPrice = filters.price.includes(price)
      ? filters.price.filter((p) => p !== price)
      : [...filters.price, price]
    updateFilters({ price: newPrice })
  }

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    updateFilters({ categories: newCategories })
  }

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature]
    updateFilters({ features: newFeatures })
  }

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      price: [],
      openNow: false,
      reservations: false,
      onlineWaitlist: false,
      delivery: false,
      takeout: false,
      goodForDinner: false,
      categories: [],
      features: [],
      distance: "driving-5",
    }
    setFilters(clearedFilters)
    onFilterChange?.(clearedFilters)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    count += filters.price.length
    if (filters.openNow) count++
    if (filters.reservations) count++
    if (filters.onlineWaitlist) count++
    if (filters.delivery) count++
    if (filters.takeout) count++
    if (filters.goodForDinner) count++
    count += filters.categories.length
    count += filters.features.length
    if (filters.distance !== "driving-5") count++
    return count
  }

  const getActiveFiltersText = () => {
    const active = []
    if (filters.features.includes("Full Bar")) active.push("Full Bar")
    if (filters.distance !== "driving-5") {
      const distanceLabels: Record<string, string> = {
        "bird-eye": "Bird's-eye View",
        "driving-5": "Driving (5 mi.)",
        "biking-2": "Biking (2 mi.)",
        "walking-1": "Walking (1 mi.)",
        "blocks-4": "Within 4 blocks",
      }
      active.push(distanceLabels[filters.distance])
    }
    return active.join(" • ")
  }

  const activeCount = getActiveFiltersCount()
  const activeText = getActiveFiltersText()

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-6">
        {/* Active Filters */}
        {activeCount > 0 && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">{activeCount} filters</span>
              <button onClick={clearAllFilters} className="text-sm text-[#d32323] hover:underline">
                Clear all
              </button>
            </div>
            {activeText && <p className="text-sm text-gray-700">{activeText}</p>}
          </div>
        )}

        {/* Price */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Price</h4>
          <div className="flex gap-2">
            {["$", "$$", "$$$", "$$$$"].map((price) => (
              <button
                key={price}
                onClick={() => togglePrice(price)}
                className={`flex-1 px-2 py-2 border rounded text-sm font-medium transition-colors ${
                  filters.price.includes(price)
                    ? "bg-gray-100 border-gray-400"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Suggested */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Suggested</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.openNow}
                onCheckedChange={(checked) => updateFilters({ openNow: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Open Now</span>
              <span className="text-xs text-gray-500 ml-auto">{currentTime}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.reservations}
                onCheckedChange={(checked) => updateFilters({ reservations: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Reservations</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.onlineWaitlist}
                onCheckedChange={(checked) => updateFilters({ onlineWaitlist: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Offers Online Waitlist</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.delivery}
                onCheckedChange={(checked) => updateFilters({ delivery: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Offers Delivery</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.takeout}
                onCheckedChange={(checked) => updateFilters({ takeout: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Offers Takeout</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={filters.goodForDinner}
                onCheckedChange={(checked) => updateFilters({ goodForDinner: checked as boolean })}
              />
              <span className="text-sm group-hover:text-[#d32323]">Good for Dinner</span>
            </label>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Category</h4>
          <div className="space-y-2">
            {categories.slice(0, showAllCategories ? categories.length : 6).map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer group">
                <Checkbox
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <span className="text-sm group-hover:text-[#d32323]">{category}</span>
              </label>
            ))}
          </div>
          {categories.length > 6 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="mt-2 text-sm text-[#d32323] hover:underline flex items-center gap-1"
            >
              {showAllCategories ? (
                <>
                  See less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  See all <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Features</h4>
          <div className="space-y-2">
            {features.slice(0, showAllFeatures ? features.length : 6).map((feature) => (
              <label key={feature} className="flex items-center gap-2 cursor-pointer group">
                <Checkbox checked={filters.features.includes(feature)} onCheckedChange={() => toggleFeature(feature)} />
                <span className="text-sm group-hover:text-[#d32323]">{feature}</span>
              </label>
            ))}
          </div>
          {features.length > 6 && (
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="mt-2 text-sm text-[#d32323] hover:underline flex items-center gap-1"
            >
              {showAllFeatures ? (
                <>
                  See less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  See all <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Distance */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Distance</h4>
          <div className="space-y-2">
            {[
              { value: "bird-eye", label: "Bird's-eye View" },
              { value: "driving-5", label: "Driving (5 mi.)" },
              { value: "biking-2", label: "Biking (2 mi.)" },
              { value: "walking-1", label: "Walking (1 mi.)" },
              { value: "blocks-4", label: "Within 4 blocks" },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="distance"
                  value={option.value}
                  checked={filters.distance === option.value}
                  onChange={(e) => updateFilters({ distance: e.target.value })}
                  className="w-4 h-4 text-[#d32323] border-gray-300 focus:ring-[#d32323]"
                />
                <span className="text-sm group-hover:text-[#d32323]">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
