"use client"

import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Truck,
  Book as Broom,
  Wrench,
  Zap,
  Car,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectCategories = [
  { name: "Movers", icon: Truck, link: "/search?find_desc=Movers" },
  { name: "Home cleaning", icon: Broom, link: "/search?find_desc=Home+Cleaning" },
  { name: "Plumbers", icon: Wrench, link: "/search?find_desc=Plumbers" },
  { name: "Appliance repair", icon: Wrench, link: "/search?find_desc=Appliance+Repair" },
  { name: "Electricians", icon: Zap, link: "/search?find_desc=Electricians" },
  { name: "Auto detailing", icon: Car, link: "/search?find_desc=Auto+Detailing" },
  { name: "More", icon: MoreHorizontal, link: "/search" },
]

const homeProjects = [
  {
    id: 1,
    number: "1",
    title: "Upgrade the heart of your home",
    description: "Transform your kitchen into a chef's paradise",
    image: "/kitchen-renovation.jpg",
    cta: "Find kitchen pros",
    link: "/search?find_desc=Kitchen+Remodeling",
  },
  {
    id: 2,
    number: "2",
    title: "Spruce up your curb appeal",
    description: "Create a welcoming entrance with landscaping",
    image: "/landscaping-project.jpg",
    cta: "Find landscapers",
    link: "/search?find_desc=Landscaping",
  },
  {
    id: 3,
    number: "3",
    title: "Give your home a glow up with new lighting",
    description: "Brighten every room with modern fixtures",
    image: "/lighting-project.jpg",
    cta: "Find electricians",
    link: "/search?find_desc=Electricians",
  },
  {
    id: 4,
    number: "4",
    title: "Get bathroom bliss and create a luxury space",
    description: "Design your dream bathroom retreat",
    image: "/bathroom-renovation.jpg",
    cta: "Find bathroom pros",
    link: "/search?find_desc=Bathroom+Remodeling",
  },
]

export function ProjectsContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Project Ideas</h1>
          <Button className="bg-[#d32323] hover:bg-[#b91c1c]">
            <Sparkles className="h-4 w-4 mr-2" />
            Get help with timzzi Assistant
          </Button>
        </div>

        {/* Hire a local pro */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hire a local pro today</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {projectCategories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="flex flex-col items-center gap-3 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-gray-700" />
                </div>
                <span className="text-sm font-medium text-center text-gray-900">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Make your home your happier place */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Make your home your happier place</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl font-bold">
                    {project.number}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                  <Link
                    href={project.link}
                    className="inline-block mt-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                  >
                    {project.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
