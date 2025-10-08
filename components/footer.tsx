export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t py-12">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-[#666]">
              <li>
                <a href="#" className="hover:underline">
                  About timzzi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Content Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ad Choices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Your Privacy Choices
                </a>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-bold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm text-[#666]">
              <li>
                <a href="/projects" className="hover:underline">
                  timzzi Project Cost Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Talk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  RSS
                </a>
              </li>
            </ul>
          </div>

          {/* timzzi for Business */}
          <div>
            <h3 className="font-bold mb-4">timzzi for Business</h3>
            <ul className="space-y-2 text-sm text-[#666]">
              <li>
                <a href="/business" className="hover:underline">
                  timzzi for Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Owner Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Claim your Business Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertise on timzzi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi for Restaurant Owners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi Guest Manager
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Success
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marketing & Advertising Agencies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi Data for B2B
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  timzzi Data for B2C
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Agents AI
                </a>
              </li>
            </ul>
          </div>

          {/* Languages & Cities */}
          <div>
            <h3 className="font-bold mb-4">Languages</h3>
            <ul className="space-y-2 text-sm text-[#666] mb-6">
              <li>
                <a href="#" className="hover:underline">
                  English
                </a>
              </li>
            </ul>

            <h3 className="font-bold mb-4">Cities</h3>
            <ul className="space-y-2 text-sm text-[#666]">
              <li>
                <a href="#" className="hover:underline">
                  Explore City
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-xs text-[#666] text-center">
          Copyright © 2004–2025 timzzi Inc. timzzi,{" "}
          <span className="inline-flex items-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#d32323] mx-1">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18L17.82 7 12 10.82 6.18 7 12 4.18zM6 8.82l5 3.12v6.24l-5-3.12V8.82zm7 9.36v-6.24l5-3.12v6.24l-5 3.12z" />
            </svg>
          </span>
          , and related marks are registered trademarks of timzzi.
        </div>
      </div>
    </footer>
  )
}
