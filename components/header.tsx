"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoginModal } from "./login-modal"
import { SignupModal } from "./signup-modal"
import { CategoryDropdown } from "./category-dropdown"
import Link from "next/link"
import Image from "next/image"

const restaurantCategories = [
  { name: "Takeout", slug: "Takeout" },
  { name: "Delivery", slug: "Delivery" },
  { name: "Hot & Trendy", slug: "Hot & Trendy" },
  { name: "New Restaurants", slug: "New Restaurants" },
  { name: "Breakfast & Brunch", slug: "Breakfast & Brunch" },
  { name: "Lunch", slug: "Lunch" },
  { name: "Dinner", slug: "Dinner" },
  { name: "Coffee & Cafes", slug: "Coffee & Cafes" },
  { name: "Pizza", slug: "Pizza" },
  { name: "Chinese", slug: "Chinese" },
  { name: "Mexican", slug: "Mexican" },
  { name: "Bakeries", slug: "Bakeries" },
  { name: "Italian", slug: "Italian" },
  { name: "Food Trucks", slug: "Food Trucks" },
  { name: "Sports Bars & Pubs", slug: "Sports Bars & Pubs" },
]

const homeGardenCategories = [
  { name: "Contractors & Handymen", slug: "Contractors & Handymen" },
  { name: "Plumbers", slug: "Plumbers" },
  { name: "Electricians", slug: "Electricians" },
  { name: "Heating & Air Conditioning", slug: "Heating & Air Conditioning" },
  { name: "Appliances and Repair", slug: "Appliances and Repair" },
  { name: "Roofing", slug: "Roofing" },
  { name: "Locksmiths", slug: "Locksmiths" },
  { name: "Painters", slug: "Painters" },
  { name: "Landscaping", slug: "Landscaping" },
  { name: "Nurseries & Gardening", slug: "Nurseries & Gardening" },
  { name: "Florists", slug: "Florists" },
  { name: "Tree Services", slug: "Tree Services" },
  { name: "Home Cleaning", slug: "Home Cleaning" },
  { name: "Furniture Stores", slug: "Furniture Stores" },
  { name: "Movers", slug: "Movers" },
]

const autoServicesCategories = [
  { name: "Auto Repair", slug: "Auto Repair" },
  { name: "Body Shops", slug: "Body Shops" },
  { name: "Oil Change", slug: "Oil Change" },
  { name: "Tires", slug: "Tires" },
  { name: "Towing", slug: "Towing" },
  { name: "Car Wash", slug: "Car Wash" },
  { name: "Auto Detailing", slug: "Auto Detailing" },
  { name: "Parking", slug: "Parking" },
  { name: "Car Dealers", slug: "Car Dealers" },
  { name: "Junkyards", slug: "Junkyards" },
]

const healthMedicalCategories = [
  { name: "Dentists", slug: "Dentists" },
  { name: "Doctors", slug: "Doctors" },
  { name: "Chiropractors", slug: "Chiropractors" },
  { name: "Optometrists", slug: "Optometrists" },
  { name: "Dermatologists", slug: "Dermatologists" },
  { name: "Podiatrists", slug: "Podiatrists" },
  { name: "Massage", slug: "Massage" },
  { name: "Hair Salons", slug: "Hair Salons" },
  { name: "Nail Salons", slug: "Nail Salons" },
  { name: "Barbers", slug: "Barbers" },
  { name: "Spas", slug: "Spas" },
  { name: "Physical Therapy", slug: "Physical Therapy" },
]

const moreCategories = [
  { name: "Things to Do", slug: "Things to Do" },
  { name: "Kids Activities & Camps", slug: "Kids Activities & Camps" },
  { name: "Venues & Events", slug: "Venues & Events" },
  { name: "Churches", slug: "Churches" },
  { name: "Shopping Malls", slug: "Shopping Malls" },
  { name: "Bookstores", slug: "Bookstores" },
  { name: "Mini Golf", slug: "Mini Golf" },
  { name: "Bowling", slug: "Bowling" },
  { name: "Hotels", slug: "Hotels" },
  { name: "Taxis", slug: "Taxis" },
  { name: "Bike Rentals", slug: "Bike Rentals" },
  { name: "Campgrounds", slug: "Campgrounds" },
  { name: "Beaches", slug: "Beaches" },
  { name: "Swimming Pools", slug: "Swimming Pools" },
  { name: "Bars & Nightlife", slug: "Bars & Nightlife" },
  { name: "Dry Cleaning", slug: "Dry Cleaning" },
  { name: "Laundromats", slug: "Laundromats" },
  { name: "Thrift Stores", slug: "Thrift Stores" },
  { name: "Tailors & Alterations", slug: "Tailors & Alterations" },
  { name: "Apartments", slug: "Apartments" },
  { name: "Junk Removal", slug: "Junk Removal" },
  { name: "Gyms", slug: "Gyms" },
  { name: "Yoga & Pilates", slug: "Yoga & Pilates" },
  { name: "Pet Groomers", slug: "Pet Groomers" },
  { name: "Banks & Credit Unions", slug: "Banks & Credit Unions" },
  { name: "Real Estate Agents", slug: "Real Estate Agents" },
]

export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const switchToSignup = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }

  const switchToLogin = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }

  return (
    <>
      <header className="bg-white border-b">
        {/* Top Navigation */}
        <div className="border-b">
          <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center gap-4 flex-1">
              <Link href="/" className="flex items-center">
                <Image src="/timzzi-logo.png" alt="timzzi" width={120} height={48} className="h-12 w-auto" />
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl flex gap-2">
                <div className="flex-1 flex">
                  <Input placeholder="tacos, cheap dinner, Max's" className="rounded-r-none border-r-0 h-10" />
                  <Input placeholder="San Francisco, CA" className="rounded-l-none w-64 h-10" />
                </div>
                <Link href="/search">
                  <Button className="bg-[#d32323] hover:bg-[#b91e1e] h-10 px-6">
                    <Search className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center gap-4 ml-4">
              <Link href="/business" className="text-sm hover:underline flex items-center gap-1">
                timzzi for Business
              </Link>
              <Link href="/writeareview" className="text-sm hover:underline">
                Write a Review
              </Link>
              <Link href="/projects" className="text-sm hover:underline">
                Start a Project
              </Link>
              <button onClick={() => setIsLoginModalOpen(true)} className="text-sm hover:underline">
                Log In
              </button>
              <Button
                onClick={() => setIsSignupModalOpen(true)}
                className="bg-[#d32323] hover:bg-[#b91e1e] text-sm h-9"
              >
                Sign Up
              </Button>
            </nav>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="max-w-[1280px] mx-auto px-4">
          <nav className="flex items-center gap-6 text-sm">
            <CategoryDropdown title="Restaurants" items={restaurantCategories} columns={2} />
            <CategoryDropdown title="Home & Garden" items={homeGardenCategories} columns={2} />
            <CategoryDropdown title="Auto Services" items={autoServicesCategories} columns={2} />
            <CategoryDropdown title="Health & Medical" items={healthMedicalCategories} columns={2} />
            <CategoryDropdown title="More & Automotive" items={moreCategories} columns={3} />
          </nav>
        </div>
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={switchToSignup}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={switchToLogin}
      />
    </>
  )
}
