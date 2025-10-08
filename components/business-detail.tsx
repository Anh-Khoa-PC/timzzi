"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Phone, Globe, Clock, ChevronDown, Lightbulb, Laugh, Heart, Share2, Bookmark } from "lucide-react"

// Mock business data
const businessData: Record<string, any> = {
  "the-great-frame-up": {
    name: "The Great Frame Up",
    rating: 4.5,
    reviewCount: 127,
    priceRange: "$$",
    category: "Framing",
    categories: ["Framing", "Art Galleries", "Custom Framing"],
    claimed: true,
    photos: [
      "/framed-artwork-lamp.jpg",
      "/framing-shop-interior.jpg",
      "/custom-frames-display.jpg",
      "/art-framing-workshop.jpg",
    ],
    address: "4025 Broadway, Oakland, CA 94611",
    phone: "(510) 555-0123",
    website: "www.thegreatframeup.com",
    hours: {
      monday: "10:00 AM - 6:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "10:00 AM - 6:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "10:00 AM - 6:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    about:
      "The Great Frame Up has been serving the Oakland community for over 30 years. We specialize in custom framing, art restoration, and gallery-quality mounting. Our experienced team works with you to create the perfect frame for your artwork, photos, and memorabilia.",
    amenities: ["Accepts Credit Cards", "Wheelchair Accessible", "Free Wi-Fi", "Street Parking"],
    reviews: [
      {
        id: 1,
        user: {
          name: "Michele S.",
          avatar: "/professional-woman.png",
          location: "Oakland, CA",
          friendCount: 45,
          reviewCount: 128,
          photoCount: 89,
        },
        rating: 5,
        date: "12/15/2024",
        text: "I have been a happy customer of the Great Frame-up for over 10 years. Percy and Rosemary are wonderful to work with - they really take the time to understand what you want and offer great suggestions. The quality of their work is exceptional and prices are very reasonable. Highly recommend!",
        photos: ["/framed-artwork-lamp.jpg"],
        reactions: { useful: 12, funny: 0, cool: 5 },
      },
      {
        id: 2,
        user: {
          name: "Robert K.",
          avatar: "/man-profile.png",
          location: "Berkeley, CA",
          friendCount: 23,
          reviewCount: 67,
          photoCount: 34,
        },
        rating: 5,
        date: "11/28/2024",
        text: "Excellent service and craftsmanship! I brought in a vintage poster that needed special care and they did an amazing job. The frame they suggested was perfect and really made the piece pop. Pricing was fair and turnaround time was exactly as promised.",
        reactions: { useful: 8, funny: 0, cool: 3 },
      },
      {
        id: 3,
        user: {
          name: "Jennifer L.",
          avatar: "/diverse-woman-smiling.png",
          location: "Oakland, CA",
          friendCount: 156,
          reviewCount: 234,
          photoCount: 178,
        },
        rating: 4,
        date: "11/10/2024",
        text: "Great selection of frames and mats. The staff is knowledgeable and patient. They helped me frame several family photos and I'm very happy with the results. Only reason for 4 stars instead of 5 is that it took a bit longer than expected, but the quality made up for it.",
        reactions: { useful: 5, funny: 0, cool: 2 },
      },
    ],
  },
  "yuanbao-jiaozi": {
    name: "Yuanbao Jiaozi",
    rating: 4.0,
    reviewCount: 892,
    priceRange: "$",
    category: "Chinese",
    categories: ["Chinese", "Dumplings", "Noodles"],
    claimed: true,
    photos: ["/chinese-noodle-soup.jpg", "/chinese-dumplings.jpg", "/modern-restaurant-interior.png"],
    address: "3228 Grand Ave, Oakland, CA 94610",
    phone: "(510) 555-0456",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    about: "Authentic handmade dumplings and noodles. Family-owned restaurant serving traditional Chinese cuisine.",
    amenities: ["Takeout", "Delivery", "Dine-in", "Accepts Credit Cards"],
    reviews: [
      {
        id: 1,
        user: {
          name: "Kevin C.",
          avatar: "/casual-man.png",
          location: "Oakland, CA",
          friendCount: 78,
          reviewCount: 156,
          photoCount: 92,
        },
        rating: 4,
        date: "12/15/2024",
        text: "This small little restaurant is always packed and lined up whenever I pass by it, but I was lucky to get a table right away. The dumplings are handmade and you can taste the difference. The soup dumplings are incredible - juicy and flavorful. Service was quick and friendly.",
        photos: ["/chinese-noodle-soup.jpg"],
        reactions: { useful: 15, funny: 0, cool: 8 },
      },
    ],
  },
}

export function BusinessDetail({ slug }: { slug: string }) {
  const business = businessData[slug] || businessData["the-great-frame-up"]

  return (
    <div className="bg-white">
      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="grid grid-cols-2 gap-1 sm:gap-2 h-[200px] sm:h-[300px] lg:h-[400px]">
          <div className="relative col-span-1 row-span-2">
            <Image
              src={business.photos[0] || "/placeholder.svg"}
              alt={business.name}
              fill
              className="object-cover rounded-l"
            />
          </div>
          <div className="relative">
            <Image src={business.photos[1] || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
          </div>
          <div className="relative">
            <Image
              src={business.photos[2] || "/placeholder.svg"}
              alt={business.name}
              fill
              className="object-cover rounded-br"
            />
            <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white px-2 py-1 sm:px-3 sm:py-2 rounded border border-gray-300 font-bold text-xs sm:text-sm hover:bg-gray-50">
              See all {business.photos.length}
            </button>
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{business.name}</h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < Math.floor(business.rating)
                            ? "fill-[#d32323] text-[#d32323]"
                            : i < business.rating
                              ? "fill-[#d32323] text-[#d32323] opacity-50"
                              : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-sm sm:text-base">{business.rating}</span>
                  <span className="text-gray-600 text-sm sm:text-base">({business.reviewCount})</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-600">
                <span className="font-bold">{business.priceRange}</span>
                <span>•</span>
                {business.categories.map((cat: string, idx: number) => (
                  <span key={idx}>
                    <Link href="#" className="hover:underline">
                      {cat}
                    </Link>
                    {idx < business.categories.length - 1 && <span className="mx-1">,</span>}
                  </span>
                ))}
              </div>
              {business.claimed && <div className="mt-2 text-xs sm:text-sm text-green-700 font-bold">✓ Claimed</div>}
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-3 py-2 border border-gray-300 rounded font-bold text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="flex-1 sm:flex-none px-3 py-2 border border-gray-300 rounded font-bold text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Business Details */}
          <div className="lg:col-span-2">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6">
              <button className="bg-[#d32323] text-white px-4 py-2 sm:py-3 rounded font-bold text-sm sm:text-base hover:bg-[#b91c1c] transition-colors">
                Write a Review
              </button>
              <button className="border border-gray-300 px-4 py-2 sm:py-3 rounded font-bold text-sm sm:text-base hover:bg-gray-50">
                Add Photo
              </button>
              <button className="border border-gray-300 px-4 py-2 sm:py-3 rounded font-bold text-sm sm:text-base hover:bg-gray-50">
                Share
              </button>
            </div>

            {/* About */}
            {business.about && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold mb-3">About the Business</h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{business.about}</p>
              </div>
            )}

            {/* Amenities */}
            {business.amenities && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold mb-3">Amenities and More</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {business.amenities.map((amenity: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-green-600 text-sm">✓</span>
                      <span className="text-gray-700 text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Recommended Reviews</h2>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  <span className="text-xs sm:text-sm font-bold">Sort</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {business.reviews.map((review: any) => (
                  <div key={review.id} className="pb-4 sm:pb-6 border-b border-gray-200">
                    <div className="flex gap-3 sm:gap-4">
                      <Image
                        src={review.user.avatar || "/placeholder.svg"}
                        alt={review.user.name}
                        width={48}
                        height={48}
                        className="rounded w-12 h-12 sm:w-14 sm:h-14"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="mb-2">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">{review.user.name}</h3>
                          <div className="text-xs sm:text-sm text-gray-600 truncate">
                            {review.user.location} • {review.user.friendCount} friends
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                  i < review.rating ? "fill-[#d32323] text-[#d32323]" : "fill-gray-300 text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600">{review.date}</span>
                        </div>

                        <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-3">{review.text}</p>

                        {review.photos && review.photos.length > 0 && (
                          <div className="flex gap-2 mb-3 overflow-x-auto">
                            {review.photos.map((photo: string, idx: number) => (
                              <Image
                                key={idx}
                                src={photo || "/placeholder.svg"}
                                alt="Review photo"
                                width={150}
                                height={120}
                                className="rounded object-cover flex-shrink-0"
                              />
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                            <Lightbulb className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Useful</span>
                            {review.reactions.useful > 0 && (
                              <span className="text-xs sm:text-sm">{review.reactions.useful}</span>
                            )}
                          </button>
                          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                            <Laugh className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Funny</span>
                            {review.reactions.funny > 0 && (
                              <span className="text-xs sm:text-sm">{review.reactions.funny}</span>
                            )}
                          </button>
                          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Cool</span>
                            {review.reactions.cool > 0 && (
                              <span className="text-xs sm:text-sm">{review.reactions.cool}</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Location & Hours */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded p-4 sm:p-5 lg:sticky lg:top-4">
              {/* Location */}
              <div className="mb-4">
                <div className="flex items-start gap-2 sm:gap-3 mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold mb-1 text-sm sm:text-base">Location & Hours</div>
                    <div className="text-gray-700 text-xs sm:text-sm">{business.address}</div>
                    <Link href="#" className="text-[#d32323] hover:underline text-xs sm:text-sm">
                      Get directions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="space-y-1.5">
                      {Object.entries(business.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-xs sm:text-sm gap-2">
                          <span className="capitalize text-gray-700">{day}</span>
                          <span className="text-gray-900 text-right">{hours as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              {business.phone && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                    <Link href={`tel:${business.phone}`} className="text-[#d32323] hover:underline text-xs sm:text-sm">
                      {business.phone}
                    </Link>
                  </div>
                </div>
              )}

              {business.website && (
                <div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                    <Link
                      href={`https://${business.website}`}
                      className="text-[#d32323] hover:underline text-xs sm:text-sm truncate"
                    >
                      {business.website}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
