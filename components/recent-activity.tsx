"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ThumbsUp, Lightbulb, Laugh, Heart } from "lucide-react"

const sampleReviews = [
  {
    id: 1,
    user: {
      name: "Jaimie L.",
      avatar: "/diverse-woman-smiling.png",
      action: "added 5 photos",
      timestamp: "5 minutes ago",
    },
    business: {
      name: "Yelp Elite Experience: Z & Y Peking Duck",
      category: "Yelp Events",
      rating: 4.5,
      reviewCount: 25,
    },
    photos: ["/chinese-food-table.jpg", "/peking-duck-plate.jpg"],
    showAllPhotos: true,
  },
  {
    id: 2,
    user: {
      name: "Michele S.",
      avatar: "/professional-woman.png",
      action: "wrote a review",
      timestamp: "12 minutes ago",
    },
    business: {
      name: "The Great Frame Up",
      category: "Framing",
      rating: 5,
      reviewCount: 0,
    },
    review:
      "I have been a happy customer of the Great Frame-up for over 10 years. Percy and Rosemary are wonderful to work with - they really take the time to understand what you want and offer great suggestions. The quality of their work is exceptional and prices are very reasonable. Highly recommend!",
    photos: ["/framed-artwork-lamp.jpg"],
    reactions: { useful: 3, funny: 0, cool: 1, love: 0 },
  },
  {
    id: 3,
    user: {
      name: "Kevin C.",
      avatar: "/casual-man.png",
      action: "wrote a review",
      timestamp: "21 minutes ago",
    },
    business: {
      name: "Yuanbao Jiaozi",
      category: "Chinese",
      rating: 4,
      reviewCount: 0,
    },
    review:
      "This small little restaurant is always packed and lined up whenever I pass by it, but I was lucky to get a table right away. The dumplings are handmade and you can taste the difference. The soup dumplings are incredible - juicy and flavorful. Service was quick and friendly.",
    photos: ["/chinese-noodle-soup.jpg"],
    reactions: { useful: 2, funny: 0, cool: 1, love: 0 },
  },
  {
    id: 4,
    user: {
      name: "Gabrielle R.",
      avatar: "/elegant-woman.png",
      action: "wrote a review",
      timestamp: "22 minutes ago",
    },
    business: {
      name: "Yonsei Handrolls",
      category: "Japanese",
      rating: 4,
      reviewCount: 0,
    },
    review:
      "The Hamachi Carpaccio starter was the highlight of our meal so much so that we ordered it again. The handrolls were fresh and well-prepared, though I wish the portions were a bit larger for the price. Atmosphere is casual and modern. Would come back for happy hour.",
    photos: ["/japanese-handroll-sushi.jpg"],
    reactions: { useful: 5, funny: 0, cool: 2, love: 0 },
  },
  {
    id: 5,
    user: {
      name: "Marcus T.",
      avatar: "/professional-man.jpg",
      action: "wrote a review",
      timestamp: "35 minutes ago",
    },
    business: {
      name: "Blue Bottle Coffee",
      category: "Coffee & Tea",
      rating: 4,
      reviewCount: 0,
    },
    review:
      "Great coffee as always. The New Orleans iced coffee is my go-to. The space can get crowded during morning rush but the baristas are efficient. Pastries are good but a bit overpriced. Free wifi and plenty of seating make it a good spot to work.",
    reactions: { useful: 8, funny: 0, cool: 3, love: 0 },
  },
  {
    id: 6,
    user: {
      name: "Sarah C.",
      avatar: "/woman-happy.jpg",
      action: "wrote a review",
      timestamp: "42 minutes ago",
    },
    business: {
      name: "Precision Tune Auto Care",
      category: "Auto Repair",
      rating: 5,
      reviewCount: 0,
    },
    review:
      "Honest and reliable service! They diagnosed my brake issue quickly and gave me a fair quote. The work was completed on time and my car runs perfectly now. Really appreciate their transparency and professionalism. Will definitely be back for future maintenance.",
    reactions: { useful: 12, funny: 0, cool: 4, love: 0 },
  },
  {
    id: 7,
    user: {
      name: "Amanda K.",
      avatar: "/young-woman-smiling.png",
      action: "wrote a review",
      timestamp: "1 hour ago",
    },
    business: {
      name: "Gloss Nail Bar",
      category: "Nail Salons",
      rating: 3,
      reviewCount: 0,
    },
    review:
      "Decent nail salon but nothing special. The gel manicure lasted about 2 weeks which is average. Staff was friendly but seemed rushed. Prices are reasonable for the area. The massage chairs are comfortable. Would probably try somewhere else next time.",
    reactions: { useful: 4, funny: 0, cool: 0, love: 0 },
  },
  {
    id: 8,
    user: {
      name: "David L.",
      avatar: "/thoughtful-man-glasses.png",
      action: "added 3 photos",
      timestamp: "1 hour ago",
    },
    business: {
      name: "Golden Gate Park",
      category: "Parks",
      rating: 5,
      reviewCount: 1247,
    },
    photos: ["/park-landscape.jpg", "/colorful-garden-flowers.png"],
    showAllPhotos: true,
  },
  {
    id: 9,
    user: {
      name: "Jennifer M.",
      avatar: "/professional-woman.png",
      action: "wrote a review",
      timestamp: "2 hours ago",
    },
    business: {
      name: "Tartine Bakery",
      category: "Bakeries",
      rating: 5,
      reviewCount: 0,
    },
    review:
      "The morning bun is absolutely divine! Crispy on the outside, soft and buttery on the inside with just the right amount of orange zest. Yes, the line is long but it moves quickly and it's 100% worth the wait. Get there early for the best selection.",
    photos: ["/pastries-bakery.jpg"],
    reactions: { useful: 15, funny: 1, cool: 8, love: 0 },
  },
]

function ReviewCard({ review }: { review: (typeof sampleReviews)[0] }) {
  const businessSlug = review.business.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return (
    <div className="bg-white border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
      {/* User Header */}
      <div className="flex items-start gap-3 mb-4">
        <Image
          src={review.user.avatar || "/placeholder.svg"}
          alt={review.user.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-gray-900">{review.user.name}</span>
            <span className="text-gray-600">{review.user.action}</span>
          </div>
          <div className="text-sm text-gray-500">{review.user.timestamp}</div>
        </div>
      </div>

      {/* Business Info */}
      <div className="mb-3">
        <Link href={`/biz/${businessSlug}`}>
          <h3 className="font-bold text-gray-900 text-lg mb-1 hover:underline cursor-pointer">
            {review.business.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(review.business.rating)
                    ? "fill-[#d32323] text-[#d32323]"
                    : i < review.business.rating
                      ? "fill-[#d32323] text-[#d32323] opacity-50"
                      : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
          {review.business.reviewCount > 0 && (
            <span className="text-sm text-gray-600">{review.business.reviewCount}</span>
          )}
        </div>
        <div className="text-sm text-gray-600">{review.business.category}</div>
      </div>

      {/* Photos */}
      {review.photos && review.photos.length > 0 && (
        <div className={`mb-4 ${review.photos.length > 1 ? "grid grid-cols-2 gap-2" : ""}`}>
          {review.photos.map((photo, idx) => (
            <div key={idx} className="relative overflow-hidden rounded">
              <Image
                src={photo || "/placeholder.svg"}
                alt="Review photo"
                width={review.photos!.length > 1 ? 300 : 600}
                height={200}
                className="w-full h-48 object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}

      {/* Show all photos link */}
      {review.showAllPhotos && (
        <button className="text-sm font-bold text-gray-900 hover:underline mb-4">
          Show all {review.photos?.length} photos
        </button>
      )}

      {/* Review Text */}
      {review.review && (
        <div className="mb-4">
          <p className="text-gray-900 leading-relaxed">{review.review}</p>
          <button className="text-sm font-bold text-gray-900 hover:underline mt-1">Read more</button>
        </div>
      )}

      {/* Reactions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Lightbulb className="w-5 h-5" />
          <span className="text-sm">Useful</span>
          {review.reactions?.useful ? <span className="text-sm">{review.reactions.useful}</span> : null}
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Laugh className="w-5 h-5" />
          <span className="text-sm">Funny</span>
          {review.reactions?.funny ? <span className="text-sm">{review.reactions.funny}</span> : null}
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-sm">Cool</span>
          {review.reactions?.cool ? <span className="text-sm">{review.reactions.cool}</span> : null}
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors ml-auto">
          <ThumbsUp className="w-5 h-5" />
          <span className="text-sm">Love</span>
          {review.reactions?.love ? <span className="text-sm">{review.reactions.love}</span> : null}
        </button>
      </div>
    </div>
  )
}

export function RecentActivity() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Recent Activity</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
