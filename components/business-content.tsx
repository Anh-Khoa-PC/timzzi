import { Button } from "@/components/ui/button"
import { Check, Users, Star, BarChart3 } from "lucide-react"

export function BusinessContent() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d32323] to-[#a01818] text-white py-20">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Grow your business with timzzi</h1>
            <p className="text-xl mb-8 text-white/90">
              Connect with millions of customers looking for businesses like yours
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-[#d32323] hover:bg-gray-100">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why businesses choose timzzi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d32323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#d32323]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reach New Customers</h3>
              <p className="text-gray-600">Get discovered by millions of people searching for businesses like yours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d32323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#d32323]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Your Reputation</h3>
              <p className="text-gray-600">Respond to reviews and showcase what makes your business special</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d32323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#d32323]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Your Performance</h3>
              <p className="text-gray-600">Get insights on customer views, leads, and engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">
                $0<span className="text-lg text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Business page</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Respond to reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Add photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic analytics</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg p-8 border-2 border-[#d32323] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d32323] text-white px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $99<span className="text-lg text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Free</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Featured placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Customer messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#d32323] hover:bg-[#a01818]">Start Free Trial</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-location support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of businesses already on timzzi</p>
          <Button size="lg" className="bg-[#d32323] hover:bg-[#a01818]">
            Claim Your Free Business Page
          </Button>
        </div>
      </section>
    </div>
  )
}
