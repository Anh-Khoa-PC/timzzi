import { Utensils, ShoppingBag, Wine, Palette, Droplet, Car, Home, MoreHorizontal } from "lucide-react"

const categories = [
  { name: "Restaurants", icon: Utensils },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Nightlife", icon: Wine },
  { name: "Active Life", icon: Palette },
  { name: "Beauty & Spas", icon: Droplet },
  { name: "Automotive", icon: Car },
  { name: "Home Services", icon: Home },
  { name: "More", icon: MoreHorizontal },
]

export function Categories() {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                className="bg-white rounded-lg p-8 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#d32323]" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
