import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusinessDetail } from "@/components/business-detail"

export default function BusinessPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <BusinessDetail slug={params.slug} />
      <Footer />
    </div>
  )
}
