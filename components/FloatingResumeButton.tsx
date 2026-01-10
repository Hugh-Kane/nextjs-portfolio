'use client'

import { useState, useEffect } from 'react'

export default function FloatingResumeButton() {
  // State to track if button should be visible
  const [isVisible, setIsVisible] = useState(false)

  // Set up scroll detection when component loads
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed right-8 bottom-8 z-50 transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
      }`}
    >
      <a
        href="/resume.pdf"
        download
        className="bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Download Resume"
      >
        {/* Download Icon SVG */}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Resume</span>
      </a>
    </div>
  )
}
