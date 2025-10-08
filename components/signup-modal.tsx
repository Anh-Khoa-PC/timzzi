"use client"
import { X, User, Mail } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[380px] bg-white rounded-lg shadow-xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-gray-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-2">Sign up for timzzi</h2>
          <p className="text-center text-gray-600 text-sm mb-4">Connect with great local businesses</p>

          {/* Terms Text */}
          <p className="text-xs text-center text-gray-600 mb-6">
            By continuing, you agree to timzzi's{" "}
            <a href="#" className="text-[#0073bb] hover:underline">
              Terms of Service
            </a>{" "}
            and acknowledge timzzi's{" "}
            <a href="#" className="text-[#0073bb] hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Social Signup Buttons */}
          <div className="space-y-3">
            {/* Google Button - Logo only */}
            <button className="w-full h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>

            {/* Apple Button */}
            <button className="w-full h-12 border border-gray-300 rounded flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm font-medium">Continue with Apple</span>
            </button>

            {/* Email Button */}
            <button className="w-full h-12 border border-gray-300 rounded flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium">Continue with email</span>
            </button>
          </div>

          {/* Login link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-700">
              Already on timzzi?{" "}
              <button onClick={onSwitchToLogin} className="text-[#0073bb] font-semibold hover:underline">
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
