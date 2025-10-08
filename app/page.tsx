import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RecentActivity } from "@/components/recent-activity"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RecentActivity />
      <Categories />
      <Footer />
    </div>
  )
}
