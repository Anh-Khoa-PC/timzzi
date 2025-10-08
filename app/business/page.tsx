import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusinessContent } from "@/components/business-content"

export default function BusinessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BusinessContent />
      <Footer />
    </div>
  )
}
