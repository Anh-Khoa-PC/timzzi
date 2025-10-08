import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1920&query=beautiful+landscaped+lawn+garden+with+green+grass+and+flower+beds)",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1280px] mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-6 text-balance">
            Go ahead and plant
            <br />
            roots
          </h1>
          <Button className="bg-[#d32323] hover:bg-[#b91e1e] text-white px-6 h-11">
            <Leaf className="w-5 h-5 mr-2" />
            Landscaping
          </Button>
        </div>
      </div>

      {/* Photo Credit */}
      <div className="absolute bottom-4 left-4 text-white text-xs">
        Landscaping by <span className="underline">Martin West</span> of <span className="underline">Martin W.</span>
      </div>
    </section>
  )
}
