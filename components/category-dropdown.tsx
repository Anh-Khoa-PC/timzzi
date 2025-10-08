"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface CategoryItem {
  name: string
  slug: string
}

interface CategoryDropdownProps {
  title: string
  items: CategoryItem[]
  columns?: number
}

export function CategoryDropdown({ title, items, columns = 2 }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 hover:underline py-3">
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md mt-1 z-50 min-w-[500px]">
          <div
            className="p-4 grid gap-x-8 gap-y-2"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/search?find_desc=${encodeURIComponent(item.slug)}&find_loc=San+Francisco%2C+CA`}
                className="text-sm hover:text-[#d32323] hover:underline py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
