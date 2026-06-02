'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { currentLanguage, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      aria-label="Toggle language"
    >
      <span
        className={
          currentLanguage === 'en'
            ? 'text-primary-500 font-semibold'
            : 'text-gray-400 dark:text-gray-500'
        }
      >
        EN
      </span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span
        className={
          currentLanguage === 'ja'
            ? 'text-primary-500 font-semibold'
            : 'text-gray-400 dark:text-gray-500'
        }
      >
        日本語
      </span>
    </button>
  )
}
