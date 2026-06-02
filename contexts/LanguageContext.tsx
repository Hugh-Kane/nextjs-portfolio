'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ja'

interface LanguageContextType {
  currentLanguage: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')

  useEffect(() => {
    if (typeof window != 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
        setCurrentLanguage(savedLanguage)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', currentLanguage)
  }, [currentLanguage])

  function toggleLanguage() {
    setCurrentLanguage((prev) => (prev === 'en' ? 'ja' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
